import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Disc3 } from 'lucide-react';

export const BackgroundAudio: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const isPlayingRef = useRef<boolean>(false);
  const timerRef = useRef<number | null>(null);

  // Shehnai & Tanpura Synthesizer using Web Audio API
  const startIndianMelody = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioContextClass();
      audioCtxRef.current = ctx;

      // Master Gain
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.2, ctx.currentTime);
      masterGain.connect(ctx.destination);

      // Tanpura Drone (Sa - Pa - Sa' fundamental frequencies in C# / 138.59 Hz)
      const droneNotes = [138.59, 207.65, 277.18];
      droneNotes.forEach((freq) => {
        const osc = ctx.createOscillator();
        const droneGain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Lowpass filter to give warm rich acoustic tanpura timbre
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(650, ctx.currentTime);

        droneGain.gain.setValueAtTime(0.06, ctx.currentTime);

        osc.connect(filter);
        filter.connect(droneGain);
        droneGain.connect(masterGain);
        osc.start();
      });

      // Shehnai Raga Melodic Phrasing (Auspicious Raag Bilawal / Yaman notes: Sa, Re, Ga, Ma, Pa, Dha, Ni)
      // Base frequencies in octave 4:
      const ragaNotes = [
        277.18, // C#4 (Sa)
        311.13, // D#4 (Re)
        349.23, // F4  (Ga)
        369.99, // F#4 (Ma)
        415.30, // G#4 (Pa)
        466.16, // A#4 (Dha)
        523.25, // C5  (Ni)
        554.37, // C#5 (Sa')
      ];

      // Classical wedding melody pattern intervals
      const melodySequence = [
        0, 2, 4, 3, 2, 0, 4, 7, 6, 4, 2, 0,
        4, 6, 7, 7, 6, 4, 2, 3, 2, 0, 0
      ];
      let step = 0;

      const playMelodyNote = () => {
        if (!isPlayingRef.current || !ctx || ctx.state === 'closed') return;

        const noteIndex = melodySequence[step % melodySequence.length];
        const freq = ragaNotes[noteIndex];
        const noteDuration = (step % 4 === 3) ? 1.4 : 0.8;

        const osc = ctx.createOscillator();
        const noteGain = ctx.createGain();
        const vibrato = ctx.createOscillator();
        const vibratoGain = ctx.createGain();

        // Shehnai distinct reed reedy timbre: triangle/sawtooth mix
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Shehnai expressive pitch bend / Meend
        const nextFreq = ragaNotes[melodySequence[(step + 1) % melodySequence.length]];
        osc.frequency.setTargetAtTime(freq * 1.02, ctx.currentTime, 0.05);
        osc.frequency.setTargetAtTime(freq, ctx.currentTime + 0.1, 0.1);

        // Vibrato for natural Indian woodwind vocal quality
        vibrato.frequency.setValueAtTime(5.5, ctx.currentTime); // 5.5 Hz vibrato
        vibratoGain.gain.setValueAtTime(4.0, ctx.currentTime);
        vibrato.connect(osc.frequency);
        vibrato.start();

        // Gentle envelope
        noteGain.gain.setValueAtTime(0.001, ctx.currentTime);
        noteGain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 0.1);
        noteGain.gain.setTargetAtTime(0.001, ctx.currentTime + noteDuration - 0.1, 0.08);

        // Warm bandpass filter
        const filter = ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(freq * 1.8, ctx.currentTime);
        filter.Q.setValueAtTime(2.5, ctx.currentTime);

        osc.connect(filter);
        filter.connect(noteGain);
        noteGain.connect(masterGain);

        osc.start();
        osc.stop(ctx.currentTime + noteDuration);
        vibrato.stop(ctx.currentTime + noteDuration);

        step++;
        timerRef.current = window.setTimeout(playMelodyNote, noteDuration * 950);
      };

      isPlayingRef.current = true;
      playMelodyNote();
    } catch (e) {
      console.warn("Audio Context init blocked or not supported:", e);
    }
  };

  const stopIndianMelody = () => {
    isPlayingRef.current = false;
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (audioCtxRef.current) {
      try {
        audioCtxRef.current.close();
      } catch (e) {}
      audioCtxRef.current = null;
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopIndianMelody();
      setIsPlaying(false);
    } else {
      startIndianMelody();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    return () => {
      stopIndianMelody();
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Audio Play/Pause Button */}
      <button
        onClick={togglePlay}
        aria-label={isPlaying ? "संगीत बंद करें" : "मंगल संगीत बजाएं"}
        className={`group relative flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-[#C5A15B] shadow-2xl backdrop-blur-md transition-all duration-300 ${
          isPlaying
            ? 'bg-[#741C29]/95 text-[#FFF9EB] ring-2 ring-[#C5A15B]/50'
            : 'bg-[#2A0810]/90 text-[#E9D8B5] hover:bg-[#4A101B] hover:text-[#FFF9EB]'
        }`}
      >
        {isPlaying ? (
          <>
            <Disc3 className="w-5 h-5 text-[#E5CB8C] animate-spin" />
            <span className="text-xs font-serif hidden sm:inline tracking-wide">
              शहनाई मंगल धुन
            </span>
            <Volume2 className="w-4 h-4 text-[#E5CB8C]" />
          </>
        ) : (
          <>
            <Music className="w-5 h-5 text-[#C5A15B] group-hover:scale-110 transition-transform" />
            <span className="text-xs font-serif hidden sm:inline tracking-wide">
              मंगल संगीत बजाएं
            </span>
            <VolumeX className="w-4 h-4 text-[#C5A15B]/70" />
          </>
        )}

        {/* Outer glowing ring when active */}
        {isPlaying && (
          <span className="absolute -inset-1 rounded-full border border-[#C5A15B]/30 animate-pulse pointer-events-none" />
        )}
      </button>
    </div>
  );
};
