'use client';

import React from 'react';
import { Button } from '../UI';

export default function ExpertSection() {
  return (
    <section className="py-20 bg-[var(--color-gray-light)]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Bereich */}
          <div className="order-2 lg:order-1">
            <h2 className="section-title text-[var(--text-primary)] mb-8 leading-tight">
              Ihr Experte für Wertermittlung, Baukostenplanung<br />
              & Abrechnung
            </h2>
            <div className="space-y-6 mb-10">
              <p className="font-albert-sans text-[var(--text-muted)] leading-relaxed">
                Mit über 25 Jahren Berufserfahrung in der Bau- und Immobilienwirtschaft ist
                Prof. Dr. Christoph Wagener Ihr kompetenter Partner für komplexe Fragestellungen
                rund um Immobilienbewertung, Baukostenplanung und Projektentwicklung.
              </p>
              <p className="font-albert-sans text-[var(--text-muted)] leading-relaxed">
                Als zertifizierter Sachverständiger nach DIN EN ISO/IEC 17024 und Professor
                für Bau- und Immobilienwirtschaft verbindet er wissenschaftliche Expertise mit
                praktischer Erfahrung aus über 1.500 erfolgreich abgewickelten Projekten.
              </p>
              <p className="font-albert-sans text-[var(--text-muted)] leading-relaxed">
                Seine Spezialisierung umfasst Wertermittlung von Immobilien, detaillierte
                Baukostenplanung, Risk Engineering sowie die Entwicklung nachhaltiger
                Investitionsstrategien im Immobilienbereich.
              </p>
            </div>

            <Button
              variant="primary"
              size="large"
              onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Mehr über Christoph Wagener
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </div>

          {/* Bild und Info Bereich */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Hauptbild Placeholder - wird durch ein echtes Bild ersetzt */}
              <div className="bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-primary)] rounded-lg p-8 mb-6">
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-red-hat font-bold text-xl text-[var(--text-primary)] mb-2">
                    Prof. Dr. Christoph Wagener
                  </h3>
                  <p className="font-albert-sans text-[var(--text-muted)] text-sm mb-4">
                    Zertifizierter Sachverständiger für Immobilienbewertung
                  </p>
                  <div className="flex items-center justify-center gap-4 text-xs text-[var(--text-muted)]">
                    <span>DIN EN ISO/IEC 17024</span>
                    <span>•</span>
                    <span>25+ Jahre Erfahrung</span>
                  </div>
                </div>
              </div>

              {/* Qualifikationen */}
              <div className="bg-white rounded-lg p-6 shadow-[var(--shadow-card)]">
                <h4 className="font-red-hat font-semibold text-lg text-[var(--text-primary)] mb-4">
                  Qualifikationen & Zertifizierungen
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-secondary)] mt-2 flex-shrink-0"></div>
                    <span className="font-albert-sans text-sm text-[var(--text-muted)]">
                      Zertifizierter Sachverständiger nach DIN EN ISO/IEC 17024
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-secondary)] mt-2 flex-shrink-0"></div>
                    <span className="font-albert-sans text-sm text-[var(--text-muted)]">
                      Professor für Bau- und Immobilienwirtschaft
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-secondary)] mt-2 flex-shrink-0"></div>
                    <span className="font-albert-sans text-sm text-[var(--text-muted)]">
                      Mitglied im Steinbeis-Verbund seit 2010
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-secondary)] mt-2 flex-shrink-0"></div>
                    <span className="font-albert-sans text-sm text-[var(--text-muted)]">
                      Über 1.500 erfolgreich abgewickelte Projekte
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}