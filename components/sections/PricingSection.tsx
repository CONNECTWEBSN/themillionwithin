import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card, CardHeader, CardTitle, CardDescription, CardBody, CardFooter } from '@/components/ui/Card';
import { PRICING_PLANS } from '@/lib/constants';
import { formatPrice } from '@/lib/utils';

export function PricingSection() {
  return (
    <Section background="white" spacing="lg" id="tarifs">
      <div className="text-center mb-12">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-2">
          Choisissez votre formule
        </h2>
        <p className="text-neutral-600 max-w-xl mx-auto">Paiement sécurisé • Wave • Orange Money • Carte bancaire</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PRICING_PLANS.map((plan) => (
          <Card
            key={plan.id}
            variant={plan.featured ? 'featured' : 'default'}
            hoverable
            className={plan.featured ? 'scale-105 z-10' : ''}
          >
            <CardHeader>
              {plan.badge && (
                <Badge variant={plan.featured ? 'popular' : 'gold'} className="mb-2">
                  {plan.badge}
                </Badge>
              )}
              <CardTitle className={plan.featured ? 'text-white' : ''}>{plan.title}</CardTitle>
              <CardDescription className={plan.featured ? 'text-white/80' : ''}>{plan.subtitle}</CardDescription>
            </CardHeader>
            <CardBody>
              <p className="font-heading text-2xl font-bold text-neutral-900">
                {formatPrice(plan.price.FCFA, 'FCFA')}
              </p>
              <ul className="mt-4 space-y-2">
                {plan.features.slice(0, 4).map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className="text-primary-500 shrink-0">✓</span>
                    <span className={plan.featured ? 'text-white/90' : 'text-neutral-600'}>{f}</span>
                  </li>
                ))}
              </ul>
            </CardBody>
            <CardFooter className={plan.featured ? 'border-white/20' : ''}>
              <Button
                href={plan.href}
                variant={plan.featured ? 'gold' : 'primary'}
                size="md"
                fullWidth
              >
                {plan.cta}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
