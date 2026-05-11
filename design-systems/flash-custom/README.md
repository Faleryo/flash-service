# Flash Service — Design System Custom

Système de design original du site Flash Service (agent 1xBet Togo).  
Version sauvegardée avant application du thème 1xBet officiel.

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
<link rel="stylesheet" href="design-systems/flash-custom/tokens.css">

<!-- Option 2 : copier-coller le contenu de tokens.css dans votre <style> -->
```

---

## Palette

### Fonds (arrière-plans)

| Token CSS | Valeur | Description |
|---|---|---|
| `--dark` | `#0d1b2a` | Fond principal — navy sombre |
| `--dark-2` | `#0f2035` | Sections alternées |
| `--dark-3` | `#132844` | Cartes, panels |
| `--dark-4` | `#1a3350` | Hover, bordures |
| `--light` | `#fdfcf7` | Fond clair réservé |

### Orange — Bonus / Code promo

> Réservé exclusivement aux éléments de promotion : code CMD10, montants bonus, highlights chiffres.

| Token CSS | Valeur | Description |
|---|---|---|
| `--accent` | `#f5a623` | Orange principal |
| `--accent-dim` | `rgba(245,166,35,.12)` | Fond badge transparent |
| `--accent-mid` | `rgba(245,166,35,.28)` | Bordure, séparateur |
| `--accent-glow` | `rgba(245,166,35,.38)` | Box-shadow glow |
| `--accent-dark` | `#c47d00` | Texte orange sur fond clair |

### Bleu — Actions / CTA

> Couleur principale des boutons d'action, nav, liens interactifs.

| Token CSS | Valeur | Description |
|---|---|---|
| `--blue` | `#1652f0` | Bleu électrique — CTA principal |
| `--blue-2` | `#0d3fd1` | Hover des boutons bleus |
| `--blue-dim` | `rgba(22,82,240,.14)` | Fond transparent bleu |
| `--blue-mid` | `rgba(22,82,240,.35)` | Bordure bleue |
| `--blue-glow` | `rgba(22,82,240,.42)` | Box-shadow glow bleu |

### Vert — Live / Gains

| Token CSS | Valeur | Description |
|---|---|---|
| `--green` | `#00c853` | Badge LIVE, validation, gains |
| `--green-dim` | `rgba(0,200,83,.12)` | Fond transparent vert |

---

## Typographie

| Token CSS | Valeur | Usage |
|---|---|---|
| `--ff-display` | `'Fraunces', serif` | Titres héro, sections — italique bold |
| `--ff-ui` | `'Syne', sans-serif` | Corps, boutons, labels |
| `--ff-mono` | `'JetBrains Mono', monospace` | Chiffres, codes, tags |

```html
<!-- Google Fonts à inclure dans <head> -->
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@1,9..144,700;1,9..144,900&family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
```

---

## Règles d'usage

- **Orange** → bonus, code promo, montants XOF uniquement
- **Bleu** → tous les boutons d'action, liens de navigation
- **Vert** → indicateurs live, succès, gains
- **Jamais** d'orange sur un bouton CTA principal
