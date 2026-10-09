import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles, Phone, MapPin } from 'lucide-react';
import { DENTIST_INFO } from '../data/dentistData';

interface FloatingWhatsAppProps {
  onOpenScheduler: (procedureName?: string) => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenScheduler }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const quickChips = [
    { label: 'Quero agendar uma consulta', text: 'Olá, Dra. Débora! Gostaria de agendar uma consulta no Trade Center.' },
    { label: 'Dúvidas sobre Clareamento Dental', text: 'Olá! Gostaria de tirar dúvidas sobre o protocolo de clareamento sem dor.' },
    { label: 'Lentes de Contato Dental', text: 'Olá! Tenho interesse em avaliação para lentes de contato cerâmicas.' },
    { label: 'Localização Sala 1406', text: 'Olá! Gostaria de saber como chegar no Empresarial Trade Center, sala 1406.' },
  ];

  const handleSendToWhatsApp = (textToSend: string) => {
    const finalMsg = textToSend.trim() || 'Olá, Dra. Débora Almeida! Gostaria de informações sobre agendamento no Trade Center.';
    const url = `https://wa.me/${DENTIST_INFO.phoneRaw}?text=${encodeURIComponent(finalMsg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-16 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end">
      
      {/* Popover Concierge Window */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2rem)] max-w-sm sm:w-96 bg-white rounded-3xl border border-[#DFCDBB] shadow-2xl overflow-hidden animate-fadeIn text-[#2C2621]">
          {/* Header with Dra. Débora's Photo */}
          <div className="bg-gradient-to-r from-[#2C2621] via-[#3D332B] to-[#251F1A] text-white p-3.5 sm:p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={DENTIST_INFO.photoUrl}
                  alt="Dra. Débora Almeida"
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#D5B06E] shadow-xs"
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] rounded-full border-2 border-[#2C2621]" />
              </div>
              <div>
                <div className="font-semibold text-sm leading-tight text-[#FAF8F5]">
                  Dra. Débora Almeida
                </div>
                <div className="text-[11px] text-[#D5B06E]">
                  Trade Center Petrolina · Sala 1406
                </div>
              </div>
            </div>
            
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Fechar janela"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-3.5 sm:p-4 bg-[#FAF8F5] space-y-3">
            <div className="bg-white rounded-2xl p-3 border border-[#EBE1D5] text-xs text-[#54463A] shadow-2xs">
              <p>
                Olá! Seja muito bem-vindo(a). Como posso ajudar você a transformar o seu sorriso hoje?
              </p>
              <span className="text-[10px] text-[#A69584] mt-1 block">
                Atendimento humanizado · Resposta ágil
              </span>
            </div>

            {/* Quick Chips */}
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-[#8A7563] mb-1.5">
                Perguntas Frequentes:
              </span>
              <div className="space-y-1.5">
                {quickChips.map((chip, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendToWhatsApp(chip.text)}
                    className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-[#F2ECE2] active:bg-[#EAE0D2] border border-[#E5DACD] text-xs text-[#44382E] transition-colors flex items-center justify-between cursor-pointer"
                  >
                    <span className="line-clamp-1">{chip.label}</span>
                    <Send className="w-3 h-3 text-[#B88E4B] shrink-0 ml-1" />
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Input */}
            <div className="pt-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Escreva sua mensagem..."
                  value={customMsg}
                  onChange={(e) => setCustomMsg(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSendToWhatsApp(customMsg);
                  }}
                  className="w-full pl-3 pr-10 py-2.5 rounded-xl bg-white border border-[#DFD4C7] text-xs text-[#2C2621] focus:outline-none focus:ring-2 focus:ring-[#25D366]/40"
                />
                <button
                  onClick={() => handleSendToWhatsApp(customMsg)}
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-[#25D366] text-white hover:bg-[#1EBE5D] transition-colors cursor-pointer"
                  aria-label="Enviar"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Or Open Simulator */}
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenScheduler();
              }}
              className="w-full py-1.5 text-center text-[11px] text-[#8C6D37] hover:underline font-semibold cursor-pointer block"
            >
              Ou monte sua mensagem no Simulador Completo →
            </button>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hidden sm:flex group relative items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5 active:scale-95"
        aria-label="Abrir atendimento no WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>
        
        <MessageCircle className="w-5 h-5 text-white" />
        
        <span className="font-semibold text-xs tracking-wide">
          Atendimento no WhatsApp
        </span>
      </button>

    </div>
  );
};
