import * as React from 'react';
import { cn } from '@/lib/utils';

type CardVariant = 'default' | 'elevated' | 'featured' | 'gold' | 'warm' | 'dark' | 'ghost';
type CardRadius = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

interface CardProps extends React.ComponentPropsWithoutRef<'div'> {
  variant?: CardVariant;
  radius?: CardRadius;
  hoverable?: boolean;
  noPadding?: boolean;
  padding?: string;
  overflow?: boolean;
  clickable?: boolean;
}

const VARIANTS: Record<CardVariant, string> = {
  default: 'bg-white border border-neutral-200',
  elevated: 'bg-white border border-neutral-100 shadow-md',
  featured: 'bg-primary-500 border-2 border-primary-500 text-white shadow-brand-lg',
  gold: 'bg-white border-2 border-gold-400 shadow-gold-md',
  warm: 'bg-neutral-50 border border-neutral-200 shadow-warm-lg',
  dark: 'bg-neutral-800 border border-neutral-700 text-white shadow-2xl',
  ghost: 'bg-transparent border border-dashed border-neutral-300',
};

const RADII: Record<CardRadius, string> = {
  sm: 'rounded-lg', md: 'rounded-xl', lg: 'rounded-2xl', xl: 'rounded-[20px]', '2xl': 'rounded-3xl',
};

const HOVER: Record<CardVariant, string> = {
  default: 'hover:shadow-lg hover:-translate-y-1 hover:border-neutral-300',
  elevated: 'hover:shadow-xl hover:-translate-y-1.5',
  featured: 'hover:shadow-brand-xl hover:-translate-y-1',
  gold: 'hover:shadow-gold-md hover:-translate-y-1',
  warm: 'hover:shadow-xl hover:-translate-y-1.5',
  dark: 'hover:shadow-3xl hover:-translate-y-1',
  ghost: 'hover:bg-neutral-50 hover:border-neutral-400',
};

const Card = React.forwardRef<HTMLDivElement, CardProps>(function Card(
  { variant = 'default', radius = 'xl', hoverable = false, noPadding = false, padding, overflow = true, clickable = false, className, children, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn(
        'relative',
        overflow && 'overflow-hidden',
        VARIANTS[variant],
        RADII[radius],
        !noPadding && !padding && 'p-6',
        padding,
        hoverable && 'transition-all duration-250 will-change-transform ' + HOVER[variant],
        clickable && 'cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
        className,
      )}
      {...(clickable && { tabIndex: 0, role: 'button' })}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<'div'>>(
  (props, ref) => <div ref={ref} className="mb-4 space-y-1.5" {...props} />
);
const CardTitle = React.forwardRef<HTMLHeadingElement, React.ComponentPropsWithoutRef<'h3'>>(
  (props, ref) => <h3 ref={ref} className="font-heading text-xl font-bold text-neutral-900 leading-tight" {...props} />
);
const CardDescription = React.forwardRef<HTMLParagraphElement, React.ComponentPropsWithoutRef<'p'>>(
  (props, ref) => <p ref={ref} className="text-sm text-neutral-500 leading-relaxed" {...props} />
);
const CardBody = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<'div'>>(
  (props, ref) => <div ref={ref} className="flex-1" {...props} />
);
const CardFooter = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<'div'>>(
  (props, ref) => <div ref={ref} className="mt-5 pt-5 border-t border-current/10 flex items-center gap-3" {...props} />
);

export default Card;
export { Card, CardHeader, CardTitle, CardDescription, CardBody, CardFooter };
