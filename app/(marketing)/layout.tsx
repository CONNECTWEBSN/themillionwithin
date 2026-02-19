'use client';

import { TopBar } from '@/components/layout/TopBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { TopBarProvider, useTopBar } from '@/contexts/TopBarContext';
import { cn } from '@/lib/utils';

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { visible } = useTopBar();

  return (
    <>
      {/* Header fixe : TopBar + Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <TopBar />
        <Navbar className="shadow-[0_1px_3px_rgba(0,0,0,0.08)]" />
      </div>
      {/* Spacer pour compenser la hauteur du header fixe */}
      {/* TopBar: ~36px mobile, ~36px desktop | Navbar: 56px mobile, 64px sm, 88px lg */}
      <div
        className={cn(
          'transition-all duration-300',
          visible
            ? 'h-[92px] sm:h-[100px] lg:h-[124px]' // Avec TopBar
            : 'h-[56px] sm:h-[64px] lg:h-[88px]', // Sans TopBar
        )}
      />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TopBarProvider>
      <LayoutContent>{children}</LayoutContent>
    </TopBarProvider>
  );
}
