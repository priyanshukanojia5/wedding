import React from 'react';
import { WEDDING_DATA } from '../../data/weddingData';
import { Sparkles } from 'lucide-react';

export const InvitationCardSection: React.FC = () => {
  const { couple, weddingDate } = WEDDING_DATA;

  return (
    <section id="invitation-card" className="relative py-20 px-4 md:px-8 bg-[#20050b] overflow-hidden">
      {/* Background traditional subtle pattern */}
      <div className="absolute inset-0 bg-jaali opacity-30 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-20">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-[#C5A15B] text-xs uppercase tracking-[0.3em] font-serif flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" /> पावन आमंत्रण पत्र <Sparkles className="w-3.5 h-3.5" />
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-hindi gold-gradient-text mt-2">
            सप्रेम निमंत्रण
          </h2>
          <div className="w-24 h-[1px] bg-[#C5A15B] mx-auto mt-4" />
        </div>

        {/* The Luxury Printed Invitation Card (Ivory Paper Aesthetic) */}
        <div className="relative paper-texture rounded-3xl p-6 sm:p-10 md:p-16 border-4 md:border-8 border-[#C5A15B]/80 shadow-maroon-deep text-[#25201D]">
          {/* Inner Golden Filigree Border */}
          <div className="border border-[#741C29]/30 rounded-2xl p-6 sm:p-8 md:p-12 relative overflow-hidden">
            {/* 4 Corner Ornaments */}
            <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-[#C5A15B]" />
            <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-[#C5A15B]" />
            <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-[#C5A15B]" />
            <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-[#C5A15B]" />

            {/* Sacred Om & Ganesha Emblem */}
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-2 rounded-full border border-[#C5A15B] flex items-center justify-center bg-[#FFF9EB] shadow-sm">
                <span className="text-3xl text-[#741C29] font-bold font-hindi">ॐ</span>
              </div>
              <p className="text-lg md:text-xl font-bold text-[#741C29] font-hindi tracking-wider">
                ॥ श्री गणेशाय नमः ॥
              </p>
              <p className="text-xs text-[#741C29]/70 font-hindi mt-1 italic">
                मङ्गलम् भगवान विष्णुः मङ्गलम् गरुडध्वजः। मङ्गलम् पुण्डरीकाक्षो मङ्गलाय तनो हरिः॥
              </p>
            </div>

            {/* Formal Invitation Message in Hindi */}
            <div className="text-center max-w-2xl mx-auto my-6 space-y-4">
              <p className="text-base sm:text-lg md:text-xl font-hindi leading-relaxed text-[#4A101B] font-medium">
                मान्यवर,
              </p>
              <p className="text-base sm:text-lg md:text-xl font-hindi leading-relaxed text-[#25201D]">
                हमें अत्यंत हर्ष हो रहा है कि हमारे परिवार में शुभ विवाह का मंगल अवसर आया है।
                इस शुभ अवसर पर आपकी गरिमामयी उपस्थिति एवं आशीर्वाद सादर प्रार्थनीय है।
              </p>
            </div>

            {/* Center Names Typography */}
            <div className="my-8 md:my-10 text-center py-6 border-y border-[#C5A15B]/40 bg-[#FFFDF7]/60 rounded-xl">
              <div className="space-y-4">
                {/* Groom's Name */}
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#741C29] font-serif block mb-1">
                    आयुष्मान (वर)
                  </span>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold font-hindi text-[#741C29] tracking-wide">
                    {couple.groom.nameHindi}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#741C29]/80 font-serif mt-1">
                    सुपुत्र: {couple.groom.motherHindi} एवं {couple.groom.fatherHindi}
                  </p>
                  <p className="text-xs text-[#25201D]/70 font-hindi">
                    निवास: {couple.groom.addressHindi}
                  </p>
                </div>

                {/* Parinay Tie */}
                <div className="flex items-center justify-center gap-4 my-2">
                  <span className="h-[1px] w-16 bg-[#C5A15B]" />
                  <span className="px-4 py-1 rounded-full border border-[#C5A15B] text-xs font-bold text-[#741C29] bg-[#FFF9EB] uppercase tracking-widest font-hindi">
                    संग परिणय
                  </span>
                  <span className="h-[1px] w-16 bg-[#C5A15B]" />
                </div>

                {/* Bride's Name */}
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#741C29] font-serif block mb-1">
                    आयुष्मती (वधु)
                  </span>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold font-hindi text-[#741C29] tracking-wide">
                    {couple.bride.nameHindi}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#741C29]/80 font-serif mt-1">
                    सुपुत्री: {couple.bride.motherHindi} एवं {couple.bride.fatherHindi}
                  </p>
                  <p className="text-xs text-[#25201D]/70 font-hindi">
                    निवास: {couple.bride.addressHindi}
                  </p>
                </div>
              </div>
            </div>

            {/* Wedding Date & Day Summary */}
            <div className="text-center space-y-2 mt-6">
              <div className="inline-block px-6 py-2 rounded-full bg-[#741C29] text-[#FFF9EB] font-hindi text-base sm:text-lg font-semibold shadow-md">
                तिथि: {weddingDate.displayDateHindi} ({weddingDate.dayHindi})
              </div>
              <p className="text-sm font-hindi text-[#741C29] font-medium pt-2">
                बारात प्रस्थान: {weddingDate.baraatDepartureTime} ({weddingDate.transportHindi})
              </p>
            </div>

            {/* Footer Blessing Request */}
            <div className="mt-8 text-center text-xs sm:text-sm font-hindi text-[#25201D]/80">
              <p>दर्शनाभिलाषी: समस्त कन्नौजिया परिवार एवं स्नेहीजन</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
