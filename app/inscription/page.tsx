import { Suspense } from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { InscriptionForm } from '@/components/sections/inscription/InscriptionForm';

export const metadata: Metadata = {
  title: 'Inscription',
  description:
    'Inscrivez-vous à la formation The Million Within. Rejoignez 496+ femmes entrepreneures qui ont transformé leur vie.',
};

function InscriptionFormFallback() {
  return (
    <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
      <div className="h-96 bg-neutral-100 rounded-2xl animate-pulse" />
      <div className="h-96 bg-neutral-100 rounded-2xl animate-pulse" />
    </div>
  );
}

export default function InscriptionPage() {
  return (
    <>
      <Header variant="minimal" />
      <main className="min-h-screen bg-neutral-50 py-12 md:py-16">
        <div className="container mx-auto px-5">
          <Suspense fallback={<InscriptionFormFallback />}>
            <InscriptionForm />
          </Suspense>
        </div>
      </main>
      <Footer variant="minimal" />
    </>
  );
}
