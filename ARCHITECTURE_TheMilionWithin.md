# 🏗️ ARCHITECTURE COMPLÈTE — THE MILLION WITHIN ACADEMY

**Basé sur:** Audit UX du 17/02/2026 + Analyse du thème Histudy  
**Version:** 1.0  
**Date:** 17 février 2026

---

## 📋 RÉSUMÉ DU PROJET

| Élément | Détail |
|---------|--------|
| **Type** | Site vitrine + Landing page de formation |
| **Cible** | Femmes entrepreneures (Afrique, Europe, Amérique) |
| **Langues** | Français + Wolof |
| **Objectif principal** | Conversion vers inscription formation |
| **Thème de référence** | Histudy - Online Courses Education Template |

---

## 1. STACK TECHNIQUE

### 1.1 Choix du Framework

| Option | Score | Justification |
|--------|-------|---------------|
| **Next.js 14** | ⭐⭐⭐⭐⭐ | **RECOMMANDÉ** |
| Astro | ⭐⭐⭐⭐ | Excellent pour contenu statique |
| Nuxt 3 | ⭐⭐⭐ | Bon mais écosystème Vue moins large |

### Justification Next.js 14

```
✅ App Router avec Server Components → Performance optimale
✅ ISR (Incremental Static Regeneration) → Contenu dynamique + vitesse
✅ Image Optimization native → Critique pour les nombreuses photos/vidéos
✅ Histudy existe en version Next.js → Réutilisation directe des patterns
✅ SEO natif avec Metadata API
✅ Edge Functions pour le countdown timer dynamique
✅ Internationalization ready (FR/Wolof)
```

### 1.2 Stack Complète

```yaml
Framework:       Next.js 14 (App Router)
Styling:         Tailwind CSS 3.4
Animations:      Framer Motion 11
Icons:           Lucide React
Fonts:           Google Fonts (via next/font)
Forms:           React Hook Form + Zod
Video Player:    React Player (pour témoignages)
Analytics:       Vercel Analytics + Google Analytics 4
Déploiement:     Vercel (recommandé) ou Netlify
CDN Images:      Vercel Image Optimization ou Cloudinary
```

### 1.3 Structure des dossiers

```
themillionwithin/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx              # Homepage
│   │   ├── layout.tsx            # Layout marketing
│   │   └── inscription/
│   │       └── page.tsx          # Page inscription
│   ├── api/
│   │   └── countdown/
│   │       └── route.ts          # API countdown dynamique
│   ├── layout.tsx                # Root layout
│   ├── globals.css
│   └── not-found.tsx
├── components/
│   ├── ui/                       # Composants atomiques
│   ├── sections/                 # Sections de page
│   ├── layout/                   # Header, Footer
│   └── shared/                   # Composants partagés
├── lib/
│   ├── utils.ts
│   └── constants.ts
├── public/
│   ├── images/
│   ├── videos/
│   └── fonts/
├── styles/
│   └── design-tokens.css
└── content/
    ├── testimonials.json
    ├── team.json
    └── pricing.json
```

---

## 2. PAGES À CRÉER

### 2.1 Vue d'ensemble

| Page | URL | Priorité | Template Histudy inspiré |
|------|-----|----------|--------------------------|
| Homepage | `/` | 🔴 HIGH | Single Course + Gym Coaching |
| Inscription | `/inscription` | 🔴 HIGH | One Page Checkout |
| Mentions légales | `/mentions-legales` | 🟠 MEDIUM | Inner page simple |
| CGV | `/cgv` | 🟠 MEDIUM | Inner page simple |
| Confidentialité | `/confidentialite` | 🟠 MEDIUM | Inner page simple |

---

### 2.2 HOMEPAGE — Structure détaillée

