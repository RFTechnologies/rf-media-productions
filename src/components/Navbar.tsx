import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe, MessageSquare } from 'lucide-react';
import Logo from '../assets/images/RF Logo Final2-01.png';

interface NavbarProps {
  onOpenInquiry: (type: 'project' | 'call' | 'hotel') => void;
}

export default function Navbar({ onOpenInquiry }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Featured Work', id: 'featured-work' },
    { label: 'Showreel', id: 'showreel' },
    { label: 'Process', id: 'process' },
    { label: 'Miles & Meals', id: 'miles-meals' },
  ];

  return (
    <>
      <header
        id="luxury-header"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-luxury-charcoal/85 border-b border-white/5 backdrop-blur-xl py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            id="brand-logo"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group cursor-pointer"
          >
            <img
              src={Logo}
              alt="RF Logo"
              className="w-80 h-12.5 object-contain shrink-0"
            />
          </button>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                id={`nav-${item.id}`}
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-display text-xs tracking-[0.2em] uppercase text-[#B8B8B8] hover:text-white transition-colors cursor-pointer relative py-1 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-luxury-gold transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Call To Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              id="nav-cta-call"
              onClick={() => onOpenInquiry('call')}
              className="px-4 py-2 border border-white/10 hover:border-luxury-silver text-[10px] font-display uppercase tracking-[0.2em] text-[#B8B8B8] hover:text-white transition-colors rounded-sm"
            >
              Book Call
            </button>
            <button
              id="nav-cta-project"
              onClick={() => onOpenInquiry('project')}
              className="px-5 py-2.5 bg-luxury-gold hover:bg-luxury-gold-hover text-[10px] font-display uppercase tracking-[0.2em] font-semibold text-luxury-charcoal transition-all rounded-sm shadow-md hover:shadow-luxury-gold/5"
            >
              Start A Project
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white/80 hover:text-white p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-luxury-charcoal pt-24 px-8 pb-10 flex flex-col justify-between"
          >
            <div className="flex flex-col gap-6 mt-6">
              <span className="text-[10px] font-display tracking-[0.3em] uppercase text-luxury-gold mb-2">
                Cinematic Navigation
              </span>
              {menuItems.map((item) => (
                <button
                  id={`mobile-nav-${item.id}`}
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="font-serif text-3xl text-left text-white/90 hover:text-luxury-gold transition-colors font-light py-2 border-b border-white/5"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="space-y-4 pt-8 border-t border-white/5">
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  id="mobile-cta-call"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenInquiry('call');
                  }}
                  className="w-full text-center py-4 border border-white/10 text-xs font-display uppercase tracking-[0.2em] text-white hover:bg-white/5 rounded-sm transition-colors"
                >
                  Book Discovery Call
                </button>
                <button
                  id="mobile-cta-project"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenInquiry('project');
                  }}
                  className="w-full text-center py-4 bg-luxury-gold text-luxury-charcoal font-semibold text-xs font-display uppercase tracking-[0.2em] rounded-sm transition-colors hover:bg-luxury-gold-hover"
                >
                  Start A Project
                </button>
              </div>

              <div className="text-center pt-4">
                <p className="text-[10px] text-white/40 tracking-widest font-display">
                  © {new Date().getFullYear()} RF MEDIA PRODUCTIONS
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
