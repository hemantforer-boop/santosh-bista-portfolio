import React, { useEffect, useState, useRef } from 'react';

type CursorMode = 'default' | 'link' | 'image' | 'project';

export const CustomCursor: React.FC = () => {
  const [isFinePointer, setIsFinePointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mode, setMode] = useState<CursorMode>('default');
  const [label, setLabel] = useState<string>('VIEW PROJECT');

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!mediaQuery.matches || reducedMotion.matches) {
      setIsFinePointer(false);
      return;
    }
    setIsFinePointer(true);

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectEl = target.closest('[data-cursor="project"]') as HTMLElement | null;
      const imageEl = target.closest('[data-cursor="image"]') as HTMLElement | null;
      const linkEl = target.closest('a, button, [role="button"], input, textarea, select') as HTMLElement | null;

      if (projectEl) {
        setMode('project');
        setLabel(projectEl.getAttribute('data-cursor-label') || 'VIEW PROJECT');
      } else if (linkEl) {
        setMode('link');
      } else if (imageEl) {
        setMode('image');
      } else {
        setMode('default');
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    let rafId: number;
    const animateRing = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }
      rafId = requestAnimationFrame(animateRing);
    };
    rafId = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, [isVisible]);

  if (!isFinePointer) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[100] transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* Precision center point */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 -ml-[3px] -mt-[3px] w-[6px] h-[6px] rounded-full bg-[#F4F1EA] mix-blend-difference transition-transform duration-150 ease-out"
      />

      {/* Contextual ring / project pill */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
      >
        <div
          className={`flex items-center justify-center rounded-full transition-all duration-300 ease-out ${
            mode === 'project'
              ? 'px-3.5 py-1.5 bg-[#F4F1EA] text-[#080808] shadow-lg scale-100'
              : mode === 'image'
              ? 'w-12 h-12 border border-[#F4F1EA]/40 bg-[#F4F1EA]/5 scale-100'
              : mode === 'link'
              ? 'w-9 h-9 border border-[#D4C5A9]/60 bg-transparent scale-100'
              : 'w-5 h-5 border border-[#F4F1EA]/20 bg-transparent scale-75 opacity-0'
          }`}
        >
          {mode === 'project' && (
            <span className="font-mono-tabular text-[10px] font-medium tracking-[0.18em] uppercase whitespace-nowrap">
              {label}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