```
┌─────────────────────────────────────────────────────────────────┐
│ 📍 SECTION 1: HEADER (Sticky)                                   │
│ ├── Logo The Million Within                                     │
│ ├── Navigation: À propos | Formation | Témoignages | Tarifs    │
│ ├── CTA: "S'inscrire" (bouton primaire)                        │
│ └── Langue toggle: FR/WO                                        │
│ 🎨 Pattern Histudy: Header transparent → solid on scroll        │
├─────────────────────────────────────────────────────────────────┤
│ 📍 SECTION 2: HERO                                              │
│ ├── Badge: "Formation 100% en ligne"                            │
│ ├── H1: "Bâtissez votre entreprise sans renoncer à votre       │
│ │        famille"                                               │
│ ├── Sous-titre: Mission statement condensé                      │
│ ├── CTA primaire: "Réserver ma place"                           │
│ ├── CTA secondaire: "Découvrir le programme"                    │
│ ├── Stats inline: 496+ étudiantes | 319 business | 10 ans      │
│ └── Image: Photo Mme Sall ou illustration                       │
│ 🎨 Pattern Histudy: Hero avec image à droite, stats animées    │
├─────────────────────────────────────────────────────────────────┤
│ 📍 SECTION 3: SOCIAL PROOF BAR                                  │
│ ├── Logos partenaires en défilement                             │
│ └── "Ils nous font confiance"                                   │
│ 🎨 Pattern Histudy: Brand carousel avec animation infinie       │
├─────────────────────────────────────────────────────────────────┤
│ 📍 SECTION 4: PROBLÈME / SOLUTION                               │
│ ├── Titre: "Vous rêvez d'entreprendre mais..."                  │
│ ├── 3 pain points avec icônes                                   │
│ │   • Manque de temps avec la famille                           │
│ │   • Pas de capital de départ                                  │
│ │   • Ne savez pas par où commencer                             │
│ └── Transition: "Notre solution →"                              │
│ 🎨 Pattern Histudy: Feature boxes avec hover effects            │
├─────────────────────────────────────────────────────────────────┤
│ 📍 SECTION 5: À PROPOS / MISSION                                │
│ ├── Photo équipe ou Mme Sall                                    │
│ ├── Titre: "Notre mission"                                      │
│ ├── Texte mission (CONSERVER de l'audit)                        │
│ ├── 2 bullet points: Formation + Accompagnement                 │
│ └── CTA: "En savoir plus sur notre approche"                    │
│ 🎨 Pattern Histudy: About section avec image à gauche           │
├─────────────────────────────────────────────────────────────────┤
│ 📍 SECTION 6: PROGRAMME (5 JOURS)                               │
│ ├── Titre: "Votre transformation en 5 jours"                    │
│ ├── Timeline verticale interactive:                             │
│ │   ├── Jour 1: Fondations du succès                            │
│ │   ├── Jour 2: Stratégies gagnantes                            │
│ │   ├── Jour 3: Approvisionnement intelligent                   │
│ │   ├── Jour 4: Structure pour la croissance                    │
│ │   └── Jour 5: Lancement et célébration                        │
│ └── Animation: Révélation progressive au scroll                 │
│ 🎨 Pattern Histudy: Course curriculum accordion                 │
├─────────────────────────────────────────────────────────────────┤
│ 📍 SECTION 7: TÉMOIGNAGES VIDÉO                                 │
│ ├── Titre: "Elles ont transformé leur vie"                      │
│ ├── Grid 2x3 de témoignages sélectionnés (6 max)                │
│ │   • Thumbnail + play button overlay                           │
│ │   • Nom + Pays + Note 5 étoiles                               │
│ ├── Modal vidéo au clic                                         │
│ └── CTA: "Voir tous les témoignages" (ouvre galerie)            │
│ 🎨 Pattern Histudy: Testimonials grid avec video modal          │
├─────────────────────────────────────────────────────────────────┤
│ 📍 SECTION 8: ÉQUIPE                                            │
│ ├── Titre: "Votre équipe d'accompagnement"                      │
│ ├── Card CEO: Mme Sall (plus grande, mise en avant)             │
│ ├── Cards Capitaines Alumni (3 cards)                           │
│ │   • Photo ronde                                               │
│ │   • Nom + Rôle                                                │
│ │   • Lien vers témoignage si disponible                        │
│ 🎨 Pattern Histudy: Team section avec cards hover               │
├─────────────────────────────────────────────────────────────────┤
│ 📍 SECTION 9: COUNTDOWN + URGENCE                               │
│ ├── Background: Gradient ou pattern                             │
│ ├── Titre: "Prochaine session dans:"                            │
│ ├── Countdown: JJ | HH | MM | SS (dynamique)                    │
│ ├── Date: "9 Novembre 2025 • 13h Dakar / 9h New York / 13h Paris"│
│ └── CTA: "Réserver ma place maintenant"                         │
│ 🎨 Pattern Histudy: CTA banner avec countdown                   │
├─────────────────────────────────────────────────────────────────┤
│ 📍 SECTION 10: TARIFS                                           │
│ ├── Titre: "Choisissez votre formule"                           │
│ ├── Toggle: Afficher en FCFA / EUR / USD                        │
│ ├── 4 Pricing Cards:                                            │
│ │   ├── Standard (89.500 FCFA) - "À votre rythme"               │
│ │   ├── Accéléré 5j (185.000 FCFA) - ⭐ POPULAIRE               │
│ │   ├── Non Accéléré + Suivi (185.000 FCFA)                     │
│ │   └── PRO (981.500 FCFA) - "Pour chefs d'entreprise"          │
│ ├── Chaque card:                                                │
│ │   • Titre + Prix + Prix barré si applicable                   │
│ │   • Liste des features avec ✓                                 │
│ │   • CTA "Choisir cette formule"                               │
│ └── Note: "Paiement sécurisé • Wave • Orange Money • CB"        │
│ 🎨 Pattern Histudy: Pricing table avec featured card            │
├─────────────────────────────────────────────────────────────────┤
│ 📍 SECTION 11: FAQ                                              │
│ ├── Titre: "Questions fréquentes"                               │
│ ├── Accordion avec 5-7 questions:                               │
│ │   • Comment se déroule la formation ?                         │
│ │   • Ai-je besoin d'un capital de départ ?                     │
│ │   • Quels sont les moyens de paiement ?                       │
│ │   • Puis-je suivre depuis n'importe quel pays ?               │
│ │   • Y a-t-il un accompagnement après la formation ?           │
│ 🎨 Pattern Histudy: FAQ accordion avec animations               │
├─────────────────────────────────────────────────────────────────┤
│ 📍 SECTION 12: CTA FINAL                                        │
│ ├── Background: Image ou gradient                               │
│ ├── Titre: "Prête à transformer votre vie ?"                    │
│ ├── Sous-titre: Rappel de la promesse                           │
│ ├── CTA primaire: "Commencer maintenant"                        │
│ └── CTA secondaire: "Nous contacter sur WhatsApp"               │
│ 🎨 Pattern Histudy: Full-width CTA banner                       │
├─────────────────────────────────────────────────────────────────┤
│ 📍 SECTION 13: FOOTER                                           │
│ ├── Logo + Tagline                                              │
│ ├── Colonnes:                                                   │
│ │   ├── Navigation: Accueil | Formation | Tarifs | Contact      │
│ │   ├── Légal: CGV | Mentions légales | Confidentialité         │
│ │   └── Contact: WhatsApp | Email | Réseaux sociaux             │
│ ├── Newsletter signup (optionnel)                               │
│ └── Copyright + Crédits                                         │
│ 🎨 Pattern Histudy: Footer 4 colonnes                           │
└─────────────────────────────────────────────────────────────────┘
```

