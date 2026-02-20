'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProgrammeStepProps {
  number: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  outcome: string;
  isActive: boolean;
  onClick: () => void;
}

export function ProgrammeStep({
  number,
  icon: Icon,
  title,
  tagline,
  description,
  outcome,
  isActive,
  onClick,
}: ProgrammeStepProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={isActive}
      className={cn(
        'group relative w-full text-left rounded-2xl border p-6 transition-all duration-500 cursor-pointer',
        isActive
          ? 'bg-white border-primary-200 shadow-xl shadow-primary-500/5 ring-1 ring-primary-100'
          : 'bg-white/60 border-neutral-100 hover:border-primary-100 hover:shadow-md',
      )}
    >
      {/* Header — toujours visible */}
      <div className="flex items-start gap-4">
        {/* Icône + numéro */}
        <div
          className={cn(
            'relative w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-colors duration-500',
            isActive
              ? 'bg-primary-500'
              : 'bg-primary-50 group-hover:bg-primary-100',
          )}
        >
          <Icon
            className={cn(
              'w-6 h-6 transition-colors duration-500',
              isActive ? 'text-white' : 'text-primary-500',
            )}
          />
          <span
            className={cn(
              'absolute -top-2 -right-2 w-6 h-6 rounded-full text-[10px] font-bold flex items-center justify-center transition-colors duration-500',
              isActive
                ? 'bg-primary-600 text-white'
                : 'bg-neutral-100 text-neutral-500',
            )}
          >
            {number}
          </span>
        </div>

        {/* Texte */}
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-500 mb-1">
            Jour {number}
          </p>
          <h3 className="text-lg font-bold text-neutral-900 leading-snug">
            {title}
          </h3>
          <p className="text-sm text-neutral-500 mt-0.5">{tagline}</p>
        </div>

        {/* Chevron */}
        <ChevronDown
          className={cn(
            'w-5 h-5 text-neutral-400 transition-transform duration-300 shrink-0 mt-1',
            isActive && 'rotate-180 text-primary-500',
          )}
          aria-hidden
        />
      </div>

      {/* Contenu expandable */}
      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="pt-5 mt-5 border-t border-neutral-100 space-y-4">
              {/* Description */}
              <p className="text-neutral-600 leading-relaxed">{description}</p>

              {/* Outcome */}
              <div className="flex items-start gap-2 p-3 rounded-xl bg-secondary-50 border border-secondary-100">
                <CheckCircle2
                  className="w-4 h-4 text-secondary-500 shrink-0 mt-0.5"
                  aria-hidden
                />
                <p className="text-sm text-secondary-800 font-medium">
                  {outcome}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
