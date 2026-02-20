'use client';

import { useEffect, useRef, useState } from 'react';

interface StatItem {
  value: number;
  label: string;
  suffix?: string;
}

const STATS: StatItem[] = [
  { value: 3, label: 'Total Cours' },
  { value: 496, label: 'Etudiants', suffix: '+' },
  { value: 4, label: 'Instructeurs' },
  { value: 319, label: 'Business Accompagnés', suffix: '+' },
];

function useCountUp(end: number, duration: number = 2000, isVisible: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function: easeOutExpo pour un effet de décélération
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeOutExpo * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return count;
}

function StatCounter({ value, label, suffix = '', isVisible }: StatItem & { isVisible: boolean }) {
  const count = useCountUp(value, 2000, isVisible);

  return (
    <div className="flex flex-col items-center text-center group">
      <p className="font-heading font-black text-2xl md:text-3xl text-primary-500 transition-transform duration-300 group-hover:scale-110">
        {count.toLocaleString('fr-FR')}{suffix}
      </p>
      <p className="text-neutral-500 text-xs md:text-sm font-medium">{label}</p>
    </div>
  );
}

export function AnimatedStats() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div 
      ref={ref}
      className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-6 border-t border-neutral-200 w-full max-w-3xl"
    >
      {STATS.map((stat) => (
        <StatCounter key={stat.label} {...stat} isVisible={isVisible} />
      ))}
    </div>
  );
}
