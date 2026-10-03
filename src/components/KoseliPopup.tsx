import React, { useEffect, useState } from "react";

const KOSELI_POSTER =
  "https://scontent.fktm17-1.fna.fbcdn.net/v/t39.30808-6/834168354_1422985776707331_5650109891848172682_n.jpg?stp=dst-jpg_tt6&cstp=mx1448x2048&ctp=s1448x2048&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=H9ofqkoOGsUQ7kNvwHzUArW&_nc_oc=Ado05EJ79xxNebznjSuRQnkUSGGfMsbSblHpHIwVaO-eodYPAneyAy_94BWAk0V6_kbGcoe536kGfPZmeLGZGSA4&_nc_zt=23&_nc_ht=scontent.fktm17-1.fna&_nc_gid=HULKEE5x-cFIDiDpj39C0Q&_nc_ss=7b2a8&oh=00_AQNBSV804iB5KS_Ys5LVG_V3wqg39ft8N5uXMOB6rABABQ&oe=6AC6BE97";

export default function KoseliPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("koseli-popup-shown");

    if (!alreadyShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("koseli-popup-shown", "true");
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closePopup = () => {
    setIsClosing(true);

    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 350);
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 transition-all duration-500 ${
        isClosing ? "opacity-0" : "opacity-100"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="KOSELI upcoming musical film"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
        onClick={closePopup}
      />

      {/* Soft cinematic glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px]
          -translate-x-1/2 -translate-y-1/2 rounded-full
          bg-white/[0.035] blur-[120px]"
        />
      </div>

      {/* Popup */}
      <div
        className={`relative z-10 flex max-h-[94vh] w-full max-w-[1100px]
        flex-col overflow-hidden rounded-2xl border border-white/10
        bg-[#0b0b0b] shadow-2xl transition-all duration-700 ease-out ${
          isClosing
            ? "scale-95 translate-y-4 opacity-0"
            : "scale-100 translate-y-0 opacity-100"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-7">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-white/45">
              Upcoming Musical Film
            </p>

            <h2 className="mt-1 text-lg font-medium tracking-tight text-white">
              KOSELI
            </h2>
          </div>

          <button
            onClick={closePopup}
            aria-label="Close KOSELI announcement"
            className="group flex h-10 w-10 items-center justify-center
            rounded-full border border-white/10 bg-white/[0.04]
            text-white/60 transition-all duration-300
            hover:border-white/25 hover:bg-white/10 hover:text-white"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M6 6L18 18M18 6L6 18" />
            </svg>
          </button>
        </div>

        {/* Main content */}
        <div className="grid min-h-0 flex-1 overflow-auto md:grid-cols-[1fr_0.8fr]">
          
          {/* Poster */}
          <div className="relative flex items-center justify-center bg-black p-4 sm:p-8">
            <div className="relative max-h-[65vh] overflow-hidden rounded-lg shadow-2xl">
              <img
                src={KOSELI_POSTER}
                alt="KOSELI upcoming musical film poster"
                className="block max-h-[65vh] w-auto max-w-full
                object-contain transition-transform duration-1000
                hover:scale-[1.015]"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-white/[0.03]" />
            </div>
          </div>

          {/* Information */}
          <div className="flex flex-col justify-center px-6 py-8 sm:px-10 md:py-12">
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/35">
              A new story is coming
            </p>

            <h3 className="mt-4 text-5xl font-light tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              KOSELI
            </h3>

            <div className="mt-6 h-px w-12 bg-white/30" />

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/55">
              An upcoming musical film featuring Santosh Bista.
              Discover the poster and stay tuned for the release.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <button
                onClick={() => {
                  window.open(
                    KOSELI_POSTER,
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
                className="rounded-full bg-white px-6 py-3 text-xs
                font-medium uppercase tracking-[0.15em] text-black
                transition-all duration-300 hover:scale-[1.03]
                hover:bg-white/90"
              >
                View Poster
              </button>

              <button
                onClick={closePopup}
                className="rounded-full border border-white/15 px-6 py-3
                text-xs font-medium uppercase tracking-[0.15em]
                text-white/65 transition-all duration-300
                hover:border-white/30 hover:text-white"
              >
                Continue
              </button>
            </div>

            <p className="mt-8 text-[10px] uppercase tracking-[0.2em] text-white/25">
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}