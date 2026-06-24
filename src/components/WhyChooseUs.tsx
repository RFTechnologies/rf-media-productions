import { motion } from "motion/react";
import { Users, Video, Clock, TrendingUp } from "lucide-react";
import { CHOOSE_US_ITEMS } from "../data";

export default function WhyChooseUs() {
  const icons = [
    <Users size={24} className="text-luxury-silver" strokeWidth={1.5} />,
    <Video size={24} className="text-luxury-silver" strokeWidth={1.5} />,
    <Clock size={24} className="text-luxury-silver" strokeWidth={1.5} />,
    <TrendingUp size={24} className="text-luxury-silver" strokeWidth={1.5} />,
  ];

  return (
    <section
      id="why-choose-us"
      className="py-24 md:py-32 bg-[#141414] relative px-6 md:px-12 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-luxury-gold font-display font-medium">
              The Standard
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-white font-normal tracking-wide">
              Why Elite Brands <br className="hidden sm:inline" />
              <span className="italic font-light text-luxury-silver">Choose Our Studio</span>
            </h2>
          </div>
          <div className="md:max-w-xs">
            <p className="text-xs text-luxury-silver font-light leading-relaxed">
              We operate as a true extension of your luxury marketing desk, translating property architecture and corporate vision into tangible financial growth.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CHOOSE_US_ITEMS.map((item, idx) => (
            <motion.div
              id={`choose-card-${item.id}`}
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: "easeOut" }}
              className="group relative bg-[#1A1A1A] p-8 md:p-12 rounded-none border border-white/[0.04] hover:border-luxury-gold/20 transition-all duration-500"
            >
              {/* Top Accent Icon & Line */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-none bg-white/5 group-hover:bg-luxury-gold/10 flex items-center justify-center border border-white/5 group-hover:border-luxury-gold/20 transition-all duration-500">
                  {icons[idx]}
                </div>
                <span className="text-xs font-display tracking-[0.25em] text-[#B8B8B8]/40 group-hover:text-luxury-gold/60 transition-colors duration-500 select-none">
                  0{idx + 1}
                </span>
              </div>

              {/* Text contents */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-serif text-white font-normal group-hover:text-luxury-gold transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-[#B8B8B8] font-light leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  {item.description}
                </p>
              </div>

              {/* Embedded custom luxury bullet lists for secondary details */}
              <div className="mt-6 pt-6 border-t border-white/[0.03]">
                {idx === 0 && (
                  <ul className="grid grid-cols-2 gap-2 text-[10px] font-display uppercase tracking-widest text-luxury-silver/80">
                    <li>• Videographers</li>
                    <li>• Photographers</li>
                    <li>• Motion Editors</li>
                    <li>• Social Strategists</li>
                  </ul>
                )}
                {idx === 1 && (
                  <ul className="grid grid-cols-2 gap-2 text-[10px] font-display uppercase tracking-widest text-luxury-silver/80">
                    <li>• RED Cine 8K</li>
                    <li>• ARRI Anamorphic</li>
                    <li>• Heavy Lift Drones</li>
                    <li>• Cinema Stabilizers</li>
                  </ul>
                )}
                {idx === 2 && (
                  <ul className="grid grid-cols-2 gap-2 text-[10px] font-display uppercase tracking-widest text-luxury-silver/80">
                    <li>• Scheduled Sprints</li>
                    <li>• Daily Previews</li>
                    <li>• Cloud Collaboration</li>
                    <li>• Fast Revisions</li>
                  </ul>
                )}
                {idx === 3 && (
                  <ul className="grid grid-cols-2 gap-2 text-[10px] font-display uppercase tracking-widest text-luxury-silver/80">
                    <li>• High Conversions</li>
                    <li>• Brand Awareness</li>
                    <li>• Direct Bookings</li>
                    <li>• Media Authority</li>
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
