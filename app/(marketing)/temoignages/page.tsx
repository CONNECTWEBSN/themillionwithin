'use client';

import { useState, useMemo } from 'react';
import { ArrowRight, Star, Play, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { VideoCard } from '@/components/ui/VideoCard';
import { HeroMinimal } from '@/components/sections/HeroMinimal';
import { FloatingCTA } from '@/components/shared/FloatingCTA';
import { SITE } from '@/lib/constants';
import testimonials from '@/content/testimonials.json';

// Nombre de témoignages à afficher par page
const ITEMS_PER_PAGE = 6;

// Témoignage vedette (le premier avec thumbnail)
const FEATURED = testimonials.find(t => t.thumbnailUrl && t.thumbnailUrl !== '') || testimonials[0];

// Filtres dynamiques
const ALL_COUNTRIES = ['Tous', ...Array.from(new Set(testimonials.map((t) => t.country)))];
const ALL_BUSINESS = ['Tous', ...Array.from(new Set(testimonials.map((t) => t.businessType)))];

export default function TemoignagesPage() {
  const [activeCountry, setActiveCountry] = useState('Tous');
  const [activeBusiness, setActiveBusiness] = useState('Tous');
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [featuredVideoOpen, setFeaturedVideoOpen] = useState(false);

  // Filtrage des témoignages
  const filtered = useMemo(() => {
    return testimonials.filter((t) => {
      // Exclure le témoignage vedette de la grille
      if (t.id === FEATURED.id) return false;
      const matchCountry = activeCountry === 'Tous' || t.country === activeCountry;
      const matchBusiness = activeBusiness === 'Tous' || t.businessType === activeBusiness;
      return matchCountry && matchBusiness;
    });
  }, [activeCountry, activeBusiness]);

  // Témoignages visibles (pagination progressive)
  const visibleTestimonials = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  // Comptage par pays pour les filtres
  const countByCountry = useMemo(() => {
    const counts: Record<string, number> = { Tous: testimonials.length - 1 };
    testimonials.forEach(t => {
      if (t.id !== FEATURED.id) {
        counts[t.country] = (counts[t.country] || 0) + 1;
      }
    });
    return counts;
  }, []);

  // Reset filters
  const resetFilters = () => {
    setActiveCountry('Tous');
    setActiveBusiness('Tous');
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const isFiltered = activeCountry !== 'Tous' || activeBusiness !== 'Tous';

  return (
    <>
      {/* ─── HERO COMPACT + STATS INTÉGRÉS ──────────────────────── */}
      <HeroMinimal
        label="Témoignages"
        title="673 femmes ont osé,"
        titleHighlight="à votre tour."
        breadcrumbs={[{ label: 'Accueil', href: '/' }, { label: 'Témoignages' }]}
        size="sm"
      >
        {/* Stats inline */}
        <div className="flex flex-wrap items-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <span className="font-heading font-black text-2xl text-primary-500">673+</span>
            <span className="text-sm text-neutral-600">formées</span>
          </div>
          <div className="w-px h-6 bg-neutral-300 hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="font-heading font-black text-2xl text-primary-500">10</span>
            <span className="text-sm text-neutral-600">pays</span>
          </div>
          <div className="w-px h-6 bg-neutral-300 hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="font-heading font-black text-2xl text-gold-500">5.0</span>
            <span className="text-sm text-neutral-600">★ note moyenne</span>
          </div>
        </div>
      </HeroMinimal>

      {/* ─── TÉMOIGNAGE VEDETTE ──────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-neutral-900" aria-label="Témoignage vedette">
        <div className="container mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Vidéo */}
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group">
              {FEATURED.thumbnailUrl ? (
                <img 
                  src={FEATURED.thumbnailUrl} 
                  alt={FEATURED.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-neutral-800 flex items-center justify-center">
                  <Play className="w-16 h-16 text-neutral-600" />
                </div>
              )}
              
              {/* Overlay + Play button */}
              <button
                type="button"
                onClick={() => setFeaturedVideoOpen(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-all duration-300"
                aria-label={`Regarder le témoignage de ${FEATURED.name}`}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary-500 flex items-center justify-center shadow-brand-lg group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-6 h-6 md:w-8 md:h-8 text-white fill-current ml-1" />
                </div>
              </button>

              {/* Badge pays */}
              <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-neutral-900 flex items-center gap-1.5">
                <span>{FEATURED.countryFlag}</span>
                <span>{FEATURED.country}</span>
              </div>

              {/* Étoiles */}
              <div className="absolute top-4 right-4 flex gap-0.5">
                {[...Array(FEATURED.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                ))}
              </div>
            </div>

            {/* Citation */}
            <div className="text-white">
              <Badge variant="gold" className="mb-4">Témoignage vedette</Badge>
              
              <blockquote className="text-lg md:text-xl lg:text-2xl font-medium leading-relaxed mb-6 text-white/95">
                &ldquo;{FEATURED.quote}&rdquo;
              </blockquote>
              
              <div className="flex items-center gap-4 mb-8">
                <span className="text-4xl">{FEATURED.countryFlag}</span>
                <div>
                  <p className="font-bold text-lg text-white">{FEATURED.name}</p>
                  <p className="text-neutral-400 text-sm">{FEATURED.businessType} — {FEATURED.country}</p>
                </div>
              </div>

              <Button 
                href="/inscription" 
                variant="cta" 
                size="md"
                icon={<ArrowRight className="w-4 h-4" />} 
                iconPosition="right"
              >
                Rejoindre à mon tour
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FILTRES COMPACTS ────────────────────────────────────── */}
      <section className="bg-white sticky top-20 z-40 border-b border-neutral-200 py-4 shadow-sm" aria-label="Filtres">
        <div className="container mx-auto px-5">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Tabs pays - scroll horizontal sur mobile */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide -mx-1 px-1">
              {ALL_COUNTRIES.map((country) => {
                const count = countByCountry[country] || 0;
                return (
                  <button
                    key={country}
                    type="button"
                    onClick={() => {
                      setActiveCountry(country);
                      setVisibleCount(ITEMS_PER_PAGE);
                    }}
                    className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                      activeCountry === country
                        ? 'bg-primary-500 text-white shadow-md'
                        : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                    }`}
                    aria-pressed={activeCountry === country}
                  >
                    {country}
                    <span className={`ml-1.5 ${activeCountry === country ? 'text-white/70' : 'text-neutral-400'}`}>
                      ({count})
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Dropdown secteur + Actions */}
            <div className="flex items-center gap-3 flex-wrap">
              {/* Select secteur */}
              <div className="relative">
                <select
                  value={activeBusiness}
                  onChange={(e) => {
                    setActiveBusiness(e.target.value);
                    setVisibleCount(ITEMS_PER_PAGE);
                  }}
                  className="appearance-none pl-4 pr-10 py-2.5 rounded-xl border border-neutral-200 bg-white text-sm font-medium text-neutral-700 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 focus:outline-none cursor-pointer"
                >
                  <option value="Tous">Tous les secteurs</option>
                  {ALL_BUSINESS.filter(b => b !== 'Tous').map((biz) => (
                    <option key={biz} value={biz}>{biz}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
              </div>

              {/* Reset */}
              {isFiltered && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg font-medium transition-colors flex items-center gap-1"
                >
                  <X className="w-3.5 h-3.5" />
                  Réinitialiser
                </button>
              )}

              {/* Compteur résultats */}
              <Badge variant="brand" className="ml-auto lg:ml-0">
                {filtered.length} résultat{filtered.length > 1 ? 's' : ''}
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GRILLE TÉMOIGNAGES ──────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-neutral-50" aria-labelledby="testimonials-grid-title">
        <div className="container mx-auto px-5">
          <h2 id="testimonials-grid-title" className="sr-only">Tous les témoignages</h2>

          {visibleTestimonials.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleTestimonials.map((t, i) => (
                  <VideoCard
                    key={t.id}
                    name={t.name}
                    country={t.country}
                    countryFlag={t.countryFlag}
                    quote={t.quote}
                    businessType={t.businessType}
                    thumbnailUrl={t.thumbnailUrl || undefined}
                    videoUrl={t.videoUrl || undefined}
                    rating={t.rating}
                    featured={i === 0 && !isFiltered}
                  />
                ))}
              </div>

              {/* Load More */}
              {hasMore && (
                <div className="text-center mt-10">
                  <button
                    type="button"
                    onClick={() => setVisibleCount(prev => prev + ITEMS_PER_PAGE)}
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-2xl bg-white border-2 border-neutral-200 text-neutral-700 font-semibold hover:border-primary-300 hover:text-primary-600 hover:shadow-md transition-all duration-200"
                  >
                    Voir plus de témoignages
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <p className="text-sm text-neutral-500 mt-2">
                    {visibleCount} sur {filtered.length} témoignages affichés
                  </p>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16 text-neutral-500">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neutral-200 flex items-center justify-center">
                <Star className="w-8 h-8 text-neutral-400" />
              </div>
              <p className="text-lg font-medium mb-2">Aucun résultat pour ces filtres</p>
              <button
                type="button"
                onClick={resetFilters}
                className="text-primary-600 hover:underline text-sm font-medium"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ─── CTA FINAL ───────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary-500 to-primary-600" aria-label="Appel à l'action">
        <div className="container mx-auto px-5 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Prête à écrire votre propre histoire ?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Rejoignez les 673+ femmes qui ont déjà transformé leur vie avec The Million Within Academy.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              href="/inscription" 
              variant="gold" 
              size="md"
              icon={<ArrowRight className="w-4 h-4" />} 
              iconPosition="right"
            >
              Réserver ma place
            </Button>
            <a
              href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, '')}?text=Bonjour, j'ai vu les témoignages et je voudrais avoir plus d'informations.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white font-semibold hover:bg-white/20 transition-colors border border-white/20"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Poser une question
            </a>
          </div>
        </div>
      </section>

      {/* ─── LIGHTBOX VIDÉO VEDETTE ──────────────────────────────── */}
      {featuredVideoOpen && FEATURED.videoUrl && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setFeaturedVideoOpen(false)}
        >
          <button
            type="button"
            onClick={() => setFeaturedVideoOpen(false)}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Fermer la vidéo"
          >
            <X className="w-6 h-6" />
          </button>
          <div 
            className="w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <video 
              src={FEATURED.videoUrl}
              controls
              autoPlay
              className="w-full h-full rounded-xl"
            />
          </div>
        </div>
      )}

      <FloatingCTA text="Rejoindre à mon tour" />
    </>
  );
}