---

### 2.3 PAGE INSCRIPTION — Structure détaillée

```
┌─────────────────────────────────────────────────────────────────┐
│ 📍 HEADER SIMPLIFIÉ                                             │
│ ├── Logo (lien vers homepage)                                   │
│ ├── Progress indicator: "Étape 1/2"                             │
│ └── Secure badge: "🔒 Paiement sécurisé"                        │
├─────────────────────────────────────────────────────────────────┤
│ 📍 LAYOUT 2 COLONNES                                            │
│                                                                 │
│ ┌─────────────────────┐  ┌─────────────────────┐                │
│ │ COLONNE GAUCHE      │  │ COLONNE DROITE      │                │
│ │ (Formulaire)        │  │ (Récapitulatif)     │                │
│ │                     │  │                     │                │
│ │ • Choix formule     │  │ • Formule choisie   │                │
│ │   (radio cards)     │  │ • Prix              │                │
│ │                     │  │ • Inclus dans       │                │
│ │ • Infos contact     │  │   l'offre           │                │
│ │   - Prénom          │  │ • Garantie          │                │
│ │   - Nom             │  │ • Countdown mini    │                │
│ │   - Email           │  │                     │                │
│ │   - Téléphone       │  │ • Trust badges:     │                │
│ │   - Pays            │  │   - 496+ étudiantes │                │
│ │                     │  │   - Paiement SSL    │                │
│ │ • Mode paiement     │  │   - Support WhatsApp│                │
│ │   - Wave            │  │                     │                │
│ │   - Orange Money    │  └─────────────────────┘                │
│ │   - Carte bancaire  │                                         │
│ │                     │                                         │
│ │ • CGV checkbox      │                                         │
│ │                     │                                         │
│ │ • CTA: "Finaliser   │                                         │
│ │   mon inscription"  │                                         │
│ └─────────────────────┘                                         │
│                                                                 │
│ 🎨 Pattern Histudy: One Page Checkout                           │
├─────────────────────────────────────────────────────────────────┤
│ 📍 FOOTER MINIMAL                                               │
│ ├── Contact support: WhatsApp + Téléphone                       │
│ ├── Liens: CGV | Confidentialité                                │
│ └── Copyright                                                   │
└─────────────────────────────────────────────────────────────────┘
```

