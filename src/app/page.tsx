'use client';

import { Navigation, HeroSection } from '@/app/components/Header';
import { ServiceSection } from '@/app/components/ServiceSection';
import { StatsSection } from '@/app/components/StatsSection';
import { ExpertSection } from '@/app/components/ExpertSection';
import { ImageTextModule } from '@/app/components/ImageTextModules';
import { ContactSection } from '@/app/components/ContactSection';
import { Footer } from '@/app/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServiceSection />
      <StatsSection />
      <ExpertSection />

      {/* Image-Text Modules */}
      <ImageTextModule
        title="Wertermittlung und Baukostenplanung"
        description="Als zertifizierter Sachverständiger nach DIN EN ISO/IEC 17024 erstellen wir fundierte Immobilienbewertungen und detaillierte Baukostenpläne für Ihre Projekte.

        Unsere Expertise umfasst Verkehrswertermittlungen, Beleihungswertgutachten, Mietwertschätzungen sowie umfassende Kostenkalkulationen für Neubau-, Sanierungs- und Modernisierungsprojekte."
        imageSrc="/images/construction-image.png"
        imageAlt="Wertermittlung und Baukostenplanung"
        buttonText="Kostenlose Erstberatung"
        reversed={false}
      />

      <ImageTextModule
        title="Nachhaltiges Bauen"
        description="Wir entwickeln zukunftsorientierte Konzepte für energieeffizientes und nachhaltiges Bauen, die sowohl ökologische als auch ökonomische Vorteile bieten.

        Von der Planung bis zur Zertifizierung begleiten wir Sie bei der Umsetzung nachhaltiger Bauprojekte nach aktuellen Standards wie DGNB, BREEAM oder LEED."
        imageSrc="/images/sustainable-building.png"
        imageAlt="Nachhaltiges Bauen"
        buttonText="Nachhaltigkeitskonzept anfragen"
        reversed={true}
        backgroundColor="var(--color-gray-light)"
      />

      <ImageTextModule
        title="Professur für Bau- und Immobilienwirtschaft"
        description="Prof. Dr. Christoph Wagener verbindet als Professor an der Steinbeis Hochschule Berlin wissenschaftliche Forschung mit praktischer Anwendung in der Immobilienwirtschaft.

        Seine Forschungsschwerpunkte umfassen innovative Bewertungsmethoden, Marktanalysen und die Entwicklung neuer Standards für die Immobilienbewertung."
        imageSrc="/images/real-estate.png"
        imageAlt="Professur für Bau- und Immobilienwirtschaft"
        buttonText="Forschungsprojekte entdecken"
        reversed={false}
      />

      <ImageTextModule
        title="Risk Engineering"
        description="Systematische Risikoanalyse und -bewertung für Ihre Bau- und Immobilienprojekte. Wir identifizieren potenzielle Risiken und entwickeln maßgeschneiderte Strategien zur Risikominimierung.

        Unser Risk Engineering umfasst technische, wirtschaftliche und rechtliche Risikoaspekte sowie die Entwicklung von Notfallplänen und Krisenmanagement-Strategien."
        imageSrc="/images/risk-engineering.png"
        imageAlt="Risk Engineering"
        buttonText="Risikoanalyse beauftragen"
        reversed={true}
        backgroundColor="var(--color-gray-light)"
      />

      <ContactSection />
      <Footer />
    </main>
  );
}
