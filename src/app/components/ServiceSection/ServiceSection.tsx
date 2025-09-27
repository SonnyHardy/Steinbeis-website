'use client';

import React from 'react';
import ServiceCard from './ServiceCard';
import { ServiceData } from '@/types';

const servicesData: ServiceData[] = [
  {
    id: '1',
    title: 'Beratung in Bau- und Immobilienökonomie',
    description: 'Umfassende Beratung für wirtschaftliche Entscheidungen im Bau- und Immobiliensektor. Von der Projektentwicklung bis zur Vermarktung unterstützen wir Sie mit fundierter Expertise.'
  },
  {
    id: '2',
    title: 'Risk Engineering und Lean Management',
    description: 'Systematische Risikoanalyse und effiziente Prozessoptimierung für Ihre Bauprojekte. Minimieren Sie Risiken und maximieren Sie die Effizienz durch bewährte Methoden.'
  },
  {
    id: '3',
    title: 'Immobilieninvestitionen und -bewertungen',
    description: 'Professionelle Bewertung von Immobilien und fundierte Investitionsberatung. Wir analysieren Marktpotenziale und entwickeln tragfähige Investitionsstrategien.'
  },
  {
    id: '4',
    title: 'Bauprojektmanagement',
    description: 'Vollständige Projektsteuerung von der Planung bis zur Fertigstellung. Termingerechte und kosteneffiziente Umsetzung Ihrer Bauvorhaben durch erfahrene Projektleiter.'
  },
  {
    id: '5',
    title: 'Nachhaltigkeitsberatung',
    description: 'Beratung für nachhaltiges und energieeffizientes Bauen. Entwicklung von Konzepten für umweltfreundliche und zukunftsorientierte Gebäude und Quartiere.'
  },
  {
    id: '6',
    title: 'Gutachten und Sachverständigentätigkeit',
    description: 'Unabhängige Sachverständigenleistungen und fundierte Gutachten für Immobilien. Zertifizierte Expertise für juristische und technische Fragestellungen.'
  }
];

export default function ServiceSection() {
  return (
    <section id="dienstleistungen" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Sektion Titel */}
        <div className="text-center mb-16">
          <h2 className="module-title text-[var(--text-primary)] mb-6">
            Dienstleistungsangebot
          </h2>
          <p className="font-albert-sans text-lg text-[var(--text-muted)] max-w-3xl mx-auto leading-relaxed">
            Mit über 40 Jahren Erfahrung bieten wir Ihnen ein umfassendes Spektrum an Dienstleistungen
            in der Bau- und Immobilienökonomie. Von der strategischen Beratung bis zur praktischen Umsetzung
            stehen wir Ihnen als kompetenter Partner zur Seite.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        {/* CTA Bereich */}
        <div className="text-center mt-16">
          <p className="font-albert-sans text-[var(--text-muted)] mb-6">
            Benötigen Sie eine maßgeschneiderte Lösung für Ihr Projekt?
          </p>
          <button
            onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 font-manrope font-medium text-[var(--color-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
          >
            Jetzt unverbindlich beraten lassen
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}