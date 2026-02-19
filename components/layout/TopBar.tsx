'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Flame } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SITE } from '@/lib/constants';
import { useTopBar } from '@/contexts/TopBarContext';

const MESSAGES = [
  {
    text: 'Les places sont limitées. Réservez la vôtre maintenant →',
    href: '/inscription',
  },
  {
    text: '+500 femmes ont transformé leur vie. Voir leurs témoignages →',
    href: '/temoignages',
  },
  {
    text: '5 jours pour lancer votre business sans capital. Voir le programme →',
    href: '/formation',
  },
  {
    text: 'Contactez-nous sur WhatsApp →',
    href: `https://wa.me/${SITE.whatsapp.replace(/\D/g, '')}`,
    external: true,
  },
];

interface TopBarProps {
  className?: string;
}

export function TopBar({ className }: TopBarProps) {
  const { visible, setVisible } = useTopBar();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % MESSAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  const message = MESSAGES[currentIndex];

  return (
    <div
      className={cn(
        'flex h-auto py-2 sm:h-9 sm:py-0 items-center justify-center bg-orange-500 px-8 sm:px-4 text-white relative',
        className,
      )}
      role="banner"
    >
      {message.external ? (
        <a
          href={message.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 text-[10px] sm:text-xs font-medium uppercase tracking-wider sm:tracking-widest hover:opacity-90 transition-opacity text-center"
        >
          <Flame className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" aria-hidden />
          <span>{message.text}</span>
        </a>
      ) : (
        <Link
          href={message.href}
          className="flex items-center justify-center gap-1.5 text-[10px] sm:text-xs font-medium uppercase tracking-wider sm:tracking-widest hover:opacity-90 transition-opacity text-center"
        >
          <Flame className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" aria-hidden />
          <span>{message.text}</span>
        </Link>
      )}

      <button
        type="button"
        onClick={() => setVisible(false)}
        className="absolute right-3 flex h-5 w-5 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/20 hover:text-white"
        aria-label="Fermer le bandeau"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
