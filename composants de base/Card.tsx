import * as React from 'react';
import { cn } from '@/lib/utils';

/* ── Types ────────────────────────────────────────────────────── */

type CardVariant =
  | 'default'     // Blanc, bordure neutre
  | 'elevated'    // Blanc, ombre portée
  | 'featured'    // Orange brand
  | 'gold'        // Bordure dorée premium
  | 'warm'        // Fond ardoise chaud
  | 'dark'        // Fond sombre
  | 'ghost';      // Transparent, bordure pointillée

type CardRadius = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

interface CardProps extends React.ComponentPropsWithoutRef<'div'> {
  variant?:    CardVariant;
  radius?:     CardRadius;
  /** Active l'effet lift au hover */
  hoverable?:  boolean;
  /** Supprime le padding interne */
  noPadding?:  boolean;
  /** Padding personnalisé (ex: 'p-4', 'px-6 py-8') */
  padding?:    string;
  /** Ajoute overflow-hidden (défaut: true) */
  overflow?:   boolean;
  /** Rend la carte cliquable (cursor-pointer + focus ring) */
  clickable?:  boolean;
  asChild?:    boolean;
}

/* ── Variants ─────────────────────────────────────────────────── */

const VARIANTS: Record<CardVariant, string> = {
  default: [
    'bg-white border border-neutral-200',
  ].join(' '),

  elevated: [
    'bg-white border border-neutral-100',
    'shadow-md',
  ].join(' '),

  featured: [
    'bg-primary-500 border-2 border-primary-500 text-white',
    'shadow-brand-lg',
  ].join(' '),

  gold: [
    'bg-white border-2 border-gold-400',
    'shadow-gold-md',
  ].join(' '),

  warm: [
    'bg-neutral-50 border border-neutral-200',
    'shadow-warm-lg',
  ].join(' '),

  dark: [
    'bg-neutral-800 border border-neutral-700 text-white',
    'shadow-2xl',
  ].join(' '),

  ghost: [
    'bg-transparent border border-dashed border-neutral-300',
  ].join(' '),
};

const RADII: Record<CardRadius, string> = {
  sm:  'rounded-lg',
  md:  'rounded-xl',
  lg:  'rounded-2xl',
  xl:  'rounded-[20px]',
  '2xl': 'rounded-3xl',
};

const HOVER: Record<CardVariant, string> = {
  default:  'hover:shadow-lg hover:-translate-y-1 hover:border-neutral-300',
  elevated: 'hover:shadow-xl hover:-translate-y-1.5',
  featured: 'hover:shadow-brand-xl hover:-translate-y-1',
  gold:     'hover:shadow-gold-md hover:-translate-y-1',
  warm:     'hover:shadow-xl hover:-translate-y-1.5',
  dark:     'hover:shadow-3xl hover:-translate-y-1',
  ghost:    'hover:bg-neutral-50 hover:border-neutral-400',
};

/* ── Card Root ────────────────────────────────────────────────── */

/**
 * Card — Conteneur polyvalent
 *
 * @example
 * // Carte standard
 * <Card>Contenu</Card>
 *
 * // Carte pricing mise en avant
 * <Card variant="featured" hoverable>
 *   <CardHeader>…</CardHeader>
 *   <CardBody>…</CardBody>
 *   <CardFooter>…</CardFooter>
 * </Card>
 *
 * // Carte cliquable
 * <Card as="a" href="/page" clickable hoverable>…</Card>
 */
const Card = React.forwardRef<HTMLDivElement, CardProps>(function Card(
  {
    variant    = 'default',
    radius     = 'xl',
    hoverable  = false,
    noPadding  = false,
    padding,
    overflow   = true,
    clickable  = false,
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
        // Base
        'relative',
        // Overflow
        overflow && 'overflow-hidden',
        // Variante
        VARIANTS[variant],
        // Radius
        RADII[radius],
        // Padding
        !noPadding && !padding && 'p-6',
        padding,
        // Hover
        hoverable && [
          'transition-all duration-250 ease-smooth will-change-transform',
          HOVER[variant],
        ],
        // Clickable
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

/* ── Sub-composants ───────────────────────────────────────────── */

interface CardSectionProps extends React.ComponentPropsWithoutRef<'div'> {
  className?: string;
}

/**
 * CardMedia — Zone image/vidéo sans padding (toujours en haut)
 */
const CardMedia = React.forwardRef<HTMLDivElement, CardSectionProps>(
  function CardMedia({ className, children, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={cn('-mx-6 -mt-6 mb-5 overflow-hidden', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
CardMedia.displayName = 'CardMedia';

/**
 * CardHeader — Titre + eyebrow + badge
 */
const CardHeader = React.forwardRef<HTMLDivElement, CardSectionProps>(
  function CardHeader({ className, children, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={cn('mb-4 space-y-1.5', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
CardHeader.displayName = 'CardHeader';

/**
 * CardTitle — Titre de la carte
 */
const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<'h3'>
>(function CardTitle({ className, children, ...props }, ref) {
  return (
    <h3
      ref={ref}
      className={cn(
        'font-heading text-xl font-bold text-neutral-900 leading-tight',
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
});
CardTitle.displayName = 'CardTitle';

/**
 * CardDescription — Sous-titre / description courte
 */
const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<'p'>
>(function CardDescription({ className, children, ...props }, ref) {
  return (
    <p
      ref={ref}
      className={cn('text-sm text-neutral-500 leading-relaxed', className)}
      {...props}
    >
      {children}
    </p>
  );
});
CardDescription.displayName = 'CardDescription';

/**
 * CardBody — Contenu principal (flex-grow si dans une liste de cartes égales)
 */
const CardBody = React.forwardRef<HTMLDivElement, CardSectionProps>(
  function CardBody({ className, children, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={cn('flex-1', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
CardBody.displayName = 'CardBody';

/**
 * CardFooter — Actions, CTA — séparé visuellement
 */
const CardFooter = React.forwardRef<HTMLDivElement, CardSectionProps>(
  function CardFooter({ className, children, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={cn(
          'mt-5 pt-5 border-t border-current/10',
          'flex items-center gap-3',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
CardFooter.displayName = 'CardFooter';

/**
 * CardDivider — Séparateur interne discret
 */
function CardDivider({ className }: { className?: string }) {
  return (
    <hr className={cn('border-t border-current/10 my-4', className)} />
  );
}

/* ── Exports ──────────────────────────────────────────────────── */
export default Card;
export {
  Card,
  CardMedia,
  CardHeader,
  CardTitle,
  CardDescription,
  CardBody,
  CardFooter,
  CardDivider,
};
export type { CardProps, CardVariant, CardRadius };
