import { NextResponse } from 'next/server';
import { NEXT_SESSION } from '@/lib/constants';

/**
 * API Countdown — Retourne le temps restant avant la prochaine session.
 * Utilisable par le client pour un timer dynamique sans décalage.
 */
export async function GET() {
  const now = Date.now();
  const target = NEXT_SESSION.date.getTime();
  const diff = Math.max(0, target - now);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return NextResponse.json({
    days,
    hours,
    minutes,
    seconds,
    expired: diff === 0,
    target: NEXT_SESSION.date.toISOString(),
  });
}
