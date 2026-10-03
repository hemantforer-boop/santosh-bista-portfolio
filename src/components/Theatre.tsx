import React from 'react';
import { motion } from 'motion/react';
import { CinematicImage } from './CinematicImage';
import { THEATRE_PRODUCTIONS, OFFICIAL_ASSETS } from '../data/portfolioData';

export const Theatre: React.FC = () => {
  const manishFeature = THEATRE_PRODUCTIONS[0];

  return (
    <section
      id="theatre"
      aria-labelledby="theatre-heading"
      className="relative bg-[#060606] border-b border-[#F4F1EA]/[0.07] overflow-hidden"
    >
      {/* Subtle overhead stage light radial ambiance */}
      <div
        className="pointer-events-none absolute inset-0 stage-spotlight"
        aria-hidden="true"
      />

      {/* PART 1 (SECTION 8): ON STAGE — BACKSTAGE & VERTICAL THEATRE TIMELINE */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 pt-28 md:pt-44 pb-20 md:pb-32">
        {/* Stage Curtain Opening Header */}
        <div className="flex flex-col items-center text-center pb-20 md:pb-28 border-b border-[#F4F1EA]/10">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-mono-tabular text-xs tracking-[0.3em] text-[#D4C5A9] uppercase mb-5"
          >
             THEATRE
          </motion.span>

          <div className="overflow-hidden">
            <motion.h2
              id="theatre-heading"
              initial={{ opacity: 0, y: 40, letterSpacing: '0.08em' }}
              whileInView={{ opacity: 1, y: 0, letterSpacing: '-0.02em' }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif-editorial text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal text-[#F4F1EA] uppercase"
            >
              ON STAGE
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.25 }}
            className="mt-6 font-serif-editorial italic text-xl md:text-2xl text-[#A39E93] max-w-xl"
          >
            Directing and performing in theatrical productions across Nepal.
          </motion.p>
        </div>

        {/* Vertical Theatre Timeline */}
        <div className="relative pt-16 md:pt-24">
          {/* Central subtle vertical stage rigging line on desktop */}
          <div
            className="hidden lg:block absolute left-1/2 top-16 bottom-16 w-[1px] bg-gradient-to-b from-[#D4C5A9]/30 via-[#F4F1EA]/10 to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-28 md:space-y-40">
            {THEATRE_PRODUCTIONS.map((prod, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={prod.id} className="space-y-12">
                  <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                    {/* Image Column */}
                    <motion.div
                      initial={{ opacity: 0, y: 36 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-12% 0px' }}
                      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                      className={`lg:col-span-6 ${
                        isEven ? 'lg:order-1 lg:pr-8' : 'lg:order-2 lg:pl-8'
                      }`}
                    >
                      <div className="relative aspect-[4/5] max-w-lg mx-auto w-full overflow-hidden border border-[#F4F1EA]/12 bg-[#0E0E0D]">
                        <CinematicImage
                          src={prod.image}
                          fallbackSrc={prod.fallbackExternalUrl}
                          alt={`${prod.title} — ${prod.role}`}
                          objectPosition={prod.objectPosition || 'center center'}
                          containerClassName="w-full h-full"
                          className="grayscale hover:grayscale-0 contrast-[1.08] hover:scale-[1.03] transition-all duration-700"
                        />
                        <div
                          className="absolute inset-0 bg-gradient-to-t from-[#060606]/65 via-transparent to-transparent pointer-events-none"
                          aria-hidden="true"
                        />
                      </div>
                    </motion.div>

                    {/* Typography & Role Column */}
                    <div
                      className={`lg:col-span-6 space-y-6 ${
                        isEven ? 'lg:order-2 lg:pl-8' : 'lg:order-1 lg:pr-8 lg:text-right'
                      }`}
                    >
                      {/* Step 1: Venue / Year Label */}
                      <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-10% 0px' }}
                        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        className={`flex flex-wrap items-center gap-3 text-xs font-mono-tabular tracking-[0.22em] text-[#A39E93] uppercase ${
                          isEven ? 'justify-start' : 'lg:justify-end'
                        }`}
                      >
                        <span>{prod.index}</span>
                        {prod.venue && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span className="text-[#D4C5A9]">{prod.venue}</span>
                          </>
                        )}
                        {prod.year && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span className="text-[#D4C5A9]">{prod.year}</span>
                          </>
                        )}
                      </motion.div>

                      {/* Step 2: Production Title */}
                      <motion.h3
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-10% 0px' }}
                        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
                        className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-[#F4F1EA] tracking-tight leading-[1.05] uppercase text-balance"
                      >
                        {prod.title}
                      </motion.h3>

                      {/* Step 3: Role */}
                      <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-10% 0px' }}
                        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.26 }}
                        className="pt-2"
                      >
                        <span className="text-xs font-mono-tabular tracking-[0.22em] text-[#6E6A63] uppercase block mb-1">
                          ROLE
                        </span>
                        <span className="font-serif-editorial italic text-2xl md:text-3xl text-[#D4C5A9]">
                          {prod.role}
                        </span>
                      </motion.div>

                      {/* Step 4: Factual Production Note */}
                      <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-10% 0px' }}
                        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.34 }}
                        className={`text-sm md:text-base text-[#A39E93] leading-[1.75] font-light max-w-lg ${
                          isEven ? '' : 'lg:ml-auto'
                        }`}
                      >
                        {prod.editorialNote}
                      </motion.p>

                      {/* Optional Official Stage Video / Reel Link */}
                      {prod.videoLink && (
                        <motion.div
                          initial={{ opacity: 0, y: 14 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: '-10% 0px' }}
                          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                          className={`pt-2 flex ${isEven ? 'justify-start' : 'lg:justify-end'}`}
                        >
                          <a
                            href={prod.videoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 py-3 px-6 border border-[#D4C5A9]/40 text-[#F4F1EA] hover:bg-[#D4C5A9] hover:text-[#080808] transition-colors text-xs font-mono-tabular tracking-[0.2em] uppercase whitespace-nowrap"
                          >
                            <span>{prod.videoLinkLabel || 'WATCH STAGE REEL'}</span>
                            <span aria-hidden="true">↗</span>
                          </a>
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Additional Stage Act Photographs (e.g., Mandavi 3-Act Stage Study) */}
                  {prod.additionalImages && prod.additionalImages.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-10% 0px' }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                      {prod.additionalImages.map((actImg, actIdx) => (
                        <div
                          key={`${prod.id}-act-${actIdx}`}
                          className="group relative aspect-[4/3] overflow-hidden border border-[#F4F1EA]/12 bg-[#0E0E0D]"
                        >
                          <CinematicImage
                            src={actImg}
                            alt={`${prod.title} (${prod.year || ''}) — Stage Act 0${actIdx + 1}`}
                            objectPosition="center 22%"
                            containerClassName="w-full h-full"
                            className="grayscale hover:grayscale-0 contrast-[1.06] group-hover:scale-[1.03] transition-all duration-700"
                          />
                          <div className="absolute bottom-3 left-4 font-mono-tabular text-[10px] tracking-[0.22em] text-[#E6E2D8]/80 uppercase bg-[#060606]/70 px-2.5 py-1">
                            {prod.title} · SCENE 0{actIdx + 1}
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* PART 2 (SECTION 9): MANISH HARAYEKO SUCHANA — SPECIAL EDITORIAL FEATURE */}
      <div className="relative z-10 border-t border-[#F4F1EA]/10 bg-[#0A0A09] py-28 md:py-40">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          {/* Top Editorial Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-10 border-b border-[#F4F1EA]/10">
            <div className="flex items-center gap-3 text-xs font-mono-tabular tracking-[0.24em] text-[#D4C5A9] uppercase">
              <span>FEATURED STAGE PRODUCTION</span>
              <span aria-hidden="true">·</span>
              <span>DIRECTOR &amp; ACTOR</span>
            </div>

            <div className="text-xs font-mono-tabular tracking-[0.22em] text-[#A39E93] uppercase">
              MANDALA THEATRE NEPAL
            </div>
          </div>

          {/* Large Stage Feature Spread: Poster + Production Visual + Live Stage Still */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {/* Visual 1: Official Promotional Poster */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden border border-[#F4F1EA]/15 bg-[#080808] aspect-[4/5] sm:aspect-square md:aspect-[4/5]"
            >
              <CinematicImage
                src={manishFeature.image}
                fallbackSrc={manishFeature.fallbackExternalUrl}
                alt="MANISH HARAYEKO SUCHANA — Official Promotional Poster — Mandala Theatre Nepal"
                objectPosition="center center"
                containerClassName="w-full h-full"
                className="grayscale hover:grayscale-0 contrast-[1.06] hover:scale-[1.03] transition-all duration-700"
              />
              <div
                className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#080808]/90 via-[#080808]/40 to-transparent pointer-events-none"
                aria-hidden="true"
              >
                <span className="font-mono-tabular text-[10px] tracking-[0.24em] text-[#D4C5A9] uppercase">
                  01
                </span>
              </div>
            </motion.div>

            {/* Visual 2: Mandala Theatre Production Visual (New Image) */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="relative overflow-hidden border border-[#F4F1EA]/15 bg-[#080808] aspect-[4/5] sm:aspect-square md:aspect-[4/5]"
            >
              <CinematicImage
                src={OFFICIAL_ASSETS.manishProduction}
                fallbackSrc={OFFICIAL_ASSETS.manishProductionRemote}
                alt="MANISH HARAYEKO SUCHANA — Mandala Theatre Nepal Production Visual"
                objectPosition="center center"
                containerClassName="w-full h-full"
                className="grayscale hover:grayscale-0 contrast-[1.06] hover:scale-[1.03] transition-all duration-700"
              />
              <div
                className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#080808]/90 via-[#080808]/40 to-transparent pointer-events-none"
                aria-hidden="true"
              >
                <span className="font-mono-tabular text-[10px] tracking-[0.24em] text-[#D4C5A9] uppercase">
                  02
                </span>
              </div>
            </motion.div>

            {/* Visual 3: Live Stage Production Still */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="relative overflow-hidden border border-[#F4F1EA]/15 bg-[#080808] aspect-[4/5] sm:aspect-square md:aspect-[4/5]"
            >
              <CinematicImage
                src={OFFICIAL_ASSETS.manishStage1}
                fallbackSrc={manishFeature.fallbackExternalUrl}
                alt="MANISH HARAYEKO SUCHANA — Live Stage Production at Mandala Theatre Nepal"
                objectPosition="center center"
                containerClassName="w-full h-full"
                className="grayscale hover:grayscale-0 contrast-[1.08] hover:scale-[1.03] transition-all duration-700"
              />
              <div
                className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#080808]/90 via-[#080808]/40 to-transparent pointer-events-none"
                aria-hidden="true"
              >
                <span className="font-mono-tabular text-[10px] tracking-[0.24em] text-[#D4C5A9] uppercase">
                  03 
                </span>
              </div>
            </motion.div>
          </div>

          {/* Editorial Feature Typography Spread */}
          <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8 space-y-4">
              <div className="text-xs font-mono-tabular tracking-[0.28em] text-[#D4C5A9] uppercase">
                DIRECTOR / ACTOR
              </div>
              <h3 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-[-0.02em] leading-[0.94] text-[#F4F1EA] uppercase">
                <span className="block">MANISH HARAYEKO</span>
                <span className="block text-[#D4C5A9] italic">SUCHANA</span>
              </h3>
              <div className="pt-3 text-xs sm:text-sm font-mono-tabular tracking-[0.26em] text-[#E6E2D8] uppercase">
                MANDALA THEATRE NEPAL
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6 border-t lg:border-t-0 lg:border-l border-[#F4F1EA]/15 pt-6 lg:pt-0 lg:pl-10">
              <p className="text-sm md:text-base text-[#A39E93] leading-[1.75] font-light">
                Presented at Mandala Theatre Nepal, <em className="text-[#F4F1EA] not-italic">Manish Harayeko Suchana</em> is a theatrical production in which Santosh Bista served simultaneously as Director and Actor.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#F4F1EA]/10 text-xs">
                <div>
                  <span className="font-mono-tabular text-[10px] tracking-[0.2em] text-[#6E6A63] uppercase block">
                    ROLE
                  </span>
                  <span className="text-[#F4F1EA] mt-1 block">
                    Director &amp; Actor
                  </span>
                </div>
                <div>
                  <span className="font-mono-tabular text-[10px] tracking-[0.2em] text-[#6E6A63] uppercase block">
                    VENUE
                  </span>
                  <span className="text-[#F4F1EA] mt-1 block">
                    Mandala Theatre Nepal
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
