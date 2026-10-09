import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Sparkles, MapPin, Phone, Instagram } from 'lucide-react';
import { DENTIST_INFO } from '../data/dentistData';

interface NavbarProps {
  onOpenScheduler: (procedureName?: string) => void;
  onOpenQuiz: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenScheduler, onOpenQuiz }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Antes & Depois', href: '#antes-depois' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Consultório', href: '#consultorio' },
    { label: 'Instagram', href: '#instagram' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-[#E8DFD5]'
          : 'bg-[#FAF8F5]/80 backdrop-blur-xs border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16 sm:h-20">
          
          {/* Zone 1: Logo / Brand Element */}
          <a
            href="#"
            className="group flex items-center gap-3 shrink-0"
            aria-label="Dra. Débora Almeida - Início"
          >
            {/* Real Logo Image with styled fallback */}
            <div className="h-10 sm:h-12 flex items-center">
              <img
                src={DENTIST_INFO.logoUrl}
                alt="Logo Dra. Débora Almeida Odontologia"
                className="h-9 sm:h-11 w-auto object-contain transition-transform group-hover:scale-102"
                loading="eager"
                onError={(e) => {
                  // Fallback in case of network issue
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>

            <div className="flex flex-col justify-center">
              <span className="font-serif text-base sm:text-xl font-bold tracking-tight text-[#2C2621] group-hover:text-[#9B7337] transition-colors leading-tight">
                {DENTIST_INFO.name}
              </span>
              <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.16em] text-[#8C7A6B] leading-tight">
                Odontologia Estética · Trade Center
              </span>
            </div>
          </a>

          {/* Zone 2: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-[#594D42]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#9B7337] transition-colors whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={onOpenQuiz}
              className="inline-flex items-center gap-1.5 text-xs text-[#9B7337] font-semibold hover:text-[#7C5929] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#B88E4B]" />
              Guia do Sorriso
            </button>
          </nav>

          {/* Zone 3: Desktop Primary CTA */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenScheduler()}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white rounded-full gold-gradient-btn transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer shadow-sm active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Agendar Consulta</span>
            </button>
          </div>

          {/* Mobile Right Controls: Fast WhatsApp + Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenScheduler()}
              className="min-h-[42px] px-3 rounded-full bg-[#25D366] text-white flex items-center justify-center gap-1.5 text-xs font-semibold shadow-xs active:scale-95 transition-transform"
              aria-label="Agendar Consulta no WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Agendar</span>
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-h-[42px] min-w-[42px] flex items-center justify-center rounded-xl text-[#594D42] hover:text-[#2C2621] hover:bg-[#F2ECE4] transition-colors"
              aria-label="Abrir Menu de Navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#E8DFD5] px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
          {/* Profile mini header inside mobile menu */}
          <div className="flex items-center gap-3 pb-4 mb-3 border-b border-[#EEDBCC]">
            <img
              src={DENTIST_INFO.photoUrl}
              alt="Dra. Débora Almeida"
              className="w-12 h-12 rounded-full object-cover border-2 border-[#D5B06E] shadow-xs"
            />
            <div>
              <div className="font-serif font-bold text-sm text-[#2C2621]">{DENTIST_INFO.name}</div>
              <div className="text-[11px] text-[#8C6D37]">{DENTIST_INFO.cro} · Sala 1406</div>
            </div>
          </div>

          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[44px] flex items-center px-3 py-2 text-sm font-medium text-[#4A3F35] hover:text-[#9B7337] hover:bg-[#F2ECE4] rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuiz();
              }}
              className="min-h-[44px] flex items-center gap-2 px-3 py-2 text-sm font-semibold text-[#9B7337] hover:bg-[#F2ECE4] rounded-xl transition-colors text-left"
            >
              <Sparkles className="w-4 h-4 text-[#B88E4B]" />
              <span>Simulador Interativo do Sorriso</span>
            </button>

            <div className="pt-3 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenScheduler();
                }}
                className="w-full min-h-[48px] px-4 rounded-xl gold-gradient-btn text-white font-semibold flex items-center justify-center gap-2 text-sm shadow-md active:scale-98 transition-transform"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Agendar no WhatsApp (+55 87 99112-3727)</span>
              </button>

              <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                <a
                  href={DENTIST_INFO.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[40px] flex items-center justify-center gap-1 rounded-xl bg-white border border-[#DFD4C7] text-[#615245] font-medium"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#B88E4B]" />
                  <span>Como Chegar</span>
                </a>
                <a
                  href={DENTIST_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[40px] flex items-center justify-center gap-1 rounded-xl bg-white border border-[#DFD4C7] text-[#615245] font-medium"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#DD2A7B]" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
