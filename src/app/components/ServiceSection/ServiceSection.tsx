'use client';

import React from 'react';
import ServiceCard from './ServiceCard';
import { ServiceData } from '@/types';
import {Button} from "@/app/components/UI";
import {MoveRight} from "lucide-react";

const servicesData: ServiceData[] = [
  {
    id: '1',
    title: 'Beratung in Bau- und Immobilienökonomie',
    description: 'Sie benötigen fundierte Beratung für Ihre Bauprojekte oder Immobilieninvestitionen? Wir unterstützen Sie mit detaillierten Marktanalysen & strategischen Empfehlungen. '
  },
  {
    id: '2',
    title: 'Bauprojektmanagement',
    description: 'Vom ersten Konzept bis hin zur Fertigstellung – wir übernehmen die Gesamtleitung Ihres Bauprojekts. Optimieren Sie Ihre Ressourcen und steigern Sie die Effizienz durch unser professionelles Projektmanagement.'
  },
  {
    id: '3',
    title: 'Immobilieninvestitionen und -bewertungen',
    description: 'Mit präzisen Bewertungen und fundierten Marktanalysen maximieren Sie die Rentabilität Ihrer Immobilieninvestitionen. Wir bieten Ihnen eine umfassende Einschätzung der Werte und Potenziale Ihrer Objekte.'
  },
  {
    id: '4',
    title: 'Gutachten und Sachverständigentätigkeit',
    description: 'Als zertifizierte Sachverständige bieten wir Ihnen objektive Gutachten zu Wertermittlungen, Baukosten, Abrechnungen und Bauablaufstörungen.'
  },
  {
    id: '5',
    title: 'Risk Engineering und Lean Management',
    description: 'Unsere Experten helfen Ihnen, Risiken zu identifizieren und Ihre Bauprozesse effizient und nachhaltig zu gestalten – durch den Einsatz von Risk Engineering, Lean Management und IPD/IPA.'
  },
  {
    id: '6',
    title: 'Nachhaltigkeitsberatung',
    description: 'Wir beraten Sie zu nachhaltigem Bauen, Lebenszyklusanalysen, Ökobilanzierung und der Integration von ESG (Environmental, Social, Governance) in Ihre Bauprojekte.'
  }
];

export default function ServiceSection() {
  return (
    <section id="dienstleistungen" className="p-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Sektion Titel */}
        <div className="mb-16">
          <h2 className="module-title text-[var(--text-primary)] mb-6">
            Dienstleistungsangebot
          </h2>
          <p className="font-albert-sans font-black text-lg text-[var(--text-muted)] max-w-xl leading-relaxed">
            Wir bieten ein breites Spektrum an Dienstleistungen für Unternehmen
            und Institutionen im Bau- und Immobilienbereich. Unsere Expertise umfasst:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        {/* CTA Button */}
        <Button
            variant="primary"
            size="large"
            onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-10"
        >
          Kontakt aufnehmen
          <MoveRight />
        </Button>

      </div>
    </section>
  );
}