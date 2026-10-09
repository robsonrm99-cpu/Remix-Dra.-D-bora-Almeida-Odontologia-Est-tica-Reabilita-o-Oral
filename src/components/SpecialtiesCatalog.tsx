import React, { useState } from 'react';
import { Sparkles, ArrowRight, Clock, CheckCircle2, ChevronRight, Info } from 'lucide-react';
import { SPECIALTIES, Specialty } from '../data/dentistData';

interface SpecialtiesCatalogProps {
  onSelectSpecialty: (specialtyTitle: string) => void;
  onOpenModal: (specialty: Specialty) => void;
}

export const SpecialtiesCatalog: React.FC<SpecialtiesCatalogProps> = ({
  onSelectSpecialty,
  onOpenModal
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todos os Procedimentos' },
    { id: 'estetica', label: 'Estética Dental' },
    { id: 'reabilitacao', label: 'Reabilitação & Próteses' },
    { id: 'prevencao', label: 'Prevenção & Check-up' },
    { id: 'harmonizacao', label: 'Harmonização Orofacial' },
  ];

  const filteredSpecialties = activeCategory === 'all'
    ? SPECIALTIES
    : SPECIALTIES.filter(s => s.category === activeCategory);

  return (
    <section id="especialidades" className="py-20 sm:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE5D7] text-xs font-semibold text-[#8C6D37] mb-3 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Procedimentos Exclusivos</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2621] tracking-tight">
            Catálogo de Especialidades Clínicas & Estéticas
          </h2>
          <p className="text-base sm:text-lg text-[#665749] mt-4 leading-relaxed">
            Cada sorriso possui sua própria história anatômica e desejos únicos. Conheça as técnicas modernas que aplicamos na Sala 1406 do Empresarial Trade Center.
          </p>
        </div>

        {/* Filter Tabs (Interactive Segmented Control) */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 text-xs sm:text-sm font-medium rounded-full transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#2C2621] text-white shadow-md'
                    : 'bg-white text-[#6E5D4F] hover:bg-[#F2ECE4] border border-[#E5DACD]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredSpecialties.map((item, index) => {
            const editorialNumber = String(index + 1).padStart(2, '0');
            return (
              <div
                key={item.id}
                className="group flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-7 border border-[#E8DFD3] hover:border-[#D5B06E] hover:shadow-lg transition-all duration-300"
              >
                <div>
                  {/* Top editorial numbering & category kicker */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#F2ECE4] mb-5">
                    <span className="font-serif text-base font-bold text-[#B88E4B]">
                      {editorialNumber}.
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#968271]">
                      {item.category === 'estetica' && 'Estética Dental'}
                      {item.category === 'reabilitacao' && 'Reabilitação Oral'}
                      {item.category === 'prevencao' && 'Saúde & Profilaxia'}
                      {item.category === 'harmonizacao' && 'Harmonização'}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2C2621] group-hover:text-[#9B7337] transition-colors mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#615245] leading-relaxed mb-5">
                    {item.shortDescription}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-6">
                    {item.benefits.slice(0, 2).map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#524438]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B88E4B] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer with 2 clear actions */}
                <div className="pt-4 border-t border-[#F5EFE8] space-y-2.5">
                  <div className="flex items-center justify-between text-xs text-[#806F60] mb-1">
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#B88E4B]" />
                      <span>{item.duration}</span>
                    </span>
                    <span className="text-[#8C6D37] font-medium">{item.sessions}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onOpenModal(item)}
                      className="py-2.5 px-3 rounded-xl bg-[#FAF8F5] hover:bg-[#F2ECE2] text-[#594D42] text-xs font-semibold border border-[#E5DACD] transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <Info className="w-3.5 h-3.5 text-[#B88E4B]" />
                      <span>Detalhes</span>
                    </button>
                    <button
                      onClick={() => onSelectSpecialty(item.title)}
                      className="py-2.5 px-3 rounded-xl bg-[#2C2621] hover:bg-[#433830] text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span>Agendar</span>
                      <ArrowRight className="w-3 h-3 text-[#E6C68F]" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Advice Banner */}
        <div className="mt-14 bg-gradient-to-r from-[#F6EDE2] via-[#FBF7F2] to-[#F6EDE2] border border-[#DFCDBB] rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#2C2621]">
              Em dúvida sobre qual é o melhor tratamento para você?
            </h4>
            <p className="text-sm text-[#665749] mt-1 max-w-xl">
              Na primeira consulta, a Dra. Débora Almeida realiza uma análise facial completa com fotografias digitais para apresentar um plano personalizado.
            </p>
          </div>
          <button
            onClick={() => onSelectSpecialty('Avaliação e Diagnóstico Geral')}
            className="px-6 py-3 rounded-full gold-gradient-btn text-white text-sm font-medium whitespace-nowrap shadow-md cursor-pointer flex items-center gap-2"
          >
            <span>Agendar Avaliação Completa</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
