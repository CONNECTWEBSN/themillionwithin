/**
 * Cloudinary Utilities — The Million Within Academy
 * Helpers pour gérer les URLs et transformations Cloudinary
 */

import { CLOUDINARY } from './constants';

/**
 * Transformations vidéo disponibles
 */
export type VideoTransformation = {
  quality?: 'auto:low' | 'auto:good' | 'auto:best' | 'auto';
  format?: 'mp4' | 'webm' | 'auto';
  width?: number;
  height?: number;
  crop?: 'fill' | 'fit' | 'scale' | 'limit';
};

/**
 * Génère une URL Cloudinary avec transformations
 * @example
 * getCloudinaryVideoUrl('themillionwithin_temoignages_5_owdtyt', { quality: 'auto:good', width: 1280 })
 */
export function getCloudinaryVideoUrl(
  publicId: string,
  transformations?: VideoTransformation
): string {
  const { baseUrl } = CLOUDINARY;
  
  if (!transformations) {
    return `${baseUrl}/video/upload/${publicId}.mp4`;
  }

  const transforms: string[] = [];

  if (transformations.quality) {
    transforms.push(`q_${transformations.quality.replace(':', '_')}`);
  }
  
  if (transformations.width) {
    transforms.push(`w_${transformations.width}`);
  }
  
  if (transformations.height) {
    transforms.push(`h_${transformations.height}`);
  }
  
  if (transformations.crop) {
    transforms.push(`c_${transformations.crop}`);
  }
  
  if (transformations.format) {
    transforms.push(`f_${transformations.format}`);
  }

  const transformString = transforms.join(',');
  
  return `${baseUrl}/video/upload/${transformString}/${publicId}.mp4`;
}

/**
 * Génère une URL de thumbnail depuis une vidéo Cloudinary
 * @example
 * getCloudinaryThumbnail('themillionwithin_temoignages_5_owdtyt', { width: 640, format: 'jpg' })
 */
export function getCloudinaryThumbnail(
  publicId: string,
  options?: { width?: number; height?: number; format?: 'jpg' | 'png' | 'webp' }
): string {
  const { baseUrl } = CLOUDINARY;
  const { width = 640, height, format = 'jpg' } = options || {};
  
  const transforms: string[] = ['so_0']; // Start offset at 0 seconds
  
  if (width) transforms.push(`w_${width}`);
  if (height) transforms.push(`h_${height}`);
  transforms.push(`c_fill`);
  transforms.push(`f_${format}`);
  transforms.push(`q_auto`);

  const transformString = transforms.join(',');
  
  return `${baseUrl}/video/upload/${transformString}/${publicId}.${format}`;
}

/**
 * Extrait le public ID depuis une URL Cloudinary complète
 * @example
 * extractPublicId('https://res.cloudinary.com/dmlny2qbo/video/upload/v1771503999/themillionwithin_temoignages_5_owdtyt.mp4')
 * // Returns: 'themillionwithin_temoignages_5_owdtyt'
 */
export function extractPublicId(cloudinaryUrl: string): string | null {
  try {
    const urlPattern = /\/upload\/(?:v\d+\/)?([^/.]+)/;
    const match = cloudinaryUrl.match(urlPattern);
    return match ? match[1] : null;
  } catch {
    return null;
  }
}

/**
 * Vérifie si une URL est une URL Cloudinary valide
 */
export function isCloudinaryUrl(url: string): boolean {
  return url.includes('cloudinary.com') || url.includes(CLOUDINARY.cloudName);
}

/**
 * Formats préconfigurés pour différents usages
 */
export const VIDEO_PRESETS = {
  /** Qualité optimale pour témoignages (HD) */
  testimonial: {
    quality: 'auto:good' as const,
    width: 1280,
    format: 'auto' as const,
  },
  /** Qualité mobile (performance optimisée) */
  mobile: {
    quality: 'auto:low' as const,
    width: 640,
    format: 'auto' as const,
  },
  /** Haute qualité pour affichage plein écran */
  fullscreen: {
    quality: 'auto:best' as const,
    width: 1920,
    format: 'auto' as const,
  },
} as const;
