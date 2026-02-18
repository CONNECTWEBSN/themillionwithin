'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle2, Shield, HelpCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { GlassCard } from '@/components/ui/GlassCard';
import { HeroMinimal } from '@/components/sections/HeroMinimal';
import { FloatingCTA } from '@/components/shared/FloatingCTA';
import { PRICING_PLANS, PAYMENT_METHODS, FAQ_ITEMS, SITE, NEXT_SESSION } from '@/lib/constants';

type Currency = 'FCFA' | 'EUR' | 'USD';

const CURRENCY_SYMBOLS: Record<Currency, string> = {
  FCFA: 'FCFA',
  EUR: '€',
  USD: '$',
};

const COMPARISON_FEATURES = [
  { label: 'Accès aux modules vidéo', standard: true, accelere: true, suivi: true, pro: true },
  { label: 'Supports téléchargeables', standard: true, accelere: true, suivi: true, pro: true },
  { label: 'Communauté privée', standard: true, accelere: true, suivi: true, pro: true },
  { label: 'Formation en direct 5 jours', standard: false, accelere: true, suivi: false, pro: true },
  { label: 'Q&A quotidien', standard: false, accelere: true, suivi: false, pro: true },
  { label: 'Sessions de coaching individuel', standard: false, accelere: false, suivi: '2 sessions', pro: '6 mois' },
  { label: 'Certificat de complétion', standard: false, accelere: true, suivi: true, pro: 'Premium' },
  { label: 'Accès aux replays', standard: '6 mois', accelere: '12 mois', suivi: '12 mois', pro: 'À vie' },
  { label: 'Revue business plan perso.', standard: false, accelere: false, suivi: false, pro: true },
  { label: 'Réseau d\'affaires exclusif', standard: false, accelere: false, suivi: false, pro: true },
  { label: 'Communauté VIP', standard: false, accelere: false, suivi: false, pro: true },
];

const FAQ_PAYMENT = [
  { q: 'Puis-je payer en plusieurs fois ?', a: 'Oui ! Nous proposons le paiement en 2 ou 3 fois sans frais pour toutes les formules. Contactez-nous sur WhatsApp pour en bénéficier.' },
  { q: 'Quels moyens de paiement acceptez-vous ?', a: 'Wave, Orange Money, Free Money et carte bancaire (Visa/Mastercard). Tous les paiements sont 100% sécurisés.' },
  { q: 'La garantie est-elle vraiment honorée ?', a: 'Absolument. Si les 2 premiers jours ne vous convainquent pas, nous vous remboursons intégralement dans les 7 jours, sans question.' },
  { q: 'Mon paiement est-il sécurisé ?', a: 'Oui. Nous utilisons des passerelles de paiement certifiées SSL. Vos données bancaires ne sont jamais stockées sur nos serveurs.' },
];

function FeatureValue({ value }: { value: boolean | string }) {
  if (value === false) {
    return <span className="text-neutral-300 text-lg">—</span>;
  }
  if (value === true) {
    return <CheckCircle2 className="w-5 h-5 text-secondary-500 mx-auto" aria-label="Inclus" />;
  }
  return <span className="text-sm font-semibold text-primary-600">{value}</span>;
}

