# Déploiement — The Million Within Academy

**Phase 7** — Mise en production sur Vercel.

---

## 1. Prérequis

- Compte [Vercel](https://vercel.com)
- Projet relié à un dépôt Git (GitHub, GitLab, Bitbucket)

---

## 2. Déployer sur Vercel

### Option A : Via le dashboard Vercel

1. Aller sur [vercel.com/new](https://vercel.com/new)
2. Importer le dépôt **themillionwithin**
3. **Framework Preset** : Next.js (détecté automatiquement)
4. **Root Directory** : laisser vide si le projet est à la racine du repo
5. **Build Command** : `npm run build` (défaut)
6. **Output Directory** : `.next` (défaut Next.js)
7. Cliquer sur **Deploy**

### Option B : Via Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
# suivre les questions (link au projet ou nouveau projet)
vercel --prod   # déploiement production
```

---

## 3. Variables d’environnement (optionnel)

Si vous ajoutez plus tard une API, des clés secrètes ou une base de données :

1. **Vercel** → Projet → **Settings** → **Environment Variables**
2. Ajouter les variables (ex. `NEXT_PUBLIC_GA_ID`, `API_SECRET`)
3. Redéployer pour prendre en compte les changements

---

## 4. Domaine personnalisé

1. **Vercel** → Projet → **Settings** → **Domains**
2. Ajouter un domaine (ex. `www.themillionwithin.com`)
3. Suivre les instructions DNS :
   - **A** ou **CNAME** vers les valeurs indiquées par Vercel
4. Vercel provisionne le **SSL (HTTPS)** automatiquement

---

## 5. Analytics

### Vercel Analytics

1. **Vercel** → Projet → **Analytics** → activer
2. Dans le projet (optionnel) : `npm i @vercel/analytics`
3. Dans `app/layout.tsx` :

```tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Google Analytics 4

1. Créer une propriété GA4 sur [analytics.google.com](https://analytics.google.com)
2. Récupérer l’ID de mesure (ex. `G-XXXXXXXXXX`)
3. Variable d’environnement : `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`
4. Ajouter le script GA4 dans le layout ou via un composant dédié (ex. Google Analytics dans `components/shared`)

---

## 6. Vérifications après déploiement

- [ ] Page d’accueil : `https://votre-domaine.vercel.app`
- [ ] Page inscription : `https://votre-domaine.vercel.app/inscription`
- [ ] `robots.txt` : `https://votre-domaine.vercel.app/robots.txt`
- [ ] `sitemap.xml` : `https://votre-domaine.vercel.app/sitemap.xml`
- [ ] HTTPS actif (cadenas)
- [ ] Métadonnées et partage social (Open Graph) corrects

---

## 7. Checklist Phase 7

| Tâche                    | Statut |
|--------------------------|--------|
| Déployer sur Vercel      | À faire |
| Configurer domaine       | À faire |
| SSL (automatique Vercel) | À faire |
| Activer Analytics        | À faire |

---

*Document généré pour le projet The Million Within Academy — Architecture v1.0*
