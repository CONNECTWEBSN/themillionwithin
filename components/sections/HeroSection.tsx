import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { SITE, STATS } from '@/lib/constants';

export function HeroSection() {
  return (
    <Section background="gradient-hero" spacing="hero" noContainer>
      <div className="container mx-auto px-5 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-16 min-h-hero">
        <div className="max-w-2xl">
          <Badge variant="brand" className="mb-4">Formation en ligne / en présentiel</Badge>
          <h1 className="font-heading text-hero lg:text-hero-lg font-extrabold text-neutral-900 leading-tight mb-4">
            {SITE.tagline}
          </h1>
          <p className="text-lg text-neutral-600 mb-8 max-w-xl">
            Rejoignez des centaines de femmes qui ont lancé leur business sans renoncer à leur famille.
            Formation en 5 jours, sans capital de départ.
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10">
            <Button href="/inscription" variant="cta" size="sm" className="text-xs px-4 py-2 h-auto sm:text-sm sm:px-6 sm:py-2.5 md:text-base md:px-8 md:py-3 lg:text-lg lg:px-8 lg:h-[52px]">
              Réserver ma place
            </Button>
            <Button href="#programme" variant="outline" size="sm" className="text-xs px-4 py-2 h-auto sm:text-sm sm:px-6 sm:py-2.5 md:text-base md:px-8 md:py-3 lg:text-lg lg:px-8 lg:h-[52px]">
              Découvrir le programme
            </Button>
          </div>
          <div className="flex flex-wrap gap-6 text-neutral-600">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex items-center gap-2">
                <span className="font-heading font-bold text-2xl text-primary-600">{stat.value}</span>
                <span className="text-sm font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative lg:max-w-md aspect-square bg-neutral-200 rounded-3xl flex items-center justify-center text-neutral-500">
          Image hero (Mme Sall ou illustration)
        </div>
      </div>
    </Section>
  );
}
