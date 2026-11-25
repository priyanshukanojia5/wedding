import React, { useState } from 'react';
import { WEDDING_DATA, EventDetail } from '../../data/weddingData';
import { Calendar, Clock, MapPin, Sparkles, Car, Flower2, HeartHandshake, Sun } from 'lucide-react';

export const EventsTimelineSection: React.FC = () => {
  const { events } = WEDDING_DATA;
  const [activeEvent, setActiveEvent] = useState<string>(events[0].id);

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'tilak':
        return <Sun className="w-6 h-6 text-[#E5CB8C]" />;
      case 'haldi':
        return <Flower2 className="w-6 h-6 text-[#E5B942]" />;
      case 'mehndi':
        return <Sparkles className="w-6 h-6 text-[#7DAF74]" />;
      case 'wedding':
        return <HeartHandshake className="w-6 h-6 text-[#E58C9B]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#C5A15B]" />;
    }
  };

  return (
    <section id="events" className="relative py-24 px-4 md:px-8 bg-[#20050b] overflow-hidden">
      {/* Background Ornamentation */}
      <div className="absolute inset-0 bg-jaali opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-20">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-[#C5A15B] text-xs uppercase tracking-[0.3em] font-serif flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" /> शुभ मंगल कार्यक्रमानुसार <Sparkles className="w-3.5 h-3.5" />
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-hindi gold-gradient-text mt-2">
            मांगलिक कार्यक्रम विवरण
          </h2>
          <p className="text-sm md:text-base text-[#E9D8B5]/80 max-w-xl mx-auto mt-3 font-hindi">
            दिसम्बर 2026 के पावन शुभ मुहूर्त एवं तिथियां
          </p>
          <div className="w-24 h-[1px] bg-[#C5A15B] mx-auto mt-4" />
        </div>

        {/* Timeline Desktop & Mobile Responsive Grid */}
        <div className="relative">
          {/* Vertical Connecting Line on Desktop */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-10 bottom-10 w-[2px] bg-gradient-to-b from-[#C5A15B]/20 via-[#C5A15B] to-[#C5A15B]/20 pointer-events-none" />

          <div className="space-y-12 lg:space-y-16">
            {events.map((event: EventDetail, idx: number) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={event.id}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                  onMouseEnter={() => setActiveEvent(event.id)}
                >
                  {/* Central Auspicious Node on Desktop */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-2 border-[#C5A15B] bg-[#2A0810] items-center justify-center z-30 shadow-gold-glow">
                    {getEventIcon(event.iconType)}
                  </div>

                  {/* Event Content Card */}
                  <div className={`w-full lg:w-[46%] ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="group relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#3A0B14]/80 to-[#25060E]/95 border border-[#C5A15B]/40 hover:border-[#C5A15B] shadow-maroon-deep transition-all duration-500 hover:-translate-y-1 hover:shadow-gold-glow">
                      {/* Top Header Badge */}
                      <div
                        className={`flex items-center gap-3 mb-4 ${
                          isEven ? 'lg:justify-end' : 'lg:justify-start'
                        }`}
                      >
                        <span className="lg:hidden p-2 rounded-full border border-[#C5A15B] bg-[#2A0810]">
                          {getEventIcon(event.iconType)}
                        </span>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4A101B] border border-[#C5A15B]/40 text-xs font-serif text-[#E5CB8C]">
                          <Calendar className="w-3.5 h-3.5 text-[#C5A15B]" />
                          <span>{event.dateFormatted}</span>
                          <span className="text-[#C5A15B]">|</span>
                          <span>{event.dayHindi}</span>
                        </div>
                      </div>

                      {/* Event Title */}
                      <h3 className="text-2xl sm:text-3xl font-bold font-hindi text-[#FFF9EB] group-hover:text-[#E5CB8C] transition-colors">
                        {event.nameHindi}
                      </h3>
                      <p className="text-xs uppercase tracking-widest text-[#C5A15B] font-cormorant mt-1 mb-4">
                        {event.nameEnglish} ({event.dayEnglish})
                      </p>

                      {/* Event Description */}
                      <p className="text-sm font-hindi text-[#E9D8B5]/85 leading-relaxed mb-6">
                        {event.descriptionHindi}
                      </p>

                      {/* Details Box (Timing, Venue, Special Notes) */}
                      <div className="space-y-3 pt-4 border-t border-[#C5A15B]/20 text-xs sm:text-sm font-hindi text-[#FFF9EB]/90">
                        {/* Time */}
                        <div
                          className={`flex items-center gap-2.5 ${
                            isEven ? 'lg:justify-end' : 'lg:justify-start'
                          }`}
                        >
                          <Clock className="w-4 h-4 text-[#C5A15B] shrink-0" />
                          <span className="text-[#E5CB8C] font-semibold">{event.timeText}</span>
                        </div>

                        {/* Venue */}
                        <div
                          className={`flex items-center gap-2.5 ${
                            isEven ? 'lg:justify-end' : 'lg:justify-start'
                          }`}
                        >
                          <MapPin className="w-4 h-4 text-[#C5A15B] shrink-0" />
                          <span>{event.venueHindi}</span>
                        </div>

                        {/* Special Note (Baraat details for wedding) */}
                        {event.note && (
                          <div className="mt-4 p-3 rounded-xl bg-[#741C29]/40 border border-[#C5A15B]/40 text-left">
                            <div className="flex items-start gap-2">
                              <Car className="w-4 h-4 text-[#E5CB8C] shrink-0 mt-0.5" />
                              <p className="text-xs text-[#FFF9EB] leading-relaxed">
                                {event.note}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Empty side for balanced spacing on desktop */}
                  <div className="hidden lg:block lg:w-[46%]" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Reassurance Note */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#300810] border border-[#C5A15B]/40 text-xs text-[#E9D8B5]/80 font-hindi">
            <Sparkles className="w-4 h-4 text-[#C5A15B]" />
            <span>सभी मांगलिक अनुष्ठान वैदिक मर्यादा एवं सनातन रीति-रिवाजों के अनुसार सम्पन्न होंगे।</span>
          </div>
        </div>
      </div>
    </section>
  );
};
