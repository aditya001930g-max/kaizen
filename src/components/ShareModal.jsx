import React, { useState, useRef } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { QRCodeSVG } from 'qrcode.react';
import { 
  X, 
  Copy, 
  Check, 
  Share2, 
  Send, 
  Download, 
  Sparkles,
  QrCode
} from 'lucide-react';
import { InstagramIcon, TwitterIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';

export const ShareModal = () => {
  const { data, isShareOpen, closeShare, showToast } = usePortfolio();
  const { profile } = data;
  const [copied, setCopied] = useState(false);
  const qrRef = useRef(null);

  if (!isShareOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://kaizenedits.com';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.7 }
    });
    showToast('Portfolio URL copied to clipboard!');
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShareTwitter = () => {
    const text = `Check out ${profile.name}'s Video Editor & Motion Design Portfolio! 🚀🎥`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(currentUrl)}`, '_blank');
  };

  const handleShareWhatsApp = () => {
    const text = `Check out ${profile.name}'s Video Editing Portfolio: ${currentUrl}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleShareLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn">
      
      <div 
        className="relative w-full max-w-lg bg-[#0e1017] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Top Glow */}
        <div className="absolute -top-20 -left-20 w-48 h-48 bg-purple-600/30 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-purple-600/20 border border-purple-500/30 text-purple-400 flex items-center justify-center">
              <Share2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-display">
                Share Portfolio
              </h3>
              <p className="text-xs text-slate-400">
                Share with clients, brands, or friends
              </p>
            </div>
          </div>

          <button
            onClick={closeShare}
            className="p-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-slate-400 hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* QR Code Card */}
        <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-black/60 border border-white/10 mb-6 text-center">
          <div className="p-3 bg-white rounded-2xl shadow-xl shadow-purple-950/50 mb-3" ref={qrRef}>
            <QRCodeSVG
              value={currentUrl}
              size={150}
              level="H"
              fgColor="#090a0f"
              bgColor="#ffffff"
            />
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium">
            <QrCode className="w-3.5 h-3.5 text-purple-400" />
            <span>Scan with phone camera to open</span>
          </div>
        </div>

        {/* Copy Link Input Bar */}
        <div className="mb-6">
          <label className="block text-xs font-semibold text-slate-400 mb-1.5">
            Direct Shareable URL
          </label>
          <div className="flex items-center gap-2 p-1.5 rounded-xl glass-input">
            <input
              type="text"
              readOnly
              value={currentUrl}
              className="bg-transparent border-none text-xs text-slate-200 px-3 w-full outline-none font-mono"
            />
            <button
              onClick={handleCopyLink}
              className="shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold shadow-md shadow-purple-600/30 transition-all"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>
        </div>

        {/* Social Share Icons Grid */}
        <div>
          <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-3">
            Quick Share Channels
          </span>
          <div className="grid grid-cols-3 gap-2.5">
            <button
              onClick={handleShareWhatsApp}
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/30 text-emerald-300 text-xs font-medium transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </button>

            <button
              onClick={handleShareTwitter}
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-sky-600/20 hover:bg-sky-600/30 border border-sky-500/30 text-sky-300 text-xs font-medium transition-all"
            >
              <TwitterIcon className="w-3.5 h-3.5" />
              <span>Twitter / X</span>
            </button>

            <button
              onClick={handleShareLinkedIn}
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-blue-300 text-xs font-medium transition-all"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
