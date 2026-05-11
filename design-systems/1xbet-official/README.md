# 1xBet — Design System Officiel

Système de design basé sur l'identité visuelle officielle de la plateforme 1xBet.  
Appliqué sur le site Flash Service (agent officiel 1xBet Togo, code promo CMD10).

---

## Fichiers

| Fichier | Usage |
|---|---|
| `tokens.css` | Variables CSS à importer dans `<style>` ou `<link>` |
| `tokens.json` | Tokens au format Design Tokens Community Group |
| `README.md` | Ce fichier |

## Comment l'utiliser

```html
<!-- Option 1 : lien externe -->
<link rel="stylesheet" href="design-systems/1xbet-official/tokens.css">

<!-- Option 2 : copier-coller le contenu de tokens.css dans votre <style> -->
```

---

## Palette

### Fonds — Bleu Corporate 1xBet

> `#003087` est la couleur signature 1xBet. Elle apparaît sur leur header, nav, et fond des pages principales.

| Token CSS | Valeur | Description |
|---|---|---|
| `--dark` | `#003087` | **Bleu corporate 1xBet** — fond principal |
| `--dark-2` | `#002070` | Sections alternées (légèrement plus sombre) |
| `--dark-3` | `#01195a` | Cartes, panels |
| `--dark-4` | `#012880` | Hover, bordures actives |
| `--light` | `#fdfcf7` | Réservé |

### Orange — Bonus / Promotions

> Réservé aux éléments liés aux bonus : code promo CMD10, montants XOF, badges promotion.  
> **Ne jamais utiliser sur les boutons CTA.**

| Token CSS | Valeur | Description |
|---|---|---|
| `--accent` | `#f5a623` | Orange — bonus, code promo, highlights |
| `--accent-dim` | `rgba(245,166,35,.12)` | Fond badge transparent |
| `--accent-mid` | `rgba(245,166,35,.28)` | Bordure, séparateur |
| `--accent-glow` | `rgba(245,166,35,.38)` | Box-shadow glow |
| `--accent-dark` | `#c47d00` | Orange texte sur fond clair |

### Bleu — Actions / CTA Interactifs

> Deux niveaux de bleu : `#1652f0` pour les boutons interactifs, `#003087` pour les structures (même que `--dark`).

| Token CSS | Valeur | Description |
|---|---|---|
| `--blue` | `#1652f0` | **Bleu électrique** — CTA principal, boutons, liens actifs |
| `--blue-corporate` | `#003087` | Bleu corporate — header, nav |
| `--blue-2` | `#0d3fd1` | Hover des boutons CTA |
| `--blue-dim` | `rgba(22,82,240,.14)` | Fond bleu transparent |
| `--blue-mid` | `rgba(22,82,240,.35)` | Bordure bleue |
| `--blue-glow` | `rgba(22,82,240,.42)` | Box-shadow glow bleu |

### Vert — Live / Succès

| Token CSS | Valeur | Description |
|---|---|---|
| `--green` | `#00c853` | Badge LIVE, gains, validation |
| `--green-dim` | `rgba(0,200,83,.12)` | Fond transparent vert |

---

## Typographie

| Token CSS | Valeur | Usage |
|---|---|---|
| `--ff-display` | `'Fraunces', serif` | Titres héro, sections — italique bold |
| `--ff-ui` | `'Syne', sans-serif` | Corps, boutons, labels |
| `--ff-mono` | `'JetBrains Mono', monospace` | Chiffres, cotes, codes |

```html
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@1,9..144,700;1,9..144,900&family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
```

---

## Règles d'usage 1xBet

| Situation | Couleur à utiliser |
|---|---|
| Fond de page / header | `--dark` (`#003087`) |
| Bouton principal "S'inscrire", "Déposer" | `--blue` (`#1652f0`) |
| Code promo, montant bonus | `--accent` (`#f5a623`) |
| Badge LIVE, score en cours | `--green` (`#00c853`) |
| Texte secondaire | `rgba(255,255,255,.50)` |
| Bordures subtiles | `rgba(255,255,255,.08)` |

---

## Différences avec Flash Custom

| Token | Flash Custom | 1xBet Officiel |
|---|---|---|
| `--dark` | `#0d1b2a` (navy sombre) | `#003087` (bleu corporate) |
| `--dark-2` | `#0f2035` | `#002070` |
| `--dark-3` | `#132844` | `#01195a` |
| `--dark-4` | `#1a3350` | `#012880` |
| `--blue-corporate` | *(absent)* | `#003087` |
| Typo | Fraunces + Syne + JetBrains | Identique |
| Orange accent | Identique | Identique |
