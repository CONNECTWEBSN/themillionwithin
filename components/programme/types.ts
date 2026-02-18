import type { LucideIcon } from 'lucide-react';

export interface ProgrammeStep {
  number: string;
  day: number;
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  topics: readonly string[];
  outcome: string;
}
