# Steinbeis Beratungszentrum Website

Professional website for **Steinbeis Beratungszentrum Bau- und Immobilienökonomie** (Steinbeis Consulting Center for Construction and Real Estate Economics), developed with Next.js 15.5.4 and TypeScript.

## 🎯 Project Overview

This modern web application showcases the construction and real estate economics consulting services of Steinbeis center. The site is based on a professional Figma design and implements a modular architecture with reusable TypeScript components.


## 🛠 Technical Stack

- **Framework:** Next.js 15.5.4 with App Router
- **Language:** TypeScript with strict mode
- **Styling:** Tailwind CSS v4 with PostCSS
- **Fonts:** Geist (Geist Sans and Geist Mono) + Google Fonts
- **Build:** Turbopack for development and production
- **Components:** Modular architecture with TypeScript interfaces

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ recommended
- npm, yarn, pnpm or bun

### Installation and Launch

```bash
# Clone the project
git clone <repository-url>
cd steinbeis

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

```bash
npm run dev      # Development server with Turbopack
npm run build    # Production build with Turbopack
npm start        # Production server
npm run lint     # ESLint linter
```

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Header/              # Navigation and Hero Section
│   │   ├── ServiceSection/      # Services offered
│   │   ├── StatsSection/        # Steinbeis statistics
│   │   ├── ExpertSection/       # Expert presentation
│   │   ├── CertificatSection/   # Certifications
│   │   ├── ImageTextModules/    # Image/text modules
│   │   ├── ContactSection/      # Contact form
│   │   ├── Footer/              # Footer
│   │   └── UI/                  # Reusable UI components
│   ├── globals.css              # Global styles and CSS variables
│   ├── layout.tsx               # Main layout
│   └── page.tsx                 # Homepage
├── types/
│   └── index.ts                 # Global TypeScript types
└── guidelines.md                # Detailed project specifications
```