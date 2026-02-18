import { forwardRef } from 'react';
import Link from 'next/link';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

/* ── Types ─────────────────────────────────────────────────── */
export type ButtonVariant =
  | 'primary' | 'secondary' | 'gold'
  | 'outline' | 'outline-dark' | 'ghost' | 'link' | 'cta';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  fullWidth?: boolean;
  href?: string;
  external?: boolean;
}

/* ── Styles ────────────────────────────────────────────────── */
const BASE = [
  'relative inline-flex items-center justify-center',
  'gap-2 font-semibold leading-none whitespace-nowrap select-none',
  'no-underline border-2 border-transparent cursor-pointer',
  'transition-all duration-200 ease-out',
  'focus-visible:outline-none focus-visible:ring-2',
  'focus-visible:ring-primary-500 focus-visible:ring-offset-2',
  'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
  'active:scale-[0.97]',
].join(' ');

const VARIANTS: Record<ButtonVariant, string> = {
  primary: [
    'bg-primary-500 text-white border-primary-500',
    'shadow-[0_2px_8px_0_rgb(249_115_22/0.20)]',
    'hover:bg-primary-600 hover:border-primary-600',
    'hover:shadow-[0_4px_16px_0_rgb(249_115_22/0.28)] hover:-translate-y-px',
  ].join(' '),

  secondary: [
    'bg-secondary-500 text-white border-secondary-500',
    'shadow-[0_2px_8px_0_rgb(5_153_80/0.20)]',
    'hover:bg-secondary-600 hover:border-secondary-600',
    'hover:shadow-[0_4px_16px_0_rgb(5_153_80/0.28)] hover:-translate-y-px',
  ].join(' '),

  gold: [
    'bg-gold-400 text-[#261E16] border-gold-400 font-bold',
    'shadow-[0_2px_8px_0_rgb(245_197_24/0.24)]',
    'hover:bg-gold-500 hover:border-gold-500',
    'hover:shadow-[0_4px_16px_0_rgb(245_197_24/0.32)] hover:-translate-y-px',
  ].join(' '),

  outline: [
    'bg-transparent text-primary-600 border-primary-400',
    'hover:bg-primary-50 hover:border-primary-500 hover:text-primary-700',
  ].join(' '),

  'outline-dark': [
    'bg-transparent text-white border-white/60',
    'hover:bg-white/10 hover:border-white/90',
  ].join(' '),

  ghost: [
    'bg-transparent text-neutral-700 border-transparent',
    'hover:bg-neutral-100 hover:text-neutral-900',
  ].join(' '),

  link: [
    'bg-transparent text-primary-600 border-transparent',
    'underline-offset-4 hover:underline hover:text-primary-700',
    'active:scale-100 px-0 h-auto',
  ].join(' '),

  cta: [
    'bg-primary-500 text-white border-primary-500 font-bold',
    'shadow-[0_4px_16px_0_rgb(249_115_22/0.28)]',
    'animate-[pulse-brand_2.4s_ease-in-out_infinite]',
    'hover:bg-primary-600 hover:shadow-[0_8px_32px_0_rgb(249_115_22/0.32)]',
    'hover:-translate-y-0.5 hover:[animation-play-state:paused]',
  ].join(' '),
};

const SIZES: Record<ButtonSize, string> = {
  xs: 'h-8     px-3    text-xs   rounded-lg  gap-1.5',
  sm: 'h-9     px-4    text-sm   rounded-xl  gap-1.5',
  md: 'h-11    px-6    text-base rounded-xl  gap-2',
  lg: 'h-[52px] px-8   text-lg   rounded-2xl gap-2',
  xl: 'h-[60px] px-10  text-xl   rounded-2xl gap-2.5',
};

/* ── Spinner ──────────────────────────────────────────────── */
function Spinner({ size }: { size: ButtonSize }) {
  const dim: Record<ButtonSize, number> = { xs: 12, sm: 14, md: 16, lg: 18, xl: 20 };
  return (
    <svg aria-hidden="true" width={dim[size]} height={dim[size]}
      viewBox="0 0 24 24" fill="none" className="animate-spin shrink-0">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.5"
        strokeDasharray="32" strokeDashoffset="12" opacity="0.35" />
      <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor"
        strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

/* ── Component ────────────────────────────────────────────── */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary', size = 'md',
      icon, iconPosition = 'left',
      loading = false, fullWidth = false,
      href, external = false,
      className, children, disabled,
      ...props
    },
    ref
  ) => {
    const classes = cn(BASE, VARIANTS[variant], SIZES[size], fullWidth && 'w-full', className);

    const inner = (
      <>
        {loading && <Spinner size={size} />}
        {!loading && icon && iconPosition === 'left' && (
          <span aria-hidden="true" className="shrink-0">{icon}</span>
        )}
        {children && <span>{children}</span>}
        {!loading && icon && iconPosition === 'right' && (
          <span aria-hidden="true" className="shrink-0">{icon}</span>
        )}
      </>
    );

    if (href) {
      if (external) {
        return (
          <a href={href} className={classes}
            target="_blank" rel="noopener noreferrer"
            aria-disabled={disabled || loading}>
            {inner}
          </a>
        );
      }
      return (
        <Link href={href} className={classes}
          aria-disabled={disabled || loading}>
          {inner}
        </Link>
      );
    }

    return (
      <button ref={ref} disabled={disabled || loading}
        aria-busy={loading} className={classes} {...props}>
        {inner}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
