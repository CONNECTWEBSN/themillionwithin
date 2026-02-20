'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronRight, ChevronDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SITE, NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface HeaderProps {
  variant?: 'default' | 'minimal';
}

export function Header({ variant = 'default' }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu au changement de route
  useEffect(() => { setOpen(false); }, [pathname]);

  if (variant === 'minimal') {
    return (
      <header className="sticky top-0 z-[200] h-14 md:h-16 bg-white/95 backdrop-blur border-b border-neutral-200 shadow-sm">
        <div className="container mx-auto px-5 h-full flex items-center justify-between">
          <Link href="/" className="font-heading font-bold text-lg text-neutral-900 tracking-tight">
            <span className="text-primary-500">TMW</span> Academy
          </Link>
          <span className="text-xs text-neutral-500 flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
              <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            Paiement sécurisé
          </span>
        </div>
      </header>
    );
  }

  return (
    <>
      {/* Barre d'annonce — scrolle avec la page */}
      <div className="bg-gradient-to-r from-primary-600 via-primary-500 to-gold-500 text-white text-sm md:text-base py-3 text-center font-semibold relative z-[201] shadow-lg">
        <span className="flex items-center justify-center gap-2.5 px-4">
          <Sparkles className="w-4 h-4 md:w-4.5 md:h-4.5 shrink-0 animate-pulse" aria-hidden />
          🚀 Prochaine session : <strong className="font-bold">14 Avril 2026</strong> — Places limitées !{' '}
          <Link href="/inscription" className="underline underline-offset-2 hover:text-white/90 font-bold ml-1 hover:scale-105 transition-transform inline-flex items-center gap-1">
            Réserver ma place 
            <ChevronRight className="w-4 h-4 inline" />
          </Link>
        </span>
      </div>

      <header
        className={cn(
          'sticky top-0 z-[200] transition-all duration-300',
          'h-20 md:h-24 bg-white/95 backdrop-blur-md',
          scrolled && 'shadow-lg border-b border-neutral-200',
        )}
      >
        <div className="container mx-auto px-5 h-full flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0 group transition-transform hover:scale-105"
            aria-label="The Million Within Academy — Accueil"
          >
            <Image
              src="/images/logo_themillionwithin.png"
              alt="The Million Within Academy"
              width={220}
              height={64}
              className="h-14 md:h-16 w-auto object-contain"
              priority
            />
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden lg:flex items-center gap-2" aria-label="Navigation principale">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              // Mise en avant spéciale pour Formation et Tarifs
              const isHighlighted = link.label === 'Formation' || link.label === 'Tarifs';
              
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative px-5 py-2.5 text-[15px] rounded-xl transition-all duration-200',
                    isHighlighted ? 'font-semibold' : 'font-medium',
                    isActive
                      ? 'text-white bg-gradient-to-r from-primary-600 to-primary-500 shadow-md shadow-primary-500/30'
                      : isHighlighted
                        ? 'text-neutral-900 hover:text-primary-600 hover:bg-primary-50 border border-neutral-200'
                        : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100',
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-primary-400" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-neutral-700 hover:text-green-600 transition-all px-4 py-2.5 rounded-xl hover:bg-green-50 border border-transparent hover:border-green-200"
              aria-label="Contacter sur WhatsApp"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="hidden xl:inline">WhatsApp</span>
            </a>
            <Button href="/inscription" variant="cta" size="sm" className="shadow-lg shadow-orange-500/30 font-bold">
              S&apos;inscrire maintenant
            </Button>
          </div>

          {/* Bouton hamburger mobile */}
          <button
            type="button"
            className={cn(
              'lg:hidden relative p-2 rounded-xl transition-all duration-200',
              open ? 'bg-neutral-100 text-neutral-900' : 'text-neutral-700 hover:bg-neutral-100',
            )}
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <span className={cn('absolute inset-0 flex items-center justify-center transition-all duration-200', open ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90')}>
              <X className="w-5 h-5" />
            </span>
            <span className={cn('flex items-center justify-center transition-all duration-200', open ? 'opacity-0 -rotate-90' : 'opacity-100 rotate-0')}>
              <Menu className="w-5 h-5" />
            </span>
          </button>
        </div>

        {/* Menu mobile */}
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation"
          className={cn(
            'lg:hidden absolute top-full left-0 right-0 overflow-hidden transition-all duration-300 ease-out',
            open ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0',
          )}
        >
          <div className="bg-white border-b border-neutral-200 shadow-xl py-5 px-5">
            <nav className="flex flex-col gap-2 mb-5" aria-label="Navigation mobile">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                const isHighlighted = link.label === 'Formation' || link.label === 'Tarifs';
                
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'flex items-center justify-between py-4 px-5 rounded-xl transition-all duration-200',
                      isHighlighted ? 'font-semibold text-base' : 'font-medium text-sm',
                      isActive
                        ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-md'
                        : isHighlighted
                          ? 'bg-neutral-50 text-neutral-900 border border-neutral-200 hover:border-primary-300 hover:bg-primary-50'
                          : 'text-neutral-700 hover:bg-neutral-100',
                    )}
                    onClick={() => setOpen(false)}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className={cn('w-5 h-5 transition-all', isActive ? 'text-white' : 'text-neutral-400')} />
                  </Link>
                );
              })}
            </nav>

            <div className="flex flex-col gap-3 pt-4 border-t border-neutral-200">
              <a
                href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-green-50 text-green-700 font-bold text-sm hover:bg-green-100 transition-all border-2 border-green-200 hover:border-green-300"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Contacter sur WhatsApp
              </a>
              <Button href="/inscription" variant="cta" size="md" fullWidth className="font-bold shadow-lg">
                S&apos;inscrire maintenant
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
