import { motion } from "motion/react";
import { PROCESS_STEPS } from "../data";

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="py-24 md:py-32 bg-[#0B0B0B] relative overflow-hidden px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-luxury-gold font-display font-medium">
            Our Pipeline
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white font-normal tracking-wide">
            The Production Journey
          </h2>
          <p className="text-sm text-luxury-silver font-light max-w-xl mx-auto">
            Our highly structured methodology ensures seamless operations from the initial moodboard through final global distribution.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[1px] bg-white/[0.06] -translate-x-1/2 hidden md:block" />
          <div className="absolute left-4 top-4 bottom-4 w-[1px] bg-white/[0.06] md:hidden" />

          {/* Steps */}
          <div className="space-y-12 md:space-y-20">
            {PROCESS_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  id={`process-step-row-${step.step}`}
                  key={step.step}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Timeline Node Point */}
                  <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 w-8 h-8 rounded-none bg-[#141414] border border-white/20 group-hover:border-luxury-gold flex items-center justify-center z-10 transition-colors duration-500">
                    <span className="text-[10px] font-mono text-luxury-gold font-semibold">
                      {step.step}
                    </span>
                  </div>

                  {/* Text Content Box */}
                  <motion.div
                    id={`process-card-${step.step}`}
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className={`w-full md:w-[45%] ml-12 md:ml-0 p-8 rounded-none bg-[#141414] border border-white/[0.04] hover:border-luxury-gold/10 transition-all duration-300 relative group`}
                  >
                    {/* Tiny triangle points pointing towards timeline */}
                    <div
                      className={`absolute top-4 w-3 h-3 bg-[#141414] border-t border-l border-white/[0.04] rotate-45 hidden md:block ${
                        isEven ? "-right-1.5 border-r border-t" : "-left-1.5"
                      }`}
                    />

                    <div className="space-y-4">
                      <span className="text-[10px] font-display uppercase tracking-[0.25em] text-luxury-gold/80 block">
                        Phase {step.step}
                      </span>
                      <h3 className="text-xl font-serif text-white group-hover:text-luxury-gold transition-colors font-medium">
                        {step.title}
                      </h3>
                      <p className="text-xs md:text-sm text-luxury-silver font-light leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
