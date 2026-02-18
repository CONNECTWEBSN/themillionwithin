'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import type { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  /** Variante d'animation: fadeUp (défaut), fadeIn, fadeLeft, fadeRight */
  variant?: 'fadeUp' | 'fadeIn' | 'fadeLeft' | 'fadeRight';
  /** Délai avant le début de l'animation (secondes) */
  delay?: number;
  /** Pourcentage de visibilité pour déclencher (0-1), défaut 0.15 */
  amount?: number;
  /** Une fois animé, garder l'état (évite re-animer au scroll) */
  once?: boolean;
  className?: string;
}

const variants = {
  fadeUp: {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  fadeLeft: {
    initial: { opacity: 0, x: -28 },
    animate: { opacity: 1, x: 0 },
  },
  fadeRight: {
    initial: { opacity: 0, x: 28 },
    animate: { opacity: 1, x: 0 },
  },
};

export function ScrollReveal({
  children,
  variant = 'fadeUp',
  delay = 0,
  amount = 0.15,
  once = true,
  className,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount, once });
  const v = variants[variant];

  return (
    <motion.div
      ref={ref}
      initial={v.initial}
      animate={isInView ? v.animate : v.initial}
      transition={{
        duration: 0.55,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
