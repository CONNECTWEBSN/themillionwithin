# 📹 Guide de Migration vers Cloudinary

## Configuration Cloudinary

Votre compte Cloudinary est configuré :
- **Cloud Name**: `dmlny2qbo`
- **Base URL**: `https://res.cloudinary.com/dmlny2qbo`

## URLs déjà migrées

✅ **Vidéo de test** : `themillionwithin_temoignages_5_owdtyt`
- URL complète : `https://res.cloudinary.com/dmlny2qbo/video/upload/v1771503999/themillionwithin_temoignages_5_owdtyt.mp4`

## 🚀 Comment uploader les autres vidéos

### Option 1 : Via l'interface Cloudinary

1. Connectez-vous à [cloudinary.com](https://cloudinary.com)
2. Allez dans **Media Library**
3. Cliquez sur **Upload** > **Video**
4. Uploadez vos vidéos locales du dossier `/public/videos/`

### Option 2 : Via l'API (recommandé pour upload en masse)

Installez le SDK Cloudinary :
```bash
npm install cloudinary
```

Créez un fichier `.env.local` avec vos credentials :
```env
CLOUDINARY_CLOUD_NAME=dmlny2qbo
CLOUDINARY_API_KEY=votre_api_key
CLOUDINARY_API_SECRET=votre_api_secret
```

### Option 3 : Via l'interface web (drag & drop)

Le plus simple pour commencer ! Uploadez fichier par fichier.

## 📝 Liste des vidéos à migrer

### Vidéos prioritaires (utilisées dans VideoTestimonialsSection)
- ✅ `themillionwithin_temoignages (5).mp4` → **MIGRÉ**
- ⏳ `Ramatoulaye Wade (canada).mp4`
- ⏳ `Ramatoulaye Séck (France).mp4`
- ⏳ `Dior Diagne (Sénégal).mp4`

### Autres témoignages (content/testimonials.json)
- ⏳ `Khadidiatou Diop (Espagne).mp4`
- ⏳ `Mame Diarra Sall (Italie).mp4`
- ⏳ `Collette Basse (Sénégal).mp4`
- ⏳ `themillionwithin_temoignages (1).mp4`
- ⏳ `themillionwithin_temoignages (2).mp4`
- ⏳ `themillionwithin_temoignages (3).mp4`
- ⏳ `themillionwithin_temoignages (4).mp4`
- ⏳ `themillionwithin_temoignages (6).mp4`
- ⏳ `themillionwithin_temoignages (7).mp4`
- ⏳ `themillionwithin_temoignages (8).mp4`
- ⏳ `themillionwithin_temoignages (9).mp4`
- ⏳ `themillionwithin_temoignages (10).mp4`
- ⏳ `themillionwithin_temoignages (11).mp4`
- ⏳ `themillionwithin_temoignages (12).mp4`
- ⏳ `themillionwithin_temoignages (13).mp4`
- ⏳ `themillionwithin_temoignages (14).mp4`
- ⏳ `themillionwithin_temoignages (15).mp4`

## 🔄 Après l'upload

Une fois une vidéo uploadée sur Cloudinary, notez le **public_id** (généralement le nom du fichier sans extension).

### Format d'URL Cloudinary

```
https://res.cloudinary.com/dmlny2qbo/video/upload/v[version]/[public_id].mp4
```

Exemple :
```
https://res.cloudinary.com/dmlny2qbo/video/upload/v1771503999/themillionwithin_temoignages_5_owdtyt.mp4
```

### Mettre à jour dans le code

1. **Pour `testimonials.json`** : Remplacez le `videoUrl` local par l'URL Cloudinary
2. **Pour `constants.ts`** : Ajoutez l'entrée dans `TESTIMONIAL_VIDEOS`

## 🎨 Transformations disponibles

Cloudinary permet d'optimiser les vidéos à la volée. Utilisez le helper `lib/cloudinary.ts` :

```typescript
import { getCloudinaryVideoUrl, VIDEO_PRESETS } from '@/lib/cloudinary';

// Qualité optimisée pour témoignages
const videoUrl = getCloudinaryVideoUrl('themillionwithin_temoignages_5_owdtyt', VIDEO_PRESETS.testimonial);

// Qualité mobile (performance)
const mobileUrl = getCloudinaryVideoUrl('themillionwithin_temoignages_5_owdtyt', VIDEO_PRESETS.mobile);
```

## 📊 Avantages de la migration

✅ **Performance** : CDN global ultra-rapide  
✅ **Optimisation** : Compression et streaming adaptatif automatiques  
✅ **Coûts** : Plus besoin d'héberger les vidéos sur votre serveur  
✅ **Thumbnails** : Génération automatique depuis les vidéos  
✅ **Transformations** : Redimensionnement, recadrage, formats à la volée  

## 🔗 Ressources

- [Documentation Cloudinary Video](https://cloudinary.com/documentation/video_manipulation_and_delivery)
- [Upload API](https://cloudinary.com/documentation/upload_videos)
- [Transformations vidéo](https://cloudinary.com/documentation/video_transformation_reference)
