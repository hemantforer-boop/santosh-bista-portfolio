import React from 'react';
import { motion } from 'motion/react';
import {
  EXPERIENCE_TIMELINE,
  VERIFIED_SKILLS,
  VERIFIED_LANGUAGES,
} from '../data/portfolioData';

export const ExperienceSkills: React.FC = () => {
  return (
    <section
      aria-label="Professional Experience and Disciplines"
      className="relative py-28 md:py-40 bg-[#080808] border-b border-[#F4F1EA]/[0.07]"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 space-y-32 md:space-y-40">
        {/* SECTION 16: EXPERIENCE — SUBTLE PROFESSIONAL TIMELINE */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 md:pb-16 border-b border-[#F4F1EA]/10 gap-4">
            <div>
              <span className="font-mono-tabular text-xs tracking-[0.24em] text-[#6E6A63] uppercase block mb-3">
                CHRONOLOGY
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-[-0.02em] text-[#F4F1EA] uppercase">
                EXPERIENCE
              </h2>
            </div>
            <p className="text-xs tracking-[0.2em] text-[#A39E93] uppercase">
              Academic Leadership · Drama Pedagogy · Performance &amp; Direction
            </p>
          </div>

          <div className="divide-y divide-[#F4F1EA]/10 border-b border-[#F4F1EA]/10">
            {EXPERIENCE_TIMELINE.map((item, idx) => (
              <motion.div
                key={`${item.role}-${item.organization}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                  delay: idx * 0.08,
                }}
                className="py-10 md:py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline"
              >
                {/* Period */}
                <div className="lg:col-span-3">
                  <span className="font-mono-tabular text-xs tracking-[0.18em] text-[#D4C5A9] uppercase">
                    {item.period}
                  </span>
                </div>

                {/* Role & Organization */}
                <div className="lg:col-span-4">
                  <h3 className="text-2xl sm:text-3xl font-light text-[#F4F1EA] tracking-tight">
                    {item.role}
                  </h3>
                  <div className="mt-1 text-xs font-mono-tabular tracking-[0.2em] text-[#A39E93] uppercase">
                    {item.organization}
                  </div>
                </div>

                {/* Description */}
                <div className="lg:col-span-5">
                  <p className="text-sm md:text-base text-[#A39E93] leading-[1.7] font-light">
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION 17: SKILLS & LANGUAGES — LARGE EDITORIAL TYPOGRAPHY (NO PROGRESS BARS) */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 md:pb-16 border-b border-[#F4F1EA]/10 gap-4">
            <div>
              <span className="font-mono-tabular text-xs tracking-[0.24em] text-[#6E6A63] uppercase block mb-3">
                 CRAFT &amp; DISCIPLINES
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-[-0.02em] text-[#F4F1EA] uppercase">
                DISCIPLINES
              </h2>
            </div>
            <p className="text-xs tracking-[0.2em] text-[#A39E93] uppercase">
              Core Artistic &amp; Pedagogical Capabilities
            </p>
          </div>

          {/* Typographic Monument List */}
          <div className="divide-y divide-[#F4F1EA]/10 border-b border-[#F4F1EA]/10">
            {VERIFIED_SKILLS.map((skill, idx) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-8% 0px' }}
                transition={{
                  duration: 0.65,
                  ease: [0.16, 1, 0.3, 1],
                  delay: idx * 0.06,
                }}
                className="group py-7 md:py-9 flex flex-col md:flex-row md:items-baseline justify-between gap-3"
              >
                <div className="flex items-baseline gap-6">
                  <span className="font-mono-tabular text-xs text-[#6E6A63] group-hover:text-[#D4C5A9] transition-colors">
                    0{idx + 1}
                  </span>
                  <h3 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-[-0.02em] text-[#F4F1EA] group-hover:text-[#D4C5A9] group-hover:translate-x-2 transition-all duration-300 uppercase">
                    {skill.title}
                  </h3>
                </div>

                <span className="font-serif-editorial italic text-lg md:text-xl text-[#A39E93] md:text-right">
                  {skill.context}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Languages */}
          <div className="pt-14 md:pt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-3">
              <span className="font-mono-tabular text-xs tracking-[0.24em] text-[#6E6A63] uppercase">
                LANGUAGES
              </span>
            </div>

            <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {VERIFIED_LANGUAGES.map((item) => (
                <div
                  key={item.language}
                  className="border-l border-[#F4F1EA]/15 pl-5 py-1"
                >
                  <div className="font-serif-editorial text-2xl md:text-3xl text-[#F4F1EA]">
                    {item.language}
                  </div>
                  <div className="text-xs text-[#A39E93] mt-1 font-light">
                    {item.note}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
