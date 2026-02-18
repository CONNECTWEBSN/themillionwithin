# 🔍 AUDIT COMPLET - THE MILLION WITHIN ACADEMY

**URL:** https://www.themillionwithin.com/  
**Date d'audit:** 17 février 2026  
**Auditeur:** Senior UX Designer & Full-Stack Developer

---

## 📋 RÉSUMÉ EXÉCUTIF

| Catégorie | Score | Verdict |
|-----------|-------|---------|
| UX/UI Design | 3/10 | ⚠️ Refonte majeure requise |
| Performance | 4/10 | ⚠️ Optimisations critiques |
| SEO | 5/10 | 🔶 Améliorations nécessaires |
| Accessibilité | 2/10 | 🔴 Non conforme |
| Mobile | 3/10 | ⚠️ Expérience dégradée |

**Problème majeur identifié:** Le site utilise des assets provenant d'un autre domaine (`ddsmedicalsenegal.com`), ce qui indique soit un template non personnalisé, soit une erreur de configuration critique.

---

## 1. STRUCTURE ACTUELLE

### 1.1 Pages existantes

| Page | URL | Fonction |
|------|-----|----------|
| **Homepage** | `/` | Landing page principale |
| **Inscription** | `/inscription` | Page de checkout/paiement |

**Constat:** Structure minimaliste (2 pages), ce qui est correct pour un funnel de vente simple.

### 1.2 Sections de la Homepage

```
┌─────────────────────────────────────────┐
│ HERO SLIDER (2 slides)                  │  ← Carousel automatique
│ - "Passez de l'idée à la croissance"    │
│ - "Une Formation, Un éveil, Un changement"│
├─────────────────────────────────────────┤
│ FEATURES (5 piliers numérotés)          │  ← Icônes + descriptions
├─────────────────────────────────────────┤
│ ABOUT US                                │  ← Mission + photo équipe
│ - "Aider les femmes à bâtir..."         │
├─────────────────────────────────────────┤
│ TÉMOIGNAGES VIDÉO (Master 5 jours)      │  ← 32 vidéos témoignages
├─────────────────────────────────────────┤
│ COUNTDOWN TIMER                         │  ← Urgence inscription
├─────────────────────────────────────────┤
│ CTA INSCRIPTION                         │  ← Boutons WhatsApp + S'inscrire
├─────────────────────────────────────────┤
│ STATS (chiffres clés)                   │  ← 3 cours, 496 étudiants, etc.
├─────────────────────────────────────────┤
│ TÉMOIGNAGES ÉTUDIANTS (6 vidéos)        │  ← Premiers étudiants
├─────────────────────────────────────────┤
│ ÉQUIPE (4 membres)                      │  ← CEO + 3 Capitaines Alumni
├─────────────────────────────────────────┤
│ ÉTAPES FORMATION (5 jours)              │  ← Jour par jour
├─────────────────────────────────────────┤
│ LANGUE                                  │  ← Français + Wolof
├─────────────────────────────────────────┤
│ OFFRES/PRICING (4 formules)             │  ← Standard à PRO
├─────────────────────────────────────────┤
│ PARTENAIRES (logos)                     │  ← 8 logos partenaires
├─────────────────────────────────────────┤
│ FOOTER                                  │  ← Copyright minimal
└─────────────────────────────────────────┘
```

### 1.3 Navigation et liens

| Élément | Destination | Type |
|---------|-------------|------|
| "Nous contacter" | WhatsApp (+1 281 203 1065) | Externe |
| "S'inscrire" | /inscription | Interne |
| CTAs pricing | /inscription | Interne |
| Vidéos témoignages | CloudFront CDN | Externe |

**Problème critique:** Aucune navigation principale (header fixe absent).

---

## 2. PROBLÈMES UX/UI IDENTIFIÉS

### 🔴 HIGH PRIORITY

#### 2.1 Hiérarchie visuelle défaillante
- **Double H6 dans le Hero:** "The Million Within Académie" et "La richesse Inée" sont tous deux en H6, créant une confusion hiérarchique
- **Titre principal en H1** mais suivi de multiples H2 non structurés
- **Incohérence des tailles:** Les sections n'ont pas de progression logique

#### 2.2 Assets provenant d'un autre domaine
```
⚠️ CRITIQUE: Toutes les images chargent depuis:
https://ddsmedicalsenegal.com/assets/img/
```
**Impact:**
- Dépendance à un serveur tiers
- Temps de chargement augmenté (DNS supplémentaire)
- Risque de broken images si le serveur tiers tombe
- Image de marque compromise

#### 2.3 Hero Slider problématique
- **Deux slides avec messages différents** → dilue la proposition de valeur
- **Auto-rotation** sans contrôle utilisateur visible
- **Texte difficile à lire** sur fond d'image

#### 2.4 Surcharge de témoignages vidéo
- **32 vidéos** dans une section + **6 autres** plus bas
- **Aucune prévisualisation/thumbnail** - juste des liens
- **Pas de lecture inline** - redirige vers CloudFront
- **UX catastrophique:** L'utilisateur doit cliquer pour voir chaque vidéo

