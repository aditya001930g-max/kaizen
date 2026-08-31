import React, { useEffect, useRef, useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  X, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Share2, 
  Sparkles, 
  Eye, 
  Clock, 
  Layers, 
  Check, 
  RotateCcw
} from 'lucide-react';
import { InstagramIcon } from './Icons';

export const CinemaPlayerModal = () => {
  const { selectedProject, closeCinemaPlayer, openBooking, showToast } = usePortfolio();
  const videoRef = useRef(null);
  
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeCinemaPlayer();
      if (e.key === ' ' && videoRef.current) {
        e.preventDefault();
        togglePlay();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  if (!selectedProject) return null;

  const isReel = selectedProject.aspectRatio === '9:16' || selectedProject.category === 'reels';
  const isDirectVideo = selectedProject.videoUrl && 
    !selectedProject.videoUrl.includes('youtube.com') && 
    !selectedProject.videoUrl.includes('youtu.be') && 
    !selectedProject.videoUrl.includes('vimeo.com');

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration || 1;
    setProgress((current / duration) * 100);
  };

  const handleSeek = (e) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * (videoRef.current.duration || 0);
    setProgress(pos * 100);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    showToast('Project link copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleSpeed = () => {
    const speeds = [1, 1.25, 1.5, 2, 0.5];
    const nextSpeed = speeds[(speeds.indexOf(playbackRate) + 1) % speeds.length];
    setPlaybackRate(nextSpeed);
    if (videoRef.current) {
      videoRef.current.playbackRate = nextSpeed;
    }
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-2xl animate-fadeIn overflow-y-auto">
      
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 glow-orb-purple pointer-events-none opacity-40" />

      {/* Modal Container */}
      <div 
        className="relative w-full max-w-6xl max-h-[92vh] bg-[#0c0e14] border border-white/15 rounded-3xl shadow-2xl overflow-hidden flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-black/40 border-b border-white/10 z-20">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse"></span>
            <span className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider">
              Cinema Player · {selectedProject.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="p-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-slate-300 hover:text-white transition-all text-xs flex items-center gap-1.5"
              title="Share Project"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Share'}</span>
            </button>

            <button
              onClick={closeCinemaPlayer}
              className="p-2 rounded-xl bg-white/[0.06] hover:bg-red-500/20 hover:text-red-300 text-slate-400 transition-all"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Main Body (Split into Video Player + Project Details) */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-y-auto">
          
          {/* Left / Top: Video Player Frame */}
          <div className="lg:col-span-8 bg-black flex items-center justify-center p-3 sm:p-6 relative">
            <div className={`relative w-full ${isReel ? 'max-w-[340px] aspect-[9/16]' : 'aspect-video'} rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/10 flex items-center justify-center`}>
              
              {isDirectVideo ? (
                <>
                  <video
                    ref={videoRef}
                    src={selectedProject.videoUrl}
                    poster={selectedProject.thumbnail}
                    autoPlay
                    playsInline
                    loop
                    onTimeUpdate={handleTimeUpdate}
                    onClick={togglePlay}
                    className="w-full h-full object-contain cursor-pointer"
                  />

                  {/* Video Player Custom Controls Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col gap-2">
                    {/* Scrub Progress Bar */}
                    <div
                      className="w-full h-1.5 bg-white/20 hover:h-2 rounded-full cursor-pointer transition-all relative overflow-hidden"
                      onClick={handleSeek}
                    >
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full"
                        style={{ width: `${progress}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between text-xs text-white">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={togglePlay}
                          className="p-1 hover:text-purple-400 transition-colors"
                        >
                          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                        </button>

                        <button
                          onClick={toggleMute}
                          className="p-1 hover:text-purple-400 transition-colors"
                        >
                          {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
                        </button>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={toggleSpeed}
                          className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 font-mono text-[11px] font-bold"
                          title="Playback Speed"
                        >
                          {playbackRate}x
                        </button>

                        <button
                          onClick={handleFullscreen}
                          className="p-1 hover:text-purple-400 transition-colors"
                          title="Fullscreen"
                        >
                          <Maximize className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                /* YouTube / Vimeo / Cloud Embed */
                <iframe
                  src={selectedProject.videoUrl}
                  title={selectedProject.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </div>

          {/* Right / Bottom: Project Information & Actions */}
          <div className="lg:col-span-4 p-5 sm:p-7 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10 bg-[#0c0e14]">
            <div>
              {/* Client & View Counter */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-semibold text-purple-400 tracking-wide uppercase">
                  {selectedProject.client}
                </span>
                {selectedProject.views && (
                  <span className="px-2.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-[11px] font-bold text-purple-300 flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {selectedProject.views} Views
                  </span>
                )}
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-white font-display leading-tight mb-4">
                {selectedProject.title}
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                {selectedProject.description}
              </p>

              {/* Software Toolset Badges */}
              {selectedProject.software && (
                <div className="mb-6">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block mb-2">
                    Editing & FX Suite
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.software.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-xs font-mono text-slate-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Instagram Reel Button if present */}
              {selectedProject.instagramPostUrl && (
                <a
                  href={selectedProject.instagramPostUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-pink-600/20 hover:bg-pink-600/30 border border-pink-500/40 text-pink-300 text-xs font-medium transition-all mb-6"
                >
                  <InstagramIcon className="w-4 h-4 text-pink-400" />
                  <span>View Original Reel on Instagram</span>
                </a>
              )}
            </div>

            {/* Bottom Booking CTA */}
            <div className="pt-6 border-t border-white/10 mt-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-950/40 to-indigo-950/40 border border-purple-500/30 text-center">
                <p className="text-xs text-slate-300 mb-3 font-medium">
                  Want an edit with this same pacing, color science, and sound design?
                </p>
                <button
                  onClick={() => {
                    closeCinemaPlayer();
                    openBooking(selectedProject.title);
                  }}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-purple-600/30 transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Inquire for Similar Project</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
