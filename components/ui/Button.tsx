'use client';

import { forwardRef } from 'react';
import Link from 'next/link';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

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
  primary: 'bg-primary-500 text-white border-primary-500 shadow-brand-sm hover:bg-primary-600 hover:shadow-brand-md hover:-translate-y-px',
  secondary: 'bg-secondary-500 text-white border-secondary-500 shadow-success-sm hover:bg-secondary-600 hover:shadow-success-md hover:-translate-y-px',
  gold: 'bg-gold-400 text-[#261E16] border-gold-400 font-bold shadow-gold-sm hover:bg-gold-500 hover:shadow-gold-md hover:-translate-y-px',
  outline: 'bg-transparent text-primary-600 border-primary-400 hover:bg-primary-50 hover:border-primary-500 hover:text-primary-700',
  'outline-dark': 'bg-transparent text-white border-white/60 hover:bg-white/10 hover:border-white/90',
  ghost: 'bg-transparent text-neutral-700 border-transparent hover:bg-neutral-100 hover:text-neutral-900',
  link: 'bg-transparent text-primary-600 border-transparent underline-offset-4 hover:underline hover:text-primary-700 px-0 h-auto active:scale-100',
  cta: 'bg-primary-500 text-white border-primary-500 font-bold shadow-brand-lg hover:bg-primary-600 hover:shadow-brand-xl hover:-translate-y-0.5',
};

const SIZES: Record<ButtonSize, string> = {
  xs: 'h-8 px-3 text-xs rounded-xl gap-1.5',
  sm: 'h-9 px-4 text-sm rounded-xl gap-1.5',
  md: 'h-11 px-6 text-base rounded-xl gap-2',
  lg: 'h-11 px-6 text-base md:h-[52px] md:px-8 md:text-lg rounded-xl gap-2',
  xl: 'h-[52px] px-8 text-lg md:h-[60px] md:px-10 md:text-xl rounded-2xl gap-2.5',
};

function Spinner({ size }: { size: ButtonSize }) {
  const dim: Record<ButtonSize, number> = { xs: 12, sm: 14, md: 16, lg: 18, xl: 20 };
  return (
    <svg aria-hidden width={dim[size]} height={dim[size]} viewBox="0 0 24 24" fill="none" className="animate-spin shrink-0">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.5" strokeDasharray="32" strokeDashoffset="12" opacity="0.35" />
      <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

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
        {!loading && icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
        {children && <span>{children}</span>}
        {!loading && icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
      </>
    );
    if (href) {
      if (external) {
        return <a href={href} className={classes} target="_blank" rel="noopener noreferrer" aria-disabled={disabled || loading}>{inner}</a>;
      }
      return <Link href={href} className={classes} aria-disabled={disabled || loading}>{inner}</Link>;
    }
    return (
      <button ref={ref} disabled={disabled || loading} aria-busy={loading} className={classes} {...props}>
        {inner}
      </button>
    );
  }
);

Button.displayName = 'Button';
export { Button };
export default Button;
