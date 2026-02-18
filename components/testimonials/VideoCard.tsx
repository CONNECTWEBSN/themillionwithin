'use client';

import Image from 'next/image';
import { Play, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface VideoData {
  id: number | string;
  videoUrl: string;
  thumbnail: string;
  duration: string;
  stars: number;
  quote: string;
  category: string;
  name: string;
  country: string;
  countryFlag?: string;
  isFeatured?: boolean;
}

interface VideoCardProps {
  videoUrl: string;
  thumbnail: string;
  duration: string;
  stars: number;
  quote: string;
  category: string;
  name: string;
  country: string;
  countryFlag?: string;
  isFeatured?: boolean;
  onPlay: () => void;
}

export function VideoCard({
  thumbnail,
  duration,
  stars,
  quote,
  category,
  name,
  country,
  countryFlag,
  isFeatured = false,
  onPlay,
}: VideoCardProps) {
  return (
    <article
      className={cn(
        'group relative flex flex-col',
        'rounded-2xl bg-white shadow-md',
        'hover:shadow-xl hover:-translate-y-1',
        'transition-all duration-300',
        isFeatured && 'ring-2 ring-orange-400 ring-offset-2',
      )}
    >
      {/* ── Thumbnail ── */}
      <div className="relative aspect-video overflow-hidden rounded-t-2xl">
        <Image
          src={thumbnail}
          alt={`Témoignage de ${name}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={isFeatured}
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Bouton play */}
        <button
          type="button"
          onClick={onPlay}
          aria-label={`Voir le témoignage de ${name}`}
          className={cn(
            'absolute inset-0 flex items-center justify-center',
            'group-hover:scale-110 transition-transform duration-200',
            'motion-reduce:transition-none motion-reduce:hover:scale-100',
          )}
        >
          <span
            className={cn(
              'w-14 h-14 rounded-full',
              'bg-white/30 backdrop-blur-sm',
              'flex items-center justify-center',
              'hover:bg-white transition-colors duration-200',
              'motion-reduce:transition-none',
            )}
          >
            <Play
              className="text-orange-500 w-6 h-6 ml-1"
              fill="currentColor"
              aria-hidden
            />
          </span>
        </button>

        {/* Duration pill */}
        <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded-full">
          {duration}
        </span>

        {/* Badge vedette */}
        {isFeatured && (
          <span className="absolute top-3 right-3 bg-gradient-to-r from-orange-400 to-orange-500 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-md">
            ⭐ Vedette
          </span>
        )}
      </div>

      {/* ── Contenu ── */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Étoiles */}
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                'w-4 h-4',
                i < stars
                  ? 'fill-orange-400 text-orange-400'
                  : 'fill-neutral-200 text-neutral-200',
              )}
              aria-hidden
            />
          ))}
        </div>

        {/* Citation */}
        <blockquote className="text-base font-normal leading-relaxed text-neutral-500 text-justify line-clamp-2 flex-1">
          &ldquo;{quote}&rdquo;
        </blockquote>

        {/* Badge catégorie */}
        <span className="inline-block self-start bg-orange-100 text-orange-600 text-xs font-medium px-3 py-1 rounded-full">
          {category}
        </span>

        {/* Auteur */}
        <div className="flex items-center gap-3 pt-3 border-t border-neutral-100">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shrink-0">
            <span className="text-white text-sm font-bold">
              {name.charAt(0)}
            </span>
          </div>
          <div className="min-w-0">
            <p className="font-heading font-semibold text-neutral-900 text-sm truncate">
              {name}
            </p>
            <p className="text-neutral-500 text-xs">
              {countryFlag && <span aria-hidden>{countryFlag} </span>}
              {country}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default VideoCard;
