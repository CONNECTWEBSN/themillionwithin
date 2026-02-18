'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Play, Star, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VideoCardProps {
  name: string;
  country: string;
  countryFlag: string;
  quote: string;
  businessType: string;
  thumbnailUrl?: string;
  videoUrl?: string;
  rating?: number;
  className?: string;
  featured?: boolean;
}

export function VideoCard({
  name,
  country,
  countryFlag,
  quote,
  businessType,
  thumbnailUrl,
  videoUrl,
  rating = 5,
  className,
  featured = false,
}: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <article
      className={cn(
        'group relative flex flex-col rounded-2xl overflow-hidden',
        'bg-white border border-neutral-100',
        'shadow-sm hover:shadow-xl transition-all duration-300',
        'hover:-translate-y-1',
        featured && 'ring-2 ring-primary-400 ring-offset-2',
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thumbnail / Vidéo */}
      <div className="relative aspect-video bg-neutral-100 overflow-hidden">
        {playing && videoUrl ? (
          <>
            <video
              ref={videoRef}
              src={videoUrl}
              className="w-full h-full object-contain bg-black"
              autoPlay
              controls
              playsInline
            >
              <track kind="captions" />
              Votre navigateur ne supporte pas la lecture vidéo.
            </video>
            {/* Bouton fermer la vidéo */}
            <button
              type="button"
              onClick={() => { setPlaying(false); if (videoRef.current) videoRef.current.pause(); }}
              className="absolute top-2 right-2 z-10 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-colors"
              aria-label="Fermer la vidéo"
            >
              <X className="w-4 h-4" />
            </button>
          </>
        ) : (
          <>
            {thumbnailUrl ? (
              <Image
                src={thumbnailUrl}
                alt={`Témoignage de ${name}`}
                fill
                className={cn(
                  'object-cover transition-transform duration-500',
                  isHovered && 'scale-105',
                )}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-terre-100 to-gold-100 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary-500/20 flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary-600">
                    {name.charAt(0)}
                  </span>
                </div>
              </div>
            )}

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Bouton play */}
            {videoUrl && (
              <button
                type="button"
                className={cn(
                  'absolute inset-0 flex items-center justify-center',
                  'transition-all duration-300 cursor-pointer',
                )}
                aria-label={`Voir le témoignage vidéo de ${name}`}
                onClick={() => setPlaying(true)}
              >
                <div className={cn(
                  'w-14 h-14 rounded-full flex items-center justify-center',
                  'bg-white/90 backdrop-blur shadow-xl',
                  'transition-all duration-300',
                  'group-hover:scale-110 group-hover:bg-primary-500',
                )}>
                  <Play className={cn(
                    'w-5 h-5 ml-0.5 transition-colors duration-300',
                    'text-primary-500 group-hover:text-white',
                  )} fill="currentColor" />
                </div>
              </button>
            )}

            {/* Badge pays */}
            <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur rounded-full px-3 py-1 text-xs font-semibold text-neutral-700">
              <span aria-hidden>{countryFlag}</span>
              {country}
            </div>

            {/* Étoiles */}
            <div className="absolute top-3 right-3 flex items-center gap-0.5">
              {Array.from({ length: rating }).map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-gold-400 text-gold-400" aria-hidden />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Contenu */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Badge business */}
        <span className="inline-flex self-start text-xs font-semibold bg-primary-50 text-primary-700 px-2.5 py-1 rounded-full">
          {businessType}
        </span>

        {/* Citation */}
        <blockquote className="text-base font-normal leading-relaxed text-neutral-500 text-justify line-clamp-3 flex-1">
          &ldquo;{quote}&rdquo;
        </blockquote>

        {/* Auteur */}
        <div className="flex items-center gap-3 pt-2 border-t border-neutral-100">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center shrink-0">
            <span className="text-white text-xs font-bold">{name.charAt(0)}</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-neutral-900">{name}</p>
            <p className="text-xs text-neutral-500">{countryFlag} {country}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default VideoCard;
