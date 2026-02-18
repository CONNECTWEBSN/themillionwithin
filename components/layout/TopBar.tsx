'use client';

import { useState } from 'react';
import Link from 'next/link';
import { X, Flame } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NEXT_SESSION } from '@/lib/constants';

interface TopBarProps {
  className?: string;
}

export function TopBar({ className }: TopBarProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      className={cn(
        'sticky top-0 z-50 flex h-9 items-center justify-center bg-orange-500 px-4 text-white',
        className,
      )}
      role="banner"
    >
      <Link
        href="/tarifs"
        className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest sm:text-sm"
      >
        <Flame className="h-3.5 w-3.5 shrink-0" aria-hidden />
        <span>
          Début de session{' '}
          <strong className="font-bold">{NEXT_SESSION.label}</strong> — Plus que{' '}
          <strong className="font-bold">12 places</strong> disponibles
        </span>
      </Link>

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
