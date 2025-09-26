# NextJS Steinbeis Website - Entwicklungs-Prompt

## 🎯 Projektübersicht

Erstelle eine vollständige NextJS-Website für **Steinbeis Beratungszentrum Bau- und Immobilienökonomie** basierend auf dem bereitgestellten Figma-Design. Die Website soll visuell exakt dem Original entsprechen und als professionelle Unternehmenswebseite fungieren.

**Figma Design URL:** `https://www.figma.com/design/DZ9g1hb8Ac9oPjVEeAaheL/Steinbeis-Projekt-Jordan?node-id=1-421&t=zPl4df0HQwyFPfIy-4`

## 🛠 Technologie-Stack

- **Framework:** Next.js 15.5.4 mit App Router
- **Styling:** Tailwind CSS
- **Sprache:** TypeScript
- **Bildoptimierung:** Next.js Image Component
- **Schriftarten:** Google Fonts (Manrope, Red Hat Display, Albert Sans, DM Sans)

## 📁 Projektstruktur

```
/app
├── components/
│   ├── Header/
│   │   ├── Navigation.tsx
│   │   ├── HeroSection.tsx
│   │   └── index.ts
│   ├── ServiceSection/
│   │   ├── ServiceSection.tsx
│   │   ├── ServiceCard.tsx
│   │   └── index.ts
│   ├── StatsSection/
│   │   ├── StatsSection.tsx
│   │   ├── StatCard.tsx
│   │   └── index.ts
│   ├── ExpertSection/
│   │   ├── ExpertSection.tsx
│   │   └── index.ts
│   ├── CertificationSection/
│   │   ├── CertificationSection.tsx
│   │   └── index.ts
│   ├── ImageTextModules/
│   │   ├── ImageTextModule.tsx
│   │   └── index.ts
│   ├── ContactSection/
│   │   ├── ContactSection.tsx
│   │   ├── ContactForm.tsx
│   │   └── index.ts
│   ├── Footer/
│   │   ├── Footer.tsx
│   │   └── index.ts
│   └── UI/
│       ├── Button.tsx
│       ├── Card.tsx
│       └── index.ts
├── globals.css
├── page.tsx
└── layout.tsx

/public
├── images/
│   ├── header-background.jpg
│   ├── steinbeis-logo.png
│   ├── eucert-siegel.png
│   ├── christoph-wagener.jpg
│   ├── construction-image.jpg
│   ├── sustainable-building.jpg
│   ├── real-estate.jpg
│   ├── risk-engineering.jpg
│   ├── contact-background.jpg
│   └── ... (weitere Bilder)
```

## 🎨 Design-Spezifikationen

### Farbpalette (globals.css)
```css
:root {
  /* Primärfarben */
  --color-primary: #000000;       /* Schwarz für Text und Buttons */
  --color-secondary: #4991A5;     /* Teal für Akzente */
  --color-white: #FFFFFF;         /* Weiß für Hintergründe */
  --color-gray-light: #FAFAFA;    /* Hellgrau für Sektionen */
  --color-gray-medium: #101828;   /* Dunkelgrau für Texte */
  --color-accent-blue: #C8DEE4;   /* Hellblau für Statistik-Karten */
  --color-footer-bg: rgba(73, 145, 165, 0.3); /* Footer Hintergrund */
  
  /* Textfarben */
  --text-primary: #000000;
  --text-secondary: #101828;
  --text-muted: rgba(0, 0, 0, 0.6);
  
  /* Schatten */
  --shadow-card: 0px 2px 4px 0px rgba(6, 57, 64, 0.08);
  --shadow-button: 0px 2px 4px 0px rgba(6, 57, 64, 0.08);
  
  /* Border */
  --border-light: rgba(16, 24, 40, 0.1);
}
```

