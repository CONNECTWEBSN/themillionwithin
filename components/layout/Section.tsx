import * as React from 'react';
import { cn } from '@/lib/utils';
import Container from './Container';
import type { ContainerSize } from './Container';

type SectionBackground =
  | 'white' | 'warm' | 'tinted' | 'brand' | 'dark' | 'darker'
  | 'gradient-hero' | 'gradient-cta' | 'none';

type SectionSpacing = 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'hero';

interface SectionProps extends React.ComponentPropsWithoutRef<'section'> {
  background?: SectionBackground;
  spacing?: SectionSpacing;
  containerSize?: ContainerSize;
  noContainer?: boolean;
  grain?: boolean;
  id?: string;
}

const BACKGROUNDS: Record<SectionBackground, string> = {
  white: 'bg-white',
  warm: 'bg-[#FDFCFB]',
  tinted: 'bg-[#F8F5F2]',
  brand: 'bg-[#FFF4E8]',
  dark: 'bg-[#261E16]',
  darker: 'bg-[#130E09]',
  'gradient-hero': 'bg-[radial-gradient(ellipse_at_70%_50%,#FFF4E8_0%,#FDFCFB_55%,#F8F5F2_100%)]',
  'gradient-cta': 'bg-[linear-gradient(135deg,#261E16_0%,#3D3128_50%,#5C2400_100%)]',
  none: '',
};

const SPACINGS: Record<SectionSpacing, string> = {
  none: '',
  sm: 'py-12 md:py-16',
  md: 'py-16 md:py-20 lg:py-24',
  lg: 'py-16 md:py-24 lg:py-28',
  xl: 'py-20 md:py-32 lg:py-36',
  hero: 'py-24 md:py-40 lg:py-48',
};

const Section = React.forwardRef<HTMLElement, SectionProps>(
  function Section(
    {
      background = 'white',
      spacing = 'md',
      containerSize = 'full',
      noContainer = false,
      grain = false,
      id,
      className,
      children,
      ...props
    },
    ref
  ) {
    const isDark = background === 'dark' || background === 'darker' || background === 'gradient-cta';
    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          'relative w-full',
          BACKGROUNDS[background],
          SPACINGS[spacing],
          grain && isDark && 'bg-grain',
          isDark && 'text-white',
          className,
        )}
        {...props}
      >
        {noContainer ? children : <Container size={containerSize}>{children}</Container>}
      </section>
    );
  }
);

Section.displayName = 'Section';
export { Section };
export default Section;
