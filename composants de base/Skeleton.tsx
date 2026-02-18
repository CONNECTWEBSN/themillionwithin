import * as React from 'react';
import { cn } from '@/lib/utils';

/* ── Types ────────────────────────────────────────────────────── */

interface SkeletonProps extends React.ComponentPropsWithoutRef<'div'> {
  /** Forme — text (pleine largeur), circle (carré arrondi), rect (rectangle) */
  variant?: 'text' | 'circle' | 'rect' | 'card';
  /** Largeur (ex: 'w-32', 'w-full') */
  width?:   string;
  /** Hauteur (ex: 'h-4', 'h-48') */
  height?:  string;
  /** Lignes de texte (variant="text" uniquement) */
  lines?:   number;
}

/* ── Shimmer Animation ────────────────────────────────────────── */
const shimmer = [
  'bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200',
  'bg-[length:200%_100%]',
  'animate-shimmer',
].join(' ');

/* ── Composants ───────────────────────────────────────────────── */

/**
 * Skeleton — Placeholder de chargement
 *
 * @example
 * // Texte multi-lignes
 * <Skeleton variant="text" lines={3} />
 *
 * // Avatar
 * <Skeleton variant="circle" width="w-12" height="h-12" />
 *
 * // Carte complète
 * <Skeleton variant="card" height="h-64" />
 */
const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  function Skeleton({ variant = 'rect', width, height, lines, className, ...props }, ref) {

    // Multi-lines text skeleton
    if (variant === 'text' && lines && lines > 1) {
      return (
        <div ref={ref} className={cn('space-y-2', className)} aria-hidden="true" {...props}>
          {Array.from({ length: lines }).map((_, i) => (
            <div
              key={i}
              className={cn(
                shimmer,
                'h-4 rounded',
                // Dernière ligne plus courte (naturel)
                i === lines - 1 ? 'w-3/4' : 'w-full',
              )}
            />
          ))}
        </div>
      );
    }

    return (
      <div
        ref={ref}
        aria-hidden="true"
        className={cn(
          shimmer,
          // Shapes
          variant === 'circle' && 'rounded-full aspect-square',
          variant === 'text'   && 'rounded h-4',
          variant === 'rect'   && 'rounded-xl',
          variant === 'card'   && 'rounded-2xl',
          // Dimensions custom
          width  ?? (variant === 'circle' ? 'w-12' : 'w-full'),
          height ?? (variant === 'card' ? 'h-48' : variant === 'text' ? 'h-4' : 'h-8'),
          className,
        )}
        {...props}
      />
    );
  }
);
Skeleton.displayName = 'Skeleton';

/* ── Skeleton Card pré-composé ────────────────────────────────── */
function SkeletonCard({ className }: { className?: string }) {
  return (
    <div className={cn('rounded-2xl border border-neutral-200 p-6 space-y-4', className)} aria-hidden="true">
      <Skeleton variant="rect" height="h-40" />
      <Skeleton variant="text" lines={2} />
      <div className="flex gap-2 pt-1">
        <Skeleton width="w-24" height="h-9" className="rounded-xl" />
        <Skeleton width="w-20" height="h-9" className="rounded-xl" />
      </div>
    </div>
  );
}

function SkeletonAvatar({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const dims = { sm: 'w-8 h-8', md: 'w-12 h-12', lg: 'w-16 h-16' };
  return <Skeleton variant="circle" className={dims[size]} />;
}

export default Skeleton;
export { Skeleton, SkeletonCard, SkeletonAvatar };
export type { SkeletonProps };