---

## 3. DESIGN SYSTEM

### 3.1 Palette de couleurs

```css
:root {
  /* Couleurs Primaires */
  --primary-50: #FFF7ED;
  --primary-100: #FFEDD5;
  --primary-200: #FED7AA;
  --primary-300: #FDBA74;
  --primary-400: #FB923C;
  --primary-500: #F97316;    /* Orange principal - Énergie, Action */
  --primary-600: #EA580C;
  --primary-700: #C2410C;
  --primary-800: #9A3412;
  --primary-900: #7C2D12;

  /* Couleurs Secondaires */
  --secondary-50: #F0FDF4;
  --secondary-100: #DCFCE7;
  --secondary-200: #BBF7D0;
  --secondary-300: #86EFAC;
  --secondary-400: #4ADE80;
  --secondary-500: #22C55E;  /* Vert - Succès, Croissance */
  --secondary-600: #16A34A;
  --secondary-700: #15803D;
  --secondary-800: #166534;
  --secondary-900: #14532D;

  /* Neutres */
  --neutral-0: #FFFFFF;
  --neutral-50: #F9FAFB;
  --neutral-100: #F3F4F6;
  --neutral-200: #E5E7EB;
  --neutral-300: #D1D5DB;
  --neutral-400: #9CA3AF;
  --neutral-500: #6B7280;
  --neutral-600: #4B5563;
  --neutral-700: #374151;
  --neutral-800: #1F2937;
  --neutral-900: #111827;
  --neutral-950: #030712;

  /* Accent */
  --accent-gold: #F59E0B;    /* Or - Premium, Valeur */
  --accent-purple: #8B5CF6;  /* Violet - Transformation */
  
  /* Sémantiques */
  --success: #22C55E;
  --warning: #F59E0B;
  --error: #EF4444;
  --info: #3B82F6;
}
```

### 3.2 Typographie

```css
:root {
  /* Famille principale */
  --font-heading: 'Poppins', sans-serif;
  --font-body: 'Inter', sans-serif;
  
  /* Tailles (Desktop) */
  --text-xs: 0.75rem;      /* 12px */
  --text-sm: 0.875rem;     /* 14px */
  --text-base: 1rem;       /* 16px */
  --text-lg: 1.125rem;     /* 18px */
  --text-xl: 1.25rem;      /* 20px */
  --text-2xl: 1.5rem;      /* 24px */
  --text-3xl: 1.875rem;    /* 30px */
  --text-4xl: 2.25rem;     /* 36px */
  --text-5xl: 3rem;        /* 48px */
  --text-6xl: 3.75rem;     /* 60px */
  
  /* Poids */
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  --font-extrabold: 800;
  
  /* Line Height */
  --leading-tight: 1.25;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
}
```

### Hiérarchie typographique

| Élément | Font | Taille Desktop | Taille Mobile | Poids |
|---------|------|----------------|---------------|-------|
| H1 | Poppins | 60px | 36px | 800 |
| H2 | Poppins | 48px | 30px | 700 |
| H3 | Poppins | 36px | 24px | 700 |
| H4 | Poppins | 24px | 20px | 600 |
| H5 | Poppins | 20px | 18px | 600 |
| H6 | Poppins | 18px | 16px | 600 |
| Body Large | Inter | 18px | 16px | 400 |
| Body | Inter | 16px | 16px | 400 |
| Body Small | Inter | 14px | 14px | 400 |
| Caption | Inter | 12px | 12px | 400 |

### 3.3 Système d'espacement (Base 8px)

```css
:root {
  --space-0: 0;
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
  --space-32: 8rem;     /* 128px */
}

/* Sections spacing */
--section-padding-y: var(--space-24);  /* 96px */
--section-padding-y-mobile: var(--space-16);  /* 64px */
```

### 3.4 Breakpoints

