import { motion } from "motion/react";
import { Compass, Sparkles, Star } from "lucide-react";
import { ASSETS } from "../data";

interface HotelPartnershipProps {
  onOpenInquiry: (type: "project" | "call" | "hotel") => void;
}

export default function HotelPartnership({ onOpenInquiry }: HotelPartnershipProps) {
  return (
    <section
      id="hotel-partnership"
      className="relative py-28 md:py-36 flex items-center justify-center overflow-hidden bg-black px-6 md:px-12"
    >
      {/* Background Image with Parallax & Contrast */}
      <div className="absolute inset-0 z-0">
        <motion.img
          id="hotel-partnership-bg"
          src={ASSETS.hotelVilla}
          alt="Luxury Resort Overwater Villa"
          referrerPolicy="no-referrer"
          initial={{ scale: 1.1, opacity: 0.4 }}
          whileInView={{ scale: 1, opacity: 0.45 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full h-full object-cover brightness-[0.55]"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/40 to-[#0B0B0B]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/70 via-transparent to-[#0B0B0B]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <motion.div
          id="hotel-badge"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1.5 border border-luxury-gold/30 rounded-none bg-luxury-gold/5 backdrop-blur-md"
        >
          <Compass size={12} className="text-luxury-gold animate-[spin_4s_linear_infinite]" />
          <span className="text-[10px] font-display uppercase tracking-[0.25em] text-luxury-gold font-semibold">
            Bespoke Hospitality Program
          </span>
        </motion.div>

        <div className="space-y-4">
          <motion.h2
            id="hotel-headline"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-5xl md:text-6xl font-serif text-white tracking-wide font-normal leading-tight"
          >
            Partner With <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-luxury-gold">
              RF Media Productions
            </span>
          </motion.h2>

          <motion.p
            id="hotel-description"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-sm md:text-lg text-[#B8B8B8] max-w-2xl mx-auto font-light leading-relaxed"
          >
            We help hotels, resorts and hospitality brands attract more guests through cinematic storytelling and premium visual content.
          </motion.p>
        </div>

        {/* Highlight points */}
        <motion.div
          id="hotel-bullets"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto pt-6 text-left"
        >
          <div className="p-4 rounded-none bg-black/40 border border-white/5 backdrop-blur-sm space-y-2">
            <div className="flex items-center gap-2 text-luxury-gold">
              <Star size={14} className="fill-current" />
              <span className="text-[10px] font-display uppercase tracking-widest font-semibold">Architectural Soul</span>
            </div>
            <p className="text-xs text-luxury-silver/80 font-light leading-relaxed">
              We shoot to highlight geometric balance, natural lighting shifts, and spatial harmony.
            </p>
          </div>

          <div className="p-4 rounded-none bg-black/40 border border-white/5 backdrop-blur-sm space-y-2">
            <div className="flex items-center gap-2 text-luxury-gold">
              <Star size={14} className="fill-current" />
              <span className="text-[10px] font-display uppercase tracking-widest font-semibold">Experiential Focus</span>
            </div>
            <p className="text-xs text-luxury-silver/80 font-light leading-relaxed">
              Capturing raw guest moments—private pools, open air lounges, fireside dinners, and spa rituals.
            </p>
          </div>

          <div className="p-4 rounded-none bg-black/40 border border-white/5 backdrop-blur-sm space-y-2">
            <div className="flex items-center gap-2 text-luxury-gold">
              <Star size={14} className="fill-current" />
              <span className="text-[10px] font-display uppercase tracking-widest font-semibold">Direct Bookings</span>
            </div>
            <p className="text-xs text-luxury-silver/80 font-light leading-relaxed">
              Tailoring visuals scientifically to appeal directly to ultra-high-net-worth explorers.
            </p>
          </div>
        </motion.div>

        {/* Action Button */}
        <motion.div
          id="hotel-actions"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="pt-6"
        >
          <button
            id="hotel-coverage-btn"
            onClick={() => onOpenInquiry("hotel")}
            className="px-10 py-4 bg-luxury-gold hover:bg-luxury-gold-hover text-luxury-charcoal font-display text-xs uppercase tracking-[0.25em] font-semibold transition-all rounded-sm shadow-xl flex items-center justify-center gap-2 mx-auto group cursor-pointer"
          >
            Request Hotel Coverage
            <Sparkles size={14} className="group-hover:rotate-12 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
