import { z } from 'zod';

export const inscriptionSchema = z.object({
  planId: z.enum(['standard', 'accelere-5j', 'non-accelere-suivi', 'pro'], {
    required_error: 'Veuillez choisir une formule',
  }),
  firstName: z
    .string()
    .min(1, 'Le prénom est requis')
    .min(2, 'Le prénom doit contenir au moins 2 caractères')
    .max(100, 'Le prénom est trop long'),
  lastName: z
    .string()
    .min(1, 'Le nom est requis')
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(100, 'Le nom est trop long'),
  email: z
    .string()
    .min(1, "L'email est requis")
    .email("Format d'email invalide"),
  phone: z
    .string()
    .min(1, 'Le numéro de téléphone est requis')
    .min(8, 'Numéro de téléphone invalide')
    .max(20, 'Numéro de téléphone trop long'),
  country: z.string().optional(),
  paymentMethod: z.enum(['wave', 'orange-money', 'card'], {
    required_error: 'Veuillez choisir un moyen de paiement',
  }),
  acceptCGV: z
    .boolean()
    .refine((v) => v === true, { message: 'Vous devez accepter les CGV pour continuer' }),
});

export type InscriptionFormData = z.infer<typeof inscriptionSchema>;
