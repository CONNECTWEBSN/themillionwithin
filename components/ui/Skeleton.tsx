import * as React from 'react';
import { cn } from '@/lib/utils';

interface SkeletonProps extends React.ComponentPropsWithoutRef<'div'> {
  variant?: 'text' | 'circle' | 'rect' | 'card';
  width?: string;
  height?: string;
  lines?: number;
}

const shimmer = [
  'bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200',
  'bg-[length:200%_100%]',
  'animate-shimmer',
].join(' ');

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  function Skeleton({ variant = 'rect', width, height, lines, className, ...props }, ref) {
    if (variant === 'text' && lines && lines > 1) {
      return (
        <div ref={ref} className={cn('space-y-2', className)} aria-hidden {...props}>
          {Array.from({ length: lines }).map((_, i) => (
            <div
              key={i}
              className={cn(shimmer, 'h-4 rounded', i === lines - 1 ? 'w-3/4' : 'w-full')}
            />
          ))}
        </div>
      );
    }
    return (
      <div
        ref={ref}
        aria-hidden
        className={cn(
          shimmer,
          variant === 'circle' && 'rounded-full aspect-square',
          variant === 'text' && 'rounded h-4',
          variant === 'rect' && 'rounded-xl',
          variant === 'card' && 'rounded-2xl',
          width ?? (variant === 'circle' ? 'w-12' : 'w-full'),
          height ?? (variant === 'card' ? 'h-48' : variant === 'text' ? 'h-4' : 'h-8'),
          className,
        )}
        {...props}
      />
    );
  }
);

Skeleton.displayName = 'Skeleton';
export default Skeleton;
