import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  // Auto-scroll loop
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000); // Rotate every 8 seconds
    return () => clearInterval(interval);
  }, []);

  const active = TESTIMONIALS[activeIndex];

  return (
    <section
      id="testimonials"
      className="py-24 md:py-32 bg-[#141414] relative overflow-hidden px-6 md:px-12 border-t border-white/5"
    >
      {/* Decorative vertical background grids */}
      <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-white/[0.03] hidden xl:block" />
      <div className="absolute left-1/3 top-0 bottom-0 w-[1px] bg-white/[0.03] hidden xl:block" />

      <div className="max-w-5xl mx-auto space-y-16 relative z-10">
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-luxury-gold font-display font-medium">
            Acclaim
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white font-normal tracking-wide">
            Client Testimonials
          </h2>
          <p className="text-sm text-luxury-silver font-light">
            Read critical acclaim from the global brand directors, resort owners, and master curators who trust our cinematic direction.
          </p>
        </div>

        {/* Carousel Slider */}
        <div className="relative bg-[#1A1A1A] rounded-none border border-white/[0.05] p-8 md:p-16 shadow-2xl flex flex-col md:flex-row items-center gap-10 md:gap-14 min-h-[380px]">
          {/* Quote mark decoration */}
          <div className="absolute top-8 left-8 text-white/[0.02] select-none pointer-events-none">
            <Quote size={120} className="fill-current text-white/[0.02]" />
          </div>

          {/* Reviewer Headshot & Video Badging */}
          <div className="relative shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-none overflow-hidden border border-white/15 p-1 bg-black group">
            <div className="w-full h-full rounded-none overflow-hidden relative">
              <img
                id={`reviewer-avatar-${active.id}`}
                src={active.image}
                alt={active.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover brightness-[0.9]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              {/* Simulated "Video Testimonial" Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors cursor-pointer">
                <div className="w-9 h-9 rounded-none bg-luxury-gold/90 text-luxury-charcoal flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-transform border border-luxury-gold">
                  <Star size={12} className="fill-current text-luxury-charcoal" />
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Statement */}
          <div className="flex-1 space-y-6 text-center md:text-left relative z-10">
            {/* Stars */}
            <div className="flex items-center justify-center md:justify-start gap-1.5 text-luxury-gold">
              {[...Array(active.rating)].map((_, i) => (
                <Star key={i} size={14} className="fill-current" />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                id={`testimonial-bubble-${active.id}`}
                key={active.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                <p className="text-sm md:text-lg text-white font-serif italic font-light leading-relaxed">
                  "{active.review}"
                </p>

                <div>
                  <h4 className="text-base font-display text-white font-semibold tracking-wide">
                    {active.name}
                  </h4>
                  <p className="text-xs font-display uppercase tracking-widest text-luxury-gold mt-1">
                    {active.title} • <span className="text-white/60 font-medium">{active.company}</span>
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Arrow Controllers */}
          <div className="absolute bottom-6 right-6 flex items-center gap-2">
            <button
              id="testimonial-prev-btn"
              onClick={handlePrev}
              className="w-10 h-10 rounded-none border border-white/10 hover:border-luxury-gold text-white hover:text-luxury-gold transition-colors flex items-center justify-center bg-black/20"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              id="testimonial-next-btn"
              onClick={handleNext}
              className="w-10 h-10 rounded-none border border-white/10 hover:border-luxury-gold text-white hover:text-luxury-gold transition-colors flex items-center justify-center bg-black/20"
              aria-label="Next Testimonial"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Indicator dots */}
        <div className="flex items-center justify-center gap-2.5">
          {TESTIMONIALS.map((_, i) => (
            <button
              id={`testimonial-dot-${i}`}
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-1 transition-all duration-300 ${
                activeIndex === i ? "w-6 bg-luxury-gold" : "w-1.5 bg-white/20"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
