import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, BookOpen, Target, Users2, Rocket, Clock, Globe2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Timeline } from '@/components/ui/Timeline';
import { GlassCard } from '@/components/ui/GlassCard';
import { HeroMinimal } from '@/components/sections/HeroMinimal';
import { FloatingCTA } from '@/components/shared/FloatingCTA';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { PROGRAMME_DAYS, PRICING_PLANS, SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Programme de Formation — 5 jours pour lancer votre business',
  description:
    'Découvrez le programme complet de la formation The Million Within Academy. 5 jours intensifs pour créer votre entreprise sans capital de départ, en français et en wolof.',
  openGraph: {
    title: 'Programme Formation | The Million Within Academy',
    description: '5 jours pour transformer votre vie. Découvrez le programme complet.',
    url: `${SITE.url}/formation`,
  },
};

const WHAT_YOU_LEARN = [
  {
    icon: <Target className="w-5 h-5" />,
    title: 'Mindset entrepreneurial',
    description: 'Développez la mentalité gagnante pour surmonter les obstacles et rester motivée.',
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: 'Business plan structuré',
    description: "Créez un plan d'affaires solide et viable, adapté à votre contexte.",
  },
  {
    icon: <Users2 className="w-5 h-5" />,
    title: 'Trouver vos clients',
    description: 'Stratégies concrètes pour attirer et fidéliser vos premiers clients.',
  },
  {
    icon: <Rocket className="w-5 h-5" />,
    title: 'Lancement opérationnel',
    description: "Un plan d'action concret pour lancer votre activité dès la fin de la formation.",
  },
  {
    icon: <Globe2 className="w-5 h-5" />,
    title: 'Commerce digital et local',
    description: "Vendez en ligne et en présentiel depuis n'importe quel pays.",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: 'Organisation efficace',
    description: 'Gérez votre temps pour équilibrer business, famille et vie personnelle.',
  },
];

const FORMAT_DETAILS = [
  { label: 'Durée', value: '5 jours intensifs' },
  { label: 'Format', value: '100% en ligne' },
  { label: 'Langues', value: 'Français & Wolof' },
  { label: 'Niveau', value: 'Débutant à confirmé' },
  { label: 'Accès', value: 'Monde entier' },
  { label: 'Support', value: 'Communauté privée' },
];

