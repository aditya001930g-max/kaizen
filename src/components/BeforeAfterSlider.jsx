import React, { useState, useRef, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  Palette, 
  Sliders, 
  Sparkles, 
  Maximize2, 
  Camera, 
  Layers,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export const BeforeAfterSlider = () => {
  const { data } = usePortfolio();
  const comparison = data.beforeAfterComparison;
  
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleInteractionStart = (clientX) => {
    setIsDragging(true);
    handleMove(clientX);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    const handleGlobalMouseMove = (e) => {
      if (isDragging) handleMove(e.clientX);
    };
    const handleGlobalTouchMove = (e) => {
      if (isDragging) handleMove(e.touches[0].clientX);
    };

    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('mousemove', handleGlobalMouseMove);
    window.addEventListener('touchend', handleGlobalMouseUp);
    window.addEventListener('touchmove', handleGlobalTouchMove);

    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('touchend', handleGlobalMouseUp);
      window.removeEventListener('touchmove', handleGlobalTouchMove);
    };
  }, [isDragging]);

  return (
    <section id="colorgrade" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Palette className="w-3.5 h-3.5" />
            <span>Color Science & Look Development</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display">
            {comparison.title || 'Before & After Color Grade'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            {comparison.subtitle || 'Drag the divider to compare flat uncorrected RAW camera footage with our film-emulated master grade.'}
          </p>
        </div>

        {/* Interactive Comparison Card */}
        <div className="glass-panel rounded-3xl p-4 sm:p-6 border border-white/10 shadow-2xl max-w-5xl mx-auto">
          <div
            ref={containerRef}
            className="relative aspect-video rounded-2xl overflow-hidden cursor-ew-resize select-none bg-black"
            onMouseDown={(e) => handleInteractionStart(e.clientX)}
            onTouchStart={(e) => handleInteractionStart(e.touches[0].clientX)}
          >
            {/* After Image (Graded / Final - Full Background) */}
            <img
              src={comparison.afterImage}
              alt="Graded Master"
              className="absolute inset-0 w-full h-full object-cover"
              draggable="false"
            />

            {/* Before Image (RAW / Flat - Clipped on Left) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={comparison.beforeImage}
                alt="RAW S-Log3"
                className="absolute inset-0 w-full h-full object-cover max-w-none filter grayscale contrast-75 brightness-95"
                style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
                draggable="false"
              />
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 z-20 pointer-events-none">
              <span className="px-3 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-white/20 text-xs font-bold text-slate-300 uppercase tracking-wider shadow-lg">
                {comparison.beforeLabel}
              </span>
            </div>

            <div className="absolute top-4 right-4 z-20 pointer-events-none">
              <span className="px-3 py-1 rounded-lg bg-purple-950/80 backdrop-blur-md border border-purple-500/40 text-xs font-bold text-purple-200 uppercase tracking-wider shadow-lg">
                {comparison.afterLabel}
              </span>
            </div>

            {/* Split Divider Line with Center Drag Knob */}
            <div
              className="absolute top-0 bottom-0 z-30 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Vertical Glowing Line */}
              <div className="w-[3px] h-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)] -ml-[1.5px]" />

              {/* Center Handle Knob */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-slate-900 shadow-2xl flex items-center justify-center border-2 border-purple-600 cursor-ew-resize pointer-events-auto">
                <div className="flex items-center -space-x-1">
                  <ChevronLeft className="w-3.5 h-3.5 text-purple-900" />
                  <ChevronRight className="w-3.5 h-3.5 text-purple-900" />
                </div>
              </div>
            </div>

            {/* Bottom Hint */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] text-slate-300 font-medium border border-white/10 flex items-center gap-1.5 shadow-md">
                <Sliders className="w-3 h-3 text-cyan-400" />
                Drag slider to compare grade
              </span>
            </div>
          </div>

          {/* Color Breakdown Meta Specs */}
          {comparison.details && comparison.details.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 pt-6 border-t border-white/10">
              {comparison.details.map((detail, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                    {detail.label}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-slate-100 font-mono">
                    {detail.value}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
