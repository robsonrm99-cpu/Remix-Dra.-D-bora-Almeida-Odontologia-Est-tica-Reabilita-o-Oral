import React, { useState } from 'react';
import { Instagram, Heart, MessageCircle, ExternalLink, Sparkles, X, Send } from 'lucide-react';
import { DENTIST_INFO, INSTAGRAM_POSTS, InstagramPost } from '../data/dentistData';

interface InstagramShowcaseProps {
  onOpenScheduler: (procedureName?: string) => void;
}

export const InstagramShowcase: React.FC<InstagramShowcaseProps> = ({ onOpenScheduler }) => {
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);

  return (
    <section id="instagram" className="py-16 sm:py-24 lg:py-28 bg-[#F6F1EA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EADDCF] text-xs font-semibold text-[#8C6D37] mb-2 sm:mb-3 uppercase tracking-wider">
            <Instagram className="w-3.5 h-3.5" />
            <span>Rotina, Bastidores & Casos</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#2C2621] tracking-tight">
            Vitrine do Instagram
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#665749] mt-3 leading-relaxed">
            Acompanhe o dia a dia na Sala 1406 do Trade Center, dicas e transformações no perfil oficial <a href={DENTIST_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#8C6D37] hover:underline">{DENTIST_INFO.instagramHandle}</a>.
          </p>
        </div>

        {/* Instagram Profile Bar Mockup with Real Photo */}
        <div className="bg-white rounded-3xl p-4 sm:p-7 border border-[#E3D6C5] shadow-sm mb-8 sm:mb-10 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="flex items-center gap-3.5 text-center sm:text-left w-full sm:w-auto">
            {/* Instagram Profile Avatar with gradient ring and real photo */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] p-0.5 shrink-0 shadow-xs">
              <img
                src={DENTIST_INFO.photoUrl}
                alt="Dra. Débora Almeida Instagram"
                className="w-full h-full rounded-full object-cover border-2 border-white"
              />
            </div>

            <div className="text-left flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-base sm:text-xl font-bold text-[#2C2621] truncate">
                  {DENTIST_INFO.instagramHandle}
                </span>
                <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#3897F0] text-white flex items-center justify-center text-[8px] sm:text-[9px] font-bold shrink-0">
                  ✓
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-[#736354] mt-0.5 truncate">
                Dra. Débora Almeida · Trade Center Sala 1406 · Petrolina
              </p>
            </div>
          </div>

          <a
            href={DENTIST_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[44px] px-6 py-2.5 rounded-full bg-gradient-to-r from-[#DD2A7B] to-[#9B2B8E] hover:opacity-95 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-opacity whitespace-nowrap active:scale-98"
          >
            <Instagram className="w-4 h-4" />
            <span>Seguir @dradeboraalmeiida</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Horizontal Snap Scroller / Desktop Grid */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto pb-4 sm:pb-0 snap-x snap-mandatory scrollbar-none">
          {INSTAGRAM_POSTS.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="min-w-[270px] sm:min-w-0 snap-center group bg-white rounded-3xl overflow-hidden border border-[#E3D6C5] hover:border-[#D5B06E] hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between shrink-0 sm:shrink"
            >
              <div>
                {/* Visual Thumbnail */}
                <div 
                  className="relative h-48 sm:h-56 w-full p-5 flex flex-col justify-between overflow-hidden"
                  style={{ backgroundColor: post.themeColor }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="relative z-10 self-start">
                    <span className="inline-block px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[10px] sm:text-[11px] font-bold text-[#2C2621]">
                      {post.category}
                    </span>
                  </div>

                  {/* Thumbnail Title Overlay */}
                  <div className="relative z-10 text-white">
                    <span className="text-[10px] uppercase tracking-wider text-[#E8DFD3] block mb-1">
                      {post.date}
                    </span>
                    <h3 className="font-serif text-base sm:text-lg font-bold leading-snug line-clamp-2">
                      {post.title}
                    </h3>
                  </div>
                </div>

                {/* Caption snippet */}
                <div className="p-4 sm:p-5">
                  <p className="text-xs text-[#594A3D] line-clamp-2 sm:line-clamp-3 leading-relaxed">
                    {post.caption}
                  </p>
                </div>
              </div>

              {/* Bottom Engagement Counters */}
              <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-2 sm:pt-3 border-t border-[#F5EFE8] flex items-center justify-between text-xs text-[#806F60]">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 text-[#C48680]" />
                    <span className="text-[11px] font-medium">{post.likes}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5 text-[#8C7A6B]" />
                    <span className="text-[11px] font-medium">{post.comments}</span>
                  </span>
                </div>
                <span className="text-[#8C6D37] text-[11px] font-semibold group-hover:underline">
                  Ver post →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Post Detail Modal */}
        {selectedPost && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn"
            onClick={() => setSelectedPost(null)}
          >
            <div 
              className="relative w-full max-w-lg bg-white rounded-3xl border border-[#DFCDBB] shadow-2xl p-5 sm:p-7 text-[#2C2621]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 p-2 rounded-full text-[#756658] hover:text-[#2C2621] hover:bg-[#EFE6DC] transition-colors cursor-pointer"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <img
                  src={DENTIST_INFO.photoUrl}
                  alt="Dra. Débora Almeida"
                  className="w-10 h-10 rounded-full object-cover border border-[#D5B06E]"
                />
                <div>
                  <div className="font-semibold text-xs text-[#2C2621]">{DENTIST_INFO.instagramHandle}</div>
                  <div className="text-[10px] text-[#8C7A6B]">{selectedPost.category} · {selectedPost.date}</div>
                </div>
              </div>

              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2C2621] mb-2">
                {selectedPost.title}
              </h3>

              {/* Full Caption */}
              <div className="bg-[#FAF8F5] border border-[#EBE1D5] rounded-2xl p-4 mb-5 text-xs sm:text-sm text-[#54463A] leading-relaxed max-h-56 overflow-y-auto">
                <p className="whitespace-pre-line">{selectedPost.caption}</p>
              </div>

              {/* Engagement Stats */}
              <div className="flex items-center gap-5 text-xs text-[#736354] mb-5 pb-3 border-b border-[#F2ECE4]">
                <span className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-[#ED4956]" />
                  <span><strong>{selectedPost.likes}</strong> curtidas</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <MessageCircle className="w-4 h-4 text-[#594D42]" />
                  <span><strong>{selectedPost.comments}</strong> comentários</span>
                </span>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-2.5">
                <a
                  href={DENTIST_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 min-h-[44px] py-2.5 px-4 rounded-full bg-[#2C2621] hover:bg-[#433830] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Abrir no Instagram</span>
                </a>
                
                <button
                  onClick={() => {
                    const proc = selectedPost.category;
                    setSelectedPost(null);
                    onOpenScheduler(proc);
                  }}
                  className="w-full sm:flex-1 min-h-[44px] py-2.5 px-4 rounded-full gold-gradient-btn text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Tirar Dúvida no WhatsApp</span>
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
