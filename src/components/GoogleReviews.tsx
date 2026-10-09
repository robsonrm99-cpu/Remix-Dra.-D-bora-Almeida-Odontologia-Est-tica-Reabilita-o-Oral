import React, { useState } from 'react';
import { Star, ShieldCheck, Quote, CheckCircle2, ChevronRight, MessageSquare } from 'lucide-react';
import { REVIEWS, Review } from '../data/dentistData';

interface GoogleReviewsProps {
  onOpenScheduler: () => void;
}

export const GoogleReviews: React.FC<GoogleReviewsProps> = ({ onOpenScheduler }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredReviews = activeFilter === 'all'
    ? REVIEWS
    : REVIEWS.filter(r => r.treatment.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section id="depoimentos" className="py-20 sm:py-28 bg-[#F6F1EA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Official Google Badge */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          
          {/* Google 5.0 Stars Seal Card */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-[#E3D6C5] shadow-sm mb-4">
            {/* Google G icon */}
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3h3.88c2.27-2.09 3.66-5.17 3.66-9.09z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.09C3.26 21.36 7.35 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.28 14.32c-.25-.72-.38-1.49-.38-2.32 0-.83.13-1.6.38-2.32V6.59H1.26C.46 8.19 0 9.99 0 12c0 2.01.46 3.81 1.26 5.41l4.02-3.09z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.26 2.64 1.26 6.59l4.02 3.09c.95-2.83 3.6-4.93 6.72-4.93z"
              />
            </svg>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#2C2621]">
              <span className="font-bold text-sm">5.0</span>
              <div className="flex text-[#EA8600]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#EA8600]" />
                ))}
              </div>
              <span className="text-[#736354] font-medium">Selo de Excelência no Google</span>
            </div>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2621] tracking-tight">
            A Confiança de Quem Transformou o Sorriso
          </h2>
          <p className="text-base sm:text-lg text-[#665749] mt-4 leading-relaxed">
            Depoimentos espontâneos de pacientes de Petrolina, Juazeiro e região que vivenciaram a odontologia humanizada na Sala 1406 do Trade Center.
          </p>

          {/* Quick Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#2C2621] text-white'
                  : 'bg-white text-[#736354] border border-[#DFCDBB] hover:bg-[#EFE5D7]'
              }`}
            >
              Todas as Avaliações
            </button>
            <button
              onClick={() => setActiveFilter('lentes')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                activeFilter === 'lentes'
                  ? 'bg-[#2C2621] text-white'
                  : 'bg-white text-[#736354] border border-[#DFCDBB] hover:bg-[#EFE5D7]'
              }`}
            >
              Lentes de Contato
            </button>
            <button
              onClick={() => setActiveFilter('clareamento')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                activeFilter === 'clareamento'
                  ? 'bg-[#2C2621] text-white'
                  : 'bg-white text-[#736354] border border-[#DFCDBB] hover:bg-[#EFE5D7]'
              }`}
            >
              Clareamento
            </button>
            <button
              onClick={() => setActiveFilter('resina')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                activeFilter === 'resina'
                  ? 'bg-[#2C2621] text-white'
                  : 'bg-white text-[#736354] border border-[#DFCDBB] hover:bg-[#EFE5D7]'
              }`}
            >
              Facetas em Resina
            </button>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E3D6C5] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                {/* Header with patient initials & star rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#EADDCF] text-[#6E4F23] flex items-center justify-center font-bold text-xs">
                      {rev.avatarInitials}
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-[#2C2621]">{rev.name}</div>
                      <div className="text-[11px] text-[#8C7A6B]">{rev.city} · {rev.date}</div>
                    </div>
                  </div>
                  
                  {/* Rating Stars */}
                  <div className="flex text-[#EA8600]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#EA8600]" />
                    ))}
                  </div>
                </div>

                {/* Treatment tag */}
                <div className="inline-block text-[11px] font-semibold text-[#8C6D37] bg-[#FAF4ED] px-2.5 py-1 rounded-md mb-3 border border-[#EFE5D7]">
                  Tratamento: {rev.treatment}
                </div>

                {/* Comment */}
                <p className="text-sm text-[#54463A] leading-relaxed italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {/* Bottom verified proof */}
              <div className="pt-4 mt-4 border-t border-[#F5EFE8] flex items-center justify-between text-[11px] text-[#7A6B5D]">
                <span className="flex items-center gap-1 text-[#3B7A49] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Paciente Verificado(a)
                </span>
                <span className="text-[#A39281]">Avaliação via Google</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Social Proof Bar */}
        <div className="mt-14 text-center">
          <p className="text-sm text-[#736354] mb-4">
            Deseja compartilhar a sua experiência ou agendar sua primeira consulta?
          </p>
          <button
            onClick={onOpenScheduler}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full gold-gradient-btn text-white font-medium text-sm shadow-md cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Falar com a Dra. Débora no WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
};
