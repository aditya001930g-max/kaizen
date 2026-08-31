import React from 'react';
import { PortfolioProvider, usePortfolio } from './context/PortfolioContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { VideoGrid } from './components/VideoGrid';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { InstagramSection } from './components/InstagramSection';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CinemaPlayerModal } from './components/CinemaPlayerModal';
import { StudioModal } from './components/StudioModal';
import { ShareModal } from './components/ShareModal';
import { Toast } from './components/Toast';
import { Settings2, Share2 } from 'lucide-react';

function PortfolioApp() {
  const { openStudio, openShare, data } = usePortfolio();

  return (
    <div className="min-h-screen bg-[#090a0f] text-slate-100 bg-grain selection:bg-purple-600/40 selection:text-white relative">
      
      {/* Dynamic Background Atmospheric Lighting Orbs */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="fixed bottom-1/4 left-1/3 w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Main Navigation */}
      <Navbar />

      {/* Hero Profile & Stats */}
      <main>
        <HeroSection />

        {/* Featured Video Grid & Gallery */}
        <VideoGrid />

        {/* Before & After Interactive Color Grading & VFX Slider */}
        <BeforeAfterSlider />

        {/* Instagram Reel Showcase & Profile Hub */}
        <InstagramSection />

        {/* Packages & Rates */}
        <ServicesSection />

        {/* Client Reviews */}
        <TestimonialsSection />

        {/* Direct Contact & Booking Inquiry */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button (Quick Studio / Add Video Trigger) */}
      <div className="fixed bottom-6 left-6 z-40 flex items-center gap-2">
        <button
          onClick={openStudio}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-purple-600/90 hover:bg-purple-600 text-white text-xs font-bold shadow-xl shadow-purple-950/60 border border-purple-400/40 hover:scale-105 active:scale-95 transition-all backdrop-blur-md"
          title="Open Creator Studio to upload videos & edit profile"
        >
          <Settings2 className="w-4 h-4 text-purple-200" />
          <span className="hidden sm:inline">Studio Mode</span>
        </button>

        <button
          onClick={openShare}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white shadow-xl border border-white/15 hover:scale-105 active:scale-95 transition-all backdrop-blur-md"
          title="Share Portfolio Link"
        >
          <Share2 className="w-4 h-4 text-cyan-400" />
        </button>
      </div>

      {/* Interactive Modals */}
      <CinemaPlayerModal />
      <StudioModal />
      <ShareModal />

      {/* Toast Notification Container */}
      <Toast />

    </div>
  );
}

export default function App() {
  return (
    <PortfolioProvider>
      <PortfolioApp />
    </PortfolioProvider>
  );
}
