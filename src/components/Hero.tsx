import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';
import { BRAND_IDENTITY, OFFICIAL_ASSETS } from '../data/portfolioData';

const FILM_TAPE_FRAMES = [
  {
    code: '23A',
    label: 'SANTOSH BISTA · 3D',
    src: OFFICIAL_ASSETS.santosh3DModel,
    href: '#about',
    isCutout: true,
  },
  {
    code: '24A',
    label: 'CHHORO · STILL',
    src: OFFICIAL_ASSETS.galleryTape1,
    href: '#gallery',
    isCutout: false,
  },
  {
    code: '24B',
    label: 'PORTRAIT STUDY · 01',
    src: OFFICIAL_ASSETS.galleryTape3,
    href: '#gallery',
    isCutout: false,
  },
  {
    code: '25A',
    label: 'CHHORO',
    src: OFFICIAL_ASSETS.choroMain,
    href: '#work',
    isCutout: false,
  },
  {
    code: '25B',
    label: 'PORTRAIT STUDY · 02',
    src: OFFICIAL_ASSETS.galleryTape2,
    href: '#gallery',
    isCutout: false,
  },
  {
    code: '26B',
    label: 'MANDAVI',
    src: OFFICIAL_ASSETS.mandaviMain,
    href: '#theatre',
    isCutout: false,
  },
];

