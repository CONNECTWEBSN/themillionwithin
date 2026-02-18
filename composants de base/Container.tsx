import * as React from 'react';
import { cn } from '@/lib/utils';

/* ── Types ────────────────────────────────────────────────────── */

type ContainerSize =
  | 'sm'      // 640px  — modaux, articles courts
  | 'md'      // 768px  — contenu texte
  | 'lg'      // 1024px — contenu standard
  | 'xl'      // 1280px — layout large
  | 'full'    // 1320px — max du design system (défaut)
  | 'prose'   // 68ch   — articles, mentions légales
  | 'screen'; // 100%   — pleine largeur sans padding

interface ContainerProps extends React.ComponentPropsWithoutRef<'div'> {
  /** Largeur max du container. Défaut: 'full' (1320px) */
  size?:     ContainerSize;
  /** Padding horizontal adaptatif (défaut: true) */
  padded?:   boolean;
  /** Centrage auto (défaut: true) */
  centered?: boolean;
  /** Élément HTML rendu (défaut: 'div') */
  as?:       React.ElementType;
  className?: string;
  children?:  React.ReactNode;
}

/* ── Max widths ───────────────────────────────────────────────── */

const SIZES: Record<ContainerSize, string> = {
  sm:     'max-w-[640px]',
  md:     'max-w-3xl',       // 48rem = 768px
  lg:     'max-w-5xl',       // 64rem = 1024px
  xl:     'max-w-7xl',       // 80rem = 1280px
  full:   'max-w-[1320px]',  // Design system max
  prose:  'max-w-prose',     // 68ch — lecture optimale
  screen: 'max-w-none',
};

/* ── Padding responsive ───────────────────────────────────────── */
// Résout audit §2.5 : "Padding insuffisant sur mobile"
const PADDING = 'px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12';

/* ── Composant ────────────────────────────────────────────────── */

/**
 * Container — Wrapper de mise en page centré
 *
 * Gère la largeur max et le padding horizontal responsive.
 * Utiliser autour du contenu de chaque section.
 *
 * @example
 * // Standard (1320px)
 * <Container>
 *   <h2>Section</h2>
 * </Container>
 *
 * // Texte prose (articles, CGV)
 * <Container size="prose">
 *   <article>…</article>
 * </Container>
 *
 * // Pleine largeur (hero background, bandes)
 * <Container size="screen" padded={false}>
 *   <HeroBanner />
 * </Container>
 */
const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  function Container(
    {
      size     = 'full',
      padded   = true,
      centered = true,
      as:       Tag = 'div',
      className,
      children,
      ...props
    },
    ref
  ) {
    return (
      <Tag
        ref={ref}
        className={cn(
          'w-full',
          centered && 'mx-auto',
          SIZES[size],
          padded && PADDING,
          className,
        )}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);

Container.displayName = 'Container';
export default Container;
export type { ContainerProps, ContainerSize };
