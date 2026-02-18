'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
  /** Variante visuelle */
  variant?: 'light' | 'dark' | 'brand';
  /** Taille */
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

function getTimeLeft(target: Date): TimeLeft {
  const now = new Date().getTime();
  const distance = target.getTime() - now;

  if (distance <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  };
}

const VARIANT_STYLES = {
  light: {
    box: 'bg-white/80 backdrop-blur-lg border border-neutral-200 shadow-lg',
    number: 'text-neutral-900',
    label: 'text-neutral-500',
    separator: 'text-primary-400',
  },
  dark: {
    box: 'bg-white/10 backdrop-blur-lg border border-white/20',
    number: 'text-white',
    label: 'text-white/60',
    separator: 'text-primary-400',
  },
  brand: {
    box: 'bg-primary-500 shadow-brand-md',
    number: 'text-white',
    label: 'text-white/80',
    separator: 'text-gold-400',
  },
};

const SIZE_STYLES = {
  sm: {
    box: 'w-14 h-14 md:w-16 md:h-16 rounded-xl',
    number: 'text-lg md:text-xl font-heading font-bold tracking-tighter',
    label: 'text-[9px] md:text-[10px] uppercase tracking-wider font-semibold mt-0.5',
    separator: 'text-lg font-bold',
    gap: 'gap-2',
  },
  md: {
    box: 'w-18 h-18 md:w-20 md:h-20 rounded-2xl',
    number: 'text-2xl md:text-3xl font-heading font-bold tracking-tighter',
    label: 'text-[10px] md:text-xs uppercase tracking-wider font-semibold mt-1',
    separator: 'text-2xl font-bold',
    gap: 'gap-3',
  },
  lg: {
    box: 'w-20 h-20 md:w-24 md:h-24 rounded-2xl',
    number: 'text-3xl md:text-4xl font-heading font-bold tracking-tighter',
    label: 'text-xs uppercase tracking-wider font-semibold mt-1',
    separator: 'text-3xl font-bold',
    gap: 'gap-4',
  },
};

const UNITS: { key: keyof TimeLeft; label: string }[] = [
  { key: 'days', label: 'Jours' },
  { key: 'hours', label: 'Heures' },
  { key: 'minutes', label: 'Min' },
  { key: 'seconds', label: 'Sec' },
];

export function CountdownTimer({
  targetDate,
  variant = 'dark',
  size = 'md',
  className,
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft(targetDate));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const v = VARIANT_STYLES[variant];
  const s = SIZE_STYLES[size];

  // Éviter le flash SSR
  if (!mounted) {
    return (
      <div className={cn('flex items-center justify-center', s.gap, className)}>
        {UNITS.map((unit, i) => (
          <div key={unit.key} className="flex items-center gap-2">
            <div className={cn('flex flex-col items-center justify-center', v.box, s.box)}>
              <span className={cn(s.number, v.number, 'tabular-nums')}>--</span>
              <span className={cn(s.label, v.label)}>{unit.label}</span>
            </div>
            {i < UNITS.length - 1 && (
              <span className={cn(s.separator, v.separator)} aria-hidden>:</span>
            )}
          </div>
        ))}
      </div>
    );
  }

  const isExpired = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

  if (isExpired) {
    return (
      <div className={cn('text-center', className)}>
        <p className={cn('font-heading font-bold text-xl', variant === 'dark' ? 'text-gold-400' : 'text-primary-600')}>
          🚀 La session a commencé !
        </p>
      </div>
    );
  }

  return (
    <div
      className={cn('flex items-center justify-center', s.gap, className)}
      role="timer"
      aria-label="Compte à rebours avant la prochaine session"
    >
      {UNITS.map((unit, i) => (
        <div key={unit.key} className="flex items-center gap-2">
          <div className={cn('flex flex-col items-center justify-center', v.box, s.box)}>
            <span className={cn(s.number, v.number, 'tabular-nums')}>
              {String(timeLeft[unit.key]).padStart(2, '0')}
            </span>
            <span className={cn(s.label, v.label)}>{unit.label}</span>
          </div>
          {i < UNITS.length - 1 && (
            <span className={cn(s.separator, v.separator, 'animate-pulse')} aria-hidden>:</span>
          )}
        </div>
      ))}
    </div>
  );
}

export default CountdownTimer;
