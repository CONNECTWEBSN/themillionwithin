# 📂 Scripts Utilitaires - The Million Within

Ce dossier contient des scripts et guides pour faciliter la gestion du projet.

## 📹 Scripts Cloudinary

### `update-thumbnails.js`
Génère automatiquement les thumbnails Cloudinary pour toutes les vidéos migrées.

**Usage** :
```bash
node scripts/update-thumbnails.js
```

**Fonctionnement** :
- Parcourt `content/testimonials.json`
- Détecte les URLs Cloudinary (sans thumbnail)
- Génère les URLs de thumbnails automatiquement
- Met à jour le fichier JSON

**Exemple de sortie** :
```
📹 Mise à jour des thumbnails Cloudinary...

✅ Témoignage #11 (Témoignage TMW)
   Public ID: themillionwithin_temoignages_5_owdtyt
   Thumbnail: https://res.cloudinary.com/.../themillionwithin_temoignages_5_owdtyt.jpg

✨ Terminé ! 1 thumbnail(s) généré(s)
```

---

## 📚 Guides de Migration

### `migrate-to-cloudinary.md`
Guide complet pour migrer vos vidéos vers Cloudinary.

**Contenu** :
- Configuration Cloudinary
- Liste des vidéos à migrer
- Instructions d'upload
- Format des URLs
- Transformations disponibles

### `UPLOAD_GUIDE.md`
Guide détaillé avec plusieurs méthodes d'upload.

**Contenu** :
- Script d'upload automatisé (Node.js)
- Upload manuel via interface web
- Mapping des fichiers
- Optimisations recommandées
- Checklist de vérification

---

## 🔄 Workflow Recommandé

### Étape 1 : Upload sur Cloudinary
Choisissez votre méthode :

**Option A - Interface Web** (recommandé pour commencer) :
1. Allez sur [cloudinary.com](https://cloudinary.com)
2. Media Library → Upload
3. Uploadez vos vidéos
4. Notez les public_ids

**Option B - Script automatisé** :
1. Installez le SDK : `npm install cloudinary dotenv`
2. Configurez `.env.local`
3. Exécutez : `node scripts/upload-videos.js` (à créer selon UPLOAD_GUIDE.md)

### Étape 2 : Mettre à jour testimonials.json
Remplacez les URLs locales par les URLs Cloudinary :

```json
{
  "videoUrl": "https://res.cloudinary.com/dmlny2qbo/video/upload/v[VERSION]/[PUBLIC_ID].mp4"
}
```

### Étape 3 : Générer les thumbnails
```bash
node scripts/update-thumbnails.js
```

### Étape 4 : Vérifier
1. Testez sur `/test-cloudinary`
2. Vérifiez sur `/temoignages`
3. Confirmez que toutes les vidéos se lisent

---

## 🎯 Utilisation Typique

### Après avoir uploadé une nouvelle vidéo

```bash
# 1. Mettez à jour manuellement l'URL dans testimonials.json
# 2. Générez le thumbnail automatiquement
node scripts/update-thumbnails.js

# 3. Testez
npm run dev
# Ouvrez http://localhost:3000/test-cloudinary
```

### Migration complète de toutes les vidéos

```bash
# 1. Uploadez toutes les vidéos sur Cloudinary (via interface web)
# 2. Mettez à jour toutes les URLs dans testimonials.json
# 3. Générez tous les thumbnails
node scripts/update-thumbnails.js

# 4. Vérifiez
npm run dev
```

---

## 📦 Fichiers Générés

Les scripts peuvent créer ces fichiers (ignorés par git) :

- `upload-results.json` - Résultats des uploads automatisés
- `videos_backup_*.zip` - Backups des vidéos locales

---

## 🔗 Ressources

- [Documentation Cloudinary](https://cloudinary.com/documentation)
- [Video Upload API](https://cloudinary.com/documentation/upload_videos)
- [Node.js SDK](https://cloudinary.com/documentation/node_integration)

---

## 📝 Notes

### Variables d'environnement (optionnel)

Si vous utilisez l'upload automatisé, créez `.env.local` :

```env
CLOUDINARY_CLOUD_NAME=dmlny2qbo
CLOUDINARY_API_KEY=votre_api_key
CLOUDINARY_API_SECRET=votre_api_secret
```

> ⚠️ Ne commitez jamais ce fichier !

### Sécurité

- Les clés API ne doivent jamais être commitées
- `.env.local` est dans `.gitignore`
- Utilisez des Upload Presets pour l'upload côté client si nécessaire

---

## 💡 Conseils

### Optimisation des vidéos
Cloudinary optimise automatiquement, mais vous pouvez :
- Utiliser les presets dans `lib/cloudinary.ts`
- Ajuster la qualité selon l'usage (mobile vs desktop)
- Générer des thumbnails de différentes tailles

### Organisation
- Utilisez des dossiers sur Cloudinary (`themillionwithin/testimonials/`)
- Ajoutez des tags pour faciliter la recherche
- Nommez les fichiers de manière cohérente

### Performance
- Les thumbnails sont générés à la première requête
- Le CDN Cloudinary met en cache automatiquement
- Utilisez `q_auto` pour l'optimisation automatique de qualité

---

✨ Pour plus d'informations, consultez `CLOUDINARY_INTEGRATION.md` à la racine du projet.
