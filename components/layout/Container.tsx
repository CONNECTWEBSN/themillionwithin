import * as React from 'react';
import { cn } from '@/lib/utils';

export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'prose' | 'screen';

interface ContainerProps extends React.ComponentPropsWithoutRef<'div'> {
  size?: ContainerSize;
  padded?: boolean;
  centered?: boolean;
  as?: React.ElementType;
}

const SIZES: Record<ContainerSize, string> = {
  sm: 'max-w-[640px]',
  md: 'max-w-3xl',
  lg: 'max-w-5xl',
  xl: 'max-w-7xl',
  full: 'max-w-[1320px]',
  prose: 'max-w-prose',
  screen: 'max-w-none',
};

const PADDING = 'px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12';

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  function Container(
    { size = 'full', padded = true, centered = true, as: Tag = 'div', className, children, ...props },
    ref
  ) {
    return (
      <Tag
        ref={ref}
        className={cn('w-full', centered && 'mx-auto', SIZES[size], padded && PADDING, className)}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);

Container.displayName = 'Container';
export default Container;
