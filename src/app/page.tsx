'use client';

import { Navigation, HeroSection } from '@/app/components/Header';
import { ServiceSection } from '@/app/components/ServiceSection';
import { StatsSection } from '@/app/components/StatsSection';
import { ExpertSection } from '@/app/components/ExpertSection';
import { ImageTextModule } from '@/app/components/ImageTextModules';
import { ContactSection } from '@/app/components/ContactSection';
import { Footer } from '@/app/components/Footer';
import CertificatSection from "@/app/components/CertificatSection/CertificatSection";

export default function Home() {
  return (
    <main className="min-h-screen">
        <Navigation />
        <HeroSection />
        <ServiceSection />
        <StatsSection />
        <ExpertSection />
        <CertificatSection />

        {/* Image-Text Modules */}
        <ImageTextModule
            title="Wertermittlung und Baukostenplanung"
            description="Commodo lorem est amet urna. Amet bibendum pharetra urna at tortor pulvinar.
         Cras sit dictumst consequat non. Congue facilisi orci etiam enim id donec. Rhoncus id nisl
          ultrices ac pharetra tellus placerat."
            imageSrc="/images/construction-image.png"
            imageAlt="Wertermittlung und Baukostenplanung"
            reversed={false}
        />

        <ImageTextModule
            title="Nachhaltiges Bauen"
            description="Commodo lorem est amet urna. Amet bibendum pharetra urna at tortor pulvinar.
         Cras sit dictumst consequat non. Congue facilisi orci etiam enim id donec. Rhoncus id nisl
          ultrices ac pharetra tellus placerat."
            imageSrc="/images/sustainable-building.png"
            imageAlt="Nachhaltiges Bauen"
            reversed={true}
            backgroundColor="var(--color-gray-light)"
        />

        <ImageTextModule
            title="Professur für Bau- und Immobilienwirtschaft"
            description="Commodo lorem est amet urna. Amet bibendum pharetra urna at tortor pulvinar.
         Cras sit dictumst consequat non. Congue facilisi orci etiam enim id donec. Rhoncus id nisl
          ultrices ac pharetra tellus placerat."
            imageSrc="/images/real-estate.png"
            imageAlt="Professur für Bau- und Immobilienwirtschaft"
            reversed={false}
        />

        <ImageTextModule
            title="Risk Engineering"
            description="Commodo lorem est amet urna. Amet bibendum pharetra urna at tortor pulvinar.
         Cras sit dictumst consequat non. Congue facilisi orci etiam enim id donec. Rhoncus id nisl
          ultrices ac pharetra tellus placerat."
            imageSrc="/images/risk-engineering.png"
            imageAlt="Risk Engineering"
            reversed={true}
            backgroundColor="var(--color-gray-light)"
        />

        <ContactSection />
        <Footer />
    </main>
  );
}
