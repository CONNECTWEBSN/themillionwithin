import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, Gift, Crown, Zap, Users, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { HeroMinimal } from '@/components/sections/HeroMinimal';
import { FloatingCTA } from '@/components/shared/FloatingCTA';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Les Offres — Choisissez votre formule | The Million Within Academy',
  description:
    'Découvrez toutes les formules de formation The Million Within Academy. Master Standard, Accéléré 5 jours, Suivi Premium ou PRO — trouvez l\'offre adaptée à vos besoins.',
  openGraph: {
    title: 'Les Offres | The Million Within Academy',
    description: 'Approfondissez vos connaissances avec des modules pratiques sans quitter votre domicile.',
    url: `${SITE.url}/formation/offres`,
  },
};

const FORMULES = [
  {
    id: 'format-1',
    title: 'Format 1 — Master Standard',
    subtitle: 'Idéal pour apprendre à votre rythme sans contrainte.',
    features: [
      'Accès complet au cours',
      'Compte étudiant personnel',
      'Accès illimité à la communauté TMW Master',
      '28 jours pour avancer à votre rythme',
    ],
    bonus: 'Possibilité d\'ajouter une consultation individuelle (1h) à 110€ | 115$ | 68.500 FCFA si besoin.',
    price: { FCFA: 89_500, EUR: 139, USD: 145 },
    color: 'from-blue-500 to-blue-600',
    icon: <Clock className="w-6 h-6" />,
    href: '/inscription?plan=standard',
  },
  {
    id: 'format-2a',
    title: 'Format 2A — Master Accéléré (5 jours en direct)',
    subtitle: 'Pour ceux qui veulent progresser vite avec une dynamique de groupe.',
    features: [
      'Accès complet au cours',
      'Compte étudiant + communauté',
      '5 jours de cours intensifs en direct',
      'Partenaires de succès pour avancer ensemble',
      'Participation au concours des 3 meilleurs étudiants :',
    ],
    prizes: [
      { place: '1er prix', prize: 'Financement de 1.000.000 FCFA par la structure TONTINE EXPRESS' },
      { place: '2e prix', prize: 'Bon d\'achat marchandises 300.000 FCFA offert par la structure China online LTD' },
      { place: '3e prix', prize: '4 consultations (valeur 274.000 FCFA)' },
    ],
    price: { FCFA: 185_000, EUR: 285, USD: 299 },
    color: 'from-blue-600 to-blue-700',
    icon: <Zap className="w-6 h-6" />,
    featured: true,
    href: '/inscription?plan=accelere-5j',
  },
  {
    id: 'format-2b',
    title: 'Format 2B — Master Non Accéléré + Suivi Premium',
    subtitle: 'La flexibilité d\'apprendre à votre rythme, avec un suivi rapproché.',
    features: [
      'Accès complet au cours',
      'Compte étudiant + communauté',
      '28 jours de formation aux horaires qui vous conviennent',
      '4 consultations individuelles (1h chacune) par semaine pour garantir votre progression.',
    ],
    price: { FCFA: 185_000, EUR: 285, USD: 299 },
    color: 'from-blue-600 to-blue-700',
    icon: <Users className="w-6 h-6" />,
    href: '/inscription?plan=non-accelere-suivi',
  },
  {
    id: 'format-3',
    title: 'Format 3 — Master Individuel PRO',
    subtitle: 'Idéal pour LES CHEFS D\'entreprise déjà en activité qui veulent dépasser le cap de 50 millions de chiffre d\'affaires annuel.',
    description: 'L\'expérience la plus complète, pensée pour un accompagnement sur-mesure.',
    features: [
      'Accès complet au cours',
      'Compte étudiant + communauté',
      '60 jours pour apprendre à votre rythme',
      'Accompagnement individuel sur 6 mois',
      'Consultation de suivi chaque semaine (coaching personnalisé et régulier)',
    ],
    price: { FCFA: 981_500, EUR: 1_499, USD: 1_599 },
    color: 'from-blue-700 to-blue-800',
    icon: <Crown className="w-6 h-6" />,
    premium: true,
    href: '/inscription?plan=pro',
  },
];