```css
/* Mobile First Approach */
:root {
  --breakpoint-xs: 320px;   /* Mobile petit */
  --breakpoint-sm: 640px;   /* Mobile large */
  --breakpoint-md: 768px;   /* Tablette */
  --breakpoint-lg: 1024px;  /* Desktop */
  --breakpoint-xl: 1280px;  /* Desktop large */
  --breakpoint-2xl: 1440px; /* Desktop XL */
}
```

### Tailwind Config

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '4rem',
        '2xl': '6rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1320px',  // Max container width
      },
    },
  },
}
```

### 3.5 Ombres et Rayons

```css
:root {
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  
  /* Border Radius */
  --radius-sm: 0.25rem;   /* 4px */
  --radius: 0.5rem;       /* 8px */
  --radius-md: 0.75rem;   /* 12px */
  --radius-lg: 1rem;      /* 16px */
  --radius-xl: 1.5rem;    /* 24px */
  --radius-2xl: 2rem;     /* 32px */
  --radius-full: 9999px;
}
```

---

## 4. COMPOSANTS RÉUTILISABLES

### 4.1 Liste complète des composants

#### UI Components (Atomiques)

| Composant | Description | Inspiré Histudy |
|-----------|-------------|-----------------|
| `Button` | Primaire, Secondaire, Ghost, Icon | ✅ |
| `Badge` | Labels, Status, Tags | ✅ |
| `Card` | Container avec shadow et padding | ✅ |
| `Avatar` | Image ronde pour équipe/témoignages | ✅ |
| `Icon` | Wrapper Lucide icons | - |
| `Input` | Text, Email, Tel, Select | ✅ |
| `Checkbox` | Avec label | ✅ |
| `Radio` | RadioGroup pour pricing | ✅ |
| `Modal` | Dialog pour vidéos | ✅ |
| `Accordion` | Pour FAQ | ✅ |
| `Tabs` | Navigation par onglets | ✅ |
| `Tooltip` | Info au hover | - |
| `Skeleton` | Loading states | - |

#### Layout Components

| Composant | Description | Inspiré Histudy |
|-----------|-------------|-----------------|
| `Container` | Max-width wrapper | ✅ |
| `Section` | Wrapper avec padding vertical | ✅ |
| `Grid` | CSS Grid wrapper responsive | - |
| `Stack` | Flex column avec gap | - |
| `Header` | Navigation sticky | ✅ |
| `Footer` | Pied de page 4 colonnes | ✅ |
| `MobileMenu` | Menu hamburger | ✅ |

#### Section Components

| Composant | Description | Inspiré Histudy |
|-----------|-------------|-----------------|
| `SectionTitle` | H2 + Subtitle + Badge | ✅ |
| `HeroSection` | Hero avec image/stats | ✅ |
| `FeatureCard` | Icône + Titre + Description | ✅ |
| `TestimonialCard` | Video + Nom + Pays + Rating | ✅ |
| `TeamCard` | Avatar + Nom + Rôle | ✅ |
| `PricingCard` | Titre + Prix + Features + CTA | ✅ |
| `TimelineItem` | Point + Titre + Description | ✅ |
| `StatCard` | Nombre animé + Label | ✅ |
| `PartnerLogo` | Logo avec grayscale hover | ✅ |
| `FAQItem` | Accordion item | ✅ |
| `CTABanner` | Full-width CTA section | ✅ |
| `CountdownTimer` | JJ:HH:MM:SS dynamique | ✅ |
| `VideoPlayer` | React Player wrapper | - |
| `VideoModal` | Modal + VideoPlayer | - |

#### Form Components

| Composant | Description | Inspiré Histudy |
|-----------|-------------|-----------------|
| `FormField` | Label + Input + Error | ✅ |
| `PricingSelector` | Radio cards pour formules | ✅ |
| `PaymentMethodSelector` | Wave/OM/CB | ✅ |
| `CountrySelect` | Select avec flags | - |
| `PhoneInput` | Input avec code pays | - |
| `CheckoutForm` | Formulaire complet inscription | ✅ |
| `OrderSummary` | Récapitulatif commande | ✅ |

### 4.2 Spécifications des composants clés

#### Button

```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost' | 'outline' | 'link';
  size: 'sm' | 'md' | 'lg' | 'xl';
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  children: ReactNode;
  onClick?: () => void;
}

