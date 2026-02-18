import { Section } from '@/components/layout/Section';

export function TeamSection() {
  return (
    <Section background="warm" spacing="lg">
      <div className="text-center mb-12">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-2">
          Votre équipe d&apos;accompagnement
        </h2>
        <p className="text-neutral-600 max-w-xl mx-auto">Mme Sall + Capitaines Alumni</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="rounded-2xl bg-white p-6 border border-neutral-200 text-center">
          <div className="w-24 h-24 rounded-full bg-primary-100 mx-auto mb-3 flex items-center justify-center text-2xl">👩</div>
          <h3 className="font-heading font-bold text-neutral-900">Mme Sall</h3>
          <p className="text-sm text-primary-600">Fondatrice & CEO</p>
        </div>
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded-2xl bg-white p-6 border border-neutral-200 text-center">
            <div className="w-20 h-20 rounded-full bg-neutral-200 mx-auto mb-3" />
            <h3 className="font-heading font-bold text-neutral-900">Capitaine Alumni</h3>
            <p className="text-sm text-neutral-500">Accompagnement</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
