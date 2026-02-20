'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

/* ─── DONNÉES DES SLIDES ───────────────────────────────────────── */

const SLIDES = [
  {
    id: 1,
    image: 'https://ddsmedicalsenegal.com/assets/img/slider/1.jpg',
    eyebrow: 'Formation en ligne / en présentiel · 5 jours',
    title: 'PASSEZ DE L\'IDÉE',
    titleAccent: 'À LA CROISSANCE,',
    titleEnd: 'EN TOUTE CONFIANCE.',
    subtitle: 'Rejoignez 673 entrepreneurs qui ont lancé leur business sans renoncer à leur famille. Sans capital de départ.',
  },
  {
    id: 2,
    image: 'https://ddsmedicalsenegal.com/assets/img/slider/2.jpg',
    eyebrow: 'Méthode exclusive · Depuis 2014',
    title: 'BÂTISSEZ VOTRE EMPIRE,',
    titleAccent: 'SANS RENONCER',
    titleEnd: 'À VOTRE FAMILLE.',
    subtitle: 'Notre méthode exclusive vous donne les outils pour lancer votre business depuis chez vous, en français et en wolof.',
  },
  {
    id: 3,
    image: 'https://ddsmedicalsenegal.com/assets/img/slider/3.jpg',
    eyebrow: '673 entrepreneurs · partout dans le monde',
    title: '673 ENTREPRENEURS ONT OSÉ.',
    titleAccent: 'C\'EST VOTRE TOUR',
    titleEnd: 'DE RÉUSSIR.',
    subtitle: 'Des femmes du Sénégal, France, Canada, Italie et partout dans la diaspora ont transformé leur vie. Vous êtes la suivante.',
  },
] as const;

/* ─── COMPOSANT ────────────────────────────────────────────────── */

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [isTransitioning],
  );

  const prev = useCallback(
    () => goTo((current - 1 + SLIDES.length) % SLIDES.length),
    [current, goTo],
  );

  const next = useCallback(
    () => goTo((current + 1) % SLIDES.length),
    [current, goTo],
  );

  /* Auto-play 5s */
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setTimeout(next, 5000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, isPaused, next]);

  const slide = SLIDES[current];

  return (
    <section
      className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[92vh] overflow-hidden bg-neutral-900"
      aria-label="Slider de présentation"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── Images de fond (toutes pré-chargées, seule la courante est visible) ── */}
      {SLIDES.map((s, i) => (
        <div
          key={s.id}
          className={cn(
            'absolute inset-0 transition-opacity duration-700 ease-in-out',
            i === current ? 'opacity-100' : 'opacity-0',
          )}
          aria-hidden={i !== current}
        >
          {/* Image en cover */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${s.image}')` }}
          />
          {/* Overlay sombre dégradé */}
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/85 via-neutral-900/55 to-neutral-900/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 via-transparent to-transparent" />
        </div>
      ))}

      {/* ── Contenu texte ──────────────────────────────────────── */}
      <div className="relative z-10 container mx-auto px-5 flex flex-col justify-center min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[92vh] py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <div
            key={`eyebrow-${current}`}
            className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-white/80 text-xs font-medium uppercase tracking-widest animate-[fade-up_0.5s_ease_both]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse" aria-hidden />
            {slide.eyebrow}
          </div>

          {/* Titre principal */}
          <h1
            key={`title-${current}`}
            className="text-[1.5625rem] sm:text-[1.8125rem] md:text-[2.1875rem] lg:text-[2.5625rem] xl:text-[3.3125rem] font-bold leading-tight text-white mb-4 sm:mb-6 animate-[fade-up_0.55s_ease_0.1s_both]"
          >
            {slide.title}{' '}
            <span className="text-primary-400">{slide.titleAccent}</span>{' '}
            {slide.titleEnd}
          </h1>

          {/* Sous-titre */}
          <p
            key={`subtitle-${current}`}
            className="text-[1.1875rem] sm:text-[1.3125rem] md:text-[1.4375rem] font-normal leading-relaxed text-white mb-6 sm:mb-8 md:mb-10 max-w-xl animate-[fade-up_0.6s_ease_0.2s_both]"
          >
            {slide.subtitle}
          </p>

          {/* Boutons CTA */}
          <div
            key={`cta-${current}`}
            className="flex items-center gap-2 sm:gap-3 md:gap-4 animate-[fade-up_0.65s_ease_0.3s_both]"
          >
            <Button
              href="/inscription"
              variant="cta"
              size="sm"
              icon={<ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4 md:h-4" />}
              iconPosition="right"
              className="text-xs px-4 py-2 h-auto sm:text-sm sm:px-5 sm:py-2.5 md:text-base md:px-7 md:py-3 lg:text-lg lg:px-8 lg:h-[52px]"
            >
              Nous contacter
            </Button>
            <Button
              href="/inscription"
              variant="outline-dark"
              size="sm"
              icon={<ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4 md:h-4" />}
              iconPosition="right"
              className="text-xs px-4 py-2 h-auto sm:text-sm sm:px-5 sm:py-2.5 md:text-base md:px-7 md:py-3 lg:text-lg lg:px-8 lg:h-[52px]"
            >
              S&apos;inscrire
            </Button>
          </div>
        </div>
      </div>

      {/* ── Flèches de navigation (minimalistes) ───────────────── */}
      <button
        type="button"
        onClick={prev}
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-9 md:h-9 rounded-full text-white/50 flex items-center justify-center hover:text-white active:scale-90 transition-all duration-200"
        aria-label="Slide précédente"
      >
        <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" aria-hidden />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-9 md:h-9 rounded-full text-white/50 flex items-center justify-center hover:text-white active:scale-90 transition-all duration-200"
        aria-label="Slide suivante"
      >
        <ChevronRight className="w-4 h-4 md:w-5 md:h-5" aria-hidden />
      </button>

      {/* ── Indicateurs (dots minimalistes) ───────────────────── */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2"
        role="tablist"
        aria-label="Navigation entre les slides"
      >
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            type="button"
            role="tab"
            aria-selected={i === current}
            aria-label={`Aller à la slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={cn(
              'rounded-full transition-all duration-300',
              i === current
                ? 'w-5 h-1.5 bg-white'
                : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/60',
            )}
          />
        ))}
      </div>

      {/* ── Barre de progression ───────────────────────────────── */}
      {!isPaused && (
        <div className="absolute bottom-0 left-0 right-0 z-20 h-[2px] bg-white/5">
          <div
            key={`progress-${current}`}
            className="h-full bg-white/30"
            style={{
              animation: 'slide-progress 5s linear forwards',
            }}
          />
        </div>
      )}
    </section>
  );
}

export default HeroSlider;
