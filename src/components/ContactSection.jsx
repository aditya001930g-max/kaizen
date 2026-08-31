import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  Mail, 
  Send, 
  Sparkles, 
  MessageSquare, 
  CheckCircle2, 
  Clock, 
  DollarSign,
  X,
  Phone
} from 'lucide-react';
import { InstagramIcon } from './Icons';
import confetti from 'canvas-confetti';

export const ContactSection = () => {
  const { data, isBookingOpen, closeBooking, selectedServiceForBooking, showToast } = usePortfolio();
  const { profile } = data;

  const [form, setForm] = useState({
    name: '',
    contact: '',
    projectType: 'Viral Reels & Shorts',
    budget: '$500 - $1,000',
    turnaround: 'Within 48-72 Hours',
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedServiceForBooking) {
      setForm((prev) => ({ ...prev, projectType: selectedServiceForBooking }));
    }
  }, [selectedServiceForBooking]);

  const handleSubmit = (method = 'whatsapp') => {
    if (!form.name || !form.contact) {
      showToast('Please provide your name and contact info', 'error');
      return;
    }

    const messageText = `Hi ${profile.name}! I'm reaching out through your video editing portfolio.
    
*Name:* ${form.name}
*Contact:* ${form.contact}
*Project Type:* ${form.projectType}
*Budget:* ${form.budget}
*Timeline:* ${form.turnaround}
*Project Brief / Footage Info:*
${form.details || 'Looking to discuss editing scope.'}`;

    if (method === 'whatsapp') {
      const waNumber = profile.socials.whatsapp.replace(/[^0-9]/g, '');
      const url = `https://wa.me/${waNumber || '1234567890'}?text=${encodeURIComponent(messageText)}`;
      window.open(url, '_blank');
    } else {
      const subject = `Video Editing Inquiry: ${form.projectType} (${form.name})`;
      const mailtoUrl = `mailto:${profile.socials.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(messageText)}`;
      window.location.href = mailtoUrl;
    }

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    setSubmitted(true);
    showToast('Inquiry generated! Opening your chat...');
  };

  return (
    <>
      {/* On-Page Contact Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="glass-panel rounded-3xl p-6 sm:p-10 md:p-14 border border-white/10 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 glow-orb-purple pointer-events-none opacity-40 -z-10" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              
              {/* Left Column: Editor Info & Direct Social Links */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-bold uppercase tracking-wider mb-4">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Let's Collaborate</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display leading-tight mb-4">
                    Ready to create your next <span className="text-gradient-purple">Viral Edit?</span>
                  </h2>

                  <p className="text-slate-300 text-sm leading-relaxed mb-8">
                    Whether you need a full batch of short-form reels, a cinematic brand commercial, or Hollywood color grading, let's bring your vision to life.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-slate-300 text-sm">
                      <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-purple-400">
                        <Clock className="w-4 h-4" />
                      </div>
                      <span>Average response time: <strong>Under 2 Hours</strong></span>
                    </div>

                    <div className="flex items-center gap-3 text-slate-300 text-sm">
                      <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-cyan-400">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span>Location: <strong>{profile.location}</strong></span>
                    </div>
                  </div>
                </div>

                {/* Direct Channel Badges */}
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-3">
                    Direct Channels
                  </span>
                  <div className="flex flex-wrap gap-2.5">
                    {profile.socials.instagram && (
                      <a
                        href={profile.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-pink-600/15 hover:bg-pink-600/25 border border-pink-500/30 text-pink-300 text-xs font-medium transition-all"
                      >
                        <InstagramIcon className="w-4 h-4" />
                        <span>Instagram DM</span>
                      </a>
                    )}
                    {profile.socials.email && (
                      <a
                        href={`mailto:${profile.socials.email}`}
                        className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-purple-600/15 hover:bg-purple-600/25 border border-purple-500/30 text-purple-300 text-xs font-medium transition-all"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Email</span>
                      </a>
                    )}
                  </div>
                </div>

              </div>

              {/* Right Column: Interactive Quick Inquiry Form */}
              <div className="lg:col-span-7 bg-[#0c0e14]/80 p-6 sm:p-8 rounded-2xl border border-white/10">
                <h3 className="text-lg font-bold text-white mb-4 font-display flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-purple-400" />
                  <span>Start a Project Inquiry</span>
                </h3>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                        Your Name / Brand *
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Marcus Vance / Apex Apparel"
                        className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs text-white placeholder-slate-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                        Email or IG Handle *
                      </label>
                      <input
                        type="text"
                        value={form.contact}
                        onChange={(e) => setForm({ ...form, contact: e.target.value })}
                        placeholder="e.g. @marcus or name@brand.com"
                        className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs text-white placeholder-slate-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                        Project Scope / Package
                      </label>
                      <select
                        value={form.projectType}
                        onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs text-white bg-[#0c0e14]"
                      >
                        <option value="Viral Reels & Shorts">Viral Reels & Shorts (9:16)</option>
                        <option value="Commercial & Brand Ad">Commercial & Brand Ad</option>
                        <option value="YouTube Long-Form Edit">YouTube Long-Form Edit</option>
                        <option value="Color Grading & VFX Breakdown">Color Grading & VFX Breakdown</option>
                        <option value="Monthly Retainer">Monthly Creator Retainer</option>
                        <option value="Custom Project">Custom Project</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                        Estimated Budget
                      </label>
                      <select
                        value={form.budget}
                        onChange={(e) => setForm({ ...form, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs text-white bg-[#0c0e14]"
                      >
                        <option value="$350 - $500">$350 - $500</option>
                        <option value="$500 - $1,000">$500 - $1,000</option>
                        <option value="$1,000 - $2,500">$1,000 - $2,500</option>
                        <option value="$2,500+">$2,500+ (Retainer / Enterprise)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                      Project Details & Footage Link (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={form.details}
                      onChange={(e) => setForm({ ...form, details: e.target.value })}
                      placeholder="Tell us about your footage, inspiration links, desired style, or deadline..."
                      className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs text-white placeholder-slate-500"
                    />
                  </div>

                  {/* Submission Action Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => handleSubmit('whatsapp')}
                      className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-lg shadow-emerald-950/40 transition-all flex items-center justify-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Send via WhatsApp</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleSubmit('email')}
                      className="py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-purple-600/30 transition-all flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send via Email</span>
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Floating Booking Modal if opened from button */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-xl bg-[#0e1017] border border-purple-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div>
                <h3 className="text-xl font-bold text-white font-display">
                  Book an Edit with {profile.name}
                </h3>
                <p className="text-xs text-purple-300 font-medium">
                  {selectedServiceForBooking ? `Selected: ${selectedServiceForBooking}` : 'Let us know what you need edited'}
                </p>
              </div>
              <button
                onClick={closeBooking}
                className="p-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name *</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your Name or Brand"
                  className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Email or Instagram @ *</label>
                <input
                  type="text"
                  value={form.contact}
                  onChange={(e) => setForm({ ...form, contact: e.target.value })}
                  placeholder="name@email.com or @handle"
                  className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Package</label>
                  <input
                    type="text"
                    value={form.projectType}
                    onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Budget</label>
                  <select
                    value={form.budget}
                    onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs text-white bg-[#0e1017]"
                  >
                    <option value="$350 - $500">$350 - $500</option>
                    <option value="$500 - $1,000">$500 - $1,000</option>
                    <option value="$1,000 - $2,500">$1,000 - $2,500</option>
                    <option value="$2,500+">$2,500+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Brief / Raw Footage Link</label>
                <textarea
                  rows={3}
                  value={form.details}
                  onChange={(e) => setForm({ ...form, details: e.target.value })}
                  placeholder="Drop a Google Drive / Dropbox link or brief here..."
                  className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 pt-3">
                <button
                  onClick={() => {
                    handleSubmit('whatsapp');
                    closeBooking();
                  }}
                  className="py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-lg flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </button>
                <button
                  onClick={() => {
                    handleSubmit('email');
                    closeBooking();
                  }}
                  className="py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 text-white text-xs font-bold shadow-lg flex items-center justify-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
