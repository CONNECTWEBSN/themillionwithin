'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { cn } from '@/lib/utils';

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  poster: string;
  posterAlt?: string;
  className?: string;
  rounded?: string;
  priority?: boolean;
  fillHeight?: boolean;
}

export function YouTubeEmbed({
  videoId,
  title,
  poster,
  posterAlt,
  className,
  rounded = 'rounded-3xl',
  priority = false,
  fillHeight = false,
}: YouTubeEmbedProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className={cn(
        'relative w-full overflow-hidden bg-neutral-900 shadow-xl',
        fillHeight ? 'h-full' : 'aspect-video',
        rounded,
        className,
      )}
    >
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3`}
          title={title}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="absolute inset-0 w-full h-full cursor-pointer group"
          aria-label={`Lire la vidéo : ${title}`}
        >
          {/* Image de couverture */}
          <Image
            src={poster}
            alt={posterAlt ?? title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={priority}
          />

          {/* Overlay sombre */}
          <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/30" />

          {/* Bouton Play */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/95 flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-primary-500 group-hover:shadow-[0_0_40px_rgba(249,115,22,0.5)]">
              <Play
                className="w-8 h-8 md:w-10 md:h-10 text-neutral-900 ml-1 transition-colors duration-300 group-hover:text-white"
                fill="currentColor"
              />
            </div>
          </div>
        </button>
      )}

      {/* Fallback noscript — lien direct YouTube */}
      <noscript>
        <a
          href={`https://www.youtube.com/watch?v=${videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#130E09',
            color: '#fff',
            textDecoration: 'underline',
          }}
        >
          Voir la vidéo sur YouTube
        </a>
      </noscript>
    </div>
  );
}
