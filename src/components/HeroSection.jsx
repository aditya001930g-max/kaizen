import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  Play, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Eye, 
  Flame, 
  Award, 
  Clock,
  Layers
} from 'lucide-react';
import { InstagramIcon } from './Icons';

export const HeroSection = () => {
  const { data, openCinemaPlayer, openBooking } = usePortfolio();
  const { profile } = data;

  const handleWatchShowreel = () => {
    openCinemaPlayer({
      id: 'showreel-main',
      title: `${profile.name} - Official Showreel 2026`,
      category: 'cinematic',
      videoUrl: profile.showreelUrl,
      thumbnail: profile.showreelThumbnail,
      client: 'Portfolio Showcase',
      duration: '1:02',
      views: profile.viewsGenerated,
      software: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Blender'],
      description: 'A compilation of the best cinematic edits, commercial color grading, dynamic 3D camera tracking, and viral short-form retention work from the past 12 months.',
    });
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] glow-orb-purple pointer-events-none -z-10 opacity-70"></div>
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[250px] glow-orb-cyan pointer-events-none -z-10 opacity-50"></div>
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[280px] glow-orb-rose pointer-events-none -z-10 opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Top Badge: Available + Verified */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md mb-6 hover:border-purple-500/40 transition-all">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-semibold text-slate-200 tracking-wide">
              {profile.title}
            </span>
            <span className="text-slate-500 text-xs">•</span>
            <span className="text-xs text-purple-300 font-medium">Accepting Projects</span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1] font-display">
            Turning Raw Footage Into{' '}
            <span className="text-gradient-purple block sm:inline">Viral Masterpieces</span>
          </h1>

          {/* Punchy Sub-bio */}
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl font-light mb-8 leading-relaxed">
            {profile.tagline}. Helped creators and brands accumulate{' '}
            <span className="text-white font-semibold underline decoration-cyan-400 decoration-2 underline-offset-4">
              {profile.viewsGenerated} views
            </span>{' '}
            with hyper-retention pacing, Hollywood color science, and sound design.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
            {/* Watch Showreel Button */}
            <button
              onClick={handleWatchShowreel}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white text-slate-950 font-bold text-sm shadow-xl shadow-white/10 hover:bg-slate-100 hover:scale-[1.03] active:scale-[0.98] transition-all group"
            >
              <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <Play className="w-3 h-3 fill-white ml-0.5" />
              </div>
              <span>Watch Showreel</span>
              <span className="text-xs px-2 py-0.5 rounded-md bg-purple-100 text-purple-800 font-mono font-medium">1:02</span>
            </button>

            {/* Book Project Button */}
            <button
              onClick={() => openBooking()}
              className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white font-semibold text-sm shadow-xl shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-[1.03] active:scale-[0.98] transition-all"
            >
              <Sparkles className="w-4 h-4 text-purple-200" />
              <span>Book an Edit</span>
              <ArrowRight className="w-4 h-4 text-purple-200" />
            </button>

            {/* Direct Instagram Link */}
            {profile.socials.instagram && (
              <a
                href={profile.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white font-medium text-sm transition-all hover:border-pink-500/40 hover:text-pink-300"
              >
                <InstagramIcon className="w-4 h-4 text-pink-400" />
                <span>@{profile.socials.instagramHandle || 'instagram'}</span>
              </a>
            )}
          </div>

          {/* Software Toolset Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
            <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold mr-1 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-purple-400" />
              Stack:
            </span>
            {profile.softwareStack.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-slate-300 text-xs font-mono hover:border-white/20 transition-all"
              >
                <span
                  className="font-bold text-[10px] px-1 rounded bg-black/40"
                  style={{ color: tech.color }}
                >
                  {tech.icon}
                </span>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>

          {/* Key Metrics / Proof Grid */}
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl">
            <div className="glass-panel p-4 sm:p-5 rounded-2xl flex flex-col items-center justify-center border border-white/[0.08] hover:border-purple-500/30 transition-all group">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Flame className="w-4 h-4" />
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                {profile.viewsGenerated}
              </span>
              <span className="text-xs text-slate-400 font-medium">Views Generated</span>
            </div>

            <div className="glass-panel p-4 sm:p-5 rounded-2xl flex flex-col items-center justify-center border border-white/[0.08] hover:border-cyan-500/30 transition-all group">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                {profile.projectsCompleted}
              </span>
              <span className="text-xs text-slate-400 font-medium">Edits Delivered</span>
            </div>

            <div className="glass-panel p-4 sm:p-5 rounded-2xl flex flex-col items-center justify-center border border-white/[0.08] hover:border-pink-500/30 transition-all group">
              <div className="w-8 h-8 rounded-lg bg-pink-500/10 text-pink-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Clock className="w-4 h-4" />
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                {profile.experienceYears}
              </span>
              <span className="text-xs text-slate-400 font-medium">Years Experience</span>
            </div>

            <div className="glass-panel p-4 sm:p-5 rounded-2xl flex flex-col items-center justify-center border border-white/[0.08] hover:border-amber-500/30 transition-all group">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Award className="w-4 h-4" />
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                {profile.satisfactionRate}
              </span>
              <span className="text-xs text-slate-400 font-medium">5-Star Client Rating</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
