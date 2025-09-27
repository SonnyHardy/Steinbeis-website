import React from 'react';
import Image from 'next/image';
import { Button } from '../UI';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hintergrundbild mit Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/contact-background.png"
          alt="Steinbeis Hintergrund"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hauptinhalt */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          {/* Haupttitel */}
          <h1 className="hero-title text-white mb-6">
            Wir sind Ihr Partner für<br />
            Bau- & Immobilienökonomie
          </h1>

          {/* Untertitel */}
          <p className="font-manrope font-medium text-xl md:text-2xl text-white mb-8 max-w-2xl leading-relaxed">
            Spezialisiert auf Bau- & Investitionskosten und Risk Engineering
          </p>

          {/* CTA Button */}
          <Button
            variant="primary"
            size="large"
            onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
            className="mb-12"
          >
            Jetzt Angebot einholen
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

        {/* EUcert Siegel und Universität Logo am unteren Bereich */}
        <div className="absolute bottom-20 left-4 flex items-end space-x-8">
          {/* EUcert Siegel */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <Image
              src="/images/eucert-siegel.png"
              alt="EUcert Zertifizierungssiegel"
              width={120}
              height={120}
              className="w-20 h-20 md:w-24 md:h-24"
            />
          </div>

          {/* Universitäts-Info */}
          <div className="text-white">
            <p className="font-manrope font-medium text-sm md:text-base mb-2">
              Professur für Immobilienwirtschaft
            </p>
            <p className="font-albert-sans text-xs md:text-sm opacity-80">
              Steinbeis Hochschule Berlin
            </p>
          </div>
        </div>
      </div>

      {/* Scroll-Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}