import { Section } from '@/components/layout/Section';

export function ProblemSolutionSection() {
  const pains = [
    { icon: '⏰', text: 'Manque de temps avec la famille' },
    { icon: '💰', text: 'Pas de capital de départ' },
    { icon: '❓', text: 'Ne savez pas par où commencer' },
  ];
  return (
    <Section background="tinted" spacing="md" id="about">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
          Vous rêvez d&apos;entreprendre mais…
        </h2>
        <div className="grid gap-4 md:grid-cols-3 mt-8">
          {pains.map((p) => (
            <div key={p.text} className="p-4 rounded-xl bg-white border border-neutral-200 flex flex-col items-center gap-2">
              <span className="text-2xl" aria-hidden>{p.icon}</span>
              <p className="text-neutral-700 font-medium">{p.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-lg text-primary-600 font-semibold">Notre solution →</p>
      </div>
    </Section>
  );
}
