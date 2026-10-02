import React, { useState } from 'react';

interface CinematicImageProps {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  objectPosition?: string;
  priority?: boolean;
  fallbackLabel?: string;
  cursorLabel?: string;
}

export const CinematicImage: React.FC<CinematicImageProps> = ({
  src,
  fallbackSrc,
  alt,
  className = '',
  containerClassName = '',
  objectPosition = 'center 25%',
  priority = false,
  fallbackLabel = 'SANTOSH BISTA',
  cursorLabel,
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [loaded, setLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setLoaded(false);
    } else {
      setHasError(true);
    }
  };

  return (
    <div
      className={`relative overflow-hidden bg-[#111110] ${containerClassName}`}
      data-cursor={cursorLabel ? 'project' : 'image'}
      data-cursor-label={cursorLabel || undefined}
    >
      {!hasError && currentSrc ? (
        <>
          {!loaded && (
            <div
              className="absolute inset-0 bg-[#141413] animate-pulse"
              aria-hidden="true"
            />
          )}
          <img
            src={currentSrc}
            alt={alt}
            referrerPolicy="no-referrer"
            loading={priority ? 'eager' : 'lazy'}
            fetchPriority={priority ? 'high' : 'auto'}
            decoding={priority ? 'sync' : 'async'}
            onLoad={() => setLoaded(true)}
            onError={handleError}
            style={{ objectPosition }}
            className={`w-full h-full object-cover transition-all duration-700 ease-out ${
              loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.02]'
            } ${className}`}
          />
        </>
      ) : (
        <div className="w-full h-full min-h-[240px] flex flex-col items-center justify-center p-8 bg-[#111110] border border-[#F4F1EA]/10 text-center">
          <span className="font-mono-tabular text-[11px] tracking-[0.25em] text-[#6E6A63] uppercase mb-2">
            {fallbackLabel}
          </span>
          <p className="font-serif-editorial italic text-lg text-[#A39E93] max-w-xs">
            {alt}
          </p>
        </div>
      )}
    </div>
  );
};
