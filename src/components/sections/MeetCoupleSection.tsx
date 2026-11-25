import React from 'react';
import { WEDDING_DATA } from '../../data/weddingData';
import { Sparkles, MapPin, Users, Heart } from 'lucide-react';

export const MeetCoupleSection: React.FC = () => {
  const { couple } = WEDDING_DATA;

  return (
    <section id="couple" className="relative py-24 px-4 md:px-8 bg-radial from-[#300810] via-[#2A0810] to-[#1E040A] overflow-hidden">
      {/* Decorative Traditional Jaali */}
      <div className="absolute inset-0 bg-jaali opacity-25 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-20">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-[#C5A15B] text-xs uppercase tracking-[0.3em] font-serif flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" /> परिणय सूत्र में बंधते युगल <Sparkles className="w-3.5 h-3.5" />
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-hindi gold-gradient-text mt-2">
            वर एवं वधु परिचय
          </h2>
          <p className="text-sm md:text-base text-[#E9D8B5]/80 max-w-xl mx-auto mt-3 font-hindi">
            दो सुसंस्कृत कुलों का मिलन, दो पावन हृदयों का नव-प्रारम्भ
          </p>
          <div className="w-24 h-[1px] bg-[#C5A15B] mx-auto mt-4" />
        </div>

        {/* Centerpiece: Royal Couple Portrait in Arch Frame */}
        <div className="max-w-md mx-auto mb-16 relative">
          <div className="relative p-3 rounded-t-full border-4 border-[#C5A15B] bg-gradient-to-b from-[#741C29] to-[#300810] shadow-gold-glow">
            {/* Golden Arch Finial */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-2 border-[#C5A15B] bg-[#2A0810] flex items-center justify-center shadow-lg">
              <Heart className="w-5 h-5 text-[#E5CB8C] fill-[#E5CB8C]" />
            </div>

            {/* Actual Verified Couple Image */}
            <div className="rounded-t-full overflow-hidden aspect-[4/5] relative">
              <img
                src="/images/couple.jpg"
                alt="Avinash & Deepanjali"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A0810] via-transparent to-transparent opacity-40" />
            </div>

            {/* Inscription Below Arch */}
            <div className="text-center py-4 bg-[#2A0810]/95 border-t border-[#C5A15B]/40">
              <h3 className="text-2xl font-bold font-hindi gold-gradient-text">
                अविनाश संग दीपांजली
              </h3>
              <p className="text-xs uppercase tracking-widest text-[#E9D8B5]/80 font-cormorant mt-1">
                Auspicious Bond of Two Souls
              </p>
            </div>
          </div>
        </div>

        {/* Two Individual Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* GROOM'S CARD */}
          <div className="relative group rounded-3xl p-8 bg-gradient-to-b from-[#4A101B]/70 to-[#2A0810]/90 border border-[#C5A15B]/50 shadow-maroon-deep backdrop-blur-sm hover:border-[#C5A15B] transition-all duration-500">
            {/* Top Ornamental Badge */}
            <div className="flex items-center justify-between border-b border-[#C5A15B]/30 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#C5A15B]" />
                <span className="text-xs uppercase tracking-widest font-serif text-[#E5CB8C]">
                  आयुष्मान वर
                </span>
              </div>
              <span className="text-xs font-serif text-[#C5A15B]/80">Groom</span>
            </div>

            {/* Name */}
            <div className="mb-6">
              <h3 className="text-3xl lg:text-4xl font-bold font-hindi text-[#FFF9EB] group-hover:text-[#E5CB8C] transition-colors">
                {couple.groom.nameHindi}
              </h3>
              <p className="text-sm font-cormorant italic text-[#C5A15B] mt-1">
                {couple.groom.nameEnglish}
              </p>
            </div>

            {/* Family Lineage */}
            <div className="space-y-4 text-sm font-hindi">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#20050b]/60 border border-[#C5A15B]/20">
                <Users className="w-5 h-5 text-[#C5A15B] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-[#E9D8B5]/60 font-serif uppercase tracking-wider">माता एवं पिता</p>
                  <p className="text-base text-[#FFF9EB] font-medium mt-1">
                    माता: <span className="text-[#E5CB8C]">{couple.groom.motherHindi}</span>
                  </p>
                  <p className="text-base text-[#FFF9EB] font-medium">
                    पिता: <span className="text-[#E5CB8C]">{couple.groom.fatherHindi}</span>
                  </p>
                </div>
              </div>

              {/* Residence */}
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#20050b]/60 border border-[#C5A15B]/20">
                <MapPin className="w-5 h-5 text-[#C5A15B] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-[#E9D8B5]/60 font-serif uppercase tracking-wider">मूल निवास स्थान</p>
                  <p className="text-base text-[#FFF9EB] font-medium mt-1">
                    {couple.groom.addressHindi}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* BRIDE'S CARD */}
          <div className="relative group rounded-3xl p-8 bg-gradient-to-b from-[#4A101B]/70 to-[#2A0810]/90 border border-[#C5A15B]/50 shadow-maroon-deep backdrop-blur-sm hover:border-[#C5A15B] transition-all duration-500">
            {/* Top Ornamental Badge */}
            <div className="flex items-center justify-between border-b border-[#C5A15B]/30 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#C5A15B]" />
                <span className="text-xs uppercase tracking-widest font-serif text-[#E5CB8C]">
                  आयुष्मती वधु
                </span>
              </div>
              <span className="text-xs font-serif text-[#C5A15B]/80">Bride</span>
            </div>

            {/* Name */}
            <div className="mb-6">
              <h3 className="text-3xl lg:text-4xl font-bold font-hindi text-[#FFF9EB] group-hover:text-[#E5CB8C] transition-colors">
                {couple.bride.nameHindi}
              </h3>
              <p className="text-sm font-cormorant italic text-[#C5A15B] mt-1">
                {couple.bride.nameEnglish}
              </p>
            </div>

            {/* Family Lineage */}
            <div className="space-y-4 text-sm font-hindi">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#20050b]/60 border border-[#C5A15B]/20">
                <Users className="w-5 h-5 text-[#C5A15B] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-[#E9D8B5]/60 font-serif uppercase tracking-wider">माता एवं पिता</p>
                  <p className="text-base text-[#FFF9EB] font-medium mt-1">
                    माता: <span className="text-[#E5CB8C]">{couple.bride.motherHindi}</span>
                  </p>
                  <p className="text-base text-[#FFF9EB] font-medium">
                    पिता: <span className="text-[#E5CB8C]">{couple.bride.fatherHindi}</span>
                  </p>
                </div>
              </div>

              {/* Residence */}
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#20050b]/60 border border-[#C5A15B]/20">
                <MapPin className="w-5 h-5 text-[#C5A15B] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-[#E9D8B5]/60 font-serif uppercase tracking-wider">मूल निवास स्थान</p>
                  <p className="text-base text-[#FFF9EB] font-medium mt-1">
                    {couple.bride.addressHindi}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
