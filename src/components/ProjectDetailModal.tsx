import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CinematicImage } from './CinematicImage';
import { FilmProject } from '../data/portfolioData';

interface ProjectDetailModalProps {
  project: FilmProject | null;
  onClose: () => void;
  onNextProject: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onNextProject,
}) => {
  const [playInlineVideo, setPlayInlineVideo] = useState(false);

  useEffect(() => {
    setPlayInlineVideo(false);
  }, [project?.id]);

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNextProject();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose, onNextProject]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[70] bg-[#080808]/96 backdrop-blur-xl overflow-y-auto"
        >
          <div className="min-h-screen max-w-[1440px] mx-auto px-6 md:px-12 py-10 md:py-16 flex flex-col justify-between">
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-8 border-b border-[#F4F1EA]/10">
              <div className="flex items-center gap-4">
                <span className="font-mono-tabular text-xs tracking-[0.24em] text-[#D4C5A9] uppercase">
                  {project.index}
                </span>
                <span className="text-[#6E6A63]" aria-hidden="true">·</span>
                <span className="text-xs tracking-[0.2em] text-[#A39E93] uppercase">
                  {project.type}
                </span>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center gap-2 py-2 px-4 text-xs font-mono-tabular tracking-[0.22em] text-[#F4F1EA] hover:text-[#D4C5A9] border border-[#F4F1EA]/15 hover:border-[#D4C5A9]/50 transition-colors uppercase whitespace-nowrap"
              >
                <span>CLOSE</span>
                <span className="text-[#6E6A63]">[ESC]</span>
              </button>
            </div>

            {/* Center Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 my-12 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.97, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: 10 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-7"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden border border-[#F4F1EA]/15 bg-[#050505]">
                  {project.youtubeId && playInlineVideo ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                      title={`${project.title} — Official Film`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  ) : (
                    <>
                      <CinematicImage
                        src={project.image}
                        alt={`${project.title} — ${project.type}`}
                        objectPosition={project.objectPosition || 'center center'}
                        containerClassName="w-full h-full"
                        className="grayscale hover:grayscale-0 contrast-[1.06] transition-all duration-700"
                      />
                      {project.youtubeId && (
                        <button
                          type="button"
                          onClick={() => setPlayInlineVideo(true)}
                          className="absolute inset-0 flex items-center justify-center bg-[#080808]/40 hover:bg-[#080808]/25 transition-colors group"
                        >
                          <span className="py-3.5 px-7 bg-[#F4F1EA] text-[#080808] group-hover:bg-[#D4C5A9] transition-colors text-xs font-medium tracking-[0.22em] uppercase">
                            PLAY FILM
                          </span>
                        </button>
                      )}
                    </>
                  )}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="lg:col-span-5 space-y-8"
              >
                <div>
                  <div className="text-xs tracking-[0.24em] text-[#D4C5A9] uppercase mb-2">
                    {project.type}
                  </div>
                  <div className="flex items-baseline gap-4">
                    <h2
                      id="modal-project-title"
                      className="text-4xl sm:text-5xl md:text-6xl font-light tracking-[-0.02em] text-[#F4F1EA] uppercase"
                    >
                      {project.title}
                    </h2>
                    {project.nepaliTitle && (
                      <span className="font-serif-editorial text-2xl sm:text-3xl text-[#A39E93]">
                        {project.nepaliTitle}
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F4F1EA]/10">
                  <div className="text-[11px] font-mono-tabular tracking-[0.2em] text-[#6E6A63] uppercase mb-1">
                    ROLE
                  </div>
                  <div className="font-serif-editorial italic text-2xl text-[#E6E2D8]">
                    {project.role}
                  </div>
                </div>

                <p className="text-sm md:text-base text-[#A39E93] leading-[1.75] font-light">
                  {project.editorialNote}
                </p>

                {/* Verified Credits Table */}
                <div className="space-y-3 pt-4 border-t border-[#F4F1EA]/10">
                  {project.credits.map((credit) => (
                    <div
                      key={credit.label}
                      className="flex items-baseline justify-between text-xs py-1.5 border-b border-[#F4F1EA]/[0.06]"
                    >
                      <span className="font-mono-tabular tracking-[0.18em] text-[#6E6A63] uppercase">
                        {credit.label}
                      </span>
                      <span className="text-[#F4F1EA] font-normal">
                        {credit.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  {project.youtubeId && !playInlineVideo && (
                    <button
                      type="button"
                      onClick={() => setPlayInlineVideo(true)}
                      className="inline-flex items-center gap-3 py-3 px-6 bg-[#F4F1EA] text-[#080808] hover:bg-[#D4C5A9] transition-colors text-xs font-medium tracking-[0.2em] uppercase whitespace-nowrap"
                    >
                      <span>WATCH IN SCREENING ROOM</span>
                    </button>
                  )}

                  {project.externalLink && (
                    <a
                      href={project.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 py-3 px-6 border border-[#F4F1EA]/25 text-[#F4F1EA] hover:border-[#D4C5A9] hover:text-[#D4C5A9] transition-colors text-xs font-medium tracking-[0.2em] uppercase whitespace-nowrap"
                    >
                      <span>{project.externalLinkLabel || 'WATCH ON YOUTUBE'}</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Bottom Navigation */}
            <div className="pt-6 border-t border-[#F4F1EA]/10 flex items-center justify-between text-xs font-mono-tabular tracking-[0.2em] text-[#A39E93] uppercase">
              <span>SANTOSH BISTA — FILMOGRAPHY</span>
              <button
                type="button"
                onClick={onNextProject}
                className="hover:text-[#F4F1EA] transition-colors py-1 inline-flex items-center gap-2 whitespace-nowrap"
              >
                <span>NEXT PROJECT</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