export const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [pointer, setPointer] = useState({ x: 0, y: 0, rawX: 50, rawY: 50 });
  const [heroImgSrc, setHeroImgSrc] = useState<string>(OFFICIAL_ASSETS.santosh3DModel);
  const stageRef = useRef<HTMLElement>(null);

  const isCurrentCutout = heroImgSrc === OFFICIAL_ASSETS.santosh3DModel;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= window.innerHeight * 1.2) {
        setScrollY(window.scrollY);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const normX = (e.clientX - rect.left) / rect.width - 0.5;
    const normY = (e.clientY - rect.top) / rect.height - 0.5;
    setPointer({
      x: normY * -12,
      y: normX * 14,
      rawX: ((e.clientX - rect.left) / rect.width) * 100,
      rawY: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setPointer((prev) => ({ ...prev, x: 0, y: 0 }));
  };

  const parallaxOffset = Math.min(scrollY * 0.16, 110);
  const heroOpacity = Math.max(1 - scrollY / 820, 0.12);

  return (
    <section
      id="top"
      ref={stageRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label="Hero Introduction"
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#080808] pt-24 pb-10 md:pb-14"
      style={{ perspective: '1600px' }}
    >
      {/* Interactive Projector Beam Following Cursor */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle 580px at ${pointer.rawX}% ${pointer.rawY}%, rgba(212, 197, 169, 0.14) 0%, rgba(20, 20, 19, 0.35) 45%, rgba(8, 8, 8, 0.98) 85%)`,
        }}
        aria-hidden="true"
      />

      {/* 3D BACKGROUND ANALOG FILM TAPE RIBBONS */}
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden flex items-center justify-center"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateX(${14 + pointer.x * 0.65}deg) rotateY(${-16 + pointer.y * 0.85}deg) rotateZ(-8deg)`,
          transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        aria-hidden="true"
      >
        {/* Upper 35mm Celluloid Film Strip (Deep Background Plane) */}
        <div
          className="absolute -top-8 left-[-15%] right-[-15%] py-2.5 bg-[#0D0D0C]/85 border-y border-[#F4F1EA]/12 shadow-2xl opacity-[0.26]"
          style={{
            transform: `translate3d(${pointer.y * -2.8 - scrollY * 0.18}px, ${parallaxOffset * -0.3}px, -180px)`,
          }}
        >
          <div className="flex items-center justify-around px-2 pb-2 border-b border-[#F4F1EA]/10">
            {Array.from({ length: 36 }).map((_, i) => (
              <span
                key={`top-perf-a-${i}`}
                className="w-2.5 h-1.5 rounded-[1px] bg-[#050505] border border-[#F4F1EA]/20 shrink-0"
              />
            ))}
          </div>

          <div className="flex items-center gap-4 px-6 py-2.5">
            {[...FILM_TAPE_FRAMES, ...FILM_TAPE_FRAMES, ...FILM_TAPE_FRAMES].map((frame, idx) => (
              <div
                key={`upper-tape-${idx}`}
                className="relative w-44 h-28 shrink-0 overflow-hidden border border-[#F4F1EA]/15 bg-[#050505]"
              >
                <img
                  src={frame.src}
                  alt=""
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale contrast-[1.2] brightness-[0.75]"
                />
                <span className="absolute bottom-1 right-1.5 font-mono-tabular text-[8px] tracking-[0.2em] text-[#D4C5A9]/80">
                  {frame.code}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-around px-2 pt-2 border-t border-[#F4F1EA]/10">
            {Array.from({ length: 36 }).map((_, i) => (
              <span
                key={`bot-perf-a-${i}`}
                className="w-2.5 h-1.5 rounded-[1px] bg-[#050505] border border-[#F4F1EA]/20 shrink-0"
              />
            ))}
          </div>
        </div>

        {/* Lower Diagonal 35mm Celluloid Film Strip (Mid-Depth Plane) */}
        <div
          className="absolute bottom-12 left-[-15%] right-[-15%] py-2.5 bg-[#0D0D0C]/90 border-y border-[#D4C5A9]/15 shadow-2xl opacity-[0.32]"
          style={{
            transform: `translate3d(${pointer.y * 3.2 + scrollY * 0.15}px, ${parallaxOffset * 0.2}px, -95px) rotateZ(5deg)`,
          }}
        >
          <div className="flex items-center justify-around px-2 pb-2 border-b border-[#F4F1EA]/10">
            {Array.from({ length: 36 }).map((_, i) => (
              <span
                key={`top-perf-b-${i}`}
                className="w-2.5 h-1.5 rounded-[1px] bg-[#050505] border border-[#D4C5A9]/25 shrink-0"
              />
            ))}
          </div>

          <div className="flex items-center gap-4 px-6 py-2.5">
            {[...FILM_TAPE_FRAMES].reverse().concat(FILM_TAPE_FRAMES, FILM_TAPE_FRAMES).map((frame, idx) => (
              <div
                key={`lower-tape-${idx}`}
                className="relative w-48 h-28 shrink-0 overflow-hidden border border-[#F4F1EA]/15 bg-[#050505]"
              >
                <img
                  src={frame.src}
                  alt=""
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale contrast-[1.18] brightness-[0.75]"
                />
                <span className="absolute top-1 left-1.5 font-mono-tabular text-[8px] tracking-[0.2em] text-[#D4C5A9]/80">
                  KODAK 5222 · {frame.code}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-around px-2 pt-2 border-t border-[#F4F1EA]/10">
            {Array.from({ length: 36 }).map((_, i) => (
              <span
                key={`bot-perf-b-${i}`}
                className="w-2.5 h-1.5 rounded-[1px] bg-[#050505] border border-[#D4C5A9]/25 shrink-0"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Vignette Scrim to Keep Foreground Typography Razor-Sharp */}
      <div
        className="pointer-events-none absolute inset-0 z-[5] bg-gradient-to-t from-[#080808] via-[#080808]/55 to-[#080808]/65"
        aria-hidden="true"
      />

      {/* Main 3D Foreground Content */}
      <div
        className="relative z-10 max-w-[1440px] w-full mx-auto px-6 md:px-12 flex-1 flex flex-col justify-end"
        style={{ opacity: heroOpacity }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center my-auto py-6 md:py-10">
          {/* Left / Foreground Editorial Typography Plane */}
          <div className="lg:col-span-7 order-2 lg:order-1 z-20">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="mb-5 md:mb-7 flex items-center gap-3"
            >
              <span className="text-[11px] md:text-xs font-medium tracking-[0.3em] text-[#D4C5A9] uppercase">
                ACTOR
              </span>
            </motion.div>

            <h1 className="font-sans-neo font-semibold tracking-[-0.035em] leading-[0.88] text-[#F4F1EA] uppercase select-none">
              <motion.span
                initial={{ opacity: 0, y: 28, filter: 'blur(5px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
                className="block text-[clamp(3.4rem,9.2vw,8.5rem)]"
              >
                SANTOSH
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 28, filter: 'blur(5px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.32 }}
                className="block text-[clamp(3.4rem,9.2vw,8.5rem)] text-[#F4F1EA]/95"
              >
                BISTA
              </motion.span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.48 }}
              className="mt-8 md:mt-10 pt-6 border-t border-[#F4F1EA]/12 max-w-xl"
            >
              <p className="font-serif-editorial italic text-xl md:text-2xl text-[#E6E2D8] leading-snug">
                {BRAND_IDENTITY.editorialStatement}
              </p>
            </motion.div>

            {/* Interactive 35mm Film Strip Selector Bar */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
              className="mt-8 max-w-xl"
            >
              <div className="p-2 bg-[#0D0D0C]/90 border border-[#F4F1EA]/15 backdrop-blur-md">
                {/* Sprocket Holes Top */}
                <div className="flex items-center justify-between px-1 pb-1.5" aria-hidden="true">
                  {Array.from({ length: 18 }).map((_, idx) => (
                    <span
                      key={`strip-top-${idx}`}
                      className="w-2 h-1 rounded-[1px] bg-[#050505] border border-[#F4F1EA]/20"
                    />
                  ))}
                </div>

                {/* Interactive Film Frames */}
                <div className="grid grid-cols-6 gap-1.5">
                  {FILM_TAPE_FRAMES.map((frame) => {
                    const isSelected = heroImgSrc === frame.src;
                    return (
                      <button
                        key={frame.code}
                        type="button"
                        onMouseEnter={() => {
                          setHeroImgSrc(frame.src);
                        }}
                        onClick={() => {
                          setHeroImgSrc(frame.src);
                        }}
                        aria-label={`Preview ${frame.label}`}
                        className={`group relative aspect-[16/10] overflow-hidden border transition-all duration-300 bg-[#050505] ${
                          isSelected
                            ? 'border-[#D4C5A9] scale-[1.03] z-10'
                            : 'border-[#F4F1EA]/15 opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={frame.src}
                          alt={frame.label}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 contrast-[1.1]"
                        />
                      </button>
                    );
                  })}
                </div>

                {/* Sprocket Holes Bottom */}
                <div className="flex items-center justify-between px-1 pt-1.5" aria-hidden="true">
                  {Array.from({ length: 18 }).map((_, idx) => (
                    <span
                      key={`strip-bot-${idx}`}
                      className="w-2 h-1 rounded-[1px] bg-[#050505] border border-[#F4F1EA]/20"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right / 3D Background-Removed Realistic Model & Film Tape Stage */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              style={{
                transform: `translate3d(0, ${parallaxOffset * -0.25}px, 0) rotateX(${pointer.x}deg) rotateY(${pointer.y}deg)`,
                transformStyle: 'preserve-3d',
              }}
              className="relative w-full max-w-[490px] aspect-square sm:aspect-[4/4.3] transition-transform duration-300 ease-out"
            >
              {/* Backplane 1: 3D Studio Architectural Stage Plate */}
              <div
                className="absolute inset-6 border border-[#F4F1EA]/15 bg-[#0C0C0B]/90 shadow-2xl"
                style={{
                  transform: 'translateZ(-52px) rotateZ(-2deg)',
                  backgroundImage:
                    'radial-gradient(rgba(212,197,169,0.12) 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
                aria-hidden="true"
              />

              {/* Backplane 2: Tilted 35mm Celluloid Film Strip Passing Behind the Cutout Model */}
              <div
                className="absolute -left-8 -right-8 top-1/2 -translate-y-1/2 h-28 bg-[#111110]/95 border-y border-[#D4C5A9]/30 flex items-center justify-between px-3 overflow-hidden shadow-2xl"
                style={{ transform: 'translateZ(-24px) rotateZ(7deg)' }}
                aria-hidden="true"
              >
                <div className="flex items-center gap-2 opacity-60">
                  {FILM_TAPE_FRAMES.slice(1, 5).map((f) => (
                    <img
                      key={`back-strip-${f.code}`}
                      src={f.src}
                      alt=""
                      referrerPolicy="no-referrer"
                      className="w-28 h-20 object-cover grayscale border border-[#F4F1EA]/15"
                    />
                  ))}
                </div>
              </div>

              {/* Backplane 3: Volumetric Tungsten Rim-Light Halo Behind Cutout Subject */}
              <div
                className="absolute inset-4 rounded-full opacity-75 blur-2xl"
                style={{
                  background:
                    'radial-gradient(circle at 50% 42%, rgba(212, 197, 169, 0.38), rgba(212, 197, 169, 0.08) 52%, transparent 74%)',
                  transform: 'translateZ(-10px)',
                }}
                aria-hidden="true"
              />

              {/* Backplane 4: Subtle 3D Studio Halo Ring */}
              <div
                className="pointer-events-none absolute inset-8 rounded-full border border-[#D4C5A9]/25"
                style={{ transform: 'translateZ(-6px)' }}
                aria-hidden="true"
              />

              {/* Midplane: Background-Removed 3D Cutout Model Popping Out in Z-Space */}
              <div
                className="relative w-full h-full flex items-end justify-center overflow-visible"
                style={{
                  transform: 'translateZ(46px)',
                }}
              >
                <img
                  key={heroImgSrc}
                  src={heroImgSrc}
                  alt="Santosh Bista — 3D Studio Model & Film Portfolio"
                  referrerPolicy="no-referrer"
                  fetchPriority="high"
                  loading="eager"
                  style={{
                    filter: isCurrentCutout
                      ? 'drop-shadow(0 28px 36px rgba(0, 0, 0, 0.95)) drop-shadow(0 0 24px rgba(212, 197, 169, 0.18)) contrast(1.08)'
                      : 'none',
                  }}
                  className={
                    isCurrentCutout
                      ? 'w-full h-full object-contain object-bottom grayscale hover:grayscale-0 scale-[1.05] hover:scale-[1.08] transition-all duration-700 select-none'
                      : 'w-full h-full object-cover grayscale hover:grayscale-0 contrast-[1.12] brightness-[0.92] border border-[#F4F1EA]/20 shadow-2xl transition-all duration-700'
                  }
                />
                {/* Soft Bottom Stage Blend */}
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#080808] via-[#080808]/60 to-transparent"
                  aria-hidden="true"
                />
              </div>

              {/* Foreplane: Clean 3D Floating Frame Border (No Text Over Photo) */}
              <div
                className="pointer-events-none absolute -inset-2 border border-[#D4C5A9]/25"
                style={{ transform: 'translateZ(68px)' }}
                aria-hidden="true"
              />
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar: Scroll Indicator & Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="pt-6 border-t border-[#F4F1EA]/12 flex items-center justify-between text-[11px] tracking-[0.24em] text-[#A39E93] uppercase"
        >
          <a
            href="#statement"
            className="group inline-flex items-center gap-3 py-1 hover:text-[#F4F1EA] transition-colors duration-300"
          >
            <span>SCROLL TO EXPLORE</span>
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-300 group-hover:translate-y-1 text-[#D4C5A9]"
            >
              ↓
            </span>
          </a>

          <span className="hidden sm:inline-block text-[#6E6A63]">
            KATHMANDU, NEPAL
          </span>
        </motion.div>
      </div>
    </section>
  );
};
