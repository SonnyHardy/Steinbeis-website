import React from 'react';
import Image from 'next/image';
import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <section id="kontakt" className="relative py-20 overflow-hidden">
      {/* Hintergrundbild mit Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/contact-background.png"
          alt="Kontakt Hintergrund"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Sektion Header */}
          <div className="text-center text-white mb-12">
            <h2 className="module-title mb-6">
              Lassen Sie uns über Ihr Projekt sprechen
            </h2>
            <p className="font-albert-sans text-lg leading-relaxed opacity-90">
              Kontaktieren Sie uns für eine unverbindliche Beratung. Wir freuen uns darauf,
              Sie bei Ihrem Bau- oder Immobilienprojekt zu unterstützen.
            </p>
          </div>

          {/* Kontaktformular */}
          <ContactForm />

          {/* Zusätzliche Kontaktinformationen */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="w-12 h-12 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-red-hat font-semibold mb-2">E-Mail</h4>
              <p className="font-albert-sans text-sm opacity-90">
                info@steinbeis-bau.de
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="w-12 h-12 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h4 className="font-red-hat font-semibold mb-2">Telefon</h4>
              <p className="font-albert-sans text-sm opacity-90">
                +49 (0) 30 12345678
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="w-12 h-12 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="font-red-hat font-semibold mb-2">Adresse</h4>
              <p className="font-albert-sans text-sm opacity-90">
                Musterstraße 123<br />
                10115 Berlin
              </p>
            </div>
          </div>

          {/* Öffnungszeiten */}
          <div className="mt-12 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
              <h4 className="font-red-hat font-semibold text-white mb-4">Sprechzeiten</h4>
              <div className="space-y-2 font-albert-sans text-sm text-white/90">
                <div className="flex justify-between">
                  <span>Montag - Freitag:</span>
                  <span>9:00 - 17:00 Uhr</span>
                </div>
                <div className="flex justify-between">
                  <span>Samstag:</span>
                  <span>Nach Vereinbarung</span>
                </div>
                <div className="flex justify-between">
                  <span>Sonntag:</span>
                  <span>Geschlossen</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}