import type { Metadata } from 'next';
import { ArrowRight, Heart, Lightbulb, Shield, Globe2, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { GlassCard } from '@/components/ui/GlassCard';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { HeroMinimal } from '@/components/sections/HeroMinimal';
import { FloatingCTA } from '@/components/shared/FloatingCTA';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { SITE } from '@/lib/constants';
import teamData from '@/content/team.json';

export const metadata: Metadata = {
  title: "L'Équipe — Des femmes pour les femmes",
  description:
    "Découvrez l'équipe de The Million Within Academy. Des femmes entrepreneures passionnées qui accompagnent des centaines de femmes vers leur indépendance financière.",
  openGraph: {
    title: "Notre Équipe | The Million Within Academy",
    description: "Des femmes passionnées qui accompagnent votre transformation.",
    url: `${SITE.url}/equipe`,
  },
};

const VALUES = [
  {
    icon: <Heart className="w-6 h-6" />,
    color: 'from-rose-400 to-primary-500',
    title: 'Bienveillance',
    description: "Nous accompagnons chaque femme avec empathie, respect et soutien authentique, sans jugement.",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    color: 'from-gold-400 to-primary-500',
    title: 'Excellence',
    description: "Nous visons l'excellence dans notre enseignement, en partageant des méthodes éprouvées et actualisées.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    color: 'from-secondary-400 to-primary-500',
    title: 'Intégrité',
    description: "Nous tenons nos promesses et nous engageons à vous accompagner avec intégrité.",
  },
  {
    icon: <Globe2 className="w-6 h-6" />,
    color: 'from-primary-400 to-terre-500',
    title: 'Accessibilité',
    description: "Nous rendons l'entrepreneuriat accessible à toutes, peu importe le pays, le capital ou l'expérience.",
  },
];

const HISTORY_MILESTONES = [
  { year: '2014', title: 'Création de l\'academy', description: 'Mme Sall lance la première formation pour femmes entrepreneures africaines.' },
  { year: '2018', title: '100 femmes formées', description: 'Le cap symbolique des 100 premières entrepreneuses accompagnées est atteint.' },
  { year: '2021', title: 'Expansion internationale', description: 'La formation s\'étend à la diaspora africaine en Europe et en Amérique du Nord.' },
  { year: '2024', title: '400+ étudiantes', description: 'Plus de 400 femmes ont lancé leur business grâce à la méthode Million Within.' },
  {
    year: '2026',
    title: 'Aujourd\'hui',
    description: [
      'Plus de 500 000 000 FCFA de chiffre d\'affaires cumulé, généré par les entreprises créées.',
      'Plus de 280 entreprises formées en Afrique, Europe et Amérique.',
      'Plus de 673 entrepreneurs accompagnés.',
    ],
  },
];

export default function EquipePage() {
  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────────── */}
      <HeroMinimal
        label="Notre équipe"
        title="Des femmes qui croient"
        titleHighlight="en votre potentiel."
        subtitle="The Million Within Academy est née d'une conviction simple : toute femme porte en elle le potentiel de bâtir une entreprise prospère. Notre équipe est là pour l'aider à le révéler."
        breadcrumbs={[{ label: 'Accueil', href: '/' }, { label: 'Notre équipe' }]}
        size="md"
      >
        <Button href="/formation" variant="cta" size="md"
          icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
          Découvrir la formation
        </Button>
      </HeroMinimal>

      {/* ─── MISSION ───────────────────────────────────────────── */}
      <ScrollReveal variant="fadeUp">
        <section className="py-20 md:py-28 bg-white" aria-labelledby="mission-title">
          <div className="container mx-auto px-5">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge variant="brand" className="mb-4">Notre mission</Badge>
                <h2 id="mission-title" className="text-2xl lg:text-3xl font-bold leading-snug text-neutral-900 mb-6">
                  Aider les femmes à bâtir{' '}
                  <span className="text-primary-500">une entreprise prospère</span>{' '}
                  sans renoncer à leur famille.
                </h2>
                <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                  Nous croyons qu&apos;aucune femme ne devrait avoir à choisir entre sa famille et ses rêves.
                  Nous savons ce que c&apos;est que de traverser ce moment de doute, après la naissance
                  d&apos;un enfant, où l&apos;on se demande s&apos;il faut mettre de côté ses ambitions.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  C&apos;est pourquoi nous avons créé une méthode qui s&apos;adapte à votre vie —
                  pas l&apos;inverse. Une méthode qui respecte vos contraintes familiales tout en
                  vous donnant les outils pour réussir en entrepreneuriat.
                </p>
              </div>

              {/* Stats de confiance */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: 673, suffix: '+', label: 'Entrepreneurs formés', icon: '👩‍💼' },
                  { value: 500, suffix: ' M ', label: 'Chiffre d\'affaires cumulé', suffixSmall: 'FCFA', icon: '📈' },
                  { value: 10, suffix: ' ans', label: "D'expérience", icon: '⭐' },
                  { value: 10, suffix: '+', label: 'Pays représentés', icon: '🌍' },
                ].map((stat) => (
                  <GlassCard key={stat.label} variant="brand" padding="md" hoverable>
                    <div className="text-center">
                      <span className="text-3xl mb-2 block" aria-hidden>{stat.icon}</span>
                      <p className="font-heading font-black text-3xl text-primary-600 mb-1">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                        {'suffixSmall' in stat && stat.suffixSmall && (
                          <span className="text-lg font-normal"> {stat.suffixSmall}</span>
                        )}
                      </p>
                      <p className="text-sm text-neutral-600 font-medium">{stat.label}</p>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── ÉQUIPE ────────────────────────────────────────────── */}
      <ScrollReveal variant="fadeUp">
        <section className="py-20 md:py-28 bg-neutral-50" aria-labelledby="team-title">
          <div className="container mx-auto px-5">
            <div className="text-center mb-16">
              <Badge variant="brand" className="mb-4">L&apos;équipe</Badge>
              <h2 id="team-title" className="text-2xl lg:text-3xl font-bold leading-snug text-neutral-900">
                Une équipe{' '}
                <span className="text-primary-500">dynamique et passionnée</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamData.map((member) => (
                <article
                  key={member.id}
                  className="group relative flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm border border-neutral-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  {/* Photo placeholder */}
                  <div className="relative aspect-square bg-gradient-to-br from-primary-100 via-terre-100 to-gold-100 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-primary-500/20 border-4 border-primary-500/30 flex items-center justify-center">
                        <span className="text-4xl font-black text-primary-600">
                          {member.name.charAt(4)}
                        </span>
                      </div>
                    </div>

                    {/* Overlay hover avec bio */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/95 via-neutral-900/60 to-transparent flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-sm leading-relaxed">{member.bio}</p>
                      {member.social?.whatsapp && (
                        <a
                          href={member.social.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center gap-2 text-green-400 text-xs font-semibold hover:text-green-300"
                        >
                          Contacter sur WhatsApp
                        </a>
                      )}
                    </div>

                    {/* Badge featured */}
                    {member.featured && (
                      <div className="absolute top-3 left-3 bg-gold-400 text-neutral-900 text-xs font-bold px-3 py-1 rounded-full">
                        Fondatrice
                      </div>
                    )}
                  </div>

                  {/* Infos */}
                  <div className="p-5 flex-1 flex flex-col">
                    <div>
                      <h3 className="font-heading font-bold text-neutral-900 text-lg">{member.name}</h3>
                      <p className="text-primary-600 text-sm font-medium mt-0.5">{member.role}</p>
                    </div>
                    <p className="text-base font-normal leading-relaxed text-neutral-500 text-justify mt-3 line-clamp-2 flex-1">
                      {member.bio}
                    </p>

                    {/* Réseaux sociaux */}
                    <div className="flex items-center gap-3 mt-4 pt-4 border-t border-neutral-100">
                      {member.social?.whatsapp && (
                        <a
                          href={member.social.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center hover:bg-green-500 hover:text-white transition-colors"
                          aria-label={`Contacter ${member.name} sur WhatsApp`}
                        >
                          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden>
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                        </a>
                      )}
                      <a
                        href="#"
                        className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                        aria-label={`Profil LinkedIn de ${member.name}`}
                      >
                        <Linkedin className="w-4 h-4" aria-hidden />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── NOS VALEURS ───────────────────────────────────────── */}
      <ScrollReveal variant="fadeUp">
        <section className="py-20 md:py-28 bg-white" aria-labelledby="values-title">
          <div className="container mx-auto px-5">
            <div className="text-center mb-14">
              <Badge variant="brand" className="mb-4">Nos valeurs</Badge>
              <h2 id="values-title" className="text-2xl lg:text-3xl font-bold leading-snug text-neutral-900">
                Ce qui nous guide{' '}
                <span className="text-primary-500">chaque jour</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {VALUES.map((val, i) => (
                <div
                  key={i}
                  className="group p-8 rounded-3xl bg-neutral-50 border border-neutral-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${val.color} text-white flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {val.icon}
                  </div>
                  <h3 className="font-heading font-bold text-neutral-900 text-xl mb-3">{val.title}</h3>
                  <p className="text-base font-normal leading-relaxed text-neutral-500 text-justify">{val.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── NOTRE HISTOIRE ────────────────────────────────────── */}
      <ScrollReveal variant="fadeUp">
        <section className="py-20 md:py-28 bg-neutral-900 text-white" aria-labelledby="history-title">
          <div className="container mx-auto px-5">
            <div className="text-center mb-14">
              <Badge variant="brand" className="mb-4">Notre histoire</Badge>
              <h2 id="history-title" className="text-2xl lg:text-3xl font-bold leading-snug text-white">
                10 ans de passion,{' '}
                <span className="text-primary-400">d&apos;impact et de croissance</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <ol className="relative border-l-2 border-primary-500/30" aria-label="Histoire de l'academy">
                {HISTORY_MILESTONES.map((milestone, i) => (
                  <li key={i} className="mb-8 ml-8 last:mb-0">
                    <div className="absolute -left-3 w-6 h-6 rounded-full bg-primary-500 border-4 border-neutral-900 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white" aria-hidden />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                      <span className="text-primary-400 font-bold text-sm font-heading">{milestone.year}</span>
                      <h3 className="font-heading font-bold text-white">{milestone.title}</h3>
                    </div>
                    {Array.isArray(milestone.description) ? (
                      milestone.description.map((line, j) => (
                        <p key={j} className="text-base font-normal leading-relaxed text-neutral-500 text-justify mb-2 last:mb-0">{line}</p>
                      ))
                    ) : (
                      <p className="text-base font-normal leading-relaxed text-neutral-500 text-justify">{milestone.description}</p>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── CTA ───────────────────────────────────────────────── */}
      <section className="py-16 bg-primary-50 border-t border-primary-100">
        <div className="container mx-auto px-5 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold leading-snug text-neutral-900 mb-4">
            Rejoignez notre communauté
          </h2>
          <p className="text-neutral-600 mb-8 max-w-xl mx-auto">
            Notre équipe vous attend pour vous accompagner dans votre transformation entrepreneuriale.
          </p>
          <Button href="/inscription" variant="cta" size="md"
            icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
            Commencer ma transformation
          </Button>
        </div>
      </section>

      <FloatingCTA text="Rejoindre l'équipe" />
    </>
  );
}