### 🟠 MEDIUM PRIORITY

#### 2.5 Espacement incohérent
- Sections avec marges variables
- Pas de système de grille cohérent
- Padding insuffisant sur mobile

#### 2.6 Typographie peu lisible
- **Faute d'orthographe dans le branding:** "La richesse Inée" (devrait être "Innée")
- Contraste insuffisant sur certains textes
- Mélange de styles typographiques

#### 2.7 Countdown Timer
- **Affiche 00:00:00:00** → Le timer est cassé ou la date est passée
- Crée une impression négative (événement terminé?)

#### 2.8 Pricing Cards
- **4 formules** avec des noms similaires créant de la confusion
- Prix barrés sans contexte (1650€ → 285€)
- Pas de comparaison visuelle claire

### 🟢 LOW PRIORITY

#### 2.9 Manque de micro-interactions
- Pas d'animations au scroll
- Hover states basiques
- Pas de feedback visuel sur les CTAs

#### 2.10 Footer minimal
- Aucun lien utile
- Pas de mentions légales
- Pas de politique de confidentialité

---

## 3. PROBLÈMES TECHNIQUES

### 🔴 HIGH PRIORITY

#### 3.1 Performance estimée

| Métrique | Estimation | Cible |
|----------|------------|-------|
| First Contentful Paint | ~3.5s | < 1.8s |
| Largest Contentful Paint | ~5s+ | < 2.5s |
| Time to Interactive | ~6s+ | < 3.8s |
| Total Page Weight | ~5MB+ | < 2MB |

**Causes principales:**
- 38+ vidéos référencées (même si lazy-loaded)
- Images non optimisées depuis serveur externe
- Pas de compression visible
- Multiples requêtes DNS (themillionwithin.com + ddsmedicalsenegal.com + d1yei2z3i6k35z.cloudfront.net)

#### 3.2 Assets mal configurés
```
Images hébergées sur: ddsmedicalsenegal.com
Vidéos hébergées sur: d1yei2z3i6k35z.cloudfront.net
```
- **Dépendance critique** à des domaines tiers
- **Aucune gestion des erreurs** si les assets sont indisponibles

#### 3.3 Code probablement dupliqué
- Template générique réutilisé sans personnalisation
- Sections répétitives (2 blocs de témoignages quasi-identiques)

### 🟠 MEDIUM PRIORITY

#### 3.4 Manque d'optimisation des images
- Pas de formats modernes (WebP, AVIF)
- Pas de srcset pour le responsive
- Images chargées en pleine résolution

#### 3.5 JavaScript du countdown cassé
- Le timer affiche 00:00:00:00
- Date cible probablement mal configurée ou passée

### 🟢 LOW PRIORITY

#### 3.6 Pas de Service Worker
- Pas de mode offline
- Pas de caching avancé

---

## 4. SEO EXISTANT À PRÉSERVER

### 4.0 Éléments à documenter obligatoirement

| Élément | Action | Priorité |
|---------|--------|----------|
| URLs des pages | Conserver à l'identique | 🔴 HIGH |
| Balises H1 | Migrer et améliorer | 🔴 HIGH |
| Meta descriptions | Réécrire en mieux | 🟠 MEDIUM |
| Images avec trafic | Garder les noms de fichiers | 🟠 MEDIUM |
| Liens entrants (backlinks) | Ne pas casser les URLs | 🔴 HIGH |

---

### 4.1 Structure des URLs ✅

| URL | Verdict |
|-----|---------|
| `/` | ✅ Propre |
| `/inscription` | ✅ Propre, sémantique |

### 4.2 Balises à conserver/améliorer

#### Titres H1 (À CONSERVER)
```html
<!-- Homepage - Slide 1 -->
<h1>Passez de l'idée à la croissance, en toute confiance.</h1>

<!-- Homepage - Slide 2 -->
<h1>Une Formation, Un eveil, Un changement</h1>
```
⚠️ **Problème:** Deux H1 dans le slider (un seul H1 par page recommandé)

#### Titres H2 importants
```html
<h2>quel est notre mission? Aider les femmes à bâtir une entreprise prospère...</h2>
<h2>Témoignages de quelques des meilleurs étudiants...</h2>
<h2>Créer/développer et organiser votre entreprise facilement</h2>
<h2>Une équipe dynamique</h2>
<h2>Les differentes Etapes de la formation</h2>
<h2>Langue: Française et Wolof</h2>
<h2>Les Formules</h2>
```

### 4.3 Meta descriptions
**Non détectées dans le fetch** → À vérifier dans le code source complet

### 4.4 Ancres importantes à préserver
- `https://api.whatsapp.com/send?phone=12812031065` - Contact WhatsApp
- `/inscription` - Page de conversion

---

## 5. CONTENU À CONSERVER

### 5.1 Textes clés (Value Proposition) ⭐

#### Mission Statement (EXCELLENT - À GARDER)
> "Nous croyons qu'aucune femme ne devrait avoir à choisir entre sa famille et ses rêves. Nous savons ce que c'est que de traverser ce moment de doute, après la naissance d'un enfant, où l'on se demande s'il faut mettre de côté ses ambitions."

