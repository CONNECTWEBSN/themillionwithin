import { TopBar } from '@/components/layout/TopBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Header fixe : TopBar + Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <TopBar />
        <Navbar className="shadow-[0_1px_3px_rgba(0,0,0,0.08)]" />
      </div>
      {/* Spacer pour compenser la hauteur du header fixe (TopBar 36px + Navbar 88px = 124px) */}
      <div className="h-[124px]" />
      <main>{children}</main>
      <Footer />
    </>
  );
}
