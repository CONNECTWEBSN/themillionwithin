'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { ProgrammeStep } from './ProgrammeStep';
import { PROGRAMME_STEPS } from './data';

export function ProgrammeSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="py-24 lg:py-32 bg-neutral-50 relative overflow-hidden"
      aria-labelledby="programme-title"
    >
      {/* Décoration de fond */}
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-[0.04] pointer-events-none bg-primary-500"
        aria-hidden
      />

      <div className="container mx-auto px-5 relative z-10">
        {/* En-tête */}
        <ScrollReveal variant="fadeUp">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <Badge variant="brand" className="mb-4">
              Le Programme
            </Badge>
            <h2
              id="programme-title"
              className="text-3xl lg:text-4xl font-bold leading-snug text-neutral-900 mb-4"
            >
              5 jours pour{' '}
              <span className="text-primary-500">transformer votre vie.</span>
            </h2>
            <p className="text-base text-neutral-600 leading-relaxed">
              De l&apos;idée au lancement — une méthode testée par 673 entrepreneurs
              partout dans le monde. Cliquez sur chaque étape pour découvrir le contenu.
            </p>
          </div>
        </ScrollReveal>

        {/* Layout : barre de progression verticale + accordéon */}
        <div className="grid lg:grid-cols-[80px_1fr] gap-8 max-w-3xl mx-auto">
          {/* Barre de progression verticale (desktop uniquement) */}
          <div className="hidden lg:flex flex-col items-center pt-8">
            {PROGRAMME_STEPS.map((_, i) => (
              <div key={i} className="flex flex-col items-center">
                <button
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Aller à l'étape ${i + 1}`}
                  className={cn(
                    'w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300',
                    i === activeIndex
                      ? 'bg-primary-500 text-white scale-110 shadow-lg shadow-primary-500/30'
                      : i < activeIndex
                        ? 'bg-primary-100 text-primary-600 hover:bg-primary-200'
                        : 'bg-neutral-100 text-neutral-400 hover:bg-neutral-200',
                  )}
                >
                  {i + 1}
                </button>
                {i < PROGRAMME_STEPS.length - 1 && (
                  <div
                    className={cn(
                      'w-0.5 h-16 transition-colors duration-500',
                      i < activeIndex ? 'bg-primary-300' : 'bg-neutral-200',
                    )}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Accordéon des étapes */}
          <div className="space-y-3">
            {PROGRAMME_STEPS.map((step, i) => (
              <ScrollReveal key={step.number} variant="fadeUp" delay={i * 0.08}>
                <ProgrammeStep
                  number={step.number}
                  icon={step.icon}
                  title={step.title}
                  tagline={step.tagline}
                  description={step.description}
                  outcome={step.outcome}
                  isActive={i === activeIndex}
                  onClick={() =>
                    setActiveIndex(i === activeIndex ? -1 : i)
                  }
                />
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* CTA */}
        <ScrollReveal variant="fadeUp" delay={0.5}>
          <div className="text-center mt-14">
            <Button
              href="/formation"
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              Découvrir le programme complet
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
