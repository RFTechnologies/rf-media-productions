import { motion } from "motion/react";
import { Sparkles, ArrowUpRight, PhoneCall } from "lucide-react";

interface CTASectionProps {
  onOpenInquiry: (type: "project" | "call" | "hotel") => void;
}

export default function CTASection({ onOpenInquiry }: CTASectionProps) {
  return (
    <section
      id="cta-section"
      className="py-28 md:py-36 bg-[#0B0B0B] relative overflow-hidden px-6 md:px-12 border-t border-white/5"
    >
      {/* Background spotlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-gradient-to-r from-luxury-gold/5 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center space-y-10 relative z-10">
        <motion.div
          id="cta-badge"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-white/10 rounded-none bg-white/5"
        >
          <Sparkles size={12} className="text-luxury-gold" />
          <span className="text-[10px] font-display uppercase tracking-[0.3em] text-luxury-silver">
            Let's Collaborate
          </span>
        </motion.div>

        <div className="space-y-4">
          <motion.h2
            id="cta-headline"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-serif text-white tracking-wide font-normal leading-tight"
          >
            Ready To Create <br />
            <span className="italic font-light text-luxury-silver">Something Extraordinary?</span>
          </motion.h2>
          <motion.p
            id="cta-description"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-sm md:text-base text-luxury-silver max-w-xl mx-auto font-light leading-relaxed"
          >
            Contact our chief directors to request a bespoke screening, private consultation, or detailed property coverage estimate.
          </motion.p>
        </div>

        {/* Dual Actions */}
        <motion.div
          id="cta-buttons-container"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto pt-4"
        >
          <button
            id="cta-start-btn"
            onClick={() => onOpenInquiry("project")}
            className="w-full sm:w-auto px-8 py-4 bg-luxury-gold hover:bg-luxury-gold-hover text-luxury-charcoal font-display text-xs uppercase tracking-[0.25em] font-semibold rounded-none shadow-xl shadow-luxury-gold/10 transition-colors flex items-center justify-center gap-2 group cursor-pointer"
          >
            Start A Project
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <button
            id="cta-call-btn"
            onClick={() => onOpenInquiry("call")}
            className="w-full sm:w-auto px-8 py-4 border border-white/10 hover:border-white/30 text-white font-display text-xs uppercase tracking-[0.25em] bg-[#141414] hover:bg-white/5 rounded-none transition-all flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <PhoneCall size={14} className="text-luxury-silver" />
            Book Discovery Call
          </button>
        </motion.div>
      </div>

      {/* Luxury Border lines */}
      <div className="absolute left-0 right-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
