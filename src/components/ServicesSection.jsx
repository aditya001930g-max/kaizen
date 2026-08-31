import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  Check, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  ArrowRight,
  Clock,
  Flame
} from 'lucide-react';

export const ServicesSection = () => {
  const { data, openBooking } = usePortfolio();
  const { services } = data;

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>Pricing & Editing Packages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display">
            Invest in <span className="text-gradient-purple">High-Retention Edits</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Predictable flat-rate packages designed to elevate your content, drive views, and increase audience retention.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {services.map((srv) => (
            <div
              key={srv.id}
              className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                srv.highlight
                  ? 'glass-panel-glow border-purple-500/40 shadow-2xl shadow-purple-950/40 scale-100 md:-translate-y-2'
                  : 'glass-panel border-white/10 hover:border-white/20'
              }`}
            >
              {/* Highlight Badge */}
              {srv.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-[11px] font-extrabold uppercase tracking-wider shadow-lg flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    {srv.badge}
                  </span>
                </div>
              )}

              <div>
                <div className="mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                    {srv.name}
                  </h3>
                  <p className="text-xs text-purple-300 font-medium mt-1">
                    {srv.target}
                  </p>
                </div>

                {/* Price Display */}
                <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-white/10">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white font-display">
                    {srv.price}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {srv.period}
                  </span>
                </div>

                {/* Feature Checklist */}
                <ul className="space-y-3 mb-8">
                  {srv.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Book CTA */}
              <button
                onClick={() => openBooking(srv.name)}
                className={`w-full py-3.5 rounded-2xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-lg ${
                  srv.highlight
                    ? 'bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-500 text-white shadow-purple-600/30'
                    : 'bg-white/[0.08] hover:bg-white/[0.15] text-white border border-white/10'
                }`}
              >
                <span>Select {srv.name.split(' ')[0]}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Custom Project Note */}
        <div className="mt-12 text-center p-6 rounded-2xl glass-panel border border-white/10 max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-slate-300">
            Need a custom edit, enterprise retainer, or feature-length video?{' '}
            <button
              onClick={() => openBooking('Custom Custom Project')}
              className="text-purple-400 hover:text-purple-300 font-semibold underline underline-offset-4 ml-1"
            >
              Request a custom quote →
            </button>
          </p>
        </div>

      </div>
    </section>
  );
};
