# Corporate Printing System — Design Theme

> Complete design token reference for the corporate printing system website.
> Version 1.0 · WCAG AA compliant · Production ready

---

## Table of Contents

1. [Brand Colors](#1-brand-colors)
2. [Neutral Palette](#2-neutral-palette)
3. [Functional / Status Colors](#3-functional--status-colors)
4. [Typography Scale](#4-typography-scale)
5. [Recommended Fonts](#5-recommended-fonts)
6. [Spacing Scale](#6-spacing-scale)
7. [Border Radius Tokens](#7-border-radius-tokens)
8. [Shadows & Elevation](#8-shadows--elevation)
9. [Component States](#9-component-states)
10. [Z-Index Scale](#10-z-index-scale)
11. [Breakpoints / Responsive Grid](#11-breakpoints--responsive-grid)
12. [Print Production Specs](#12-print-production-specs)
13. [CSS Variables Reference](#13-css-variables-reference)

---

## 1. Brand Colors

| Color Name       | Hex Code  | RGB                  | CMYK                   | Usage                                      |
|------------------|-----------|----------------------|------------------------|--------------------------------------------|
| Corporate Navy   | `#1B2F5E` | rgb(27, 47, 94)      | C85 M75 Y20 K10        | Primary brand, headers, nav, logo bg       |
| Royal Blue       | `#2C4A8A` | rgb(44, 74, 138)     | C80 M65 Y5 K5          | Buttons, links, interactive elements       |
| Steel Blue       | `#4A7EC7` | rgb(74, 126, 199)    | C65 M45 Y0 K0          | Hover states, icons, secondary actions     |
| Sky Blue         | `#A8C5E8` | rgb(168, 197, 232)   | C35 M10 Y0 K0          | Backgrounds, tints, light fills            |
| Corporate Gold   | `#D4A843` | rgb(212, 168, 67)    | C10 M35 Y80 K5         | Accent, highlights, premium badges         |
| Deep Gold        | `#B8871E` | rgb(184, 135, 30)    | C15 M45 Y90 K10        | Gold hover, borders, active accent         |
| Gold Tint        | `#FDF3DC` | rgb(253, 243, 220)   | C0 M5 Y20 K0           | Gold background fills, highlight rows      |

---

## 2. Neutral Palette

| Color Name    | Hex Code  | RGB                  | Usage                                         |
|---------------|-----------|----------------------|-----------------------------------------------|
| White         | `#FFFFFF` | rgb(255, 255, 255)   | Page background, card surfaces, modals        |
| Ghost White   | `#F4F6FA` | rgb(244, 246, 250)   | App background, sidebar, alt table rows       |
| Cloud Gray    | `#E8ECF2` | rgb(232, 236, 242)   | Borders, dividers, input backgrounds          |
| Silver        | `#D0D6E0` | rgb(208, 214, 224)   | Disabled borders, skeleton loaders            |
| Slate Gray    | `#B0BAC9` | rgb(176, 186, 201)   | Placeholder text, disabled elements           |
| Muted Slate   | `#6B7A93` | rgb(107, 122, 147)   | Secondary text, captions, labels              |
| Medium Gray   | `#4A5568` | rgb(74, 85, 104)     | Tertiary text, footnotes, breadcrumbs         |
| Charcoal      | `#2E3A4E` | rgb(46, 58, 78)      | Body text, primary readable text              |
| Near Black    | `#111827` | rgb(17, 24, 39)      | Headings, high-contrast text, nav links       |

---

## 3. Functional / Status Colors

| Color Name     | Hex Code  | RGB                  | Pair Background | Background Hex | Usage                                 |
|----------------|-----------|----------------------|-----------------|----------------|---------------------------------------|
| Emerald Green  | `#1A7F4B` | rgb(26, 127, 75)     | Mint Tint       | `#EAF7F0`      | Success, printed, approved, active    |
| Mint Tint      | `#EAF7F0` | rgb(234, 247, 240)   | —               | —              | Success background, badge fill        |
| Amber Warning  | `#C27A00` | rgb(194, 122, 0)     | Amber Tint      | `#FEF3E2`      | Warning, in queue, pending review     |
| Amber Tint     | `#FEF3E2` | rgb(254, 243, 226)   | —               | —              | Warning background, alert fill        |
| Alert Red      | `#C0392B` | rgb(192, 57, 43)     | Red Tint        | `#FDECEA`      | Error, failed, rejected, destructive  |
| Red Tint       | `#FDECEA` | rgb(253, 236, 234)   | —               | —              | Error background, danger badge fill   |
| Info Blue      | `#0B6CB5` | rgb(11, 108, 181)    | Sky Tint        | `#E8F2FB`      | Info tooltips, notices, hyperlinks    |
| Sky Tint       | `#E8F2FB` | rgb(232, 242, 251)   | —               | —              | Info background, highlight rows       |
| Draft Gray     | `#6B7A93` | rgb(107, 122, 147)   | Cloud Gray      | `#E8ECF2`      | Draft, inactive, archived items       |

---

## 4. Typography Scale

| Token Name     | Size  | Weight | Line Height | Letter Spacing | Color Name   | Color Hex | Usage                                  |
|----------------|-------|--------|-------------|----------------|--------------|-----------|----------------------------------------|
| Display Hero   | 48px  | 700    | 1.1         | -0.02em        | Near Black   | `#111827` | Landing hero, page title banners       |
| Heading 1      | 36px  | 700    | 1.2         | -0.01em        | Near Black   | `#111827` | Page main headings, section titles     |
| Heading 2      | 28px  | 600    | 1.3         | -0.01em        | Near Black   | `#111827` | Sub-section headings, card titles      |
| Heading 3      | 22px  | 600    | 1.4         | 0em            | Charcoal     | `#2E3A4E` | Panel headings, form section labels    |
| Heading 4      | 18px  | 600    | 1.4         | 0em            | Charcoal     | `#2E3A4E` | Component headings, table group labels |
| Heading 5      | 16px  | 600    | 1.5         | 0em            | Charcoal     | `#2E3A4E` | List headings, sidebar titles          |
| Body Large     | 16px  | 400    | 1.7         | 0em            | Charcoal     | `#2E3A4E` | Lead paragraphs, intro text            |
| Body Default   | 14px  | 400    | 1.6         | 0em            | Charcoal     | `#2E3A4E` | Standard paragraph and UI text         |
| Body Small     | 13px  | 400    | 1.6         | 0em            | Muted Slate  | `#6B7A93` | Supporting info, helper text           |
| Caption        | 12px  | 400    | 1.5         | 0em            | Slate Gray   | `#B0BAC9` | Timestamps, image captions, metadata   |
| Label / Overline | 11px | 500   | 1.4         | +0.08em        | Muted Slate  | `#6B7A93` | Section overlines, form labels, tags   |
| Code / Mono    | 13px  | 400    | 1.5         | 0em            | Charcoal     | `#2E3A4E` | Hex codes, job IDs, print specs, DPI   |
| Micro          | 10px  | 500    | 1.4         | +0.06em        | Slate Gray   | `#B0BAC9` | Badges inside compact components       |

---

## 5. Recommended Fonts

| Role               | Font Name            | Source           | Fallback Stack                          | Notes                                     |
|--------------------|----------------------|------------------|-----------------------------------------|-------------------------------------------|
| Display / Headings | Inter                | Google Fonts     | `'Inter', system-ui, sans-serif`        | Clean geometric — ideal for dashboards   |
| Body Text          | Source Sans 3        | Google Fonts     | `'Source Sans 3', Arial, sans-serif`    | Highly legible at small sizes            |
| Print Documents    | Libre Baskerville    | Google Fonts     | `'Libre Baskerville', Georgia, serif`   | Serif for letterheads, formal output     |
| Monospace / Data   | JetBrains Mono       | JetBrains / CDN  | `'JetBrains Mono', 'Courier New', mono` | Codes, IDs, print specs, hex values      |
| Alt Sans (Premium) | Neue Haas Grotesk    | Licensed / Adobe | `'Neue Haas Grotesk', Helvetica, sans`  | Swiss precision — luxury corporate feel  |

### Font Weight Guide

| Weight | Value | Usage                                     |
|--------|-------|-------------------------------------------|
| Regular | 400  | Body text, captions, form inputs          |
| Medium  | 500  | Labels, overlines, nav items              |
| Semibold | 600 | Headings H3–H5, button text               |
| Bold    | 700  | Headings H1–H2, display hero              |

---

## 6. Spacing Scale

> Base unit: **4px**. All values are multiples of 4.

| Token     | Value | rem       | Usage                                          |
|-----------|-------|-----------|------------------------------------------------|
| space-0   | 0px   | 0rem      | Reset, flush alignment                         |
| space-1   | 4px   | 0.25rem   | Icon gaps, tight inline nudges                 |
| space-2   | 8px   | 0.5rem    | Badge padding, chip internal gaps              |
| space-3   | 12px  | 0.75rem   | Button padding (vertical), table cell padding  |
| space-4   | 16px  | 1rem      | Card padding, form field height                |
| space-5   | 20px  | 1.25rem   | List item padding, nav link padding            |
| space-6   | 24px  | 1.5rem    | Section sub-gaps, sidebar item spacing         |
| space-8   | 32px  | 2rem      | Component separation, dialog padding           |
| space-10  | 40px  | 2.5rem    | Large component gaps                           |
| space-12  | 48px  | 3rem      | Page section breaks, major dividers            |
| space-16  | 64px  | 4rem      | Page margins, hero section padding             |
| space-20  | 80px  | 5rem      | Large hero vertical rhythm                     |
| space-24  | 96px  | 6rem      | Top-of-page hero space                         |

---

## 7. Border Radius Tokens

| Token        | Value   | Usage                                             |
|--------------|---------|---------------------------------------------------|
| radius-none  | 0px     | Print borders, table cells, sharp-edge dividers   |
| radius-xs    | 2px     | Micro badges, data chips, tight inline elements   |
| radius-sm    | 4px     | Small badges, status pills, tags                  |
| radius-md    | 8px     | Buttons, inputs, dropdowns, tooltips              |
| radius-lg    | 12px    | Cards, panels, list groups, info boxes            |
| radius-xl    | 16px    | Feature cards, modals, large containers           |
| radius-2xl   | 24px    | Large hero cards, onboarding panels               |
| radius-full  | 9999px  | Pills, avatar circles, toggle switches            |

---

## 8. Shadows & Elevation

| Token      | CSS Value                                      | Usage                                      |
|------------|------------------------------------------------|--------------------------------------------|
| shadow-xs  | `0 1px 2px rgba(0,0,0,0.05)`                  | Input focus rings, subtle inline elements  |
| shadow-sm  | `0 1px 4px rgba(0,0,0,0.08)`                  | Cards at rest, table rows                  |
| shadow-md  | `0 4px 12px rgba(0,0,0,0.10)`                 | Dropdowns, popovers                        |
| shadow-lg  | `0 8px 24px rgba(0,0,0,0.12)`                 | Modals, floating panels                    |
| shadow-xl  | `0 16px 48px rgba(0,0,0,0.15)`                | Full-screen overlays, drawers              |
| shadow-inner | `inset 0 1px 3px rgba(0,0,0,0.08)`          | Input fields, inset areas                  |
| shadow-none | `none`                                        | Flat print-mode UI, disabled elements      |

---

## 9. Component States

### Button States

| State    | Background  | Text      | Border              | Usage                      |
|----------|-------------|-----------|---------------------|----------------------------|
| Default  | `#1B2F5E`   | `#FFFFFF` | none                | Primary action             |
| Hover    | `#2C4A8A`   | `#FFFFFF` | none                | Cursor over button         |
| Active   | `#0D1E3E`   | `#FFFFFF` | none                | Mouse down / tap           |
| Disabled | `#D0D6E0`   | `#B0BAC9` | none                | Not clickable              |
| Focus    | `#1B2F5E`   | `#FFFFFF` | `3px solid #A8C5E8` | Keyboard focus ring        |

### Input States

| State      | Background  | Border              | Text      | Usage                          |
|------------|-------------|---------------------|-----------|--------------------------------|
| Default    | `#FFFFFF`   | `1px #D0D6E0`       | `#2E3A4E` | Idle input                     |
| Focus      | `#FFFFFF`   | `2px #2C4A8A`       | `#2E3A4E` | Active typing                  |
| Filled     | `#FFFFFF`   | `1px #B0BAC9`       | `#111827` | Has value                      |
| Error      | `#FDECEA`   | `2px #C0392B`       | `#2E3A4E` | Validation failed              |
| Disabled   | `#F4F6FA`   | `1px #E8ECF2`       | `#B0BAC9` | Not editable                   |
| Read-only  | `#F4F6FA`   | `1px dashed #D0D6E0`| `#4A5568` | Viewable, not editable         |

### Badge / Status Chip Colors

| Status     | Text Color  | Background  | Border              | Usage                          |
|------------|-------------|-------------|---------------------|--------------------------------|
| Printed    | `#1A7F4B`   | `#EAF7F0`   | `1px #1A7F4B30`     | Job completed successfully     |
| In Queue   | `#C27A00`   | `#FEF3E2`   | `1px #C27A0030`     | Waiting to be processed        |
| Processing | `#0B6CB5`   | `#E8F2FB`   | `1px #0B6CB530`     | Currently printing             |
| Failed     | `#C0392B`   | `#FDECEA`   | `1px #C0392B30`     | Job encountered an error       |
| Draft      | `#6B7A93`   | `#E8ECF2`   | `1px #6B7A9330`     | Not yet submitted              |
| Approved   | `#1A7F4B`   | `#EAF7F0`   | `1px #1A7F4B30`     | Approved for print             |
| Rejected   | `#C0392B`   | `#FDECEA`   | `1px #C0392B30`     | Rejected, needs revision       |
| Archived   | `#4A5568`   | `#F4F6FA`   | `1px #D0D6E0`       | Completed and archived         |

---

## 10. Z-Index Scale

| Token          | Value | Usage                                       |
|----------------|-------|---------------------------------------------|
| z-below        | -1    | Decorative background layers                |
| z-base         | 0     | Default document flow                       |
| z-raised       | 10    | Cards on hover, elevated components         |
| z-sticky       | 100   | Sticky table headers, fixed sidebars        |
| z-dropdown     | 200   | Dropdown menus, select lists                |
| z-tooltip      | 300   | Tooltips, popovers                          |
| z-overlay      | 400   | Dimmed backgrounds behind modals            |
| z-modal        | 500   | Modal dialogs, drawers                      |
| z-notification | 600   | Toast notifications, alerts                 |
| z-maximum      | 9999  | Critical overlays, emergency notices        |

---

## 11. Breakpoints / Responsive Grid

| Name       | Min Width | Columns | Gutter | Margin   | Usage                                      |
|------------|-----------|---------|--------|----------|--------------------------------------------|
| xs (mobile) | 0px      | 4       | 16px   | 16px     | Small phones                               |
| sm (mobile) | 480px    | 4       | 16px   | 24px     | Large phones                               |
| md (tablet) | 768px    | 8       | 24px   | 32px     | Tablets, small laptops                     |
| lg (desktop)| 1024px   | 12      | 24px   | 48px     | Standard desktop                           |
| xl (wide)   | 1280px   | 12      | 32px   | 64px     | Wide screens, dashboard views              |
| 2xl (max)   | 1536px   | 12      | 32px   | auto     | Large monitors, max content width: 1440px  |

### Max Content Width

```
Max container width: 1440px
Dashboard sidebar width: 260px
Main content area (with sidebar): calc(100% - 260px)
```

---

## 12. Print Production Specs

| Spec              | Value               | Notes                                          |
|-------------------|---------------------|------------------------------------------------|
| Color mode        | CMYK                | Convert all RGB assets before export           |
| Resolution        | 300 DPI minimum     | 600 DPI recommended for fine detail / line art |
| Bleed             | 3mm all sides       | Extend background / art beyond trim edge       |
| Safe zone         | 5mm inset           | Keep all text and logos inside this margin     |
| Export format     | PDF/X-1a or PDF/X-4 | Industry standard for prepress                 |
| Font embedding    | Embed all           | Subset embed to reduce file size               |
| Black text        | 100K only           | Avoid rich black (C60 M40 Y40 K100) on text    |
| Rich black (large)| C60 M40 Y40 K100    | Use only for large solid areas, not text       |
| White overprint   | Off                 | Always set white elements to knockout          |
| Image format      | TIFF or EPS         | No JPEG for critical vector or logo elements   |
| Transparency      | Flatten before save | Flatten all transparency in final export       |
| ICC Profile       | ISO Coated v2 300%  | Standard European offset printing profile      |
| Total ink limit   | 300%                | Prevents ink saturation on press               |

---

## 13. CSS Variables Reference

Copy this block into your project's `:root` to use all tokens as CSS custom properties.

```css
:root {

  /* ── Brand Colors ─────────────────────────────── */
  --color-navy-900:       #0D1E3E;
  --color-navy-800:       #1B2F5E;   /* Corporate Navy — primary brand */
  --color-navy-600:       #2C4A8A;   /* Royal Blue — buttons, links */
  --color-navy-400:       #4A7EC7;   /* Steel Blue — hover, icons */
  --color-navy-100:       #A8C5E8;   /* Sky Blue — tints, fills */
  --color-navy-50:        #E8F0FA;   /* Navy tint — subtle backgrounds */

  --color-gold-800:       #8A5800;
  --color-gold-600:       #B8871E;   /* Deep Gold — hover, active */
  --color-gold-400:       #D4A843;   /* Corporate Gold — accent */
  --color-gold-50:        #FDF3DC;   /* Gold Tint — backgrounds */

  /* ── Neutrals ─────────────────────────────────── */
  --color-white:          #FFFFFF;
  --color-gray-50:        #F4F6FA;
  --color-gray-100:       #E8ECF2;
  --color-gray-200:       #D0D6E0;
  --color-gray-300:       #B0BAC9;
  --color-gray-400:       #6B7A93;
  --color-gray-500:       #4A5568;
  --color-gray-700:       #2E3A4E;
  --color-gray-900:       #111827;

  /* ── Status Colors ────────────────────────────── */
  --color-success:        #1A7F4B;
  --color-success-bg:     #EAF7F0;
  --color-warning:        #C27A00;
  --color-warning-bg:     #FEF3E2;
  --color-error:          #C0392B;
  --color-error-bg:       #FDECEA;
  --color-info:           #0B6CB5;
  --color-info-bg:        #E8F2FB;

  /* ── Typography ───────────────────────────────── */
  --font-display:        'Inter', system-ui, sans-serif;
  --font-body:           'Source Sans 3', Arial, sans-serif;
  --font-print:          'Libre Baskerville', Georgia, serif;
  --font-mono:           'JetBrains Mono', 'Courier New', monospace;

  --text-display:        48px;
  --text-h1:             36px;
  --text-h2:             28px;
  --text-h3:             22px;
  --text-h4:             18px;
  --text-h5:             16px;
  --text-body-lg:        16px;
  --text-body:           14px;
  --text-body-sm:        13px;
  --text-caption:        12px;
  --text-label:          11px;
  --text-micro:          10px;

  --weight-regular:      400;
  --weight-medium:       500;
  --weight-semibold:     600;
  --weight-bold:         700;

  --leading-tight:       1.1;
  --leading-snug:        1.3;
  --leading-normal:      1.5;
  --leading-relaxed:     1.6;
  --leading-loose:       1.7;

  /* ── Spacing ──────────────────────────────────── */
  --space-1:             4px;
  --space-2:             8px;
  --space-3:             12px;
  --space-4:             16px;
  --space-5:             20px;
  --space-6:             24px;
  --space-8:             32px;
  --space-10:            40px;
  --space-12:            48px;
  --space-16:            64px;
  --space-20:            80px;
  --space-24:            96px;

  /* ── Border Radius ────────────────────────────── */
  --radius-none:         0px;
  --radius-xs:           2px;
  --radius-sm:           4px;
  --radius-md:           8px;
  --radius-lg:           12px;
  --radius-xl:           16px;
  --radius-2xl:          24px;
  --radius-full:         9999px;

  /* ── Shadows ──────────────────────────────────── */
  --shadow-xs:           0 1px 2px rgba(0,0,0,0.05);
  --shadow-sm:           0 1px 4px rgba(0,0,0,0.08);
  --shadow-md:           0 4px 12px rgba(0,0,0,0.10);
  --shadow-lg:           0 8px 24px rgba(0,0,0,0.12);
  --shadow-xl:           0 16px 48px rgba(0,0,0,0.15);
  --shadow-inner:        inset 0 1px 3px rgba(0,0,0,0.08);

  /* ── Z-Index ──────────────────────────────────── */
  --z-below:             -1;
  --z-base:              0;
  --z-raised:            10;
  --z-sticky:            100;
  --z-dropdown:          200;
  --z-tooltip:           300;
  --z-overlay:           400;
  --z-modal:             500;
  --z-notification:      600;
  --z-maximum:           9999;

  /* ── Layout ───────────────────────────────────── */
  --container-max:       1440px;
  --sidebar-width:       260px;
  --header-height:       64px;
  --content-max:         960px;

}
```

---

*Design system maintained by the UI/UX team. For questions or contributions, open a pull request against the `design-tokens` branch.*