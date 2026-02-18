'use client';

import { Users, Lightbulb, ShoppingBag, Settings2, Rocket, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { ProgrammeCard } from './ProgrammeCard';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

const STEPS = [
  {
    number: '01',
    icon: Users,
    title: 'Développement Personnel',
    description: 'Posez les fondations solides de votre succès.',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Le Produit',
    description: 'Transformez vos idées en stratégies gagnantes.',
  },
  {
    number: '03',
    icon: ShoppingBag,
    title: 'La Vente',
    description: "Maîtrisez l'art de l'approvisionnement intelligent.",
  },
  {
    number: '04',
    icon: Settings2,
    title: 'Le Système',
    description: 'Structurez votre entreprise pour une croissance durable.',
  },
  {
    number: '05',
    icon: Rocket,
    title: 'Le Lancement',
    description: 'Célébrez votre succès et prenez votre envol.',
  },
] as const;

export function ProgrammeSection() {
  return (
    <section
      className="py-28 lg:py-36 bg-orange-50 relative overflow-hidden"
      aria-labelledby="programme-title"
    >
      {/* Accent décoratif */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.05] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #F97316 0%, transparent 70%)' }}
        aria-hidden
      />

      <div className="container mx-auto px-5 relative z-10">
        {/* En-tête */}
        <ScrollReveal variant="fadeUp">
          <div className="text-center mb-16">
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
            <p className="text-base font-normal leading-relaxed text-neutral-600 max-w-2xl mx-auto">
              De l'idée au lancement — une méthode testée par 496+ femmes dans 10+ pays.
            </p>
          </div>
        </ScrollReveal>

        {/* Grille avec effet focus Linear */}
        <div className="relative group/grid">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 [&>*]:transition-opacity [&>*]:duration-300 [&:has(*:hover)>*:not(:hover)]:opacity-75">
            {STEPS.map((step, index) => (
              <ScrollReveal key={step.number} variant="fadeUp" delay={index * 0.1}>
                <ProgrammeCard
                  number={step.number}
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                  isLast={index === STEPS.length - 1}
                  showConnector={index < STEPS.length - 1}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* CTA */}
        <ScrollReveal variant="fadeUp" delay={0.5}>
          <div className="text-center mt-12">
            <Link
              href="/formation"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Découvrir le programme complet
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