#### Promesse principale
> "Aider les femmes à bâtir une entreprise prospère sans renoncer à leur famille."

#### USP (Unique Selling Proposition)
> "Créer/développer et organiser votre entreprise facilement: Sans capital de départ, Sans quitter votre domicile"

### 5.2 Preuves sociales (CAPITAL - À METTRE EN VALEUR)

| Statistique | Valeur | Crédibilité |
|-------------|--------|-------------|
| Expérience | 10 ans | ✅ Fort |
| Étudiants | 496+ | ✅ Fort |
| Business accompagnés | 319+ | ✅ Fort |
| Instructeurs | 4 | ✅ Fort |
| Témoignages vidéo | 38+ | ✅ Très fort |

### 5.3 Équipe à mettre en avant

| Nom | Rôle | Photo |
|-----|------|-------|
| Mme Sall | CEO / Formatrice | ✅ Disponible |
| Mme Dieng Anna | Capitaine Alumni | ✅ Disponible |
| Mme Seck Ramatoulaye | Capitaine Alumni | ✅ Disponible |
| Mme Diop Khadidiatou | Capitaine Alumni | ✅ Disponible |

### 5.4 Offres commerciales (STRUCTURE À GARDER)

| Formule | Prix | Cible |
|---------|------|-------|
| Master Standard | 89 500 FCFA / 139€ / 145$ | Autonome |
| Master Accéléré 5j | 185 000 FCFA / 285€ / 299$ | Groupe intensif |
| Master Non Accéléré + Suivi | 185 000 FCFA / 285€ / 299$ | Flexible + coaching |
| Master PRO | 981 500 FCFA / 1499€ / 1599$ | Chefs d'entreprise |

### 5.5 Partenaires (logos à conserver)
- Tontine Express (financement 1er prix)
- China Online LTD (bon d'achat 2e prix)
- + 6 autres partenaires visibles

### 5.6 Témoignages vidéo (URLs à conserver)
**Témoignages clés avec noms:**
- Ramatoulaye Wade (Canada)
- Ramatoulaye Séck (France)
- Dior Diagne (Sénégal)
- Khadidiatou Diop (Espagne)
- Mame Diarra Sall (Italie)
- Collette Basse (Sénégal)

---

## 6. RECOMMANDATIONS PRIORISÉES

### 🔴 PRIORITÉ IMMÉDIATE (Semaine 1)

1. **Migrer tous les assets sur le domaine principal**
   - Copier images depuis ddsmedicalsenegal.com
   - Optimiser en WebP
   - Héberger localement ou sur CDN dédié

2. **Réparer le countdown timer**
   - Mettre à jour la date cible (09 Novembre 2025 → date future)
   - Ou retirer complètement si non pertinent

3. **Corriger les fautes d'orthographe**
   - "Inée" → "Innée"
   - "eveil" → "éveil"
   - "éxperience" → "expérience"
   - "differentes" → "différentes"

4. **Simplifier le Hero**
   - Un seul message fort, pas de carousel
   - Proposition de valeur claire en 8 mots max

### 🟠 PRIORITÉ HAUTE (Semaines 2-3)

5. **Restructurer les témoignages**
   - Sélectionner 6-8 témoignages les plus impactants
   - Créer des thumbnails attractifs
   - Implémenter un player vidéo inline

6. **Améliorer la navigation**
   - Header fixe avec logo + CTA
   - Ancres vers sections clés
   - Menu mobile hamburger

7. **Optimiser le pricing**
   - Tableau comparatif clair
   - Mettre en évidence la formule recommandée
   - Ajouter des badges (Populaire, Meilleur rapport)

### 🟢 PRIORITÉ NORMALE (Mois 1-2)

8. **Refonte complète du design**
   - Système de design cohérent
   - Palette de couleurs définie
   - Typographie hiérarchisée

9. **Ajouter les mentions légales**
   - CGV
   - Politique de confidentialité
   - Mentions légales

10. **Optimiser pour le SEO**
    - Meta descriptions uniques
    - Schema.org pour les avis/formations
    - Sitemap XML

---

## 7. BUDGET ESTIMATIF DE REFONTE

| Phase | Scope | Estimation |
|-------|-------|------------|
| Quick Wins | Corrections critiques | 2-3 jours |
| Refonte UI | Design moderne | 1-2 semaines |
| Optimisation | Performance + SEO | 1 semaine |
| **TOTAL** | | **3-4 semaines** |

---

## 8. CONCLUSION

Le site The Million Within Academy possède un **contenu de qualité** (témoignages, équipe, offres claires) mais souffre d'une **exécution technique et design médiocre**. 

Le problème le plus urgent est la **dépendance aux assets d'un domaine tiers** (ddsmedicalsenegal.com), qui suggère l'utilisation d'un template non personnalisé et représente un risque majeur de disponibilité.

Une refonte ciblée permettrait de **capitaliser sur les atouts existants** (nombreux témoignages, proposition de valeur claire, équipe identifiée) tout en corrigeant les faiblesses UX/UI et techniques.

---

*Rapport généré le 17 février 2026*