// Variants
// primary: bg-primary-500, hover:bg-primary-600, text-white
// secondary: bg-secondary-500, hover:bg-secondary-600, text-white
// ghost: bg-transparent, hover:bg-neutral-100
// outline: border-2 border-primary-500, hover:bg-primary-50
// link: underline, hover:text-primary-600

// Sizes
// sm: h-8, px-3, text-sm
// md: h-10, px-4, text-base
// lg: h-12, px-6, text-lg
// xl: h-14, px-8, text-xl
```

#### PricingCard

```typescript
interface PricingCardProps {
  title: string;
  subtitle?: string;
  price: {
    amount: number;
    currency: 'FCFA' | 'EUR' | 'USD';
    originalAmount?: number;  // Prix barré
  };
  features: string[];
  cta: {
    text: string;
    href: string;
  };
  featured?: boolean;  // Card mise en avant
  badge?: string;      // "Populaire", "Recommandé"
}
```

#### CountdownTimer

```typescript
interface CountdownTimerProps {
  targetDate: Date;
  labels?: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
  onComplete?: () => void;
  size?: 'sm' | 'md' | 'lg';
}
```

#### TestimonialCard

```typescript
interface TestimonialCardProps {
  name: string;
  country: string;
  countryFlag?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  videoUrl: string;
  thumbnailUrl?: string;
  onPlay: () => void;
}
```

---

## 5. ANIMATIONS & MICRO-INTERACTIONS

### 5.1 Framer Motion Variants

```typescript
// lib/animations.ts

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' }
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, ease: 'easeOut' }
};

export const fadeInRight = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, ease: 'easeOut' }
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const scaleOnHover = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { type: 'spring', stiffness: 400, damping: 17 }
};

export const countUp = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  // Utiliser react-countup ou framer-motion useMotionValue
};
```

### 5.2 Scroll Animations

```typescript
// Hook pour animations au scroll
import { useInView } from 'framer-motion';

