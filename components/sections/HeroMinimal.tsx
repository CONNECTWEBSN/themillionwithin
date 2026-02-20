import type { ReactNode } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { GradientBackground } from '@/components/shared/GradientBackground';

interface Breadcrumb {
  label: string;
  href?: string;
}

interface HeroMinimalProps {
  /** Petite étiquette au-dessus du titre (Badge) */
  label?: string;
  /** Titre principal — la partie normale */
  title: string;
  /** Partie du titre mise en couleur */
  titleHighlight?: string;
  /** Sous-titre descriptif */
  subtitle?: string;
  /** Fil d'Ariane */
  breadcrumbs?: Breadcrumb[];
  /** Boutons CTA enfants */
  children?: ReactNode;
  /** Taille du hero: sm, md, lg */
  size?: 'sm' | 'md' | 'lg';
  /** Aligner au centre */
  center?: boolean;
  className?: string;
}

const SIZE_STYLES = {
  sm: { section: 'py-10 md:py-14', title: 'text-[1.8125rem] md:text-[2.1875rem] lg:text-[2.5625rem]', subtitle: 'text-[1.1875rem] md:text-[1.3125rem]' },
  md: { section: 'py-12 md:py-16', title: 'text-[1.8125rem] md:text-[2.1875rem] lg:text-[2.5625rem]', subtitle: 'text-[1.1875rem] md:text-[1.3125rem]' },
  lg: { section: 'py-16 md:py-20', title: 'text-[1.8125rem] md:text-[2.1875rem] lg:text-[2.5625rem]', subtitle: 'text-[1.3125rem] md:text-[1.4375rem]' },
};

export function HeroMinimal({
  label,
  title,
  titleHighlight,
  subtitle,
  breadcrumbs,
  children,
  size = 'md',
  center = false,
  className,
}: HeroMinimalProps) {
  const s = SIZE_STYLES[size];

  return (
    <section
      className={cn(
        'relative w-full overflow-hidden',
        'bg-[radial-gradient(ellipse_80%_60%_at_60%_50%,#FFF4E8_0%,#FDFCFB_55%,#F0EBE4_100%)]',
        s.section,
        className,
      )}
      aria-label={label ?? title}
    >
      {/* Arrière-plan décoratif */}
      <GradientBackground variant="hero" showBlobs showPattern />

      <div className="container mx-auto px-5 relative z-10">
        <div className={cn('max-w-3xl', center && 'mx-auto text-center')}>

          {/* Fil d'Ariane */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav aria-label="Fil d'Ariane" className="mb-6">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-neutral-500">
                {breadcrumbs.map((crumb, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    {i > 0 && <ChevronRight className="w-3.5 h-3.5 shrink-0 text-neutral-300" aria-hidden />}
                    {crumb.href ? (
                      <Link
                        href={crumb.href}
                        className="hover:text-primary-600 transition-colors font-medium"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-neutral-700 font-semibold" aria-current="page">
                        {crumb.label}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {/* Label badge */}
          {label && (
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-primary-100 text-primary-700 border border-primary-200">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" aria-hidden />
                {label}
              </span>
            </div>
          )}

          {/* Titre */}
          <h1
            className={cn(
              'font-heading font-bold text-neutral-900 mb-4 leading-tight',
              s.title,
            )}
          >
            {title}{' '}
            {titleHighlight && (
              <span className="relative inline-block">
                <span className="relative z-10 text-primary-500">{titleHighlight}</span>
                {/* Underline décoratif */}
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 300 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 6 C50 2, 150 2, 298 4"
                    stroke="#FFA94D"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.8"
                  />
                </svg>
              </span>
            )}
          </h1>

          {/* Sous-titre */}
          {subtitle && (
            <p
              className={cn(
                'text-neutral-600 leading-relaxed mb-8 max-w-2xl',
                s.subtitle,
                center && 'mx-auto',
              )}
            >
              {subtitle}
            </p>
          )}

          {/* CTA Buttons */}
          {children && (
            <div className={cn('flex flex-wrap gap-3', center && 'justify-center')}>
              {children}
            </div>
          )}
        </div>
      </div>

      {/* Ligne de séparation décorative en bas */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />
    </section>
  );
}

export default HeroMinimal;
