import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, BookOpen, Target, Users2, Rocket, Phone, Star, Calendar, Play } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { HeroMinimal } from '@/components/sections/HeroMinimal';
import { FloatingCTA } from '@/components/shared/FloatingCTA';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { GlassCard } from '@/components/ui/GlassCard';
import { SITE } from '@/lib/constants';
import { PROGRAMME_STEPS } from '@/components/programme/data';
import { Timeline } from '@/components/ui/Timeline';
import { AnimatedStats } from '@/components/sections/AnimatedStats';

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

export default function FormationPage() {
  const timelineSteps = PROGRAMME_STEPS.map((d) => ({
    day: d.day,
    title: d.title,
    description: d.description,
    icon: '📌',
    topics: [...d.topics],
  }));

  return (
    <>
      {/* ─── HERO IMPACTANT ──────────────────────────────────────── */}
      <HeroMinimal
        label="Business Master Avril 2026"
        title="5 jours pour lancer"
        titleHighlight="ton business"
        subtitle="Une méthode testée par 673+ entrepreneurs. Sans capital de départ. Depuis chez toi ou en présentiel à Dakar."
        breadcrumbs={[{ label: 'Accueil', href: '/' }, { label: 'Formation' }]}
        size="md"
      >
        <div className="flex flex-col gap-6 items-start">
          {/* CTA + Date */}
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <Button href="/inscription" variant="cta" size="md"
              icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
              Rejoindre la formation
            </Button>
            <div className="flex items-center gap-2 text-sm text-neutral-600">
              <Calendar className="w-4 h-4 text-primary-500" />
              <span className="font-semibold">Du 6 au 10 Avril 2026</span>
            </div>
          </div>
          
          {/* Stats animées */}
          <AnimatedStats />
        </div>
      </HeroMinimal>

      {/* ─── LE PROBLÈME / LA PROMESSE ───────────────────────────── */}
      <ScrollReveal variant="fadeUp">
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-5">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl lg:text-3xl font-bold leading-snug text-neutral-900 mb-6">
                Tu as une idée de business mais tu ne sais pas{' '}
                <span className="text-primary-500">par où commencer ?</span>
              </h2>
              <p className="text-neutral-600 text-lg leading-relaxed mb-8">
                Tu n&apos;es pas seule. Des centaines de femmes comme toi avaient les mêmes doutes. 
                Aujourd&apos;hui, elles dirigent leur propre entreprise grâce à notre méthode.
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-red-50 border border-red-100">
                  <p className="text-red-600 font-semibold mb-2">❌ Avant</p>
                  <p className="text-neutral-700 text-sm">Idées floues, peur de se lancer, manque de structure</p>
                </div>
                <div className="p-6 rounded-2xl bg-primary-50 border border-primary-100 relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    5 JOURS
                  </div>
                  <p className="text-primary-600 font-semibold mb-2 mt-2">→ La transformation</p>
                  <p className="text-neutral-700 text-sm">Méthode éprouvée, accompagnement personnalisé</p>
                </div>
                <div className="p-6 rounded-2xl bg-green-50 border border-green-100">
                  <p className="text-green-600 font-semibold mb-2">✅ Après</p>
                  <p className="text-neutral-700 text-sm">Business plan prêt, premiers clients identifiés</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── PROGRAMME 5 JOURS ────────────────────────────────────── */}
      <ScrollReveal variant="fadeUp">
        <section className="py-16 md:py-20 bg-neutral-50" aria-labelledby="programme-title">
          <div className="container mx-auto px-5">
            <div className="text-center mb-12">
              <Badge variant="brand" className="mb-4">Le programme</Badge>
              <h2 id="programme-title" className="text-2xl lg:text-3xl font-bold leading-snug text-neutral-900 mb-4">
                5 jours pour{' '}
                <span className="text-primary-500">transformer ta vie</span>
              </h2>
              <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
                De l&apos;idée au lancement — une méthode testée par 673 entrepreneurs partout dans le monde.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Timeline steps={timelineSteps} />
            </div>

            {/* CTA Nos Offres */}
            <div className="mt-12 text-center">
              <Button
                href="/tarifs"
                variant="cta"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                Découvrir nos offres
              </Button>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── CE QUE TU REPARS AVEC (3 résultats) ──────────────────── */}
      <ScrollReveal variant="fadeUp">
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-5">
            <div className="text-center mb-12">
              <Badge variant="brand" className="mb-4">Résultats concrets</Badge>
              <h2 className="text-2xl lg:text-3xl font-bold leading-snug text-neutral-900">
                Ce que tu repars avec après{' '}
                <span className="text-primary-500">5 jours</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <GlassCard variant="brand" padding="lg" hoverable className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary-500 flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl text-neutral-900 mb-2">Business Plan Prêt</h3>
                <p className="text-neutral-600 text-sm">Un plan d&apos;affaires structuré et viable, adapté à ton contexte et tes ressources.</p>
              </GlassCard>

              <GlassCard variant="brand" padding="lg" hoverable className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-secondary-500 flex items-center justify-center mx-auto mb-4">
                  <Users2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl text-neutral-900 mb-2">Clients Identifiés</h3>
                <p className="text-neutral-600 text-sm">Une stratégie claire pour attirer et fidéliser tes premiers clients dès le lancement.</p>
              </GlassCard>

              <GlassCard variant="brand" padding="lg" hoverable className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gold-500 flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl text-neutral-900 mb-2">Plan de Lancement</h3>
                <p className="text-neutral-600 text-sm">Un plan d&apos;action concret avec les étapes précises pour lancer ton activité.</p>
              </GlassCard>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── TÉMOIGNAGE VEDETTE ───────────────────────────────────── */}
      <ScrollReveal variant="fadeUp">
        <section className="py-16 md:py-20 bg-neutral-900">
          <div className="container mx-auto px-5">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-neutral-800">
                  <Image
                    src="/images/testimonials/graduation.jpg"
                    alt="Remise de diplômes Business Master"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <a
                      href="/temoignages"
                      className="w-16 h-16 rounded-full bg-primary-500 flex items-center justify-center hover:bg-primary-600 transition-colors"
                    >
                      <Play className="w-6 h-6 text-white ml-1" />
                    </a>
                  </div>
                </div>
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  <blockquote className="text-white text-lg leading-relaxed mb-6">
                    &ldquo;Avant la formation, j&apos;avais peur de me lancer. Aujourd&apos;hui, je dirige mon entreprise 
                    et j&apos;ai déjà formé 3 employées. Merci The Million Within !&rdquo;
                  </blockquote>
                  <div>
                    <p className="font-semibold text-white">Fatou D.</p>
                    <p className="text-neutral-400 text-sm">Fondatrice, FD Cosmetics — Sénégal</p>
                  </div>
                  <Button href="/temoignages" variant="outline" size="sm" className="mt-6 border-white/30 text-white hover:bg-white/10">
                    Voir tous les témoignages
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── POUR QUI ─────────────────────────────────────────────── */}
      <ScrollReveal variant="fadeUp">
        <section className="py-16 md:py-20 bg-white" aria-labelledby="for-who-title">
          <div className="container mx-auto px-5">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="brand" className="mb-4">Pour qui ?</Badge>
              <h2 id="for-who-title" className="text-2xl lg:text-3xl font-bold leading-snug text-neutral-900 mb-8">
                Cette formation est faite{' '}
                <span className="text-primary-500">pour toi si…</span>
              </h2>

              <div className="grid sm:grid-cols-2 gap-4 text-left">
                {[
                  'Tu es une femme avec un projet ou une idée de business',
                  'Tu n\'as pas de capital de départ mais beaucoup de motivation',
                  'Tu vis en Afrique, en Europe, en Amérique ou ailleurs',
                  'Tu veux concilier famille et ambitions professionnelles',
                  'Tu parles français ou wolof',
                  'Tu es prête à t\'investir pendant 5 jours intensifs',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3 p-4 rounded-xl bg-neutral-50 border border-neutral-100">
                    <CheckCircle2 className="w-5 h-5 text-secondary-500 shrink-0 mt-0.5" aria-hidden />
                    <span className="text-neutral-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── CTA VERS OFFRES ────────────────────────────────────── */}
      <ScrollReveal variant="fadeUp">
        <section id="formules" className="py-16 md:py-20 bg-gradient-to-b from-neutral-50 to-white scroll-mt-24">
          <div className="container mx-auto px-5">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="brand" className="mb-4">Prochaine Session</Badge>
              <h2 className="text-2xl lg:text-3xl font-bold leading-snug text-neutral-900 mb-2">
                Business Master <span className="text-primary-500">Avril 2026</span>
              </h2>
              <p className="text-lg font-semibold text-neutral-700 mb-2">Du 6 au 10 Avril</p>
              <p className="text-neutral-600 mb-4">
                En présentiel à Dakar ou en ligne — Choisis la formule qui te convient.
              </p>
              <p className="text-sm text-red-500 font-medium mb-8">⚠️ Places limitées — Inscris-toi vite !</p>
              
              <Button 
                href="/tarifs" 
                variant="cta" 
                size="md"
                icon={<ArrowRight className="w-4 h-4" />} 
                iconPosition="right"
              >
                Découvrir les offres
              </Button>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── FAQ RAPIDE ───────────────────────────────────────────── */}
      <ScrollReveal variant="fadeUp">
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-5">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-2xl lg:text-3xl font-bold leading-snug text-neutral-900">
                  Questions fréquentes
                </h2>
              </div>

              <div className="space-y-4">
                {[
                  {
                    q: 'Ai-je besoin d\'un capital de départ ?',
                    a: 'Non ! Notre méthode est conçue pour démarrer sans investissement initial. Tu apprendras à lancer avec tes ressources actuelles.',
                  },
                  {
                    q: 'Je n\'ai aucune expérience en business, c\'est grave ?',
                    a: 'Pas du tout. 80% de nos participantes débutent de zéro. La formation est adaptée à tous les niveaux.',
                  },
                  {
                    q: 'Puis-je payer en plusieurs fois ?',
                    a: 'Oui, nous proposons des facilités de paiement. Contacte-nous sur WhatsApp pour en discuter.',
                  },
                ].map((faq, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100">
                    <h3 className="font-semibold text-neutral-900 mb-2">{faq.q}</h3>
                    <p className="text-neutral-600 text-sm">{faq.a}</p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <Button href="/faq" variant="outline" size="sm">
                  Voir toutes les questions
                </Button>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── CTA FINAL + INFOLINE ─────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700">
        <div className="container mx-auto px-5 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Prête à transformer ta vie ?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Rejoins des centaines de femmes qui ont lancé leur business. La prochaine session commence bientôt.
          </p>
          
          <Button href="/inscription" variant="secondary" size="md"
            icon={<ArrowRight className="w-4 h-4" />} iconPosition="right"
            className="mb-10">
            Je réserve ma place maintenant
          </Button>

          {/* Infoline */}
          <div className="pt-8 border-t border-white/20">
            <p className="text-white font-bold mb-4">INFOLINE</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="tel:+12812031065" className="flex items-center gap-2 px-4 py-2.5 bg-white/10 backdrop-blur rounded-full border border-white/20 hover:bg-white/20 transition-colors">
                <Phone className="w-4 h-4 text-white" />
                <span className="font-medium text-sm text-white">+1(281)203-1065</span>
              </a>
              <a href="tel:+221785887979" className="flex items-center gap-2 px-4 py-2.5 bg-white/10 backdrop-blur rounded-full border border-white/20 hover:bg-white/20 transition-colors">
                <Phone className="w-4 h-4 text-white" />
                <span className="font-medium text-sm text-white">+221785887979</span>
              </a>
              <a href="tel:+221783887575" className="flex items-center gap-2 px-4 py-2.5 bg-white/10 backdrop-blur rounded-full border border-white/20 hover:bg-white/20 transition-colors">
                <Phone className="w-4 h-4 text-white" />
                <span className="font-medium text-sm text-white">+221783887575</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <FloatingCTA text="Rejoindre la formation" />
    </>
  );
}
