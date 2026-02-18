'use client';

import { Section } from '@/components/layout/Section';
import { FAQ_ITEMS } from '@/lib/constants';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  return (
    <Section background="warm" spacing="lg">
      <div className="text-center mb-12">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-2">
          Questions fréquentes
        </h2>
      </div>
      <div className="max-w-2xl mx-auto space-y-2">
        {FAQ_ITEMS.map((item) => {
          const isOpen = openId === item.question;
          return (
            <div
              key={item.question}
              className="rounded-xl bg-white border border-neutral-200 overflow-hidden"
            >
              <button
                type="button"
                className="w-full flex items-center justify-between gap-4 p-4 text-left font-medium text-neutral-900 hover:bg-neutral-50"
                onClick={() => setOpenId(isOpen ? null : item.question)}
                aria-expanded={isOpen}
              >
                {item.question}
                <ChevronDown className={cn('w-5 h-5 shrink-0 transition-transform', isOpen && 'rotate-180')} />
              </button>
              {isOpen && (
                <div className="px-4 pb-4 text-neutral-600 text-sm leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
