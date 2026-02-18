'use client';

import { useState } from 'react';
import { ArrowRight, Star, Filter, Quote } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { VideoCard } from '@/components/ui/VideoCard';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { HeroMinimal } from '@/components/sections/HeroMinimal';
import { FloatingCTA } from '@/components/shared/FloatingCTA';
import { SITE } from '@/lib/constants';
import testimonials from '@/content/testimonials.json';

const ALL_COUNTRIES = ['Tous', ...Array.from(new Set(testimonials.map((t) => t.country)))];
const ALL_BUSINESS = ['Tous', ...Array.from(new Set(testimonials.map((t) => t.businessType)))];

const FEATURED_QUOTES = [
  {
    quote: "Cette formation a transformé ma vie. En 5 jours, j'ai lancé mon business et je génère maintenant un revenu stable tout en étant présente pour mes enfants.",
    name: "Ramatoulaye Wade",
    country: "Canada",
    flag: "🇨🇦",
  },
  {
    quote: "Nous croyons qu'aucune femme ne devrait avoir à choisir entre sa famille et ses rêves. Cette formation m'a prouvé que c'est possible.",
    name: "Dior Diagne",
    country: "Sénégal",
    flag: "🇸🇳",
  },
];

export default function TemoignagesPage() {
  const [activeCountry, setActiveCountry] = useState('Tous');
  const [activeBusiness, setActiveBusiness] = useState('Tous');

  const filtered = testimonials.filter((t) => {
    const matchCountry = activeCountry === 'Tous' || t.country === activeCountry;
    const matchBusiness = activeBusiness === 'Tous' || t.businessType === activeBusiness;
    return matchCountry && matchBusiness;
  });

  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────────── */}
      <HeroMinimal
        label="Témoignages"
        title="Elles ont osé,"
        titleHighlight="elles ont réussi."
        subtitle="Découvrez les histoires vraies de femmes qui ont transformé leur vie avec The Million Within Academy. Chaque témoignage est une preuve que c'est possible."
        breadcrumbs={[{ label: 'Accueil', href: '/' }, { label: 'Témoignages' }]}
        size="md"
      >
        <Button href="/inscription" variant="cta" size="lg"
          icon={<ArrowRight className="w-5 h-5" />} iconPosition="right">
          Rejoindre à mon tour
        </Button>
      </HeroMinimal>

      {/* ─── STATS ─────────────────────────────────────────────── */}
      <section className="bg-neutral-900 py-12" aria-label="Statistiques">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 496, suffix: '+', label: 'Femmes formées' },
              { value: 38, suffix: '+', label: 'Vidéos témoignages' },
              { value: 10, suffix: '', label: 'Pays représentés' },
              { value: 5, suffix: '.0', label: 'Note moyenne ★' },
            ].map((s, i) => (
              <div key={i}>
                <p className="font-heading font-black text-3xl md:text-4xl text-white mb-1">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </p>
                <p className="text-neutral-400 text-sm font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CITATIONS VEDETTES ────────────────────────────────── */}
      <section className="py-16 bg-[#FFF4E8]" aria-label="Citations phares">
        <div className="container mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-6">
            {FEATURED_QUOTES.map((q, i) => (
              <div
                key={i}
                className="relative p-8 rounded-3xl bg-white border border-primary-100 shadow-sm overflow-hidden"
              >
                <Quote className="absolute top-6 left-6 w-8 h-8 text-primary-100" aria-hidden />
                <div className="flex gap-0.5 mb-4">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-gold-400 text-gold-400" aria-hidden />
                  ))}
                </div>
                <blockquote className="text-neutral-800 text-lg font-medium leading-relaxed mb-6">
                  &ldquo;{q.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center">
                    <span className="font-bold text-primary-700">{q.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 text-sm">{q.name}</p>
                    <p className="text-neutral-500 text-xs">{q.flag} {q.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FILTRES + GRILLE ──────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="testimonials-grid-title">
        <div className="container mx-auto px-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <h2 id="testimonials-grid-title" className="font-heading font-bold text-2xl text-neutral-900">
              <Filter className="inline w-5 h-5 mr-2 text-primary-500" aria-hidden />
              Filtrer les témoignages
            </h2>
            <Badge variant="brand">{filtered.length} résultat{filtered.length > 1 ? 's' : ''}</Badge>
          </div>

          {/* Filtres pays */}
          <div className="mb-4">
            <p className="text-xs text-neutral-500 font-semibold uppercase tracking-wider mb-3">Par pays</p>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrer par pays">
              {ALL_COUNTRIES.map((country) => (
                <button
                  key={country}
                  type="button"
                  onClick={() => setActiveCountry(country)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCountry === country
                      ? 'bg-primary-500 text-white shadow-brand-sm'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                  aria-pressed={activeCountry === country}
                >
                  {country}
                </button>
              ))}
            </div>
          </div>

          {/* Filtres type de business */}
          <div className="mb-12">
            <p className="text-xs text-neutral-500 font-semibold uppercase tracking-wider mb-3">Par secteur</p>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrer par secteur">
              {ALL_BUSINESS.map((biz) => (
                <button
                  key={biz}
                  type="button"
                  onClick={() => setActiveBusiness(biz)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeBusiness === biz
                      ? 'bg-gold-400 text-neutral-900 font-bold shadow-gold-sm'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                  aria-pressed={activeBusiness === biz}
                >
                  {biz}
                </button>
              ))}
            </div>
          </div>

          {/* Grille de témoignages */}
          {filtered.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((t, i) => (
                <VideoCard
                  key={t.id}
                  name={t.name}
                  country={t.country}
                  countryFlag={t.countryFlag}
                  quote={t.quote}
                  businessType={t.businessType}
                  thumbnailUrl={t.thumbnailUrl}
                  videoUrl={t.videoUrl || undefined}
                  rating={t.rating}
                  featured={i === 0}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-neutral-500">
              <p className="text-lg font-medium mb-2">Aucun résultat pour ces filtres</p>
              <button
                type="button"
                onClick={() => { setActiveCountry('Tous'); setActiveBusiness('Tous'); }}
                className="text-primary-600 hover:underline text-sm"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ─── CTA BAS DE PAGE ───────────────────────────────────── */}
      <section className="py-16 bg-primary-50 border-t border-primary-100" aria-label="Appel à l'action">
        <div className="container mx-auto px-5 text-center">
          <h2 className="text-h1 text-neutral-900 mb-4">
            Prête à écrire votre{' '}
            <span className="text-primary-500">propre histoire ?</span>
          </h2>
          <p className="text-neutral-600 mb-8 max-w-xl mx-auto">
            Rejoignez les centaines de femmes qui ont déjà transformé leur vie.
            La prochaine session commence bientôt.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/inscription" variant="cta" size="lg"
              icon={<ArrowRight className="w-5 h-5" />} iconPosition="right">
              Réserver ma place
            </Button>
            <a
              href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, '')}?text=Bonjour, j'ai vu les témoignages et je voudrais avoir plus d'informations sur la formation.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors shadow-sm"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Poser une question
            </a>
          </div>
        </div>
      </section>

      <FloatingCTA text="Rejoindre à mon tour" />
    </>
  );
}
