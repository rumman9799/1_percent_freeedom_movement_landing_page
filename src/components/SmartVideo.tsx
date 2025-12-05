import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';

interface SmartVideoProps {
  src: string;
  frameClassName?: string;
  videoClassName?: string;
  autoPlay?: boolean;
  loop?: boolean;
}

// Global video manager to ensure only one video plays at a time during scroll
const videoManager = {
  videos: new Set<HTMLVideoElement>(),
  currentPlaying: null as HTMLVideoElement | null,
  videoComponents: new Map<HTMLVideoElement, () => Promise<void>>(),
  
  register(video: HTMLVideoElement, playFunction: () => Promise<void>) {
    this.videos.add(video);
    this.videoComponents.set(video, playFunction);
  },
  
  unregister(video: HTMLVideoElement) {
    this.videos.delete(video);
    this.videoComponents.delete(video);
    if (this.currentPlaying === video) {
      this.currentPlaying = null;
    }
  },
  
  pauseAllExcept(video: HTMLVideoElement) {
    this.videos.forEach((v) => {
      if (v !== video && !v.paused) {
        v.pause();
      }
    });
    this.currentPlaying = video;
  },
  
  // Trigger the first video in viewport to play
  triggerFirstVideoInView() {
    // Find the first video that's in the viewport
    for (const video of this.videos) {
      const rect = video.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const isInView = rect.top < viewportHeight && rect.bottom > 0;
      
      if (isInView && video.paused) {
        const playFunction = this.videoComponents.get(video);
        if (playFunction) {
          playFunction();
          break;
        }
      }
    }
  },
};

export function SmartVideo({
  src,
  frameClassName = '',
  videoClassName = '',
  autoPlay = true,
  loop = true,
}: SmartVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const userWantsPlayRef = useRef<boolean>(false);
  const isUserControlledRef = useRef<boolean>(false);
  const hasAutoPlayedRef = useRef<boolean>(false);

  const playVideo = async (isAutoPlay = false) => {
    const video = videoRef.current;
    if (!video) return;
    try {
      video.muted = false;
      video.volume = 1;
      
      // If auto-playing (scroll-based), pause other videos first
      if (isAutoPlay && !isUserControlledRef.current) {
        videoManager.pauseAllExcept(video);
      }
      
      await video.play();
      setIsPlaying(true);
      userWantsPlayRef.current = true;
    } catch (error) {
      // Autoplay with sound can be blocked; fall back to paused state
      setIsPlaying(false);
      userWantsPlayRef.current = false;
    }
  };

  const pauseVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    setIsPlaying(false);
  };

  const togglePlayback = () => {
    isUserControlledRef.current = true;
    if (isPlaying) {
      userWantsPlayRef.current = false;
      pauseVideo();
    } else {
      playVideo(false);
    }
  };

  // Register video with manager
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    // Create a stable play function that can be called externally
    const playFunction = async () => {
      if (video && video.paused && !isUserControlledRef.current) {
        await playVideo(true);
      }
    };
    
    videoManager.register(video, playFunction);
    return () => {
      videoManager.unregister(video);
    };
  }, []);

  // Setup video properties and attempt initial auto-play
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    video.muted = false;
    video.volume = 1;
    video.loop = loop;
    
    // Mark that we've set up the video
    hasAutoPlayedRef.current = true;
  }, [loop]);

  // Scroll-based play/pause with IntersectionObserver
  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        // Only auto-control if user hasn't manually interacted
        if (isUserControlledRef.current) return;
        
        if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
          // Video is in view - play it (and pause others)
          if (video.paused) {
            playVideo(true); // Pass true to indicate auto-play
          }
        } else if (!entry.isIntersecting || entry.intersectionRatio < 0.3) {
          // Video is out of view - pause it
          if (!video.paused) {
            pauseVideo();
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      { 
        threshold: [0, 0.3, 0.4, 0.5, 0.7, 1],
        rootMargin: '0px'
      }
    );

    observer.observe(container);
    
    // Manually trigger intersection check immediately for videos already in view
    // This ensures the first video plays on page load
    const triggerInitialCheck = () => {
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const isInView = rect.top < viewportHeight && rect.bottom > 0;
      
      if (isInView) {
        const visibleTop = Math.max(0, rect.top);
        const visibleBottom = Math.min(viewportHeight, rect.bottom);
        const visibleHeight = visibleBottom - visibleTop;
        const intersectionRatio = visibleHeight / rect.height;
        
        // Create a synthetic entry to trigger the handler
        const entry: IntersectionObserverEntry = {
          target: container,
          isIntersecting: intersectionRatio > 0.4,
          intersectionRatio: intersectionRatio,
          boundingClientRect: rect,
          rootBounds: new DOMRect(0, 0, window.innerWidth, viewportHeight),
          intersectionRect: new DOMRect(
            rect.left,
            visibleTop,
            rect.width,
            visibleHeight
          ),
          time: Date.now()
        };
        
        handleIntersection([entry]);
      }
    };
    
    // Try multiple times to catch the video when it's ready
    const timers = [
      setTimeout(triggerInitialCheck, 100),
      setTimeout(triggerInitialCheck, 300),
      setTimeout(triggerInitialCheck, 600),
      setTimeout(triggerInitialCheck, 1000)
    ];
    
    // Also trigger when video is ready
    const onCanPlay = () => {
      triggerInitialCheck();
    };
    video.addEventListener('canplay', onCanPlay);
    video.addEventListener('loadeddata', onCanPlay);
    
    return () => {
      observer.disconnect();
      timers.forEach(timer => clearTimeout(timer));
      video.removeEventListener('canplay', onCanPlay);
      video.removeEventListener('loadeddata', onCanPlay);
    };
  }, []);

  // Reset user control flag after a delay when user interacts
  useEffect(() => {
    if (isUserControlledRef.current) {
      const timer = setTimeout(() => {
        isUserControlledRef.current = false;
      }, 3000); // Reset after 3 seconds of no user interaction
      return () => clearTimeout(timer);
    }
  }, [isPlaying]);

  return (
    <div ref={containerRef} className={`relative ${frameClassName}`}>
      <video
        ref={videoRef}
        src={src}
        playsInline
        className={`w-full h-auto object-cover ${videoClassName}`}
      />

      <button
        type="button"
        onClick={togglePlayback}
        className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-black/60 text-white text-sm font-semibold rounded-full shadow-lg backdrop-blur transition hover:bg-black/80"
      >
        {isPlaying ? (
          <>
            <Pause className="w-4 h-4" />
            Pause
          </>
        ) : (
          <>
            <Play className="w-4 h-4" />
            Play
          </>
        )}
      </button>
    </div>
  );
}

// Export function to trigger first video when modal closes
export function triggerFirstVideo() {
  videoManager.triggerFirstVideoInView();
}

