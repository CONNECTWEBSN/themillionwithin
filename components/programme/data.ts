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
      'Posez les Fondations Solides de Votre Succès.',
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
      'Transformez Vos Idées en Stratégies Gagnantes.',
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
      "Maîtrisez l'Art de l'Approvisionnement Intelligent.",
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
      'Structurez Votre Entreprise pour une Croissance Durable.',
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
      'Célébrez Votre Succès et Envolez-Vous !',
    topics: ['Plan de lancement', 'Plan 90 jours', "Communauté d'entraide"],
    outcome: 'Votre business est lancé. Vous avez un plan sur 3 mois.',
  },
];
