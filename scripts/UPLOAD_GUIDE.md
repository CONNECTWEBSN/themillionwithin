# 🚀 Script de Migration en Masse vers Cloudinary

## Installation du SDK Cloudinary (optionnel)

Si vous souhaitez uploader en masse via script Node.js :

```bash
npm install cloudinary dotenv
```

## Configuration

Créez un fichier `.env.local` à la racine du projet :

```env
CLOUDINARY_CLOUD_NAME=dmlny2qbo
CLOUDINARY_API_KEY=votre_api_key_ici
CLOUDINARY_API_SECRET=votre_api_secret_ici
```

> ⚠️ **Important** : Ne commitez JAMAIS ce fichier ! Il est déjà dans `.gitignore`.

## Script d'upload (optionnel)

Créez `scripts/upload-videos.js` :

```javascript
require('dotenv').config({ path: '.env.local' });
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const VIDEOS_DIR = path.join(__dirname, '..', 'public', 'videos');

async function uploadVideo(filePath, fileName) {
  try {
    console.log(`⏳ Upload de ${fileName}...`);
    
    const result = await cloudinary.uploader.upload(filePath, {
      resource_type: 'video',
      folder: 'themillionwithin',
      use_filename: true,
      unique_filename: false,
    });
    
    console.log(`✅ Uploadé: ${result.public_id}`);
    console.log(`   URL: ${result.secure_url}\n`);
    
    return result;
  } catch (error) {
    console.error(`❌ Erreur pour ${fileName}:`, error.message);
    return null;
  }
}

async function uploadAllVideos() {
  console.log('📹 Début de l\'upload vers Cloudinary...\n');
  
  const files = fs.readdirSync(VIDEOS_DIR)
    .filter(file => file.endsWith('.mp4'));
  
  console.log(`Trouvé ${files.length} vidéo(s) à uploader\n`);
  
  const results = [];
  
  for (const file of files) {
    const filePath = path.join(VIDEOS_DIR, file);
    const result = await uploadVideo(filePath, file);
    
    if (result) {
      results.push({
        fileName: file,
        publicId: result.public_id,
        url: result.secure_url,
      });
    }
  }
  
  // Sauvegarder les résultats
  fs.writeFileSync(
    path.join(__dirname, 'upload-results.json'),
    JSON.stringify(results, null, 2)
  );
  
  console.log(`\n✨ Terminé ! ${results.length}/${files.length} vidéo(s) uploadée(s)`);
  console.log('📄 Résultats sauvegardés dans scripts/upload-results.json');
}

// Exécution
uploadAllVideos().catch(console.error);
```

## Utilisation du script

```bash
node scripts/upload-videos.js
```

Le script va :
1. Scanner le dossier `/public/videos/`
2. Uploader chaque vidéo sur Cloudinary
3. Sauvegarder les résultats dans `scripts/upload-results.json`

## Après l'upload

1. **Vérifiez** `scripts/upload-results.json` pour voir tous les public_ids

2. **Mettez à jour** `content/testimonials.json` avec les nouvelles URLs

3. **Générez les thumbnails** automatiquement :
   ```bash
   node scripts/update-thumbnails.js
   ```

4. **Testez** sur `/test-cloudinary` et `/temoignages`

## Alternative : Upload Manuel (Recommandé pour commencer)

Si vous préférez ne pas installer le SDK, utilisez l'interface web Cloudinary :

### Étapes

1. **Connexion** : [cloudinary.com/console](https://cloudinary.com/console)

2. **Media Library** : Cliquez sur "Media Library" dans le menu

3. **Upload** :
   - Cliquez sur "Upload"
   - Sélectionnez "Video"
   - Drag & drop vos vidéos depuis `/public/videos/`

4. **Récupérer les URLs** :
   - Cliquez sur chaque vidéo uploadée
   - Copiez l'URL depuis "Secure URL"
   - Notez le "Public ID"

5. **Template pour testimonials.json** :
   ```json
   {
     "id": "X",
     "name": "Nom Prénom",
     "videoUrl": "https://res.cloudinary.com/dmlny2qbo/video/upload/v[VERSION]/[PUBLIC_ID].mp4",
     "thumbnailUrl": ""
   }
   ```

6. **Générer les thumbnails** :
   ```bash
   node scripts/update-thumbnails.js
   ```

## Mapping des fichiers

Référence rapide pour mettre à jour `testimonials.json` :

| ID | Fichier local | Nom | Pays |
|----|---------------|-----|------|
| 1 | Ramatoulaye Wade (canada).mp4 | Ramatoulaye Wade | Canada |
| 2 | Ramatoulaye Séck (France).mp4 | Ramatoulaye Séck | France |
| 3 | Dior Diagne (Sénégal).mp4 | Dior Diagne | Sénégal |
| 4 | Khadidiatou Diop (Espagne).mp4 | Khadidiatou Diop | Espagne |
| 5 | Mame Diarra Sall (Italie).mp4 | Mame Diarra Sall | Italie |
| 6 | Collette Basse (Sénégal).mp4 | Collette Basse | Sénégal |
| 7-21 | themillionwithin_temoignages (1-15).mp4 | Témoignage TMW | Afrique |

## Optimisations Cloudinary recommandées

Lors de l'upload, vous pouvez configurer :

### Format de nommage
- Utilisez des noms clairs : `tmw_temoignage_[nom]_[pays]`
- Évitez les espaces et caractères spéciaux
- Exemple : `tmw_ramatoulaye_wade_canada`

### Dossiers
- Créez un dossier `themillionwithin/testimonials/`
- Organisez par année si nécessaire : `themillionwithin/testimonials/2026/`

### Tags
- Ajoutez des tags : `testimonial`, `formation`, `[pays]`
- Facilite la recherche et le tri dans la Media Library

## Vérification après migration

Checklist :
- [ ] Toutes les vidéos sont uploadées sur Cloudinary
- [ ] `testimonials.json` est à jour avec les URLs Cloudinary
- [ ] Les thumbnails sont générés (via `update-thumbnails.js`)
- [ ] Test sur `/temoignages` : toutes les vidéos se lisent
- [ ] Test sur `/test-cloudinary` : pas d'erreurs
- [ ] Les vidéos locales `/public/videos/` peuvent être supprimées (après backup)

## Backup avant suppression

Avant de supprimer `/public/videos/` :

```bash
# Créer une archive de backup
tar -czf videos_backup_$(date +%Y%m%d).tar.gz public/videos/

# Ou sur Windows (PowerShell)
Compress-Archive -Path public\videos -DestinationPath videos_backup_$(Get-Date -Format 'yyyyMMdd').zip
```

## Support

Questions ? Consultez :
- `CLOUDINARY_INTEGRATION.md` - Guide complet
- `INTEGRATION_SUMMARY.md` - Résumé de l'intégration
- [Documentation Cloudinary](https://cloudinary.com/documentation)

---

🎬 Bonne migration !
