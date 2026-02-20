'use client';

import { useState } from 'react';
import { ArrowRight, HelpCircle, Users2, Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { HeroMinimal } from '@/components/sections/HeroMinimal';
import { FloatingCTA } from '@/components/shared/FloatingCTA';
import { PAYMENT_METHODS, SITE, NEXT_SESSION } from '@/lib/constants';

type Currency = 'FCFA' | 'EUR' | 'USD';

/* ─── PRIX MULTI-DEVISE ─────────────────────────────────────── */
const PRESENTIEL_PRICES = {
  '1 jour': { FCFA: 95_000, EUR: 145, USD: 155 },
  '2 jours': { FCFA: 185_000, EUR: 285, USD: 299 },
  '3 jours': { FCFA: 269_000, EUR: 410, USD: 435 },
  '5 jours': { FCFA: 349_000, EUR: 535, USD: 565 },
};

const ONLINE_PRICE = { FCFA: 185_000, EUR: 285, USD: 299 };

const CURRENCY_FORMAT: Record<Currency, { prefix: string; suffix: string }> = {
  FCFA: { prefix: '', suffix: ' FCFA' },
  EUR: { prefix: '', suffix: '€' },
  USD: { prefix: '', suffix: '$' },
};

function formatPrice(amount: number, currency: Currency) {
  const { prefix, suffix } = CURRENCY_FORMAT[currency];
  return `${prefix}${amount.toLocaleString('fr-FR')}${suffix}`;
}

/* ─── FAQ PAIEMENT ───────────────────────────────────────────── */
const FAQ_PAYMENT = [
  { q: 'Quels moyens de paiement acceptez-vous ?', a: 'Wave, Orange Money, Free Money et carte bancaire (Visa/Mastercard). Tous les paiements sont 100% sécurisés.' },
  { q: 'Mon paiement est-il sécurisé ?', a: 'Oui. Nous utilisons des passerelles de paiement certifiées SSL. Vos données bancaires ne sont jamais stockées sur nos serveurs.' },
  { q: 'Puis-je payer en plusieurs fois ?', a: 'Oui, nous proposons des facilités de paiement. Contacte-nous sur WhatsApp pour en discuter.' },
];

export default function TarifsPage() {
  const [currency, setCurrency] = useState<Currency>('FCFA');
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────────── */}
      <HeroMinimal
        label="Nos Offres"
        title="Investissez dans votre"
        titleHighlight="avenir"
        subtitle={`Choisissez la formule qui correspond à vos besoins. Prochaine session : ${NEXT_SESSION.label}. Places limitées.`}
        breadcrumbs={[{ label: 'Accueil', href: '/' }, { label: 'Nos Offres' }]}
        size="md"
      />

      {/* ─── SÉLECTEUR DE DEVISE + LES 2 OFFRES ──────────────── */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-neutral-50 to-white" aria-labelledby="session-title">
        <div className="container mx-auto px-5">
          {/* Header */}
          <div className="text-center mb-10">
            <Badge variant="brand" className="mb-4">Prochaine Session</Badge>
            <h2 id="session-title" className="text-2xl lg:text-3xl font-bold leading-snug text-neutral-900 mb-2">
              Business Master <span className="text-primary-500">Avril 2026</span>
            </h2>
            <p className="text-lg font-semibold text-neutral-700">Du 6 au 10 Avril</p>
            <p className="text-sm text-red-500 font-medium mt-2">⚠️ Places limitées — Inscris-toi vite !</p>
          </div>

          {/* Sélecteur de devise */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-4 bg-white rounded-2xl shadow-md border border-neutral-200" role="group" aria-label="Sélection de devise">
              <p className="text-sm font-semibold text-neutral-700">Afficher les prix en :</p>
              <div className="flex gap-1.5 p-1 bg-neutral-100 rounded-xl">
                {(['FCFA', 'EUR', 'USD'] as Currency[]).map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCurrency(c)}
                    className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 ${
                      currency === c
                        ? 'bg-primary-500 text-white shadow-md'
                        : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                    }`}
                    aria-pressed={currency === c}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Les deux offres */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* ── Carte En Présentiel ──────────────────────────── */}
            <div className="relative bg-white rounded-3xl p-8 overflow-hidden border-2 border-primary-500 shadow-xl transition-transform duration-300 hover:-translate-y-1">
              <div className="absolute -top-2 -left-2 w-14 h-14 bg-primary-500 rounded-full flex items-center justify-center shadow-lg">
                <Users2 className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-primary-600 mb-6 mt-6">En présentiel</h3>
              
              <ul className="space-y-3 mb-6">
                {Object.entries(PRESENTIEL_PRICES).slice(0, 3).map(([label, prices]) => (
                  <li key={label} className="flex items-center gap-3 text-neutral-700">
                    <span className="w-2 h-2 rounded-full bg-primary-500 shrink-0" />
                    <span>{label} : <strong className="text-neutral-900">{formatPrice(prices[currency], currency)}</strong></span>
                  </li>
                ))}
              </ul>
              
              <div className="border-t border-neutral-200 pt-6">
                <p className="text-sm font-medium text-primary-600 mb-2">5 jours : programme complet</p>
                <p className="text-3xl font-black text-neutral-900">
                  {formatPrice(PRESENTIEL_PRICES['5 jours'][currency], currency)}
                </p>
                <p className="text-sm text-neutral-500">(5 jours)</p>
                {currency !== 'FCFA' && (
                  <p className="text-xs text-neutral-400 mt-1">
                    ≈ {PRESENTIEL_PRICES['5 jours'].FCFA.toLocaleString('fr-FR')} FCFA
                  </p>
                )}
              </div>
              
              <div className="mt-6 flex items-center gap-2 text-sm bg-primary-50 text-primary-700 rounded-xl px-4 py-3 border border-primary-100">
                <span>📍</span>
                <span className="font-medium">Noom Hôtel Dakar</span>
              </div>

              <Button href="/inscription" variant="cta" size="md" fullWidth className="mt-6">
                Réserver ma place
              </Button>
            </div>

            {/* ── Carte En Ligne ───────────────────────────────── */}
            <div className="relative bg-neutral-900 rounded-3xl p-8 overflow-hidden shadow-xl transition-transform duration-300 hover:-translate-y-1">
              <div className="absolute -top-2 -right-2 w-14 h-14 bg-primary-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">💻</span>
              </div>
              
              <h3 className="text-2xl font-black text-white mb-2 mt-6">En ligne</h3>
              <p className="text-neutral-400 text-sm mb-4">Une immersion stratégique pour structurer ton business, où que tu sois.</p>
              
              <div className="mb-5">
                <p className="text-4xl font-black text-primary-400">
                  {formatPrice(ONLINE_PRICE[currency], currency)}
                </p>
                {currency !== 'FCFA' && (
                  <p className="text-xs text-neutral-500 mt-1">
                    ≈ {ONLINE_PRICE.FCFA.toLocaleString('fr-FR')} FCFA
                  </p>
                )}
              </div>

              {/* Ce que tu reçois */}
              <div className="mb-4 p-4 bg-neutral-800 rounded-xl border border-neutral-700">
                <p className="font-bold text-white text-sm mb-2">En rejoignant Business Master en ligne, tu bénéficies de :</p>
                <div className="w-8 h-0.5 bg-primary-500 mb-3" />
                <ul className="space-y-2 text-neutral-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-400 mt-1">•</span>
                    <span>28 jours d&apos;accès à ton compte étudiant sur notre plateforme privée, avec l&apos;ensemble des cours Business Master</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-400 mt-1">•</span>
                    <span>Participation aux 5 jours de formation en direct, pour suivre chaque session en temps réel</span>
                  </li>
                </ul>
              </div>
              
              {/* L'approche */}
              <div className="mb-4 p-4 bg-primary-500 text-white rounded-xl">
                <p className="font-bold mb-1">Structurer. Décider. Diriger. Même à distance.</p>
                <p className="text-white/80 text-xs mb-3">Passe de l&apos;effort à la structure, en ligne.</p>
                <ul className="space-y-2 text-sm opacity-90">
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>Accès aux replays pendant 10 jours après l&apos;événement, pour revoir, approfondir et consolider tes décisions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>Comprendre les fondations solides d&apos;un business structuré</span>
                  </li>
                </ul>
              </div>
              
              {/* Les bénéfices */}
              <div className="mb-5 p-4 bg-neutral-800 rounded-xl border border-neutral-700">
                <p className="font-bold text-white text-sm mb-1">Un écran. Des décisions. De vrais résultats.</p>
                <p className="text-neutral-400 text-xs mb-3">Un cadre clair pour celles qui veulent avancer vite.</p>
                <div className="w-8 h-0.5 bg-neutral-600 mb-3" />
                <ul className="space-y-2 text-neutral-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-400 mt-1">•</span>
                    <span>Avancer à ton rythme, sans contrainte géographique</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-400 mt-1">•</span>
                    <span>Prendre des décisions stratégiques avec méthode et clarté</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-neutral-400 mb-6">
                <span>📹</span>
                <span className="font-medium">Visioconférence & Replay</span>
              </div>

              <Button href="/inscription" variant="secondary" size="md" fullWidth
                icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                S&apos;inscrire en ligne
              </Button>
            </div>
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

      {/* ─── FAQ PAIEMENT ──────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-white" aria-labelledby="faq-payment-title">
        <div className="container mx-auto px-5 max-w-3xl">
          <div className="text-center mb-12">
            <Badge variant="brand" className="mb-4">Questions paiement</Badge>
            <h2 id="faq-payment-title" className="text-2xl lg:text-3xl font-bold leading-snug text-neutral-900">
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
              href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, '')}?text=Bonjour, j'ai une question sur les offres de formation.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors"
            >
              Poser ma question sur WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ─── INFOLINE ──────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700">
        <div className="container mx-auto px-5 text-center">
          <p className="text-white font-bold text-lg mb-5">INFOLINE</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:+12812031065" className="flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur rounded-full border border-white/20 hover:bg-white/20 transition-colors">
              <Phone className="w-4 h-4 text-white" />
              <span className="font-medium text-sm text-white">+1(281)203-1065</span>
            </a>
            <a href="tel:+221785887979" className="flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur rounded-full border border-white/20 hover:bg-white/20 transition-colors">
              <Phone className="w-4 h-4 text-white" />
              <span className="font-medium text-sm text-white">+221 78 588 79 79</span>
            </a>
            <a href="tel:+221783887575" className="flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur rounded-full border border-white/20 hover:bg-white/20 transition-colors">
              <Phone className="w-4 h-4 text-white" />
              <span className="font-medium text-sm text-white">+221 78 388 75 75</span>
            </a>
          </div>
        </div>
      </section>

      <FloatingCTA text="Choisir mon offre" />
    </>
  );
}
