import { useState } from 'react';

interface MonochromeImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  hoverZoom?: boolean;
  slowZoom?: boolean;
}

export function MonochromeImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  priority = false,
  hoverZoom = false,
  slowZoom = false,
}: MonochromeImageProps) {
  const [hasError, setHasError] = useState(false);

  const bgClass = className.includes('bg-') ? '' : 'bg-[#171717]';
  const fitClass = imgClassName.includes('object-') ? '' : 'object-cover';

  return (
    <div className={`relative overflow-hidden ${bgClass} ${className}`}>
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading={priority ? 'eager' : 'lazy'}
          onError={() => setHasError(true)}
          className={`h-full w-full ${fitClass} grayscale contrast-[1.06] ${
            hoverZoom
              ? 'transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105'
              : ''
          } ${slowZoom ? 'animate-slow-zoom' : ''} ${imgClassName}`}
        />
      ) : (
        <div
          aria-label={alt}
          className="flex h-full w-full flex-col items-center justify-center bg-[#171717] p-8 text-center text-white/70"
        >
          <svg
            viewBox="0 0 64 64"
            className="mb-3 h-10 w-10 stroke-white/30"
            fill="none"
            strokeWidth="1.25"
            aria-hidden="true"
          >
            <rect x="8" y="8" width="48" height="48" />
            <line x1="8" y1="56" x2="56" y2="8" />
            <rect x="20" y="20" width="24" height="24" />
          </svg>
          <span className="font-display text-xs tracking-[0.2em] uppercase text-white/50">
            Arsip Visual NAFA
          </span>
        </div>
      )}
    </div>
  );
}
