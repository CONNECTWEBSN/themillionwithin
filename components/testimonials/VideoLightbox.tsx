'use client';

import { useEffect, useRef, useCallback } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { VideoData } from './VideoCard';

interface VideoLightboxProps {
  video: VideoData | null;
  onClose: () => void;
}

/**
 * Détecte si l'URL est un embed YouTube ou Vimeo.
 */
function getEmbedType(url: string): 'youtube' | 'vimeo' | 'direct' {
  if (url.includes('youtube.com') || url.includes('youtu.be')) return 'youtube';
  if (url.includes('vimeo.com')) return 'vimeo';
  return 'direct';
}

/**
 * Transforme une URL YouTube standard en URL embed si nécessaire.
 */
function toEmbedUrl(url: string): string {
  // Déjà un embed
  if (url.includes('/embed/')) return url;

  // youtube.com/watch?v=ID
  const watchMatch = url.match(/[?&]v=([^&]+)/);
  if (watchMatch) return `https://www.youtube.com/embed/${watchMatch[1]}`;

  // youtu.be/ID
  const shortMatch = url.match(/youtu\.be\/([^?&]+)/);
  if (shortMatch) return `https://www.youtube.com/embed/${shortMatch[1]}`;

  return url;
}

export function VideoLightbox({ video, onClose }: VideoLightboxProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Fermer avec Échap
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!video) return;

    document.addEventListener('keydown', handleKeyDown);
    // Focus sur le bouton ✕ à l'ouverture
    closeBtnRef.current?.focus();
    // Empêcher le scroll du body
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [video, handleKeyDown]);

  if (!video) return null;

  const embedType = getEmbedType(video.videoUrl);
  const embedUrl =
    embedType === 'youtube'
      ? `${toEmbedUrl(video.videoUrl)}?autoplay=1&rel=0`
      : video.videoUrl;

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center p-4',
        'motion-reduce:transition-none',
      )}
      role="dialog"
      aria-modal="true"
      aria-label={`Témoignage vidéo de ${video.name}`}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden
      />

      {/* Contenu */}
      <div className="relative z-10 w-full max-w-4xl animate-in zoom-in-95 fade-in duration-300">
        {/* Bouton fermer */}
        <button
          ref={closeBtnRef}
          type="button"
          onClick={onClose}
          className={cn(
            'absolute -top-12 right-0 md:-top-2 md:-right-12',
            'w-10 h-10 rounded-full',
            'bg-white/10 hover:bg-white/20',
            'flex items-center justify-center',
            'text-white transition-colors duration-200',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white',
            'motion-reduce:transition-none',
          )}
          aria-label="Fermer la vidéo"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Lecteur */}
        <div className="aspect-video w-full rounded-xl overflow-hidden bg-black shadow-2xl">
          {embedType === 'direct' ? (
            <video
              src={video.videoUrl}
              className="w-full h-full object-contain"
              autoPlay
              controls
              playsInline
            >
              <track kind="captions" />
              Votre navigateur ne supporte pas la lecture vidéo.
            </video>
          ) : (
            <iframe
              src={embedUrl}
              title={`Témoignage de ${video.name}`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          )}
        </div>

        {/* Nom sous la vidéo */}
        <p className="mt-3 text-center text-white/70 text-sm">
          {video.name} — {video.category}
        </p>
      </div>
    </div>
  );
}

export default VideoLightbox;
