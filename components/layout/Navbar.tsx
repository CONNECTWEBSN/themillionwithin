'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NAV_LINKS, SITE } from '@/lib/constants';
import { MobileMenu } from './MobileMenu';

/* ─── Liens mis en gras (semibold) dans la nav ─────────────── */
const BOLD_LABELS = ['Formation', 'Tarifs'];

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header
        className={cn(
          'flex h-14 sm:h-16 lg:h-[88px] items-center bg-white transition-shadow duration-300',
          className,
        )}
      >
        <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-5 lg:px-8">
          {/* ── Gauche : Logo ── */}
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2.5"
            aria-label={`${SITE.name} — Accueil`}
          >
            <Image
              src="/images/logo_themillionwithin.png"
              alt={SITE.name}
              width={180}
              height={56}
              className="h-8 sm:h-10 lg:h-12 w-auto object-contain"
              priority
            />
            <span className="hidden text-lg font-semibold tracking-tight text-gray-900 sm:inline">
              {SITE.name}
            </span>
          </Link>

          {/* ── Centre : Navigation desktop ── */}
          <nav
            className="hidden items-center gap-2 lg:flex"
            aria-label="Navigation principale"
          >
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              const isBold = BOLD_LABELS.includes(link.label);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative px-4 py-2.5 text-[13px] uppercase tracking-wide transition-colors',
                    isBold ? 'font-semibold' : 'font-normal',
                    isActive
                      ? 'text-orange-500'
                      : 'text-gray-600 hover:text-gray-900',
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-orange-500" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ── Droite : CTAs desktop ── */}
          <div className="hidden items-center gap-3 lg:flex">
            {/* Chat ghost button */}
            <a
              href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-gray-200 px-5 py-2.5 text-[15px] font-medium text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-50"
            >
              <MessageCircle className="h-[18px] w-[18px]" />
              Chat
            </a>

            {/* CTA S'inscrire */}
            <Link
              href="/inscription"
              className="rounded-full bg-orange-600 px-7 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-orange-700"
            >
              S&apos;inscrire
            </Link>
          </div>

          {/* ── Hamburger mobile ── */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-700 transition-colors hover:bg-gray-100 lg:hidden"
            aria-label="Ouvrir le menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* ── Menu mobile (drawer) ── */}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
