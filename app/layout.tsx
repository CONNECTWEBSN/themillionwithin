import type { Metadata, Viewport } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600'],
  variable: '--font-body',
  preload: true,
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-heading',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.themillionwithin.com'),
  title: {
    default: 'The Million Within Academy | Formation Entrepreneuriat Féminin',
    template: '%s | The Million Within Academy',
  },
  description:
    'Bâtissez votre entreprise prospère sans renoncer à votre famille. Formation en ligne / en présentiel de 5 jours pour femmes entrepreneures. Sans capital de départ, depuis chez vous.',
  keywords: [
    'formation entrepreneuriat',
    'femmes entrepreneures',
    'business en ligne / en présentiel',
    'formation Afrique',
    'entreprendre depuis la maison',
    'The Million Within',
  ],
  openGraph: {
    title: 'The Million Within Academy',
    description: 'Bâtissez votre entreprise sans renoncer à votre famille',
    url: 'https://www.themillionwithin.com',
    siteName: 'The Million Within Academy',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'The Million Within Academy' }],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Million Within Academy',
    description: 'Bâtissez votre entreprise sans renoncer à votre famille',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/images/logo_themillionwithin.png', type: 'image/png' },
    ],
    apple: '/images/logo_themillionwithin.png',
  },
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F97316',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${inter.variable} ${jakarta.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-white font-body antialiased">
        {children}
      </body>
    </html>
  );
}
