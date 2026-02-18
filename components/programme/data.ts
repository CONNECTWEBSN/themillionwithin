import { Users, Lightbulb, ShoppingBag, Settings2, Rocket } from 'lucide-react';
import type { ProgrammeStep } from './types';

export const PROGRAMME_STEPS: ProgrammeStep[] = [
  {
    number: '01',
    day: 1,
    icon: Users,
    title: 'Développement Personnel',
    tagline: 'Posez vos fondations',
    description:
      'Construisez le mindset entrepreneurial qui vous portera. Définissez votre vision, votre mission et vos objectifs concrets.',
    topics: ['Mindset entrepreneurial', 'Vision et mission', 'Gestion du doute'],
    outcome: 'Vous terminez la journée avec une vision claire de votre projet.',
  },
  {
    number: '02',
    day: 2,
    icon: Lightbulb,
    title: 'Le Produit',
    tagline: 'Trouvez votre offre',
    description:
      'Analysez votre marché et positionnez votre offre unique. Transformez vos idées en stratégies gagnantes.',
    topics: ['Analyse de marché', 'Positionnement unique', 'Pricing strategy'],
    outcome: 'Vous avez défini votre produit/service et votre clientèle cible.',
  },
  {
    number: '03',
    day: 3,
    icon: ShoppingBag,
    title: 'La Vente',
    tagline: "Maîtrisez l'approvisionnement",
    description:
      'Fournisseurs, négociation, gestion des stocks — même sans capital de départ.',
    topics: ['Trouver des fournisseurs', 'Techniques de négociation', 'Stock sans capital'],
    outcome: "Vous avez votre liste de fournisseurs et votre plan d'approvisionnement.",
  },
  {
    number: '04',
    day: 4,
    icon: Settings2,
    title: 'Le Système',
    tagline: 'Structurez pour durer',
    description:
      'Mettez en place les outils et systèmes pour une croissance durable tout en préservant votre équilibre.',
    topics: ['Outils digitaux', 'Automatisation', 'Équilibre vie-business'],
    outcome: 'Votre business est structuré et prêt à tourner sans vous épuiser.',
  },
  {
    number: '05',
    day: 5,
    icon: Rocket,
    title: 'Le Lancement',
    tagline: "Passez à l'action",
    description:
      "Lancez votre business avec un plan d'action concret sur 90 jours. Célébrez avec la communauté.",
    topics: ['Plan de lancement', 'Plan 90 jours', "Communauté d'entraide"],
    outcome: 'Votre business est lancé. Vous avez un plan sur 3 mois.',
  },
];
