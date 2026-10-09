import React, { useState, useEffect } from 'react';
import { MessageCircle, Calendar, Clock, User, FileText, Send, Copy, Check, Sparkles, Phone, MapPin } from 'lucide-react';
import { DENTIST_INFO, SPECIALTIES } from '../data/dentistData';

interface WhatsAppSchedulerProps {
  initialProcedure?: string;
}

export const WhatsAppScheduler: React.FC<WhatsAppSchedulerProps> = ({ initialProcedure }) => {
  const [patientName, setPatientName] = useState('');
  const [selectedProcedure, setSelectedProcedure] = useState(initialProcedure || 'Lentes de Contato Dental');
  const [preferredPeriod, setPreferredPeriod] = useState<'manha' | 'tarde' | 'indiferente'>('tarde');
  const [preferredDay, setPreferredDay] = useState('Segunda a Sexta');
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialProcedure) {
      setSelectedProcedure(initialProcedure);
    }
  }, [initialProcedure]);

  const procedureOptions = [
    'Lentes de Contato Dental',
    'Facetas em Resina Composta',
    'Clareamento Dental Personalizado',
    'Harmonização Orofacial & Estética',
    'Reabilitação Oral & Próteses',
    'Profilaxia, Check-up & Prevenção',
    'Restaurações Estéticas Biomiméticas',
    'Gengivoplastia & Plástica Periodontal',
    'Avaliação e Diagnóstico Geral'
  ];

  // Dynamic message preview
  const generateMessage = () => {
    const greeting = "Olá, Dra. Débora Almeida e equipe!";
    const intro = patientName.trim()
      ? `Meu nome é *${patientName.trim()}*.`
      : "Gostaria de solicitar um agendamento de consulta.";
    
    const treatmentText = `Tenho interesse no procedimento: *${selectedProcedure}*.`;
    
    let periodText = "";
    if (preferredPeriod === 'manha') periodText = "Período preferido: *Manhã (08h às 12h)*.";
    else if (preferredPeriod === 'tarde') periodText = "Período preferido: *Tarde (14h às 18h30)*.";
    else periodText = "Período: *Qualquer horário disponível*.";

    const dayText = `Disponibilidade: *${preferredDay}*.`;
    
    const locationRef = "Consultório: *Empresarial Trade Center (Sala 1406), Petrolina - PE*.";
    
    const notesText = notes.trim()
      ? `\nObservação/Queixa: "${notes.trim()}"`
      : "";

    return `${greeting}\n\n${intro}\n${treatmentText}\n${periodText}\n${dayText}\n${locationRef}${notesText}\n\nPoderiam me informar as próximas datas disponíveis? Muito obrigado(a)!`;
  };

  const currentMessage = generateMessage();

  const handleOpenWhatsApp = () => {
    const url = `https://wa.me/${DENTIST_INFO.phoneRaw}?text=${encodeURIComponent(currentMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(currentMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="agendamento" className="py-20 sm:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE5D7] text-xs font-semibold text-[#8C6D37] mb-3 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Atendimento Rápido e Sem Espera</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2621] tracking-tight">
            Simulador de Agendamento Personalizado
          </h2>
          <p className="text-base sm:text-lg text-[#665749] mt-4 leading-relaxed">
            Monte a sua mensagem personalizada em segundos e inicie a conversa diretamente com a nossa equipe de atendimento no WhatsApp oficial da Dra. Débora Almeida.
          </p>
        </div>

        {/* 2-Column Split: Form Controls (Left) & WhatsApp Chat Preview (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Controls Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-9 border border-[#E8DFD3] shadow-md flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Patient Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#736354] mb-2 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#B88E4B]" />
                  <span>Seu Nome Completo</span>
                </label>
                <input
                  type="text"
                  placeholder="Ex: Dra. Mariana Costa"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#DFD4C7] bg-[#FAF8F5] text-[#2C2621] text-sm focus:outline-none focus:ring-2 focus:ring-[#B88E4B]/40 focus:border-[#B88E4B] transition-all"
                />
              </div>

              {/* Procedure Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#736354] mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#B88E4B]" />
                  <span>Procedimento de Interesse</span>
                </label>
                <select
                  value={selectedProcedure}
                  onChange={(e) => setSelectedProcedure(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#DFD4C7] bg-[#FAF8F5] text-[#2C2621] text-sm focus:outline-none focus:ring-2 focus:ring-[#B88E4B]/40 focus:border-[#B88E4B] transition-all cursor-pointer"
                >
                  {procedureOptions.map((proc) => (
                    <option key={proc} value={proc}>
                      {proc}
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Period (Manhã / Tarde / Qualquer) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#736354] mb-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#B88E4B]" />
                  <span>Turno de Preferência</span>
                </label>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  <button
                    type="button"
                    onClick={() => setPreferredPeriod('manha')}
                    className={`min-h-[44px] py-2.5 px-2 sm:px-3 rounded-xl text-xs sm:text-sm font-medium border transition-all cursor-pointer ${
                      preferredPeriod === 'manha'
                        ? 'bg-[#2C2621] text-white border-[#2C2621] shadow-xs'
                        : 'bg-[#FAF8F5] text-[#615245] border-[#E5DACD] active:bg-[#F2ECE2]'
                    }`}
                  >
                    Manhã (08h-12h)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPreferredPeriod('tarde')}
                    className={`min-h-[44px] py-2.5 px-2 sm:px-3 rounded-xl text-xs sm:text-sm font-medium border transition-all cursor-pointer ${
                      preferredPeriod === 'tarde'
                        ? 'bg-[#2C2621] text-white border-[#2C2621] shadow-xs'
                        : 'bg-[#FAF8F5] text-[#615245] border-[#E5DACD] active:bg-[#F2ECE2]'
                    }`}
                  >
                    Tarde (14h-18h30)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPreferredPeriod('indiferente')}
                    className={`min-h-[44px] py-2.5 px-2 sm:px-3 rounded-xl text-xs sm:text-sm font-medium border transition-all cursor-pointer ${
                      preferredPeriod === 'indiferente'
                        ? 'bg-[#2C2621] text-white border-[#2C2621] shadow-xs'
                        : 'bg-[#FAF8F5] text-[#615245] border-[#E5DACD] active:bg-[#F2ECE2]'
                    }`}
                  >
                    Qualquer
                  </button>
                </div>
              </div>

              {/* Preferred Day of the Week */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#736354] mb-2 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#B88E4B]" />
                  <span>Preferência de Dia</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['Início de Semana (Seg/Ter)', 'Meio de Semana (Qua/Qui)', 'Sexta-feira', 'Sábado pela manhã'].map((day) => (
                    <button
                      key={day}
                      type="button"
                      onClick={() => setPreferredDay(day)}
                      className={`min-h-[44px] py-2 px-2.5 rounded-xl text-xs font-medium border transition-all cursor-pointer text-center ${
                        preferredDay === day
                          ? 'bg-[#B88E4B] text-white border-[#B88E4B] shadow-xs'
                          : 'bg-[#FAF8F5] text-[#665749] border-[#E5DACD] active:bg-[#F2ECE2]'
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>

              {/* Notes / Queixa */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#736354] mb-2 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#B88E4B]" />
                  <span>Observações ou Queixa Principal (Opcional)</span>
                </label>
                <input
                  type="text"
                  placeholder="Ex: Tenho sensibilidade nos dentes / gostaria de saber valores de lentes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#DFD4C7] bg-[#FAF8F5] text-[#2C2621] text-sm focus:outline-none focus:ring-2 focus:ring-[#B88E4B]/40 focus:border-[#B88E4B] transition-all"
                />
              </div>

            </div>

            {/* Bottom info helper */}
            <div className="pt-6 mt-6 border-t border-[#F2ECE4] flex items-center justify-between text-xs text-[#806F60]">
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp Oficial: <strong>{DENTIST_INFO.phone}</strong></span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#B88E4B]" />
                <span>Sala 1406, Trade Center Petrolina</span>
              </div>
            </div>
          </div>

          {/* WhatsApp Live Simulator Bubble (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="bg-[#EFEAE2] rounded-3xl p-4 sm:p-6 border border-[#DFCDBB] shadow-lg flex-1 flex flex-col justify-between">
              
              {/* WhatsApp App Mock Header */}
              <div className="bg-[#075E54] text-white rounded-2xl p-3.5 flex items-center justify-between shadow-xs mb-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-[#128C7E] flex items-center justify-center font-serif text-sm font-bold text-white border border-white/20">
                      DA
                    </div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] rounded-full border-2 border-[#075E54]" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm leading-tight">
                      Dra. Débora Almeida
                    </div>
                    <div className="text-[11px] text-[#A5D6A7]">
                      Online · Trade Center Sala 1406
                    </div>
                  </div>
                </div>
                <div className="text-[11px] bg-white/10 px-2.5 py-1 rounded-full text-white/90">
                  Agendamento
                </div>
              </div>

              {/* Chat Canvas with WhatsApp wallpaper pattern */}
              <div className="flex-1 min-h-[260px] py-2 flex flex-col justify-end space-y-3">
                {/* Outgoing Message Bubble (Patient Message) */}
                <div className="ml-auto max-w-[92%] bg-[#DCF8C6] text-[#111B21] rounded-2xl rounded-tr-xs p-4 shadow-sm border border-[#C5E1A5] text-xs leading-relaxed space-y-2">
                  <div className="whitespace-pre-line text-[#1F2C33]">
                    {currentMessage}
                  </div>
                  <div className="flex items-center justify-end gap-1 text-[10px] text-[#667781] pt-1">
                    <span>Agora</span>
                    <span className="text-[#34B7F1] font-bold">✓✓</span>
                  </div>
                </div>

                {/* Instant Bot Greeting Note */}
                <div className="bg-white text-[#54656F] rounded-2xl rounded-tl-xs p-3 text-[11px] shadow-2xs max-w-[85%] border border-[#E9EDEF]">
                  👋 Nossa secretária entrará em contato em minutos com as opções de horários e orientações de chegada ao Trade Center.
                </div>
              </div>

              {/* Action Buttons underneath simulator */}
              <div className="pt-4 space-y-2.5">
                <button
                  onClick={handleOpenWhatsApp}
                  className="w-full py-3.5 px-6 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm tracking-wide shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Mensagem no WhatsApp</span>
                </button>

                <button
                  onClick={handleCopyMessage}
                  className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-[#FAF8F5] text-[#594D42] text-xs font-semibold border border-[#D5C2AD] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#25D366]" />
                      <span className="text-[#25D366]">Texto Copiado com Sucesso!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#8C6D37]" />
                      <span>Copiar Texto da Mensagem</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
