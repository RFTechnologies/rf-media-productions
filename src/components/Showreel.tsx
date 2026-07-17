import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  RotateCcw,
} from 'lucide-react';
import { ASSETS } from '../data';

const VIDEO_URL =
  'https://res.cloudinary.com/dzmrdbwqh/video/upload/v1784197396/RF%20Media%20Production/Productioni%20Video.mp4';

export default function Showreel() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = async () => {
    const video = videoRef.current;

    if (!video) return;

    try {
      if (video.paused) {
        await video.play();
      } else {
        video.pause();
      }
    } catch (error) {
      console.error('Unable to play the showreel video:', error);
    }
  };

  const handleMute = () => {
    const video = videoRef.current;

    if (!video) return;

    const nextMutedState = !video.muted;
    video.muted = nextMutedState;
    setIsMuted(nextMutedState);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;

    if (!video || !video.duration) return;

    setCurrentTime(video.currentTime);
    setProgress((video.currentTime / video.duration) * 100);
  };

  const handleLoadedMetadata = () => {
    const video = videoRef.current;

    if (!video) return;

    setDuration(video.duration);
    setCurrentTime(video.currentTime);
    setProgress(
      video.duration ? (video.currentTime / video.duration) * 100 : 0,
    );
  };

  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;

    if (!video || !video.duration) return;

    const nextProgress = Number(event.target.value);
    const nextTime = (nextProgress / 100) * video.duration;

    video.currentTime = nextTime;
    setCurrentTime(nextTime);
    setProgress(nextProgress);
  };

  const restartVideo = async () => {
    const video = videoRef.current;

    if (!video) return;

    video.currentTime = 0;
    setCurrentTime(0);
    setProgress(0);

    try {
      await video.play();
    } catch (error) {
      console.error('Unable to restart the showreel video:', error);
    }
  };

  const openFullscreen = async () => {
    const video = videoRef.current;

    if (!video) return;

    try {
      if (video.requestFullscreen) {
        await video.requestFullscreen();
      } else {
        const safariVideo = video as HTMLVideoElement & {
          webkitEnterFullscreen?: () => void;
        };

        safariVideo.webkitEnterFullscreen?.();
      }
    } catch (error) {
      console.error('Unable to enter fullscreen mode:', error);
    }
  };

  const formatTime = (time: number) => {
    if (!Number.isFinite(time)) return '00:00';

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  };

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = isMuted;
  }, [isMuted]);

  return (
    <section
      id="showreel"
      className="relative overflow-hidden bg-black px-6 py-24 md:px-12 md:py-32"
    >
      {/* Background radial spotlight glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-r from-luxury-gold/5 via-white/1 to-transparent blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl space-y-12">
        {/* Title */}
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <span className="font-display text-luxury-gold text-xs font-medium tracking-[0.3em] uppercase">
            2026 Director&apos;s Cut
          </span>

          <h2 className="font-serif text-3xl font-normal tracking-wide text-white sm:text-5xl">
            Watch Our Storytelling In Action
          </h2>

          <p className="text-luxury-silver text-sm font-light">
            An immersive visual journey outlining our production depth across
            four continents. Let the pictures talk.
          </p>
        </div>

        {/* Widescreen Cinema Board */}
        <div className="group relative mx-auto max-w-5xl overflow-hidden rounded-none border border-white/10 bg-luxury-charcoal shadow-2xl">
          {/* Main Video Screen */}
          <div className="relative aspect-video w-full overflow-hidden">
            <div
              className={`pointer-events-none absolute inset-0 z-10 bg-luxury-gold/5 transition-opacity duration-1000 ${
                isPlaying ? 'animate-pulse opacity-30' : 'opacity-0'
              }`}
            />

            <video
              ref={videoRef}
              id="showreel-video"
              className="h-full w-full object-cover"
              poster={ASSETS.poster}
              preload="metadata"
              playsInline
              muted={isMuted}
              onClick={togglePlay}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => {
                setIsPlaying(false);
                setCurrentTime(0);
                setProgress(0);
              }}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
            >
              <source src={VIDEO_URL} type="video/mp4" />

              Your browser does not support HTML5 video. You can watch the
              video directly using the link below.
            </video>

            {/* Dark screen overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

            {/* Center play button */}
            <AnimatePresence>
              {!isPlaying && (
                <motion.button
                  id="showreel-play-center-btn"
                  type="button"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  onClick={togglePlay}
                  className="group/play absolute inset-0 z-20 m-auto flex h-20 w-20 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-2xl transition-all duration-500 hover:border-luxury-gold hover:bg-luxury-gold hover:text-luxury-charcoal sm:h-24 sm:w-24"
                  aria-label="Play showreel"
                >
                  <div className="absolute inset-0 animate-ping rounded-full bg-white/5 opacity-75 group-hover/play:bg-luxury-gold/20" />

                  <Play
                    size={24}
                    className="translate-x-0.5 fill-current"
                  />
                </motion.button>
              )}
            </AnimatePresence>

            {/* Video badges */}
            <div className="pointer-events-none absolute top-4 left-4 z-20 flex items-center gap-2">
              <span className="rounded-sm border border-white/5 bg-black/40 px-2.5 py-1 font-display text-[9px] tracking-widest text-[#B8B8B8] uppercase backdrop-blur-sm">
                4K HDR Master
              </span>
            </div>

            <div className="pointer-events-none absolute top-4 right-4 z-20 flex items-center gap-2">
              <span className="rounded-sm border border-red-500/10 bg-red-600/20 px-2.5 py-1 font-display text-[9px] font-bold tracking-widest text-red-500 uppercase backdrop-blur-sm">
                Dolby Atmos
              </span>
            </div>
          </div>

          {/* Custom Video Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/5 bg-[#0B0B0B] p-4">
            <div className="flex min-w-0 flex-1 items-center gap-4">
              <button
                id="showreel-play-btn"
                type="button"
                onClick={togglePlay}
                className="shrink-0 text-white transition-colors hover:text-luxury-gold"
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
              >
                {isPlaying ? (
                  <Pause size={18} />
                ) : (
                  <Play size={18} className="fill-current" />
                )}
              </button>

              <button
                type="button"
                onClick={restartVideo}
                className="shrink-0 text-white transition-colors hover:text-luxury-gold"
                aria-label="Restart video"
              >
                <RotateCcw size={17} />
              </button>

              {/* Progress slider */}
              <div className="relative min-w-[100px] flex-1 sm:max-w-md">
                <div className="pointer-events-none absolute top-1/2 left-0 h-[3px] w-full -translate-y-1/2 rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-luxury-gold"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <input
                  type="range"
                  min="0"
                  max="100"
                  step="0.1"
                  value={progress}
                  onChange={handleSeek}
                  className="relative z-10 h-5 w-full cursor-pointer opacity-0"
                  aria-label="Video progress"
                />

                <div
                  className="pointer-events-none absolute top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow"
                  style={{ left: `${progress}%` }}
                />
              </div>

              <span className="shrink-0 font-mono text-[10px] text-[#B8B8B8] select-none">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <button
                id="showreel-mute-btn"
                type="button"
                onClick={handleMute}
                className="text-white transition-colors hover:text-luxury-gold"
                aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>

              <button
                id="showreel-maximize-btn"
                type="button"
                onClick={openFullscreen}
                className="text-white transition-colors hover:text-luxury-gold"
                aria-label="Open video in fullscreen"
              >
                <Maximize2 size={16} />
              </button>
            </div>
          </div>

          {/* Direct video link */}
          <div className="border-t border-white/5 bg-black/80 px-4 py-3 text-center">
            <a
              href={VIDEO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-[10px] tracking-[0.2em] text-luxury-silver uppercase transition-colors hover:text-luxury-gold"
            >
              Open video in a new tab
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}