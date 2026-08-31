import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  Play, 
  Share2, 
  Settings2, 
  Sparkles, 
  Menu, 
  X, 
  Send,
  Video,
  ExternalLink
} from 'lucide-react';
import { InstagramIcon } from './Icons';

export const Navbar = () => {
  const { data, openStudio, openShare, openBooking } = usePortfolio();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#projects' },
    { label: 'Reels', href: '#projects' },
    { label: 'Color Grade', href: '#colorgrade' },
    { label: 'Instagram', href: '#instagram' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090a0f]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl shadow-purple-950/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 p-[2px] shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/60 transition-all duration-300">
            <div className="w-full h-full bg-[#090a0f] rounded-[10px] flex items-center justify-center">
              <Play className="w-4 h-4 text-purple-400 fill-purple-400 ml-0.5 group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <div>
            <span className="font-display font-black tracking-wider text-lg sm:text-xl text-white group-hover:text-purple-300 transition-colors uppercase">
              {data.profile.name.split(' ')[0]} <span className="text-purple-400 font-bold">VISUALS</span>
            </span>
            <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for edits</span>
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls (Studio Mode, Instagram, Share, Book) */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Instagram Button */}
          {data.profile.socials.instagram && (
            <a
              href={data.profile.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/[0.05] hover:bg-gradient-to-tr hover:from-purple-600/30 hover:to-pink-600/30 border border-white/10 text-slate-300 hover:text-pink-400 transition-all group"
              title="Instagram Profile"
            >
              <InstagramIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>
          )}

          {/* Share Button */}
          <button
            onClick={openShare}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-300 hover:text-white text-xs font-medium transition-all"
            title="Share Portfolio"
          >
            <Share2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Share</span>
          </button>

          {/* Creator Studio Dashboard Button */}
          <button
            onClick={openStudio}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/40 text-purple-200 hover:text-white text-xs font-medium transition-all shadow-sm shadow-purple-500/20 hover:shadow-purple-500/40"
            title="Studio Mode: Upload & Edit Portfolio"
          >
            <Settings2 className="w-3.5 h-3.5 text-purple-400 animate-spin-slow" />
            <span>Studio Mode</span>
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
          </button>

          {/* Hire / Book CTA */}
          <button
            onClick={() => openBooking()}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hire Me</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={openStudio}
            className="p-2 rounded-lg bg-purple-600/20 border border-purple-500/30 text-purple-300 text-xs"
            title="Studio Mode"
          >
            <Settings2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/[0.06] border border-white/10 text-slate-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-4 pt-3 pb-6 bg-[#090a0f]/95 backdrop-blur-xl border-b border-white/10 animate-fadeIn">
          <div className="flex flex-col gap-2 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.08]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openShare();
              }}
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/[0.06] border border-white/10 text-slate-200 text-xs font-medium"
            >
              <Share2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Share Link</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openBooking();
              }}
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-semibold"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hire Me</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
