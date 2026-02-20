import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { SITE } from '@/lib/constants';

export function CTAFinalSection() {
  return (
    <Section background="gradient-cta" spacing="xl" grain>
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
          Prête à transformer votre vie ?
        </h2>
        <p className="text-neutral-300 mb-8">
          Rejoignez des centaines de femmes qui ont lancé leur business. Sans capital de départ, depuis chez vous.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/inscription" variant="cta" size="md">
            Commencer maintenant
          </Button>
          <Button
            href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, '')}`}
            variant="outline-dark"
            size="md"
            external
          >
            Nous contacter sur WhatsApp
          </Button>
        </div>
      </div>
    </Section>
  );
}
