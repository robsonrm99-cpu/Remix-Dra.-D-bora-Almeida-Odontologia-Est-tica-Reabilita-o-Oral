import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SpecialtiesCatalog } from './components/SpecialtiesCatalog';
import { SpecialtyModal } from './components/SpecialtyModal';
import { BeforeAfterComparison } from './components/BeforeAfterComparison';
import { WhatsAppScheduler } from './components/WhatsAppScheduler';
import { SmileQuizModal } from './components/SmileQuizModal';
import { GoogleReviews } from './components/GoogleReviews';
import { OfficeLocation } from './components/OfficeLocation';
import { InstagramShowcase } from './components/InstagramShowcase';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileBottomNav } from './components/MobileBottomNav';
import { Footer } from './components/Footer';
import { Specialty, FAQ_ITEMS, DENTIST_INFO } from './data/dentistData';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles, MessageCircle } from 'lucide-react';

export default function App() {
  const [selectedSpecialtyForModal, setSelectedSpecialtyForModal] = useState<Specialty | null>(null);
  const [selectedProcedureForScheduler, setSelectedProcedureForScheduler] = useState<string>('Lentes de Contato Dental');
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleOpenScheduler = (procedureName?: string) => {
    if (procedureName) {
      setSelectedProcedureForScheduler(procedureName);
    }
    const el = document.getElementById('agendamento');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenQuiz = () => {
    setIsQuizOpen(true);
  };

  const handleFinishQuiz = (recommendedProcedure: string) => {
    setSelectedProcedureForScheduler(recommendedProcedure);
    const el = document.getElementById('agendamento');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2C2724] font-sans selection:bg-[#E5D5C3] selection:text-[#3B2F25]">
      {/* Top Bar Navigation */}
      <Navbar
        onOpenScheduler={handleOpenScheduler}
        onOpenQuiz={handleOpenQuiz}
      />

      <main className="pb-12 md:pb-0">
        {/* Hero Section */}
        <Hero
          onOpenScheduler={handleOpenScheduler}
          onOpenQuiz={handleOpenQuiz}
        />

        {/* Specialties & Clinical Catalog */}
        <SpecialtiesCatalog
          onSelectSpecialty={(title) => handleOpenScheduler(title)}
          onOpenModal={(specialty) => setSelectedSpecialtyForModal(specialty)}
        />

        {/* Before and After Interactive Draggable Comparator */}
        <BeforeAfterComparison
          onOpenScheduler={handleOpenScheduler}
        />

        {/* WhatsApp Direct Scheduler with Message Simulator */}
        <WhatsAppScheduler
          initialProcedure={selectedProcedureForScheduler}
        />

        {/* Google 5.0 Star Reviews and Testimonials */}
        <GoogleReviews
          onOpenScheduler={() => handleOpenScheduler()}
        />

        {/* Trade Center Clinic Location, Hours & Amenities */}
        <OfficeLocation />

        {/* Instagram Vitrine Connected to @dradeboraalmeiida */}
        <InstagramShowcase
          onOpenScheduler={handleOpenScheduler}
        />

        {/* Interactive FAQ Section */}
        <section className="py-16 sm:py-20 bg-[#FAF8F5] border-t border-[#EADBCE]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE5D7] text-xs font-semibold text-[#8C6D37] mb-2 sm:mb-3 uppercase tracking-wider">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Dúvidas Frequentes</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#2C2621]">
                Perguntas Frequentes dos Pacientes
              </h2>
              <p className="text-sm sm:text-base text-[#6E5D4F] mt-2">
                Respostas diretas e transparentes sobre nossos tratamentos no Trade Center.
              </p>
            </div>

            <div className="space-y-3">
              {FAQ_ITEMS.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-[#E5DACD] overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 sm:gap-4 font-serif text-base sm:text-lg font-bold text-[#2C2621] hover:text-[#9B7337] transition-colors cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-[#B88E4B] shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-[#8C7A6B] shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-1 text-xs sm:text-sm text-[#54463A] leading-relaxed border-t border-[#F5EFE8] animate-fadeIn">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Direct contact helper on mobile */}
            <div className="mt-8 sm:mt-10 p-5 sm:p-6 rounded-3xl bg-[#F4EDE3] border border-[#DECFC0] text-center flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <h4 className="font-serif text-base sm:text-lg font-bold text-[#2C2621]">
                  Tem outra dúvida específica?
                </h4>
                <p className="text-xs text-[#736354] mt-0.5">
                  Converse diretamente com a equipe da Dra. Débora pelo WhatsApp.
                </p>
              </div>
              <button
                onClick={() => handleOpenScheduler('Dúvida sobre Tratamento')}
                className="w-full sm:w-auto min-h-[44px] px-6 py-2.5 rounded-full gold-gradient-btn text-white text-xs font-semibold whitespace-nowrap shadow-sm cursor-pointer flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Tirar Dúvida no WhatsApp</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Bottom Thumb Nav Bar */}
      <MobileBottomNav
        onOpenScheduler={handleOpenScheduler}
        onOpenQuiz={handleOpenQuiz}
      />

      {/* Floating Concierge WhatsApp Widget (visible on larger screens and discreet on mobile) */}
      <FloatingWhatsApp
        onOpenScheduler={handleOpenScheduler}
      />

      {/* Modals */}
      <SpecialtyModal
        specialty={selectedSpecialtyForModal}
        onClose={() => setSelectedSpecialtyForModal(null)}
        onSelectForSchedule={(title) => handleOpenScheduler(title)}
      />

      <SmileQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onFinishQuiz={handleFinishQuiz}
      />
    </div>
  );
}