export default function OffresPage() {
  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────────── */}
      <HeroMinimal
        label="Offres"
        title="Les"
        titleHighlight="Formules"
        subtitle="Approfondissez vos connaissances avec des modules pratiques sans quitter votre domicile"
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Formation', href: '/formation' },
          { label: 'Offres' },
        ]}
        size="md"
      >
        <Button href="#formules" variant="cta" size="md"
          icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
          Voir les formules
        </Button>
      </HeroMinimal>

      {/* ─── LES FORMULES ────────────────────────────────────────── */}
      <ScrollReveal variant="fadeUp">
        <section id="formules" className="py-16 md:py-24 bg-gradient-to-b from-neutral-100 to-neutral-50 scroll-mt-24">
          <div className="container mx-auto px-5">
            <div className="max-w-4xl mx-auto space-y-8">
              
              {FORMULES.map((formule) => (
                <div
                  key={formule.id}
                  className={`relative bg-gradient-to-r ${formule.color} rounded-3xl p-8 text-white overflow-hidden shadow-xl ${
                    formule.premium ? 'ring-4 ring-gold-400 ring-offset-4' : ''
                  }`}
                >
                  {/* Cercle décoratif */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10" />
                  <div className="absolute -bottom-10 -right-20 w-32 h-32 rounded-full bg-white/5" />
                  
                  {/* Badge Featured */}
                  {formule.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="popular" className="bg-gold-400 text-neutral-900">⭐ Populaire</Badge>
                    </div>
                  )}
                  
                  {/* Badge Premium */}
                  {formule.premium && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="popular" className="bg-gold-400 text-neutral-900">👑 Premium</Badge>
                    </div>
                  )}

                  <div className="relative z-10">
                    {/* Titre */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                        {formule.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{formule.title}</h3>
                        <p className="text-white/80 text-sm mt-1">{formule.subtitle}</p>
                      </div>
                    </div>

                    {/* Description si présente */}
                    {formule.description && (
                      <p className="text-white/90 text-sm mb-4 italic">{formule.description}</p>
                    )}

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {formule.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-white/60">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Prix du concours */}
                    {formule.prizes && (
                      <div className="bg-white/10 rounded-xl p-4 mb-6">
                        <ul className="space-y-2">
                          {formule.prizes.map((prize, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <span className={`font-bold ${i === 0 ? 'text-gold-300' : i === 1 ? 'text-neutral-300' : 'text-orange-300'}`}>
                                🏆 {prize.place} :
                              </span>
                              <span className="text-white/90">{prize.prize}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Bonus si présent */}
                    {formule.bonus && (
                      <div className="flex items-start gap-2 mb-6 p-3 bg-white/10 rounded-xl">
                        <Gift className="w-5 h-5 text-gold-300 shrink-0 mt-0.5" />
                        <p className="text-sm text-white/90">{formule.bonus}</p>
                      </div>
                    )}

                    {/* Prix et CTA */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-white/20">
                      <div>
                        <p className="text-2xl font-black text-primary-200">
                          {formule.price.FCFA.toLocaleString('fr-FR')} FCFA
                        </p>
                        <p className="text-sm text-white/70">
                          {formule.price.EUR}€ | {formule.price.USD}$
                        </p>
                      </div>
                      <Button
                        href={formule.href}
                        variant="secondary"
                        size="sm"
                        icon={<ArrowRight className="w-4 h-4" />}
                        iconPosition="right"
                      >
                        Choisir cette formule
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
              
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── BESOIN D'AIDE ────────────────────────────────────────── */}
      <ScrollReveal variant="fadeUp">
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-5">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl lg:text-3xl font-bold leading-snug text-neutral-900 mb-4">
                Besoin d&apos;aide pour <span className="text-primary-500">choisir ?</span>
              </h2>
              <p className="text-neutral-600 mb-8">
                Notre équipe est disponible pour vous guider vers la formule la plus adaptée à vos objectifs et votre situation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, '')}?text=Bonjour, j'aimerais avoir des conseils pour choisir ma formule de formation.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Nous contacter sur WhatsApp
                </a>
                <Button href="/faq" variant="outline" size="md">
                  Voir la FAQ
                </Button>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── COMPARATIF RAPIDE ────────────────────────────────────── */}
      <ScrollReveal variant="fadeUp">
        <section className="py-16 md:py-20 bg-neutral-50">
          <div className="container mx-auto px-5">
            <div className="text-center mb-10">
              <h2 className="text-2xl lg:text-3xl font-bold leading-snug text-neutral-900">
                Comparatif rapide
              </h2>
            </div>

            <div className="max-w-4xl mx-auto overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-neutral-200">
                    <th className="text-left py-4 px-4 font-semibold text-neutral-700">Caractéristique</th>
                    <th className="text-center py-4 px-2 font-semibold text-neutral-700">Standard</th>
                    <th className="text-center py-4 px-2 font-semibold text-primary-600 bg-primary-50 rounded-t-xl">Accéléré 5J</th>
                    <th className="text-center py-4 px-2 font-semibold text-neutral-700">Non Accéléré</th>
                    <th className="text-center py-4 px-2 font-semibold text-neutral-700">PRO</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  <tr>
                    <td className="py-3 px-4 text-neutral-600">Accès aux cours</td>
                    <td className="py-3 px-2 text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="py-3 px-2 text-center bg-primary-50"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="py-3 px-2 text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="py-3 px-2 text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-neutral-600">Communauté</td>
                    <td className="py-3 px-2 text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="py-3 px-2 text-center bg-primary-50"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="py-3 px-2 text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="py-3 px-2 text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-neutral-600">Durée d&apos;accès</td>
                    <td className="py-3 px-2 text-center text-neutral-700">28 jours</td>
                    <td className="py-3 px-2 text-center bg-primary-50 font-semibold text-primary-700">5 jours direct</td>
                    <td className="py-3 px-2 text-center text-neutral-700">28 jours</td>
                    <td className="py-3 px-2 text-center text-neutral-700">60 jours</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-neutral-600">Coaching individuel</td>
                    <td className="py-3 px-2 text-center text-neutral-400">Option</td>
                    <td className="py-3 px-2 text-center bg-primary-50 text-neutral-400">—</td>
                    <td className="py-3 px-2 text-center text-neutral-700">4 sessions</td>
                    <td className="py-3 px-2 text-center font-semibold text-gold-600">6 mois</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-neutral-600">Concours & Prix</td>
                    <td className="py-3 px-2 text-center text-neutral-400">—</td>
                    <td className="py-3 px-2 text-center bg-primary-50"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                    <td className="py-3 px-2 text-center text-neutral-400">—</td>
                    <td className="py-3 px-2 text-center text-neutral-400">—</td>
                  </tr>
                  <tr className="bg-neutral-100 font-semibold">
                    <td className="py-4 px-4 text-neutral-900">Prix</td>
                    <td className="py-4 px-2 text-center text-neutral-900">89.500 FCFA</td>
                    <td className="py-4 px-2 text-center bg-primary-100 text-primary-700 rounded-b-xl">185.000 FCFA</td>
                    <td className="py-4 px-2 text-center text-neutral-900">185.000 FCFA</td>
                    <td className="py-4 px-2 text-center text-neutral-900">981.500 FCFA</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <FloatingCTA text="Choisir ma formule" />
    </>
  );
}
