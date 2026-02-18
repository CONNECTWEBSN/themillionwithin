import { Section } from '@/components/layout/Section';

export function SocialProofBar() {
  return (
    <Section background="white" spacing="sm">
      <p className="text-center text-sm font-medium text-neutral-500 mb-6">Ils nous font confiance</p>
      <div className="flex flex-wrap justify-center gap-8 items-center opacity-70">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-8 w-24 bg-neutral-200 rounded" aria-hidden />
        ))}
      </div>
    </Section>
  );
}
