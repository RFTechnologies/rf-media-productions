import { motion } from "motion/react";
import { ArrowRight, Play, Compass, Map } from "lucide-react";
import { ASSETS } from "../data";

interface HeroSectionProps {
  onOpenInquiry: (type: "project" | "call" | "hotel") => void;
  onPlayShowreel: () => void;
}

export default function HeroSection({ onOpenInquiry, onPlayShowreel }: HeroSectionProps) {
  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black px-6 md:px-12"
    >
      {/* Background Cinematic Asset */}
      <div className="absolute inset-0 z-0">
        <motion.img
          id="hero-bg-image"
          src={ASSETS.heroResort}
          alt="Luxury Resort Cinematic Shot"
          referrerPolicy="no-referrer"
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.55 }}
          transition={{ duration: 3.5, ease: "easeOut" }}
          className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.05]"
        />
        {/* Deep vignette cinematic overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/40 to-[#0B0B0B]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/80 via-transparent to-[#0B0B0B]/80" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 mt-16 md:mt-24">
        {/* Accent Label */}
        <motion.div
          id="hero-badge"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="inline-block px-4 py-1.5 border border-luxury-gold/50 text-luxury-gold text-[10px] font-display uppercase tracking-[0.3em] bg-luxury-charcoal/50 backdrop-blur-md"
        >
          Now Premiering: Aman Kyoto Cinematic Reel
        </motion.div>

        {/* Headline */}
        <div className="space-y-4">
          <motion.p
            id="hero-subheadline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-xs md:text-sm font-display uppercase tracking-[0.45em] text-[#B8B8B8]"
          >
            Premium Travel, Hospitality & Brand Storytelling
          </motion.p>

          <motion.h1
            id="hero-headline"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl md:text-9xl font-display text-white tracking-tighter font-black leading-[0.85] uppercase"
          >
            STORIES <br />
            <span className="text-luxury-gold">THAT MOVE</span> <br />
            PEOPLE
          </motion.h1>
        </div>

        {/* Description */}
        <motion.p
          id="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="text-sm md:text-lg text-luxury-silver max-w-2xl mx-auto font-light leading-relaxed tracking-wide"
        >
          RF Media Productions creates cinematic content for hotels, tourism boards, restaurants, luxury brands and businesses looking to stand out.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          id="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <button
            id="hero-btn-project"
            onClick={() => onOpenInquiry("project")}
            className="w-full sm:w-auto px-8 py-4 bg-luxury-gold hover:bg-luxury-gold-hover text-luxury-charcoal font-display text-xs uppercase tracking-[0.25em] font-semibold transition-all rounded-sm shadow-xl shadow-luxury-gold/10 flex items-center justify-center gap-2 group"
          >
            Start A Project
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            id="hero-btn-showreel"
            onClick={onPlayShowreel}
            className="w-full sm:w-auto px-8 py-4 border border-white/10 hover:border-white/30 bg-[#0B0B0B]/60 backdrop-blur-md text-white font-display text-xs uppercase tracking-[0.25em] transition-all rounded-sm flex items-center justify-center gap-3 group"
          >
            <div className="w-6 h-6 bg-white/10 group-hover:bg-luxury-gold/20 group-hover:text-luxury-gold transition-colors flex items-center justify-center rounded-full">
              <Play size={10} className="fill-current text-white group-hover:text-luxury-gold" />
            </div>
            Watch Showreel
          </button>
        </motion.div>
      </div>

      {/* Decorative vertical lines and stats previews */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 cursor-pointer"
           onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
        <span className="text-[10px] font-display uppercase tracking-[0.25em] text-[#B8B8B8] opacity-60">
          Scroll to explore
        </span>
        <motion.div
          id="scroll-indicator"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-[1px] h-10 bg-gradient-to-b from-luxury-silver via-luxury-silver/30 to-transparent"
        />
      </div>

      {/* Left/Right fine lines */}
      <div className="absolute left-12 top-0 bottom-0 w-[1px] bg-white/[0.03] hidden xl:block" />
      <div className="absolute right-12 top-0 bottom-0 w-[1px] bg-white/[0.03] hidden xl:block" />
    </section>
  );
}
