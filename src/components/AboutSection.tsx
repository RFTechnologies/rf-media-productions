import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import { ASSETS, STATISTICS } from "../data";
import { Camera, Compass, Award, Play } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-[#0B0B0B] relative overflow-hidden px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Left Column: Visual frame */}
        <motion.div
          id="about-visual-container"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative group min-h-96"
        >
          {/* Accent thin double-border frame */}
          <div className="absolute -inset-4 border border-white/5 rounded-none pointer-events-none group-hover:border-luxury-gold/20 transition-colors duration-500" />
          <div className="absolute inset-0 bg-[#1A1A1A] rounded-none overflow-hidden border border-white/10 shadow-2xl">
            <img
              id="about-visual-image"
              src={ASSETS.aboutFilm}
              alt="RF Media Production behind the scenes set"
              referrerPolicy="no-referrer"
              className="!w-full !h-full   object-cover aspect-[4/5] transform group-hover:scale-105 transition-transform duration-700 brightness-[0.9]"
            />
          </div>

          {/* Floating artistic detail */}
          <div className="absolute -bottom-6 -right-6 bg-[#141414] border border-white/10 p-5 rounded-none shadow-xl hidden sm:block">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-none bg-luxury-gold/10 flex items-center justify-center text-luxury-gold border border-luxury-gold/20">
                <Camera size={18} />
              </div>
              <div>
                <span className="text-[10px] font-display uppercase tracking-[0.2em] text-[#B8B8B8] block">
                  Capturing Grade
                </span>
                <span className="text-xs font-display uppercase tracking-widest text-white font-semibold">
                  8K RED & ARRI
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Narrative and Stats */}
        <div className="lg:col-span-7 space-y-10">
          <div className="space-y-4">
            <motion.span
              id="about-badge"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-[0.3em] text-luxury-gold font-display font-medium block"
            >
              The Media House
            </motion.span>
            <motion.h2
              id="about-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-5xl font-serif text-white font-normal leading-tight tracking-wide"
            >
              We Create Stories <br />
              <span className="italic font-light text-luxury-silver">People Remember.</span>
            </motion.h2>
            <motion.p
              id="about-body-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-sm md:text-base text-luxury-silver font-light leading-relaxed max-w-2xl"
            >
              RF Media Productions is a full-service media house focused on creating premium visual experiences for hospitality, travel, food and commercial brands.
            </motion.p>
            <motion.p
              id="about-body-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-xs md:text-sm text-luxury-silver/75 font-light leading-relaxed max-w-2xl"
            >
              Based at the intersection of cinematic vision and digital precision, our work captures the raw sensory details—from the quiet mornings in remote luxury overwater bungalows to the intense fire-lit environments of world-renowned culinary kitchens. We translate environments into feelings, and feelings into measurable audience engagement.
            </motion.p>
          </div>

          {/* Statistics Block */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-white/5">
            {STATISTICS.map((stat, idx) => (
              <div key={idx}>
                <CounterBlock stat={stat} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CounterBlock({ stat }: { stat: typeof STATISTICS[0] }) {
  const [count, setCount] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = stat.value;
      if (start === end) return;

      const duration = 1500; // 1.5 seconds total counting time
      const incrementTime = Math.max(Math.floor(duration / end), 12);

      const timer = setInterval(() => {
        start += Math.ceil(end / 40); // larger steps for higher numbers
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, stat.value]);

  return (
    <div ref={containerRef} className="space-y-1">
      <div className="flex items-baseline text-3xl md:text-4xl font-display font-semibold text-luxury-gold tracking-tight">
        <span>{count}</span>
        <span className="text-white/80 ml-0.5">{stat.suffix}</span>
      </div>
      <p className="text-[10px] md:text-xs font-display tracking-widest uppercase text-luxury-silver/80 font-light leading-snug">
        {stat.label}
      </p>
    </div>
  );
}
