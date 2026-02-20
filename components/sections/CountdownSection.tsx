'use client';

import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { NEXT_SESSION } from '@/lib/constants';
import { useEffect, useState } from 'react';
import { getTimeRemaining } from '@/lib/utils';

export function CountdownSection() {
  const [mounted, setMounted] = useState(false);
  const [left, setLeft] = useState(getTimeRemaining(NEXT_SESSION.date));

  useEffect(() => {
    setMounted(true);
    const t = setInterval(() => {
      setLeft(getTimeRemaining(NEXT_SESSION.date));
    }, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <Section background="brand" spacing="lg">
      <div className="text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-2">
          Prochaine session dans
        </h2>
        {mounted && (
          <div className="flex justify-center gap-3 md:gap-4 my-8 flex-wrap">
            <div className="countdown-unit">
              <div className="countdown-flip min-w-[4rem] md:min-w-[5rem] h-14 md:h-16 rounded-xl bg-neutral-900 text-white flex items-center justify-center font-heading text-2xl md:text-3xl font-extrabold">
                {String(left.days).padStart(2, '0')}
              </div>
              <span className="countdown-label text-xs font-semibold text-neutral-600 uppercase">Jours</span>
            </div>
            <span className="text-2xl font-bold text-neutral-700 self-end pb-4">:</span>
            <div className="countdown-unit">
              <div className="countdown-flip min-w-[4rem] md:min-w-[5rem] h-14 md:h-16 rounded-xl bg-neutral-900 text-white flex items-center justify-center font-heading text-2xl md:text-3xl font-extrabold">
                {String(left.hours).padStart(2, '0')}
              </div>
              <span className="countdown-label text-xs font-semibold text-neutral-600 uppercase">Heures</span>
            </div>
            <span className="text-2xl font-bold text-neutral-700 self-end pb-4">:</span>
            <div className="countdown-unit">
              <div className="countdown-flip min-w-[4rem] md:min-w-[5rem] h-14 md:h-16 rounded-xl bg-neutral-900 text-white flex items-center justify-center font-heading text-2xl md:text-3xl font-extrabold">
                {String(left.minutes).padStart(2, '0')}
              </div>
              <span className="countdown-label text-xs font-semibold text-neutral-600 uppercase">Min</span>
            </div>
            <span className="text-2xl font-bold text-neutral-700 self-end pb-4">:</span>
            <div className="countdown-unit">
              <div className="countdown-flip min-w-[4rem] md:min-w-[5rem] h-14 md:h-16 rounded-xl bg-neutral-900 text-white flex items-center justify-center font-heading text-2xl md:text-3xl font-extrabold">
                {String(left.seconds).padStart(2, '0')}
              </div>
              <span className="countdown-label text-xs font-semibold text-neutral-600 uppercase">Sec</span>
            </div>
          </div>
        )}
        <p className="text-neutral-700 font-medium mb-6">
          {NEXT_SESSION.label} • {NEXT_SESSION.timezones.dakar} Dakar / {NEXT_SESSION.timezones.paris} Paris / {NEXT_SESSION.timezones.newYork} New York
        </p>
        <Button href="/inscription" variant="cta" size="md">
          Réserver ma place maintenant
        </Button>
      </div>
    </Section>
  );
}
