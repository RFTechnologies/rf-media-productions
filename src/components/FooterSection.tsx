import { Phone, Mail, MapPin, MessageSquare, Instagram, Youtube, Film, ArrowUp } from "lucide-react";
import Logo from '../assets/images/RF Logo Final2-01.png';
export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="luxury-footer"
      className="bg-[#0B0B0B] text-luxury-silver pt-20 pb-10 border-t border-white/5 relative px-6 md:px-12"
    > <div className="max-w-7xl mx-auto space-y-16">
        {/* Top brand & Scroll Back */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-white/5">

          <div className="text-center md:text-left">
            {/* <span className="font-display text-xl font-bold tracking-[0.3em] text-white">
              RF MEDIA
            </span>
            <span className="font-serif italic text-xs tracking-widest text-luxury-gold ml-2">
              PRODUCTIONS
            </span> */}
            <img
              src="https://res.cloudinary.com/dzmrdbwqh/image/upload/v1784194928/RF%20Media%20Production/Rf%20Media%20Production%20Logo.png"
              alt="RF Logo"
              className="h-14 object-contain shrink-0"
            />
            <p className="text-xs text-luxury-silver/60 mt-2 font-light tracking-wide">
              Bespoke cinematic directions for world-class hospitality, travel, & commercial brands.
            </p>
          </div>

          <button
            id="back-to-top-btn"
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full border border-white/10 hover:border-luxury-gold text-white hover:text-luxury-gold transition-colors flex items-center justify-center bg-black/20 group cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp size={16} className="transform group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 md:gap-6">
          {/* Col 1: Company */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-display uppercase tracking-[0.25em] text-white font-semibold">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs font-light">
              <li>
                <a href="#about" className="hover:text-luxury-gold transition-colors">
                  Our Legacy
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-luxury-gold transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-luxury-gold transition-colors">
                  The Studio Standard
                </a>
              </li>
              <li>
                {/* <a href="#testimonials" className="hover:text-luxury-gold transition-colors">
                  Client Reviews
                </a> */}
              </li>
            </ul>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-display uppercase tracking-[0.25em] text-white font-semibold">
              Bespoke Services
            </h4>
            <ul className="space-y-2.5 text-xs font-light">
              <li>
                <a href="#services" className="hover:text-luxury-gold transition-colors">
                  Hotel Promotions
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-luxury-gold transition-colors">
                  Resort Marketing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-luxury-gold transition-colors">
                  Food Cinematography
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-luxury-gold transition-colors">
                  Drone Cinematography
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Portfolio */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-display uppercase tracking-[0.25em] text-white font-semibold">
              Film Portfolios
            </h4>
            <ul className="space-y-2.5 text-xs font-light">
              {/* <li>
                <a href="#our-brand" className="hover:text-luxury-gold transition-colors">
                  Boutique Hotels
                </a>
              </li>
              <li>
                <a href="#our-brand" className="hover:text-luxury-gold transition-colors">
                  Michelin Restaurants
                </a>
              </li>
              <li>
                <a href="#our-brand" className="hover:text-luxury-gold transition-colors">
                  Cultural Tourism
                </a>
              </li> */}
              <li>
                <a href="#our-brand" className="hover:text-luxury-gold transition-colors">
                  Miles & Meals
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Explicit Contact info */}
          <div className="space-y-4 md:col-span-2">
            <h4 className="text-[10px] font-display uppercase tracking-[0.25em] text-white font-semibold">
              Studio Coordinates
            </h4>
            <ul className="space-y-3.5 text-xs font-light">
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-luxury-silver shrink-0" />
                <a href="tel:+923496238506" className="text-white hover:text-luxury-gold transition-colors font-mono">
                  +92 349 6238506
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageSquare size={14} className="text-luxury-silver shrink-0" />
                <a className="text-white hover:text-luxury-gold transition-colors font-mono"
                  href="https://wa.me/+923496238506?text=Hello%20RF%20Media%20Productions%2C%0A%0AI%20came%20across%20your%20work%20and%20would%20like%20to%20discuss%20a%20potential%20project%20with%20your%20team.%20Please%20let%20me%20know%20how%20we%20can%20get%20started.%0A%0AThank%2 you."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +92 349 6238506 (Chat on WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-luxury-silver shrink-0" />
                <a className="text-white hover:text-luxury-gold transition-colors font-mono"
                  href="mailto:info@rfmediaproductions.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  info@rfmediaproductions.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-luxury-silver shrink-0 mt-0.5" />
                <span className="text-white font-light leading-relaxed">
                  2nd floor, Central Mall, GT Rd, Zaraj Housing Society DHA Phase II, Islamabad, 44000
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Social Links & Copyright */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] text-white/40 tracking-widest font-display text-center md:text-left">
            © {currentYear} RF MEDIA PRODUCTIONS LTD. ALL RIGHTS RESERVED. IN COLLABORATION WITH THE WORLD'S FINEST BRANDS.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-luxury-silver hover:text-luxury-gold transition-colors p-2 rounded-full hover:bg-white/5"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-luxury-silver hover:text-luxury-gold transition-colors p-2 rounded-full hover:bg-white/5"
              aria-label="YouTube"
            >
              <Youtube size={16} />
            </a>
            <a
              href="https://vimeo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-luxury-silver hover:text-luxury-gold transition-colors p-2 rounded-full hover:bg-white/5"
              aria-label="Vimeo / Film Portfolio"
            >
              <Film size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
