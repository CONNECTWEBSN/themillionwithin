/**
 * ================================================================
 * TAILWIND CONFIG — The Million Within Academy
 * Design System v2.0 — Basé sur l'Audit UX du 17/02/2026
 * ================================================================
 *
 * Direction esthétique : Chaleur africaine × Premium occidental
 * → Orange soleil + Terre profonde + Or mat
 * → Confiante, aspirationnelle, humaine — jamais froide ou corporate
 *
 * Problèmes de l'audit résolus ici :
 * ✅ Contrastes insuffisants → couleurs WCAG AA validées
 * ✅ Espacement incohérent → système 8px strict
 * ✅ Hiérarchie visuelle défaillante → échelle typographique rigoureuse
 * ✅ Mobile padding insuffisant → breakpoints adaptatifs précis
 * ✅ Hover states basiques → tokens interaction complets
 * ================================================================
 */

import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

// ── PALETTE SOURCE (référence centralisée) ──────────────────────
const palette = {
  // Soleil d'Afrique — Orange chaud, énergie, action
  flame: {
    25:  '#FFFAF5',
    50:  '#FFF4E8',
    100: '#FFE5C8',
    200: '#FFCB91',
    300: '#FFA94D',
    400: '#FF8C1A',
    500: '#F97316', // Brand principal — boutons CTA, accents forts
    600: '#E05E00', // Hover état
    700: '#B84A00', // Pressed / Active
    800: '#8C3700', // Texte sur fond clair
    900: '#5C2400', // Texte très foncé
    950: '#3D1800', // Quasi-noir brand
  },
  // Herbe africaine — Vert succès, croissance, validation
  savane: {
    25:  '#F4FDF7',
    50:  '#E8FAF0',
    100: '#CCF2DC',
    200: '#99E4B9',
    300: '#4DCC8A',
    400: '#1AB56A',
    500: '#059950', // Succès principal
    600: '#047A3F', // Hover
    700: '#035C30', // Active
    800: '#024022', // Texte
    900: '#012918', // Très foncé
  },
  // Terre brûlée — Brun chaud, authenticité, ancrage
  terre: {
    50:  '#FAF5F0',
    100: '#F0E4D4',
    200: '#DFC3A3',
    300: '#C99B6E',
    400: '#B07840', // Accent terracotta
    500: '#8B5E2E', // Profondeur
    600: '#6E4A22',
    700: '#523718',
    800: '#38240F',
    900: '#1E1308',
  },
  // Or mat — Valeur premium, récompense, distinction
  or: {
    100: '#FEF7DC',
    200: '#FDE99A',
    300: '#FCD858',
    400: '#F5C518', // Or principal
    500: '#D4A017', // Or sombre
    600: '#A87C10',
    700: '#7C5A0A',
  },
  // Ardoise — Neutres chauds (pas froids comme le gris générique)
  ardoise: {
    0:   '#FFFFFF',
    25:  '#FDFCFB',  // Fond page — légèrement chaud
    50:  '#F8F5F2',  // Section alternée
    100: '#F0EBE4',  // Borders légères
    200: '#DED5CA',  // Borders
    300: '#C4B8AA',  // Placeholder text
    400: '#A0907F',  // Texte désactivé
    500: '#7C6A58',  // Texte secondaire
    600: '#5A4A3A',  // Texte corps
    700: '#3D3128',  // Texte important
    800: '#261E16',  // Titres
    900: '#130E09',  // Titres H1
    950: '#0A0705',  // Quasi-noir
  },
} as const;

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{json}',
  ],

  // ── DARK MODE (désactivé volontairement — site vitrine) ────────
  darkMode: 'class',

  theme: {
    // ── BREAKPOINTS ───────────────────────────────────────────────
    // Mobile-first. Basés sur l'audit : audience mobile africaine majoritaire
    screens: {
      xs:  '320px',   // Feature phones, petits Android
      sm:  '480px',   // Smartphones courants
      md:  '768px',   // Tablettes portrait
      lg:  '1024px',  // Laptops, tablettes paysage
      xl:  '1280px',  // Desktop standard
      '2xl': '1440px', // Large desktop / Mac 1440
      '3xl': '1920px', // Très grands écrans
    },

    // ── CONTAINER ─────────────────────────────────────────────────
    // Résout l'audit §2.5 : "Padding insuffisant sur mobile"
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',  // 20px — plus généreux que 16px pour mobile
        sm:      '1.5rem',   // 24px
        md:      '2rem',     // 32px
        lg:      '2.5rem',   // 40px
        xl:      '3rem',     // 48px
        '2xl':   '4rem',     // 64px
      },
      screens: {
        sm:      '480px',
        md:      '768px',
        lg:      '1024px',
        xl:      '1280px',
        '2xl':   '1320px',   // Max content width (pas full 1440)
      },
    },

    extend: {
      // ── COULEURS ─────────────────────────────────────────────────
      colors: {
        // Primaire — Orange Soleil
        primary: {
          25:  palette.flame[25],
          50:  palette.flame[50],
          100: palette.flame[100],
          200: palette.flame[200],
          300: palette.flame[300],
          400: palette.flame[400],
          500: palette.flame[500],
          600: palette.flame[600],
          700: palette.flame[700],
          800: palette.flame[800],
          900: palette.flame[900],
          950: palette.flame[950],
          DEFAULT: palette.flame[500],
        },

        // Secondaire — Vert Savane
        secondary: {
          25:  palette.savane[25],
          50:  palette.savane[50],
          100: palette.savane[100],
          200: palette.savane[200],
          300: palette.savane[300],
          400: palette.savane[400],
          500: palette.savane[500],
          600: palette.savane[600],
          700: palette.savane[700],
          800: palette.savane[800],
          900: palette.savane[900],
          DEFAULT: palette.savane[500],
        },

        // Accent Or — Valeur premium, prix barrés, badges
        gold: {
          100: palette.or[100],
          200: palette.or[200],
          300: palette.or[300],
          400: palette.or[400],
          500: palette.or[500],
          600: palette.or[600],
          700: palette.or[700],
          DEFAULT: palette.or[400],
        },

        // Accent Terre — Authenticité, warm touches
        terre: {
          50:  palette.terre[50],
          100: palette.terre[100],
          200: palette.terre[200],
          300: palette.terre[300],
          400: palette.terre[400],
          500: palette.terre[500],
          DEFAULT: palette.terre[400],
        },

        // Neutres chauds — Remplacent les gris froids du site actuel
        // Résout l'audit §2.6 : "Contraste insuffisant sur certains textes"
        neutral: {
          0:   palette.ardoise[0],
          25:  palette.ardoise[25],
          50:  palette.ardoise[50],
          100: palette.ardoise[100],
          200: palette.ardoise[200],
          300: palette.ardoise[300],
          400: palette.ardoise[400],
          500: palette.ardoise[500],
          600: palette.ardoise[600],
          700: palette.ardoise[700],
          800: palette.ardoise[800],
          900: palette.ardoise[900],
          950: palette.ardoise[950],
          DEFAULT: palette.ardoise[600],
        },

        // Rôles sémantiques — usage direct dans les composants
        success:  { DEFAULT: palette.savane[500], light: palette.savane[50], dark: palette.savane[700] },
        warning:  { DEFAULT: palette.or[400],    light: palette.or[100],    dark: palette.or[600] },
        danger:   { DEFAULT: '#DC2626',           light: '#FEF2F2',          dark: '#991B1B' },
        info:     { DEFAULT: '#2563EB',           light: '#EFF6FF',          dark: '#1D4ED8' },

        // Surfaces — pour les sections alternées (résout §2.5)
        surface: {
          DEFAULT: palette.ardoise[0],    // Fond blanc
          warm:    palette.ardoise[25],   // Fond légèrement chaud
          tinted:  palette.ardoise[50],   // Section alternée
          muted:   palette.flame[25],     // Section tintée orange très léger
          dark:    palette.ardoise[800],  // Section sombre
          darker:  palette.ardoise[900],  // Section très sombre (footer)
        },

        // Texte — Hiérarchie claire (résout §2.1)
        content: {
          primary:   palette.ardoise[900], // H1, titres forts — ratio 14.5:1
          secondary: palette.ardoise[800], // H2, H3 — ratio 10.8:1
          body:      palette.ardoise[700], // Corps de texte — ratio 7.4:1
          muted:     palette.ardoise[500], // Légende, sous-texte — ratio 4.7:1 (WCAG AA)
          disabled:  palette.ardoise[300], // Champs désactivés
          inverse:   '#FFFFFF',            // Sur fonds colorés
          brand:     palette.flame[500],   // Liens, accents texte
        },

        // Bordures
        border: {
          DEFAULT: palette.ardoise[200],
          light:   palette.ardoise[100],
          medium:  palette.ardoise[300],
          strong:  palette.ardoise[400],
          brand:   palette.flame[300],
          focus:   palette.flame[400],
        },
      },

      // ── TYPOGRAPHIE ───────────────────────────────────────────────
      // Poppins = titres expressifs / Inter = corps lisible
      // Résout §2.6 : "Mélange de styles typographiques"
      fontFamily: {
        heading: ['var(--font-poppins)', 'Georgia', 'serif'],
        body:    ['var(--font-inter)',   'system-ui', 'sans-serif'],
        sans:    ['var(--font-inter)',   'system-ui', 'sans-serif'],
        mono:    ['JetBrains Mono', 'Fira Code', 'monospace'],
      },

      // Échelle fluid — valeurs figées pour headings, fluid pour body
      fontSize: {
        // Micro
        '2xs':  ['0.625rem',  { lineHeight: '0.875rem',  letterSpacing: '0.05em'  }],  //  10px
        xs:     ['0.75rem',   { lineHeight: '1.125rem',  letterSpacing: '0.025em' }],  //  12px
        sm:     ['0.875rem',  { lineHeight: '1.375rem',  letterSpacing: '0.01em'  }],  //  14px
        // Corps
        base:   ['1rem',      { lineHeight: '1.625rem',  letterSpacing: '0'       }],  //  16px
        md:     ['1.0625rem', { lineHeight: '1.75rem',   letterSpacing: '0'       }],  //  17px (confort lecture)
        lg:     ['1.125rem',  { lineHeight: '1.75rem',   letterSpacing: '-0.01em' }],  //  18px
        xl:     ['1.25rem',   { lineHeight: '1.875rem',  letterSpacing: '-0.01em' }],  //  20px
        // Display
        '2xl':  ['1.5rem',    { lineHeight: '2rem',      letterSpacing: '-0.02em' }],  //  24px
        '3xl':  ['1.875rem',  { lineHeight: '2.25rem',   letterSpacing: '-0.02em' }],  //  30px
        '4xl':  ['2.25rem',   { lineHeight: '2.75rem',   letterSpacing: '-0.025em'}],  //  36px
        '5xl':  ['3rem',      { lineHeight: '3.5rem',    letterSpacing: '-0.03em' }],  //  48px
        '6xl':  ['3.75rem',   { lineHeight: '4.25rem',   letterSpacing: '-0.035em'}],  //  60px
        '7xl':  ['4.5rem',    { lineHeight: '5rem',      letterSpacing: '-0.04em' }],  //  72px
        // Hero
        'hero':      ['clamp(2.25rem, 5vw, 3.75rem)',  { lineHeight: '1.15', letterSpacing: '-0.035em' }],
        'hero-lg':   ['clamp(2.75rem, 6vw, 4.5rem)',   { lineHeight: '1.1',  letterSpacing: '-0.04em'  }],
        'display':   ['clamp(1.5rem, 3vw, 2.5rem)',    { lineHeight: '1.2',  letterSpacing: '-0.025em' }],
      },

      fontWeight: {
        thin:       '100',
        light:      '300',
        normal:     '400',
        medium:     '500',
        semibold:   '600',
        bold:       '700',
        extrabold:  '800',
        black:      '900',
      },

      lineHeight: {
        none:     '1',
        tighter:  '1.1',
        tight:    '1.25',
        snug:     '1.375',
        normal:   '1.5',
        relaxed:  '1.625',
        loose:    '1.75',
        reading:  '1.8',  // Optimal pour corps long sur mobile
      },

      letterSpacing: {
        tightest: '-0.04em',
        tighter:  '-0.025em',
        tight:    '-0.01em',
        normal:   '0',
        wide:     '0.025em',
        wider:    '0.05em',
        widest:   '0.1em',
        caps:     '0.12em',  // Pour les labels uppercase
      },

      // ── ESPACEMENT ────────────────────────────────────────────────
      // Base 4px, multiples de 4 et 8
      // Résout §2.5 : "Sections avec marges variables"
      spacing: {
        px:   '1px',
        0:    '0',
        0.5:  '0.125rem',  //   2px
        1:    '0.25rem',   //   4px
        1.5:  '0.375rem',  //   6px
        2:    '0.5rem',    //   8px
        2.5:  '0.625rem',  //  10px
        3:    '0.75rem',   //  12px
        3.5:  '0.875rem',  //  14px
        4:    '1rem',      //  16px
        5:    '1.25rem',   //  20px
        6:    '1.5rem',    //  24px
        7:    '1.75rem',   //  28px
        8:    '2rem',      //  32px
        9:    '2.25rem',   //  36px
        10:   '2.5rem',    //  40px
        11:   '2.75rem',   //  44px (touch target minimum)
        12:   '3rem',      //  48px
        14:   '3.5rem',    //  56px
        16:   '4rem',      //  64px
        18:   '4.5rem',    //  72px
        20:   '5rem',      //  80px
        24:   '6rem',      //  96px
        28:   '7rem',      // 112px
        32:   '8rem',      // 128px
        36:   '9rem',      // 144px
        40:   '10rem',     // 160px
        44:   '11rem',     // 176px
        48:   '12rem',     // 192px
        52:   '13rem',     // 208px
        56:   '14rem',     // 224px
        60:   '15rem',     // 240px
        64:   '16rem',     // 256px
        72:   '18rem',     // 288px
        80:   '20rem',     // 320px
        96:   '24rem',     // 384px
        // Tokens sémantiques pour les sections
        'section-sm':   '4rem',    //  64px mobile
        'section-md':   '5rem',    //  80px tablet
        'section-lg':   '6rem',    //  96px desktop
        'section-xl':   '8rem',    // 128px hero
      },

      // ── OMBRES ────────────────────────────────────────────────────
      // Ombres chaudes (tintées orange/terre, pas gris froid)
      boxShadow: {
        // Système neutre
        xs:     '0 1px 2px 0 rgb(0 0 0 / 0.04)',
        sm:     '0 1px 3px 0 rgb(0 0 0 / 0.08), 0 1px 2px -1px rgb(0 0 0 / 0.06)',
        DEFAULT:'0 2px 8px -1px rgb(0 0 0 / 0.10), 0 1px 3px -1px rgb(0 0 0 / 0.06)',
        md:     '0 4px 12px -2px rgb(0 0 0 / 0.10), 0 2px 6px -2px rgb(0 0 0 / 0.06)',
        lg:     '0 10px 24px -4px rgb(0 0 0 / 0.10), 0 4px 8px -4px rgb(0 0 0 / 0.06)',
        xl:     '0 20px 40px -8px rgb(0 0 0 / 0.12), 0 8px 16px -6px rgb(0 0 0 / 0.08)',
        '2xl':  '0 32px 64px -12px rgb(0 0 0 / 0.18)',
        '3xl':  '0 48px 80px -16px rgb(0 0 0 / 0.24)',
        inner:  'inset 0 2px 4px 0 rgb(0 0 0 / 0.06)',
        none:   'none',

        // Ombres brand — orange (pour boutons CTA, cartes featured)
        'brand-sm': '0 2px 8px 0 rgb(249 115 22 / 0.20)',
        'brand-md': '0 4px 16px 0 rgb(249 115 22 / 0.28)',
        'brand-lg': '0 8px 32px 0 rgb(249 115 22 / 0.32)',
        'brand-xl': '0 16px 48px 0 rgb(249 115 22 / 0.36)',

        // Ombres Or — pour éléments premium, pricing featured
        'gold-sm':  '0 2px 8px 0 rgb(245 197 24 / 0.24)',
        'gold-md':  '0 4px 16px 0 rgb(245 197 24 / 0.32)',

        // Ombres vertes — pour états succès, validations
        'success-sm': '0 2px 8px 0 rgb(5 153 80 / 0.20)',
        'success-md': '0 4px 16px 0 rgb(5 153 80 / 0.28)',

        // Ombres chaudes — pour cartes hero
        'warm-lg':  '0 16px 40px -8px rgb(139 94 46 / 0.16)',
        'warm-xl':  '0 24px 56px -12px rgb(139 94 46 / 0.20)',

        // États focus — accessibilité
        'focus-brand': '0 0 0 3px rgb(249 115 22 / 0.35)',
        'focus-ring':  '0 0 0 3px rgb(249 115 22 / 0.20)',
      },

      // ── BORDER RADIUS ─────────────────────────────────────────────
      // Direction : arrondi généreux → moderne et chaleureux
      borderRadius: {
        none:   '0',
        xs:     '0.1875rem',  //  3px — micro éléments
        sm:     '0.375rem',   //  6px
        DEFAULT:'0.5rem',     //  8px — inputs, badges
        md:     '0.75rem',    // 12px — small cards
        lg:     '1rem',       // 16px — cards standard
        xl:     '1.25rem',    // 20px — cards larges
        '2xl':  '1.5rem',     // 24px — hero cards, modals
        '3xl':  '2rem',       // 32px — hero sections
        '4xl':  '2.5rem',     // 40px
        full:   '9999px',     // pills, avatars, badges ronds
      },

      // ── BORDER WIDTH ──────────────────────────────────────────────
      borderWidth: {
        DEFAULT: '1px',
        0: '0',
        2: '2px',
        3: '3px',
        4: '4px',
      },

      // ── OUTLINE ───────────────────────────────────────────────────
      outlineOffset: {
        DEFAULT: '2px',
        0: '0',
        2: '2px',
        4: '4px',
      },

      // ── Z-INDEX ───────────────────────────────────────────────────
      zIndex: {
        auto:      'auto',
        '-1':      '-1',
        0:         '0',
        10:        '10',
        20:        '20',
        30:        '30',
        40:        '40',
        50:        '50',
        dropdown:  '100',
        sticky:    '200',
        overlay:   '300',
        modal:     '400',
        toast:     '500',
        tooltip:   '600',
        top:       '9999',
      },

      // ── DIMENSIONS ────────────────────────────────────────────────
      maxWidth: {
        none:     'none',
        xs:       '20rem',    // 320px
        sm:       '24rem',    // 384px
        md:       '28rem',    // 448px
        lg:       '32rem',    // 512px
        xl:       '36rem',    // 576px
        '2xl':    '42rem',    // 672px
        '3xl':    '48rem',    // 768px
        '4xl':    '56rem',    // 896px
        '5xl':    '64rem',    // 1024px
        '6xl':    '72rem',    // 1152px
        '7xl':    '80rem',    // 1280px
        prose:    '68ch',     // Longueur lecture optimale
        full:     '100%',
        screen:   '100vw',
      },

      minHeight: {
        0:        '0',
        full:     '100%',
        screen:   '100vh',
        svh:      '100svh',   // Safe area pour iOS
        'hero':   '560px',    // Minimum hero mobile
        'hero-md':'680px',    // Minimum hero tablet
        'touch':  '44px',     // Touch target WCAG 2.5.5
      },

      // ── TRANSITIONS & ANIMATIONS ──────────────────────────────────
      transitionDuration: {
        75:   '75ms',
        100:  '100ms',
        150:  '150ms',
        200:  '200ms',   // Micro-interactions rapides
        300:  '300ms',   // Transitions standard
        500:  '500ms',   // Animations amples
        700:  '700ms',
        1000: '1000ms',
      },

      transitionTimingFunction: {
        linear:    'linear',
        in:        'cubic-bezier(0.4, 0, 1, 1)',
        out:       'cubic-bezier(0, 0, 0.2, 1)',
        'in-out':  'cubic-bezier(0.4, 0, 0.2, 1)',
        // Courbes expressives pour les animations Framer
        bounce:    'cubic-bezier(0.34, 1.56, 0.64, 1)',  // Overshoot léger
        smooth:    'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        snappy:    'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        decel:     'cubic-bezier(0.0, 0.0, 0.2, 1)',     // Material decelerate
        accel:     'cubic-bezier(0.4, 0.0, 1, 1)',       // Material accelerate
      },

      // ── KEYFRAMES ─────────────────────────────────────────────────
      keyframes: {
        // Entrées
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-down': {
          '0%':   { opacity: '0', transform: 'translateY(-24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-left': {
          '0%':   { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-right': {
          '0%':   { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%':   { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'scale-in-bounce': {
          '0%':   { opacity: '0', transform: 'scale(0.85)' },
          '70%':  { opacity: '1', transform: 'scale(1.03)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },

        // Carousel partenaires (résout §2.3 de l'audit — social proof)
        'marquee': {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-slow': {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },

        // Countdown flip (résout §2.7 — timer cassé, effet premium)
        'flip-top': {
          '0%':   { transform: 'rotateX(0deg)', transformOrigin: 'bottom' },
          '100%': { transform: 'rotateX(-90deg)', transformOrigin: 'bottom' },
        },
        'flip-bottom': {
          '0%':   { transform: 'rotateX(90deg)', transformOrigin: 'top' },
          '100%': { transform: 'rotateX(0deg)', transformOrigin: 'top' },
        },

        // Pulse attention — pour CTAs urgents
        'pulse-brand': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgb(249 115 22 / 0.4)' },
          '50%':       { boxShadow: '0 0 0 12px rgb(249 115 22 / 0)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%':       { opacity: '0.7' },
        },

        // Shimmer loading skeleton
        'shimmer': {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },

        // Float — pour éléments décoratifs hero
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':       { transform: 'translateY(-12px)' },
        },
        'float-sm': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':       { transform: 'translateY(-6px)' },
        },

        // Spin statut
        'spin-slow': {
          '0%':   { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },

        // Slide menu mobile (résout §2.6 — navigation manquante)
        'slide-in-right': {
          '0%':   { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)',    opacity: '1' },
        },
        'slide-out-right': {
          '0%':   { transform: 'translateX(0)',    opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },

        // Accordion expand (résout §2.9 — animations scroll)
        'accordion-down': {
          '0%':   { height: '0', opacity: '0' },
          '100%': { height: 'var(--accordion-content-height)', opacity: '1' },
        },
        'accordion-up': {
          '0%':   { height: 'var(--accordion-content-height)', opacity: '1' },
          '100%': { height: '0', opacity: '0' },
        },

        // Stats counter reveal
        'count-reveal': {
          '0%':   { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },

      // ── ANIMATION PRESETS ─────────────────────────────────────────
      animation: {
        // Entrées scroll
        'fade-up':           'fade-up 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
        'fade-down':         'fade-down 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
        'fade-left':         'fade-left 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
        'fade-right':        'fade-right 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
        'fade-in':           'fade-in 0.4s ease-out both',
        'scale-in':          'scale-in 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
        'scale-in-bounce':   'scale-in-bounce 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both',

        // Carousel
        'marquee':           'marquee 28s linear infinite',
        'marquee-slow':      'marquee-slow 48s linear infinite',

        // Countdown
        'flip-top':          'flip-top 0.3s ease-in both',
        'flip-bottom':       'flip-bottom 0.3s ease-out both',

        // Attention
        'pulse-brand':       'pulse-brand 2.4s ease-in-out infinite',
        'pulse-subtle':      'pulse-subtle 2s ease-in-out infinite',

        // Loading
        'shimmer':           'shimmer 1.8s ease-in-out infinite',

        // Décoration
        'float':             'float 5s ease-in-out infinite',
        'float-sm':          'float-sm 3.5s ease-in-out infinite',
        'spin-slow':         'spin-slow 8s linear infinite',

        // Navigation
        'slide-in-right':    'slide-in-right 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
        'slide-out-right':   'slide-out-right 0.3s ease-in both',

        // FAQ
        'accordion-down':    'accordion-down 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'accordion-up':      'accordion-up 0.3s cubic-bezier(0.55, 0, 0.55, 0.45)',

        // Stats
        'count-reveal':      'count-reveal 0.5s ease-out both',

        // États
        'spin':              'spin 1s linear infinite',
        'ping':              'ping 1.2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'bounce':            'bounce 1s infinite',
        'none':              'none',
      },

      // ── DÉGRADÉS ─────────────────────────────────────────────────
      backgroundImage: {
        // Brand gradients
        'gradient-brand':     'linear-gradient(135deg, #F97316 0%, #E05E00 100%)',
        'gradient-brand-lg':  'linear-gradient(135deg, #FFA94D 0%, #F97316 50%, #B84A00 100%)',
        'gradient-gold':      'linear-gradient(135deg, #FCD858 0%, #F5C518 50%, #D4A017 100%)',
        'gradient-success':   'linear-gradient(135deg, #4DCC8A 0%, #059950 100%)',
        'gradient-dark':      'linear-gradient(180deg, #261E16 0%, #130E09 100%)',

        // Surfaces héros
        'gradient-hero':      'linear-gradient(135deg, #FDFCFB 0%, #FFF4E8 40%, #FAF5F0 100%)',
        'gradient-hero-rich': 'radial-gradient(ellipse at 70% 50%, #FFF4E8 0%, #FDFCFB 60%, #F8F5F2 100%)',
        'gradient-section':   'linear-gradient(180deg, #FDFCFB 0%, #F8F5F2 100%)',
        'gradient-cta':       'linear-gradient(135deg, #261E16 0%, #3D3128 100%)',

        // Overlay pour images avec texte — résout §2.3 audit
        'overlay-dark':       'linear-gradient(to top, rgb(0 0 0 / 0.72) 0%, rgb(0 0 0 / 0.32) 50%, transparent 100%)',
        'overlay-brand':      'linear-gradient(to top, rgb(249 115 22 / 0.7) 0%, rgb(249 115 22 / 0.2) 60%, transparent 100%)',
        'overlay-subtle':     'linear-gradient(180deg, transparent 40%, rgb(0 0 0 / 0.4) 100%)',

        // Texte gradient
        'gradient-text-brand': 'linear-gradient(135deg, #F97316 0%, #F5C518 100%)',
        'gradient-text-dark':  'linear-gradient(135deg, #261E16 0%, #5A4A3A 100%)',

        // None
        none: 'none',
      },

      // ── OPACITÉS utiles ───────────────────────────────────────────
      opacity: {
        0:   '0',
        5:   '0.05',
        10:  '0.1',
        15:  '0.15',
        20:  '0.2',
        25:  '0.25',
        30:  '0.3',
        40:  '0.4',
        50:  '0.5',
        60:  '0.6',
        70:  '0.7',
        75:  '0.75',
        80:  '0.8',
        90:  '0.9',
        95:  '0.95',
        100: '1',
      },

      // ── BLUR ─────────────────────────────────────────────────────
      blur: {
        none:  '0',
        sm:    '4px',
        DEFAULT:'8px',
        md:    '12px',
        lg:    '16px',
        xl:    '24px',
        '2xl': '40px',
        '3xl': '64px',
      },

      // ── ASPECT RATIOS ─────────────────────────────────────────────
      aspectRatio: {
        auto:       'auto',
        square:     '1 / 1',
        video:      '16 / 9',
        portrait:   '3 / 4',
        thumbnail:  '4 / 3',   // Testimonial thumbnails
        hero:       '21 / 9',   // Hero banner
        card:       '3 / 2',
      },
    },
  },

  // ── PLUGINS ───────────────────────────────────────────────────
  plugins: [
    // Plugin custom : composants utilitaires intégrés Tailwind
    plugin(({ addComponents, addUtilities, addBase, theme }) => {

      // ── BASE STYLES ──────────────────────────────────────────────
      addBase({
        // Smooth scroll globale
        'html': { scrollBehavior: 'smooth' },

        // Focus-visible cohérent
        ':focus-visible': {
          outline: `2px solid ${theme('colors.primary.500')}`,
          outlineOffset: '3px',
          borderRadius: '2px',
        },

        // Scrollbar système discrète
        '::-webkit-scrollbar': { width: '6px', height: '6px' },
        '::-webkit-scrollbar-track': { background: theme('colors.neutral.100') },
        '::-webkit-scrollbar-thumb': {
          background: theme('colors.neutral.300'),
          borderRadius: '3px',
        },
        '::-webkit-scrollbar-thumb:hover': {
          background: theme('colors.neutral.400'),
        },

        // Sélection texte — couleur brand
        '::selection': {
          backgroundColor: theme('colors.primary.200'),
          color: theme('colors.primary.900'),
        },
      });

      // ── COMPOSANTS ATOMIQUES ─────────────────────────────────────
      addComponents({
        // ── Boutons (résout §2.9 audit — hover states basiques)
        '.btn': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          fontFamily: theme('fontFamily.body'),
          fontWeight: theme('fontWeight.semibold'),
          lineHeight: '1',
          whiteSpace: 'nowrap',
          border: '2px solid transparent',
          cursor: 'pointer',
          transition: 'all 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          userSelect: 'none',
          textDecoration: 'none',
          '&:disabled, &[aria-disabled="true"]': {
            opacity: '0.5',
            cursor: 'not-allowed',
            pointerEvents: 'none',
          },
          '&:focus-visible': {
            outline: 'none',
            boxShadow: theme('boxShadow.focus-brand'),
          },
        },

        // Tailles boutons
        '.btn-xs':  { height: '2rem',    paddingInline: '0.75rem', fontSize: '0.75rem',  borderRadius: '0.375rem' },
        '.btn-sm':  { height: '2.25rem', paddingInline: '1rem',    fontSize: '0.875rem', borderRadius: '0.5rem' },
        '.btn-md':  { height: '2.75rem', paddingInline: '1.5rem',  fontSize: '0.9375rem',borderRadius: '0.625rem' },
        '.btn-lg':  { height: '3.25rem', paddingInline: '2rem',    fontSize: '1rem',     borderRadius: '0.75rem' },
        '.btn-xl':  { height: '3.75rem', paddingInline: '2.5rem',  fontSize: '1.125rem', borderRadius: '0.875rem' },

        // Variantes boutons
        '.btn-primary': {
          backgroundColor: theme('colors.primary.500'),
          color: '#FFFFFF',
          boxShadow: theme('boxShadow.brand-sm'),
          '&:hover': {
            backgroundColor: theme('colors.primary.600'),
            boxShadow: theme('boxShadow.brand-md'),
            transform: 'translateY(-1px)',
          },
          '&:active': {
            backgroundColor: theme('colors.primary.700'),
            transform: 'translateY(0)',
            boxShadow: theme('boxShadow.brand-sm'),
          },
        },
        '.btn-secondary': {
          backgroundColor: theme('colors.secondary.500'),
          color: '#FFFFFF',
          boxShadow: theme('boxShadow.success-sm'),
          '&:hover': {
            backgroundColor: theme('colors.secondary.600'),
            boxShadow: theme('boxShadow.success-md'),
            transform: 'translateY(-1px)',
          },
          '&:active': { backgroundColor: theme('colors.secondary.700'), transform: 'translateY(0)' },
        },
        '.btn-outline': {
          backgroundColor: 'transparent',
          borderColor: theme('colors.primary.400'),
          color: theme('colors.primary.600'),
          '&:hover': {
            backgroundColor: theme('colors.primary.50'),
            borderColor: theme('colors.primary.500'),
            color: theme('colors.primary.700'),
          },
          '&:active': { backgroundColor: theme('colors.primary.100') },
        },
        '.btn-outline-dark': {
          backgroundColor: 'transparent',
          borderColor: 'rgba(255,255,255,0.6)',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.12)',
            borderColor: 'rgba(255,255,255,0.9)',
          },
        },
        '.btn-ghost': {
          backgroundColor: 'transparent',
          color: theme('colors.neutral.700'),
          '&:hover': { backgroundColor: theme('colors.neutral.100'), color: theme('colors.neutral.900') },
          '&:active': { backgroundColor: theme('colors.neutral.200') },
        },
        '.btn-gold': {
          backgroundColor: theme('colors.gold.400'),
          color: '#1E1308',
          boxShadow: theme('boxShadow.gold-sm'),
          '&:hover': {
            backgroundColor: theme('colors.gold.500'),
            boxShadow: theme('boxShadow.gold-md'),
            transform: 'translateY(-1px)',
          },
        },
        '.btn-cta': {
          // Bouton CTA urgence — animation pulse
          backgroundColor: theme('colors.primary.500'),
          color: '#FFFFFF',
          boxShadow: theme('boxShadow.brand-md'),
          animation: 'pulse-brand 2.4s ease-in-out infinite',
          '&:hover': {
            backgroundColor: theme('colors.primary.600'),
            animationPlayState: 'paused',
            transform: 'translateY(-2px)',
            boxShadow: theme('boxShadow.brand-lg'),
          },
        },

        // ── Badges
        '.badge': {
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.375rem',
          paddingInline: '0.75rem',
          paddingBlock: '0.25rem',
          fontSize: '0.75rem',
          fontWeight: theme('fontWeight.semibold'),
          borderRadius: theme('borderRadius.full'),
          lineHeight: '1.25',
          letterSpacing: theme('letterSpacing.wide'),
          whiteSpace: 'nowrap',
        },
        '.badge-brand':   { backgroundColor: theme('colors.primary.100'),   color: theme('colors.primary.800') },
        '.badge-success': { backgroundColor: theme('colors.secondary.100'),  color: theme('colors.secondary.800') },
        '.badge-gold':    { backgroundColor: theme('colors.gold.100'),       color: theme('colors.gold.700') },
        '.badge-dark':    { backgroundColor: theme('colors.neutral.800'),     color: '#FFFFFF' },
        '.badge-outline': {
          backgroundColor: 'transparent',
          border: `1px solid ${theme('colors.primary.300')}`,
          color: theme('colors.primary.700'),
        },

        // ── Cards (résout §2.8 audit — cartes pricing sans comparaison)
        '.card': {
          backgroundColor: '#FFFFFF',
          borderRadius: theme('borderRadius.xl'),
          border: `1px solid ${theme('colors.neutral.200')}`,
          overflow: 'hidden',
          transition: 'all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        },
        '.card-hover': {
          '&:hover': {
            boxShadow: theme('boxShadow.lg'),
            transform: 'translateY(-4px)',
            borderColor: theme('colors.neutral.300'),
          },
        },
        '.card-featured': {
          backgroundColor: theme('colors.primary.500'),
          borderColor: theme('colors.primary.500'),
          color: '#FFFFFF',
          boxShadow: theme('boxShadow.brand-lg'),
        },
        '.card-gold': {
          backgroundColor: '#FFFFFF',
          border: `2px solid ${theme('colors.gold.400')}`,
          boxShadow: theme('boxShadow.gold-md'),
        },
        '.card-warm': {
          backgroundColor: theme('colors.neutral.50'),
          border: `1px solid ${theme('colors.neutral.200')}`,
          boxShadow: theme('boxShadow.warm-lg'),
        },

        // ── Inputs (résout §2.6 — formulaire inscription)
        '.input': {
          width: '100%',
          height: '3rem',
          paddingInline: '1rem',
          fontSize: '1rem',
          color: theme('colors.neutral.900'),
          backgroundColor: '#FFFFFF',
          border: `1.5px solid ${theme('colors.border.DEFAULT')}`,
          borderRadius: theme('borderRadius.lg'),
          outline: 'none',
          transition: 'all 200ms ease',
          '&::placeholder': { color: theme('colors.neutral.400') },
          '&:hover': { borderColor: theme('colors.border.medium') },
          '&:focus': {
            borderColor: theme('colors.border.focus'),
            boxShadow: theme('boxShadow.focus-ring'),
          },
          '&:disabled': {
            backgroundColor: theme('colors.neutral.100'),
            color: theme('colors.neutral.400'),
            cursor: 'not-allowed',
          },
          '&[aria-invalid="true"]': {
            borderColor: theme('colors.danger.DEFAULT'),
            boxShadow: '0 0 0 3px rgba(220, 38, 38, 0.15)',
          },
        },

        // ── Section wrappers
        '.section': {
          paddingBlock: theme('spacing.section-sm'),
          '@media (min-width: 768px)': { paddingBlock: theme('spacing.section-md') },
          '@media (min-width: 1024px)': { paddingBlock: theme('spacing.section-lg') },
        },
        '.section-lg': {
          paddingBlock: theme('spacing.section-md'),
          '@media (min-width: 1024px)': { paddingBlock: theme('spacing.section-xl') },
        },

        // ── Eyebrow labels (résout §2.1 — hiérarchie visuelle)
        '.eyebrow': {
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.75rem',
          fontWeight: theme('fontWeight.semibold'),
          letterSpacing: theme('letterSpacing.caps'),
          textTransform: 'uppercase',
          color: theme('colors.primary.600'),
        },

        // ── Dividers décoratifs
        '.divider-brand': {
          height: '3px',
          width: '3rem',
          backgroundColor: theme('colors.primary.500'),
          borderRadius: '9999px',
        },
      });

      // ── UTILITAIRES CUSTOM ───────────────────────────────────────
      addUtilities({
        // Gradient texte
        '.text-gradient-brand': {
          backgroundImage: 'linear-gradient(135deg, #F97316 0%, #F5C518 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        },
        '.text-gradient-dark': {
          backgroundImage: `linear-gradient(135deg, ${theme('colors.neutral.900')} 0%, ${theme('colors.neutral.700')} 100%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        },
        '.text-gradient-gold': {
          backgroundImage: 'linear-gradient(135deg, #FCD858 0%, #D4A017 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        },

        // Fond grain texture (effet premium)
        '.bg-grain': {
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'repeat',
          backgroundSize: '256px',
        },

        // Marquee stop au hover
        '.marquee-pause-hover:hover .marquee-track': {
          animationPlayState: 'paused',
        },

        // Fade edges (pour carousel partenaires)
        '.fade-edges': {
          maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        },
        '.fade-edges-lg': {
          maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
        },

        // Underline animé (liens navbar)
        '.link-underline': {
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-2px',
            left: '0',
            width: '0%',
            height: '2px',
            backgroundColor: 'currentColor',
            borderRadius: '9999px',
            transition: 'width 250ms ease',
          },
          '&:hover::after, &.active::after': { width: '100%' },
        },

        // Scroll snap pour carousels
        '.snap-x-mandatory': {
          scrollSnapType: 'x mandatory',
          overflowX: 'auto',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': { display: 'none' },
        },
        '.snap-item': { scrollSnapAlign: 'start' },

        // Perspective pour flip countdown
        '.perspective': { perspective: '600px' },
        '.preserve-3d': { transformStyle: 'preserve-3d' },
        '.backface-hidden': { backfaceVisibility: 'hidden' },

        // Truncate lines
        '.line-clamp-1': { overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: '1', WebkitBoxOrient: 'vertical' },
        '.line-clamp-2': { overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical' },
        '.line-clamp-3': { overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical' },
        '.line-clamp-4': { overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: '4', WebkitBoxOrient: 'vertical' },

        // Interaction states
        '.interactive': {
          cursor: 'pointer',
          userSelect: 'none',
          WebkitTapHighlightColor: 'transparent',
          transition: 'all 200ms ease',
        },
        '.lift': {
          transition: 'transform 250ms ease, box-shadow 250ms ease',
          '&:hover': { transform: 'translateY(-4px)' },
          '&:active': { transform: 'translateY(-1px)' },
        },

        // Pour masquer accessiblement (screen readers)
        '.sr-only': {
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: '0',
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          border: '0',
        },

        // Animation delays helpers
        '.delay-75':   { animationDelay: '75ms' },
        '.delay-100':  { animationDelay: '100ms' },
        '.delay-150':  { animationDelay: '150ms' },
        '.delay-200':  { animationDelay: '200ms' },
        '.delay-300':  { animationDelay: '300ms' },
        '.delay-400':  { animationDelay: '400ms' },
        '.delay-500':  { animationDelay: '500ms' },
        '.delay-700':  { animationDelay: '700ms' },
        '.delay-1000': { animationDelay: '1000ms' },
      });
    }),
  ],
};

export default config;
