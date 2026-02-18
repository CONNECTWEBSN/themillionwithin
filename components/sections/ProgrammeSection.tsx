import { Section } from '@/components/layout/Section';
import { PROGRAMME_DAYS } from '@/lib/constants';

export function ProgrammeSection() {
  return (
    <Section background="tinted" spacing="lg" id="programme">
      <div className="text-center mb-12">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-2">
          Votre transformation en 5 jours
        </h2>
        <p className="text-neutral-600 max-w-xl mx-auto">Un programme structuré pour lancer votre business.</p>
      </div>
      <div className="space-y-6 max-w-2xl mx-auto">
        {PROGRAMME_DAYS.map((day) => (
          <div
            key={day.day}
            className="flex gap-4 p-5 rounded-2xl bg-white border border-neutral-200 shadow-sm"
          >
            <div className="w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center font-heading font-bold shrink-0">
              {day.day}
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-neutral-900">{day.title}</h3>
              <p className="text-base font-normal leading-relaxed text-neutral-500 text-justify mt-1">{day.description}</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {day.topics.map((t) => (
                  <li key={t} className="text-xs bg-primary-50 text-primary-800 px-2 py-1 rounded-full">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
