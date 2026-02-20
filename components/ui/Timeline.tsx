'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface TimelineStep {
  day: number;
  title: string;
  description: string;
  icon: string;
  topics: readonly string[];
}

interface TimelineProps {
  steps: TimelineStep[];
  className?: string;
}

export function Timeline({ steps, className }: TimelineProps) {
  const [openStep, setOpenStep] = useState<number | null>(null);

  return (
    <ol className={cn('relative', className)} aria-label="Programme de formation">
      {steps.map((step, index) => {
        const isOpen = openStep === step.day;
        const isLast = index === steps.length - 1;

        return (
          <li key={step.day} className="relative flex gap-6">
            {/* Ligne verticale */}
            {!isLast && (
              <div
                className="absolute left-[22px] top-11 bottom-0 w-0.5 bg-gradient-to-b from-primary-300 to-neutral-200"
                aria-hidden
              />
            )}

            {/* Cercle numéroté */}
            <div className="relative shrink-0">
              <div className={cn(
                'w-11 h-11 rounded-full flex items-center justify-center',
                'font-heading font-black text-base shadow-md',
                'transition-all duration-300 border-2',
                isOpen
                  ? 'bg-primary-500 text-white border-primary-600 shadow-brand-sm scale-110'
                  : 'bg-white text-primary-600 border-primary-200 hover:border-primary-400',
              )}>
                {step.day}
              </div>
            </div>

            {/* Contenu */}
            <div className={cn('flex-1 pb-8', isLast && 'pb-0')}>
              <button
                type="button"
                className={cn(
                  'w-full text-left p-5 rounded-2xl border transition-all duration-300',
                  'hover:shadow-md group',
                  isOpen
                    ? 'bg-primary-50 border-primary-200 shadow-sm'
                    : 'bg-white border-neutral-200 hover:border-primary-200',
                )}
                onClick={() => setOpenStep(isOpen ? null : step.day)}
                aria-expanded={isOpen}
                aria-controls={`step-${step.day}-content`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl" aria-hidden>{step.icon}</span>
                    <div>
                      <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider block mb-0.5">
                        Jour {step.day}
                      </span>
                      <h3 className="font-heading font-bold text-neutral-900 text-base md:text-lg">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <ChevronDown
                    className={cn(
                      'w-5 h-5 shrink-0 text-neutral-400 transition-transform duration-300',
                      isOpen && 'rotate-180 text-primary-500',
                    )}
                    aria-hidden
                  />
                </div>

                {/* Description et topics - accordéon */}
                <div
                  id={`step-${step.day}-content`}
                  className={cn(
                    'overflow-hidden transition-all duration-300',
                    isOpen ? 'max-h-64 mt-4' : 'max-h-0',
                  )}
                >
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </button>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export default Timeline;
