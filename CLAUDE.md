# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15.5.4 website for **Steinbeis Beratungszentrum Bau- und Immobilienökonomie** (Steinbeis Consulting Center for Construction and Real Estate Economics). The project is a professional corporate website built with TypeScript and Tailwind CSS.

## Key Commands

### Development
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production application with Turbopack
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Project Structure
```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx (currently empty)
└── guidelines.md (detailed German project specification)
```

## Architecture & Technical Stack

**Framework**: Next.js 15.5.4 with App Router
**Language**: TypeScript with strict mode enabled
**Styling**: Tailwind CSS v4 with PostCSS
**Fonts**: Uses Geist font family (Geist Sans and Geist Mono)
**Build Tool**: Turbopack for development and production builds

## Development Configuration

- **TypeScript**: Configured with strict mode, ES2017 target, and path aliases (`@/*` → `./src/*`)
- **ESLint**: Uses Next.js recommended configuration with TypeScript support
- **Path Resolution**: Uses bundler moduleResolution with JSON module support
- **Build Output**: Static generation with incremental builds

## Project Requirements (from guidelines.md)

This is a **German corporate website** with specific requirements:
- **Design Source**: Figma design at `https://www.figma.com/design/DZ9g1hb8Ac9oPjVEeAaheL/Steinbeis-Projekt-Jordan`
- **Content Language**: All content must be in German
- **Components**: Modular architecture with reusable TypeScript components
- **Images**: Optimized assets using Next.js Image component
- **Color Scheme**: Corporate colors defined (Black #000000, Teal #4991A5, etc.)
- **Typography**: Multiple Google Fonts (Manrope, Red Hat Display, Albert Sans, DM Sans)

## Code Style & Conventions

- Use TypeScript interfaces for all prop definitions
- Follow Next.js App Router patterns
- Implement responsive design (mobile-first approach)
- Use semantic HTML5 elements
- All text content and comments should be in German
- Maintain strict TypeScript configuration
- Use Tailwind CSS utility classes

## Important Notes

- The project follows German corporate standards
- All documentation and content is in German language
- The current page.tsx contains only empty JSX fragments (`<></>`)
- The project includes a comprehensive specification in `guidelines.md` with detailed component requirements
- Use Next.js Image component for all image assets
- Implement proper SEO meta tags and accessibility features