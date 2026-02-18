import { cn } from '@/lib/utils';

interface GradientBackgroundProps {
  className?: string;
  variant?: 'hero' | 'section' | 'dark';
  showBlobs?: boolean;
  showPattern?: boolean;
}

export function GradientBackground({
  className,
  variant = 'hero',
  showBlobs = true,
  showPattern = true,
}: GradientBackgroundProps) {
  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)} aria-hidden>
      {/* Gradient de base */}
      {variant === 'hero' && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_40%,#FFF4E8_0%,#FDFCFB_50%,#F0EBE4_100%)]" />
      )}
      {variant === 'section' && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_30%_50%,#FFF4E8_0%,transparent_70%)]" />
      )}
      {variant === 'dark' && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,#3D1800_0%,#130E09_60%)]" />
      )}

      {/* Blobs animés */}
      {showBlobs && (
        <>
          <div
            className="absolute -top-1/4 -right-1/4 w-[70%] aspect-square rounded-full opacity-30 blur-3xl"
            style={{
              background: 'radial-gradient(circle, #FFA94D 0%, transparent 70%)',
              animation: 'blob-float 20s ease-in-out infinite',
            }}
          />
          <div
            className="absolute -bottom-1/4 -left-1/4 w-[60%] aspect-square rounded-full opacity-20 blur-3xl"
            style={{
              background: 'radial-gradient(circle, #F5C518 0%, transparent 70%)',
              animation: 'blob-float 25s ease-in-out infinite reverse',
            }}
          />
          {variant === 'hero' && (
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] aspect-square rounded-full opacity-15 blur-3xl"
              style={{
                background: 'radial-gradient(circle, #C99B6E 0%, transparent 70%)',
                animation: 'blob-float 30s ease-in-out infinite 5s',
              }}
            />
          )}
        </>
      )}

      {/* Motif géométrique africain (subtil) */}
      {showPattern && (
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.035]"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <defs>
            <pattern id="african-geo" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              {/* Losange central */}
              <polygon points="30,5 55,30 30,55 5,30" fill="none" stroke="#8B5E2E" strokeWidth="1" />
              {/* Croix intérieure */}
              <line x1="30" y1="5" x2="30" y2="55" stroke="#8B5E2E" strokeWidth="0.5" />
              <line x1="5" y1="30" x2="55" y2="30" stroke="#8B5E2E" strokeWidth="0.5" />
              {/* Petits triangles aux coins */}
              <polygon points="0,0 12,0 0,12" fill="#F97316" opacity="0.3" />
              <polygon points="60,60 48,60 60,48" fill="#F97316" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#african-geo)" />
        </svg>
      )}

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '256px 256px',
        }}
      />
    </div>
  );
}

export default GradientBackground;
