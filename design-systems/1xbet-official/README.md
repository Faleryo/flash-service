# 1xBet — Design System Officiel (v2)

Tokens extraits directement du CSS officiel de **1xbetmaroc.com**
(`https://v3.traincdn.com/genfiles/site-admin/colors/*.css`).

Mode **clair**, fond blanc, header bleu medium, **CTA vert lime** — l'identité authentique 1xBet.

---

## Fichiers

| Fichier | Usage |
|---|---|
| `tokens.css` | Variables CSS à importer ou copier dans `<style>` |
| `tokens.json` | Format Design Tokens Community Group |
| `README.md` | Ce fichier |

```html
<link rel="stylesheet" href="design-systems/1xbet-official/tokens.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

---

## Palette

### Bleu corporate — header, nav, sections sombres

| Token | Hex | HSL d'origine | Usage |
|---|---|---|---|
| `--brand` | `#266AA5` | hsl(208,62%,40%) | **Header principal, nav** |
| `--brand-2` | `#2B77B9` | hsl(208,62%,45%) | Sections, panels |
| `--brand-3` | `#3387D0` | hsl(208,63%,51%) | Hover, état clair |
| `--brand-deep` | `#1C4268` | hsl(210,57%,26%) | Bordures sombres |
| `--brand-sep` | `#4780B2` | hsl(208,43%,49%) | Séparateurs sur fond bleu |

### Bleu action — liens, actifs

| Token | Hex | Usage |
|---|---|---|
| `--blue` | `#3DA4FF` | Liens, états actifs, tabs sélectionnés |
| `--blue-strong` | `#2193F6` | Hover |

### Vert lime — **CTA principal officiel**

> C'est **LE** vert 1xBet, présent sur tous les CTA ("S'inscrire", "Se connecter", "Déposer").

| Token | Hex | Usage |
|---|---|---|
| `--green` | `#92C638` | **Bouton CTA principal** |
| `--green-bright` | `#A6E240` | Badge LIVE, highlight |
| `--green-dim` / `-mid` / `-glow` | rgba | Fonds, bordures, glow |

### Orange — bonus / code promo (spécifique Flash Service)

> Réservé aux montants XOF, code CMD10, badges promo. **Ne jamais sur les CTA.**

| Token | Hex | Usage |
|---|---|---|
| `--accent` | `#f5a623` | Code promo, montants bonus |
| `--accent-dark` | `#c47d00` | Orange foncé sur fond clair |

### Surfaces & texte (mode clair)

| Token | Hex | Usage |
|---|---|---|
| `--bg` | `#ffffff` | Fond page |
| `--bg-2` | `#f4f6f8` | Sections alternées |
| `--bg-hover` | `#eaeef2` | Hover surface |
| `--ink` | `#232323` | Texte principal |
| `--ink-2` | `#5a6470` | Texte secondaire |
| `--ink-mute` | `#8a939e` | Placeholder, tertiaire |
| `--on-brand` | `#ffffff` | Texte sur header bleu |
| `--line` | `#e3e7eb` | Bordure légère |
| `--line-strong` | `#c8cfd6` | Bordure visible |

---

## Typographie

| Token | Valeur | Usage |
|---|---|---|
| `--ff-ui` / `--ff-display` | `'Inter', system-ui, sans-serif` | **Toute la UI** |
| `--ff-mono` | `'JetBrains Mono', ui-monospace, monospace` | Chiffres, cotes |

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

---

## Rayons & espacement

| Token | Valeur | Usage |
|---|---|---|
| `--r-card` | `8px` | **Cartes, inputs, boutons** (officiel 1xBet) |
| `--r-pill` | `999px` | Pastilles, tags |
| `--gap` | `8px` | Gap entre éléments |
| `--gutter` | `0.5rem` | Padding latéral |

---

## Règles d'usage

| Situation | Token |
|---|---|
| Header / top nav | `--brand` (#266AA5) |
| Fond de page body | `--bg` (#ffffff) |
| Section alternée | `--bg-2` (#f4f6f8) |
| **Bouton "S'inscrire" / "Se connecter" / "Déposer"** | `--green` (#92C638) |
| Lien actif, tab sélectionnée | `--blue` (#3DA4FF) |
| Code promo CMD10 / montant XOF | `--accent` (#f5a623) |
| Badge LIVE | `--green-bright` (#A6E240) |
| Erreur / perte | `--bad` (#FE5659) |
| Texte principal | `--ink` (#232323) |
| Texte secondaire | `--ink-2` (#5a6470) |

---

## Source

Tokens vérifiés contre :
- `https://v3.traincdn.com/genfiles/site-admin/colors/5d97f18506df3cab94f6f536a1981da4.css`
- `https://v3.traincdn.com/genfiles/site-admin/css_vars/06c9b68c4f5819c83cc220a9024bbee1.css`
- Captures écran `1xbetmaroc.com/fr/user/login` (login + menu mobile)
