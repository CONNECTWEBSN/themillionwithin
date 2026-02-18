import * as React from 'react';
import { cn } from '@/lib/utils';
import Container from './Container';
import type { ContainerSize } from './Container';

/* ── Types ────────────────────────────────────────────────────── */

type SectionBackground =
  | 'white'   // Fond blanc pur
  | 'warm'    // Fond ardoise chaud (#FDFCFB) — légèrement warm
  | 'tinted'  // Fond ardoise (#F8F5F2) — sections alternées
  | 'brand'   // Fond orange très clair (#FFF4E8)
  | 'dark'    // Fond sombre (#261E16)
  | 'darker'  // Fond très sombre (#130E09) — footer
  | 'gradient-hero'  // Radial gradient chaleureux (hero)
  | 'gradient-cta'   // Gradient sombre (CTA final)
  | 'none';   // Pas de fond (transparent, pour sections superposées)

type SectionSpacing =
  | 'none'    // 0
  | 'sm'      // py-16 (64px mobile) → py-16
  | 'md'      // py-16 md:py-20 (standard)
  | 'lg'      // py-16 md:py-24 (sections importantes)
  | 'xl'      // py-20 md:py-32 (hero, CTA final)
  | 'hero';   // py-24 md:py-40 (hero pleine hauteur)

interface SectionProps extends React.ComponentPropsWithoutRef<'section'> {
  /** Fond de la section */
  background?:    SectionBackground;
  /** Espacement vertical */
  spacing?:       SectionSpacing;
  /** Largeur du container interne */
  containerSize?: ContainerSize;
  /** Désactive le Container interne (si tu veux contrôler le layout toi-même) */
  noContainer?:   boolean;
  /** Grain texture sur les fonds sombres */
  grain?:         boolean;
  /** ID pour les ancres de navigation */
  id?:            string;
  className?:     string;
  children?:      React.ReactNode;
}

/* ── Backgrounds ──────────────────────────────────────────────── */

const BACKGROUNDS: Record<SectionBackground, string> = {
  white:         'bg-white',
  warm:          'bg-[#FDFCFB]',
  tinted:        'bg-[#F8F5F2]',
  brand:         'bg-[#FFF4E8]',
  dark:          'bg-[#261E16]',
  darker:        'bg-[#130E09]',
  'gradient-hero': [
    'bg-[radial-gradient(ellipse_at_70%_50%,#FFF4E8_0%,#FDFCFB_55%,#F8F5F2_100%)]',
  ].join(' '),
  'gradient-cta': [
    'bg-[linear-gradient(135deg,#261E16_0%,#3D3128_50%,#5C2400_100%)]',
  ].join(' '),
  none: '',
};

/* ── Spacing ──────────────────────────────────────────────────── */
// Résout audit §2.5 : "Sections avec marges variables"
const SPACINGS: Record<SectionSpacing, string> = {
  none:  '',
  sm:    'py-12 md:py-16',
  md:    'py-16 md:py-20 lg:py-24',
  lg:    'py-16 md:py-24 lg:py-28',
  xl:    'py-20 md:py-32 lg:py-36',
  hero:  'py-24 md:py-40 lg:py-48',
};

/* ── Composant ────────────────────────────────────────────────── */

/**
 * Section — Wrapper de section de page
 *
 * Gère le fond, l'espacement vertical et le Container interne.
 * Utilisé pour chaque section de la homepage.
 *
 * Ordre d'alternance recommandé (audit §2.5) :
 *   Hero      → gradient-hero
 *   Features  → white
 *   About     → tinted
 *   Vidéos    → dark
 *   Countdown → brand
 *   Stats     → white
 *   Équipe    → warm
 *   Programme → tinted
 *   Pricing   → white
 *   FAQ       → warm
 *   CTA Final → gradient-cta
 *
 * @example
 * // Section standard
 * <Section background="tinted" spacing="md" id="about">
 *   <h2>Notre mission</h2>
 * </Section>
 *
 * // Hero pleine hauteur
 * <Section background="gradient-hero" spacing="hero" noContainer>
 *   <HeroLayout />
 * </Section>
 *
 * // CTA sombre avec texture grain
 * <Section background="gradient-cta" spacing="xl" grain>
 *   <CTAContent />
 * </Section>
 */
const Section = React.forwardRef<HTMLElement, SectionProps>(
  function Section(
    {
      background    = 'white',
      spacing       = 'md',
      containerSize = 'full',
      noContainer   = false,
      grain         = false,
      id,
      className,
      children,
      ...props
    },
    ref
  ) {
    const isDark = background === 'dark' || background === 'darker' || background === 'gradient-cta';

    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          'relative w-full',
          BACKGROUNDS[background],
          SPACINGS[spacing],
          // Grain texture sur les fonds sombres (effet premium)
          grain && isDark && 'bg-grain',
          // Texte inverse sur fonds sombres
          isDark && 'text-white',
          className,
        )}
        {...props}
      >
        {/* Overlay grain pour sections sombres sans modifier le fond */}
        {grain && isDark && (
          <div
            className="pointer-events-none absolute inset-0 bg-grain opacity-40"
            aria-hidden="true"
          />
        )}

        {noContainer ? (
          children
        ) : (
          <Container size={containerSize}>
            {children}
          </Container>
        )}
      </section>
    );
  }
);

Section.displayName = 'Section';
export default Section;
export type { SectionProps, SectionBackground, SectionSpacing };
