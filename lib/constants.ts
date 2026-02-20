/**
 * CONSTANTS — The Million Within Academy
 * Source de vérité pour toutes les données statiques du site.
 */

export const SITE = {
  name: 'The Million Within Academy',
  tagline: 'Bâtissez votre entreprise sans renoncer à votre famille',
  url: 'https://www.themillionwithin.com',
  email: 'contact@themillionwithin.com',
  whatsapp: '+12812031065',
  phone: '+221XXXXXXXXX',
  locale: 'fr',
  languages: ['fr', 'wo'] as const,
} as const;

export const STATS = [
  { value: '673+', label: 'Entrepreneurs formés', icon: '👩‍💼' },
  { value: '500 M', label: 'Chiffre d\'affaires cumulé', icon: '📈' },
  { value: '10 ans', label: "D'expérience", icon: '⭐' },
  { value: '100%', label: 'En ligne / en présentiel', icon: '💻' },
] as const;

/* ── SECTION ABOUT ────────────────────────────────────────────── */
export const ABOUT = {
  videoId: 'YvSAAhAvsV0',
  title: {
    before: 'Nous aidons les femmes à',
    highlight: 'bâtir leur empire,',
    after: 'depuis chez elles.',
  },
  description:
    'Depuis <strong class="text-neutral-800">10 ans</strong>, The Million Within Academy accompagne les femmes entrepreneures d\'Afrique et de la diaspora dans la création de business rentables — <strong class="text-neutral-800">sans capital de départ</strong>, sans quitter leur foyer.',
  subdescription:
    'Notre méthode unique, testée par <strong class="text-neutral-800">673 entrepreneurs partout dans le monde</strong>, vous donne les outils, le réseau et la confiance pour transformer votre idée en entreprise prospère en seulement 5 jours.',
} as const;

export const NEXT_SESSION = {
  date: new Date('2026-04-14T13:00:00.000+00:00'),
  timezones: {
    dakar: '13h00 GMT',
    paris: '15h00 CEST',
    newYork: '09h00 EDT',
  },
  label: '14 Avril 2026',
} as const;

export type PricingPlan = {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
  featured?: boolean;
  price: {
    FCFA: number;
    EUR: number;
    USD: number;
    original?: { FCFA: number; EUR: number; USD: number };
  };
  features: string[];
  cta: string;
  href: string;
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'standard',
    title: 'Master Standard',
    subtitle: 'À votre rythme',
    price: { FCFA: 89_500, EUR: 139, USD: 145 },
    features: [
      'Accès à tous les modules vidéo',
      'Supports de cours téléchargeables',
      'Communauté privée',
      'Accès 6 mois',
    ],
    cta: 'Choisir Standard',
    href: '/inscription?plan=standard',
  },
  {
    id: 'accelere-5j',
    title: 'Master Accéléré 5 Jours',
    subtitle: 'Formation intensive en direct',
    badge: '⭐ Populaire',
    featured: true,
    price: { FCFA: 185_000, EUR: 285, USD: 299 },
    features: [
      'Formation en direct sur 5 jours',
      'Accès à tous les modules vidéo',
      'Supports de cours téléchargeables',
      'Communauté privée',
      'Q&A quotidien avec les formateurs',
      'Certificat de complétion',
      'Accès 12 mois aux replays',
    ],
    cta: 'Choisir Accéléré 5J',
    href: '/inscription?plan=accelere-5j',
  },
  {
    id: 'non-accelere-suivi',
    title: 'Master Non Accéléré + Suivi',
    subtitle: 'Flexible avec coaching personnalisé',
    price: { FCFA: 185_000, EUR: 285, USD: 299 },
    features: [
      'Accès à tous les modules vidéo',
      'Supports de cours téléchargeables',
      'Communauté privée',
      '2 sessions de coaching individuelles',
      'Accès 12 mois',
      'Certificat de complétion',
    ],
    cta: 'Choisir Suivi',
    href: '/inscription?plan=non-accelere-suivi',
  },
  {
    id: 'pro',
    title: 'Master PRO',
    subtitle: 'Pour chefs d\'entreprise',
    price: { FCFA: 981_500, EUR: 1_499, USD: 1_599 },
    features: [
      'Tout du programme Accéléré 5J',
      '6 mois de coaching individuel mensuel',
      'Accès à la communauté VIP',
      'Revue de business plan personnalisée',
      'Accès à vie aux formations futures',
      'Certificat premium',
      'Réseau d\'affaires exclusif',
    ],
    cta: 'Choisir PRO',
    href: '/inscription?plan=pro',
  },
];

/* PROGRAMME_DAYS — dérivé de la source unique dans components/programme/data.ts */
export { PROGRAMME_STEPS } from '@/components/programme/data';
export type { ProgrammeStep as ProgrammeStepType } from '@/components/programme/types';

export const FAQ_ITEMS = [
  { question: 'Comment se déroule la formation ?', answer: 'La formation se déroule en ligne / en présentiel sur 5 jours consécutifs, avec modules vidéo et sessions en direct.' },
  { question: 'Ai-je besoin d\'un capital de départ ?', answer: 'Non ! Nous enseignons des stratégies sans investissement initial important.' },
  { question: 'Quels sont les moyens de paiement acceptés ?', answer: 'Wave, Orange Money, Carte bancaire.' },
  { question: 'Puis-je suivre depuis n\'importe quel pays ?', answer: 'Oui. La formation est conçue pour l\'Afrique, l\'Europe et l\'Amérique.' },
  { question: 'Y a-t-il un accompagnement après la formation ?', answer: 'Oui. Communauté privée, et formules Suivi/PRO avec coaching.' },
] as const;

