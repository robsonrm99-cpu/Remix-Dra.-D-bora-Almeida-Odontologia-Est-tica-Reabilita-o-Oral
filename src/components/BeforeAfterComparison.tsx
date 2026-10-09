import React, { useState, useRef, useCallback, useEffect } from 'react';
import { SlidersHorizontal, Sparkles, MessageCircle, ArrowLeftRight, Check, ChevronRight } from 'lucide-react';
import { BEFORE_AFTER_CASES, BeforeAfterCase } from '../data/dentistData';

interface BeforeAfterProps {
  onOpenScheduler: (procedureName?: string) => void;
}

export const BeforeAfterComparison: React.FC<BeforeAfterProps> = ({ onOpenScheduler }) => {
  const [selectedCaseIndex, setSelectedCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentCase: BeforeAfterCase = BEFORE_AFTER_CASES[selectedCaseIndex];

  // Mouse & Touch drag handling
  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleTouchStart = () => setIsDragging(true);

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) handleMove(e.clientX);
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches[0]) {
        handleMove(e.touches[0].clientX);
      }
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMove]);

  // Click on image container to jump position
  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    handleMove(e.clientX);
  };

  return (
    <section id="antes-depois" className="py-16 sm:py-24 lg:py-28 bg-[#F6F1EA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EADDCF] text-xs font-semibold text-[#8C6D37] mb-2 sm:mb-3 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Casos Reais & Transformações</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#2C2621] tracking-tight">
            Comparador Interativo de Antes & Depois
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#665749] mt-3 leading-relaxed">
            Deslize com o dedo para visualizar a transformação de cada paciente na Sala 1406 do Trade Center.
          </p>
        </div>

        {/* Case Switcher Tabs (Touch scrollable) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 mb-6 sm:mb-8 overflow-x-auto pb-2 scrollbar-none">
          {BEFORE_AFTER_CASES.map((c, idx) => (
            <button
              key={c.id}
              onClick={() => {
                setSelectedCaseIndex(idx);
                setSliderPosition(50);
              }}
              className={`min-h-[44px] px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer shrink-0 flex items-center gap-2.5 ${
                selectedCaseIndex === idx
                  ? 'bg-[#2C2621] text-white shadow-md ring-2 ring-[#B88E4B]'
                  : 'bg-white/90 text-[#6E5D4F] border border-[#DFCDBB] hover:bg-[#F7F2EC] active:bg-[#F2ECE2]'
              }`}
            >
              <img
                src={c.afterImage}
                alt={c.title}
                referrerPolicy="no-referrer"
                className="w-5 h-5 rounded-full object-cover border border-white/60 shadow-xs"
              />
              <span>{c.category}</span>
            </button>
          ))}
        </div>

        {/* Main Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center bg-white rounded-3xl p-4 sm:p-8 lg:p-10 border border-[#E3D6C5] shadow-lg">
          
          {/* Draggable Visual Comparator (Left 7 Cols) */}
          <div className="lg:col-span-7">
            <div className="relative select-none">
              
              {/* Instructions banner */}
              <div className="flex items-center justify-between text-xs font-medium text-[#7A6B5D] mb-2 px-1">
                <span className="flex items-center gap-1 font-semibold text-[#8A5A30] text-[11px] sm:text-xs">
                  ◀ {currentCase.beforeLabel}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] text-[#A69584]">
                  <ArrowLeftRight className="w-3 h-3 text-[#B88E4B]" /> Arraste para comparar
                </span>
                <span className="flex items-center gap-1 font-semibold text-[#307044] text-[11px] sm:text-xs">
                  {currentCase.afterLabel} ▶
                </span>
              </div>

              {/* Slider Viewport with touch-action: none for reliable dragging on phones */}
              <div
                ref={containerRef}
                onClick={handleContainerClick}
                className="relative h-64 sm:h-80 md:h-96 w-full rounded-2xl overflow-hidden cursor-ew-resize border border-[#D5C2AD] shadow-inner bg-[#2C241E] touch-none"
              >
                {/* AFTER VIEW (Bottom Layer, visible on the right) */}
                <div className="absolute inset-0 w-full h-full select-none bg-[#1A1613]">
                  <img
                    src={currentCase.afterImage}
                    alt={`${currentCase.title} - ${currentCase.afterLabel}`}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none transition-opacity duration-300"
                    loading="eager"
                  />
                  
                  {/* Subtle edge shade for label legibility */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

                  {/* High-res Clinical photography watermark badge */}
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md border border-white/20 rounded-full px-2.5 py-1 text-[10px] font-medium text-white/90 shadow-sm pointer-events-none flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5 text-[#D5B06E]" />
                    <span>Fotografia Clínica Real</span>
                  </div>

                  <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md border border-emerald-400/40 rounded-xl px-3 py-1 text-[11px] font-semibold text-emerald-300 shadow-lg flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>DEPOIS</span>
                  </div>
                </div>

                {/* BEFORE VIEW (Top Layer clipped by sliderPosition) */}
                <div
                  className="absolute inset-0 h-full w-full select-none bg-[#1A1613]"
                  style={{
                    clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                  }}
                >
                  <img
                    src={currentCase.beforeImage}
                    alt={`${currentCase.title} - ${currentCase.beforeLabel}`}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none transition-opacity duration-300"
                    loading="eager"
                  />

                  {/* Subtle edge shade for label legibility */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

                  <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md border border-amber-400/40 rounded-xl px-3 py-1 text-[11px] font-semibold text-amber-300 shadow-lg flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span>ANTES</span>
                  </div>
                </div>

                {/* Draggable Divider Line & Large Touch Handle */}
                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize shadow-[0_0_12px_rgba(255,255,255,0.8)]"
                  style={{ left: `${sliderPosition}%` }}
                  onMouseDown={handleMouseDown}
                  onTouchStart={handleTouchStart}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white text-[#2C2621] shadow-2xl flex items-center justify-center border-2 border-[#D5B06E] active:scale-110 transition-transform">
                    <ArrowLeftRight className="w-4 h-4 text-[#8C6D37]" />
                  </div>
                </div>

              </div>

              {/* Mobile Quick-Tap Presets (100% Antes | 50% Comparar | 100% Depois) */}
              <div className="grid grid-cols-3 gap-2 mt-3 sm:hidden">
                <button
                  onClick={() => setSliderPosition(100)}
                  className={`min-h-[40px] rounded-xl text-xs font-semibold border transition-all ${
                    sliderPosition > 80
                      ? 'bg-[#8A5A30] text-white border-[#8A5A30]'
                      : 'bg-[#FAF8F5] text-[#69584B] border-[#E0D2C2]'
                  }`}
                >
                  Ver Antes
                </button>
                <button
                  onClick={() => setSliderPosition(50)}
                  className={`min-h-[40px] rounded-xl text-xs font-semibold border transition-all ${
                    sliderPosition >= 40 && sliderPosition <= 60
                      ? 'bg-[#2C2621] text-white border-[#2C2621]'
                      : 'bg-[#FAF8F5] text-[#69584B] border-[#E0D2C2]'
                  }`}
                >
                  Comparar 50%
                </button>
                <button
                  onClick={() => setSliderPosition(0)}
                  className={`min-h-[40px] rounded-xl text-xs font-semibold border transition-all ${
                    sliderPosition < 20
                      ? 'bg-[#307044] text-white border-[#307044]'
                      : 'bg-[#FAF8F5] text-[#69584B] border-[#E0D2C2]'
                  }`}
                >
                  Ver Depois
                </button>
              </div>

              {/* Accessible Range Input */}
              <div className="mt-3 flex items-center gap-3">
                <span className="text-xs text-[#806F60] font-medium whitespace-nowrap hidden sm:inline">Ajuste fino:</span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  className="w-full h-2 bg-[#E2D5C6] rounded-lg appearance-none cursor-pointer accent-[#9B7337]"
                  aria-label="Posição do comparador antes e depois"
                />
                <span className="text-xs font-mono tabular-nums text-[#806F60] font-semibold w-8 text-right">
                  {Math.round(sliderPosition)}%
                </span>
              </div>

            </div>
          </div>

          {/* Clinical Details & Transformation Breakdown (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8C6D37] uppercase tracking-wider mb-1">
                <span>{currentCase.badge}</span>
                <span>·</span>
                <span>{currentCase.category}</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-[#2C2621]">
                {currentCase.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#615245] mt-2 leading-relaxed">
                {currentCase.description}
              </p>
            </div>

            {/* Before vs After Highlights */}
            <div className="space-y-2.5">
              <div className="p-3 rounded-2xl bg-[#FAF8F5] border border-[#EADBCE]">
                <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#A05C2E] mb-0.5">
                  Diagnóstico Inicial (Antes):
                </div>
                <p className="text-xs text-[#594A3D] leading-relaxed">
                  {currentCase.beforeDetails.issue}
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-[#F4F9F4] border border-[#CFE3D0]">
                <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#2D733E] mb-0.5">
                  Conduta & Resultado (Depois):
                </div>
                <p className="text-xs text-[#38533E] leading-relaxed">
                  {currentCase.afterDetails.solution}
                </p>
              </div>
            </div>

            {/* Pillars */}
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#8A7563] mb-2">
                Destaques deste caso:
              </div>
              <div className="grid grid-cols-2 gap-2">
                {currentCase.aspects.map((aspect, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-xs text-[#4A3F35]">
                    <Check className="w-3.5 h-3.5 text-[#8C6D37] shrink-0" />
                    <span>{aspect}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile-Friendly CTA */}
            <div className="pt-1">
              <button
                onClick={() => onOpenScheduler(currentCase.category)}
                className="w-full min-h-[48px] py-3 px-6 rounded-full gold-gradient-btn text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer group active:scale-98 transition-transform"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Quero um resultado como este</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
