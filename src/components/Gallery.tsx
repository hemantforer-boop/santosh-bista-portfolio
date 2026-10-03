import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CinematicImage } from './CinematicImage';
import { GALLERY_ITEMS, GalleryItem } from '../data/portfolioData';

const CATEGORIES = [
  'ALL',
  'PORTRAITS',
  'FILM',
  'THEATRE',
  'BEHIND THE SCENES',
  'ART GHAR',
] as const;

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<(typeof CATEGORIES)[number]>('ALL');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const filteredItems =
    activeCategory === 'ALL'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (item: GalleryItem) => {
    const idx = filteredItems.findIndex((i) => i.id === item.id);
    setLightboxIndex(idx >= 0 ? idx : 0);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const nextImage = useCallback(() => {
    if (lightboxIndex === null || filteredItems.length === 0) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  }, [lightboxIndex, filteredItems.length]);

  const prevImage = useCallback(() => {
    if (lightboxIndex === null || filteredItems.length === 0) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard navigation in Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  const activeLightboxItem =
    lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const getEditorialLayoutClasses = (idx: number, aspectClass: GalleryItem['aspectClass']) => {
    if (aspectClass === 'full-bleed' && idx === 0) {
      return {
        col: 'lg:col-span-12',
        aspect: 'aspect-[16/9]',
      };
    }
    if (aspectClass === 'portrait-tall') {
      return {
        col: 'lg:col-span-5 lg:mt-14',
        aspect: 'aspect-[4/5]',
      };
    }
    if (aspectClass === 'offset-editorial') {
      return {
        col: 'lg:col-span-6 lg:col-start-2',
        aspect: 'aspect-[4/3]',
      };
    }
    return {
      col: 'lg:col-span-7',
      aspect: 'aspect-[16/10]',
    };
  };

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="relative py-28 md:py-40 bg-[#080808] border-b border-[#F4F1EA]/[0.07]"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header + Category Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-12 md:pb-16 border-b border-[#F4F1EA]/10 gap-8">
          <div>
            <span className="font-mono-tabular text-xs tracking-[0.24em] text-[#6E6A63] uppercase block mb-3">
               PHOTOGRAPHY
            </span>
            <h2
              id="gallery-heading"
              className="text-3xl sm:text-5xl md:text-6xl font-light tracking-[-0.02em] text-[#F4F1EA] uppercase"
            >
              GALLERY
            </h2>
          </div>

          {/* Functional Interactive Filter Controls */}
          <div
            role="tablist"
            aria-label="Gallery Categories"
            className="flex flex-wrap items-center gap-2 sm:gap-3"
          >
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  role="tab"
                  aria-selected={isActive}
                  type="button"
                  onClick={() => {
                    setActiveCategory(category);
                    setLightboxIndex(null);
                  }}
                  className={`py-2 px-4 text-[11px] font-mono-tabular tracking-[0.2em] uppercase transition-colors duration-200 whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-[#F4F1EA] text-[#080808] font-medium'
                      : 'border border-[#F4F1EA]/12 text-[#A39E93] hover:text-[#F4F1EA] hover:border-[#F4F1EA]/30'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Irregular Editorial Compositions Grid */}
        <div className="pt-16 md:pt-24 grid grid-cols-1 lg:grid-cols-12 gap-y-20 lg:gap-x-12 items-start">
          {filteredItems.map((item, idx) => {
            const layout = getEditorialLayoutClasses(idx, item.aspectClass);
            return (
              <motion.figure
                key={item.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-8% 0px' }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className={`${layout.col} group cursor-pointer`}
                onClick={() => openLightbox(item)}
                data-cursor="project"
                data-cursor-label="VIEW PHOTO"
              >
                <div
                  className={`relative w-full ${layout.aspect} overflow-hidden border border-[#F4F1EA]/10 bg-[#111110]`}
                >
                  <CinematicImage
                    src={item.image}
                    alt={`${item.title} — ${item.projectRef}`}
                    objectPosition={item.objectPosition || 'center 25%'}
                    containerClassName="w-full h-full"
                    className="grayscale group-hover:grayscale-0 contrast-[1.06] group-hover:scale-[1.03] transition-all duration-700"
                  />
                </div>

                <figcaption className="mt-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pt-3 border-t border-[#F4F1EA]/10">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono-tabular text-[11px] tracking-[0.2em] text-[#6E6A63] uppercase">
                      {item.plateNumber}
                    </span>
                    <span className="text-sm font-medium text-[#F4F1EA] tracking-wide group-hover:text-[#D4C5A9] transition-colors">
                      {item.title}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-[#A39E93]">
                    <span className="font-mono-tabular text-[10px] tracking-[0.18em] text-[#6E6A63] uppercase">
                      {item.category}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="font-serif-editorial italic text-sm text-[#D4C5A9]">
                      {item.projectRef}
                    </span>
                  </div>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </div>

      {/* Minimal Fullscreen Lightbox with Keyboard & Mobile Swipe Support */}
      <AnimatePresence>
        {activeLightboxItem && lightboxIndex !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Lightbox view: ${activeLightboxItem.title}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onTouchStart={(e) => {
              touchStartX.current = e.touches[0].clientX;
            }}
            onTouchEnd={(e) => {
              if (touchStartX.current === null) return;
              const deltaX = e.changedTouches[0].clientX - touchStartX.current;
              if (deltaX > 50) prevImage();
              else if (deltaX < -50) nextImage();
              touchStartX.current = null;
            }}
            className="fixed inset-0 z-[90] bg-[#050505]/98 backdrop-blur-xl flex flex-col justify-between p-6 md:p-12"
          >
            {/* Lightbox Header */}
            <div className="flex items-center justify-between border-b border-[#F4F1EA]/10 pb-5">
              <div className="flex items-center gap-3 text-xs font-mono-tabular tracking-[0.22em] text-[#A39E93] uppercase">
                <span className="text-[#D4C5A9]">{activeLightboxItem.plateNumber}</span>
                <span aria-hidden="true">/</span>
                <span>{activeLightboxItem.category}</span>
                <span className="hidden sm:inline" aria-hidden="true">·</span>
                <span className="hidden sm:inline text-[#6E6A63]">
                  {lightboxIndex + 1} OF {filteredItems.length}
                </span>
              </div>

              <button
                type="button"
                onClick={closeLightbox}
                className="py-2 px-4 border border-[#F4F1EA]/20 hover:border-[#D4C5A9] text-xs font-mono-tabular tracking-[0.22em] text-[#F4F1EA] uppercase transition-colors whitespace-nowrap"
              >
                CLOSE [ESC]
              </button>
            </div>

            {/* Lightbox Center Image */}
            <div className="flex-1 my-6 flex items-center justify-center overflow-hidden relative">
              <motion.div
                key={activeLightboxItem.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-5xl w-full max-h-[72vh] aspect-[16/10] overflow-hidden border border-[#F4F1EA]/15 bg-[#080808]"
              >
                <CinematicImage
                  src={activeLightboxItem.image}
                  alt={activeLightboxItem.title}
                  objectPosition={activeLightboxItem.objectPosition || 'center center'}
                  containerClassName="w-full h-full"
                  className="contrast-[1.04]"
                />
              </motion.div>
            </div>

            {/* Lightbox Footer: Project Label & Prev/Next Controls */}
            <div className="pt-5 border-t border-[#F4F1EA]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-base md:text-lg font-medium text-[#F4F1EA] tracking-wide">
                  {activeLightboxItem.title}
                </div>
                <div className="text-xs text-[#A39E93] mt-0.5">
                  {activeLightboxItem.projectRef} — {activeLightboxItem.caption}
                </div>
              </div>

              <div className="flex items-center gap-4 self-end sm:self-center">
                <button
                  type="button"
                  onClick={prevImage}
                  aria-label="Previous image"
                  className="py-2 px-4 border border-[#F4F1EA]/15 hover:border-[#F4F1EA] text-xs font-mono-tabular tracking-[0.2em] text-[#A39E93] hover:text-[#F4F1EA] uppercase transition-colors whitespace-nowrap"
                >
                  ← PREV
                </button>
                <button
                  type="button"
                  onClick={nextImage}
                  aria-label="Next image"
                  className="py-2 px-4 border border-[#F4F1EA]/15 hover:border-[#F4F1EA] text-xs font-mono-tabular tracking-[0.2em] text-[#A39E93] hover:text-[#F4F1EA] uppercase transition-colors whitespace-nowrap"
                >
                  NEXT →
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
