'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { GradientBackground } from '@/components/shared/GradientBackground';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { VideoCard } from './VideoCard';
import { VideoLightbox } from './VideoLightbox';
import { TESTIMONIAL_VIDEOS } from '@/lib/constants';
import type { VideoData } from './VideoCard';

/* ─── Données témoignages vidéo ─────────────────────────────────── */

const testimonials: VideoData[] = [
  {
    id: 1,
    videoUrl: TESTIMONIAL_VIDEOS['ramatoulaye-wade'],
    thumbnail: '/images/testimonials/ramatoulaye-wade.jpg',
    duration: '1:47',
    stars: 5,
    quote:
      'En 5 jours, j\'ai lancé mon business et je génère maintenant un revenu stable tout en étant présente pour mes enfants.',
    category: 'Commerce en ligne / en présentiel',
    name: 'Ramatoulaye Wade',
    country: 'Canada',
    countryFlag: '🇨🇦',
    isFeatured: false,
  },
  {
    id: 2,
    videoUrl: TESTIMONIAL_VIDEOS['ramatoulaye-seck'],
    thumbnail: '/images/testimonials/ramatoulaye-seck.jpg',
    duration: '2:34',
    stars: 5,
    quote:
      'Je n\'aurais jamais cru qu\'en moins d\'une semaine, j\'aurais un business plan solide et mes premiers clients.',
    category: 'Coaching beauté',
    name: 'Ramatoulaye Séck',
    country: 'France',
    countryFlag: '🇫🇷',
    isFeatured: true,
  },
  {
    id: 3,
    videoUrl: TESTIMONIAL_VIDEOS['dior-diagne'],
    thumbnail: '/images/testimonials/dior-diagne.jpg',
    duration: '2:11',
    stars: 5,
    quote:
      'Sans capital de départ, j\'ai réussi à créer mon entreprise grâce aux stratégies enseignées.',
    category: 'Formation professionnelle',
    name: 'Dior Diagne',
    country: 'Sénégal',
    countryFlag: '🇸🇳',
    isFeatured: false,
  },
];

/* ─── Section ───────────────────────────────────────────────────── */

export function VideoTestimonialsSection() {
  const [activeVideo, setActiveVideo] = useState<VideoData | null>(null);

  return (
    <>
      <section
        className="py-20 lg:py-28 bg-primary-25 relative overflow-hidden"
        aria-labelledby="video-testimonials-title"
      >
        <GradientBackground variant="section" showBlobs={false} showPattern />

        <div className="container mx-auto px-5 relative z-10">
          {/* ── En-tête ── */}
          <ScrollReveal variant="fadeUp">
            <div className="text-center mb-16">
              <Badge variant="brand" className="mb-4">
                Témoignages
              </Badge>
              <h2
                id="video-testimonials-title"
                className="text-3xl lg:text-4xl font-bold leading-snug text-neutral-900 mb-4"
              >
                Elles ont osé.{' '}
                <span className="text-primary-500">Elles ont réussi.</span>
              </h2>
              <p className="text-neutral-600 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
                Ils partagent avec vous leurs expériences, leurs réussites et la valeur ajoutée de notre accompagnement.
              </p>
            </div>
          </ScrollReveal>

          {/* ── Grille 3 colonnes ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.id} variant="fadeUp" delay={i * 0.1}>
                <VideoCard
                  videoUrl={t.videoUrl}
                  thumbnail={t.thumbnail}
                  duration={t.duration}
                  stars={t.stars}
                  quote={t.quote}
                  category={t.category}
                  name={t.name}
                  country={t.country}
                  countryFlag={t.countryFlag}
                  isFeatured={t.isFeatured}
                  onPlay={() => setActiveVideo(t)}
                />
              </ScrollReveal>
            ))}
          </div>

          {/* ── Lien vers tous les témoignages ── */}
          <ScrollReveal variant="fadeUp" delay={0.3}>
            <div className="text-center">
              <Link
                href="/temoignages"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white border border-neutral-200 text-neutral-700 font-semibold hover:border-primary-300 hover:text-primary-600 hover:shadow-md transition-all duration-200 group"
              >
                Voir plus
                <ArrowRight
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  aria-hidden
                />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Lightbox ── */}
      <VideoLightbox
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
      />
    </>
  );
}

export default VideoTestimonialsSection;