export default function TarifsPage() {
  const [currency, setCurrency] = useState<Currency>('FCFA');
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const formatPrice = (plan: (typeof PRICING_PLANS)[0]) => {
    const val = plan.price[currency];
    if (currency === 'FCFA') {
      return `${val.toLocaleString('fr-FR')} FCFA`;
    }
    return `${CURRENCY_SYMBOLS[currency]}${val}`;
  };

  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────────── */}
      <HeroMinimal
        label="Formules & Tarifs"
        title="Investissez dans votre"
        titleHighlight="avenir"
        subtitle={`Choisissez la formule qui correspond à vos besoins et à votre budget. Prochaine session : ${NEXT_SESSION.label}. Places limitées.`}
        breadcrumbs={[{ label: 'Accueil', href: '/' }, { label: 'Tarifs' }]}
        size="md"
      />

      {/* ─── TOGGLE DEVISE ─────────────────────────────────────── */}
      <section className="py-8 bg-white border-b border-neutral-100 sticky top-0 z-50 shadow-sm" aria-label="Choisir la devise">
        <div className="container mx-auto px-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm font-medium text-neutral-600">Afficher les prix en :</p>
            <div className="flex gap-1 p-1 bg-neutral-100 rounded-xl" role="group" aria-label="Sélection de devise">
              {(['FCFA', 'EUR', 'USD'] as Currency[]).map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCurrency(c)}
                  className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    currency === c
                      ? 'bg-white text-neutral-900 shadow-sm'
                      : 'text-neutral-500 hover:text-neutral-700'
                  }`}
                  aria-pressed={currency === c}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-500">
              <Shield className="w-4 h-4 text-secondary-500" aria-hidden />
              Garantie 7 jours satisfaite ou remboursée
            </div>
          </div>
        </div>
      </section>

      {/* ─── CARTES TARIFS ─────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-neutral-50" aria-labelledby="pricing-title">
        <div className="container mx-auto px-5">
          <div className="text-center mb-12">
            <h2 id="pricing-title" className="text-h1 text-neutral-900">
              Choisissez votre{' '}
              <span className="text-primary-500">formule</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {PRICING_PLANS.map((plan) => (
              <article
                key={plan.id}
                className={`relative flex flex-col rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                  plan.featured
                    ? 'bg-primary-500 shadow-brand-xl scale-[1.02] z-10'
                    : 'bg-white border border-neutral-200 shadow-sm hover:shadow-xl'
                }`}
                aria-label={`Formule ${plan.title}`}
              >
                {/* Badge popular */}
                {plan.badge && (
                  <div className="absolute -top-px left-1/2 -translate-x-1/2">
                    <div className="bg-gold-400 text-neutral-900 text-xs font-bold px-4 py-1.5 rounded-b-xl shadow-gold-sm flex items-center gap-1.5">
                      <Star className="w-3 h-3 fill-current" aria-hidden />
                      {plan.badge}
                    </div>
                  </div>
                )}

                <div className="p-6 pt-8 flex flex-col flex-1">
                  {/* En-tête */}
                  <div className="mb-6">
                    <h3 className={`font-heading font-bold text-xl mb-1 ${plan.featured ? 'text-white' : 'text-neutral-900'}`}>
                      {plan.title}
                    </h3>
                    <p className={`text-sm ${plan.featured ? 'text-white/70' : 'text-neutral-500'}`}>
                      {plan.subtitle}
                    </p>
                  </div>

                  {/* Prix */}
                  <div className="mb-6 pb-6 border-b border-current/10">
                    <div className={`font-heading font-black text-3xl ${plan.featured ? 'text-gold-300' : 'text-neutral-900'}`}>
                      {formatPrice(plan)}
                    </div>
                    {currency !== 'FCFA' && (
                      <p className={`text-xs mt-1 ${plan.featured ? 'text-white/60' : 'text-neutral-400'}`}>
                        ≈ {plan.price.FCFA.toLocaleString('fr-FR')} FCFA
                      </p>
                    )}
                  </div>

                  {/* Fonctionnalités */}
                  <ul className="space-y-3 flex-1 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className={`flex items-start gap-2.5 text-sm ${plan.featured ? 'text-white/90' : 'text-neutral-600'}`}>
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${plan.featured ? 'text-gold-300' : 'text-secondary-500'}`} aria-hidden />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    href={plan.href}
                    variant={plan.featured ? 'gold' : 'primary'}
                    size="md"
                    fullWidth
                    icon={<ArrowRight className="w-4 h-4" />}
                    iconPosition="right"
                  >
                    {plan.cta}
                  </Button>
                </div>
              </article>
            ))}
          </div>

          {/* Modes de paiement */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm text-neutral-600">
            <span className="font-medium">Paiement accepté :</span>
            {PAYMENT_METHODS.map((m) => (
              <span key={m.id} className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-xl border border-neutral-200 font-medium">
                <span aria-hidden>{m.icon}</span>
                {m.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TABLEAU COMPARATIF ────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white overflow-x-auto" aria-labelledby="compare-title">
        <div className="container mx-auto px-5">
          <div className="text-center mb-12">
            <Badge variant="brand" className="mb-4">Comparatif</Badge>
            <h2 id="compare-title" className="text-h1 text-neutral-900">
              Comparez les{' '}
              <span className="text-primary-500">formules en détail</span>
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-neutral-200 shadow-sm">
            <table className="w-full min-w-[700px]" aria-label="Comparatif des formules">
              <thead>
                <tr className="bg-neutral-50 border-b border-neutral-200">
                  <th className="text-left py-4 px-6 font-heading font-bold text-neutral-900 text-sm">Fonctionnalité</th>
                  {PRICING_PLANS.map((plan) => (
                    <th
                      key={plan.id}
                      className={`py-4 px-4 text-center font-heading font-bold text-sm ${plan.featured ? 'text-primary-600' : 'text-neutral-900'}`}
                    >
                      {plan.title}
                      {plan.featured && (
                        <span className="block text-xs text-primary-500 font-normal mt-0.5">⭐ Populaire</span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_FEATURES.map((feature, i) => (
                  <tr key={i} className={`border-b border-neutral-100 ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50/50'}`}>
                    <td className="py-4 px-6 text-sm text-neutral-700 font-medium">{feature.label}</td>
                    <td className="py-4 px-4 text-center"><FeatureValue value={feature.standard} /></td>
                    <td className="py-4 px-4 text-center bg-primary-50/30"><FeatureValue value={feature.accelere} /></td>
                    <td className="py-4 px-4 text-center"><FeatureValue value={feature.suivi} /></td>
                    <td className="py-4 px-4 text-center"><FeatureValue value={feature.pro} /></td>
                  </tr>
                ))}
                {/* Ligne CTA */}
                <tr className="bg-neutral-50">
                  <td className="py-4 px-6 text-sm font-bold text-neutral-900">Prix</td>
                  {PRICING_PLANS.map((plan) => (
                    <td key={plan.id} className={`py-4 px-4 text-center ${plan.featured ? 'bg-primary-50/30' : ''}`}>
                      <div className={`font-heading font-black text-base ${plan.featured ? 'text-primary-600' : 'text-neutral-900'}`}>
                        {formatPrice(plan)}
                      </div>
                      <Button href={plan.href} variant={plan.featured ? 'primary' : 'outline'} size="sm" className="mt-2">
                        Choisir
                      </Button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── GARANTIE ──────────────────────────────────────────── */}
      <section className="py-16 bg-primary-50 border-y border-primary-100" aria-label="Garantie">
        <div className="container mx-auto px-5">
          <GlassCard variant="brand" padding="lg" className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-secondary-500/20 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-secondary-600" aria-hidden />
            </div>
            <h2 className="text-h2 text-neutral-900 mb-3">
              Garantie satisfaite ou remboursée
            </h2>
            <p className="text-neutral-600 leading-relaxed max-w-xl mx-auto">
              Nous sommes tellement confiants dans notre formation que si les <strong>2 premiers jours</strong> ne vous convainquent pas,
              vous avez <strong>7 jours</strong> pour demander un remboursement intégral. Sans justification. Sans question.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* ─── FAQ PAIEMENT ──────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="faq-payment-title">
        <div className="container mx-auto px-5 max-w-3xl">
          <div className="text-center mb-12">
            <Badge variant="brand" className="mb-4">Questions paiement</Badge>
            <h2 id="faq-payment-title" className="text-h2 text-neutral-900">
              Tout sur le{' '}
              <span className="text-primary-500">paiement</span>
            </h2>
          </div>

          <div className="space-y-3 mb-10">
            {FAQ_PAYMENT.map((item) => {
              const isOpen = openFaq === item.q;
              return (
                <div key={item.q} className="rounded-2xl border border-neutral-200 bg-white overflow-hidden">
                  <button
                    type="button"
                    className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left font-semibold text-neutral-900 text-sm hover:bg-neutral-50 transition-colors"
                    onClick={() => setOpenFaq(isOpen ? null : item.q)}
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-4 h-4 text-primary-400 shrink-0" aria-hidden />
                      {item.q}
                    </span>
                    <span className={`text-primary-500 font-bold text-lg transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                      +
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48' : 'max-h-0'}`}>
                    <p className="px-6 pb-4 text-neutral-600 text-sm leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <p className="text-neutral-600 text-sm mb-4">Vous avez d&apos;autres questions ?</p>
            <a
              href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, '')}?text=Bonjour, j'ai une question sur les tarifs de la formation.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors"
            >
              Poser ma question sur WhatsApp
            </a>
          </div>
        </div>
      </section>

      <FloatingCTA text="Choisir ma formule" />
    </>
  );
}