// Sections apparaissent au scroll (Intersection Observer)
// Stats counter s'animent quand visibles
// Timeline révèle progressivement les étapes
```

### 5.3 Micro-interactions

| Élément | Animation |
|---------|-----------|
| Buttons | Scale down on click, color transition on hover |
| Cards | Subtle lift (translateY + shadow) on hover |
| Links | Underline slide from left |
| Icons | Rotation ou bounce sur certains CTAs |
| Form inputs | Border color transition on focus |
| Accordion | Smooth height animation |
| Modal | Fade + scale in/out |
| Menu mobile | Slide from right |
| Countdown | Number flip animation |
| Stats | Count up animation |

---

## 6. MIGRATION SEO

### 6.1 URLs à préserver

| URL Actuelle | Nouvelle URL | Action |
|--------------|--------------|--------|
| `/` | `/` | ✅ Conserver |
| `/inscription` | `/inscription` | ✅ Conserver |

### 6.2 Plan de redirections (si nécessaire)

```javascript
// next.config.js
module.exports = {
  async redirects() {
    return [
      // Aucune redirection nécessaire pour l'instant
      // À ajouter si de nouvelles pages sont créées
    ];
  },
};
```

### 6.3 Structure SEO optimisée

#### Metadata Homepage

```typescript
// app/(marketing)/page.tsx
export const metadata: Metadata = {
  title: 'The Million Within Academy | Formation Entrepreneuriat Féminin',
  description: 'Bâtissez votre entreprise prospère sans renoncer à votre famille. Formation en ligne de 5 jours pour femmes entrepreneures. Sans capital de départ, depuis chez vous.',
  keywords: ['formation entrepreneuriat', 'femmes entrepreneures', 'business en ligne', 'formation Afrique', 'entreprendre depuis la maison'],
  openGraph: {
    title: 'The Million Within Academy',
    description: 'Bâtissez votre entreprise sans renoncer à votre famille',
    url: 'https://www.themillionwithin.com',
    siteName: 'The Million Within Academy',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Million Within Academy',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Million Within Academy',
    description: 'Bâtissez votre entreprise sans renoncer à votre famille',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};
```

#### Metadata Inscription

```typescript
// app/(marketing)/inscription/page.tsx
export const metadata: Metadata = {
  title: 'Inscription | The Million Within Academy',
  description: 'Inscrivez-vous à la formation The Million Within. Rejoignez 496+ femmes entrepreneures qui ont transformé leur vie.',
  robots: {
    index: true,
    follow: true,
  },
};
```

### 6.4 Structure des titres (H1-H6)

#### Homepage

```
H1: "Bâtissez votre entreprise sans renoncer à votre famille" (unique)
  └── H2: "Notre mission" (About section)
  └── H2: "Votre transformation en 5 jours" (Programme)
  └── H2: "Elles ont transformé leur vie" (Témoignages)
  └── H2: "Votre équipe d'accompagnement" (Équipe)
  └── H2: "Choisissez votre formule" (Tarifs)
  └── H2: "Questions fréquentes" (FAQ)
```

### 6.5 Schema.org

```typescript
// Structured Data pour la formation
const courseSchema = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'The Million Within - Master Accéléré',
  description: 'Formation de 5 jours pour créer votre entreprise depuis chez vous',
  provider: {
    '@type': 'Organization',
    name: 'The Million Within Academy',
    url: 'https://www.themillionwithin.com',
  },
  offers: {
    '@type': 'Offer',
    price: '185000',
    priceCurrency: 'XOF',
    availability: 'https://schema.org/InStock',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '496',
  },
};
```

### 6.6 Fichiers SEO techniques

```
/public
├── robots.txt
├── sitemap.xml (généré automatiquement par Next.js)
├── favicon.ico
├── apple-touch-icon.png
├── og-image.jpg (1200x630)
└── manifest.json
```

---

## 7. PERFORMANCES CIBLES

| Métrique | Cible | Mesure |
|----------|-------|--------|
| Lighthouse Performance | > 90 | Score global |
| First Contentful Paint | < 1.5s | |
| Largest Contentful Paint | < 2.5s | |
| Time to Interactive | < 3s | |
| Cumulative Layout Shift | < 0.1 | |
| First Input Delay | < 100ms | |
| Total Page Weight | < 1.5MB | Gzipped |

### Optimisations prévues

```
✅ Images: next/image avec WebP/AVIF automatique
✅ Fonts: next/font avec preload
✅ Code splitting: App Router automatique
✅ Lazy loading: Vidéos chargées au clic
✅ CDN: Vercel Edge Network
✅ Compression: Gzip/Brotli
✅ Caching: ISR pour pages statiques
```

---

## 8. CHECKLIST DE LIVRAISON

### Phase 1: Setup (2 jours)
- [ ] Initialiser projet Next.js 14
- [ ] Configurer Tailwind CSS
- [ ] Configurer Framer Motion
- [ ] Setup des fonts (Poppins + Inter)
- [ ] Créer design tokens CSS
- [ ] Configurer ESLint + Prettier

### Phase 2: Composants UI (3 jours)
- [ ] Button
- [ ] Badge
- [ ] Card
- [ ] Input components
- [ ] Modal
- [ ] Accordion

### Phase 3: Layout (2 jours)
- [ ] Header + Navigation
- [ ] Footer
- [ ] Mobile Menu
- [ ] Container + Section wrappers

### Phase 4: Homepage (5 jours)
- [ ] Hero Section
- [ ] Social Proof Bar
- [ ] Problem/Solution
- [ ] About Section
- [ ] Programme Timeline
- [ ] Testimonials Grid
- [ ] Team Section
- [ ] Countdown Timer
- [ ] Pricing Section
- [ ] FAQ Section
- [ ] CTA Final

### Phase 5: Inscription (3 jours)
- [ ] Checkout Layout
- [ ] Pricing Selector
- [ ] Form Fields
- [ ] Payment Methods
- [ ] Order Summary

### Phase 6: Finitions (2 jours)
- [ ] Animations scroll
- [ ] Responsive testing
- [ ] SEO meta tags
- [ ] Performance optimization
- [ ] Lighthouse audit

### Phase 7: Déploiement (1 jour)
- [ ] Setup Vercel
- [ ] Configurer domaine
- [ ] SSL
- [ ] Analytics

---

## 9. RESSOURCES & RÉFÉRENCES

### Thème Histudy
- Demo: https://themeforest.net/item/histudy-online-courses-education-template/42846507
- Version Next.js disponible
- Sections pertinentes: Hero, Pricing, Testimonials, Team, FAQ, Footer

### Documentation
- Next.js 14: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/

### Assets à migrer depuis l'actuel
- Photos équipe (4)
- Logos partenaires (8)
- Vidéos témoignages (URLs CloudFront)

---

*Document d'architecture généré le 17 février 2026*
*Basé sur l'audit UX et l'analyse du thème Histudy*
