import React from 'react';
import { Instagram, MessageCircle, MapPin, Phone, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { DENTIST_INFO } from '../data/dentistData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#241D17] text-[#D8CEBF] pt-14 pb-24 md:pb-12 border-t border-[#3A2F26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-[#3E3328]">
          
          {/* Brand & Identity (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={DENTIST_INFO.logoUrl}
                alt="Logo Dra. Débora Almeida"
                className="h-10 w-auto object-contain brightness-0 invert opacity-90"
              />
              <div>
                <span className="font-serif text-xl sm:text-2xl font-bold text-[#FAF8F5] block leading-tight">
                  {DENTIST_INFO.name}
                </span>
                <span className="text-[11px] uppercase tracking-widest text-[#D5B06E] font-medium block">
                  {DENTIST_INFO.tagline} · {DENTIST_INFO.cro}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#AFA292] leading-relaxed max-w-sm">
              Odontologia humanizada, reabilitação oral e estética dental de alta precisão no Empresarial Trade Center, em Petrolina - PE. Sorrisos que inspiram confiança e autenticidade.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={DENTIST_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#352B22] hover:bg-[#D5B06E] hover:text-[#241D17] text-[#D8CEBF] flex items-center justify-center transition-colors active:scale-95"
                aria-label="Instagram da Dra. Débora Almeida"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${DENTIST_INFO.phoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#352B22] hover:bg-[#25D366] hover:text-white text-[#D8CEBF] flex items-center justify-center transition-colors active:scale-95"
                aria-label="WhatsApp da Dra. Débora Almeida"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation (3 Cols) */}
          <div className="lg:col-span-3 space-y-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D5B06E] block mb-2">
              Navegação
            </span>
            <ul className="space-y-2 text-xs text-[#C5B8A8]">
              <li>
                <a href="#especialidades" className="hover:text-white transition-colors py-1 block">
                  Especialidades Clínicas
                </a>
              </li>
              <li>
                <a href="#antes-depois" className="hover:text-white transition-colors py-1 block">
                  Comparador Antes & Depois
                </a>
              </li>
              <li>
                <a href="#agendamento" className="hover:text-white transition-colors py-1 block">
                  Simulador de Agendamento
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-white transition-colors py-1 block">
                  Avaliações Google 5.0
                </a>
              </li>
              <li>
                <a href="#consultorio" className="hover:text-white transition-colors py-1 block">
                  Estrutura Trade Center
                </a>
              </li>
              <li>
                <a href="#instagram" className="hover:text-white transition-colors py-1 block">
                  Instagram Oficial
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Contact (4 Cols) */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D5B06E] block mb-2">
              Atendimento no Trade Center
            </span>
            <div className="space-y-2.5 text-xs text-[#C5B8A8]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D5B06E] shrink-0 mt-0.5" />
                <span>
                  {DENTIST_INFO.address.building}, {DENTIST_INFO.address.room}<br />
                  {DENTIST_INFO.address.city} · CEP {DENTIST_INFO.address.cep}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D5B06E] shrink-0" />
                <span>{DENTIST_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-[#D5B06E] shrink-0" />
                <span>{DENTIST_INFO.instagramHandle}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={DENTIST_INFO.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D5B06E] hover:underline"
              >
                Abrir localização no mapa →
              </a>
            </div>
          </div>

        </div>

        {/* Ethical Dental Regulatory Notice (CFO Compliance) */}
        <div className="py-5 border-b border-[#362B21] text-[11px] text-[#8E8070] leading-relaxed">
          <p>
            * Aviso Ético e Legal (Resolução CFO 196/2019): As informações e imagens apresentadas possuem fins estritamente educativos e demonstrativos das técnicas odontológicas. Os resultados de procedimentos odontológicos são individualizados e dependem da anatomia e resposta biológica de cada paciente, sendo indispensável a realização de consulta prévia de diagnóstico e planejamento.
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#8E8070]">
          <div>
            © {new Date().getFullYear()} {DENTIST_INFO.name} ({DENTIST_INFO.cro}). Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-1 text-[11px]">
            <span>Petrolina - PE · Vale do São Francisco</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
