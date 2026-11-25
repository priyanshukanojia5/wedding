import React from 'react';
import { Navbar } from './components/common/Navbar';
import { FloatingPetalsCanvas } from './components/3d/FloatingPetalsCanvas';
import { BackgroundAudio } from './components/common/BackgroundAudio';
import { HeroSection } from './components/sections/HeroSection';
import { InvitationCardSection } from './components/sections/InvitationCardSection';
import { MeetCoupleSection } from './components/sections/MeetCoupleSection';
import { EventsTimelineSection } from './components/sections/EventsTimelineSection';
import { CountdownSection } from './components/sections/CountdownSection';
import { BaraatRouteSection } from './components/sections/BaraatRouteSection';
import { FamilySection } from './components/sections/FamilySection';
import { RsvpContactSection } from './components/sections/RsvpContactSection';
import { Footer } from './components/common/Footer';

export const App: React.FC = () => {
  const handleOpenInvitation = () => {
    const cardEl = document.getElementById('invitation-card');
    if (cardEl) {
      cardEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#2A0810] text-[#FFF9EB] relative selection:bg-[#C5A15B] selection:text-[#4A101B] overflow-x-hidden">
      {/* 3D Ambient Falling Rose & Marigold Petals */}
      <FloatingPetalsCanvas />

      {/* Floating Indian Shehnai / Music Player */}
      <BackgroundAudio />

      {/* Sticky Header Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Section 1: Cinematic 3D Hero Introduction */}
        <HeroSection onOpenInvitation={handleOpenInvitation} />

        {/* Section 2: Traditional Printed Ivory Invitation Card */}
        <InvitationCardSection />

        {/* Section 3: Meet The Couple (Avinash & Deepanjali) */}
        <MeetCoupleSection />

        {/* Section 4: Wedding Events Timeline (Tilak, Haldi, Mehndi, Shubh Vivah) */}
        <EventsTimelineSection />

        {/* Section 5: Real-time Countdown to 09 Dec 2026 */}
        <CountdownSection />

        {/* Section 6: Baraat Route & Village Location Maps */}
        <BaraatRouteSection />

        {/* Section 7: Sneha-Kankshi & Family Invitation */}
        <FamilySection />

        {/* Section 8: Contact, 3D Diya Blessing & Interactive RSVP */}
        <RsvpContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
