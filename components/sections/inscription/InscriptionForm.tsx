'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle2, ArrowRight, Star, Users2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { PRICING_PLANS, PAYMENT_METHODS, SITE } from '@/lib/constants';
import { inscriptionSchema, type InscriptionFormData } from '@/lib/validations/inscription';
import { cn } from '@/lib/utils';

const COUNTRIES = [
  'Sénégal', 'France', 'Canada', 'Italie', 'Espagne', 'Belgique', 'Suisse',
  'États-Unis', 'Côte d\'Ivoire', 'Mali', 'Guinée', 'Cameroun', 'Maroc',
  'Mauritanie', 'Burkina Faso', 'Autre',
];

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 text-xs text-red-600 font-medium">{message}</p>;
}

export function InscriptionForm() {
  const searchParams = useSearchParams();
  const planParam = searchParams.get('plan') ?? 'accelere-5j';
  const [submitted, setSubmitted] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(planParam);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<InscriptionFormData>({
    resolver: zodResolver(inscriptionSchema),
    defaultValues: {
      planId: (planParam as InscriptionFormData['planId']) ?? 'accelere-5j',
      paymentMethod: 'wave',
      acceptCGV: false,
    },
  });

  const currentPlan = PRICING_PLANS.find((p) => p.id === selectedPlan) ?? PRICING_PLANS[1];

  const onSubmit = async (data: InscriptionFormData) => {
    // Construire le message WhatsApp avec les données
    const message = encodeURIComponent(
      `Bonjour ! Je souhaite m'inscrire à la formation The Million Within Academy.\n\n` +
      `📋 Formule choisie : ${currentPlan.title}\n` +
      `💰 Prix : ${currentPlan.price.EUR}€ / ${currentPlan.price.FCFA.toLocaleString('fr-FR')} FCFA\n\n` +
      `👤 Prénom : ${data.firstName}\n` +
      `👤 Nom : ${data.lastName}\n` +
      `📧 Email : ${data.email}\n` +
      `📱 Téléphone : ${data.phone}\n` +
      `🌍 Pays : ${data.country ?? 'Non renseigné'}\n\n` +
      `💳 Mode de paiement préféré : ${data.paymentMethod}\n\n` +
      `Merci de me confirmer ma place !`
    );

    window.open(
      `https://wa.me/${SITE.whatsapp.replace(/\D/g, '')}?text=${message}`,
      '_blank',
      'noopener,noreferrer',
    );
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto text-center py-20">
        <div className="w-20 h-20 rounded-full bg-green-50 border-4 border-green-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-500" aria-hidden />
        </div>
        <h2 className="font-heading font-bold text-2xl text-neutral-900 mb-3">
          Votre demande a été envoyée ! 🎉
        </h2>
        <p className="text-neutral-600 leading-relaxed mb-8">
          Notre équipe va vous contacter sur WhatsApp dans les prochaines heures
          pour confirmer votre inscription et organiser le paiement.
        </p>
        <div className="flex flex-col gap-3">
          <a
            href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors"
          >
            Contacter sur WhatsApp directement
          </a>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="text-sm text-neutral-500 hover:text-neutral-700 underline"
          >
            Revenir au formulaire
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">

      {/* ── Colonne gauche : Résumé de la formule ─────────────── */}
      <aside>
        <h2 className="font-heading font-bold text-2xl text-neutral-900 mb-6">
          Votre formule choisie
        </h2>

        {/* Sélection de plan */}
        <div className="space-y-3 mb-8">
          {PRICING_PLANS.map((plan) => (
            <button
              key={plan.id}
              type="button"
              onClick={() => {
                setSelectedPlan(plan.id);
                setValue('planId', plan.id as InscriptionFormData['planId']);
              }}
              className={cn(
                'w-full text-left p-4 rounded-2xl border-2 transition-all duration-200',
                selectedPlan === plan.id
                  ? 'border-primary-500 bg-primary-50 shadow-brand-sm'
                  : 'border-neutral-200 bg-white hover:border-neutral-300',
              )}
              aria-pressed={selectedPlan === plan.id}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className={cn(
                      'font-heading font-bold text-sm',
                      selectedPlan === plan.id ? 'text-primary-700' : 'text-neutral-900',
                    )}>
                      {plan.title}
                    </span>
                    {plan.badge && (
                      <Badge variant="popular" size="sm">{plan.badge}</Badge>
                    )}
                  </div>
                  <span className="text-xs text-neutral-500">{plan.subtitle}</span>
                </div>
                <div className="text-right shrink-0">
                  <p className={cn(
                    'font-heading font-bold text-base',
                    selectedPlan === plan.id ? 'text-primary-600' : 'text-neutral-800',
                  )}>
                    {plan.price.EUR}€
                  </p>
                  <p className="text-[11px] text-neutral-400">
                    {plan.price.FCFA.toLocaleString('fr-FR')} FCFA
                  </p>
                </div>
                <div className={cn(
                  'w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors',
                  selectedPlan === plan.id
                    ? 'border-primary-500 bg-primary-500'
                    : 'border-neutral-300',
                )}>
                  {selectedPlan === plan.id && (
                    <div className="w-2 h-2 rounded-full bg-white" aria-hidden />
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Ce qui est inclus */}
        {currentPlan.features.length > 0 && (
          <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200">
            <p className="font-semibold text-neutral-900 text-sm mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-secondary-500" aria-hidden />
              Inclus dans cette formule :
            </p>
            <ul className="space-y-2">
              {currentPlan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-neutral-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-secondary-500 shrink-0 mt-0.5" aria-hidden />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Preuve sociale */}
        <div className="mt-5 flex items-center gap-3 p-4 rounded-2xl bg-gold-100 border border-gold-200">
          <div className="flex gap-0.5 shrink-0">
            {[1,2,3,4,5].map((s) => (
              <Star key={s} className="w-3.5 h-3.5 fill-gold-500 text-gold-500" aria-hidden />
            ))}
          </div>
          <p className="text-sm text-neutral-700 font-medium">
            <strong>673+ entrepreneurs</strong> ont déjà rejoint l&apos;academy. Rejoignez-les !
          </p>
        </div>
      </aside>

      {/* ── Colonne droite : Formulaire ───────────────────────── */}
      <div>
        <h2 className="font-heading font-bold text-2xl text-neutral-900 mb-6">
          Vos informations
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
          {/* Prénom + Nom */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-semibold text-neutral-700 mb-1.5">
                Prénom <span className="text-red-500">*</span>
              </label>
              <input
                id="firstName"
                type="text"
                autoComplete="given-name"
                placeholder="Votre prénom"
                className={cn(
                  'w-full h-12 px-4 rounded-xl border-2 bg-white text-neutral-900 text-sm',
                  'placeholder:text-neutral-400 transition-all duration-200',
                  'focus:outline-none focus:ring-4 focus:ring-primary-100',
                  errors.firstName
                    ? 'border-red-400 focus:border-red-500'
                    : 'border-neutral-200 focus:border-primary-400',
                )}
                {...register('firstName')}
                aria-invalid={!!errors.firstName}
                aria-describedby={errors.firstName ? 'firstName-error' : undefined}
              />
              <FieldError message={errors.firstName?.message} />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-semibold text-neutral-700 mb-1.5">
                Nom <span className="text-red-500">*</span>
              </label>
              <input
                id="lastName"
                type="text"
                autoComplete="family-name"
                placeholder="Votre nom"
                className={cn(
                  'w-full h-12 px-4 rounded-xl border-2 bg-white text-neutral-900 text-sm',
                  'placeholder:text-neutral-400 transition-all duration-200',
                  'focus:outline-none focus:ring-4 focus:ring-primary-100',
                  errors.lastName
                    ? 'border-red-400 focus:border-red-500'
                    : 'border-neutral-200 focus:border-primary-400',
                )}
                {...register('lastName')}
                aria-invalid={!!errors.lastName}
              />
              <FieldError message={errors.lastName?.message} />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-1.5">
              Adresse email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="votre@email.com"
              className={cn(
                'w-full h-12 px-4 rounded-xl border-2 bg-white text-neutral-900 text-sm',
                'placeholder:text-neutral-400 transition-all duration-200',
                'focus:outline-none focus:ring-4 focus:ring-primary-100',
                errors.email
                  ? 'border-red-400 focus:border-red-500'
                  : 'border-neutral-200 focus:border-primary-400',
              )}
              {...register('email')}
              aria-invalid={!!errors.email}
            />
            <FieldError message={errors.email?.message} />
          </div>

          {/* Téléphone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-neutral-700 mb-1.5">
              Numéro de téléphone / WhatsApp <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+221 77 000 00 00"
              className={cn(
                'w-full h-12 px-4 rounded-xl border-2 bg-white text-neutral-900 text-sm',
                'placeholder:text-neutral-400 transition-all duration-200',
                'focus:outline-none focus:ring-4 focus:ring-primary-100',
                errors.phone
                  ? 'border-red-400 focus:border-red-500'
                  : 'border-neutral-200 focus:border-primary-400',
              )}
              {...register('phone')}
              aria-invalid={!!errors.phone}
            />
            <FieldError message={errors.phone?.message} />
          </div>

          {/* Pays */}
          <div>
            <label htmlFor="country" className="block text-sm font-semibold text-neutral-700 mb-1.5">
              Pays de résidence
            </label>
            <select
              id="country"
              className={cn(
                'w-full h-12 px-4 rounded-xl border-2 bg-white text-neutral-900 text-sm',
                'transition-all duration-200 cursor-pointer',
                'focus:outline-none focus:ring-4 focus:ring-primary-100',
                'border-neutral-200 focus:border-primary-400',
              )}
              {...register('country')}
            >
              <option value="">Sélectionnez votre pays</option>
              {COUNTRIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Mode de paiement */}
          <div>
            <p className="block text-sm font-semibold text-neutral-700 mb-3">
              Mode de paiement préféré <span className="text-red-500">*</span>
            </p>
            <div className="grid grid-cols-3 gap-3" role="group" aria-label="Mode de paiement">
              {PAYMENT_METHODS.map((method) => {
                const isSelected = watch('paymentMethod') === method.id;
                return (
                  <button
                    key={method.id}
                    type="button"
                    onClick={() => setValue('paymentMethod', method.id as InscriptionFormData['paymentMethod'])}
                    className={cn(
                      'flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl border-2 transition-all duration-200',
                      isSelected
                        ? 'border-primary-500 bg-primary-50 shadow-brand-sm'
                        : 'border-neutral-200 bg-white hover:border-neutral-300',
                    )}
                    aria-pressed={isSelected}
                  >
                    <span className="text-xl" aria-hidden>{method.icon}</span>
                    <span className={cn(
                      'text-xs font-semibold',
                      isSelected ? 'text-primary-700' : 'text-neutral-600',
                    )}>
                      {method.label}
                    </span>
                  </button>
                );
              })}
            </div>
            <FieldError message={errors.paymentMethod?.message} />
          </div>

          {/* CGV */}
          <div>
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                className="mt-0.5 w-4 h-4 rounded border-neutral-300 text-primary-500 focus:ring-primary-400 cursor-pointer"
                {...register('acceptCGV')}
                aria-invalid={!!errors.acceptCGV}
              />
              <span className="text-sm text-neutral-600 leading-relaxed">
                J&apos;accepte les{' '}
                <a href="/cgv" target="_blank" rel="noopener noreferrer"
                  className="text-primary-600 underline underline-offset-2 hover:text-primary-700">
                  Conditions Générales de Vente
                </a>{' '}
                et la{' '}
                <a href="/confidentialite" target="_blank" rel="noopener noreferrer"
                  className="text-primary-600 underline underline-offset-2 hover:text-primary-700">
                  politique de confidentialité
                </a>. <span className="text-red-500">*</span>
              </span>
            </label>
            <FieldError message={errors.acceptCGV?.message} />
          </div>

          {/* Résumé prix */}
          <div className="py-4 px-5 rounded-2xl bg-neutral-900 text-white">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-white/60 text-xs font-medium uppercase tracking-wider mb-0.5">
                  Total à régler
                </p>
                <p className="font-heading font-black text-2xl text-gold-300">
                  {currentPlan.price.EUR}€
                </p>
                <p className="text-white/50 text-xs mt-0.5">
                  ≈ {currentPlan.price.FCFA.toLocaleString('fr-FR')} FCFA
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-white/50 font-medium">{currentPlan.title}</p>
                <p className="text-xs text-white/40 mt-0.5">Paiement sécurisé</p>
              </div>
            </div>
          </div>

          {/* Bouton submit */}
          <Button
            type="submit"
            variant="cta"
            size="lg"
            fullWidth
            loading={isSubmitting}
            disabled={isSubmitting}
            icon={<ArrowRight className="w-5 h-5" />}
            iconPosition="right"
          >
            {isSubmitting ? 'Traitement en cours...' : 'Confirmer mon inscription'}
          </Button>

          {/* Social proof sous le bouton */}
          <div className="flex items-center justify-center gap-2 text-sm text-neutral-500">
            <Users2 className="w-4 h-4" aria-hidden />
            <span>
              <strong className="text-neutral-700">673+ entrepreneurs</strong> ont déjà franchi ce pas
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default InscriptionForm;
