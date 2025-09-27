import React from 'react';
import Image from 'next/image';
import { Button } from '../UI';
import {MoveRight} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden p-16">
      {/* Hintergrundbild */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/contact-background.png"
          alt="Steinbeis Hintergrund"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Hauptinhalt */}
      <div className="relative z-10 container mx-auto px-4 py-20 mb-20">
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
            <MoveRight />
          </Button>
        </div>

          {/* EUcert Siegel und Universität Logo am unteren Bereich */}
          <div className="flex flex-row items-center gap-2">
            {/* EUcert Siegel */}
            <div className="rounded-lg p-4">
              <Image
                  src="/images/eucert-siegel.png"
                  alt="EUcert Zertifizierungssiegel"
                  width={120}
                  height={120}
                  className="w-32 h-32 md:w-36 md:h-36"
              />
            </div>

            {/* Universitäts-Info */}
            <div>
              <Image
                  src="/images/members-area-screenshot.png"
                  alt="EUcert Zertifizierungssiegel"
                  width={200}
                  height={120}
                  className="w-48 h-20 md:w-48 md:h-20 rounded-lg mt-4"
              />
              <p className="text-white font-manrope font-medium text-xs md:text-xs mb-2 w-52 p-1">
                Professur für Immobilienwirtschaft
              </p>
            </div>
        </div>

      </div>
    </section>
  );
}