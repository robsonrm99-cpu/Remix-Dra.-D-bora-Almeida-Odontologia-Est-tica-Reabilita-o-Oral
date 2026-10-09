import React from 'react';
import { MessageCircle, Sparkles, MapPin, Star, ShieldCheck, ChevronRight, Award, Phone } from 'lucide-react';
import { DENTIST_INFO } from '../data/dentistData';

interface HeroProps {
  onOpenScheduler: () => void;
  onOpenQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenScheduler, onOpenQuiz }) => {
  return (
    <section className="relative pt-20 pb-14 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F6F1EA] to-[#FAF8F5]">
      {/* Subtle organic background glows in champagne & warm beige */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#EEDDC8]/35 via-[#F3E8DC]/25 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-24 right-0 w-[400px] h-[400px] bg-[#E8D9C5]/25 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-7 text-center lg:text-left">
            
            {/* Professional credibility kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE7DC] border border-[#DFCDBB] text-xs font-medium text-[#7C5929] mx-auto lg:mx-0">
              <Sparkles className="w-3.5 h-3.5 text-[#B88E4B]" />
              <span>Odontologia Estética & Reabilitação Oral</span>
              <span className="text-[#B5A596]">·</span>
              <span className="font-semibold">{DENTIST_INFO.cro}</span>
            </div>

            {/* Mobile Visual Focal Card (Shown on mobile for immediate human connection) */}
            <div className="block lg:hidden mx-auto max-w-xs sm:max-w-sm pt-1 pb-2">
              <div className="relative rounded-3xl p-2.5 bg-gradient-to-b from-[#FAF6F0] to-[#EAE0D2] border border-[#DFCDBB] shadow-lg">
                <div className="relative rounded-2xl overflow-hidden aspect-4/5 bg-[#2C241E]">
                  <img
                    src={DENTIST_INFO.photoUrl}
                    alt="Dra. Débora Almeida - Cirurgiã-Dentista Petrolina"
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  
                  {/* Overlay tags on mobile */}
                  <div className="absolute bottom-3 left-3 right-3 text-white text-left">
                    <div className="text-[10px] uppercase tracking-wider text-[#E8D6B7] font-semibold">
                      Trade Center · Sala 1406
                    </div>
                    <div className="font-serif text-base font-bold text-[#FAF8F5] leading-tight">
                      Dra. Débora Almeida
                    </div>
                    <div className="text-[11px] text-[#D8CEBF] flex items-center gap-1 mt-0.5">
                      <Star className="w-3 h-3 text-[#E6C68F] fill-[#E6C68F]" />
                      <span>5.0 no Google (120+ avaliações)</span>
                    </div>
                  </div>

                  {/* Online Badge */}
                  <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-xs text-[#2C2621] text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1.5 shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                    <span>Atendimento Ativo</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-2xl sm:text-4xl lg:text-[3.25rem] font-bold text-[#2C2621] tracking-tight leading-[1.18] text-balance">
              A arte de transformar sorrisos com <span className="gold-gradient-text italic font-normal">naturalidade</span>, precisão e acolhimento.
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-[#615347] leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Atendimento exclusivo e humanizado no <strong className="text-[#2C2621] font-semibold">Empresarial Trade Center (Sala 1406)</strong>, em Petrolina - PE. Lentes cerâmicas, clareamento personalizado e reabilitação oral com planejamento digital.
            </p>

            {/* Mobile-Optimized CTAs (Touch-Friendly min-h-[48px]) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1">
              <button
                onClick={onOpenScheduler}
                className="min-h-[48px] px-6 py-3.5 rounded-full gold-gradient-btn text-white font-semibold flex items-center justify-center gap-2.5 text-sm sm:text-base shadow-md cursor-pointer group active:scale-98 transition-transform"
              >
                <MessageCircle className="w-5 h-5 text-white/95 shrink-0" />
                <span>Agendar no WhatsApp</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>

              <button
                onClick={onOpenQuiz}
                className="min-h-[48px] px-5 py-3.5 rounded-full bg-white hover:bg-[#F7F3EE] active:bg-[#F0E9DF] text-[#524438] border border-[#DFD4C7] font-medium flex items-center justify-center gap-2 text-xs sm:text-sm transition-colors shadow-2xs cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#B88E4B] shrink-0" />
                <span>Descobrir Procedimento Ideal</span>
              </button>
            </div>

            {/* Trust Proof Badges (Responsive row) */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 sm:gap-x-6 text-xs text-[#706052]">
              <div className="flex items-center gap-1.5">
                <div className="flex text-[#D09F40]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D09F40]" />
                  ))}
                </div>
                <span className="font-semibold text-[#2C2621]">5.0 no Google</span>
                <span className="text-[11px] text-[#8A7A6C]">(120+ avaliações)</span>
              </div>
              <span className="hidden sm:inline text-[#CFC2B4]">·</span>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#B88E4B]" />
                <span>Trade Center Sala 1406</span>
              </div>
              <span className="hidden sm:inline text-[#CFC2B4]">·</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#6B8E5A]" />
                <span>Biossegurança Rígida</span>
              </div>
            </div>

          </div>

          {/* Right Column: Desktop Editorial Showcase with Dra. Débora's Photo */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative card */}
              <div className="relative rounded-3xl p-3 bg-gradient-to-b from-[#F9F5EF] to-[#EFE5D8] border border-[#E3D6C5] shadow-xl">
                
                {/* Visual Portrait Container */}
                <div className="relative rounded-2xl overflow-hidden bg-[#2D2620] text-white shadow-inner min-h-[460px] flex flex-col justify-end">
                  
                  {/* Real Portrait of Dra. Débora Almeida */}
                  <img
                    src={DENTIST_INFO.photoUrl}
                    alt="Dra. Débora Almeida - Cirurgiã-Dentista"
                    className="absolute inset-0 w-full h-full object-cover object-top filter contrast-[1.02]"
                    loading="eager"
                  />

                  {/* Gradient Scrim for readable text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <div className="bg-white/90 backdrop-blur-md text-[#2C2621] border border-white/40 rounded-full py-1.5 px-3.5 shadow-sm flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#25D366]" />
                      <span className="text-xs font-semibold">Atendimento Ativo</span>
                    </div>

                    <div className="bg-[#2C2621]/80 backdrop-blur-md text-[#FAF8F5] border border-white/20 rounded-full py-1.5 px-3 text-xs font-medium flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-[#E6C68F]" />
                      <span>{DENTIST_INFO.cro}</span>
                    </div>
                  </div>

                  {/* Bottom details block */}
                  <div className="relative z-10 p-6 space-y-3">
                    <div>
                      <div className="text-[11px] uppercase tracking-widest text-[#D3B47F] font-semibold">
                        Cirurgiã-Dentista
                      </div>
                      <div className="font-serif text-2xl font-bold text-[#FAF8F5]">
                        {DENTIST_INFO.name}
                      </div>
                      <div className="text-xs text-[#C5B7A8] flex items-center gap-1.5 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-[#E6C68F]" />
                        <span>Empresarial Trade Center · Sala 1406 · Petrolina</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                      <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 border border-white/15">
                        <div className="text-[#D3B47F] text-[10px] uppercase font-semibold">Avaliação</div>
                        <div className="font-bold text-white mt-0.5">5.0 ★ Google</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 border border-white/15">
                        <div className="text-[#D3B47F] text-[10px] uppercase font-semibold">Horários</div>
                        <div className="font-bold text-white mt-0.5">Seg a Sáb</div>
                      </div>
                    </div>

                    <button
                      onClick={onOpenScheduler}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-[#D5B06E] to-[#AA8138] hover:from-[#E0C07F] hover:to-[#B88E4B] text-[#241C15] font-bold text-xs tracking-wide uppercase transition-all flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Agendar no WhatsApp</span>
                    </button>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>

        {/* 4-column trust strip below the hero (Compact on mobile) */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-[#E8DFD5] grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
          {DENTIST_INFO.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center p-2.5 sm:p-3 bg-white/60 sm:bg-transparent rounded-2xl border border-[#EBE1D5] sm:border-transparent">
              <span className="font-serif text-xl sm:text-3xl font-bold text-[#2C2621] tracking-tight">
                {stat.value}
              </span>
              <span className="text-[11px] sm:text-sm text-[#736354] mt-0.5 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
