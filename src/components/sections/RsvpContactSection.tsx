import React, { useState } from 'react';
import { WEDDING_DATA } from '../../data/weddingData';
import { Phone, MessageCircle, Send, CheckCircle2, User, Users, HeartHandshake, Sparkles, Heart } from 'lucide-react';

interface RsvpEntry {
  guestName: string;
  guestCount: string;
  attendance: 'attending' | 'not_attending';
  message: string;
  timestamp: string;
}

export const RsvpContactSection: React.FC = () => {
  const { contacts, rsvp } = WEDDING_DATA;

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    guestCount: '1',
    attendance: 'attending',
    message: '',
  });

  const [savedRsvp, setSavedRsvp] = useState<RsvpEntry | null>(() => {
    const existing = localStorage.getItem('avinash_deepanjali_user_rsvp');
    return existing ? JSON.parse(existing) : null;
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    setIsSubmitting(true);

    const newRsvp: RsvpEntry = {
      guestName: formData.name.trim(),
      guestCount: formData.guestCount,
      attendance: formData.attendance as 'attending' | 'not_attending',
      message: formData.message.trim(),
      timestamp: new Date().toISOString(),
    };

    // Save to local storage (client storage)
    localStorage.setItem('avinash_deepanjali_user_rsvp', JSON.stringify(newRsvp));
    setSavedRsvp(newRsvp);
    setIsSubmitting(false);
    setShowSuccessModal(true);
  };

  const handleSendViaWhatsApp = (rsvpData: RsvpEntry) => {
    const attendanceText =
      rsvpData.attendance === 'attending'
        ? `समारोह में सम्मिलित होंगे (कुल अतिथि: ${rsvpData.guestCount})`
        : 'समारोह में सम्मिलित नहीं हो पाएंगे';

    const fullMessage = `नमस्कार! अविनाश एवं दीपांजली के शुभ विवाह समारोह में सम्मिलित होने के लिए हम अपनी उपस्थिति की पुष्टि करना चाहते हैं।\n\n• अतिथि का नाम: ${rsvpData.guestName}\n• उपस्थिति: ${attendanceText}${
      rsvpData.message ? `\n• मंगल संदेश: ${rsvpData.message}` : ''
    }`;

    // Target the primary mobile 918707885776
    const whatsappUrl = `https://wa.me/918707885776?text=${encodeURIComponent(fullMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="rsvp" className="relative py-24 px-4 md:px-8 bg-radial from-[#2A0810] via-[#1E040A] to-[#120206] overflow-hidden">
      {/* Background Jaali */}
      <div className="absolute inset-0 bg-jaali opacity-25 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-20">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-[#C5A15B] text-xs uppercase tracking-[0.3em] font-serif flex items-center justify-center gap-2">
            <HeartHandshake className="w-3.5 h-3.5" /> स्नेह आमंत्रण एवं उपस्थिति <HeartHandshake className="w-3.5 h-3.5" />
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-hindi gold-gradient-text mt-2">
            उपस्थिति पुष्टि एवं सम्पर्क (RSVP)
          </h2>
          <p className="text-base md:text-xl text-[#FFF9EB] mt-3 font-hindi font-medium">
            "आपकी उपस्थिति हमारे लिए सौभाग्य की बात होगी।"
          </p>
          <div className="w-24 h-[1px] bg-[#C5A15B] mx-auto mt-4" />
        </div>

        {/* 2-Column Layout: Direct Contact / Call on Left, RSVP Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT: Contact Cards & Pure Traditional Welcome Note */}
          <div className="space-y-8">
            {/* Contact Persons Card */}
            <div className="rounded-3xl p-6 sm:p-8 bg-[#300810]/90 border border-[#C5A15B]/50 shadow-maroon-deep backdrop-blur-sm">
              <span className="text-xs uppercase tracking-widest text-[#C5A15B] font-serif block mb-2">
                सम्पर्क सूत्र (Direct Contact)
              </span>
              <h3 className="text-2xl font-bold font-hindi text-[#FFF9EB] mb-6">
                श्री अमीचन्द्र कन्नौजिया
              </h3>

              {/* Verified Phone Numbers */}
              <div className="space-y-4">
                {/* Number 1: 8707885776 */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-[#20050B] border border-[#C5A15B]/30 hover:border-[#C5A15B] transition-colors">
                  <div>
                    <span className="text-xs text-[#E9D8B5]/70 font-hindi">मोबाइल नम्बर (1)</span>
                    <p className="text-lg font-serif font-bold text-[#FFF9EB] tracking-wider">
                      +91 87078 85776
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="tel:+918707885776"
                      className="px-4 py-2 rounded-full bg-[#741C29] hover:bg-[#8D2536] text-[#FFF9EB] text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>कॉल करें</span>
                    </a>
                    <a
                      href={`https://wa.me/918707885776?text=${encodeURIComponent(rsvp.whatsappPrefill)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Number 2: 7021248038 */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-[#20050B] border border-[#C5A15B]/30 hover:border-[#C5A15B] transition-colors">
                  <div>
                    <span className="text-xs text-[#E9D8B5]/70 font-hindi">मोबाइल नम्बर (2)</span>
                    <p className="text-lg font-serif font-bold text-[#FFF9EB] tracking-wider">
                      +91 70212 48038
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="tel:+917021248038"
                      className="px-4 py-2 rounded-full bg-[#741C29] hover:bg-[#8D2536] text-[#FFF9EB] text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>कॉल करें</span>
                    </a>
                    <a
                      href={`https://wa.me/917021248038?text=${encodeURIComponent(rsvp.whatsappPrefill)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Quick WhatsApp Button */}
              <div className="mt-6 pt-4 border-t border-[#C5A15B]/20 text-center">
                <a
                  href={`https://wa.me/918707885776?text=${encodeURIComponent(rsvp.whatsappPrefill)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-medium text-sm transition-transform hover:scale-[1.02] shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>सीधे WhatsApp पर उपस्थिति की पुष्टि करें</span>
                </a>
              </div>
            </div>

            {/* Respectful Welcome & Blessings Card (Pure Hospitality, No Gifts/Payments Requested) */}
            <div className="rounded-3xl p-6 sm:p-8 bg-[#300810]/90 border border-[#C5A15B]/50 shadow-maroon-deep text-center relative overflow-hidden">
              <div className="w-12 h-12 rounded-full border border-[#C5A15B] flex items-center justify-center mx-auto mb-4 bg-[#20050B]">
                <Heart className="w-5 h-5 text-[#E5CB8C] fill-[#E5CB8C]" />
              </div>

              <span className="text-xs uppercase tracking-widest text-[#C5A15B] font-serif block mb-1">
                आदर एवं स्नेह
              </span>
              <h4 className="text-xl font-bold font-hindi text-[#FFF9EB] mb-3">
                आपकी गरिमामयी उपस्थिति ही हमारा सबसे बड़ा उपहार है
              </h4>
              <p className="text-sm font-hindi text-[#E9D8B5]/85 leading-relaxed max-w-md mx-auto">
                विवाह के इस पावन मंगल अवसर पर केवल आपका स्नेहिल शुभाशीर्वाद एवं सानिध्य ही हमारे परिवार के लिए सर्वोपरि है।
              </p>

              <div className="mt-4 pt-4 border-t border-[#C5A15B]/20 text-xs text-[#C5A15B] font-hindi">
                <span>॥ केवल आपकी पावन उपस्थिति एवं शुभाशीर्वाद सादर प्रार्थनीय है ॥</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Functional RSVP Form */}
          <div className="rounded-3xl p-6 sm:p-10 bg-[#300810]/90 border border-[#C5A15B]/50 shadow-maroon-deep backdrop-blur-sm">
            <span className="text-xs uppercase tracking-widest text-[#C5A15B] font-serif block mb-2">
              डिजिटल उपस्थिति पत्र (RSVP Form)
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-hindi text-[#FFF9EB] mb-2">
              अपनी उपस्थिति दर्ज कराएं
            </h3>
            <p className="text-xs sm:text-sm text-[#E9D8B5]/80 font-hindi mb-8">
              कृपया अपनी एवं अपने परिवार की उपस्थिति की जानकारी साझा करें ताकि व्यवस्थाएं सुगम हो सकें।
            </p>

            {savedRsvp && (
              <div className="mb-6 p-4 rounded-2xl bg-[#741C29]/30 border border-[#C5A15B]/40 flex items-start justify-between gap-3">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#E5CB8C] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-[#E5CB8C] font-hindi">
                      आपकी पूर्व प्रविष्टि सुरक्षित है!
                    </p>
                    <p className="text-xs text-[#FFF9EB] font-hindi mt-1">
                      {savedRsvp.guestName} ({savedRsvp.guestCount} अतिथि) -{' '}
                      {savedRsvp.attendance === 'attending' ? 'उपस्थित रहेंगे' : 'उपस्थित नहीं हो पाएंगे'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleSendViaWhatsApp(savedRsvp)}
                  className="text-xs text-[#25D366] hover:underline font-semibold shrink-0"
                >
                  WhatsApp पर भेजें
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Guest Name */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#E9D8B5] font-hindi mb-2">
                  आपका शुभ नाम (Full Name) *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="उदा. राहुल कन्नौजिया / सपरिवार"
                    className="w-full px-4 py-3 pl-11 rounded-xl bg-[#20050B] border border-[#C5A15B]/40 text-[#FFF9EB] placeholder-[#E9D8B5]/40 text-sm focus:outline-none focus:border-[#C5A15B] focus:ring-1 focus:ring-[#C5A15B]"
                  />
                  <User className="w-4 h-4 text-[#C5A15B] absolute left-4 top-3.5" />
                </div>
              </div>

              {/* Attendance Radio */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#E9D8B5] font-hindi mb-2">
                  उपस्थिति (Will you attend?) *
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <label
                    className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                      formData.attendance === 'attending'
                        ? 'bg-[#741C29] border-[#C5A15B] text-[#FFF9EB]'
                        : 'bg-[#20050B] border-[#C5A15B]/30 text-[#E9D8B5]/70 hover:border-[#C5A15B]/60'
                    }`}
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value="attending"
                      checked={formData.attendance === 'attending'}
                      onChange={() => setFormData({ ...formData, attendance: 'attending' })}
                      className="accent-[#C5A15B]"
                    />
                    <span className="text-xs sm:text-sm font-hindi font-medium">हाँ, अवश्य आएंगे</span>
                  </label>

                  <label
                    className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                      formData.attendance === 'not_attending'
                        ? 'bg-[#741C29] border-[#C5A15B] text-[#FFF9EB]'
                        : 'bg-[#20050B] border-[#C5A15B]/30 text-[#E9D8B5]/70 hover:border-[#C5A15B]/60'
                    }`}
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value="not_attending"
                      checked={formData.attendance === 'not_attending'}
                      onChange={() => setFormData({ ...formData, attendance: 'not_attending' })}
                      className="accent-[#C5A15B]"
                    />
                    <span className="text-xs sm:text-sm font-hindi font-medium">खेद है, नहीं आ पाएंगे</span>
                  </label>
                </div>
              </div>

              {/* Number of Guests */}
              {formData.attendance === 'attending' && (
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#E9D8B5] font-hindi mb-2">
                    कुल अतिथियों की संख्या (Number of Guests)
                  </label>
                  <div className="relative">
                    <select
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                      className="w-full px-4 py-3 pl-11 rounded-xl bg-[#20050B] border border-[#C5A15B]/40 text-[#FFF9EB] text-sm focus:outline-none focus:border-[#C5A15B]"
                    >
                      <option value="1">1 व्यक्ति (Only me)</option>
                      <option value="2">2 व्यक्ति (Couple)</option>
                      <option value="3">3 व्यक्ति (Family)</option>
                      <option value="4">4 व्यक्ति (Family)</option>
                      <option value="5+">5 या अधिक (Large Family)</option>
                    </select>
                    <Users className="w-4 h-4 text-[#C5A15B] absolute left-4 top-3.5" />
                  </div>
                </div>
              )}

              {/* Optional Blessing Message */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#E9D8B5] font-hindi mb-2">
                  वर-वधु हेतु शुभकामना संदेश (Optional Message)
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="अपना मंगल संदेश यहाँ लिखें..."
                  className="w-full px-4 py-3 rounded-xl bg-[#20050B] border border-[#C5A15B]/40 text-[#FFF9EB] placeholder-[#E9D8B5]/40 text-sm focus:outline-none focus:border-[#C5A15B] focus:ring-1 focus:ring-[#C5A15B]"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-full bg-gradient-to-r from-[#9E7B35] via-[#E5CB8C] to-[#9E7B35] text-[#2A0810] font-hindi font-bold text-base shadow-gold-glow hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>उपस्थिति दर्ज करें (Confirm RSVP)</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && savedRsvp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="max-w-md w-full rounded-3xl p-8 bg-gradient-to-b from-[#3E0C16] to-[#20050B] border-2 border-[#C5A15B] text-center shadow-gold-glow">
            <div className="w-16 h-16 rounded-full bg-[#741C29] border border-[#C5A15B] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-[#E5CB8C]" />
            </div>

            <h3 className="text-2xl font-bold font-hindi gold-gradient-text mb-2">
              धन्यवाद! आपकी प्रविष्टि दर्ज हो गई है
            </h3>

            <p className="text-sm font-hindi text-[#E9D8B5]/90 mb-6">
              आदरणीय <strong className="text-[#FFF9EB]">{savedRsvp.guestName}</strong> जी, आपकी
              उपस्थिति की जानकारी सफलतापूर्वक सुरक्षित कर ली गई है।
            </p>

            <div className="space-y-3">
              <button
                onClick={() => handleSendViaWhatsApp(savedRsvp)}
                className="w-full py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-medium text-sm flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>परिवार को WhatsApp पर भी सूचित करें</span>
              </button>

              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full py-3 rounded-full bg-[#2A0810] hover:bg-[#3E0C16] text-[#E9D8B5] text-xs font-serif transition-colors"
              >
                बंद करें (Close)
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
