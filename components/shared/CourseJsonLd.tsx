import { SITE } from '@/lib/constants';

/**
 * Schema.org Course — Structured Data pour la formation (SEO)
 * Architecture §6.5
 */
export function CourseJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'The Million Within - Master Accéléré',
    description:
      'Formation de 5 jours pour créer votre entreprise depuis chez vous. Sans capital de départ. Pour femmes entrepreneures en Afrique, Europe et Amérique.',
    provider: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
    },
    offers: {
      '@type': 'Offer',
      price: '185000',
      priceCurrency: 'XOF',
      availability: 'https://schema.org/InStock',
      url: `${SITE.url}/inscription`,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      bestRating: '5',
      reviewCount: '496',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
