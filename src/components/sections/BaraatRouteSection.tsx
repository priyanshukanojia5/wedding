import React from 'react';
import { WEDDING_DATA } from '../../data/weddingData';
import { MapPin, Navigation, Car, Clock, Sparkles, ArrowRight } from 'lucide-react';

export const BaraatRouteSection: React.FC = () => {
  const { locations, weddingDate } = WEDDING_DATA;

  // Real Google Maps Search Links using verified village & post queries
  const departureMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    locations.departure.mapQuery
  )}`;

  const destinationMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    locations.destination.mapQuery
  )}`;

  const routeDirectionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
    locations.departure.mapQuery
  )}&destination=${encodeURIComponent(locations.destination.mapQuery)}`;

  return (
    <section id="route" className="relative py-24 px-4 md:px-8 bg-radial from-[#300810] via-[#2A0810] to-[#1A0307] overflow-hidden">
      {/* Background Ornamentation */}
      <div className="absolute inset-0 bg-jaali opacity-25 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-20">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-[#C5A15B] text-xs uppercase tracking-[0.3em] font-serif flex items-center justify-center gap-2">
            <Car className="w-3.5 h-3.5" /> पावन बारात प्रस्थान मार्ग <Car className="w-3.5 h-3.5" />
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-hindi gold-gradient-text mt-2">
            बारात यात्रा एवं स्थल विवरण
          </h2>
          <p className="text-sm md:text-base text-[#E9D8B5]/85 max-w-2xl mx-auto mt-3 font-hindi">
            {weddingDate.baraatInvitationHindi}
          </p>
          <div className="w-24 h-[1px] bg-[#C5A15B] mx-auto mt-4" />
        </div>

        {/* Route Visualizer Card */}
        <div className="rounded-3xl p-6 sm:p-10 bg-gradient-to-b from-[#3E0C16] to-[#25060E] border-2 border-[#C5A15B]/50 shadow-maroon-deep relative overflow-hidden">
          {/* Top Info Banner */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-[#2A0810]/80 border border-[#C5A15B]/30 mb-8">
            <div className="flex items-center gap-2 text-sm font-hindi text-[#FFF9EB]">
              <Clock className="w-4 h-4 text-[#C5A15B]" />
              <span>प्रस्थान समय: <strong className="text-[#E5CB8C]">सायं 3:00 बजे</strong></span>
            </div>
            <div className="flex items-center gap-2 text-sm font-hindi text-[#FFF9EB]">
              <Car className="w-4 h-4 text-[#C5A15B]" />
              <span>साधन: <strong className="text-[#E5CB8C]">निजी वाहन</strong></span>
            </div>
            <div className="flex items-center gap-2 text-sm font-hindi text-[#FFF9EB]">
              <Sparkles className="w-4 h-4 text-[#C5A15B]" />
              <span>तिथि: <strong className="text-[#E5CB8C]">09 दिसम्बर 2026 (बुधवार)</strong></span>
            </div>
          </div>

          {/* Interactive Route Diagram: Singhora -> Wajidpur */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative items-stretch">
            {/* ORIGIN / DEPARTURE */}
            <div className="rounded-2xl p-6 bg-[#20050B]/80 border border-[#C5A15B]/40 flex flex-col justify-between group hover:border-[#C5A15B] transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-serif bg-[#741C29] text-[#FFF9EB] border border-[#C5A15B]/40">
                    प्रस्थान स्थल (Origin)
                  </span>
                  <MapPin className="w-5 h-5 text-[#C5A15B]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-hindi text-[#FFF9EB] group-hover:text-[#E5CB8C] transition-colors">
                  {locations.departure.titleHindi}
                </h3>
                <p className="text-sm font-hindi text-[#E9D8B5]/85 mt-2 leading-relaxed">
                  {locations.departure.addressHindi}
                </p>
                <p className="text-xs text-[#C5A15B]/80 font-cormorant italic mt-1">
                  {locations.departure.addressEnglish}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#C5A15B]/20">
                <a
                  href={departureMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-hindi text-[#E5CB8C] hover:text-[#FFF9EB] transition-colors font-semibold"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Google Maps पर सिंघोरा देखें</span>
                </a>
              </div>
            </div>

            {/* DESTINATION / WEDDING VENUE */}
            <div className="rounded-2xl p-6 bg-[#20050B]/80 border border-[#C5A15B]/40 flex flex-col justify-between group hover:border-[#C5A15B] transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-serif bg-[#741C29] text-[#FFF9EB] border border-[#C5A15B]/40">
                    गंतव्य स्थल (Destination)
                  </span>
                  <MapPin className="w-5 h-5 text-[#E5CB8C]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-hindi text-[#FFF9EB] group-hover:text-[#E5CB8C] transition-colors">
                  {locations.destination.titleHindi}
                </h3>
                <p className="text-sm font-hindi text-[#E9D8B5]/85 mt-2 leading-relaxed">
                  {locations.destination.addressHindi}
                </p>
                <p className="text-xs text-[#C5A15B]/80 font-cormorant italic mt-1">
                  {locations.destination.addressEnglish}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#C5A15B]/20">
                <a
                  href={destinationMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-hindi text-[#E5CB8C] hover:text-[#FFF9EB] transition-colors font-semibold"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Google Maps पर वाजिदपुर देखें</span>
                </a>
              </div>
            </div>
          </div>

          {/* Central Route Direction CTA Button */}
          <div className="mt-8 text-center">
            <a
              href={routeDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C5A15B] via-[#E5CB8C] to-[#C5A15B] text-[#2A0810] font-hindi font-bold text-sm sm:text-base shadow-gold-glow hover:scale-105 active:scale-95 transition-all"
            >
              <span>सिंघोरा से वाजिदपुर का नेविगेशन मार्ग खोलें</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
