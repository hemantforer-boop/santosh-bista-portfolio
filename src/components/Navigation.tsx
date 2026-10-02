import React, { useState, useEffect } from 'react';
import { PERSONAL_SOCIALS } from '../data/portfolioData';

const NAV_ITEMS = [
  { label: 'WORK', href: '#work' },
  { label: 'ABOUT', href: '#about' },
  { label: 'THEATRE', href: '#theatre' },
  { label: 'ART GHAR', href: '#art-ghar' },
  { label: 'GALLERY', href: '#gallery' },
  { label: 'CONTACT', href: '#contact' },
];

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 48);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          scrolled
            ? 'bg-[#080808]/90 backdrop-blur-md border-b border-[#F4F1EA]/[0.07]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#top"
            className="text-sm md:text-[15px] font-semibold tracking-[0.24em] text-[#F4F1EA] uppercase whitespace-nowrap shrink-0 hover:text-[#D4C5A9] transition-colors duration-200"
          >
            SANTOSH BISTA
          </a>

          {/* Zone 2: 6 clean text navigation links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-8 xl:gap-10"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative py-1 text-[11px] font-medium tracking-[0.2em] text-[#A39E93] hover:text-[#F4F1EA] transition-colors duration-200 whitespace-nowrap shrink-0 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#D4C5A9] after:scale-x-0 hover:after:scale-x-100 after:origin-right hover:after:origin-left after:transition-transform after:duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Right side social icons (Desktop) & Minimal Menu Button (Mobile) */}
          <div className="flex items-center gap-5">
            <div className="hidden lg:flex items-center gap-5">
              {/* Instagram */}
              <a
                href={PERSONAL_SOCIALS[0].url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Santosh Bista on Instagram"
                className="text-[#A39E93] hover:text-[#F4F1EA] transition-colors duration-200 p-1"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href={PERSONAL_SOCIALS[1].url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Santosh Bista on Facebook"
                className="text-[#A39E93] hover:text-[#F4F1EA] transition-colors duration-200 p-1"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={PERSONAL_SOCIALS[2].url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Santosh Bista on LinkedIn"
                className="text-[#A39E93] hover:text-[#F4F1EA] transition-colors duration-200 p-1"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>

            {/* Mobile Minimal Menu Trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="lg:hidden flex items-center gap-2.5 py-2.5 px-2 text-[11px] font-medium tracking-[0.2em] text-[#F4F1EA] uppercase whitespace-nowrap"
            >
              <span>{mobileMenuOpen ? 'CLOSE' : 'MENU'}</span>
              <span className="relative flex flex-col justify-center w-5 h-3">
                <span
                  className={`block h-[1px] w-full bg-[#F4F1EA] transition-transform duration-300 ${
                    mobileMenuOpen ? 'rotate-45 translate-y-[0.5px]' : '-translate-y-1'
                  }`}
                />
                <span
                  className={`block h-[1px] w-full bg-[#F4F1EA] transition-transform duration-300 ${
                    mobileMenuOpen ? '-rotate-45 -translate-y-[0.5px]' : 'translate-y-1'
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Smooth Fullscreen Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#080808] flex flex-col justify-between px-6 pt-28 pb-10 transition-all duration-500 ease-out lg:hidden ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-3'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <nav aria-label="Mobile Navigation" className="flex flex-col space-y-5">
          {NAV_ITEMS.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="group flex items-baseline justify-between border-b border-[#F4F1EA]/10 pb-4"
            >
              <span className="font-serif-editorial text-3xl sm:text-4xl text-[#F4F1EA] tracking-wide group-hover:text-[#D4C5A9] transition-colors">
                {item.label}
              </span>
              <span className="font-mono-tabular text-xs text-[#6E6A63]">
                0{idx + 1}
              </span>
            </a>
          ))}
        </nav>

        <div className="pt-6 border-t border-[#F4F1EA]/10 flex flex-col gap-4">
          <div className="text-xs tracking-[0.2em] text-[#6E6A63] uppercase">
            Actor • Director • Theatre Artist
          </div>
          <div className="flex items-center gap-6">
            {PERSONAL_SOCIALS.map((soc) => (
              <a
                key={soc.name}
                href={soc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-[0.18em] uppercase text-[#A39E93] hover:text-[#F4F1EA] transition-colors py-2"
              >
                {soc.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
