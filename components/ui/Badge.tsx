import * as React from 'react';
import { cn } from '@/lib/utils';

type BadgeVariant = 'brand' | 'success' | 'gold' | 'dark' | 'outline' | 'popular' | 'muted';
type BadgeSize = 'sm' | 'md';

interface BadgeProps extends React.ComponentPropsWithoutRef<'span'> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  icon?: React.ReactNode;
  dot?: boolean;
}

const VARIANTS: Record<BadgeVariant, string> = {
  brand: 'bg-primary-100 text-primary-800',
  success: 'bg-secondary-100 text-secondary-800',
  gold: 'bg-gold-100 text-gold-700',
  dark: 'bg-neutral-800 text-white',
  outline: 'bg-transparent border border-primary-300 text-primary-700',
  popular: 'bg-gradient-to-r from-gold-300 to-gold-500 text-[#261E16] font-bold shadow-gold-sm',
  muted: 'bg-neutral-100 text-neutral-500',
};

const SIZES: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 text-[11px] gap-1',
  md: 'px-2.5 py-1 text-xs gap-1.5',
};

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  function Badge({ variant = 'brand', size = 'md', icon, dot, className, children, ...props }, ref) {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-full font-semibold leading-none tracking-wide whitespace-nowrap',
          VARIANTS[variant],
          SIZES[size],
          className,
        )}
        {...props}
      >
        {dot && <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70 flex-shrink-0" aria-hidden />}
        {!dot && icon && <span className="flex-shrink-0" aria-hidden>{icon}</span>}
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
export { Badge };
export default Badge;
