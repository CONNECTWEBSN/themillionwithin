# Performance & Lighthouse — The Million Within Academy

**Phase 6** — Cibles et bonnes pratiques.

---

## Cibles (Architecture §7)

| Métrique                   | Cible  |
|----------------------------|--------|
| Lighthouse Performance     | > 90   |
| First Contentful Paint     | < 1.5s |
| Largest Contentful Paint   | < 2.5s |
| Time to Interactive        | < 3s   |
| Cumulative Layout Shift    | < 0.1  |
| First Input Delay          | < 100ms|
| Poids total (gzipped)      | < 1.5 MB |

---

## Lancer un audit Lighthouse

### En ligne de commande

```bash
# Installer Lighthouse (global ou npx)
npx lighthouse http://localhost:3001 --view --output=html --output-path=./lighthouse-report.html

# En production (remplacer par l’URL déployée)
npx lighthouse https://www.themillionwithin.com --view --output=html
```

### Depuis Chrome

1. Ouvrir le site (local ou production)
2. F12 → onglet **Lighthouse**
3. Sélectionner **Performance**, **Best practices**, **SEO**, **Accessibility**
4. **Analyze page load**

---

## Bonnes pratiques déjà en place

- **Next.js 14** : App Router, Server Components par défaut
- **Polices** : `next/font` (Inter, Poppins) avec preload
- **Images** : utiliser `next/image` pour toutes les images (dès qu’elles sont ajoutées dans `public/` ou URLs externes configurées dans `next.config.js`)
- **Code splitting** : automatique par route (App Router)
- **Sitemap** : généré via `app/sitemap.ts`
- **Metadata** : titre, description, Open Graph, JSON-LD Course

---

## À faire lors de l’ajout de médias

1. **Images** : toujours utiliser `next/image` pour le lazy loading et les formats modernes (WebP/AVIF).
2. **Vidéos** : charger les vidéos (témoignages) au clic (modal) pour limiter le poids initial.
3. **OG image** : ajouter `/public/og-image.jpg` (1200×630) pour le partage social.

---

*Référence : ARCHITECTURE_TheMilionWithin.md §7*
