import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  RotateCcw,
  Monitor,
  Sparkles,
} from 'lucide-react';
import { ASSETS } from '../data';

export default function Showreel() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(35); // Simulated progress point
  const [showNotification, setShowNotification] = useState(false);

  // Toggle playback simulation
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  const handleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <section
      id="showreel"
      className="py-24 md:py-32 bg-black relative overflow-hidden px-6 md:px-12"
    >
      {/* Background radial spotlight glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-linear-to-r from-luxury-gold/5 via-white/1 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Title */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-luxury-gold font-display font-medium">
            2026 Directors Cut
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white font-normal tracking-wide">
            Watch Our Storytelling In Action
          </h2>
          <p className="text-sm text-luxury-silver font-light">
            An immersive 2-minute visual journey outlining our production depth
            across four continents. Let the pictures talk.
          </p>
        </div>

        {/* Widescreen Cinema Board */}
        <div className="relative max-w-5xl mx-auto rounded-none overflow-hidden border border-white/10 shadow-2xl bg-luxury-charcoal group">
          {/* Main Visual Screen */}
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            {/* Ambient Backlight Glow behind the screen - responsive to state */}
            <div
              className={`absolute inset-0 bg-luxury-gold/5 transition-opacity duration-1000 ${
                isPlaying ? 'opacity-30 animate-pulse' : 'opacity-0'
              }`}
            />

            {/* Cinematic Background Image representing the frame */}
            <img
              id="showreel-video-fallback"
              src={ASSETS.heroResort}
              alt="RF Media Production Showreel Frame"
              referrerPolicy="no-referrer"
              className={`w-full h-full object-cover transition-transform duration-[8000ms] brightness-[0.7] ${
                isPlaying ? 'scale-105' : 'scale-100'
              }`}
            />

            {/* Dark screen overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

            {/* Big center luxury Play button */}
            <AnimatePresence>
              {!isPlaying && (
                <motion.button
                  id="showreel-play-center-btn"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  onClick={togglePlay}
                  className="absolute inset-0 m-auto w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/10 hover:bg-luxury-gold text-white hover:text-luxury-charcoal border border-white/20 hover:border-luxury-gold transition-all duration-500 shadow-2xl flex items-center justify-center group/play cursor-pointer z-20"
                >
                  <div className="absolute inset-0 rounded-full bg-white/5 animate-ping opacity-75 group-hover/play:bg-luxury-gold/20" />
                  <Play size={24} className="fill-current translate-x-1" />
                </motion.button>
              )}
            </AnimatePresence>

            {/* Playing Status Overlay with Soundwaves */}
            {isPlaying && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm z-10 p-6 text-center space-y-6">
                <div className="flex items-center gap-1.5 h-10">
                  <div className="w-1 bg-luxury-gold h-4 rounded-full animate-[bounce_1s_infinite_100ms]" />
                  <div className="w-1 bg-luxury-gold h-8 rounded-full animate-[bounce_1s_infinite_300ms]" />
                  <div className="w-1 bg-luxury-gold h-12 rounded-full animate-[bounce_1s_infinite_500ms]" />
                  <div className="w-1 bg-luxury-gold h-6 rounded-full animate-[bounce_1s_infinite_200ms]" />
                  <div className="w-1 bg-luxury-gold h-10 rounded-full animate-[bounce_1s_infinite_400ms]" />
                  <div className="w-1 bg-luxury-gold h-4 rounded-full animate-[bounce_1s_infinite_100ms]" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-display uppercase tracking-[0.3em] text-luxury-gold flex items-center justify-center gap-1.5">
                    <Sparkles size={12} /> Ambient Streaming Active
                  </p>
                  <h4 className="text-lg font-serif text-white font-medium">
                    RF Media Productions Showreel (Director's Cut)
                  </h4>
                </div>
                <button
                  id="showreel-pause-overlay-btn"
                  onClick={togglePlay}
                  className="px-6 py-2.5 bg-white/10 hover:bg-white/20 border border-white/10 text-xs font-display uppercase tracking-widest text-white rounded-sm transition-colors"
                >
                  Pause Screening
                </button>
              </div>
            )}

            {/* Tiny live overlay tags */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="text-[9px] font-display uppercase tracking-widest bg-black/40 text-[#B8B8B8] px-2.5 py-1 rounded-sm border border-white/5 backdrop-blur-sm">
                4K HDR MASTER
              </span>
            </div>
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <span className="text-[9px] font-display uppercase tracking-widest bg-red-600/20 text-red-500 px-2.5 py-1 rounded-sm border border-red-500/10 font-bold backdrop-blur-sm">
                DOLBY ATMOS
              </span>
            </div>
          </div>

          {/* Cinematic Controller Bar */}
          <div className="p-4 bg-[#0B0B0B] border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
            {/* Play/Pause */}
            <div className="flex items-center gap-4">
              <button
                id="showreel-play-btn"
                onClick={togglePlay}
                className="text-white hover:text-luxury-gold transition-colors"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <Pause size={18} />
                ) : (
                  <Play size={18} className="fill-current" />
                )}
              </button>

              {/* Progress Slider bar */}
              <div className="w-32 sm:w-64 bg-white/10 h-[3px] rounded-full relative cursor-pointer group/progress">
                <div
                  className="bg-luxury-gold h-full rounded-full transition-all"
                  style={{ width: `${isPlaying ? '65%' : '35%'}` }}
                />
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white opacity-0 group-hover/progress:opacity-100 transition-opacity"
                  style={{ left: `calc(${isPlaying ? '65%' : '35%'} - 5px)` }}
                />
              </div>

              <span className="text-[10px] font-mono text-[#B8B8B8] select-none">
                {isPlaying ? '01:14' : '00:35'} / 02:00
              </span>
            </div>

            {/* Mute and Screen Settings */}
            <div className="flex items-center gap-4">
              <button
                id="showreel-mute-btn"
                onClick={handleMute}
                className="text-white hover:text-luxury-gold transition-colors"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>

              <button
                id="showreel-maximize-btn"
                onClick={() => {
                  alert('Immersive Cinema View maximized. (Simulation)');
                }}
                className="text-white hover:text-luxury-gold transition-colors"
                aria-label="Fullscreen"
              >
                <Maximize2 size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