export const PAYMENT_METHODS = [
  { id: 'wave', label: 'Wave', icon: '💙' },
  { id: 'orange-money', label: 'Orange Money', icon: '🟠' },
  { id: 'card', label: 'Carte bancaire', icon: '💳' },
] as const;

export type NavLink = {
  label: string;
  href: string;
  submenu?: { label: string; href: string }[];
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Formation', href: '/formation' },
  { label: 'Témoignages', href: '/temoignages' },
  { label: 'Notre équipe', href: '/equipe' },
  { label: 'Offres', href: '/tarifs' },
  { label: 'FAQ', href: '/faq' },
];

export const LEGAL_LINKS = [
  { label: 'Mentions légales', href: '/mentions-legales' },
  { label: 'CGV', href: '/cgv' },
  { label: 'Confidentialité', href: '/confidentialite' },
] as const;

/* ─── RÉSEAUX SOCIAUX ──────────────────────────────────────── */

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/profile.php?id=61559725180277',
  instagram: 'https://www.instagram.com/themillionwithin',
  whatsapp: `https://api.whatsapp.com/send?phone=12812031065`,
} as const;

/* ─── PARTENAIRES / LOGOS ──────────────────────────────────── */

export const PARTNER_LOGOS = [
  { src: 'https://ddsmedicalsenegal.com/assets/img/partner/2.jpeg', alt: 'Partenaire 1' },
  { src: 'https://ddsmedicalsenegal.com/assets/img/partner/3.png', alt: 'Partenaire 2' },
  { src: 'https://ddsmedicalsenegal.com/assets/img/partner/4.png', alt: 'Partenaire 3' },
  { src: 'https://ddsmedicalsenegal.com/assets/img/partner/5.png', alt: 'Partenaire 4' },
  { src: 'https://ddsmedicalsenegal.com/assets/img/partner/6.jpeg', alt: 'Partenaire 5' },
  { src: 'https://ddsmedicalsenegal.com/assets/img/partner/7.png', alt: 'Partenaire 6' },
  { src: 'https://ddsmedicalsenegal.com/assets/img/partner/8.jpeg', alt: 'Partenaire 7' },
  { src: 'https://ddsmedicalsenegal.com/assets/img/partner/9.png', alt: 'Partenaire 8' },
] as const;

/* ─── URLS VIDÉOS TÉMOIGNAGES (CloudFront CDN) ─────────────── */

export const TESTIMONIAL_VIDEOS: Record<string, string> = {
  'ramatoulaye-wade': 'https://d1yei2z3i6k35z.cloudfront.net/832931/672ba2b44a1cd_temoignageTMWRomatoulayeWade.mp4',
  'ramatoulaye-seck': 'https://d1yei2z3i6k35z.cloudfront.net/832931/67292a5c05d6e_22.mp4',
  'dior-diagne': 'https://d1yei2z3i6k35z.cloudfront.net/832931/672b94e5b8da9_temoignageDIORDIAGNETMWS01.mp4.mp4',
  'khadidiatou-diop': 'https://d1yei2z3i6k35z.cloudfront.net/832931/672b957fc87b4_temoignageKHADIDIATOUDIOPTMWS01.mp4.mp4',
  'mame-diarra-sall': 'https://d1yei2z3i6k35z.cloudfront.net/832931/672b950dd242a_temoignageDiarraTMWS01.mp4',
  'collette-basse': 'https://d1yei2z3i6k35z.cloudfront.net/832931/672b9495248aa_temoignageCOLLETTEBASSTMWS01.mp4.mp4',
} as const;

/* ── ÉQUIPE ──────────────────────────────────────────────────── */
export const TEAM_MEMBERS = [
  {
    id: 'ceo',
    name: 'Mme Sall',
    role: 'C.E.O — Formatrice',
    image: '/images/team/Mme Sall Ceo formatrice.png',
    featured: true,
    socials: {},
  },
  {
    id: 'dieng-anna',
    name: 'Mme Dieng Anna',
    role: 'Capitaine Alumni',
    image: '/images/team/Mme Dieng Anna.png',
    socials: {},
  },
  {
    id: 'seck-ramatoulaye',
    name: 'Mme Seck Ramatoulaye',
    role: 'Capitaine Alumni',
    image: '/images/team/Mme Seck Ramatoulaye.png',
    socials: {},
  },
  {
    id: 'diop-khadidiatou',
    name: 'Mme Diop Khadidiatou',
    role: 'Capitaine Alumni',
    image: '/images/team/Mme Diop Khadidiatou.png',
    socials: {},
  },
] as const;

export type TeamMember = (typeof TEAM_MEMBERS)[number];


export const CLOUDINARY = {
  cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || '',
  apiKey: process.env.CLOUDINARY_API_KEY || '',
  apiSecret: process.env.CLOUDINARY_API_SECRET || '',
};