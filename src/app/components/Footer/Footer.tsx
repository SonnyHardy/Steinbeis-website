import React from 'react';
import Image from 'next/image';
import {Instagram, Linkedin, Facebook} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { href: '#philosophie', label: 'Philosophie' },
    { href: '#team', label: 'Team' },
    { href: '#kontakt', label: 'Kontakt' }
  ];

  const legalLinks = [
    { href: '#datenschutz', label: 'Datenschutz' },
    { href: '#impressum', label: 'Impressum' }
  ];

  return (
    <footer className="bg-[var(--color-footer-bg)] p-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="">
              <Image
                src="/images/steinbeis-logo.png"
                alt="Steinbeis Beratungszentrum Logo"
                width={240}
                height={70}
                className="h-24 w-60"
              />
            </div>

            {/* EUcert Siegel und Universität Logo am unteren Bereich */}
            <div className="flex flex-row items-center gap-1">
              {/* EUcert Siegel */}
              <div className="rounded-lg p-4">
                <Image
                    src="/images/eucert-siegel.png"
                    alt="EUcert Zertifizierungssiegel"
                    width={120}
                    height={120}
                    className="w-24 h-24 md:w-24 md:h-24"
                />
              </div>

              {/* Universitäts-Info */}
              <div>
                <Image
                    src="/images/members-area-screenshot.png"
                    alt="EUcert Zertifizierungssiegel"
                    width={200}
                    height={120}
                    className="w-32 h-16 md:w-32 md:h-16 rounded-lg"
                />
              </div>
            </div>

          </div>

          {/* Unternehmen Links */}
          <div>
            <h4 className="font-red-hat font-semibold text-[var(--text-primary)] mb-4 py-5">
              Unternehmen
            </h4>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-albert-sans text-[var(--text-muted)] text-sm hover:text-[var(--color-secondary)] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontaktinformationen */}
          <div>
            <h4 className="font-red-hat font-semibold text-[var(--text-primary)] mb-4 py-5">
              Kontaktinformationen
            </h4>

            <ul className="space-y-4">
              <li className="font-albert-sans text-[var(--text-muted)] text-sm hover:text-[var(--color-secondary)] transition-colors duration-200">
                Priminstraße 143, D-78479 Reichenau Insel
              </li>
              <li className="font-albert-sans text-[var(--text-muted)] text-sm hover:text-[var(--color-secondary)] transition-colors duration-200">
                +49 15678 971391
              </li>
              <li className="font-albert-sans text-[var(--text-muted)] text-sm hover:text-[var(--color-secondary)] transition-colors duration-200">
                christoph.wagener@stw.de
              </li>
            </ul>

          </div>
        </div>

        {/* Partners Logos */}
        <div className="pt-8 mb-8">
          <p className="font-red-hat font-semibold text-[var(--text-primary)] mb-4">
            Members area:
          </p>
          <div className="flex flex-wrap gap-8">
            {/* Smino Logo */}
            <Image
                src="/images/smino-logo.png"
                alt="Smino logo"
                width={120}
                height={52}
                className="font-bold"
            />
            {/* LuckyCloud Logo */}
            <Image
                src="/images/luckycloud-logo2.webp"
                alt="luckycloud logo"
                width={120}
                height={52}
                className="font-bold"
            />
          </div>
        </div>

        {/* Social Media & Legal Links */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <div className="text-center md:text-right">
              <p className="font-albert-sans text-[var(--text-muted)] text-sm">
                © {currentYear} Sebastian Kratz
              </p>
            </div>

            {/* Legal Links & Copyright */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex items-center gap-4">
                {legalLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="font-albert-sans text-[var(--text-muted)] text-sm hover:text-[var(--color-secondary)] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Social Media Icons */}
              <div className="flex items-center gap-3">
                <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text-muted)] hover:text-[var(--color-secondary)] transition-colors duration-200"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text-muted)] hover:text-[var(--color-secondary)] transition-colors duration-200"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text-muted)] hover:text-[var(--color-secondary)] transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>


            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}