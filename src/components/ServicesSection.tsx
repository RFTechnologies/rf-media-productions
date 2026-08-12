import { motion } from "motion/react";
import * as LucideIcons from "lucide-react";
import { SERVICES } from "../data";

interface ServicesSectionProps {
  onOpenInquiry: (type: "project" | "call" | "hotel") => void;
}

export default function ServicesSection({ onOpenInquiry }: ServicesSectionProps) {
  return (
    <section id="services" className="relative bg-[#0A0C0F] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(201,162,39,0.06),transparent_40%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_100%,rgba(138,50,50,0.08),transparent_45%)] pointer-events-none" />

      <div className="slate h-9 bg-[repeating-linear-gradient(-35deg,#0A0C0F_0px,#0A0C0F_26px,rgba(201,162,39,1)_26px,rgba(201,162,39,1)_52px)] opacity-90" />

      <div className="mx-auto max-w-[1180px] px-6 py-20 md:px-8 md:py-24">
        <header className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#C9A227]/15 bg-white/5 px-4 py-2 mb-6">
            <span className="h-2 w-2 rounded-full bg-[#C9A227]" />
            <span className="text-[11px] uppercase tracking-[0.45em] text-[#E8CD7A] font-medium">
              What We Produce
            </span>
          </div>
          <h1 className="font-serif font-semibold text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-[-0.03em]">
            Every story,
            <br />
            <em className="font-normal italic text-[#E8CD7A]">produced end to end.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm md:text-base leading-7 text-[#93989F]">
            From the first frame to the final campaign — RF Media Production brings media, marketing, and design under one roof.
          </p>
        </header>

        <main className="space-y-14 md:space-y-16">
          {SERVICES.map((category, idx) => {
            const IconComponent = (LucideIcons as any)[category.iconName] || LucideIcons.Sparkles;
            return (
              <motion.section
                key={category.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: idx * 0.08, ease: "easeOut" }}
                className={`cat grid gap-10 border-t border-[rgba(237,234,227,0.08)] pt-16 ${idx === 0 ? "border-t-0 pt-0" : ""}`}
              >
                <div className="lg:grid lg:grid-cols-[340px_1fr] lg:gap-14">
                  <div className="cat-head lg:sticky lg:top-24 self-start">
                    <span className="cat-tag text-[12px] tracking-[0.2em] uppercase text-[#C9A227] font-mono mb-4 inline-block">
                      Scene {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[#C9A227]/30 text-[#E8CD7A]">
                      <IconComponent size={24} />
                    </div>
                    <h2 className="cat-title font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
                      {category.title}
                    </h2>
                    <p className="cat-desc mt-5 max-w-xl text-sm leading-7 text-[#93989F]">
                      {getCategoryDescription(category.title)}
                    </p>
                  </div>

                  <div className="service-grid grid grid-cols-1 md:grid-cols-2 gap-px bg-[rgba(237,234,227,0.08)] border border-[rgba(237,234,227,0.08)]">
                    {category.services.map((item) => (
                      <div
                        key={item.id}
                        className="service-item flex items-start gap-3 bg-[#12151A] p-5 md:p-6 transition-all duration-300 hover:bg-[#161A20] hover:text-[#E8CD7A]"
                      >
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#C9A227] flex-shrink-0" />
                        <span className="text-sm leading-6">{item.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.section>
            );
          })}
        </main>
      </div>

      <div className="slate h-9 bg-[repeating-linear-gradient(-35deg,#0A0C0F_0px,#0A0C0F_26px,rgba(201,162,39,1)_26px,rgba(201,162,39,1)_52px)] opacity-90" />
    </section>
  );
}

function getCategoryDescription(title: string) {
  switch (title) {
    case "Media Production":
      return "Full-scale production for screen, stream, and stage — from commercials to feature films.";
    case "Digital Marketing":
      return "Getting the story in front of the right audience, and turning attention into growth.";
    case "Creative Design":
      return "Visual identity and design work that carries a brand across every surface it touches.";
    case "Business Solutions":
      return "The consultancy and coordination layer that keeps every production and campaign on track.";
    default:
      return "Premium services designed to elevate your brand with cinematic precision.";
  }
}
