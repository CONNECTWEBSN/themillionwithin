'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { PARTNER_LOGOS } from '@/lib/constants';

interface PartnersBarProps {
  className?: string;
}

/**
 * Barre de logos partenaires en défilement continu (marquee).
 * Double le contenu pour un effet de boucle infinie.
 */
export function PartnersBar({ className }: PartnersBarProps) {
  // Doubler les logos pour le défilement continu
  const allLogos = [...PARTNER_LOGOS, ...PARTNER_LOGOS];

  return (
    <section
      className={cn(
        'py-8 md:py-10 bg-white border-y border-neutral-100 overflow-hidden',
        className,
      )}
      aria-label="Nos partenaires"
    >
      <div className="container mx-auto px-5 mb-4">
        <p className="text-center text-sm font-semibold text-neutral-400 uppercase tracking-widest">
          Ils nous font confiance
        </p>
      </div>

      {/* Marquee container */}
      <div className="relative w-full overflow-hidden">
        {/* Masques dégradés gauche / droite */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Bande défilante */}
        <div
          className="flex items-center gap-12 md:gap-16 w-max"
          style={{ animation: 'marquee var(--marquee-duration, 28s) linear infinite' }}
        >
          {allLogos.map((logo, i) => (
            <div
              key={`${logo.alt}-${i}`}
              className="flex items-center justify-center shrink-0 w-auto opacity-50 hover:opacity-100 transition-opacity duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={48}
                className="h-8 w-auto object-contain"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartnersBar;
