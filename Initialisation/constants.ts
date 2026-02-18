/**
 * CONSTANTS — The Million Within Academy
 * Source de vérité pour toutes les données statiques du site.
 */

/* ── SITE ─────────────────────────────────────────────────────── */
export const SITE = {
  name: 'The Million Within Academy',
  tagline: 'Bâtissez votre entreprise sans renoncer à votre famille',
  url: 'https://www.themillionwithin.com',
  email: 'contact@themillionwithin.com',
  whatsapp: '+12812031065',  // Extrait de l'audit §1.3
  phone: '+221XXXXXXXXX',    // À compléter
  locale: 'fr',
  languages: ['fr', 'wo'] as const,
} as const;

/* ── STATISTIQUES ─────────────────────────────────────────────── */
export const STATS = [
  { value: '496+', label: 'Étudiantes', icon: '👩‍💼' },
  { value: '319', label: 'Business créés', icon: '🏢' },
  { value: '10 ans', label: "D'expérience", icon: '⭐' },
  { value: '100%', label: 'En ligne', icon: '💻' },
] as const;

/* ── SESSION ──────────────────────────────────────────────────── */
export const NEXT_SESSION = {
  date: new Date('2025-11-09T13:00:00.000+00:00'),
  timezones: {
    dakar: '13h00 GMT',
    paris: '14h00 CET',
    newYork: '09h00 EST',
  },
  label: '9 Novembre 2025',
} as const;

/* ── TARIFS ───────────────────────────────────────────────────── */
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
    price: {
      FCFA: 89_500,
      EUR: 139,   // Prix exact audit §5.4
      USD: 145,   // Prix exact audit §5.4
    },
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
    price: {
      FCFA: 185_000,
      EUR: 285,   // Prix exact audit §5.4
      USD: 299,   // Prix exact audit §5.4
    },
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
    price: {
      FCFA: 185_000,
      EUR: 285,   // Prix exact audit §5.4
      USD: 299,   // Prix exact audit §5.4
    },
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
    price: {
      FCFA: 981_500,
      EUR: 1_499,  // Prix exact audit §5.4
      USD: 1_599,  // Prix exact audit §5.4
    },
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

/* ── PROGRAMME 5 JOURS ────────────────────────────────────────── */
export const PROGRAMME_DAYS = [
  {
    day: 1,
    title: 'Fondations du succès',
    description:
      'Posez les bases solides de votre mindset entrepreneurial. Identifiez vos forces uniques et définissez votre vision d\'entreprise.',
    icon: '🧱',
    topics: ['Mindset entrepreneurial', 'Vision et mission', 'Identification de vos compétences'],
  },
  {
    day: 2,
    title: 'Stratégies gagnantes',
    description:
      'Découvrez les stratégies commerciales qui fonctionnent pour les femmes entrepreneures africaines. Marché, positionnement, différenciation.',
    icon: '🎯',
    topics: ['Analyse de marché', 'Positionnement unique', 'Stratégie commerciale'],
  },
  {
    day: 3,
    title: 'Approvisionnement intelligent',
    description:
      'Trouvez les meilleurs fournisseurs, négociez les meilleures conditions et gérez vos stocks efficacement sans capital de départ.',
    icon: '🤝',
    topics: ['Trouver des fournisseurs', 'Négociation', 'Gestion des stocks'],
  },
  {
    day: 4,
    title: 'Structure pour la croissance',
    description:
      'Mettez en place les outils et systèmes qui vous permettront de grandir tout en préservant votre équilibre famille-business.',
    icon: '📈',
    topics: ['Outils digitaux', 'Automatisation', 'Équilibre vie pro/perso'],
  },
  {
    day: 5,
    title: 'Lancement et célébration',
    description:
      'Lancez officiellement votre business avec un plan d\'action concret. Fêtez votre transformation avec notre communauté.',
    icon: '🚀',
    topics: ['Plan de lancement', 'Marketing de démarrage', 'Plan 90 jours'],
  },
] as const;

/* ── FAQ ──────────────────────────────────────────────────────── */
export const FAQ_ITEMS = [
  {
    question: 'Comment se déroule la formation ?',
    answer:
      'La formation se déroule entièrement en ligne sur 5 jours consécutifs. Chaque jour, vous accédez à des modules vidéo, participez à des sessions en direct avec votre formateur, et rejoignez la communauté pour partager vos avancées. Les replays sont disponibles pour les formules Accéléré et supérieures.',
  },
  {
    question: 'Ai-je besoin d\'un capital de départ ?',
    answer:
      'Non ! Notre formation est spécifiquement conçue pour vous aider à démarrer votre business sans capital de départ. Nous vous enseignons des stratégies adaptées au contexte africain et diaspora qui ne nécessitent pas d\'investissement initial important.',
  },
  {
    question: 'Quels sont les moyens de paiement acceptés ?',
    answer:
      'Nous acceptons Wave, Orange Money, Carte bancaire (Visa/Mastercard), et virements bancaires. Des facilités de paiement en 2 ou 3 fois peuvent être arrangées. Contactez-nous sur WhatsApp pour en discuter.',
  },
  {
    question: 'Puis-je suivre la formation depuis n\'importe quel pays ?',
    answer:
      'Absolument ! La formation est conçue pour les femmes en Afrique, en Europe et en Amérique. Vous pouvez y participer depuis n\'importe quel pays avec une connexion internet. Nos horaires sont indiqués en heure de Dakar, Paris et New York pour faciliter la participation.',
  },
  {
    question: 'Y a-t-il un accompagnement après la formation ?',
    answer:
      'Oui ! Vous rejoignez notre communauté privée de femmes entrepreneures pour les formules Standard et supérieures. Les formules avec "Suivi" incluent des sessions de coaching individuel. La formule PRO offre 6 mois de coaching mensuel et un accès à vie à la communauté VIP.',
  },
  {
    question: 'Puis-je accéder aux modules si je rate une session en direct ?',
    answer:
      'Tout à fait. Toutes les sessions en direct sont enregistrées et disponibles en replay dans votre espace membre. Pour les formules Accéléré et supérieures, les replays sont accessibles pendant 12 mois. La formule PRO offre un accès à vie.',
  },
  {
    question: 'Quelle est la politique de remboursement ?',
    answer:
      'Nous proposons une garantie de satisfaction de 7 jours. Si, après avoir suivi les 2 premiers jours de formation, vous n\'êtes pas satisfaite, nous vous remboursons intégralement, sans questions. Votre réussite est notre priorité.',
  },
] as const;

/* ── MÉTHODES DE PAIEMENT ─────────────────────────────────────── */
export const PAYMENT_METHODS = [
  { id: 'wave', label: 'Wave', icon: '💙' },
  { id: 'orange-money', label: 'Orange Money', icon: '🟠' },
  { id: 'card', label: 'Carte bancaire', icon: '💳' },
] as const;

/* ── NAVIGATION ───────────────────────────────────────────────── */
export const NAV_LINKS = [
  { label: 'À propos', href: '#about' },
  { label: 'Formation', href: '#programme' },
  { label: 'Témoignages', href: '#temoignages' },
  { label: 'Tarifs', href: '#tarifs' },
] as const;

export const LEGAL_LINKS = [
  { label: 'Mentions légales', href: '/mentions-legales' },
  { label: 'CGV', href: '/cgv' },
  { label: 'Confidentialité', href: '/confidentialite' },
] as const;

/* ── ANIMATIONS ───────────────────────────────────────────────── */
export const ANIMATION_DURATION = {
  fast: 0.15,
  normal: 0.3,
  slow: 0.5,
} as const;

export const STAGGER_DELAY = 0.1;
