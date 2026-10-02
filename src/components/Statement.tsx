import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'motion/react';
import { BRAND_IDENTITY, OFFICIAL_ASSETS } from '../data/portfolioData';

export const Statement: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const stageRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const sendYouTubeCommand = useCallback((func: string, args: unknown[] = []) => {
    if (!iframeRef.current?.contentWindow) return;
    iframeRef.current.contentWindow.postMessage(
      JSON.stringify({
        event: 'command',
        func,
        args,
      }),
      '*'
    );
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
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

  const handleTogglePlay = () => {
    if (!hasStarted) {
      setHasStarted(true);
      setIsPlaying(true);
      return;
    }
    if (isPlaying) {
      sendYouTubeCommand('pauseVideo');
      setIsPlaying(false);
    } else {
      sendYouTubeCommand('playVideo');
      setIsPlaying(true);
    }
  };

  const handleToggleMute = () => {
    if (!hasStarted) {
      setIsMuted((prev) => !prev);
      return;
    }
    if (isMuted) {
      sendYouTubeCommand('unMute');
      setIsMuted(false);
    } else {
      sendYouTubeCommand('mute');
      setIsMuted(true);
    }
  };

  return (
    <section
      id="statement"
      aria-label="Editorial Statement and Actor Introduction Reel"
      className="relative py-28 md:py-40 bg-[#080808] border-b border-[#F4F1EA]/[0.07] overflow-hidden"
    >
      {/* Subtle radial stage spotlight */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle 650px at 72% 48%, rgba(212, 197, 169, 0.08), transparent 75%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Top Section Index */}
        <div className="flex items-center justify-between pb-12 md:pb-16 border-b border-[#F4F1EA]/10">
          <span className="font-mono-tabular text-xs tracking-[0.24em] text-[#6E6A63] uppercase">
            01 / PROLOGUE &amp; ACTOR INTRODUCTION
          </span>
          <span className="font-mono-tabular text-xs tracking-[0.22em] text-[#D4C5A9] uppercase">
            SANTOSH BISTA
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 pt-14 md:pt-20 items-center">
          {/* Left 7 Columns: Progressive Editorial Statement & Interactive Screening Controls */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-1 md:space-y-2">
              {BRAND_IDENTITY.introHeadline.map((line, idx) => (
                <div key={line} className="overflow-hidden">
                  <motion.p
                    initial={{ opacity: 0, y: 36 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-10% 0px' }}
                    transition={{
                      duration: 0.75,
                      ease: [0.16, 1, 0.3, 1],
                      delay: idx * 0.14,
                    }}
                    className={`text-[clamp(2.2rem,5vw,4.5rem)] leading-[1.08] tracking-[-0.02em] text-[#F4F1EA] text-balance ${
                      idx === 1
                        ? 'font-serif-editorial italic font-normal text-[#D4C5A9]'
                        : 'font-sans-neo font-light'
                    }`}
                  >
                    {line}
                  </motion.p>
                </div>
              ))}
            </div>

            {/* Concise CV-backed professional description */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
              className="space-y-8 pt-8 border-t border-[#F4F1EA]/10"
            >
              <p className="text-base md:text-lg text-[#E6E2D8]/90 leading-[1.75] font-light max-w-[60ch]">
                {BRAND_IDENTITY.introProse}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#F4F1EA]/[0.07]">
                <div>
                  <div className="font-mono-tabular text-2xl md:text-3xl font-light text-[#F4F1EA] tracking-tight">
                    12+ Short Films
                  </div>
                  <p className="text-xs tracking-[0.16em] text-[#A39E93] uppercase mt-1">
                    Plus Multiple Theatrical Productions &amp; Music Videos
                  </p>
                </div>

                <div className="sm:border-l sm:border-[#F4F1EA]/10 sm:pl-6 flex flex-col justify-center">
                  <p className="text-xs text-[#A39E93] leading-relaxed">
                    {BRAND_IDENTITY.careerCorpusNote}
                  </p>
                </div>
              </div>

              {/* Interactive Screening Trigger Bar for the Actor Introduction Video */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={handleTogglePlay}
                  className="py-3.5 px-7 bg-[#F4F1EA] text-[#080808] hover:bg-[#D4C5A9] transition-colors text-xs font-medium tracking-[0.22em] uppercase whitespace-nowrap"
                >
                  {isPlaying ? 'PAUSE INTRODUCTION' : 'WATCH ACTOR INTRODUCTION'}
                </button>

                {hasStarted && (
                  <button
                    type="button"
                    onClick={handleToggleMute}
                    className="py-3.5 px-6 border border-[#F4F1EA]/25 text-[#F4F1EA] hover:border-[#D4C5A9] hover:text-[#D4C5A9] transition-colors text-xs font-mono-tabular tracking-[0.2em] uppercase whitespace-nowrap"
                  >
                    {isMuted ? 'UNMUTE' : 'MUTE'}
                  </button>
                )}

                <a
                  href={OFFICIAL_ASSETS.introVideoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-6 border border-[#F4F1EA]/15 text-[#A39E93] hover:text-[#F4F1EA] hover:border-[#F4F1EA]/40 transition-colors text-xs font-mono-tabular tracking-[0.2em] uppercase whitespace-nowrap"
                >
                  YOUTUBE ↗
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right 5 Columns: 3D Vertical Cinema Monolith — Actor Introduction Video */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="lg:col-span-5 flex justify-center"
            style={{ perspective: '1400px' }}
          >
            <div
              ref={stageRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transformStyle: 'preserve-3d',
              }}
              className="relative w-full max-w-[360px] aspect-[9/16] transition-transform duration-300 ease-out"
            >
              {/* Backplane 1: 3D Offset Architectural Shadow Plate */}
              <div
                className="absolute inset-4 bg-[#0C0C0B] border border-[#F4F1EA]/15 shadow-2xl"
                style={{
                  transform: 'translateZ(-42px) rotateZ(-3deg)',
                  backgroundImage:
                    'radial-gradient(rgba(212,197,169,0.12) 1px, transparent 1px)',
                  backgroundSize: '18px 18px',
                }}
                aria-hidden="true"
              />

              {/* Backplane 2: Vertical 35mm Celluloid Sprocket Rail */}
              <div
                className="pointer-events-none absolute -left-5 top-6 bottom-6 w-4 bg-[#0E0E0D] border border-[#F4F1EA]/15 flex flex-col items-center justify-around py-2"
                style={{ transform: 'translateZ(-18px)' }}
                aria-hidden="true"
              >
                {Array.from({ length: 16 }).map((_, i) => (
                  <span
                    key={`v-sprocket-l-${i}`}
                    className="w-1.5 h-2.5 rounded-[1px] bg-[#050505] border border-[#D4C5A9]/25"
                  />
                ))}
              </div>

              <div
                className="pointer-events-none absolute -right-5 top-6 bottom-6 w-4 bg-[#0E0E0D] border border-[#F4F1EA]/15 flex flex-col items-center justify-around py-2"
                style={{ transform: 'translateZ(-18px)' }}
                aria-hidden="true"
              >
                {Array.from({ length: 16 }).map((_, i) => (
                  <span
                    key={`v-sprocket-r-${i}`}
                    className="w-1.5 h-2.5 rounded-[1px] bg-[#050505] border border-[#D4C5A9]/25"
                  />
                ))}
              </div>

              {/* Backplane 3: Warm Tungsten Aura */}
              <div
                className="pointer-events-none absolute inset-2 rounded-full opacity-60 blur-2xl"
                style={{
                  background:
                    'radial-gradient(circle at 50% 45%, rgba(212, 197, 169, 0.32), transparent 72%)',
                  transform: 'translateZ(-12px)',
                }}
                aria-hidden="true"
              />

              {/* Main 3D Vertical Screening Frame */}
              <div
                className="relative w-full h-full overflow-hidden border border-[#F4F1EA]/25 bg-[#050505] shadow-2xl"
                style={{ transform: 'translateZ(28px)' }}
              >
                {hasStarted ? (
                  <iframe
                    ref={iframeRef}
                    src={`https://www.youtube.com/embed/${OFFICIAL_ASSETS.introVideoYoutubeId}?enablejsapi=1&autoplay=1&mute=${
                      isMuted ? 1 : 0
                    }&loop=1&playlist=${
                      OFFICIAL_ASSETS.introVideoYoutubeId
                    }&rel=0&modestbranding=1&playsinline=1`}
                    title="Santosh Bista — Actor Introduction Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                ) : (
                  <div
                    onClick={handleTogglePlay}
                    role="button"
                    tabIndex={0}
                    aria-label="Play Santosh Bista Actor Introduction Video"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleTogglePlay();
                      }
                    }}
                    data-cursor="project"
                    data-cursor-label="PLAY INTRO"
                    className="group relative w-full h-full cursor-pointer overflow-hidden bg-[#080808]"
                  >
                    <img
                      src={OFFICIAL_ASSETS.introVideoThumb}
                      alt="Santosh Bista — Actor Introduction Reel"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 contrast-[1.08] brightness-[0.86] group-hover:scale-[1.04] transition-all duration-700"
                    />

                    <div
                      className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/25 to-[#050505]/40"
                      aria-hidden="true"
                    />

                    {/* Minimal Editorial Play Trigger */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                      <span className="py-3.5 px-7 border border-[#F4F1EA]/60 bg-[#080808]/85 group-hover:bg-[#F4F1EA] group-hover:text-[#080808] transition-colors text-xs font-mono-tabular tracking-[0.26em] text-[#F4F1EA] uppercase">
                        PLAY INTRO
                      </span>
                    </div>

                    {/* Subtle Bottom Label */}
                    <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-[10px] font-mono-tabular tracking-[0.22em] text-[#D4C5A9] uppercase">
                      <span>ACTOR INTRODUCTION</span>
                      <span>REEL 01</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Clean 3D Outer Wireframe Border */}
              <div
                className="pointer-events-none absolute -inset-2.5 border border-[#D4C5A9]/25"
                style={{ transform: 'translateZ(52px)' }}
                aria-hidden="true"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
