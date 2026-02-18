import type { Metadata, Viewport } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

/* ── FONTS SETUP ─────────────────────────────────────────────── */
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  preload: true,
});

/* ── METADATA GLOBALE ────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL('https://www.themillionwithin.com'),
  title: {
    default: 'The Million Within Academy | Formation Entrepreneuriat Féminin',
    template: '%s | The Million Within Academy',
  },
  description:
    'Bâtissez votre entreprise prospère sans renoncer à votre famille. Formation en ligne de 5 jours pour femmes entrepreneures. Sans capital de départ, depuis chez vous.',
  keywords: [
    'formation entrepreneuriat',
    'femmes entrepreneures',
    'business en ligne',
    'formation Afrique',
    'entreprendre depuis la maison',
    'The Million Within',
    'formation féminine',
  ],
  authors: [{ name: 'The Million Within Academy' }],
  creator: 'The Million Within Academy',
  publisher: 'The Million Within Academy',
  openGraph: {
    title: 'The Million Within Academy',
    description: 'Bâtissez votre entreprise sans renoncer à votre famille',
    url: 'https://www.themillionwithin.com',
    siteName: 'The Million Within Academy',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Million Within Academy — Formation Entrepreneuriat Féminin',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Million Within Academy',
    description: 'Bâtissez votre entreprise sans renoncer à votre famille',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://www.themillionwithin.com',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#F97316',
};

/* ── ROOT LAYOUT ─────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-white font-body antialiased">
        {children}
      </body>
    </html>
  );
}