### Typografie-System (globals.css)
```css
/* Schriftarten importieren */
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Red+Hat+Display:wght@400;500;600&family=Albert+Sans:wght@400;500;700&family=DM+Sans:wght@400;700&display=swap');

/* Typografie Klassen */
.font-manrope { font-family: 'Manrope', sans-serif; }
.font-red-hat { font-family: 'Red Hat Display', sans-serif; }
.font-albert-sans { font-family: 'Albert Sans', sans-serif; }
.font-dm-sans { font-family: 'DM Sans', sans-serif; }

/* Titel-Styles */
.hero-title {
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 54px;
  line-height: 1.074;
  letter-spacing: -0.03em;
}

.section-title {
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 400;
  font-size: 58px;
  line-height: 1.25;
}

.module-title {
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 400;
  font-size: 48px;
  line-height: 1.25;
  letter-spacing: -0.02em;
}
```

## 📋 Komponenten-Spezifikationen

### 1. Header Komponente (`app/components/Header/`)

#### Navigation.tsx
- **Funktion:** Responsive Navigationsleiste mit Steinbeis Logo
- **Elemente:**
    - Logo (links): Steinbeis Markenlogo
    - Menüelemente (zentriert): "Dienstleistungen", "Zertifizierung", "Zahlen"
    - Kontakt-Button (rechts): "Kontakt" mit abgerundeten Ecken
- **Styling:** Transparenter Hintergrund über Hero-Bild, feste Position beim Scrollen
- **Responsive:** Hamburger-Menü auf Mobile-Geräten

#### HeroSection.tsx
- **Funktion:** Hauptbereich mit Hintergrundbild und Call-to-Action
- **Elemente:**
    - Hintergrundbild: `/images/header-background.jpg` mit Overlay
    - Haupttitel: "Wir sind Ihr Partner für Bau- & Immobilienökonomie"
    - Untertitel: "Spezialisiert auf Bau- & Investitionskosten und Risk Engineering"
    - CTA-Button: "Jetzt Angebot einholen" mit Pfeil-Icon
    - EUcert-Siegel: Positioniert unten links
    - Universität-Logo: Positioniert mit Text "Professur für Immobilienwirtschaft"

### 2. ServiceSection (`app/components/ServiceSection/`)

#### ServiceSection.tsx
- **Funktion:** Übersicht der Dienstleistungen in Karten-Layout
- **Layout:** 2x3 Grid von Service-Karten
- **Titel:** "Dienstleistungsangebot"
- **Beschreibung:** Einleitungstext über Dienstleistungsspektrum

#### ServiceCard.tsx
- **Props Interface:**
```typescript
interface ServiceCardProps {
  title: string;
  description: string;
  className?: string;
}
```
- **Styling:** Weiße Karte mit dünner Umrandung, abgerundete Ecken, Hover-Effekt
- **Services:**
    1. "Beratung in Bau- und Immobilienökonomie"
    2. "Risk Engineering und Lean Management"
    3. "Immobilieninvestitionen und -bewertungen"
    4. "Bauprojektmanagement"
    5. "Nachhaltigkeitsberatung"
    6. "Gutachten und Sachverständigentätigkeit"

### 3. StatsSection (`app/components/StatsSection/`)

#### StatsSection.tsx
- **Funktion:** Steinbeis Erfolgszahlen präsentieren
- **Layout:** 4-spaltige Statistik-Karten
- **Titel:** "Steinbeis Erfolg in Zahlen"
- **Hintergrund:** Weißer Bereich mit Steinbeis Logo

#### StatCard.tsx
- **Props Interface:**
```typescript
interface StatCardProps {
  number: string;
  label: string;
  backgroundColor?: string;
}
```
- **Statistiken:**
    - "1100" - "Transferunternehmen"
    - "5100" - "Expertinnen und Experten"
    - "40 Jahre" - "Erfolgreicher Wissenstransfer"
    - "159,7 Millionen Euro" - "Gesamtumsatz"

### 4. ExpertSection (`app/components/ExpertSection/`)

