import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  Heart, 
  MessageCircle, 
  Eye, 
  ExternalLink, 
  Plus, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { InstagramIcon } from './Icons';

export const InstagramSection = () => {
  const { data, openStudio } = usePortfolio();
  const { profile, instagramFeed } = data;

  return (
    <section id="instagram" className="py-20 relative overflow-hidden">
      {/* Glow Backdrop */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with IG Brand Aesthetics */}
        <div className="glass-panel-glow p-6 sm:p-8 rounded-3xl border border-pink-500/20 mb-12 relative overflow-hidden">
          {/* Subtle Instagram Gradient Border Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-pink-500 to-purple-600" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
              {/* Instagram Story Avatar Style */}
              <div className="relative p-1 rounded-full bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 shadow-lg shadow-pink-500/30">
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-[#090a0f]"
                />
                <div className="absolute bottom-0 right-0 p-1.5 rounded-full bg-pink-600 text-white border-2 border-[#090a0f]">
                  <InstagramIcon className="w-3.5 h-3.5" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                  <h3 className="text-2xl font-bold text-white font-display">
                    @{profile.socials.instagramHandle || 'kaizen.edits'}
                  </h3>
                  <span className="px-2 py-0.5 rounded-full bg-pink-500/20 border border-pink-500/30 text-pink-300 text-[11px] font-semibold">
                    Instagram Reels
                  </span>
                </div>
                <p className="text-slate-300 text-sm max-w-lg">
                  Daily video editing tips, before/after breakdowns, speed art, and viral trending sound packs.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-3">
              <button
                onClick={openStudio}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-slate-200 text-xs font-semibold transition-all"
              >
                <Plus className="w-4 h-4 text-pink-400" />
                <span>Add IG Link</span>
              </button>

              {profile.socials.instagram && (
                <a
                  href={profile.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-500 hover:to-purple-500 text-white text-xs font-bold shadow-lg shadow-pink-600/30 hover:shadow-pink-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>Follow on Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Instagram Grid of Reels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {instagramFeed.map((item) => (
            <a
              key={item.id}
              href={item.reelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden glass-panel border border-white/10 hover:border-pink-500/40 transition-all duration-300 flex flex-col shadow-lg"
            >
              {/* Thumbnail 9:16 vertical */}
              <div className="relative aspect-[9/16] overflow-hidden bg-black/60">
                <img
                  src={item.thumbnail}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/30" />

                {/* Instagram Header Badge */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <span className="p-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-pink-400">
                    <InstagramIcon className="w-3.5 h-3.5" />
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-pink-950/80 backdrop-blur-md border border-pink-500/30 text-[11px] font-bold text-pink-200 flex items-center gap-1">
                    <Eye className="w-3 h-3 text-pink-400" />
                    {item.views}
                  </span>
                </div>

                {/* Hover Play / External link Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-pink-600 to-purple-600 text-white flex items-center justify-center shadow-xl shadow-pink-500/50 scale-90 group-hover:scale-100 transition-transform">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Caption & Stats Overlay at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                  <p className="text-xs text-white line-clamp-2 font-medium mb-3 leading-snug drop-shadow-md">
                    {item.caption}
                  </p>

                  <div className="flex items-center justify-between text-[11px] text-slate-300 font-medium pt-2 border-t border-white/15">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 text-pink-300">
                        <Heart className="w-3.5 h-3.5 fill-pink-500/40 text-pink-400" />
                        {item.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-3.5 h-3.5 text-slate-400" />
                        {item.comments}
                      </span>
                    </div>

                    <span className="text-[10px] text-pink-400 font-semibold flex items-center gap-0.5 group-hover:underline">
                      Watch Reel
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
