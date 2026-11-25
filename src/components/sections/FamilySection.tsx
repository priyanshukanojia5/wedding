import React from 'react';
import { WEDDING_DATA } from '../../data/weddingData';
import { Sparkles, Heart } from 'lucide-react';

export const FamilySection: React.FC = () => {
  const { familyInvitation } = WEDDING_DATA;

  return (
    <section className="relative py-20 px-4 md:px-8 bg-[#20050b] overflow-hidden">
      {/* Background Jaali */}
      <div className="absolute inset-0 bg-jaali opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-20 text-center">
        {/* Subtle Decorative Arch */}
        <div className="rounded-3xl p-8 sm:p-12 md:p-16 bg-gradient-to-b from-[#3A0B14] to-[#25060E] border-2 border-[#C5A15B]/40 shadow-maroon-deep relative">
          {/* Top Heart Badge */}
          <div className="w-12 h-12 mx-auto -mt-14 sm:-mt-18 mb-6 rounded-full border-2 border-[#C5A15B] bg-[#2A0810] flex items-center justify-center shadow-gold-glow">
            <Heart className="w-5 h-5 text-[#E5CB8C] fill-[#E5CB8C]" />
          </div>

          <span className="text-[#C5A15B] text-xs uppercase tracking-[0.3em] font-serif flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-3.5 h-3.5" /> परिवार का सादर आमंत्रण <Sparkles className="w-3.5 h-3.5" />
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold font-hindi gold-gradient-text tracking-wide mb-6">
            {familyInvitation.headingHindi}
          </h2>

          {/* Emotional Invitation Verse */}
          <p className="text-base sm:text-lg md:text-xl font-hindi text-[#FFF9EB]/90 leading-relaxed max-w-2xl mx-auto italic mb-10">
            "{familyInvitation.blessingQuoteHindi}"
          </p>

          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#C5A15B] to-transparent mx-auto mb-8" />

          {/* Key Host Lineage */}
          <div className="space-y-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#C5A15B] font-serif">
                सादर निमन्त्रक (Main Host)
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold font-hindi text-[#FFF9EB] mt-1">
                {familyInvitation.mainHostHindi}
              </h3>
            </div>

            <div className="pt-2">
              <h4 className="text-xl sm:text-2xl font-semibold font-hindi text-[#E5CB8C]">
                {familyInvitation.familyHindi}
              </h4>
              <p className="text-xs font-serif text-[#E9D8B5]/70 mt-1">
                ग्राम व पोस्ट सिंघोरा, जनपद गाजीपुर (उत्तर प्रदेश)
              </p>
            </div>
          </div>

          {/* Traditional Shloka */}
          <div className="mt-10 pt-6 border-t border-[#C5A15B]/20 text-xs sm:text-sm font-hindi text-[#C5A15B]/90">
            <p>॥ न तस्य रोगो न जरा न मृत्युः प्राप्तस्य योगाग्निमयं शरीरम् ॥</p>
            <p className="text-[11px] text-[#E9D8B5]/60 mt-1 font-serif">
              सदा सुहागन रहो • दीर्घायु हो • सुख-समृद्धि एवं ऐश्वर्य प्राप्त हो
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