#### ExpertSection.tsx
- **Funktion:** Vorstellung von Prof. Dr. Christoph Wagener
- **Layout:** Zwei-spaltig - Text links, Profilbild und Info rechts
- **Hintergrund:** Hellgrau (#FAFAFA)
- **Elemente:**
    - Profilbild: Rundes Bild von Christoph Wagener
    - Name und Titel
    - Beschreibungstext über Erfahrung und Qualifikation
    - CTA-Button: "Mehr über Christoph Wagener"

### 5. CertificationSection (`app/components/CertificationSection/`)

#### CertificationSection.tsx
- **Funktion:** EUcert Zertifizierung präsentieren
- **Layout:** Zwei-spaltig - EUcert Siegel links, Beschreibungstext rechts
- **Elemente:**
    - EUcert Zertifizierungssiegel: `/images/eucert-certificate-stamp.png`
    - Titel: "Zertifizierung als Gutachter"
    - Detailtext über DIN EN ISO/IEC 17024 Zertifizierung

### 6. ImageTextModules (`app/components/ImageTextModules/`)

#### ImageTextModule.tsx
- **Props Interface:**
```typescript
interface ImageTextModuleProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  buttonText: string;
  reversed?: boolean;
  backgroundColor?: string;
}
```
- **Layout:** Alternierend - Bild links/rechts, Text rechts/links
- **Module:**
    1. "Wertermittlung und Baukostenplanung" - Construction Image
    2. "Nachhaltiges Bauen" - Sustainable Building Image
    3. "Professur für Bau- und Immobilienwirtschaft" - Real Estate Image
    4. "Risk Engineering" - Risk Engineering Image

### 7. ContactSection (`app/components/ContactSection/`)

#### ContactSection.tsx
- **Funktion:** Kontaktbereich mit Hintergrundbild
- **Hintergrund:** `/images/contact-background.jpg` mit dunklem Overlay

#### ContactForm.tsx
- **Funktion:** Funktionsfähiges Kontaktformular
- **Felder:**
    - Vor- & Nachname (required)
    - E-Mail Adresse (required, email validation)
    - Betreff (optional)
    - Nachricht (required, textarea)
- **Styling:** Weiße Karte mit abgerundeten Ecken, zentral positioniert
- **Validation:** TypeScript Form Validation mit Error States
- **Submit:** "Senden" Button mit Pfeil-Icon

### 8. Footer (`app/components/Footer/`)

#### Footer.tsx
- **Funktion:** Website-Footer mit Links und Informationen
- **Hintergrund:** Halbtransparentes Teal
- **Layout:** Multi-spaltig
- **Elemente:**
    - Steinbeis Logo
    - EUcert Siegel (klein)
    - "Unternehmen" Links: Philosophie, Team, Kontakt
    - "Kontaktinformationen": Adresse, Telefon, E-Mail
    - Social Media Icons: Instagram, Facebook, LinkedIn
    - Copyright: "© 2025 Sebastian Kratz"
    - Legal Links: Datenschutz, Impressum
    - Partner Logos: LuckyCloud, Members Area

## 🖼 Bild-Assets

### Benötigte Bilder (Alle in `/public/images/`):
1. **header-background.jpg** - Hero-Hintergrundbild (1440x900px min.)
2. **steinbeis-logo.png** - Hauptlogo (transparent, verschiedene Größen)
3. **eucert-siegel.png** - EUcert Zertifizierungssiegel
4. **christoph-wagener.jpg** - Profilbild (quadratisch, min. 200x200px)
5. **construction-image.jpg** - Wertermittlung Modul (514x524px)
6. **sustainable-building.jpg** - Nachhaltiges Bauen (514x524px)
7. **real-estate.jpg** - Immobilienwirtschaft (514x524px)
8. **risk-engineering.jpg** - Risk Engineering (514x524px)
9. **contact-background.jpg** - Kontakt-Hintergrund (1440x765px min.)
10. **members-area-screenshot.png** - Interface Screenshot
11. **logo-luckycloud.png** - Partner Logo
12. **logo-university.png** - Universitäts-Logo

### Bildoptimierung:
- Alle Bilder über `next/image` Component einbinden
- WebP Format verwenden wo möglich
- Responsive Bildgrößen definieren
- Alt-Texte auf Deutsch für Accessibility

## 🎨 Responsive Design

### Breakpoints (Tailwind Standard):
- **Mobile:** < 640px - Einspaltige Layouts, Hamburger-Menu
- **Tablet:** 640px - 1024px - Angepasste Grid-Systeme
- **Desktop:** > 1024px - Vollständiges Design wie Figma

### Responsive Anpassungen:
- Service-Karten: 2x3 → 1x6 auf Mobile
- Statistik-Karten: 4x1 → 2x2 auf Mobile
- Image-Text Module: Nebeneinander → Übereinander auf Mobile
- Navigation: Horizontal → Hamburger-Menu auf Mobile
- Schriftgrößen: Proportional skalieren

## 🔧 Technische Anforderungen

### Performance:
- Lazy Loading für alle Bilder
- Code Splitting für Komponenten
- CSS Optimierung durch Tailwind Purge
- Lighthouse Score > 90

### SEO & Accessibility:
- Semantic HTML5 Tags verwenden
- Alt-Texte für alle Bilder (auf Deutsch)
- ARIA Labels wo notwendig
- Keyboard Navigation Support
- Meta Tags in layout.tsx

### TypeScript Interfaces:
```typescript
// Globale Types (types/index.ts)
export interface ServiceData {
  id: string;
  title: string;
  description: string;
}

export interface StatData {
  id: string;
  number: string;
  label: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject?: string;
  message: string;
}
```

## 📝 Content (Deutsche Texte)

### Navigation:
- "Dienstleistungen"
- "Zertifizierung"
- "Zahlen"
- "Kontakt"

### Buttons:
- "Jetzt Angebot einholen"
- "Kontakt aufnehmen"
- "Mehr erfahren"
- "Mehr über Christoph Wagener"
- "Senden"

### Sektions-Titel:
- "Wir sind Ihr Partner für Bau- & Immobilienökonomie"
- "Dienstleistungsangebot"
- "Steinbeis Erfolg in Zahlen"
- "Ihr Experte für Wertermittlung, Baukostenplanung & Abrechnung"
- "Zertifizierung als Gutachter"
- "Kontaktieren Sie uns"

## ⚡ Implementierung-Prioritäten

### Phase 1 (Grundstruktur):
1. NextJS Projekt Setup mit TypeScript
2. Tailwind CSS Konfiguration
3. Grundlegende Komponenten-Struktur
4. Layout und Navigation

### Phase 2 (Hauptinhalte):
1. Hero Section mit Hintergrundbild
2. Service Section mit Karten
3. Statistik Section
4. Expert Section

### Phase 3 (Erweiterte Funktionen):
1. Image-Text Module
2. Kontaktformular mit Validation
3. Footer mit allen Links
4. Responsive Optimierung

### Phase 4 (Feinschliff):
1. Performance Optimierung
2. SEO Meta Tags
3. Accessibility Testing
4. Cross-Browser Testing

## 🚀 Deployment

- **Platform:** Vercel (empfohlen für NextJS)
- **Domain:** Steinbeis-spezifische Domain
- **Environment:** Production Build mit allen Optimierungen
- **Analytics:** Google Analytics Integration (optional)

## 📋 Checkliste Qualitätssicherung

- [ ] Visuell identisch mit Figma Design
- [ ] Alle Bilder optimiert und mit Alt-Texten
- [ ] Responsive auf allen Geräten
- [ ] TypeScript ohne Errors
- [ ] Tailwind CSS korrekt implementiert
- [ ] Kontaktformular funktional
- [ ] Performance optimiert (Lighthouse > 90)
- [ ] SEO Meta Tags gesetzt
- [ ] Accessibility Standards erfüllt
- [ ] Cross-Browser kompatibel
- [ ] Deutsche Texte und Kommentare

---

**Hinweis:** Alle Texte, Kommentare und Dokumentation sollen auf Deutsch verfasst werden. Die Website repräsentiert ein deutsches Beratungsunternehmen und sollte entsprechend lokalisiert sein.