import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { CheckCircle2, AlertCircle, Info } from 'lucide-react';

export const Toast = () => {
  const { toast } = usePortfolio();

  if (!toast) return null;

  const isError = toast.type === 'error';

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-short">
      <div className={`flex items-center gap-3 px-4 py-3 rounded-2xl shadow-2xl backdrop-blur-xl border ${
        isError 
          ? 'bg-red-950/90 border-red-500/50 text-red-100 shadow-red-950/50' 
          : 'bg-[#0f111a]/95 border-purple-500/40 text-slate-100 shadow-purple-950/60'
      }`}>
        {isError ? (
          <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
        ) : (
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
        )}
        <span className="text-xs font-semibold">{toast.message}</span>
      </div>
    </div>
  );
};
