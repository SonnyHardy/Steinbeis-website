'use client';

import React from 'react';
import { Button } from '../UI';
import Image from "next/image";
import {ArrowRight} from "lucide-react";

export default function ExpertSection() {
  return (
    <section className="p-20 bg-[var(--color-gray-light)]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Bereich */}
          <div className="">
            <h2 className="section-title text-[var(--text-primary)] mb-8 leading-tight">
              Ihr Experte für Wertermittlung, Baukostenplanung<br />
              & Abrechnung
            </h2>
          </div>

          {/* Bild und Info Bereich */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-row items-center gap-8">
              <Image
                  src="/images/christoph-wagner.png"
                  alt="Steinbeis Logo"
                  width={300}
                  height={88}
                  className="h-28 w-28"
              />
              <div className="flex flex-col gap-2">
                <h3 className="font-manrope font-bold text-xl text-[var(--text-primary)]">
                  Christoph Wagner
                </h3>
                <p className="font-albert-sans text-[var(--text-muted)] text-sm leading-relaxed w-56">
                  Leiter Steinbeis-Beratungszentrum Bau- und Immobilienökonomie
                </p>
              </div>
            </div>

            <div>
              <p className="font-albert-sans text-[var(--text-secondary)] text-lg leading-relaxed">
                Leiter Steinbeis-Beratunsgzentrum Bau- und Immobilienökonomie und
                Prof. Dr. Christoph Wagener ist ein erfahrener Architekt und einem Doktorat in
                management und economics. Mit jahrelanger Erfahrung in führenden Positionen
                im Immobilien- und Bauwesen. Er war eingebunden in Bauvorhaben von beträchtlichem Umfang.
              </p>
            </div>

            <Button
                className="w-2/3 group"
                variant="primary"
                size="large"
                onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Mehr über Christoph Wagener
              <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
            </Button>

          </div>

        </div>
      </div>
    </section>
  );
}