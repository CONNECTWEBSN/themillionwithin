# The Million Within Academy — Site Web

> Formation en ligne pour femmes entrepreneures — Afrique, Europe, Amérique

---

## 🏗️ Phase 1 : Setup & Design System ✅

### Stack Technique

| Technologie | Version | Usage |
|-------------|---------|-------|
| Next.js | 14.2.5 | Framework (App Router) |
| TypeScript | 5.x | Typage statique |
| Tailwind CSS | 3.4 | Styling utility-first |
| Framer Motion | 11.x | Animations |
| Lucide React | 0.408 | Icônes |
| React Hook Form | 7.x | Formulaires |
| Zod | 3.x | Validation schémas |
| React Player | 2.x | Lecteur vidéo témoignages |

### Structure des dossiers

```
themillionwithin/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx              ✅ Homepage (placeholder Phase 4)
│   │   ├── layout.tsx            ✅ Layout marketing
│   │   └── inscription/
│   │       └── page.tsx          ✅ Page inscription (placeholder Phase 5)
│   ├── api/
│   │   └── countdown/
│   │       └── route.ts          ✅ API countdown Edge Runtime
│   ├── layout.tsx                ✅ Root layout + fonts
│   ├── globals.css               ✅ Styles globaux + Tailwind
│   └── not-found.tsx             ✅ Page 404 brandée
├── components/
│   ├── ui/                       🔲 Phase 2 (atomiques)
│   ├── sections/                 🔲 Phase 4 (sections homepage)
│   ├── layout/                   🔲 Phase 3 (Header, Footer)
│   └── shared/                   🔲 Phase 2-4 (partagés)
├── lib/
│   ├── utils.ts                  ✅ Helpers (cn, formatPrice, etc.)
│   ├── constants.ts              ✅ Données statiques (pricing, FAQ, etc.)
│   └── animations.ts             ✅ Framer Motion variants
├── public/
│   ├── robots.txt                ✅ SEO
│   └── manifest.json             ✅ PWA manifest
├── styles/
│   └── design-tokens.css         ✅ CSS Custom Properties
└── content/
    ├── testimonials.json          ✅ 6 témoignages
    ├── team.json                  ✅ Équipe (CEO + 3 Capitaines)
    └── pricing.json               ✅ 4 formules tarifaires
```

### Design Tokens

- **Couleurs** : Orange primaire (`#F97316`) + Vert secondaire (`#22C55E`) + Neutres
- **Typographie** : Poppins (headings) + Inter (body)
- **Espacement** : Système base 8px
- **Breakpoints** : xs(320px) sm(640px) md(768px) lg(1024px) xl(1280px) 2xl(1440px)

---

## 🚀 Démarrage

```bash
# Installation des dépendances
npm install

# Développement
npm run dev

# Build production
npm run build

# Lint
npm run lint

# Format
npm run format
```

## 📋 Roadmap

| Phase | Description | Status |
|-------|-------------|--------|
| **Phase 1** | Setup + Design System | ✅ Complété |
| **Phase 2** | Composants UI atomiques | 🔲 À faire |
| **Phase 3** | Layout (Header, Footer) | 🔲 À faire |
| **Phase 4** | Homepage (13 sections) | 🔲 À faire |
| **Phase 5** | Page Inscription (checkout) | 🔲 À faire |
| **Phase 6** | Finitions + Animations + Responsive | 🔲 À faire |
| **Phase 7** | Déploiement Vercel | 🔲 À faire |

## 🎨 Conventions

### Nommage
- Composants : PascalCase (`HeroSection.tsx`)
- Hooks : camelCase avec préfixe `use` (`useCountdown.ts`)
- Utils : camelCase (`formatPrice`)
- CSS classes : kebab-case via Tailwind

### Imports
```typescript
// Alias configuré dans tsconfig.json
import { cn } from '@/lib/utils';
import { PRICING_PLANS } from '@/lib/constants';
```

### Composants
```typescript
// Pattern standard pour les composants
interface ComponentProps {
  // props typées
}

export default function Component({ ...props }: ComponentProps) {
  return (/* JSX */);
}
```
