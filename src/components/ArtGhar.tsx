import React from 'react';
import { motion } from 'motion/react';
import { CinematicImage } from './CinematicImage';
import { ART_GHAR_SOCIALS, OFFICIAL_ASSETS } from '../data/portfolioData';

export const ArtGhar: React.FC = () => {
  return (
    <section
      id="art-ghar"
      aria-labelledby="art-ghar-heading"
      className="relative py-28 md:py-44 bg-[#0B0B0A] border-b border-[#F4F1EA]/[0.07] overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Signature Visual Moment #4: Transition from ACTOR to CREATIVE LEADERSHIP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="pb-16 md:pb-24 border-b border-[#F4F1EA]/10"
        >
          <div className="font-mono-tabular text-xs tracking-[0.24em] text-[#6E6A63] uppercase mb-8">
            05 / CREATIVE LEADERSHIP
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-10">
            <span className="font-sans-neo text-2xl sm:text-4xl md:text-5xl font-light tracking-[-0.02em] text-[#6E6A63] uppercase">
              ACTOR
            </span>

            <div className="flex-1 hidden md:flex items-center px-4" aria-hidden="true">
              <div className="w-full h-[1px] bg-gradient-to-r from-[#6E6A63]/30 via-[#D4C5A9] to-[#F4F1EA]" />
            </div>

            <span className="font-serif-editorial italic text-3xl sm:text-5xl md:text-6xl text-[#F4F1EA] tracking-tight">
              CREATIVE LEADERSHIP
            </span>
          </div>
        </motion.div>

        {/* Main Art Ghar Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-16 md:pt-24 items-center">
          {/* Left 6 Cols: Editorial Identity & Ecosystem */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="space-y-3">
              <span className="text-xs font-mono-tabular tracking-[0.28em] text-[#D4C5A9] uppercase block">
                CREATIVE WORK BEYOND THE FRAME
              </span>
              <h2
                id="art-ghar-heading"
                className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-[-0.03em] text-[#F4F1EA] uppercase leading-none"
              >
                ART GHAR
              </h2>
            </div>

            <div className="inline-flex items-center gap-3 pt-2 border-t border-[#F4F1EA]/15">
              <span className="font-mono-tabular text-xs tracking-[0.2em] text-[#6E6A63] uppercase">
                ROLE:
              </span>
              <span className="font-serif-editorial italic text-2xl text-[#E6E2D8]">
                CEO &amp; Actor
              </span>
            </div>

            <p className="text-base md:text-lg text-[#A39E93] leading-[1.75] font-light max-w-[56ch]">
              Through Art Ghar, Santosh Bista’s work extends beyond acting into artistic leadership and production—developing musical films and collaborative visual storytelling.
            </p>

            {/* Official Art Ghar Social Ecosystem */}
            <div className="pt-6 border-t border-[#F4F1EA]/10 space-y-4">
              <div className="font-mono-tabular text-[11px] tracking-[0.24em] text-[#6E6A63] uppercase">
                OFFICIAL ART GHAR CHANNELS
              </div>

              <div className="divide-y divide-[#F4F1EA]/10 border-t border-b border-[#F4F1EA]/10">
                {ART_GHAR_SOCIALS.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group py-4 flex items-center justify-between text-sm hover:pl-2 transition-all duration-300"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-medium tracking-[0.18em] text-[#F4F1EA] uppercase group-hover:text-[#D4C5A9] transition-colors">
                        {platform.name}
                      </span>
                      <span className="font-mono-tabular text-xs text-[#6E6A63]">
                        {platform.handle}
                      </span>
                    </div>
                    <span className="font-mono-tabular text-xs tracking-[0.2em] text-[#A39E93] group-hover:text-[#F4F1EA] uppercase">
                      OPEN ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right 6 Cols: Art Ghar Production Still */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="lg:col-span-6"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden border border-[#F4F1EA]/15 bg-[#080808]">
              <CinematicImage
                src={OFFICIAL_ASSETS.kothaMain}
                fallbackSrc={OFFICIAL_ASSETS.kothaPosterRemote}
                alt="Art Ghar — Creative Work Beyond the Frame"
                objectPosition="center center"
                containerClassName="w-full h-full"
                className="grayscale hover:grayscale-0 contrast-[1.08] hover:scale-[1.02] transition-all duration-700"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />
              <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="font-mono-tabular text-[10px] tracking-[0.24em] text-[#D4C5A9] uppercase block">
                    
                  </span>
                  <span className="text-lg font-medium tracking-[0.16em] text-[#F4F1EA] uppercase">
                    
                  </span>
                </div>
                <span className="font-mono-tabular text-[10px] tracking-[0.2em] text-[#A39E93] uppercase">
                 
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
