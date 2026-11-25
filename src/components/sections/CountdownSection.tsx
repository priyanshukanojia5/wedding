import React, { useState, useEffect } from 'react';
import { WEDDING_DATA } from '../../data/weddingData';
import { Calendar, Clock, Sparkles, Bell } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isWeddingDay: boolean;
  hasPassed: boolean;
}

export const CountdownSection: React.FC = () => {
  const { weddingDate } = WEDDING_DATA;

  const calculateTimeLeft = (): TimeLeft => {
    // Wedding Date in IST: 2026-12-09T15:00:00+05:30
    const target = new Date('2026-12-09T15:00:00+05:30').getTime();
    const now = new Date().getTime();
    const difference = target - now;

    // Check if it's the wedding day (Dec 9, 2026 within 24h)
    const weddingDayStart = new Date('2026-12-09T00:00:00+05:30').getTime();
    const weddingDayEnd = new Date('2026-12-09T23:59:59+05:30').getTime();

    const isWeddingDay = now >= weddingDayStart && now <= weddingDayEnd;
    const hasPassed = now > weddingDayEnd;

    if (difference <= 0 || isWeddingDay) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isWeddingDay: true,
        hasPassed,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isWeddingDay: false,
      hasPassed: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Generate Google Calendar Link
  const handleAddToCalendar = () => {
    const title = encodeURIComponent("शुभ विवाह: अविनाश एवं दीपांजली");
    const details = encodeURIComponent(
      "श्री अमीचन्द्र कन्नौजिया के सुपुत्र अविनाश एवं श्री सतीश कन्नौजिया की सुपुत्री दीपांजली का पावन शुभ विवाह समारोह। बारात प्रस्थान: सायं 3:00 बजे (ग्राम सिंघोरा से ग्राम वाजिदपुर, गाजीपुर)।"
    );
    const location = encodeURIComponent("ग्राम वाजिदपुर, गाजीपुर, उत्तर प्रदेश");
    // Start: 20261209T093000Z (which is 15:00 IST), End: 20261210T023000Z
    const dates = "20261209T093000Z/20261210T023000Z";
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;

    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <section className="relative py-20 px-4 md:px-8 bg-radial from-[#3A0B14] to-[#20050b] overflow-hidden">
      {/* Background Jaali */}
      <div className="absolute inset-0 bg-jaali opacity-25 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-20 text-center">
        {/* Subtitle */}
        <span className="text-[#C5A15B] text-xs uppercase tracking-[0.3em] font-serif flex items-center justify-center gap-2">
          <Clock className="w-3.5 h-3.5" /> शुभ घड़ी का इंतजार <Clock className="w-3.5 h-3.5" />
        </span>

        <h2 className="text-3xl md:text-5xl font-bold font-hindi gold-gradient-text mt-2">
          शुभ विवाह की उलटी गिनती
        </h2>

        <p className="text-sm md:text-base text-[#E9D8B5]/85 mt-3 font-hindi">
          09 दिसम्बर 2026 (बुधवार) | सायं 3:00 बजे (भारतीय मानक समय)
        </p>

        {/* Live Countdown Cards */}
        {timeLeft.isWeddingDay ? (
          <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-[#741C29] via-[#4A101B] to-[#741C29] border-2 border-[#C5A15B] shadow-gold-glow animate-pulse">
            <Sparkles className="w-8 h-8 text-[#E5CB8C] mx-auto mb-3" />
            <h3 className="text-2xl md:text-4xl font-bold font-hindi text-[#FFF9EB]">
              आज पावन शुभ विवाह का मंगल दिवस है!
            </h3>
            <p className="text-base text-[#E9D8B5] mt-2 font-hindi">
              वर-वधु को अपने शुभाशीर्वाद से अनुगृहीत करें।
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto mt-12">
            {/* Days */}
            <div className="rounded-2xl p-5 bg-[#2A0810]/90 border border-[#C5A15B]/50 shadow-maroon-deep flex flex-col items-center justify-center backdrop-blur-sm group hover:border-[#C5A15B] transition-all">
              <span className="text-3xl sm:text-5xl font-bold font-serif text-[#FFF9EB] group-hover:text-[#E5CB8C] transition-colors">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="text-xs uppercase tracking-widest text-[#C5A15B] font-hindi mt-2">
                दिन (Days)
              </span>
            </div>

            {/* Hours */}
            <div className="rounded-2xl p-5 bg-[#2A0810]/90 border border-[#C5A15B]/50 shadow-maroon-deep flex flex-col items-center justify-center backdrop-blur-sm group hover:border-[#C5A15B] transition-all">
              <span className="text-3xl sm:text-5xl font-bold font-serif text-[#FFF9EB] group-hover:text-[#E5CB8C] transition-colors">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-xs uppercase tracking-widest text-[#C5A15B] font-hindi mt-2">
                घंटे (Hours)
              </span>
            </div>

            {/* Minutes */}
            <div className="rounded-2xl p-5 bg-[#2A0810]/90 border border-[#C5A15B]/50 shadow-maroon-deep flex flex-col items-center justify-center backdrop-blur-sm group hover:border-[#C5A15B] transition-all">
              <span className="text-3xl sm:text-5xl font-bold font-serif text-[#FFF9EB] group-hover:text-[#E5CB8C] transition-colors">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-xs uppercase tracking-widest text-[#C5A15B] font-hindi mt-2">
                मिनट (Mins)
              </span>
            </div>

            {/* Seconds */}
            <div className="rounded-2xl p-5 bg-[#2A0810]/90 border border-[#C5A15B]/50 shadow-maroon-deep flex flex-col items-center justify-center backdrop-blur-sm group hover:border-[#C5A15B] transition-all">
              <span className="text-3xl sm:text-5xl font-bold font-serif text-[#E5CB8C] animate-pulse">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-xs uppercase tracking-widest text-[#C5A15B] font-hindi mt-2">
                सेकंड (Secs)
              </span>
            </div>
          </div>
        )}

        {/* Add to Calendar Button */}
        <div className="mt-10">
          <button
            onClick={handleAddToCalendar}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#300810] border border-[#C5A15B]/60 text-[#E9D8B5] hover:text-[#FFF9EB] hover:border-[#C5A15B] shadow-md transition-all hover:scale-105 active:scale-95 text-xs sm:text-sm font-hindi"
          >
            <Bell className="w-4 h-4 text-[#C5A15B]" />
            <span>शुभ तिथि कैलेंडर में सेव करें (Add to Google Calendar)</span>
          </button>
        </div>
      </div>
    </section>
  );
};
