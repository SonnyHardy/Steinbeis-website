import React from 'react';
import Image from 'next/image';
import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <section id="kontakt" className="relative py-20 overflow-hidden">
      {/* Hintergrundbild */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/contact-background.png"
          alt="Kontakt Hintergrund"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative">
        <div className="max-w-xl ml-8 md:ml-16 lg:ml-20">
          {/* Kontaktformular */}
          <ContactForm  />

        </div>
      </div>
    </section>
  );
}