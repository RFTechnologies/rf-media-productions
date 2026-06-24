import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, MapPin, Film, Layers, CheckCircle2, Play, ChevronRight } from "lucide-react";
import { PROJECTS } from "../data";
import { Project } from "../types";

export default function FeaturedWork() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "Hotels", "Restaurants", "Travel", "Tourism", "Commercial"];

  const filteredProjects = activeCategory === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section
      id="featured-work"
      className="py-24 md:py-32 bg-[#0B0B0B] relative px-6 md:px-12 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.3em] text-luxury-gold font-display font-medium">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-white font-normal tracking-wide">
              Featured Work
            </h2>
            <p className="text-sm text-luxury-silver font-light max-w-lg">
              Cinematic masterpieces crafted for world-renowned luxury brands, luxury hotels, and Michelin culinary houses.
            </p>
          </div>

          {/* Categories Selector */}
          <div className="flex flex-wrap gap-2 py-1 border-b border-white/5 md:self-end">
            {categories.map((category) => (
              <button
                id={`portfolio-tab-${category}`}
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-xs font-display uppercase tracking-[0.15em] relative transition-all duration-300 ${
                  activeCategory === category
                    ? "text-luxury-gold font-semibold"
                    : "text-luxury-silver hover:text-white"
                }`}
              >
                {category}
                {activeCategory === category && (
                  <motion.div
                    id={`active-bar-${category}`}
                    layoutId="activeCategoryBar"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-luxury-gold"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          id="portfolio-grid"
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                id={`project-card-${project.id}`}
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                onClick={() => setSelectedProject(project)}
                className="group relative cursor-pointer bg-[#141414] rounded-none overflow-hidden border border-white/[0.04] hover:border-luxury-gold/20 transition-all duration-500"
              >
                {/* Image Wrap */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    id={`project-img-${project.id}`}
                    src={project.thumbnail}
                    alt={project.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 brightness-[0.8] group-hover:brightness-[0.7]"
                  />
                  {/* Luxury Silver/Gold Accent Line on Top */}
                  <div className="absolute top-0 left-0 w-0 h-[2px] bg-luxury-gold group-hover:w-full transition-all duration-500" />

                  {/* Dark Vignette Hover Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <span className="text-[10px] font-display uppercase tracking-[0.25em] text-luxury-gold flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-none border border-luxury-gold/20 backdrop-blur-sm">
                      <Play size={8} className="fill-current text-luxury-gold" /> View Case Study
                    </span>
                  </div>
                </div>

                {/* Info block */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-[10px] font-display uppercase tracking-[0.2em]">
                    <span className="text-luxury-gold">{project.category}</span>
                    <span className="text-[#B8B8B8]">{project.location}</span>
                  </div>
                  <h3 className="text-lg font-serif text-white font-medium group-hover:text-luxury-gold transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs text-[#B8B8B8] font-light leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Details Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              id="case-study-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-[#060606]/95 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              id="case-study-container"
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl bg-[#141414] rounded-none border border-white/10 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Header Image Cover */}
              <div className="relative h-64 sm:h-80 w-full shrink-0">
                <img
                  id="case-study-cover"
                  src={selectedProject.thumbnail}
                  alt={selectedProject.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover brightness-[0.6]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] to-transparent" />

                {/* Close Button */}
                <button
                  id="case-study-close-btn"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-black/40 hover:bg-black/80 text-white p-2.5 rounded-none border border-white/10 transition-colors"
                  aria-label="Close Case Study"
                >
                  <X size={18} />
                </button>

                {/* Overlaid Title Info */}
                <div className="absolute bottom-6 left-6 right-6 space-y-2">
                  <span className="text-xs uppercase tracking-[0.25em] text-luxury-gold font-display font-medium">
                    {selectedProject.category} • {selectedProject.year}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-serif text-white font-medium">
                    {selectedProject.name}
                  </h3>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="p-6 sm:p-10 overflow-y-auto space-y-8">
                {/* Meta Attributes Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-none bg-[#0B0B0B] border border-white/5">
                  <div>
                    <span className="text-[10px] font-display uppercase tracking-widest text-[#B8B8B8] block">
                      Client Brand
                    </span>
                    <span className="text-xs font-display text-white font-semibold">
                      {selectedProject.client}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-display uppercase tracking-widest text-[#B8B8B8] block flex items-center gap-1">
                      <MapPin size={10} className="text-luxury-silver" /> Destination
                    </span>
                    <span className="text-xs font-display text-white font-semibold">
                      {selectedProject.location}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-display uppercase tracking-widest text-[#B8B8B8] block flex items-center gap-1">
                      <Calendar size={10} className="text-luxury-silver" /> Year Produced
                    </span>
                    <span className="text-xs font-display text-white font-semibold">
                      {selectedProject.year}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-display uppercase tracking-widest text-[#B8B8B8] block flex items-center gap-1">
                      <Film size={10} className="text-luxury-silver" /> Mastering
                    </span>
                    <span className="text-xs font-display text-luxury-gold font-semibold">
                      4K HDR DCI
                    </span>
                  </div>
                </div>

                {/* Main Challenge vs Solution columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Challenge */}
                  <div className="space-y-3">
                    <h4 className="text-xs uppercase tracking-[0.2em] text-luxury-gold font-display font-medium">
                      The Narrative Challenge
                    </h4>
                    <p className="text-sm text-[#B8B8B8] font-light leading-relaxed">
                      {selectedProject.challenge || "The challenge lay in balancing the exquisite property design with the human feeling of serenity, requiring meticulous lighting transitions."}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="space-y-3">
                    <h4 className="text-xs uppercase tracking-[0.2em] text-luxury-silver font-display font-medium">
                      Our Production Solution
                    </h4>
                    <p className="text-sm text-white font-light leading-relaxed">
                      {selectedProject.solution || "We designed custom camera runs utilizing early blue hour fog and cinematic drone passes to highlight natural symmetries."}
                    </p>
                  </div>
                </div>

                {/* Scope of Production */}
                {selectedProject.scope && (
                  <div className="space-y-4 pt-4 border-t border-white/5">
                    <h4 className="text-xs uppercase tracking-[0.2em] text-white font-display font-medium">
                      Project Production Deliverables
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedProject.scope.map((item, index) => (
                        <div
                          id={`deliverable-item-${index}`}
                          key={index}
                          className="flex items-center gap-3 p-3 rounded-md bg-[#1c1c1c] border border-white/5"
                        >
                          <CheckCircle2 size={14} className="text-luxury-gold shrink-0" />
                          <span className="text-xs font-display text-[#B8B8B8]">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Sticky Action */}
              <div className="p-6 bg-[#0B0B0B] border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
                <p className="text-xs text-[#B8B8B8] font-light text-center sm:text-left">
                  Interested in producing a similar masterpiece for your luxury brand?
                </p>
                <button
                  id="case-study-cta-btn"
                  onClick={() => {
                    setSelectedProject(null);
                    // Open project form
                    const startButton = document.getElementById("hero-btn-project") || document.getElementById("cta-start-btn");
                    startButton?.click();
                  }}
                  className="px-6 py-3 bg-luxury-gold hover:bg-luxury-gold-hover text-luxury-charcoal font-display text-[10px] uppercase tracking-widest font-semibold rounded-sm transition-colors flex items-center gap-2"
                >
                  Book Discovery Session
                  <ChevronRight size={12} />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
