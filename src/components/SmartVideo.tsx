import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';

interface SmartVideoProps {
  src: string;
  frameClassName?: string;
  videoClassName?: string;
  //autoPlay?: boolean;
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
  //autoPlay = false,
  loop = true,
}: SmartVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const userWantsPlayRef = useRef<boolean>(false);

  const playVideo = async (isAutoPlay = false) => {
    const video = videoRef.current;
    if (!video) return;
    try {
      video.muted = false;
      video.volume = 1;
      
      // Pause other videos when this one plays
      videoManager.pauseAllExcept(video);
      
      await video.play();
      setIsPlaying(true);
      if (!isAutoPlay) {
        userWantsPlayRef.current = true;
      }
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
      if (video && video.paused && userWantsPlayRef.current) {
        await playVideo(true);
      }
    };
    
    videoManager.register(video, playFunction);
    return () => {
      videoManager.unregister(video);
    };
  }, []);

  // Setup video properties and ensure paused on load
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    video.muted = false;
    video.volume = 1;
    video.loop = loop;
    video.pause(); // Ensure video is paused on initial load
    setIsPlaying(false);
  }, [loop]);

  // Scroll-based play/pause with IntersectionObserver - only if user wants playback
  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        // Only control playback if user has manually started the video
        if (!userWantsPlayRef.current) return;
        
        if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
          // Video is in view - play it if user wants it playing
          if (video.paused && userWantsPlayRef.current) {
            playVideo(true);
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
    
    return () => {
      observer.disconnect();
    };
  }, []);



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