import React, { useState, useRef } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  Play, 
  Eye, 
  Clock, 
  Sparkles, 
  ExternalLink,
  Layers,
  Smartphone,
  Tv
} from 'lucide-react';
import { InstagramIcon } from './Icons';

export const VideoCard = ({ project }) => {
  const { openCinemaPlayer } = usePortfolio();
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  const isReel = project.aspectRatio === '9:16' || project.category === 'reels';

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current && project.videoUrl && !project.videoUrl.includes('youtube') && !project.videoUrl.includes('vimeo')) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className={`group relative rounded-2xl overflow-hidden glass-panel border border-white/10 hover:border-purple-500/50 transition-all duration-300 flex flex-col ${
        isReel ? 'col-span-1' : 'col-span-1 md:col-span-2'
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video / Thumbnail Container */}
      <div
        className={`relative overflow-hidden cursor-pointer bg-black/60 ${
          isReel ? 'aspect-[9/16]' : 'aspect-video'
        }`}
        onClick={() => openCinemaPlayer(project)}
      >
        {/* Poster Image */}
        <img
          src={project.thumbnail}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
            isHovered && project.videoUrl && !project.videoUrl.includes('youtube') ? 'opacity-0' : 'opacity-100'
          }`}
          loading="lazy"
        />

        {/* Video Preview On Hover (Direct HTML5 videos) */}
        {project.videoUrl && !project.videoUrl.includes('youtube') && !project.videoUrl.includes('vimeo') && (
          <video
            ref={videoRef}
            src={project.videoUrl}
            muted
            loop
            playsInline
            preload="none"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          />
        )}

        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-transparent to-black/30 pointer-events-none" />

        {/* Top Badges (Category & Aspect Ratio) */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
          <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-semibold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
            {isReel ? <Smartphone className="w-3 h-3 text-pink-400" /> : <Tv className="w-3 h-3 text-cyan-400" />}
            {project.category}
          </span>

          <div className="flex items-center gap-1.5">
            {project.views && (
              <span className="px-2.5 py-1 rounded-full bg-purple-950/80 backdrop-blur-md border border-purple-500/30 text-[11px] font-bold text-purple-200 flex items-center gap-1 shadow-sm">
                <Eye className="w-3 h-3 text-purple-400" />
                {project.views}
              </span>
            )}
            {project.duration && (
              <span className="px-2 py-1 rounded-md bg-black/70 backdrop-blur-md text-[11px] font-mono text-slate-300 flex items-center gap-1">
                <Clock className="w-3 h-3 text-slate-400" />
                {project.duration}
              </span>
            )}
          </div>
        </div>

        {/* Center Glowing Play Button */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-14 h-14 rounded-full bg-purple-600/90 group-hover:bg-purple-500 text-white flex items-center justify-center shadow-2xl shadow-purple-600/50 group-hover:scale-110 group-hover:shadow-purple-500/80 transition-all duration-300 backdrop-blur-sm border border-white/20">
            <Play className="w-6 h-6 fill-white ml-0.5" />
          </div>
        </div>

        {/* Instagram Indicator if available */}
        {project.instagramPostUrl && (
          <div className="absolute bottom-3 right-3 z-10 pointer-events-auto">
            <a
              href={project.instagramPostUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-1.5 rounded-lg bg-pink-600/30 hover:bg-pink-600/60 border border-pink-500/40 text-pink-300 transition-all hover:scale-110 flex items-center gap-1 text-[11px]"
              title="Open Reel on Instagram"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        )}
      </div>

      {/* Card Info Footer */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-xs text-slate-400 font-medium mb-1">
            <span className="text-purple-300 font-semibold">{project.client}</span>
          </div>

          <h3
            className="text-base sm:text-lg font-bold text-white group-hover:text-purple-300 transition-colors line-clamp-1 cursor-pointer font-display"
            onClick={() => openCinemaPlayer(project)}
          >
            {project.title}
          </h3>

          <p className="text-xs text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Software / Tags */}
        {project.software && project.software.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/5">
            {project.software.map((tool) => (
              <span
                key={tool}
                className="px-2 py-0.5 rounded bg-white/[0.04] text-[10px] font-mono text-slate-300 border border-white/5"
              >
                {tool}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
