import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Zap,
  Globe2,
  Users2,
  TrendingUp,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { CountdownTimer } from '@/components/ui/CountdownTimer';
import { GradientBackground } from '@/components/shared/GradientBackground';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { CourseJsonLd } from '@/components/shared/CourseJsonLd';
import { HeroSlider } from '@/components/sections/HeroSlider';
import { AboutSection } from '@/components/sections/AboutSection';
import { PartnersBar } from '@/components/sections/PartnersBar';
import { ProgrammeSection } from '@/components/programme/ProgrammeSection';
import { TeamSection } from '@/components/team/TeamSection';
import { SITE, STATS, NEXT_SESSION } from '@/lib/constants';
import { VideoTestimonialsSection } from '@/components/testimonials/VideoTestimonialsSection';


export const metadata: Metadata = {
  title: 'The Million Within Academy | Formation Entrepreneuriat Féminin',
  description:
    'Bâtissez votre entreprise prospère sans renoncer à votre famille. Formation en ligne / en présentiel de 5 jours pour femmes entrepreneures. Sans capital de départ, depuis chez vous.',
  keywords: [
    'formation entrepreneuriat',
    'femmes entrepreneures',
    'business en ligne / en présentiel',
    'formation Afrique',
    'entreprendre depuis la maison',
  ],
  openGraph: {
    title: 'The Million Within Academy',
    description: 'Bâtissez votre entreprise sans renoncer à votre famille',
    url: 'https://www.themillionwithin.com',
    siteName: 'The Million Within Academy',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'The Million Within Academy' }],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Million Within Academy',
    description: 'Bâtissez votre entreprise sans renoncer à votre famille',
  },
  robots: { index: true, follow: true },
};

/* ─── DONNÉES ─────────────────────────────────────────────────── */

const PILLARS = [
  {
    icon: <Zap className="w-6 h-6" />,
    color: 'from-primary-400 to-primary-600',
    shadowColor: 'shadow-brand-md',
    title: 'Sans capital de départ',
    description:
      'Démarrez avec ce que vous avez déjà. Notre méthode vous apprend à créer de la valeur sans investissement initial.',
    stat: '0 FCFA requis',
  },
  {
    icon: <Globe2 className="w-6 h-6" />,
    color: 'from-gold-400 to-primary-500',
    shadowColor: 'shadow-gold-md',
    title: 'Depuis chez vous',
    description:
      'En ligne / en présentiel, accessible depuis l\'Afrique, l\'Europe ou l\'Amérique. Aucun déplacement nécessaire.',
    stat: 'partout dans le monde',
  },
  {
    icon: <Users2 className="w-6 h-6" />,
    color: 'from-secondary-400 to-secondary-600',
    shadowColor: 'shadow-success-md',
    title: 'Accompagnement réel',
    description:
      'Une communauté de femmes entrepreneures et des coaches qui vous soutiennent bien au-delà des 5 jours.',
    stat: '673+ entrepreneurs',
  },
];


const TRUST_LOGOS = [
  { name: 'Inc.', style: 'font-black text-lg' },
  { name: 'Forbes', style: 'font-black italic text-lg' },
  { name: 'CNN', style: 'font-black text-xl tracking-tight' },
  { name: 'BBC', style: 'font-black text-lg tracking-widest' },
  { name: 'RFI', style: 'font-black text-lg' },
];

