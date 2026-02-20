'use client';

import { useState } from 'react';
import { Play, CheckCircle, XCircle } from 'lucide-react';
import { getCloudinaryVideoUrl, getCloudinaryThumbnail, VIDEO_PRESETS, isCloudinaryUrl, extractPublicId } from '@/lib/cloudinary';

export default function CloudinaryTestPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  // URL de test Cloudinary
  const testVideoUrl = 'https://res.cloudinary.com/dmlny2qbo/video/upload/v1771503999/themillionwithin_temoignages_5_owdtyt.mp4';
  const publicId = extractPublicId(testVideoUrl);
  
  // Générer différentes versions
  const originalUrl = testVideoUrl;
  const optimizedUrl = publicId ? getCloudinaryVideoUrl(publicId, VIDEO_PRESETS.testimonial) : '';
  const mobileUrl = publicId ? getCloudinaryVideoUrl(publicId, VIDEO_PRESETS.mobile) : '';
  const thumbnailUrl = publicId ? getCloudinaryThumbnail(publicId, { width: 640, format: 'jpg' }) : '';

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">
            🎬 Test Cloudinary
          </h1>
          <p className="text-neutral-600 text-lg">
            Vérification de l'intégration vidéo Cloudinary
          </p>
        </div>

        {/* Statut */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">📊 Statut</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              {isCloudinaryUrl(testVideoUrl) ? (
                <CheckCircle className="text-green-500 w-5 h-5" />
              ) : (
                <XCircle className="text-red-500 w-5 h-5" />
              )}
              <span>URL Cloudinary valide</span>
            </div>
            <div className="flex items-center gap-3">
              {videoLoaded ? (
                <CheckCircle className="text-green-500 w-5 h-5" />
              ) : videoError ? (
                <XCircle className="text-red-500 w-5 h-5" />
              ) : (
                <div className="w-5 h-5 rounded-full border-2 border-neutral-300" />
              )}
              <span>Vidéo chargée</span>
            </div>
            <div className="flex items-center gap-3">
              {publicId ? (
                <CheckCircle className="text-green-500 w-5 h-5" />
              ) : (
                <XCircle className="text-red-500 w-5 h-5" />
              )}
              <span>Public ID extrait: <code className="text-sm bg-neutral-100 px-2 py-1 rounded">{publicId || 'N/A'}</code></span>
            </div>
          </div>
        </div>

        {/* Lecteur vidéo principal */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="p-6 border-b border-neutral-200">
            <h2 className="text-xl font-semibold">🎥 Lecteur Vidéo</h2>
            <p className="text-sm text-neutral-600 mt-1">Vidéo : themillionwithin_temoignages_5</p>
          </div>
          
          <div className="relative aspect-video bg-black">
            {!isPlaying ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={thumbnailUrl}
                  alt="Thumbnail"
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <button
                  onClick={() => setIsPlaying(true)}
                  className="relative z-10 w-20 h-20 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <Play className="w-8 h-8 text-primary-600 ml-1" fill="currentColor" />
                </button>
              </div>
            ) : (
              <video
                src={originalUrl}
                controls
                autoPlay
                className="w-full h-full"
                onLoadedData={() => setVideoLoaded(true)}
                onError={() => setVideoError(true)}
              >
                Votre navigateur ne supporte pas la lecture vidéo.
              </video>
            )}
          </div>
        </div>

        {/* URLs générées */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">🔗 URLs Générées</h2>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-neutral-700 block mb-2">
                URL Originale
              </label>
              <input
                type="text"
                value={originalUrl}
                readOnly
                className="w-full px-4 py-2 text-sm bg-neutral-50 border border-neutral-200 rounded-lg font-mono"
              />
            </div>
            
            <div>
              <label className="text-sm font-medium text-neutral-700 block mb-2">
                URL Optimisée (Preset: Testimonial)
              </label>
              <input
                type="text"
                value={optimizedUrl}
                readOnly
                className="w-full px-4 py-2 text-sm bg-neutral-50 border border-neutral-200 rounded-lg font-mono"
              />
            </div>
            
            <div>
              <label className="text-sm font-medium text-neutral-700 block mb-2">
                URL Mobile (Preset: Mobile)
              </label>
              <input
                type="text"
                value={mobileUrl}
                readOnly
                className="w-full px-4 py-2 text-sm bg-neutral-50 border border-neutral-200 rounded-lg font-mono"
              />
            </div>
            
            <div>
              <label className="text-sm font-medium text-neutral-700 block mb-2">
                Thumbnail (640x360)
              </label>
              <input
                type="text"
                value={thumbnailUrl}
                readOnly
                className="w-full px-4 py-2 text-sm bg-neutral-50 border border-neutral-200 rounded-lg font-mono"
              />
              <img
                src={thumbnailUrl}
                alt="Thumbnail preview"
                className="mt-3 rounded-lg border border-neutral-200 max-w-sm"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="640" height="360"%3E%3Crect fill="%23ddd" width="640" height="360"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EThumbnail non disponible%3C/text%3E%3C/svg%3E';
                }}
              />
            </div>
          </div>
        </div>

        {/* Informations de configuration */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">⚙️ Configuration</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium text-neutral-700">Cloud Name:</span>
              <code className="ml-2 text-primary-600">dmlny2qbo</code>
            </div>
            <div>
              <span className="font-medium text-neutral-700">Base URL:</span>
              <code className="ml-2 text-primary-600 text-xs">res.cloudinary.com</code>
            </div>
            <div className="md:col-span-2">
              <span className="font-medium text-neutral-700">Public ID:</span>
              <code className="ml-2 text-primary-600">{publicId}</code>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 text-center">
          <p className="text-sm text-neutral-600">
            ✅ Si la vidéo se lit correctement, l'intégration Cloudinary fonctionne !
          </p>
          <p className="text-xs text-neutral-500 mt-2">
            Pour migrer les autres vidéos, consultez le guide dans{' '}
            <code className="bg-neutral-100 px-2 py-1 rounded">scripts/migrate-to-cloudinary.md</code>
          </p>
        </div>
      </div>
    </div>
  );
}
