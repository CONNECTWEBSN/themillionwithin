import { Section } from '@/components/layout/Section';

export function TestimonialsSection() {
  return (
    <Section background="dark" spacing="lg" id="temoignages">
      <div className="text-center mb-12">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-2">
          Elles ont transformé leur vie
        </h2>
        <p className="text-neutral-300 max-w-xl mx-auto">Témoignages vidéo à venir (grid 2x3 + modal)</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="aspect-video rounded-xl bg-neutral-800 flex items-center justify-center text-neutral-500"
          >
            Témoignage {i}
          </div>
        ))}
      </div>
    </Section>
  );
}
