import React from 'react';
import { MandapHero3D } from '../3d/MandapHero3D';
import { ChevronDown, Calendar, MapPin, Heart } from 'lucide-react';

interface HeroSectionProps {
  onOpenInvitation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenInvitation }) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden bg-radial from-[#4A101B] via-[#2A0810] to-[#170407] py-8 px-4">
      {/* Background 3D Mandap Scene */}
      <div className="absolute inset-0 z-0 opacity-80 pointer-events-auto">
        <MandapHero3D />
      </div>

      {/* Subtle traditional Jaali overlay */}
      <div className="absolute inset-0 bg-jaali pointer-events-none opacity-40" />

      {/* Top Auspicious Inscription */}
      <div className="relative z-20 text-center pt-4 md:pt-8 animate-float-slow">
        <div className="inline-flex items-center justify-center gap-3 px-6 py-2 rounded-full border border-[#C5A15B]/40 bg-[#2A0810]/75 backdrop-blur-md shadow-lg">
          <span className="text-[#C5A15B] text-lg md:text-xl font-bold font-hindi tracking-wider">
            ॥ श्री गणेशाय नमः ॥
          </span>
        </div>
        <p className="text-xs md:text-sm text-[#E9D8B5]/80 mt-2 font-serif italic tracking-widest">
          वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥
        </p>
      </div>

      {/* Central Couple Typography & Sacred Announcement */}
      <div className="relative z-20 text-center max-w-4xl mx-auto my-auto px-4 py-8">
        {/* Shubh Vivah Tag */}
        <div className="inline-block mb-3">
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C5A15B]" />
            <h2 className="text-lg md:text-2xl font-semibold tracking-[0.3em] uppercase text-[#E5CB8C] font-serif">
              शुभ विवाह
            </h2>
            <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#C5A15B]" />
          </div>
        </div>

        {/* Couple Names in Hindi & English */}
        <div className="space-y-2 md:space-y-3">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-hindi gold-gradient-text tracking-wide drop-shadow-lg">
            अविनाश
          </h1>

          <div className="flex items-center justify-center gap-4 py-1">
            <span className="h-[1px] w-16 md:w-24 bg-[#C5A15B]/50" />
            <div className="w-10 h-10 rounded-full border border-[#C5A15B] flex items-center justify-center bg-[#4A101B]/80 text-[#E5CB8C] shadow-gold-glow">
              <Heart className="w-5 h-5 fill-[#E5CB8C]" />
            </div>
            <span className="h-[1px] w-16 md:w-24 bg-[#C5A15B]/50" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-hindi gold-gradient-text tracking-wide drop-shadow-lg">
            दीपांजली
          </h1>
        </div>

        {/* English Script subtitle */}
        <p className="mt-4 text-base md:text-2xl font-cormorant italic text-[#E9D8B5] tracking-widest">
          Avinash & Deepanjali
        </p>

        {/* Wedding Date & Day Badge */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm md:text-base text-[#FFF9EB] font-hindi">
          <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#4A101B]/80 border border-[#C5A15B]/60 backdrop-blur-sm shadow-md">
            <Calendar className="w-4 h-4 text-[#C5A15B]" />
            <span>09 दिसम्बर 2026</span>
            <span className="text-[#C5A15B]">|</span>
            <span>बुधवार (Wednesday)</span>
          </div>

          <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#4A101B]/80 border border-[#C5A15B]/60 backdrop-blur-sm shadow-md">
            <MapPin className="w-4 h-4 text-[#C5A15B]" />
            <span>गाजीपुर, उत्तर प्रदेश</span>
          </div>
        </div>

        {/* Call to Action: Open Invitation */}
        <div className="mt-8">
          <button
            onClick={onOpenInvitation}
            className="group relative inline-flex items-center gap-3 px-8 md:px-10 py-3.5 md:py-4 rounded-full bg-gradient-to-r from-[#9E7B35] via-[#E5CB8C] to-[#9E7B35] text-[#2A0810] font-hindi text-base md:text-lg font-bold tracking-wider shadow-gold-glow hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span>आमंत्रण खोलें</span>
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            <span className="absolute -inset-1 rounded-full border border-[#FFF9EB]/40 animate-pulse pointer-events-none" />
          </button>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="relative z-20 pb-4 text-center">
        <button
          onClick={onOpenInvitation}
          className="text-[#C5A15B]/80 hover:text-[#E5CB8C] transition-colors flex flex-col items-center gap-1 text-xs uppercase tracking-widest font-serif"
        >
          <span>स्क्रॉल करें</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
};
