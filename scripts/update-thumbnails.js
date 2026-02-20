/**
 * Script pour mettre à jour automatiquement testimonials.json avec les thumbnails Cloudinary
 * Usage: node scripts/update-thumbnails.js
 */

const fs = require('fs');
const path = require('path');

// Configuration Cloudinary
const CLOUDINARY_CLOUD_NAME = 'dmlny2qbo';
const CLOUDINARY_BASE_URL = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}`;

/**
 * Extrait le public ID depuis une URL Cloudinary
 */
function extractPublicId(cloudinaryUrl) {
  const urlPattern = /\/upload\/(?:v\d+\/)?([^/.]+)/;
  const match = cloudinaryUrl.match(urlPattern);
  return match ? match[1] : null;
}

/**
 * Génère une URL de thumbnail Cloudinary
 */
function generateThumbnailUrl(publicId) {
  if (!publicId) return '';
  
  // Transformations: start at 0s, 640px width, fill crop, jpg format, auto quality
  const transforms = 'so_0,w_640,c_fill,f_jpg,q_auto';
  return `${CLOUDINARY_BASE_URL}/video/upload/${transforms}/${publicId}.jpg`;
}

/**
 * Met à jour le fichier testimonials.json
 */
function updateTestimonials() {
  const testimonialsPath = path.join(__dirname, '..', 'content', 'testimonials.json');
  
  console.log('📹 Mise à jour des thumbnails Cloudinary...\n');
  
  // Lire le fichier JSON
  const testimonials = JSON.parse(fs.readFileSync(testimonialsPath, 'utf-8'));
  
  let updatedCount = 0;
  
  // Parcourir tous les témoignages
  testimonials.forEach((testimonial, index) => {
    const { videoUrl, thumbnailUrl } = testimonial;
    
    // Si c'est une URL Cloudinary et qu'il n'y a pas de thumbnail
    if (videoUrl && videoUrl.includes('cloudinary.com') && !thumbnailUrl) {
      const publicId = extractPublicId(videoUrl);
      
      if (publicId) {
        const newThumbnail = generateThumbnailUrl(publicId);
        testimonials[index].thumbnailUrl = newThumbnail;
        updatedCount++;
        
        console.log(`✅ Témoignage #${testimonial.id} (${testimonial.name})`);
        console.log(`   Public ID: ${publicId}`);
        console.log(`   Thumbnail: ${newThumbnail}\n`);
      }
    }
  });
  
  // Sauvegarder le fichier
  fs.writeFileSync(testimonialsPath, JSON.stringify(testimonials, null, 2), 'utf-8');
  
  console.log(`\n✨ Terminé ! ${updatedCount} thumbnail(s) généré(s)`);
}

// Exécution
try {
  updateTestimonials();
} catch (error) {
  console.error('❌ Erreur:', error.message);
  process.exit(1);
}