export default function FormationPage() {
  const featuredPlan = PRICING_PLANS.find((p) => p.featured) ?? PRICING_PLANS[1];

  // Conversion en tableau mutable pour Timeline
  const timelineSteps = PROGRAMME_DAYS.map((d) => ({
    day: d.day,
    title: d.title,
    description: d.description,
    icon: d.icon,
    topics: d.topics,
  }));

  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────────── */}
      <HeroMinimal
        label="Programme de formation"
        title="Votre transformation"
        titleHighlight="en 5 jours"
        subtitle="Un programme structuré, intensif et bienveillant pour passer de l'idée à la création de votre entreprise. Sans capital de départ. Depuis chez vous."
        breadcrumbs={[{ label: 'Accueil', href: '/' }, { label: 'Formation' }]}
        size="lg"
      >
        <Button href="/inscription" variant="cta" size="lg"
          icon={<ArrowRight className="w-5 h-5" />} iconPosition="right">
          Rejoindre la formation
        </Button>
        <Button href="/tarifs" variant="outline" size="lg">
          Voir les tarifs
        </Button>
      </HeroMinimal>

      {/* ─── FORMAT EN CHIFFRES ────────────────────────────────── */}
      <ScrollReveal variant="fadeUp">
        <section className="py-12 bg-neutral-900 border-b border-neutral-800" aria-label="Détails du format">
          <div className="container mx-auto px-5">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {FORMAT_DETAILS.map((item) => (
                <div key={item.label} className="flex flex-col items-center text-center gap-1">
                  <p className="font-heading font-bold text-white text-base md:text-lg">{item.value}</p>
                  <p className="text-neutral-500 text-xs uppercase tracking-wider font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── PROGRAMME JOUR PAR JOUR ───────────────────────────── */}
      <ScrollReveal variant="fadeUp">
        <section className="py-20 md:py-28 bg-white" aria-labelledby="programme-title">
          <div className="container mx-auto px-5">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Gauche */}
              <div>
                <Badge variant="brand" className="mb-4">Le programme</Badge>
                <h2 id="programme-title" className="text-h1 text-neutral-900 mb-4">
                  5 jours. 5 étapes.{' '}
                  <span className="text-primary-500">1 business lancé.</span>
                </h2>
                <p className="text-neutral-600 text-lg leading-relaxed mb-8">
                  Chaque journée est conçue pour vous apporter des résultats concrets.
                  Cliquez sur chaque étape pour découvrir le détail du programme.
                </p>

                {/* Télécharger le programme */}
                <div className="p-5 rounded-2xl bg-primary-50 border border-primary-200 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-500 flex items-center justify-center shrink-0">
                    <BookOpen className="w-6 h-6 text-white" aria-hidden />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 text-sm">Programme détaillé</p>
                    <p className="text-neutral-600 text-xs mt-0.5">Recevez le syllabus complet par WhatsApp</p>
                  </div>
                  <a
                    href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, '')}?text=Bonjour, je voudrais recevoir le programme détaillé de la formation.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto shrink-0 flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    Recevoir
                    <ArrowRight className="w-4 h-4" aria-hidden />
                  </a>
                </div>
              </div>

              {/* Timeline interactive */}
              <div>
                <Timeline steps={timelineSteps} />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── CE QUE VOUS ALLEZ APPRENDRE ──────────────────────── */}
      <ScrollReveal variant="fadeUp">
        <section className="py-20 md:py-28 bg-[#F8F5F2]" aria-labelledby="learn-title">
          <div className="container mx-auto px-5">
            <div className="text-center mb-14">
              <Badge variant="brand" className="mb-4">Ce que vous apprendrez</Badge>
              <h2 id="learn-title" className="text-h1 text-neutral-900">
                Des compétences{' '}
                <span className="text-primary-500">concrètes et applicables</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHAT_YOU_LEARN.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-6 rounded-2xl bg-white border border-neutral-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-500/10 text-primary-600 flex items-center justify-center shrink-0 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-neutral-900 mb-1">{item.title}</h3>
                    <p className="text-base font-normal leading-relaxed text-neutral-500 text-justify">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── POUR QUI ─────────────────────────────────────────── */}
      <ScrollReveal variant="fadeUp">
        <section className="py-20 md:py-28 bg-white" aria-labelledby="for-who-title">
          <div className="container mx-auto px-5">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge variant="brand" className="mb-4">Pour qui ?</Badge>
                <h2 id="for-who-title" className="text-h1 text-neutral-900 mb-6">
                  Cette formation est faite{' '}
                  <span className="text-primary-500">pour vous si…</span>
                </h2>

                <ul className="space-y-4">
                  {[
                    'Vous êtes une femme avec un projet ou une idée de business',
                    'Vous n\'avez pas de capital de départ mais beaucoup de motivation',
                    'Vous vivez en Afrique, en Europe, en Amérique ou ailleurs dans la diaspora',
                    'Vous voulez concilier famille et ambitions professionnelles',
                    'Vous parlez français ou wolof',
                    'Vous êtes prête à vous investir pendant 5 jours intensifs',
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3 text-neutral-700">
                      <CheckCircle2 className="w-5 h-5 text-secondary-500 shrink-0 mt-0.5" aria-hidden />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card formule featured */}
              <GlassCard variant="brand" padding="lg" glow>
                <div className="text-center">
                  <Badge variant="popular" className="mb-4">Formule la plus populaire</Badge>
                  <h3 className="font-heading font-bold text-2xl text-neutral-900 mb-2">{featuredPlan.title}</h3>
                  <p className="text-neutral-600 mb-6">{featuredPlan.subtitle}</p>
                  <div className="flex items-baseline justify-center gap-2 mb-6">
                    <span className="font-heading font-black text-4xl text-primary-600">
                      {featuredPlan.price.EUR}€
                    </span>
                    <span className="text-neutral-500 text-sm">/ {featuredPlan.price.FCFA.toLocaleString('fr-FR')} FCFA</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-left">
                    {featuredPlan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-neutral-700">
                        <CheckCircle2 className="w-4 h-4 text-secondary-500 shrink-0 mt-0.5" aria-hidden />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button href={featuredPlan.href} variant="cta" size="lg" fullWidth
                    icon={<ArrowRight className="w-5 h-5" />} iconPosition="right">
                    {featuredPlan.cta}
                  </Button>
                  <Link href="/tarifs" className="mt-3 block text-sm text-primary-600 hover:underline">
                    Voir toutes les formules →
                  </Link>
                </div>
              </GlassCard>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <FloatingCTA text="Rejoindre la formation" />
    </>
  );
}
