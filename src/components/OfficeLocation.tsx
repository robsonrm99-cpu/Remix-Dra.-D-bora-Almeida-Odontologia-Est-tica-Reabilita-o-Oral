import React, { useState } from 'react';
import { MapPin, Navigation, Car, Clock, Copy, Check, ExternalLink, ShieldCheck, Sparkles, Building, Coffee } from 'lucide-react';
import { DENTIST_INFO } from '../data/dentistData';

export const OfficeLocation: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const fullAddress = `${DENTIST_INFO.address.building}, ${DENTIST_INFO.address.room}, ${DENTIST_INFO.address.city}, CEP ${DENTIST_INFO.address.cep}`;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="consultorio" className="py-20 sm:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE5D7] text-xs font-semibold text-[#8C6D37] mb-3 uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>Infraestrutura de Alto Padrão</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2621] tracking-tight">
            Consultório no Empresarial Trade Center
          </h2>
          <p className="text-base sm:text-lg text-[#665749] mt-4 leading-relaxed">
            Localizado no mais nobre centro empresarial de Petrolina, o consultório na <strong className="text-[#2C2621]">Sala 1406</strong> foi concebido para proporcionar tranquilidade, privacidade e conforto sensorial absoluto.
          </p>
        </div>

        {/* 2-Column Grid: Location Details & Clinic Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Address, Hours, Route Links (6 Cols) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-9 border border-[#E8DFD3] shadow-md flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Main Address Card */}
              <div className="p-5 rounded-2xl bg-[#F6EFE6] border border-[#E5DACD]">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#2C2621] text-[#E6C68F] flex items-center justify-center shrink-0 mt-0.5">
                    <Building className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#8C6D37]">
                      Endereço Oficial
                    </span>
                    <h3 className="font-serif text-xl font-bold text-[#2C2621]">
                      {DENTIST_INFO.address.building}
                    </h3>
                    <p className="text-sm font-semibold text-[#8C6D37]">
                      {DENTIST_INFO.address.room} (14º Andar)
                    </p>
                    <p className="text-xs text-[#69584B]">
                      {DENTIST_INFO.address.city} · CEP {DENTIST_INFO.address.cep}
                    </p>
                  </div>
                </div>

                {/* Copy address button */}
                <div className="mt-4 pt-3 border-t border-[#DECFC0] flex items-center justify-between">
                  <span className="text-xs text-[#7A6B5D] truncate max-w-[220px]">
                    {DENTIST_INFO.address.reference}
                  </span>
                  <button
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-[#FAF8F5] text-xs font-medium text-[#54463A] border border-[#D5C2AD] transition-colors cursor-pointer shrink-0"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#25D366]" />
                        <span className="text-[#25D366]">Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#8C6D37]" />
                        <span>Copiar Endereço</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Route Buttons: Google Maps & Waze */}
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-[#8A7563] mb-2.5">
                  Como Chegar ao Trade Center:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={DENTIST_INFO.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-2xl bg-[#FAF8F5] hover:bg-[#F2ECE4] border border-[#E0D4C5] transition-colors flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2.5 text-xs font-semibold text-[#2C2621]">
                      <Navigation className="w-4 h-4 text-[#4285F4]" />
                      <span>Abrir no Google Maps</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-[#8C7A6B] group-hover:text-[#2C2621]" />
                  </a>

                  <a
                    href={DENTIST_INFO.address.wazeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-2xl bg-[#FAF8F5] hover:bg-[#F2ECE4] border border-[#E0D4C5] transition-colors flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2.5 text-xs font-semibold text-[#2C2621]">
                      <Car className="w-4 h-4 text-[#33CCFF]" />
                      <span>Navegar via Waze</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-[#8C7A6B] group-hover:text-[#2C2621]" />
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-[#8A7563] mb-2.5 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#B88E4B]" />
                  <span>Horários de Atendimento</span>
                </span>
                <div className="space-y-2">
                  {DENTIST_INFO.hours.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-2 px-3 rounded-xl bg-[#FAF8F5] border border-[#EAE1D7] text-xs"
                    >
                      <span className="font-medium text-[#4A3F35]">{h.days}</span>
                      <span className="text-[#8C6D37] font-semibold">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom note */}
            <div className="pt-6 mt-6 border-t border-[#F2ECE4] text-xs text-[#806F60]">
              * Atendimentos realizados exclusivamente com hora marcada para assegurar pontualidade rigorosa e privacidade.
            </div>
          </div>

          {/* Right Column: Amenities & Architectural Experience (6 Cols) */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#2D241C] via-[#382E25] to-[#201A15] text-white rounded-3xl p-6 sm:p-9 shadow-xl flex flex-col justify-between border border-[#4F4135]">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#46392E] text-xs font-semibold text-[#D5B06E] mb-4 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Experiência Sensorial na Sala 1406</span>
              </div>
              
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF8F5] leading-tight mb-4">
                Onde o Cuidado Odontológico Encontra a Serenidade
              </h3>
              
              <p className="text-sm text-[#CFC2B4] leading-relaxed mb-6">
                Projetado com paleta cromática em tons de areia, linho e iluminação aconchegante, o espaço foi idealizado para desmistificar qualquer ansiedade odontológica.
              </p>

              {/* Amenities Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                <div className="p-3.5 rounded-xl bg-[#3E332A]/70 border border-[#524438]">
                  <Car className="w-5 h-5 text-[#D5B06E] mb-1.5" />
                  <div className="text-xs font-bold text-[#FAF8F5]">Estacionamento Privativo</div>
                  <div className="text-[11px] text-[#B0A294]">Rotativo com manobrista no próprio Trade Center</div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#3E332A]/70 border border-[#524438]">
                  <Coffee className="w-5 h-5 text-[#D5B06E] mb-1.5" />
                  <div className="text-xs font-bold text-[#FAF8F5]">Recepção Boutique</div>
                  <div className="text-[11px] text-[#B0A294]">Café gourmet e ambiente climatizado</div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#3E332A]/70 border border-[#524438]">
                  <ShieldCheck className="w-5 h-5 text-[#D5B06E] mb-1.5" />
                  <div className="text-xs font-bold text-[#FAF8F5]">Biossegurança Cirúrgica</div>
                  <div className="text-[11px] text-[#B0A294]">Autoclaves de última geração e controle rigoroso</div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#3E332A]/70 border border-[#524438]">
                  <Building className="w-5 h-5 text-[#D5B06E] mb-1.5" />
                  <div className="text-xs font-bold text-[#FAF8F5]">Vista do 14º Andar</div>
                  <div className="text-[11px] text-[#B0A294]">Panorâmica privilegiada do Vale do São Francisco</div>
                </div>
              </div>
            </div>

            {/* Quick Map Visual Plate */}
            <div className="pt-4 border-t border-[#4A3D32]">
              <div className="p-3 rounded-xl bg-[#221B16] border border-[#483B30] flex items-center justify-between text-xs">
                <div>
                  <span className="text-[#8E7E70] text-[11px]">Petrolina - PE · Vale do São Francisco</span>
                  <div className="font-semibold text-[#FAF8F5] mt-0.5">Av. Nações / Centro Comercial</div>
                </div>
                <a
                  href={DENTIST_INFO.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#D5B06E] hover:bg-[#C29D5B] text-[#241C15] font-semibold text-xs tracking-wide transition-colors"
                >
                  Abrir Mapa
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
