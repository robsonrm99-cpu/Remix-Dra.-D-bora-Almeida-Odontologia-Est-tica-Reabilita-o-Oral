import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, RotateCcw, MessageCircle } from 'lucide-react';
import { DENTIST_INFO } from '../data/dentistData';

interface SmileQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFinishQuiz: (recommendedProcedure: string) => void;
}

export const SmileQuizModal: React.FC<SmileQuizModalProps> = ({
  isOpen,
  onClose,
  onFinishQuiz
}) => {
  const [step, setStep] = useState(1);
  const [complaint, setComplaint] = useState<string>('');
  const [sensitivity, setSensitivity] = useState<string>('');
  const [urgency, setUrgency] = useState<string>('');

  if (!isOpen) return null;

  const handleReset = () => {
    setStep(1);
    setComplaint('');
    setSensitivity('');
    setUrgency('');
  };

  const getRecommendation = () => {
    if (complaint === 'amarelados') {
      return {
        title: "Clareamento Dental Personalizado",
        desc: "Nosso protocolo conjugado com dessensibilizante profilático é a solução perfeita para renovar a luminosidade e remover manchas com total conforto.",
        sessions: "Protocolo de 2 a 3 semanas",
        highlight: "Zero sensibilidade e resultado duradouro"
      };
    }
    if (complaint === 'espacos_forma') {
      if (urgency === 'rapido') {
        return {
          title: "Facetas em Resina Composta",
          desc: "Técnica direta e minimamente invasiva, capaz de fechar espaços e remodelar dentes no mesmo dia, sem necessidade de desgastes do dente sadio.",
          sessions: "Sessão única no Trade Center",
          highlight: "Resultado imediato e preservação máxima"
        };
      }
      return {
        title: "Lentes de Contato Dental em Porcelana",
        desc: "Lâminas ultrafinas de dissilicato de lítio planejadas digitalmente (DSD), oferecendo estabilidade definitiva de cor, brilho superior e longevidade insuperável.",
        sessions: "Planejamento em 3 consultas",
        highlight: "Padrão ouro em estética dental"
      };
    }
    if (complaint === 'gengiva') {
      return {
        title: "Harmonização Orofacial & Gengivoplastia",
        desc: "A associação de toxina botulínica e microplástica gengival devolve a proporção ideal entre o dente e o sorriso, alongando dentes aparentemente curtos.",
        sessions: "Procedimento rápido e pós-operatório suave",
        highlight: "Moldura labial em harmonia com os dentes"
      };
    }
    return {
      title: "Check-up Preventivo & Profilaxia Ultrassônica",
      desc: "Manutenção essencial com remoção delicada de cálculo e manchas extrínsecas, polimento de esmalte e diagnóstico precoce para manter a saúde bucal blindada.",
      sessions: "Sessão única de 50 minutos",
      highlight: "Dentes lisos, limpos e gengiva saudável"
    };
  };

  const recommendation = getRecommendation();

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-xl bg-[#FAF8F5] rounded-3xl border border-[#DFCDBB] shadow-2xl p-6 sm:p-8 text-[#2C2621]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#756658] hover:text-[#2C2621] hover:bg-[#EFE6DC] transition-colors cursor-pointer"
          aria-label="Fechar quiz"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Step Indicator */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#8C6D37] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#B88E4B]" />
            Simulador de Sorriso
          </span>
          <span className="text-[#C5B7A8]">·</span>
          <span className="text-xs text-[#8C7A6B]">Passo {step} de 3</span>
        </div>

        {/* Step 1: Queixa Principal */}
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-[#2C2621]">
              Qual é a principal transformação que você deseja no seu sorriso?
            </h3>
            <p className="text-xs text-[#6B5C4F]">
              Selecione o objetivo que mais reflete a sua vontade neste momento:
            </p>

            <div className="space-y-2.5 pt-2">
              {[
                { id: 'amarelados', label: 'Quero clarear dentes amarelados ou manchados' },
                { id: 'espacos_forma', label: 'Quero corrigir espaçamentos (diastemas), desgastes ou formato irregular' },
                { id: 'gengiva', label: 'Mostro muita gengiva ao sorrir ou acho os dentes curtos' },
                { id: 'limpeza', label: 'Quero apenas uma limpeza profunda, prevenção e check-up geral' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => {
                    setComplaint(opt.id);
                    setStep(2);
                  }}
                  className="w-full text-left p-4 rounded-2xl bg-white hover:bg-[#F4ECE2] border border-[#E3D6C5] hover:border-[#B88E4B] transition-all flex items-center justify-between text-xs sm:text-sm font-medium text-[#44382E] cursor-pointer group shadow-2xs"
                >
                  <span>{opt.label}</span>
                  <ArrowRight className="w-4 h-4 text-[#C2B2A2] group-hover:text-[#B88E4B] transition-colors" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Sensibilidade / Histórico */}
        {step === 2 && (
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-[#2C2621]">
              Você costuma sentir sensibilidade nos dentes com frio ou calor?
            </h3>
            <p className="text-xs text-[#6B5C4F]">
              Essa informação ajuda a Dra. Débora a escolher o protocolo biológico mais confortável:
            </p>

            <div className="space-y-2.5 pt-2">
              {[
                { id: 'sim_frequente', label: 'Sim, tenho dentes muito sensíveis a bebidas geladas' },
                { id: 'as_vezes', label: 'Às vezes, apenas em dias muito frios ou com doces' },
                { id: 'raro', label: 'Não, raramente sinto qualquer sensibilidade' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => {
                    setSensitivity(opt.id);
                    setStep(3);
                  }}
                  className="w-full text-left p-4 rounded-2xl bg-white hover:bg-[#F4ECE2] border border-[#E3D6C5] hover:border-[#B88E4B] transition-all flex items-center justify-between text-xs sm:text-sm font-medium text-[#44382E] cursor-pointer group shadow-2xs"
                >
                  <span>{opt.label}</span>
                  <ArrowRight className="w-4 h-4 text-[#C2B2A2] group-hover:text-[#B88E4B] transition-colors" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Urgência e Prazo */}
        {step === 3 && (
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-[#2C2621]">
              Qual é a sua expectativa de prazo para o resultado?
            </h3>
            <p className="text-xs text-[#6B5C4F]">
              Tem algum evento especial próximo (casamento, formatura, viagem)?
            </p>

            <div className="space-y-2.5 pt-2">
              {[
                { id: 'rapido', label: 'Preciso de resultado imediato ou no mesmo dia' },
                { id: 'semanas', label: 'Tenho algumas semanas para um tratamento planejado com calma' },
                { id: 'definitivo', label: 'Busco o resultado de maior longevidade e durabilidade permanente' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => {
                    setUrgency(opt.id);
                    setStep(4);
                  }}
                  className="w-full text-left p-4 rounded-2xl bg-white hover:bg-[#F4ECE2] border border-[#E3D6C5] hover:border-[#B88E4B] transition-all flex items-center justify-between text-xs sm:text-sm font-medium text-[#44382E] cursor-pointer group shadow-2xs"
                >
                  <span>{opt.label}</span>
                  <ArrowRight className="w-4 h-4 text-[#C2B2A2] group-hover:text-[#B88E4B] transition-colors" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Result Screen (Step 4) */}
        {step === 4 && (
          <div className="space-y-5 animate-fadeIn">
            <div className="p-4 rounded-2xl bg-[#F3ECE2] border border-[#E0D2C2]">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C6D37] block mb-1">
                Tratamento Recomendado para o seu perfil:
              </span>
              <h4 className="font-serif text-2xl font-bold text-[#2C2621]">
                {recommendation.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#54463A] mt-2 leading-relaxed">
                {recommendation.desc}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-white rounded-xl border border-[#E8DFD3]">
                <div className="text-[#8C7A6B] text-[10px] uppercase font-semibold">Previsão</div>
                <div className="font-semibold text-[#2C2621] mt-0.5">{recommendation.sessions}</div>
              </div>
              <div className="p-3 bg-white rounded-xl border border-[#E8DFD3]">
                <div className="text-[#8C7A6B] text-[10px] uppercase font-semibold">Destaque</div>
                <div className="font-semibold text-[#2C2621] mt-0.5">{recommendation.highlight}</div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => {
                  onFinishQuiz(recommendation.title);
                  onClose();
                }}
                className="w-full sm:flex-1 py-3 px-6 rounded-full gold-gradient-btn text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Agendar Avaliação deste Tratamento</span>
              </button>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto py-3 px-4 rounded-full bg-white hover:bg-[#F2EBE1] text-[#706052] border border-[#DED1C1] text-xs font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Refazer</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
