import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number, locale = 'fr-FR'): string {
  return new Intl.NumberFormat(locale).format(num);
}

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

export function convertCurrency(
  amountFCFA: number,
  to: 'EUR' | 'USD'
): number {
  const rates = { EUR: 0.00152, USD: 0.00165 };
  return Math.round(amountFCFA * rates[to]);
}

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

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim()}...`;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
