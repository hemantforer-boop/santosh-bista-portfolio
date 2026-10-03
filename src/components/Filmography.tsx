import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CinematicImage } from './CinematicImage';
import { FILM_PROJECTS, FilmProject, OFFICIAL_ASSETS } from '../data/portfolioData';
import { ProjectDetailModal } from './ProjectDetailModal';

export const Filmography: React.FC = () => {
  const [activeHoverId, setActiveHoverId] = useState<string>(FILM_PROJECTS[0].id);
  const [selectedProject, setSelectedProject] = useState<FilmProject | null>(null);
  const [playingChoroInline, setPlayingChoroInline] = useState(false);
  const [playingKothaInline, setPlayingKothaInline] = useState(false);
  const [playingMankoBhasaInline, setPlayingMankoBhasaInline] = useState(false);

  // Interactive 3D tilt state for the 12+ Short Films Poster
  const [posterTilt, setPosterTilt] = useState({ x: 0, y: 0 });
  const posterRef = useRef<HTMLDivElement>(null);

  const activeProject =
    FILM_PROJECTS.find((p) => p.id === activeHoverId) || FILM_PROJECTS[0];

  const choroProject = FILM_PROJECTS[0];
  const kothaProject = FILM_PROJECTS[1];
  const mankoBhasaProject = FILM_PROJECTS[2];
  const shortFilmsProject = FILM_PROJECTS[3];

  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = FILM_PROJECTS.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % FILM_PROJECTS.length;
    setSelectedProject(FILM_PROJECTS[nextIndex]);
  };

  const handlePosterMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!posterRef.current) return;
    const rect = posterRef.current.getBoundingClientRect();
    const normX = (e.clientX - rect.left) / rect.width - 0.5;
    const normY = (e.clientY - rect.top) / rect.height - 0.5;
    setPosterTilt({
      x: normY * -12,
      y: normX * 14,
    });
  };

  const handlePosterMouseLeave = () => {
    setPosterTilt({ x: 0, y: 0 });
  };

  return (
    <>
      {/* SECTION 7: FILMOGRAPHY — EDITORIAL PROJECT LIST */}
      <section
        id="work"
        aria-labelledby="filmography-heading"
        className="relative py-28 md:py-40 bg-[#080808] border-b border-[#F4F1EA]/[0.07]"
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 md:pb-16 border-b border-[#F4F1EA]/10 gap-4">
            <div>
              <span className="font-mono-tabular text-xs tracking-[0.24em] text-[#6E6A63] uppercase block mb-3">
                 SELECTED FILMOGRAPHY
              </span>
              <h2
                id="filmography-heading"
                className="text-3xl sm:text-5xl md:text-6xl font-light tracking-[-0.02em] text-[#F4F1EA] uppercase"
              >
                WORK
              </h2>
            </div>
            <p className="text-xs tracking-[0.2em] text-[#A39E93] uppercase">
              Musical Films · Music Videos · 12+ Short Films
            </p>
          </div>

          {/* Interactive Editorial Index + Active Preview Stage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12 md:pt-16 items-start">
            {/* Left 7 Cols: Editorial Project List */}
            <div className="lg:col-span-7 divide-y divide-[#F4F1EA]/10 border-b border-[#F4F1EA]/10">
              {FILM_PROJECTS.map((project) => {
                const isHovered = activeHoverId === project.id;
                return (
                  <div
                    key={project.id}
                    onMouseEnter={() => setActiveHoverId(project.id)}
                    onFocus={() => setActiveHoverId(project.id)}
                    className="group relative py-8 md:py-10 transition-colors duration-300"
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      data-cursor="project"
                      data-cursor-label="VIEW PROJECT"
                      className="w-full text-left flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 focus:outline-none"
                    >
                      <div className="flex items-baseline gap-5 md:gap-8">
                        <span
                          className={`font-mono-tabular text-xs transition-colors duration-300 ${
                            isHovered ? 'text-[#D4C5A9]' : 'text-[#6E6A63]'
                          }`}
                        >
                          {project.index}
                        </span>
                        <div>
                          <div className="flex items-baseline gap-3">
                            <h3
                              className={`text-2xl sm:text-4xl md:text-[42px] font-light tracking-[-0.02em] uppercase transition-all duration-300 ${
                                isHovered
                                  ? 'text-[#F4F1EA] translate-x-2'
                                  : 'text-[#A39E93] group-hover:text-[#F4F1EA]'
                              }`}
                            >
                              {project.title}
                            </h3>
                            {project.nepaliTitle && (
                              <span className="font-serif-editorial text-xl text-[#6E6A63] group-hover:text-[#A39E93] transition-colors">
                                {project.nepaliTitle}
                              </span>
                            )}
                          </div>
                          <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-[#6E6A63]">
                            <span className="uppercase tracking-[0.18em] text-[#A39E93]">
                              {project.type}
                            </span>
                            <span aria-hidden="true">·</span>
                            <span className="font-serif-editorial italic text-base text-[#D4C5A9]">
                              Role: {project.role}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 self-end sm:self-center">
                        <span className="font-mono-tabular text-[11px] tracking-[0.2em] text-[#6E6A63] group-hover:text-[#F4F1EA] uppercase transition-colors whitespace-nowrap">
                          {project.youtubeId ? 'WATCH / DETAILS' : '3D POSTER / DETAILS'}
                        </span>
                        <span
                          aria-hidden="true"
                          className="text-sm text-[#6E6A63] group-hover:text-[#D4C5A9] group-hover:translate-x-1 transition-all duration-300"
                        >
                          →
                        </span>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Right 5 Cols: Sticky Cinematic Preview Stage */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div
                onClick={() => setSelectedProject(activeProject)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedProject(activeProject);
                  }
                }}
                data-cursor="project"
                data-cursor-label="VIEW PROJECT"
                className="group cursor-pointer block"
              >
                <div className="relative aspect-[4/5] sm:aspect-[16/11] w-full overflow-hidden bg-[#111110] border border-[#F4F1EA]/10">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeProject.id}
                      initial={{ opacity: 0, scale: 1.03 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full h-full"
                    >
                      <CinematicImage
                        src={activeProject.image}
                        fallbackSrc={activeProject.fallbackExternalUrl}
                        alt={`${activeProject.title} — ${activeProject.role}`}
                        objectPosition={activeProject.objectPosition}
                        containerClassName="w-full h-full"
                        className="grayscale group-hover:grayscale-0 contrast-[1.06] group-hover:scale-[1.03] transition-all duration-700"
                      />
                    </motion.div>
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/85 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                    <div>
                      <span className="font-mono-tabular text-[10px] tracking-[0.22em] text-[#D4C5A9] uppercase block">
                        {activeProject.type}
                      </span>
                      <span className="text-lg font-medium tracking-wide text-[#F4F1EA] uppercase">
                        {activeProject.title}
                      </span>
                    </div>
                    <span className="font-mono-tabular text-[10px] tracking-[0.2em] text-[#A39E93] uppercase">
                      {activeProject.youtubeId ? 'WATCH FILM →' : 'VIEW →'}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-xs text-[#A39E93] leading-relaxed font-light">
                  {activeProject.editorialNote}
                </p>
              </div>
            </div>
          </div>

          {/* 3D SCULPTED POSTER MONUMENT: 12+ SHORT FILMS FEATURING SANTOSH BISTA */}
          <div className="mt-24 md:mt-32 pt-16 border-t border-[#F4F1EA]/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left 5 Cols: Interactive 3D Poster */}
              <div
                ref={posterRef}
                onMouseMove={handlePosterMouseMove}
                onMouseLeave={handlePosterMouseLeave}
                onClick={() => setSelectedProject(shortFilmsProject)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedProject(shortFilmsProject);
                  }
                }}
                data-cursor="project"
                data-cursor-label="12+ SHORT FILMS"
                className="lg:col-span-5 flex justify-center cursor-pointer"
                style={{ perspective: '1300px' }}
              >
                <div
                  style={{
                    transform: `rotateX(${posterTilt.x}deg) rotateY(${posterTilt.y}deg)`,
                    transformStyle: 'preserve-3d',
                  }}
                  className="relative w-full max-w-[440px] aspect-square transition-transform duration-300 ease-out"
                >
                  {/* 3D Back Shadow Plate with Subtle Studio Grid */}
                  <div
                    className="absolute inset-4 bg-[#0C0C0B] border border-[#F4F1EA]/15 shadow-2xl"
                    style={{
                      transform: 'translateZ(-36px) rotateZ(-1.5deg)',
                      backgroundImage:
                        'radial-gradient(rgba(212,197,169,0.12) 1px, transparent 1px)',
                      backgroundSize: '18px 18px',
                    }}
                    aria-hidden="true"
                  />

                  {/* Warm Rim Aura Behind Transparent Cutout */}
                  <div
                    className="absolute inset-4 rounded-full opacity-70 blur-2xl"
                    style={{
                      background:
                        'radial-gradient(circle at 50% 40%, rgba(212, 197, 169, 0.36), rgba(212, 197, 169, 0.08) 55%, transparent 74%)',
                      transform: 'translateZ(-14px)',
                    }}
                    aria-hidden="true"
                  />

                  {/* Subtle 3D Halo Ring Behind Cutout */}
                  <div
                    className="pointer-events-none absolute inset-8 rounded-full border border-[#D4C5A9]/25"
                    style={{ transform: 'translateZ(-6px)' }}
                    aria-hidden="true"
                  />

                  {/* Main Background-Removed 3D Cutout Layer */}
                  <div
                    className="relative w-full h-full flex items-end justify-center overflow-visible"
                    style={{ transform: 'translateZ(36px)' }}
                  >
                    <img
                      src={OFFICIAL_ASSETS.santosh3DModel}
                      alt="Santosh Bista — 12+ Short Films Career 3D Model"
                      style={{
                        filter:
                          'drop-shadow(0 26px 34px rgba(0, 0, 0, 0.95)) drop-shadow(0 0 22px rgba(212, 197, 169, 0.18)) contrast(1.08)',
                      }}
                      className="w-full h-full object-contain object-bottom grayscale hover:grayscale-0 scale-[1.03] hover:scale-[1.06] transition-all duration-700 select-none"
                    />
                    <div
                      className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#080808] via-[#080808]/65 to-transparent pointer-events-none"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Outer 3D Wireframe Border (No Text Over Photo) */}
                  <div
                    className="pointer-events-none absolute -inset-2 border border-[#D4C5A9]/30"
                    style={{ transform: 'translateZ(50px)' }}
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Right 7 Cols: Editorial Context for 12+ Short Films */}
              <div className="lg:col-span-7 space-y-6">
                <span className="font-mono-tabular text-xs tracking-[0.26em] text-[#D4C5A9] uppercase block">
                  CAREER MILESTONE · INDEPENDENT &amp; ACADEMIC CINEMA
                </span>
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-[-0.02em] text-[#F4F1EA] uppercase leading-[1.05]">
                  12+ SHORT FILMS
                </h3>
                <p className="font-serif-editorial italic text-2xl text-[#E6E2D8] leading-snug max-w-xl">
                  A sustained body of screen performances across narrative short films, musical cinema, and independent productions.
                </p>
                <p className="text-base text-[#A39E93] leading-[1.75] font-light max-w-[60ch]">
                  Documented in his curriculum vitae, Santosh Bista has acted in more than 12 short films alongside his work in musical films (<em className="text-[#F4F1EA] not-italic">Chhoro</em>, <em className="text-[#F4F1EA] not-italic">Kotha</em>), music videos (<em className="text-[#F4F1EA] not-italic">Manko Bhasa</em>), and stage productions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: CHHORO FEATURE — FILM POSTER / EDITORIAL SPREAD */}
      <section
        aria-labelledby="choro-feature-heading"
        className="relative py-28 md:py-36 bg-[#0B0B0A] border-b border-[#F4F1EA]/[0.07]"
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="mb-8 flex items-center justify-between text-[11px] font-mono-tabular tracking-[0.24em] text-[#6E6A63] uppercase">
            <span>MUSICAL FILM FEATURE</span>
            <span>EMRIC STUDIOS &amp; ART GHAR</span>
          </div>

          <div className="relative w-full overflow-hidden border border-[#F4F1EA]/15 bg-[#080808]">
            <div className="aspect-[16/9] w-full relative">
              {playingChoroInline && choroProject.youtubeId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${choroProject.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                  title="CHHORO — Official Musical Film"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              ) : (
                <>
                  <CinematicImage
                    src={choroProject.image}
                    alt="CHHORO (छोरो) — Musical Film — Son (Lead Character)"
                    objectPosition="center 25%"
                    containerClassName="w-full h-full"
                    className="grayscale hover:grayscale-0 contrast-[1.08] brightness-[0.86] transition-all duration-700"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent pointer-events-none"
                    aria-hidden="true"
                  />
                </>
              )}
            </div>

            {/* Minimal Film Poster Overlay */}
            <div
              className={`p-6 sm:p-10 md:p-14 flex flex-col md:flex-row md:items-end justify-between gap-8 bg-[#080808] ${
                playingChoroInline
                  ? 'border-t border-[#F4F1EA]/10'
                  : 'md:bg-transparent md:absolute md:inset-x-0 md:bottom-0'
              }`}
            >
              <div className="space-y-3">
                <div className="text-xs font-medium tracking-[0.28em] text-[#D4C5A9] uppercase">
                  MUSICAL FILM
                </div>
                <div className="flex items-baseline gap-4">
                  <h3
                    id="choro-feature-heading"
                    className="text-5xl sm:text-7xl md:text-8xl font-semibold tracking-[-0.03em] leading-none text-[#F4F1EA] uppercase"
                  >
                    CHHORO
                  </h3>
                  <span className="font-serif-editorial text-3xl sm:text-4xl text-[#D4C5A9]">
                    छोरो
                  </span>
                </div>
                <div className="pt-2 flex flex-wrap items-center gap-3 text-xs tracking-[0.22em] text-[#E6E2D8] uppercase">
                  <span className="text-[#A39E93]">ROLE:</span>
                  <span>SON — LEAD CHARACTER</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setPlayingChoroInline((prev) => !prev)}
                  className="py-3.5 px-7 bg-[#F4F1EA] text-[#080808] hover:bg-[#D4C5A9] transition-colors text-xs font-medium tracking-[0.22em] uppercase whitespace-nowrap"
                >
                  {playingChoroInline ? 'CLOSE PLAYER' : 'WATCH FILM'}
                </button>
                {choroProject.externalLink && (
                  <a
                    href={choroProject.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3.5 px-7 border border-[#F4F1EA]/30 text-[#F4F1EA] hover:border-[#F4F1EA] transition-colors text-xs font-medium tracking-[0.22em] uppercase whitespace-nowrap"
                  >
                    YOUTUBE ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTIONS 11 & 12: KOTHA & MANKO BHASA — MINIMAL EDITORIAL DIPTYCH */}
      <section
        aria-label="Kotha and Manko Bhasa Screen Features"
        className="relative py-24 md:py-36 bg-[#080808] border-b border-[#F4F1EA]/[0.07]"
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {/* SECTION 11: KOTHA */}
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col justify-between border-t border-[#F4F1EA]/15 pt-8"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono-tabular tracking-[0.22em] text-[#6E6A63] uppercase mb-6">
                  <span>MUSICAL FILM</span>
                  <span>ROLE: APPEARANCE</span>
                </div>

                <div className="relative aspect-[16/9] w-full overflow-hidden border border-[#F4F1EA]/10 mb-8 bg-[#050505]">
                  {playingKothaInline && kothaProject.youtubeId ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${kothaProject.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                      title="KOTHA — Official Musical Film"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  ) : (
                    <div
                      onClick={() => setPlayingKothaInline(true)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setPlayingKothaInline(true);
                        }
                      }}
                      data-cursor="project"
                      data-cursor-label="WATCH KOTHA"
                      className="w-full h-full cursor-pointer relative"
                    >
                      <CinematicImage
                        src={kothaProject.image}
                        fallbackSrc={kothaProject.fallbackExternalUrl}
                        alt="KOTHA (कोठा) — Musical Film — Role: Appearance"
                        objectPosition="center center"
                        containerClassName="w-full h-full"
                        className="grayscale group-hover:grayscale-0 contrast-[1.06] group-hover:scale-[1.03] transition-all duration-700"
                      />
                    </div>
                  )}
                </div>

                <div className="flex items-baseline justify-between gap-4">
                  <div className="flex items-baseline gap-3">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-[-0.02em] text-[#F4F1EA] uppercase group-hover:text-[#D4C5A9] transition-colors">
                      KOTHA
                    </h3>
                    <span className="font-serif-editorial text-2xl text-[#6E6A63]">
                      कोठा
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => setPlayingKothaInline((prev) => !prev)}
                      className="font-mono-tabular text-xs tracking-[0.2em] text-[#D4C5A9] hover:text-[#F4F1EA] uppercase transition-colors whitespace-nowrap"
                    >
                      {playingKothaInline ? 'CLOSE' : 'WATCH FILM'}
                    </button>
                    {kothaProject.externalLink && (
                      <a
                        href={kothaProject.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono-tabular text-xs tracking-[0.2em] text-[#A39E93] hover:text-[#F4F1EA] uppercase transition-colors whitespace-nowrap"
                      >
                        YOUTUBE ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>

            {/* SECTION 12: MANKO BHASA */}
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
              className="group flex flex-col justify-between border-t border-[#F4F1EA]/15 pt-8"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono-tabular tracking-[0.22em] text-[#6E6A63] uppercase mb-6">
                  <span>MUSIC VIDEO</span>
                  <span>ROLE: ACTOR</span>
                </div>

                <div className="relative aspect-[16/9] w-full overflow-hidden border border-[#F4F1EA]/10 mb-8 bg-[#050505]">
                  {playingMankoBhasaInline && mankoBhasaProject.youtubeId ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${mankoBhasaProject.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                      title="MANKO BHASA — Official Music Video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  ) : (
                    <div
                      onClick={() => setPlayingMankoBhasaInline(true)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setPlayingMankoBhasaInline(true);
                        }
                      }}
                      data-cursor="project"
                      data-cursor-label="WATCH VIDEO"
                      className="w-full h-full cursor-pointer relative"
                    >
                      <CinematicImage
                        src={mankoBhasaProject.image}
                        fallbackSrc={mankoBhasaProject.fallbackExternalUrl}
                        alt="MANKO BHASA — Music Video — Role: Actor"
                        objectPosition={mankoBhasaProject.objectPosition || 'center center'}
                        containerClassName="w-full h-full"
                        className="grayscale group-hover:grayscale-0 contrast-[1.06] group-hover:scale-[1.03] transition-all duration-700"
                      />
                    </div>
                  )}
                </div>

                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-[-0.02em] text-[#F4F1EA] uppercase group-hover:text-[#D4C5A9] transition-colors">
                    MANKO BHASA
                  </h3>

                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => setPlayingMankoBhasaInline((prev) => !prev)}
                      className="font-mono-tabular text-xs tracking-[0.2em] text-[#D4C5A9] hover:text-[#F4F1EA] uppercase transition-colors whitespace-nowrap"
                    >
                      {playingMankoBhasaInline ? 'CLOSE' : 'WATCH VIDEO'}
                    </button>
                    {mankoBhasaProject.externalLink && (
                      <a
                        href={mankoBhasaProject.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono-tabular text-xs tracking-[0.2em] text-[#A39E93] hover:text-[#F4F1EA] uppercase transition-colors whitespace-nowrap"
                      >
                        YOUTUBE ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onNextProject={handleNextProject}
      />
    </>
  );
};