/* ─── PAGE ────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      <CourseJsonLd />

      {/* ══════════════════════════════════════════════════════════
          SECTION 1 — HERO SLIDER (3 slides avec images cover)
          ══════════════════════════════════════════════════════════ */}
      <HeroSlider />

      {/* ══════════════════════════════════════════════════════════
          SECTION 2 — BARRE DE STATS ANIMÉE
          ══════════════════════════════════════════════════════════ */}
      <ScrollReveal variant="fadeUp">
        <section className="bg-white py-12 border-y border-neutral-100" aria-label="Chiffres clés">
          <div className="container mx-auto px-5 pt-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center group">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <span className="text-2xl" aria-hidden>{stat.icon}</span>
                    <p className="text-stat text-3xl md:text-4xl text-neutral-900">
                      {stat.value.includes('+') ? (
                        <>
                          <AnimatedCounter
                            value={parseInt(stat.value)}
                            suffix="+"
                            className="text-primary-400"
                          />
                        </>
                      ) : stat.value.includes('%') ? (
                        <span className="text-primary-400">{stat.value}</span>
                      ) : stat.value === '500 M' ? (
                        <>
                          <span className="text-primary-400">500 M</span>
                          <span className="text-primary-400 text-base md:text-lg font-normal"> FCFA</span>
                        </>
                      ) : (
                        <span className="text-primary-400">{stat.value}</span>
                      )}
                    </p>
                  </div>
                  <p className="text-label text-neutral-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ══════════════════════════════════════════════════════════
          SECTION 3 — ABOUT (vidéo 2 colonnes)
          ══════════════════════════════════════════════════════════ */}
      <AboutSection />

      {/* ══════════════════════════════════════════════════════════
          SECTION 2c — PROGRAMME 5 JOURS
          ══════════════════════════════════════════════════════════ */}
      <ProgrammeSection />

      {/* ══════════════════════════════════════════════════════════
          SECTION 3 — LES 3 PILIERS "POURQUOI NOUS"
          ══════════════════════════════════════════════════════════ */}
      <ScrollReveal variant="fadeUp">
        <section
          className="py-20 lg:py-28 bg-white relative overflow-hidden"
          aria-labelledby="pillars-title"
        >
          {/* Accent décoratif */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-3xl opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #F97316 0%, transparent 70%)' }}
            aria-hidden
          />

          <div className="container mx-auto px-5 relative z-10">
            <div className="text-center mb-16">
              <Badge variant="brand" className="mb-4">Notre approche</Badge>
              <h2
                id="pillars-title"
                className="text-3xl lg:text-4xl font-bold leading-snug text-neutral-900 mb-4"
              >
                Pourquoi choisir{' '}
                <span className="text-primary-500">The Million Within ?</span>
              </h2>
              <p className="text-lg font-normal leading-relaxed text-neutral-600 max-w-2xl mx-auto">
                Une méthode conçue spécifiquement pour les femmes qui veulent entreprendre
                sans tout sacrifier.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {PILLARS.map((pillar, i) => (
                <div
                  key={i}
                  className="group relative p-8 rounded-3xl bg-neutral-50 border border-neutral-100 hover:border-primary-200 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 space-y-4"
                >
                  {/* Icône */}
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.color} text-white flex items-center justify-center shadow-lg ${pillar.shadowColor} group-hover:scale-110 transition-transform duration-300`}
                  >
                    {pillar.icon}
                  </div>

                  <div className="space-y-3">
                    {/* Stat */}
                    <div className="inline-block px-3 py-1 rounded-full bg-primary-50 border border-primary-100">
                      <span className="text-xs font-medium uppercase tracking-widest text-primary-700">{pillar.stat}</span>
                    </div>

                    <h3 className="text-lg lg:text-xl font-semibold leading-snug text-neutral-900">
                      {pillar.title}
                    </h3>
                    <p className="text-base font-normal leading-relaxed text-neutral-500">{pillar.description}</p>
                  </div>

                  {/* Flèche hover */}
                  <div className="flex items-center gap-2 text-primary-500 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    En savoir plus
                    <ArrowRight className="w-4 h-4" aria-hidden />
                  </div>
                </div>
              ))}
            </div>

            {/* CTA centré */}
            <div className="text-center mt-12">
              <Button
                href="/formation"
                variant="link"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                Découvrir le programme complet
              </Button>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ══════════════════════════════════════════════════════════
          SECTION 4 — TÉMOIGNAGES VIDÉO
          ══════════════════════════════════════════════════════════ */}
      <VideoTestimonialsSection />

      {/* ══════════════════════════════════════════════════════════
          SECTION 5 — ÉQUIPE
          ══════════════════════════════════════════════════════════ */}
      <ScrollReveal variant="fadeUp">
        <TeamSection />
      </ScrollReveal>

      {/* ══════════════════════════════════════════════════════════
          SECTION 5b — ILS NOUS ONT FAIT CONFIANCE (marquee)
          ══════════════════════════════════════════════════════════ */}
      <PartnersBar />

      {/* ══════════════════════════════════════════════════════════
          SECTION 6 — CTA FINAL + COUNTDOWN
          ══════════════════════════════════════════════════════════ */}
      <ScrollReveal variant="fadeUp">
        <section
          className="relative py-20 lg:py-28 overflow-hidden bg-neutral-950"
          aria-labelledby="cta-title"
        >
          {/* Fond sombre premium */}
          <GradientBackground variant="dark" showBlobs showPattern={false} />
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-950 to-primary-950" />

          <div className="container mx-auto px-5 relative z-10">
            <div className="max-w-3xl mx-auto text-center">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/70 text-xs font-medium uppercase tracking-widest">
                <TrendingUp className="w-3.5 h-3.5 text-gold-400" aria-hidden />
                Prochaine session : {NEXT_SESSION.label}
              </div>

              <h2
                id="cta-title"
                className="text-3xl lg:text-4xl font-bold leading-snug text-white mb-4"
              >
                Votre business commence{' '}
                <span className="text-primary-400">dans 53 jours.</span>
              </h2>

              <p className="text-base font-normal leading-relaxed text-white/60 mb-6 max-w-xl mx-auto">
                Rejoignez des centaines de femmes qui ont pris leur destin en main.
                Places limitées — ne laissez pas cette opportunité vous échapper.
              </p>

              {/* Countdown timer */}
              <div className="mb-8">
                <CountdownTimer targetDate={NEXT_SESSION.date} variant="dark" size="md" />
              </div>

              {/* Boutons CTA */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
                <Button href="/inscription" variant="cta" size="md"
                  icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                  Je réserve ma place maintenant
                </Button>
                <a
                  href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, '')}?text=Bonjour%2C%20je%20voudrais%20des%20informations%20sur%20la%20prochaine%20session.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 h-[48px] rounded-xl bg-white/5 border border-white/15 text-white/80 font-medium text-sm hover:bg-white/10 transition-all duration-200"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-green-400" aria-hidden>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Poser une question
                </a>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
