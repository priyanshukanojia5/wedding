import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Flame, Sparkles, Heart } from 'lucide-react';

export const InteractiveDiya3D: React.FC = () => {
  const [blessingCount, setBlessingCount] = useState<number>(() => {
    const saved = localStorage.getItem('avinash_deepanjali_blessings');
    return saved ? parseInt(saved, 10) : 108;
  });
  const [hasBlessed, setHasBlessed] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleLightDiya = () => {
    if (hasBlessed) return;

    const newCount = blessingCount + 1;
    setBlessingCount(newCount);
    setHasBlessed(true);
    localStorage.setItem('avinash_deepanjali_blessings', newCount.toString());

    // Play subtle soft celebratory chime with Web Audio API
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5 (Auspicious Indian scale tone)
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.3); // A5
      gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1.2);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 1.2);
    } catch (e) {
      // AudioContext fallback
    }

    // Trigger auspicious rose and gold confetti shower
    confetti({
      particleCount: 45,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#C5A15B', '#881D2A', '#E5A024', '#FFF9EB'],
      disableForReducedMotion: true,
    });
  };

  return (
    <div className="relative flex flex-col items-center justify-center p-8 rounded-2xl bg-gradient-to-b from-[#3a0b14] to-[#20050b] border border-[#C5A15B]/40 shadow-2xl overflow-hidden max-w-lg mx-auto text-center">
      {/* Background glow */}
      <div
        className={`absolute inset-0 bg-radial from-[#C5A15B]/15 via-transparent to-transparent transition-opacity duration-700 pointer-events-none ${
          hasBlessed ? 'opacity-100 scale-110' : 'opacity-60'
        }`}
      />

      <span className="text-[#C5A15B] text-xs uppercase tracking-widest font-serif mb-2 flex items-center gap-1.5">
        <Sparkles className="w-3.5 h-3.5" /> पावन दीप प्रज्वलन <Sparkles className="w-3.5 h-3.5" />
      </span>

      <h3 className="text-xl md:text-2xl font-bold text-[#FFF9EB] mb-2 font-hindi">
        वर-वधु को अपना शुभाशीर्वाद प्रदान करें
      </h3>
      <p className="text-sm text-[#E9D8B5]/80 mb-6 max-w-xs font-hindi">
        दीप प्रज्वलित कर नवदम्पति के सुखद एवं मंगलमय दाम्पत्य जीवन की कामना करें।
      </p>

      {/* 3D Diya Visual Frame */}
      <div
        className="relative cursor-pointer group mb-6 transition-transform duration-500 hover:scale-105"
        onClick={handleLightDiya}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative w-44 h-44 rounded-full flex items-center justify-center p-3">
          {/* Pulsing Aura */}
          <div
            className={`absolute inset-0 rounded-full bg-gradient-to-r from-[#e5a024]/30 via-[#c5a15b]/20 to-[#8b1e2c]/30 blur-xl transition-all duration-700 ${
              hasBlessed ? 'scale-125 opacity-100 animate-pulse' : 'scale-100 opacity-60'
            }`}
          />

          {/* Diya Image with Rounded Golden Ornamental Rim */}
          <div className="relative w-36 h-36 rounded-full overflow-hidden border-2 border-[#C5A15B] shadow-inner">
            <img
              src="/images/diya.jpg"
              alt="Traditional Diya"
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
            {/* Flame overlay animation */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#ffd54f]/10 to-[#ff9922]/30 mix-blend-screen pointer-events-none animate-flicker" />
          </div>

          {/* Floating Flame Indicator */}
          <div className="absolute -top-1 bg-[#4A101B] border border-[#C5A15B] text-[#FFF9EB] px-3 py-1 rounded-full text-xs font-serif flex items-center gap-1 shadow-lg">
            <Flame className="w-3.5 h-3.5 text-[#E5A024] animate-bounce" />
            <span>{hasBlessed ? 'प्रज्वलित' : 'स्पर्श करें'}</span>
          </div>
        </div>
      </div>

      {/* Blessing Action Button */}
      <button
        onClick={handleLightDiya}
        disabled={hasBlessed}
        className={`px-8 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 shadow-lg flex items-center gap-2 ${
          hasBlessed
            ? 'bg-[#C5A15B]/20 text-[#E5CB8C] border border-[#C5A15B]/50 cursor-default'
            : 'bg-gradient-to-r from-[#C5A15B] via-[#E5CB8C] to-[#C5A15B] text-[#300810] hover:shadow-gold-glow hover:scale-105 active:scale-95 font-medium'
        }`}
      >
        <Heart className={`w-4 h-4 ${hasBlessed ? 'fill-[#E5CB8C]' : 'fill-[#741C29]'}`} />
        <span>{hasBlessed ? 'आपका आशीर्वाद प्राप्त हुआ ✓' : 'दीप प्रज्वलित करें'}</span>
      </button>

      {/* Blessing Counter */}
      <div className="mt-5 text-xs text-[#E9D8B5]/70 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#E5A024] animate-ping" />
        <span>अब तक <strong className="text-[#E5CB8C] text-sm font-bold">{blessingCount}</strong> स्नेहिल आशीर्वाद प्राप्त हो चुके हैं</span>
      </div>
    </div>
  );
};
