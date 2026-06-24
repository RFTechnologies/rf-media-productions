import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Globe, Eye, Sparkles, Youtube, X } from "lucide-react";
import { CHANNEL_POSTS } from "../data";

export default function MilesMeals() {
  const [showChannelModal, setShowChannelModal] = useState(false);
  const [activeVideo, setActiveVideo] = useState(CHANNEL_POSTS[0]);

  return (
    <section
      id="miles-meals"
      className="py-24 md:py-32 bg-[#0B0B0B] relative px-6 md:px-12 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.3em] text-luxury-gold font-display font-medium block">
              Travel & Culinary Channel
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-white font-normal tracking-wide">
              Miles & Meals
            </h2>
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#B8B8B8] font-display">
              Travel. Food. Stories.
            </p>
          </div>

          <div className="md:max-w-md space-y-4">
            <p className="text-xs text-luxury-silver font-light leading-relaxed">
              Our highly acclaimed digital series, capturing authentic culinary methods, remote boutique hotel architectures, and untouched geographical wonders.
            </p>
            <button
              id="explore-channel-btn"
              onClick={() => setShowChannelModal(true)}
              className="px-6 py-3 border border-white/10 hover:border-luxury-gold text-[10px] font-display uppercase tracking-[0.2em] text-[#B8B8B8] hover:text-luxury-gold rounded-sm transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <Youtube size={14} className="text-red-500" />
              Explore The Channel
            </button>
          </div>
        </div>

        {/* Channel Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CHANNEL_POSTS.map((post) => (
            <motion.div
              id={`channel-post-card-${post.id}`}
              key={post.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              onClick={() => {
                setActiveVideo(post);
                setShowChannelModal(true);
              }}
              className="group cursor-pointer bg-[#141414] rounded-none border border-white/[0.04] hover:border-luxury-gold/10 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Media Thumbnail */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  id={`channel-post-img-${post.id}`}
                  src={post.image}
                  alt={post.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 brightness-[0.8] group-hover:brightness-[0.75]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

                {/* Duration indicator tag */}
                {post.duration && (
                  <span className="absolute bottom-3 right-3 text-[10px] font-mono text-white bg-black/75 px-2 py-0.5 rounded-sm border border-white/10">
                    {post.duration}
                  </span>
                )}

                {/* Hover Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-luxury-gold text-luxury-charcoal flex items-center justify-center shadow-lg">
                    <Play size={16} className="fill-current translate-x-0.5" />
                  </div>
                </div>
              </div>

              {/* Text contents */}
              <div className="p-5 space-y-3 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[9px] font-display uppercase tracking-widest text-luxury-gold font-semibold">
                    {post.category}
                  </span>
                  <h3 className="text-sm font-serif text-white font-medium group-hover:text-luxury-gold transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-[11px] text-[#B8B8B8] font-light leading-relaxed line-clamp-2">
                    {post.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.03] flex items-center justify-between text-[10px] font-mono text-[#B8B8B8]/60">
                  <span className="flex items-center gap-1">
                    <Eye size={10} /> 45K+ Views
                  </span>
                  <span className="text-luxury-gold font-semibold">Play Now</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Immersive YouTube Channel Theater Screen Overlay */}
      <AnimatePresence>
        {showChannelModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              id="channel-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowChannelModal(false)}
              className="absolute inset-0 bg-[#060606]/95 backdrop-blur-md"
            />

            {/* Modal */}
            <motion.div
              id="channel-modal"
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl bg-[#141414] rounded-none border border-white/10 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                id="channel-close-btn"
                onClick={() => setShowChannelModal(false)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black/90 text-white p-2 rounded-none border border-white/10 z-20"
                aria-label="Close Channel View"
              >
                <X size={16} />
              </button>

              {/* Theater Screening Box */}
              <div className="relative aspect-[16/9] w-full bg-black shrink-0">
                <img
                  id="active-video-cover"
                  src={activeVideo.image}
                  alt={activeVideo.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover brightness-[0.55]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] to-transparent" />

                {/* Simulation Screen Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center shadow-2xl cursor-pointer animate-pulse">
                    <Play size={20} className="fill-current translate-x-0.5" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] font-display uppercase tracking-[0.3em] text-luxury-gold font-semibold flex items-center justify-center gap-1">
                      <Sparkles size={12} /> Now Streaming: Miles & Meals
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif text-white max-w-xl font-medium">
                      {activeVideo.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Video Information & Playlist */}
              <div className="p-6 overflow-y-auto space-y-6">
                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] text-[#B8B8B8] font-display mb-1">
                    Episode Description
                  </h4>
                  <p className="text-sm text-luxury-silver font-light leading-relaxed">
                    {activeVideo.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat, orci vel tempor sit amet magna.
                  </p>
                </div>

                {/* Small Playlist */}
                <div className="space-y-3 pt-4 border-t border-white/5">
                  <h4 className="text-xs uppercase tracking-[0.2em] text-white font-display">
                    Related Episodes
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {CHANNEL_POSTS.map((video) => (
                      <div
                        id={`related-video-btn-${video.id}`}
                        key={video.id}
                        onClick={() => setActiveVideo(video)}
                        className={`p-3 rounded-none flex items-center gap-4 cursor-pointer border transition-all duration-300 ${
                          activeVideo.id === video.id
                            ? "bg-luxury-gold/5 border-luxury-gold/30"
                            : "bg-[#0B0B0B] border-white/5 hover:border-white/15"
                        }`}
                      >
                        <img
                          src={video.image}
                          alt={video.title}
                          referrerPolicy="no-referrer"
                          className="w-16 aspect-[16/10] object-cover rounded-none"
                        />
                        <div className="min-w-0 flex-1">
                          <h5 className="text-xs font-serif text-white truncate font-medium">
                            {video.title}
                          </h5>
                          <span className="text-[9px] font-display uppercase tracking-widest text-luxury-gold block mt-1">
                            {video.category}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
