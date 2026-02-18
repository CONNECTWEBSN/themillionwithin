import Link from 'next/link';
import { SITE } from '@/lib/constants';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-50 px-5">
      <h1 className="font-heading text-4xl font-extrabold text-neutral-900 mb-2">
        404
      </h1>
      <p className="text-neutral-600 mb-8 text-center max-w-md">
        Cette page n&apos;existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center h-11 px-6 rounded-xl font-semibold bg-primary-500 text-white hover:bg-primary-600 transition-colors"
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
