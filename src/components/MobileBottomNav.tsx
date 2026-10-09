import React from 'react';
import { Sparkles, ArrowLeftRight, MapPin, MessageCircle, Home } from 'lucide-react';
import { DENTIST_INFO } from '../data/dentistData';

interface MobileBottomNavProps {
  onOpenScheduler: () => void;
  onOpenQuiz: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ onOpenScheduler, onOpenQuiz }) => {
  return (
    <aside
      aria-label="Ações rápidas mobile"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-t border-[#E8DFD5] shadow-[0_-4px_20px_rgba(44,38,33,0.08)] px-2 py-1.5"
    >
      <div className="grid grid-cols-4 items-center gap-1 max-w-md mx-auto">
        
        {/* Tab 1: Top / Home */}
        <a
          href="#"
          className="flex flex-col items-center justify-center min-h-[46px] rounded-xl text-[#756556] active:bg-[#F2ECE2] active:text-[#2C2621] transition-colors"
        >
          <Home className="w-4 h-4 text-[#8C7A6B]" />
          <span className="text-[10px] font-medium tracking-tight mt-0.5">Início</span>
        </a>

        {/* Tab 2: Especialidades */}
        <a
          href="#especialidades"
          className="flex flex-col items-center justify-center min-h-[46px] rounded-xl text-[#756556] active:bg-[#F2ECE2] active:text-[#2C2621] transition-colors"
        >
          <Sparkles className="w-4 h-4 text-[#8C7A6B]" />
          <span className="text-[10px] font-medium tracking-tight mt-0.5">Serviços</span>
        </a>

        {/* Tab 3: Antes & Depois */}
        <a
          href="#antes-depois"
          className="flex flex-col items-center justify-center min-h-[46px] rounded-xl text-[#756556] active:bg-[#F2ECE2] active:text-[#2C2621] transition-colors"
        >
          <ArrowLeftRight className="w-4 h-4 text-[#8C7A6B]" />
          <span className="text-[10px] font-medium tracking-tight mt-0.5">Resultados</span>
        </a>

        {/* Tab 4: Direct WhatsApp Action */}
        <button
          onClick={onOpenScheduler}
          className="flex flex-col items-center justify-center min-h-[46px] rounded-xl bg-[#25D366] active:bg-[#1EBE5D] text-white shadow-xs transition-transform active:scale-95"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="text-[10px] font-bold tracking-tight mt-0.5">WhatsApp</span>
        </button>

      </div>
    </aside>
  );
};
