import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind CSS classes safely without conflicts.
 * Combines clsx (conditional classes) with tailwind-merge (deduplication).
 *
 * @example
 * cn('px-4 py-2', isLarge && 'px-8', 'px-6')
 * // → 'py-2 px-6' (px-6 wins, isLarge px-8 would override px-4)
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Formate un nombre avec séparateurs de milliers.
 * @example formatNumber(185000) → "185 000"
 */
export function formatNumber(num: number, locale = 'fr-FR'): string {
  return new Intl.NumberFormat(locale).format(num);
}

/**
 * Formate un prix dans la devise indiquée.
 * @example formatPrice(185000, 'FCFA') → "185 000 FCFA"
 * @example formatPrice(285, 'EUR') → "285 €"
 */
export function formatPrice(
  amount: number,
  currency: 'FCFA' | 'EUR' | 'USD'
): string {
  const formatted = formatNumber(amount);
  const symbols: Record<'FCFA' | 'EUR' | 'USD', string> = {
    FCFA: 'FCFA',
    EUR: '€',
    USD: '$',
  };
  if (currency === 'EUR') return `${formatted} ${symbols[currency]}`;
  if (currency === 'USD') return `${symbols[currency]}${formatted}`;
  return `${formatted} ${symbols[currency]}`;
}

/**
 * Convertit un montant FCFA en EUR ou USD.
 * Taux de change approximatifs (à mettre à jour).
 */
export function convertCurrency(
  amountFCFA: number,
  to: 'EUR' | 'USD'
): number {
  const rates = {
    EUR: 0.00152,  // 1 FCFA ≈ 0.00152 EUR
    USD: 0.00165,  // 1 FCFA ≈ 0.00165 USD
  };
  return Math.round(amountFCFA * rates[to]);
}

/**
 * Calcule le temps restant avant une date cible.
 */
export function getTimeRemaining(targetDate: Date): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
} {
  const diff = targetDate.getTime() - Date.now();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
    expired: false,
  };
}

/**
 * Tronque un texte à la longueur donnée.
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim()}...`;
}

/**
 * Génère un slug URL depuis un texte.
 * @example slugify("Votre transformation en 5 jours") → "votre-transformation-en-5-jours"
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')  // Supprime les accents
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

/**
 * Vérifie si un email est valide.
 */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Délai asynchrone.
 * @example await sleep(1000) // attend 1 seconde
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Retourne un élément aléatoire d'un tableau.
 */
export function randomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}
