import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, Calendar, Mail, Phone, MapPin, Sparkles, Building, Video } from "lucide-react";

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: "project" | "call" | "hotel";
}

export default function ProjectInquiryModal({
  isOpen,
  onClose,
  initialType = "project",
}: ProjectInquiryModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "$5,000 - $10,000",
    serviceType: "Luxury Hotel Promotions",
    message: "",
    hotelRooms: "",
    location: "",
    preferredDate: "",
  });

  const [formType, setFormType] = useState<"project" | "call" | "hotel">(initialType);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync state if initialType changes
  React.useEffect(() => {
    setFormType(initialType);
  }, [initialType]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      budget: "$5,000 - $10,000",
      serviceType: "Luxury Hotel Promotions",
      message: "",
      hotelRooms: "",
      location: "",
      preferredDate: "",
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          id="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#060606]/90 backdrop-blur-md"
        />

        {/* Content Container */}
        <motion.div
          id="modal-container"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl overflow-hidden rounded-none border border-white/10 bg-[#141414] shadow-2xl"
        >
          {/* Top Decorative bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-luxury-gold via-white/20 to-luxury-gold" />

          {/* Close button */}
          <button
            id="modal-close-btn"
            onClick={onClose}
            className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-none border border-white/5"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {!isSubmitted ? (
            <div className="p-6 md:p-10 max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="mb-8">
                <span className="text-xs uppercase tracking-[0.25em] text-luxury-gold font-display font-medium block mb-2">
                  RF Media Productions
                </span>
                <h3 className="text-2xl md:text-3xl font-serif text-white font-medium">
                  {formType === "project" && "Initiate Your Production"}
                  {formType === "call" && "Book a Cinematic Strategy Call"}
                  {formType === "hotel" && "Request Elite Hotel Coverage"}
                </h3>
                <p className="text-sm text-luxury-silver mt-2 font-light">
                  {formType === "project" && "Collaborate with us to translate your brand's essence into a breathtaking visual masterpiece."}
                  {formType === "call" && "Discuss your video marketing strategy directly with our principal directors."}
                  {formType === "hotel" && "Our production circle creates bespoke premium coverage for luxury hotels and world-class resorts."}
                </p>
              </div>

              {/* Form Type Selector */}
              <div className="grid grid-cols-3 gap-2 p-1 bg-[#0b0b0b] rounded-none mb-8 border border-white/5">
                <button
                  id="tab-project"
                  type="button"
                  onClick={() => setFormType("project")}
                  className={`py-2 text-xs font-display tracking-wider rounded-none transition-all ${formType === "project"
                      ? "bg-luxury-gold text-luxury-charcoal font-semibold"
                      : "text-[#B8B8B8] hover:text-white hover:bg-white/5"
                    }`}
                >
                  Project
                </button>
                <button
                  id="tab-call"
                  type="button"
                  onClick={() => setFormType("call")}
                  className={`py-2 text-xs font-display tracking-wider rounded-none transition-all ${formType === "call"
                      ? "bg-luxury-gold text-luxury-charcoal font-semibold"
                      : "text-[#B8B8B8] hover:text-white hover:bg-white/5"
                    }`}
                >
                  Discovery Call
                </button>
                <button
                  id="tab-hotel"
                  type="button"
                  onClick={() => setFormType("hotel")}
                  className={`py-2 text-xs font-display tracking-wider rounded-none transition-all ${formType === "hotel"
                      ? "bg-luxury-gold text-luxury-charcoal font-semibold"
                      : "text-[#B8B8B8] hover:text-white hover:bg-white/5"
                    }`}
                >
                  Hotel Partnership
                </button>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="text-xs uppercase tracking-wider text-white/70 block">
                      Full Name
                    </label>
                    <input
                      id="input-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Adrian Soneva"
                      className="w-full bg-[#0b0b0b] border border-white/10 rounded-none py-3 px-4 text-white text-sm focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-all placeholder:text-white/20 font-light"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="text-xs uppercase tracking-wider text-white/70 block">
                      Email Address
                    </label>
                    <input
                      id="input-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. adrian@resort.com"
                      className="w-full bg-[#0b0b0b] border border-white/10 rounded-none py-3 px-4 text-white text-sm focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-all placeholder:text-white/20 font-light"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="text-xs uppercase tracking-wider text-white/70 block">
                      Phone Number
                    </label>
                    <input
                      id="input-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +1 (555) 019-2831"
                      className="w-full bg-[#0b0b0b] border border-white/10 rounded-none py-3 px-4 text-white text-sm focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-all placeholder:text-white/20 font-light"
                    />
                  </div>

                  {/* Company / Brand */}
                  <div className="space-y-1">
                    <label className="text-xs uppercase tracking-wider text-white/70 block">
                      Brand / Company Name
                    </label>
                    <input
                      id="input-company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Aman Group"
                      className="w-full bg-[#0b0b0b] border border-white/10 rounded-none py-3 px-4 text-white text-sm focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-all placeholder:text-white/20 font-light"
                    />
                  </div>
                </div>

                {/* Conditional Fields based on Form Type */}
                {formType === "project" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Service Category */}
                    <div className="space-y-1">
                      <label className="text-xs uppercase tracking-wider text-white/70 block">
                        Service Required
                      </label>
                      <select
                        id="select-service"
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full bg-[#0b0b0b] border border-white/10 rounded-none py-3 px-4 text-white text-sm focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-all font-light"
                      >
                        <option>Travel Productions</option>
                        <option>Luxury Hotel Promotions</option>
                        <option>Resort Marketing</option>
                        <option>Tourism Campaigns</option>
                        <option>Food Cinematography</option>
                        <option>Commercial Advertisements</option>
                        <option>Photography</option>
                      </select>
                    </div>

                    {/* Estimated Budget Range */}
                    <div className="space-y-1">
                      <label className="text-xs uppercase tracking-wider text-white/70 block">
                        Project Budget (USD)
                      </label>
                      <select
                        id="select-budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-[#0b0b0b] border border-white/10 rounded-none py-3 px-4 text-white text-sm focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-all font-light"
                      >
                        <option>$5,000 - $10,000</option>
                        <option>$10,000 - $25,000</option>
                        <option>$25,000 - $50,000</option>
                        <option>$50,000+</option>
                      </select>
                    </div>
                  </div>
                )}

                {formType === "call" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Preferred Date */}
                    <div className="space-y-1">
                      <label className="text-xs uppercase tracking-wider text-[#B8B8B8] block flex items-center gap-1">
                        <Calendar size={12} className="text-luxury-silver" /> Preferred Consultation Date
                      </label>
                      <input
                        id="input-date"
                        type="date"
                        required
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full bg-[#0b0b0b] border border-white/10 rounded-none py-3 px-4 text-white text-sm focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-all font-light"
                      />
                    </div>

                    {/* Main Interest */}
                    <div className="space-y-1">
                      <label className="text-xs uppercase tracking-wider text-white/70 block">
                        Focus Area
                      </label>
                      <select
                        id="select-focus"
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full bg-[#0b0b0b] border border-white/10 rounded-none py-3 px-4 text-white text-sm focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-all font-light"
                      >
                        <option>Digital Video Strategy</option>
                        <option>Full-year Content Retainer</option>
                        <option>Launch Campaign Coordination</option>
                        <option>Photography Portfolio</option>
                      </select>
                    </div>
                  </div>
                )}

                {formType === "hotel" && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Hotel Rooms / Scale */}
                    <div className="space-y-1">
                      <label className="text-xs uppercase tracking-wider text-white/70 block flex items-center gap-1">
                        <Building size={12} className="text-luxury-silver" /> Total Keys / Rooms
                      </label>
                      <input
                        id="input-rooms"
                        type="number"
                        required
                        placeholder="e.g. 85"
                        value={formData.hotelRooms}
                        onChange={(e) => setFormData({ ...formData, hotelRooms: e.target.value })}
                        className="w-full bg-[#0b0b0b] border border-white/10 rounded-none py-3 px-4 text-white text-sm focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-all placeholder:text-white/20 font-light"
                      />
                    </div>

                    {/* Location */}
                    <div className="space-y-1">
                      <label className="text-xs uppercase tracking-wider text-white/70 block flex items-center gap-1">
                        <MapPin size={12} className="text-luxury-silver" /> Property Location
                      </label>
                      <input
                        id="input-location"
                        type="text"
                        required
                        placeholder="e.g. Kyoto, Japan"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full bg-[#0b0b0b] border border-white/10 rounded-none py-3 px-4 text-white text-sm focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-all placeholder:text-white/20 font-light"
                      />
                    </div>

                    {/* Video Scope */}
                    <div className="space-y-1">
                      <label className="text-xs uppercase tracking-wider text-white/70 block flex items-center gap-1">
                        <Video size={12} className="text-luxury-silver" /> Coverage Scale
                      </label>
                      <select
                        id="select-hotel-scale"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-[#0b0b0b] border border-white/10 rounded-none py-3 px-4 text-white text-sm focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-all font-light"
                      >
                        <option>Full resort (including aerial drone)</option>
                        <option>Restaurant & culinary focus</option>
                        <option>Spa, wellness, & details</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Narrative Description */}
                <div className="space-y-1">
                  <label className="text-xs uppercase tracking-wider text-white/70 block">
                    Share Your Narrative Idea or Brief
                  </label>
                  <textarea
                    id="input-message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe the mood, target emotion, or specific elements of your property or brand that make it extraordinary..."
                    className="w-full bg-[#0b0b0b] border border-white/10 rounded-none py-3 px-4 text-white text-sm focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-all placeholder:text-white/20 font-light resize-none"
                  />
                </div>

                {/* Actions */}
                <div className="flex items-center justify-end gap-4 pt-4 border-t border-white/5">
                  <button
                    id="modal-cancel-btn"
                    type="button"
                    onClick={onClose}
                    className="px-6 py-3 rounded-none text-xs font-display tracking-widest uppercase text-white hover:bg-white/5 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    id="modal-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 rounded-none text-xs font-display tracking-widest uppercase font-semibold text-luxury-charcoal bg-luxury-gold hover:bg-luxury-gold-hover transition-colors shadow-lg shadow-luxury-gold/10 flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-luxury-charcoal/20 border-t-luxury-charcoal rounded-full animate-spin" />
                        Transmitting...
                      </>
                    ) : (
                      <>
                        Request Session
                        <Sparkles size={14} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            /* Success State */
            <motion.div
              id="modal-success-state"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-10 md:p-16 text-center space-y-6 flex flex-col items-center justify-center"
            >
              <div className="w-16 h-16 bg-luxury-gold/10 border border-luxury-gold rounded-none flex items-center justify-center text-luxury-gold mb-2">
                <Check size={32} />
              </div>
              <span className="text-xs uppercase tracking-[0.3em] text-luxury-gold font-display font-medium">
                Transmission Received
              </span>
              <h3 className="text-3xl font-serif text-white font-medium">
                Connecting Our Production Circles
              </h3>
              <p className="text-[#B8B8B8] max-w-md font-light text-sm leading-relaxed">
                Thank you, <strong className="text-white">{formData.name}</strong>. Your request for{" "}
                <span className="text-luxury-gold">{formData.company}</span> has been securely routed to our chief directors. We will contact you within 12 hours via <strong className="text-white">{formData.email}</strong> to set up a private conceptual briefing.
              </p>
              <div className="pt-6">
                <button
                  id="modal-success-close-btn"
                  onClick={handleReset}
                  className="px-8 py-3 rounded-none text-xs font-display tracking-widest uppercase font-semibold text-luxury-charcoal bg-luxury-gold hover:bg-luxury-gold-hover transition-colors shadow-lg"
                >
                  Return to Cinematic Experience
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
