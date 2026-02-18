# The Million Within Academy — Site Web

> Formation en ligne pour femmes entrepreneures — Afrique, Europe, Amérique

---

## 🏗️ Phases 1-3 : Setup, Design System & Structure ✅

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
├── app/                              App Router Next.js 14
│   ├── (marketing)/
│   │   ├── page.tsx                  ✅ Homepage
│   │   ├── layout.tsx                ✅ Layout marketing
│   │   └── inscription/page.tsx      ✅ Page inscription
│   ├── api/countdown/route.ts        ✅ API Edge countdown
│   ├── globals.css                   ✅ Styles globaux
│   ├── layout.tsx                    ✅ Root layout + fonts
│   └── not-found.tsx                 ✅ 404 brandée
│
├── components/                       Composants React
│   ├── ui/                           ✅ 12 atomiques + index barrel
│   ├── layout/                       ✅ 5 layout + index barrel
│   ├── sections/                     ✅ 11 sections + index barrel
│   ├── shared/                       ✅ 12 partagés + index barrel
│   ├── providers/                    ✅ MotionProvider Framer
│   └── index.ts                      ✅ Barrel racine
│
├── lib/                              Utilitaires & logique
│   ├── hooks/                        ✅ useCountdown, useScrollHeader,
│   │                                    useInView, useCurrency,
│   │                                    useMobileMenu, useVideoModal
│   ├── types/                        ✅ Types TS complets (20+ interfaces)
│   ├── utils.ts                      ✅ cn(), formatPrice(), slugify()…
│   ├── constants.ts                  ✅ Données statiques (audit-sourcées)
│   ├── animations.ts                 ✅ Framer Motion variants
│   └── index.ts                      ✅ Barrel racine lib
│
├── styles/                           Système de styles
│   ├── design-tokens.css             ✅ 253 variables CSS
│   ├── typography.css                ✅ Prose, prix, stats, quotes
│   └── animations.css                ✅ Scroll, hover, skeleton, marquee
│
├── public/                           Assets statiques
│   ├── images/
│   │   ├── team/                     ✅ Dossier prêt (4 photos audit §5.3)
│   │   ├── testimonials/             ✅ Dossier prêt (6 thumbnails audit §5.6)
│   │   ├── partners/                 ✅ Dossier prêt (8 logos audit §5.5)
│   │   ├── og/                       ✅ Dossier prêt (OG images)
│   │   ├── placeholder-avatar.svg    ✅ Dev placeholder
│   │   ├── placeholder-video.svg     ✅ Dev placeholder
│   │   ├── placeholder-logo.svg      ✅ Dev placeholder
│   │   └── README.md                 ✅ Guide migration assets
│   ├── fonts/                        ✅ Prêt (Poppins/Inter via next/font)
│   ├── icons/                        ✅ PWA icons
│   ├── videos/                       ✅ Prêt
│   ├── manifest.json                 ✅ PWA
│   └── robots.txt                    ✅ SEO
│
└── content/                          Données JSON (audit-sourcées)
    ├── testimonials.json              ✅ 6 vrais témoignages (§5.6)
    ├── team.json                      ✅ 4 membres réels (§5.3)
    └── pricing.json                   ✅ 4 formules prix exacts (§5.4)
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
| **Phase 2** | Tailwind + tokens audit | ✅ Complété |
| **Phase 3** | Structure dossiers + barrel exports + hooks | ✅ Complété |
| **Phase 4** | Composants UI atomiques (Button, Badge, Card…) | 🔲 À faire |
| **Phase 5** | Layout (Header sticky, Footer, MobileMenu) | 🔲 À faire |
| **Phase 6** | Homepage (13 sections) | 🔲 À faire |
| **Phase 7** | Page Inscription (checkout) | 🔲 À faire |
| **Phase 8** | Finitions + Animations + Responsive | 🔲 À faire |
| **Phase 9** | Déploiement Vercel | 🔲 À faire |

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
