'use client';

import { useState, useMemo } from 'react';
import { Search, ChevronDown, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { HeroMinimal } from '@/components/sections/HeroMinimal';
import { FloatingCTA } from '@/components/shared/FloatingCTA';
import { SITE } from '@/lib/constants';
import { cn } from '@/lib/utils';

const EXTRA_FAQ: Array<{ question: string; answer: string; category: string }> = [
  { category: 'Programme', question: 'Comment se déroule la formation ?', answer: 'La formation se déroule en ligne / en présentiel sur 5 jours consécutifs, avec des modules vidéo préenregistrés et des sessions en direct selon la formule choisie. Vous accédez aux contenus à votre rythme (replay disponible).' },
  { category: 'Programme', question: 'Ai-je besoin d\'un capital de départ ?', answer: 'Non ! Notre méthode est spécialement conçue pour les femmes qui démarrent sans investissement initial. Nous vous apprenons à lancer votre activité avec les ressources que vous avez déjà.' },
  { category: 'Programme', question: 'Quelle est la durée d\'accès à la formation ?', answer: 'Selon votre formule : 6 mois pour Master Standard, 12 mois pour les formules Accéléré et Suivi, à vie pour le Master PRO.' },
  { category: 'Programme', question: 'La formation est-elle disponible en wolof ?', answer: 'Oui ! La formation est dispensée en français et en wolof pour que chaque femme puisse apprendre dans la langue où elle se sent le plus à l\'aise.' },
  { category: 'Technique', question: 'De quel équipement ai-je besoin ?', answer: 'Un smartphone ou un ordinateur avec connexion internet suffit. Nos vidéos sont optimisées pour une connexion 3G ou 4G.' },
  { category: 'Technique', question: 'Puis-je suivre depuis n\'importe quel pays ?', answer: 'Oui ! La formation est accessible depuis la France, le Canada, l\'Italie, le Sénégal, le Maroc et tout autre pays. Nous avons des étudiantes partout dans le monde.' },
  { category: 'Paiement', question: 'Quels sont les moyens de paiement acceptés ?', answer: 'Wave, Orange Money, Free Money et carte bancaire (Visa/Mastercard).' },
  { category: 'Accompagnement', question: 'Y a-t-il un accompagnement après la formation ?', answer: 'Oui. Toutes les formules incluent l\'accès à notre communauté privée. Les formules Suivi et PRO comprennent des sessions de coaching individuel avec un membre de l\'équipe.' },
  { category: 'Accompagnement', question: 'Puis-je obtenir un certificat ?', answer: 'Oui. Les formules Accéléré, Suivi et PRO incluent un certificat de complétion.' },
];

const ALL_FAQ = [...EXTRA_FAQ];

const CATEGORIES = ['Tous', ...Array.from(new Set(ALL_FAQ.map((f) => f.category)))];

export default function FAQPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return ALL_FAQ.filter((f) => {
      const matchCat = activeCategory === 'Tous' || f.category === activeCategory;
      const q = search.toLowerCase();
      const matchSearch = !q || f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [search, activeCategory]);

  // Grouper par catégorie
  const grouped = useMemo(() => {
    if (activeCategory !== 'Tous') {
      return { [activeCategory]: filtered };
    }
    return filtered.reduce<Record<string, typeof filtered>>((acc, f) => {
      if (!acc[f.category]) acc[f.category] = [];
      acc[f.category].push(f);
      return acc;
    }, {});
  }, [filtered, activeCategory]);

  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────────── */}
      <HeroMinimal
        label="Centre d'aide"
        title="Comment pouvons-nous"
        titleHighlight="vous aider ?"
        subtitle="Retrouvez les réponses aux questions les plus fréquentes sur la formation, les paiements et l'accompagnement."
        breadcrumbs={[{ label: 'Accueil', href: '/' }, { label: 'FAQ' }]}
        size="sm"
      />

      <section className="py-12 md:py-20 bg-white" aria-label="Questions fréquentes">
        <div className="container mx-auto px-5 max-w-4xl">

          {/* Barre de recherche */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" aria-hidden />
            <input
              type="search"
              placeholder="Rechercher une question..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-5 py-4 rounded-2xl border-2 border-neutral-200 bg-white text-neutral-900 text-base placeholder:text-neutral-400 focus:outline-none focus:border-primary-400 focus:ring-4 focus:ring-primary-100 transition-all"
              aria-label="Rechercher une question"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 text-sm"
                aria-label="Effacer la recherche"
              >
                ✕
              </button>
            )}
          </div>

          {/* Filtres catégories */}
          <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filtrer par catégorie">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200',
                  activeCategory === cat
                    ? 'bg-primary-500 text-white shadow-brand-sm'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200',
                )}
                aria-pressed={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Résultats */}
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-neutral-500 text-lg mb-2">Aucune question trouvée pour &ldquo;{search}&rdquo;</p>
              <p className="text-neutral-400 text-sm">Essayez avec d&apos;autres mots-clés ou</p>
              <a
                href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, '')}?text=Bonjour, j'ai une question : ${search}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-green-600 font-semibold text-sm hover:underline"
              >
                posez votre question sur WhatsApp
                <ArrowRight className="w-4 h-4" aria-hidden />
              </a>
            </div>
          ) : (
            <div className="space-y-10">
              {Object.entries(grouped).map(([category, questions]) => (
                <div key={category}>
                  {/* Titre de catégorie */}
                  {Object.keys(grouped).length > 1 && (
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="brand">{category}</Badge>
                      <span className="text-neutral-400 text-sm">{questions.length} question{questions.length > 1 ? 's' : ''}</span>
                    </div>
                  )}

                  {/* Accordéon */}
                  <div className="space-y-2">
                    {questions.map((faq) => {
                      const isOpen = openQuestion === faq.question;
                      return (
                        <div
                          key={faq.question}
                          className={cn(
                            'rounded-2xl border overflow-hidden transition-all duration-200',
                            isOpen ? 'border-primary-200 shadow-sm' : 'border-neutral-200',
                          )}
                        >
                          <button
                            type="button"
                            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-neutral-900 text-sm md:text-base hover:bg-neutral-50 transition-colors"
                            onClick={() => setOpenQuestion(isOpen ? null : faq.question)}
                            aria-expanded={isOpen}
                          >
                            <span>{faq.question}</span>
                            <ChevronDown
                              className={cn(
                                'w-5 h-5 shrink-0 text-neutral-400 transition-transform duration-300',
                                isOpen && 'rotate-180 text-primary-500',
                              )}
                              aria-hidden
                            />
                          </button>

                          <div className={cn(
                            'overflow-hidden transition-all duration-300',
                            isOpen ? 'max-h-64' : 'max-h-0',
                          )}>
                            <div className="px-6 pb-5 pt-0 text-neutral-600 text-sm leading-relaxed border-t border-neutral-100">
                              {faq.answer}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ─── Pas trouvé votre réponse ? ───────────────────────── */}
      <section className="py-16 bg-neutral-900" aria-label="Contact">
        <div className="container mx-auto px-5">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center mx-auto mb-5">
              <MessageCircle className="w-8 h-8 text-green-400" aria-hidden />
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold leading-snug text-white mb-4">
              Vous n&apos;avez pas trouvé votre réponse ?
            </h2>
            <p className="text-neutral-400 mb-8">
              Notre équipe est disponible sur WhatsApp pour répondre à toutes vos questions,
              7j/7 entre 8h et 18h (heure de Dakar).
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, '')}?text=Bonjour, j'ai une question sur la formation The Million Within.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-green-500 text-white font-bold hover:bg-green-600 transition-colors shadow-lg"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Écrire sur WhatsApp
              </a>
              <Button href="/inscription" variant="outline-dark" size="md"
                icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                S&apos;inscrire directement
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FloatingCTA text="S'inscrire à la formation" />
    </>
  );
}
