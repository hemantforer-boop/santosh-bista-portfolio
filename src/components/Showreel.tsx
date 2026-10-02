import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import { OFFICIAL_ASSETS } from '../data/portfolioData';

const REEL_SELECTIONS = [
  {
    id: 'chhoro',
    title: 'CHHORO (छोरो)',
    subtitle: 'Musical Film · Role: Son — Lead Character',
    youtubeId: OFFICIAL_ASSETS.choroYoutubeId,
    poster: OFFICIAL_ASSETS.choroMain,
    externalUrl: OFFICIAL_ASSETS.choroVideoUrl,
  },
  {
    id: 'kotha',
    title: 'KOTHA (कोठा)',
    subtitle: 'Musical Film · Role: Appearance · Art Ghar',
    youtubeId: OFFICIAL_ASSETS.kothaYoutubeId,
    poster: OFFICIAL_ASSETS.kothaMain,
    externalUrl: OFFICIAL_ASSETS.kothaVideoUrl,
  },
  {
    id: 'manko-bhasa',
    title: 'MANKO BHASA',
    subtitle: 'Music Video · Role: Actor',
    youtubeId: OFFICIAL_ASSETS.mankoBhasaYoutubeId,
    poster: OFFICIAL_ASSETS.mankoBhasaMain,
    externalUrl: OFFICIAL_ASSETS.mankoBhasaVideoUrl,
  },
];

export const Showreel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const activeReel = REEL_SELECTIONS[activeReelIndex];

  // Send command to YouTube IFrame API via postMessage
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

  useEffect(() => {
    const onFsChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  const handlePlayPause = () => {
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

  const handleMuteToggle = () => {
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

  const handleFullscreen = async () => {
    if (!containerRef.current) return;
    try {
      if (!document.fullscreenElement) {
        await containerRef.current.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch {
      setIsFullscreen((prev) => !prev);
    }
  };

  const handleSelectReel = (idx: number) => {
    setActiveReelIndex(idx);
    setHasStarted(false);
    setIsPlaying(false);
  };

  return (
    <section
      id="showreel"
      aria-labelledby="showreel-heading"
      className="relative py-28 md:py-40 bg-[#050505] border-b border-[#F4F1EA]/[0.07]"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Centered Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 space-y-4">
          <span className="font-mono-tabular text-xs tracking-[0.28em] text-[#6E6A63] uppercase block">
            06 / SCREENING ROOM
          </span>
          <h2
            id="showreel-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-light tracking-[0.12em] text-[#F4F1EA] uppercase"
          >
            SHOWREEL
          </h2>
          <p className="font-serif-editorial italic text-xl md:text-2xl text-[#A39E93]">
            Selected performances and work.
          </p>

          {/* Film Selection Tabs */}
          <div className="pt-4 flex items-center justify-center gap-3">
            {REEL_SELECTIONS.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelectReel(idx)}
                className={`py-2 px-5 text-xs font-mono-tabular tracking-[0.2em] uppercase transition-colors whitespace-nowrap ${
                  activeReelIndex === idx
                    ? 'bg-[#F4F1EA] text-[#080808] font-medium'
                    : 'border border-[#F4F1EA]/15 text-[#A39E93] hover:text-[#F4F1EA]'
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        {/* Custom Minimalist Cinema Player */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className={`relative w-full bg-[#080808] border border-[#F4F1EA]/15 overflow-hidden flex flex-col justify-between ${
            isFullscreen ? 'fixed inset-0 z-[80] h-screen' : ''
          }`}
        >
          {/* Video Viewport */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#050505]">
            {hasStarted ? (
              <iframe
                ref={iframeRef}
                key={activeReel.youtubeId}
                src={`https://www.youtube.com/embed/${activeReel.youtubeId}?enablejsapi=1&autoplay=1&mute=${
                  isMuted ? 1 : 0
                }&rel=0&modestbranding=1&playsinline=1`}
                title={activeReel.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
                className="w-full h-full border-0"
              />
            ) : (
              <div
                onClick={handlePlayPause}
                role="button"
                tabIndex={0}
                aria-label={`Play ${activeReel.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handlePlayPause();
                  }
                }}
                className="group relative w-full h-full cursor-pointer"
              >
                <img
                  src={activeReel.poster}
                  alt={activeReel.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 contrast-[1.08] brightness-[0.8] group-hover:scale-[1.02] transition-all duration-700"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <span className="py-3.5 px-8 border border-[#F4F1EA]/50 bg-[#080808]/85 group-hover:bg-[#F4F1EA] group-hover:text-[#080808] transition-colors text-xs font-mono-tabular tracking-[0.28em] text-[#F4F1EA] uppercase">
                    PLAY FILM
                  </span>
                  <span className="mt-4 font-serif-editorial italic text-xl text-[#E6E2D8]">
                    {activeReel.subtitle}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Minimal Custom Control Bar: PLAY / PAUSE / MUTE / FULLSCREEN */}
          <div className="px-6 md:px-8 py-4 bg-[#0B0B0A] border-t border-[#F4F1EA]/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={handlePlayPause}
                className="font-mono-tabular text-xs tracking-[0.22em] text-[#F4F1EA] hover:text-[#D4C5A9] transition-colors uppercase py-1 whitespace-nowrap"
              >
                {isPlaying ? 'PAUSE' : 'PLAY'}
              </button>

              <span className="hidden sm:inline-block text-xs text-[#A39E93] font-light">
                {activeReel.title} — {activeReel.subtitle}
              </span>
            </div>

            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={handleMuteToggle}
                className="font-mono-tabular text-xs tracking-[0.22em] text-[#A39E93] hover:text-[#F4F1EA] transition-colors uppercase py-1 whitespace-nowrap"
              >
                {isMuted ? 'UNMUTE' : 'MUTE'}
              </button>

              <button
                type="button"
                onClick={handleFullscreen}
                className="font-mono-tabular text-xs tracking-[0.22em] text-[#A39E93] hover:text-[#F4F1EA] transition-colors uppercase py-1 whitespace-nowrap"
              >
                {isFullscreen ? 'EXIT FULLSCREEN' : 'FULLSCREEN'}
              </button>

              <a
                href={activeReel.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono-tabular text-xs tracking-[0.22em] text-[#D4C5A9] hover:text-[#F4F1EA] transition-colors uppercase py-1 whitespace-nowrap"
              >
                YOUTUBE ↗
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
