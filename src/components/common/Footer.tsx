import React from 'react';
import { WEDDING_DATA } from '../../data/weddingData';
import { Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { couple, weddingDate } = WEDDING_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#1A0307] border-t border-[#C5A15B]/30 py-12 px-4 text-[#FFF9EB] text-center overflow-hidden">
      {/* Background Jaali */}
      <div className="absolute inset-0 bg-jaali opacity-15 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-20 space-y-6">
        {/* Sacred Monogram */}
        <div className="w-12 h-12 rounded-full border border-[#C5A15B] flex items-center justify-center mx-auto bg-[#2A0810] shadow-gold-glow">
          <span className="text-[#E5CB8C] font-bold text-lg font-hindi">ॐ</span>
        </div>

        {/* Couple Title */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold font-hindi gold-gradient-text">
            अविनाश संग दीपांजली
          </h3>
          <p className="text-xs uppercase tracking-widest text-[#E9D8B5]/70 font-cormorant mt-1">
            09 December 2026 | Wednesday | Ghazipur, Uttar Pradesh
          </p>
        </div>

        {/* Traditional Blessing */}
        <p className="text-xs sm:text-sm font-hindi text-[#E9D8B5]/80 max-w-lg mx-auto italic">
          "वर-वधु को अपना पावन शुभाशीर्वाद देकर हमारे कुल-परिवार को अनुगृहीत करें।"
        </p>

        {/* Family Details */}
        <div className="text-xs font-hindi text-[#C5A15B]/90 pt-2 border-t border-[#C5A15B]/20">
          <p>निमंत्रक: श्री अमीचन्द्र कन्नौजिया एवं समस्त कन्नौजिया परिवार</p>
          <p className="text-[#E9D8B5]/60 mt-0.5">ग्राम व पोस्ट सिंघोरा, जनपद गाजीपुर (उ.प्र.)</p>
        </div>

        {/* Scroll To Top Button */}
        <div className="pt-4">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#C5A15B]/40 bg-[#2A0810] text-[#E9D8B5] hover:text-[#FFF9EB] hover:border-[#C5A15B] text-xs font-serif transition-colors"
          >
            <span>शीर्ष पर जाएं</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <p className="text-[11px] text-[#E9D8B5]/40 font-serif pt-4">
          © 2026 Shubh Vivah | Designed with traditional Indian elegance and modern 3D web technology.
        </p>
      </div>
    </footer>
  );
};
