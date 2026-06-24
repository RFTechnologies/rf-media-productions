import { motion } from "motion/react";
import { BRANDS } from "../data";

export default function TrustedBy() {
  // Duplicate brands array to make infinite smooth scrolling
  const duplicatedBrands = [...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <section
      id="trusted-by"
      className="py-16 bg-[#0B0B0B] border-y border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8 text-center">
        <span className="text-[10px] md:text-xs font-display tracking-[0.3em] uppercase text-luxury-gold block mb-2">
          Global Collaborations
        </span>
        <h2 className="text-xl md:text-2xl font-serif text-white/90 font-light tracking-wide">
          Trusted By Brands & Businesses
        </h2>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative flex items-center w-full">
        {/* Soft horizontal blur gradients on margins */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-[#0B0B0B] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-[#0B0B0B] to-transparent z-10 pointer-events-none" />

        {/* Rolling track */}
        <motion.div
          id="marquee-track"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            ease: "linear",
            duration: 22,
            repeat: Infinity,
          }}
          className="flex gap-16 md:gap-24 whitespace-nowrap"
        >
          {duplicatedBrands.map((brand, idx) => (
            <div
              id={`marquee-item-${brand.name}-${idx}`}
              key={`${brand.name}-${idx}`}
              className="flex items-center justify-center min-w-[120px] md:min-w-[160px]"
            >
              <span className="text-sm md:text-lg font-display font-medium tracking-[0.35em] text-[#B8B8B8] hover:text-white transition-colors duration-300">
                {brand.logoText}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
