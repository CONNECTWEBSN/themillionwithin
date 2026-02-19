'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { X, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NAV_LINKS, SITE } from '@/lib/constants';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const HIGHLIGHT_LABELS = ['Formation', 'Tarifs'];

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  /* Verrouiller le scroll du body quand le drawer est ouvert */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  /* Fermer au changement de route */
  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300',
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
        onClick={onClose}
        aria-hidden
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
        className={cn(
          'fixed right-0 top-0 z-50 flex h-full w-[300px] max-w-[85vw] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        {/* En-tête du drawer */}
        <div className="flex h-[72px] items-center justify-between border-b border-gray-100 px-6">
          <Link href="/" onClick={onClose}>
            <Image
              src="/images/logo_themillionwithin.png"
              alt={SITE.name}
              width={120}
              height={40}
              className="h-8 w-auto object-contain"
            />
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
            aria-label="Fermer le menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Liens de navigation */}
        <nav className="flex-1 overflow-y-auto px-4 py-6" aria-label="Navigation mobile">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              const isBold = HIGHLIGHT_LABELS.includes(link.label);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={cn(
                      'flex items-center rounded-xl px-4 py-3.5 text-base transition-colors',
                      isBold ? 'font-semibold' : 'font-normal',
                      isActive
                        ? 'bg-orange-50 text-orange-600'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900',
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Boutons fixes en bas */}
        <div className="border-t border-gray-100 p-2">
          <a
            href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-1.5 flex w-full items-center justify-center gap-1.5 rounded-full border border-gray-200 px-3 py-1.5 text-[10px] font-medium text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-50"
          >
            <MessageCircle className="h-3 w-3" />
            Chat
          </a>
          <Link
            href="/inscription"
            onClick={onClose}
            className="flex w-full items-center justify-center rounded-full bg-orange-600 px-3 py-1.5 text-[10px] font-semibold text-white transition-colors hover:bg-orange-700"
          >
            S&apos;inscrire
          </Link>
        </div>
      </aside>
    </>
  );
}
