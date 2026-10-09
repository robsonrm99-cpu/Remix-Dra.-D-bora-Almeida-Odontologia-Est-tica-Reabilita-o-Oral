import React from 'react';
import { X, CheckCircle2, Clock, Calendar, Sparkles, MessageCircle, AlertCircle } from 'lucide-react';
import { Specialty, DENTIST_INFO } from '../data/dentistData';

interface SpecialtyModalProps {
  specialty: Specialty | null;
  onClose: () => void;
  onSelectForSchedule: (specialtyTitle: string) => void;
}

export const SpecialtyModal: React.FC<SpecialtyModalProps> = ({
  specialty,
  onClose,
  onSelectForSchedule
}) => {
  if (!specialty) return null;

  const handleScheduleDirect = () => {
    onSelectForSchedule(specialty.title);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#FAF8F5] rounded-3xl border border-[#DFCDBB] shadow-2xl p-6 sm:p-8 text-[#2C2621]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#756658] hover:text-[#2C2621] hover:bg-[#EFE6DC] transition-colors cursor-pointer"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-8 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE5D7] text-xs font-semibold text-[#8C6D37] mb-2 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Guia Clínico Exclusivo</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C2621] text-balance">
            {specialty.title}
          </h3>
          <p className="text-sm text-[#736354] mt-1">
            Planejamento e execução personalizada pela Dra. Débora Almeida no Empresarial Trade Center
          </p>
        </div>

        {/* Overview Box */}
        <div className="bg-[#F3ECE2] border border-[#E2D5C4] rounded-2xl p-4 sm:p-5 mb-6 text-sm text-[#54463A] leading-relaxed">
          {specialty.fullDescription}
        </div>

        {/* Time & Session Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#E9DFD2]">
            <Clock className="w-5 h-5 text-[#B88E4B] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs text-[#806F60] font-medium uppercase tracking-wide">Duração Média</div>
              <div className="text-sm font-semibold text-[#2C2621]">{specialty.duration}</div>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#E9DFD2]">
            <Calendar className="w-5 h-5 text-[#B88E4B] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs text-[#806F60] font-medium uppercase tracking-wide">Número de Sessões</div>
              <div className="text-sm font-semibold text-[#2C2621]">{specialty.sessions}</div>
            </div>
          </div>
        </div>

        {/* Indicação Clínica */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#8A7563] mb-2">
            Para quem é indicado:
          </h4>
          <p className="text-sm text-[#4E4136] bg-white p-3.5 rounded-xl border border-[#E9DFD2]">
            {specialty.indication}
          </p>
        </div>

        {/* Principais Benefícios */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#8A7563] mb-2.5">
            Benefícios e Diferenciais:
          </h4>
          <ul className="space-y-2">
            {specialty.benefits.map((b, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-[#4A3F35]">
                <CheckCircle2 className="w-4 h-4 text-[#8C6D37] shrink-0 mt-0.5" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Cuidados e Orientações */}
        <div className="mb-8">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#8A7563] mb-2.5">
            Cuidados Recomendados:
          </h4>
          <ul className="space-y-2">
            {specialty.careTips.map((c, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs text-[#6B5A4B]">
                <AlertCircle className="w-4 h-4 text-[#B5A596] shrink-0 mt-0.5" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-[#E8DFD5]">
          <button
            onClick={handleScheduleDirect}
            className="w-full sm:flex-1 py-3 px-6 rounded-full gold-gradient-btn text-white font-medium text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Agendar Avaliação para {specialty.title}</span>
          </button>
          <button
            onClick={onClose}
            className="w-full sm:w-auto py-3 px-5 rounded-full bg-white hover:bg-[#F2EBE1] text-[#69584A] border border-[#DED1C1] font-medium text-xs transition-colors cursor-pointer"
          >
            Voltar ao Catálogo
          </button>
        </div>

      </div>
    </div>
  );
};
