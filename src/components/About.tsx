import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { CinematicImage } from './CinematicImage';
import { EDUCATION_LIST, OFFICIAL_ASSETS } from '../data/portfolioData';

export const About: React.FC = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const normX = (e.clientX - rect.left) / rect.width - 0.5;
    const normY = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      x: normY * -10,
      y: normX * 12,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative py-28 md:py-40 bg-[#080808] border-b border-[#F4F1EA]/[0.07]"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 md:pb-16 border-b border-[#F4F1EA]/10 gap-4">
          <div>
            <span className="font-mono-tabular text-xs tracking-[0.24em] text-[#6E6A63] uppercase block mb-3">
              02 / BIOGRAPHY
            </span>
            <h2
              id="about-heading"
              className="text-3xl sm:text-5xl md:text-6xl font-light tracking-[-0.02em] text-[#F4F1EA] uppercase"
            >
               ARTIST
            </h2>
          </div>
          <p className="text-xs tracking-[0.2em] text-[#A39E93] uppercase">
            Actor · Theatre Artist · Director · Drama Educator · Filmmaker
          </p>
        </div>

        {/* Main Editorial Split: 3D Sculpted Portrait + Biography & Credentials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-14 md:pt-20 items-start">
          {/* 3D Sculpted Studio Portrait Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
            style={{ perspective: '1300px' }}
          >
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transformStyle: 'preserve-3d',
              }}
              className="relative aspect-square w-full transition-transform duration-300 ease-out"
            >
              {/* 3D Back Shadow Plate with Subtle Studio Grid */}
              <div
                className="absolute inset-5 bg-[#0C0C0B] border border-[#F4F1EA]/15 shadow-2xl"
                style={{
                  transform: 'translateZ(-36px) rotateZ(-1.5deg)',
                  backgroundImage:
                    'radial-gradient(rgba(212,197,169,0.12) 1px, transparent 1px)',
                  backgroundSize: '18px 18px',
                }}
                aria-hidden="true"
              />

              {/* Warm Volumetric Studio Rim-Light Halo Behind Cutout */}
              <div
                className="absolute inset-4 rounded-full opacity-70 blur-2xl"
                style={{
                  background:
                    'radial-gradient(circle at 50% 42%, rgba(212, 197, 169, 0.36), rgba(212, 197, 169, 0.08) 55%, transparent 74%)',
                  transform: 'translateZ(-14px)',
                }}
                aria-hidden="true"
              />

              {/* Subtle 3D Architectural Halo Ring Behind Subject */}
              <div
                className="pointer-events-none absolute inset-8 rounded-full border border-[#D4C5A9]/25"
                style={{ transform: 'translateZ(-6px)' }}
                aria-hidden="true"
              />

              {/* 3D Background-Removed Full Portrait Cutout Layer */}
              <div
                className="relative w-full h-full flex items-end justify-center overflow-visible"
                style={{ transform: 'translateZ(38px)' }}
              >
                <img
                  src={OFFICIAL_ASSETS.santosh3DModel}
                  alt="Santosh Bista — Actor, Director, and Theatre Artist"
                  style={{
                    filter:
                      'drop-shadow(0 26px 34px rgba(0, 0, 0, 0.95)) drop-shadow(0 0 20px rgba(212, 197, 169, 0.16)) contrast(1.06)',
                  }}
                  className="w-full h-full object-contain object-bottom grayscale hover:grayscale-0 scale-[1.03] hover:scale-[1.06] transition-all duration-700 select-none"
                />
                <div
                  className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#080808] via-[#080808]/50 to-transparent pointer-events-none"
                  aria-hidden="true"
                />
              </div>

              {/* Foreplane Clean 3D Frame Border */}
              <div
                className="pointer-events-none absolute -inset-2 border border-[#D4C5A9]/25"
                style={{ transform: 'translateZ(62px)' }}
                aria-hidden="true"
              />
            </div>

            <div className="mt-6 flex items-center justify-between text-[11px] font-mono-tabular tracking-[0.18em] text-[#6E6A63] uppercase">
              <span>SANTOSH BISTA</span>
              <span>ACTOR</span>
            </div>
          </motion.div>

          {/* Biography & Verified Academic / Professional Pillars */}
          <div className="lg:col-span-7 space-y-14">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="space-y-6"
            >
              <p className="font-serif-editorial text-2xl sm:text-3xl md:text-4xl text-[#F4F1EA] leading-[1.25] font-normal text-balance">
                Bridging the immediacy of live stage performance with the visual intimacy of contemporary Nepali cinema.
              </p>

              <div className="space-y-4 text-[15px] md:text-base text-[#A39E93] leading-[1.75] font-light max-w-[68ch]">
                <p>
                  Santosh Bista is a Nepali actor, theatre artist, director, drama educator, and filmmaker based in Kathmandu. Trained formally in acting and filmmaking at Everest Film Academy, his practice moves fluidly between narrative cinema and the rehearsal discipline of the stage.
                </p>
                <p>
                  He has acted in more than 12 short films, musical films including <em className="text-[#E6E2D8] not-italic font-normal">Chhoro</em> and <em className="text-[#E6E2D8] not-italic font-normal">Kotha</em>, the music video <em className="text-[#E6E2D8] not-italic font-normal">Manko Bhasa</em>, and theatrical productions including <em className="text-[#E6E2D8] not-italic font-normal">Tantra</em>, <em className="text-[#E6E2D8] not-italic font-normal">Mandavi</em> (2026), and <em className="text-[#E6E2D8] not-italic font-normal">Manish Harayeko Suchana</em> (as both Director and Actor at Mandala Theatre Nepal). He also serves as CEO &amp; Actor at <span className="text-[#F4F1EA]">Art Ghar</span>.
                </p>
                <p>
                  Alongside his screen and stage work, Santosh is dedicated to film and drama education—having served as Academic Coordinator at Everest Film Academy (September 2023 – March 2025) and currently teaching drama at Kavya School (January 2024 – Present).
                </p>
              </div>
            </motion.div>

            {/* Roles Matrix (Unboxed Clean Typographic Grid) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="pt-8 border-t border-[#F4F1EA]/10"
            >
              <h3 className="font-mono-tabular text-xs tracking-[0.22em] text-[#6E6A63] uppercase mb-6">
                PRACTICE &amp; ROLES
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-8">
                {[
                  { role: 'Actor', scope: '12+ Short Films & Musical Films' },
                  { role: 'Theatre Artist', scope: 'Live Stage Performance' },
                  { role: 'Director', scope: 'Stage & Narrative Direction' },
                  { role: 'Drama Educator', scope: 'Kavya School' },
                  { role: 'Filmmaker', scope: 'Independent & Musical Film' },
                  { role: 'CEO & Actor', scope: 'Art Ghar Creative Leadership' },
                ].map((item) => (
                  <div key={item.role} className="border-l border-[#F4F1EA]/15 pl-4">
                    <div className="text-sm font-medium text-[#F4F1EA] tracking-wide">
                      {item.role}
                    </div>
                    <div className="text-xs text-[#6E6A63] mt-1 leading-relaxed">
                      {item.scope}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education & Academic Credentials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-8 border-t border-[#F4F1EA]/10"
            >
              {/* Education */}
              <div>
                <h3 className="font-mono-tabular text-xs tracking-[0.22em] text-[#6E6A63] uppercase mb-5">
                  EDUCATION
                </h3>
                <div className="space-y-6">
                  {EDUCATION_LIST.map((edu) => (
                    <div key={`${edu.qualification}-${edu.period}`} className="space-y-1">
                      <div className="font-mono-tabular text-xs text-[#D4C5A9]">
                        {edu.period}
                      </div>
                      <div className="text-base font-medium text-[#F4F1EA]">
                        {edu.qualification}
                      </div>
                      {edu.institution && (
                        <div className="text-sm text-[#A39E93] font-light">
                          {edu.institution}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Academic & Teaching Appointments */}
              <div>
                <h3 className="font-mono-tabular text-xs tracking-[0.22em] text-[#6E6A63] uppercase mb-5">
                  PROFESSIONAL APPOINTMENTS
                </h3>
                <div className="space-y-6">
                  <div className="space-y-1">
                    <div className="font-mono-tabular text-xs text-[#D4C5A9]">
                      January 2024 – Present
                    </div>
                    <div className="text-base font-medium text-[#F4F1EA]">
                      Drama Teacher
                    </div>
                    <div className="text-sm text-[#A39E93] font-light">
                      Kavya School
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="font-mono-tabular text-xs text-[#D4C5A9]">
                      September 2023 – March 2025
                    </div>
                    <div className="text-base font-medium text-[#F4F1EA]">
                      Academic Coordinator
                    </div>
                    <div className="text-sm text-[#A39E93] font-light">
                      Everest Film Academy
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
