/**
 * components/index.ts
 * Barrel racine — Point d'entrée unique pour tous les composants
 *
 * Usage :
 *   import { Button, Header, HeroSection, SectionTitle } from '@/components'
 *
 * Note : Pour les gros fichiers, préférer les imports par sous-dossier
 * pour optimiser le tree-shaking :
 *   import { Button } from '@/components/ui'
 */

// UI Atomiques
export * from './ui';

// Layout
export * from './layout';

// Sections Homepage
export * from './sections';

// Composants partagés
export * from './shared';

// Providers
export * from './providers';
