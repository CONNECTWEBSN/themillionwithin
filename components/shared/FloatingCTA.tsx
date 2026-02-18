'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FloatingCTAProps {
  text?: string;
  href?: string;
  label?: string;
}

export function FloatingCTA({
  text = 'Réserver ma place',
  href = '/inscription',
  label = 'Inscription à la formation',
}: FloatingCTAProps) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!dismissed) {
        setVisible(window.scrollY > 400);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <div
      className={cn(
        'fixed bottom-6 left-1/2 -translate-x-1/2 z-[300]',
        'flex items-center gap-3',
        'lg:hidden', // Visible uniquement sur mobile/tablet
        'transition-all duration-500',
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 pointer-events-none',
      )}
      role="complementary"
      aria-label={label}
    >
      <Link
        href={href}
        className={cn(
          'flex items-center gap-2 px-6 py-3.5 rounded-full',
          'bg-gradient-to-r from-primary-500 to-primary-600',
          'text-white font-bold text-sm shadow-brand-lg',
          'hover:shadow-brand-xl hover:scale-105 active:scale-95',
          'transition-all duration-200',
          'shadow-brand-lg',
        )}
        aria-label={label}
      >
        {text}
        <ArrowRight className="w-4 h-4" aria-hidden />
      </Link>
      <button
        type="button"
        onClick={() => setDismissed(true)}
        className="w-8 h-8 rounded-full bg-neutral-800/80 backdrop-blur text-white flex items-center justify-center hover:bg-neutral-700 transition-colors"
        aria-label="Fermer"
      >
        <X className="w-4 h-4" aria-hidden />
      </button>
    </div>
  );
}

export default FloatingCTA;
