import * as React from 'react';
import { cn } from '@/lib/utils';

type HeadingLevel = 1 | 2 | 3 | 4;
type HeadingAs = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

interface HeadingProps extends React.ComponentPropsWithoutRef<'h1'> {
  /** Niveau visuel du heading (détermine la taille) */
  level?: HeadingLevel;
  /** Tag HTML à rendre (par défaut = h{level}) */
  as?: HeadingAs;
  /** Appliquer le gradient brand sur le texte */
  gradient?: boolean;
}

/**
 * Échelle typographique unique — source de vérité pour tous les titres.
 *
 * level 1 : Titres de section (h1 visuel)
 * level 2 : Sous-titres de section (h2 visuel)
 * level 3 : Titres de cartes
 * level 4 : Titres inline
 */
const LEVELS: Record<HeadingLevel, string> = {
  1: 'text-3xl lg:text-4xl font-bold leading-snug tracking-tight',
  2: 'text-2xl lg:text-3xl font-bold leading-snug tracking-tight',
  3: 'text-xl font-semibold leading-snug tracking-tight',
  4: 'text-lg font-semibold leading-snug tracking-tight',
};

const DEFAULT_TAG: Record<HeadingLevel, HeadingAs> = {
  1: 'h2',
  2: 'h2',
  3: 'h3',
  4: 'h4',
};

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  function Heading(
    { level = 1, as, gradient = false, className, children, ...props },
    ref,
  ) {
    const Tag = as ?? DEFAULT_TAG[level];

    return (
      <Tag
        ref={ref as React.Ref<HTMLHeadingElement>}
        className={cn(
          'font-heading text-neutral-900',
          LEVELS[level],
          gradient && 'text-gradient-brand',
          className,
        )}
        {...props}
      >
        {children}
      </Tag>
    );
  },
);

Heading.displayName = 'Heading';
export { Heading };
export default Heading;
