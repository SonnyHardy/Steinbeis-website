import React from 'react';
import Image from 'next/image';
import StatCard from './StatCard';
import { StatData } from '@/types';

const statsData: StatData[] = [
  {
    id: '1',
    number: '1100',
    label: 'Transferunternehmen'
  },
  {
    id: '2',
    number: '5100',
    label: 'Expertinnen und Experten'
  },
  {
    id: '3',
    number: '40 Jahre',
    label: 'Erfolgreicher Wissenstransfer'
  },
  {
    id: '4',
    number: '159,7 Mio €',
    label: 'Gesamtumsatz'
  }
];

export default function StatsSection() {
  return (
    <section id="zahlen" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Sektion Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-16">
          <div className="flex-1 mb-8 lg:mb-0">
            <h2 className="module-title text-[var(--text-primary)] mb-6">
              Steinbeis Erfolg in Zahlen
            </h2>
            <p className="font-albert-sans text-[var(--text-muted)] leading-relaxed max-w-2xl text-sm md:text-base">
              Steinbeis ist ein weltweiter Verbund aus über 1.100 Transferunternehmen, in dem 5.100
              Expertinnen und Experten ihr Know-how einbringen. Wir erarbeiten in interdisziplinären
              Teams individuelle Problemlösungen, die Kunden einen echten Mehrwert bringen und Steinbeis
              den Erfolg ermöglichen – damit sind wir zu einem der weltweit erfolgreichsten Dienstleister
              im Wissens- und Technologietransfer geworden. Entscheidend bei allen Projekten: der Erfolg
              der Kunden, Mitarbeiter und Partner.
            </p>
          </div>

          {/* Steinbeis Logo */}
          <div className="flex-shrink-0 lg:ml-16">
            <Image
              src="/images/steinbeis-logo.png"
              alt="Steinbeis Logo"
              width={300}
              height={88}
              className="h-12 w-auto opacity-80"
            />
          </div>
        </div>

        {/* Statistik Karten */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat) => (
            <StatCard
              key={stat.id}
              number={stat.number}
              label={stat.label}
            />
          ))}
        </div>

        {/* Zusätzlicher Kontext */}
        <div className="mt-16 text-center">
          <div className="bg-[var(--color-gray-light)] rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="font-red-hat font-semibold text-2xl text-[var(--text-primary)] mb-4">
              Unser Erfolgsrezept
            </h3>
            <p className="font-albert-sans text-[var(--text-muted)] leading-relaxed">
              Durch die enge Verzahnung von Wissenschaft und Wirtschaft schaffen wir nachhaltigen
              Wissenstransfer. Unsere dezentrale Struktur ermöglicht es uns, schnell und flexibel
              auf Marktanforderungen zu reagieren und maßgeschneiderte Lösungen zu entwickeln.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}