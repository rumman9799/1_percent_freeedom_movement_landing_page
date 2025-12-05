import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';

interface SmartVideoProps {
  src: string;
  frameClassName?: string;
  videoClassName?: string;
  autoPlay?: boolean;
  loop?: boolean;
}

export function SmartVideo({
  src,
  frameClassName = '',
  videoClassName = '',
  autoPlay = true,
  loop = true,
}: SmartVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(autoPlay);
  const userWantsPlayRef = useRef<boolean>(autoPlay);

  const playVideo = async () => {
    const video = videoRef.current;
    if (!video) return;
    try {
      video.muted = false;
      video.volume = 1;
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
    if (isPlaying) {
      userWantsPlayRef.current = false;
      pauseVideo();
    } else {
      playVideo();
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    video.volume = 1;
    video.autoplay = autoPlay;
    video.loop = loop;

    if (autoPlay) {
      playVideo();
    }
  }, [autoPlay, loop]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            if (!video.paused) {
              pauseVideo();
            }
          } else if (userWantsPlayRef.current) {
            playVideo();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`relative ${frameClassName}`}>
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

