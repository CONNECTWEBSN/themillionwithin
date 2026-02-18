'use client';

import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProgrammeCardProps {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  isLast?: boolean;
  showConnector?: boolean;
}

export function ProgrammeCard({
  number,
  icon: Icon,
  title,
  description,
  isLast = false,
  showConnector = false,
}: ProgrammeCardProps) {
  return (
    <div className="relative">
      <div
        className={cn(
          'group relative rounded-2xl p-8 min-h-[320px] shadow-sm transition-all duration-300 border',
          'hover:shadow-lg hover:-translate-y-1',
          isLast
            ? 'bg-primary-500 border-primary-600'
            : 'bg-white border-neutral-100 hover:border-primary-200',
        )}
      >
        {/* Numéro en fond */}
        <div
          className={cn(
            'absolute top-4 right-4 text-9xl font-black transition-colors duration-300',
            isLast
              ? 'text-white/20 group-hover:text-white/30'
              : 'text-neutral-100 group-hover:text-primary-100',
          )}
        >
          {number}
        </div>

        {/* Icône */}
        <div
          className={cn(
            'relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300',
            isLast
              ? 'bg-white/20 group-hover:bg-white/30'
              : 'bg-primary-50 group-hover:bg-primary-100',
          )}
        >
          <Icon
            className={cn('w-8 h-8', isLast ? 'text-white' : 'text-primary-500')}
          />
        </div>

        {/* Contenu */}
        <div className="relative z-10">
          <h3
            className={cn(
              'text-xl font-bold mb-4',
              isLast ? 'text-white' : 'text-neutral-900',
            )}
          >
            {title}
          </h3>
          <p
            className={cn(
              'text-base font-normal leading-relaxed text-justify mt-2',
              isLast ? 'text-white/80' : 'text-neutral-500',
            )}
          >
            {description}
          </p>
        </div>
      </div>

      {/* Connecteur entre cards (desktop uniquement) */}
      {showConnector && (
        <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10">
          <svg
            className="w-4 h-4 text-neutral-300"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}
    </div>
  );
}
