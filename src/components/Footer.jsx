import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  Play, 
  Mail, 
  ArrowUp, 
  Heart,
  Settings2,
  Share2
} from 'lucide-react';
import { InstagramIcon, YoutubeIcon, TwitterIcon } from './Icons';

export const Footer = () => {
  const { data, openStudio, openShare } = usePortfolio();
  const { profile } = data;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080c] border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-400 p-[2px]">
                <div className="w-full h-full bg-[#090a0f] rounded-[10px] flex items-center justify-center">
                  <Play className="w-4 h-4 text-purple-400 fill-purple-400 ml-0.5" />
                </div>
              </div>
              <span className="font-display font-black text-xl text-white tracking-wider uppercase">
                {profile.name.split(' ')[0]} <span className="text-purple-400 font-bold">VISUALS</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm mb-6 leading-relaxed">
              {profile.tagline}. High-retention short-form edits, cinematic commercials, and Hollywood color grading for world-class creators and brands.
            </p>

            <div className="flex items-center gap-3">
              {profile.socials.instagram && (
                <a
                  href={profile.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-pink-600/20 text-slate-300 hover:text-pink-400 transition-all border border-white/10"
                  title="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              )}
              {profile.socials.youtube && (
                <a
                  href={profile.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-red-600/20 text-slate-300 hover:text-red-400 transition-all border border-white/10"
                  title="YouTube"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
              )}
              {profile.socials.twitter && (
                <a
                  href={profile.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-sky-600/20 text-slate-300 hover:text-sky-400 transition-all border border-white/10"
                  title="Twitter / X"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
              )}
              {profile.socials.email && (
                <a
                  href={`mailto:${profile.socials.email}`}
                  className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-purple-600/20 text-slate-300 hover:text-purple-400 transition-all border border-white/10"
                  title="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase font-bold text-white tracking-wider mb-4 font-display">
              Showcase
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#projects" className="hover:text-purple-400 transition-colors">All Edits</a></li>
              <li><a href="#projects" className="hover:text-purple-400 transition-colors">9:16 Vertical Reels</a></li>
              <li><a href="#colorgrade" className="hover:text-purple-400 transition-colors">Color Grading & LUTs</a></li>
              <li><a href="#instagram" className="hover:text-purple-400 transition-colors">Instagram Feed</a></li>
              <li><a href="#services" className="hover:text-purple-400 transition-colors">Pricing Packages</a></li>
            </ul>
          </div>

          {/* Creator Tools */}
          <div>
            <h4 className="text-xs uppercase font-bold text-white tracking-wider mb-4 font-display">
              Creator Controls
            </h4>
            <div className="space-y-3">
              <button
                onClick={openStudio}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-purple-600/15 hover:bg-purple-600/25 border border-purple-500/30 text-purple-300 text-xs font-semibold transition-all"
              >
                <div className="flex items-center gap-2">
                  <Settings2 className="w-3.5 h-3.5" />
                  <span>Creator Studio</span>
                </div>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-500/20">Edit</span>
              </button>

              <button
                onClick={openShare}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-300 text-xs font-semibold transition-all"
              >
                <div className="flex items-center gap-2">
                  <Share2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Share Portfolio</span>
                </div>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10">QR</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {profile.name}. All edits & creative works reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-all text-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
