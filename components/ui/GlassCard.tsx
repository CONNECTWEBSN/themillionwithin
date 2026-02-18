'use client';

import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

export interface GlassCardProps extends ComponentPropsWithoutRef<'div'> {
  variant?: 'light' | 'dark' | 'brand' | 'gold';
  padding?: 'sm' | 'md' | 'lg';
  hoverable?: boolean;
  glow?: boolean;
}

const VARIANTS = {
  light: 'bg-white/70 backdrop-blur-xl border border-white/60 shadow-lg shadow-black/5',
  dark:  'bg-neutral-900/60 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/20 text-white',
  brand: 'bg-primary-500/10 backdrop-blur-xl border border-primary-400/30 shadow-lg shadow-primary-500/10',
  gold:  'bg-gold-400/10 backdrop-blur-xl border border-gold-400/40 shadow-lg shadow-gold-400/10',
};

const PADDINGS = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  function GlassCard(
    {
      variant = 'light',
      padding = 'md',
      hoverable = false,
      glow = false,
      className,
      children,
      ...props
    },
    ref
  ) {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-2xl transition-all duration-300',
          VARIANTS[variant],
          PADDINGS[padding],
          hoverable && 'hover:-translate-y-1 hover:shadow-xl cursor-pointer',
          glow && variant === 'brand' && 'hover:shadow-brand-lg',
          glow && variant === 'gold' && 'hover:shadow-gold-md',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassCard.displayName = 'GlassCard';
export { GlassCard };
export default GlassCard;
