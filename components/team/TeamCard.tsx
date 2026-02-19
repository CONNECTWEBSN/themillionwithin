import Image from 'next/image';
import { Linkedin, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { TeamMember } from '@/lib/constants';

interface TeamCardProps {
  member: TeamMember;
}

const SOCIAL_ICONS = {
  linkedin: Linkedin,
  whatsapp: MessageCircle,
} as const;

export function TeamCard({ member }: TeamCardProps) {
  const socialEntries = member.socials 
    ? Object.entries(member.socials).filter(([, url]) => url && (url as string) !== '#') 
    : [];

  return (
    <article
      className={cn(
        'group relative rounded-2xl overflow-hidden bg-white',
        'shadow-sm hover:shadow-xl hover:-translate-y-1',
        'transition-all duration-500 border border-neutral-100',
        'featured' in member && member.featured && 'ring-2 ring-primary-200',
      )}
    >
      {/* Badge Fondatrice */}
      {'featured' in member && member.featured && (
        <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-primary-500 text-white text-[10px] uppercase tracking-widest font-semibold shadow-brand-sm">
          Fondatrice
        </div>
      )}

      {/* Photo */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className={cn(
            'object-cover object-top',
            'grayscale group-hover:grayscale-0',
            'scale-100 group-hover:scale-105',
            'transition-all duration-500 ease-out',
          )}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      {/* Infos */}
      <div className="p-5 text-center">
        <h3 className="text-base font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors duration-300 mb-1">
          {member.name}
        </h3>

        <p className="text-xs text-primary-500 uppercase tracking-widest font-medium">
          {member.role}
        </p>

        {/* Icônes sociales — seulement si liens réels */}
        {socialEntries.length > 0 && (
          <div className="flex items-center justify-center gap-2 mt-3">
            {socialEntries.map(([platform, url]) => {
              const Icon = SOCIAL_ICONS[platform as keyof typeof SOCIAL_ICONS];
              if (!Icon || typeof url !== 'string') return null;

              return (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 hover:bg-primary-500 hover:text-white transition-all duration-200"
                  aria-label={`${member.name} sur ${platform}`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        )}
      </div>
    </article>
  );
}
