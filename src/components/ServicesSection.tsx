import { motion } from "motion/react";
import * as LucideIcons from "lucide-react";
import { SERVICES } from "../data";

interface ServicesSectionProps {
  onOpenInquiry: (type: "project" | "call" | "hotel") => void;
}

export default function ServicesSection({ onOpenInquiry }: ServicesSectionProps) {
  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-[#141414] relative px-6 md:px-12"
    >
      {/* Structural visual guidelines */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-luxury-gold font-display font-medium">
            Bespoke Services
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white font-normal tracking-wide">
            Elite Media Capabilities
          </h2>
          <p className="text-sm md:text-base text-luxury-silver font-light max-w-xl mx-auto">
            From single hero commercials to full year marketing suites, we deliver world-class cinematic excellence for premium brands.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
          {SERVICES.map((service, idx) => {
            // Get Lucide Icon dynamically
            const IconComponent = (LucideIcons as any)[service.iconName] || LucideIcons.Sparkles;

            return (
              <motion.div
                id={`service-card-${service.id}`}
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.05, ease: "easeOut" }}
                className="group relative bg-[#1A1A1A] p-8 rounded-none border border-white/[0.04] hover:border-luxury-gold/20 hover:shadow-2xl hover:shadow-luxury-gold/[0.02] transition-all duration-500 flex flex-col justify-between"
              >
                {/* Background decorative accent card number */}
                <span className="absolute top-6 right-6 text-3xl font-display font-bold text-white/[0.02] group-hover:text-luxury-gold transition-colors duration-500 select-none">
                  {(idx + 1).toString().padStart(2, "0")} 
                </span>

                <div className="space-y-6">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-none bg-white/5 group-hover:bg-luxury-gold/10 flex items-center justify-center text-luxury-silver group-hover:text-luxury-gold border border-white/5 group-hover:border-luxury-gold/20 transition-all duration-500">
                    <IconComponent size={20} strokeWidth={1.5} />
                  </div>

                  {/* Text contents */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-serif text-white group-hover:text-luxury-gold transition-colors duration-300 font-medium">
                      {service.title}
                    </h3>
                    <p className="text-xs md:text-sm text-[#B8B8B8] font-light leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Micro Action CTA link */}
                {/* <div className="pt-6 mt-6 border-t border-white/[0.03] flex items-center justify-between">
                  <button
                    id={`service-card-btn-${service.id}`}
                    onClick={() => {
                      if (service.id.includes("hotel") || service.id.includes("resort")) {
                        onOpenInquiry("hotel");
                      } else {
                        onOpenInquiry("project");
                      }
                    }}
                    className="text-[10px] font-display uppercase tracking-widest text-[#B8B8B8] group-hover:text-luxury-gold transition-colors duration-300 flex items-center gap-2"
                  >
                    Discuss Campaign
                    <LucideIcons.ArrowUpRight size={12} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div> */}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
