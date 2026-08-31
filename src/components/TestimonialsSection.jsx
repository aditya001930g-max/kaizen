import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Star, Quote, Sparkles, Award } from 'lucide-react';

export const TestimonialsSection = () => {
  const { data } = usePortfolio();
  const { testimonials } = data;

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Client Satisfaction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display">
            Trusted by Top <span className="text-gradient-purple">Creators & Brands</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Here's what directors, creators, and business founders say about working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-purple-500/30 transition-all group"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(t.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote Content */}
                <p className="text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{t.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-white/5">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border border-purple-500/30"
                />
                <div>
                  <h4 className="text-sm font-bold text-white font-display">
                    {t.name}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
