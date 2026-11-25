import React, { useState, useEffect } from 'react';
import { WEDDING_DATA } from '../../data/weddingData';
import { Menu, X, Share2, Heart, Music } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `शुभ विवाह आमंत्रण | अविनाश संग दीपांजली\n\nदिनांक: 09 दिसम्बर 2026 (बुधवार)\nस्थान: ग्राम सिंघोरा से ग्राम वाजिदपुर (गाजीपुर, उ.प्र.)\n\nकृपया विवाह का डिजिटल आमंत्रण पत्र यहाँ देखें:\n${window.location.href}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const navLinks = [
    { label: 'आमंत्रण', href: '#invitation-card' },
    { label: 'वर-वधु', href: '#couple' },
    { label: 'कार्यक्रम', href: '#events' },
    { label: 'बारात मार्ग', href: '#route' },
    { label: 'उपस्थिति (RSVP)', href: '#rsvp' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#2A0810]/95 backdrop-blur-md border-b border-[#C5A15B]/30 shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo / Sacred Monogram */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full border border-[#C5A15B] flex items-center justify-center bg-[#4A101B] shadow-gold-glow">
            <span className="text-[#E5CB8C] font-bold text-sm font-hindi">ॐ</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold font-hindi gold-gradient-text">
              अविनाश ♥ दीपांजली
            </span>
            <span className="text-[10px] text-[#E9D8B5]/70 font-cormorant tracking-widest uppercase">
              09 Dec 2026
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs lg:text-sm font-hindi text-[#E9D8B5] hover:text-[#E5CB8C] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A15B] hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons: WhatsApp Share & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleShareWhatsApp}
            className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold shadow-md transition-transform hover:scale-105 active:scale-95"
            title="WhatsApp पर शेयर करें"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">शेयर करें</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#E5CB8C] hover:bg-[#4A101B]/50"
            aria-label="मेनू खोलें"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#2A0810]/98 border-b border-[#C5A15B]/30 px-6 py-6 shadow-2xl backdrop-blur-xl animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-hindi text-[#FFF9EB] hover:text-[#E5CB8C] py-2 border-b border-[#C5A15B]/15"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 text-center text-xs text-[#C5A15B] font-hindi">
              ॥ श्री गणेशाय नमः ॥
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
