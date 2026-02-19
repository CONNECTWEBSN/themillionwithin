import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { ABOUT } from '@/lib/constants';

export function AboutSection() {
  return (
    <section
      className="py-20 lg:py-28 bg-primary-25 relative overflow-hidden"
      aria-labelledby="about-title"
    >
      {/* Accent décoratif supérieur */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.07] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #F97316 0%, transparent 70%)' }}
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-[0.05] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #F5C518 0%, transparent 70%)' }}
        aria-hidden
      />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch gap-x-0">

          {/* ═══ TEXTE GAUCHE ═══ */}
          <div className="flex flex-col gap-6 lg:w-1/2 px-5 py-8 lg:py-0">
            <ScrollReveal variant="fadeUp">
              <Badge variant="brand" className="mb-2">
                À propos de nous
              </Badge>
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delay={0.1}>
              <h2
                id="about-title"
                className="text-3xl lg:text-4xl font-bold leading-snug text-neutral-900"
              >
                {ABOUT.title.before}{' '}
                <span className="text-primary-500">{ABOUT.title.highlight}</span>{' '}
                {ABOUT.title.after}
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delay={0.15}>
              <p
                className="text-lg font-normal leading-relaxed text-neutral-600 max-w-xl text-justify"
                dangerouslySetInnerHTML={{ __html: ABOUT.description }}
              />
            </ScrollReveal>

            {ABOUT.subdescription && (
              <ScrollReveal variant="fadeUp" delay={0.2}>
                <p
                  className="text-base font-normal leading-relaxed text-neutral-500 max-w-xl text-justify"
                  dangerouslySetInnerHTML={{ __html: ABOUT.subdescription }}
                />
              </ScrollReveal>
            )}

            {/* CTA — utilise le Design System */}
            <ScrollReveal variant="fadeUp" delay={0.25}>
              <div className="mt-6">
                <Button
                  href="/formation"
                  variant="primary"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                >
                  Découvrir la formation
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* ═══ VIDÉO DROITE ═══ */}
          <div className="relative w-full lg:w-1/2 h-72 lg:h-auto overflow-hidden mt-8 lg:mt-0">
            <ScrollReveal variant="fadeUp" delay={0.15} className="w-full h-full">
              <div className="absolute inset-0 w-full h-full bg-neutral-900 lg:rounded-l-3xl overflow-hidden">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${ABOUT.videoId}?modestbranding=1&rel=0&showinfo=0&iv_load_policy=3`}
                  title="Présentation The Million Within Academy"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
