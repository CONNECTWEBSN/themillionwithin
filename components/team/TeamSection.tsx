import { Badge } from '@/components/ui/Badge';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { TeamCard } from './TeamCard';
import { TEAM_MEMBERS } from '@/lib/constants';

export function TeamSection() {
  return (
    <section
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
      aria-labelledby="team-title"
    >
      {/* Accent décoratif */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #F97316 0%, transparent 70%)' }}
        aria-hidden
      />

      <div className="container mx-auto px-5 relative z-10">
        {/* En-tête */}
        <ScrollReveal variant="fadeUp">
          <div className="text-center mb-16">
            <Badge variant="brand" className="mb-4">L&apos;équipe</Badge>
            <h2
              id="team-title"
              className="text-3xl lg:text-4xl font-bold leading-snug text-neutral-900 mb-4"
            >
              UNE ÉQUIPE{' '}
              <span className="text-primary-500">DYNAMIQUE</span>
            </h2>
            <p className="text-lg font-normal leading-relaxed text-neutral-600 max-w-xl mx-auto">
              Notre équipe de formation est composée de professionnels expérimentés, passionnés par le partage de connaissances et l&apos;accompagnement personnalisé.
            </p>
          </div>
        </ScrollReveal>

        {/* Grille */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member, index) => (
            <ScrollReveal key={member.id} variant="fadeUp" delay={index * 0.1}>
              <TeamCard member={member} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
