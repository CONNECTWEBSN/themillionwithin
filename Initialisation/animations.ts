/**
 * ANIMATIONS — The Million Within Academy
 * Framer Motion variants réutilisables dans toute l'application.
 */

/* ── FADE IN ──────────────────────────────────────────────────── */
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

export const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

export const fadeInRight = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.4, ease: 'easeOut' },
};

/* ── SCALE ────────────────────────────────────────────────────── */
export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.4, ease: 'easeOut' },
};

export const scaleOnHover = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { type: 'spring', stiffness: 400, damping: 17 },
};

/* ── STAGGER (pour listes/grids) ──────────────────────────────── */
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerContainerFast = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

/* ── SLIDE (pour menus, modals) ───────────────────────────────── */
export const slideInFromRight = {
  initial: { x: '100%', opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: '100%', opacity: 0 },
  transition: { type: 'spring', damping: 25, stiffness: 200 },
};

export const slideInFromBottom = {
  initial: { y: '100%', opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: '100%', opacity: 0 },
  transition: { type: 'spring', damping: 25, stiffness: 200 },
};

/* ── MODAL ────────────────────────────────────────────────────── */
export const modalOverlay = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 },
};

export const modalContent = {
  initial: { opacity: 0, scale: 0.95, y: 10 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: 10 },
  transition: { duration: 0.3, ease: 'easeOut' },
};

/* ── ACCORDION ────────────────────────────────────────────────── */
export const accordionContent = {
  initial: { height: 0, opacity: 0 },
  animate: { height: 'auto', opacity: 1 },
  exit: { height: 0, opacity: 0 },
  transition: { duration: 0.3, ease: 'easeInOut' },
};

/* ── HEADER (transparent → solid on scroll) ───────────────────── */
export const headerVariants = {
  transparent: {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    boxShadow: '0 0 0 0 rgba(0,0,0,0)',
  },
  solid: {
    backgroundColor: 'rgba(255, 255, 255, 0.98)',
    boxShadow: '0 1px 3px 0 rgba(0,0,0,0.1)',
  },
};

/* ── STATS COUNT UP ───────────────────────────────────────────── */
export const countUpVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

/* ── TIMELINE ─────────────────────────────────────────────────── */
export const timelineItem = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

/* ── INFINITE SCROLL (carousel logos) ────────────────────────── */
export const infiniteScroll = {
  animate: {
    x: ['0%', '-50%'],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop' as const,
        duration: 30,
        ease: 'linear',
      },
    },
  },
};

/* ── HELPER — Viewport trigger ───────────────────────────────── */
export const viewportConfig = {
  once: true,       // Animate only once
  margin: '-80px',  // Trigger 80px before element enters viewport
};
