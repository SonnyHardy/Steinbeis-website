import React from 'react';
import Image from 'next/image';

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
    <footer className="bg-[var(--color-footer-bg)] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image
                src="/images/steinbeis-logo.png"
                alt="Steinbeis Beratungszentrum Logo"
                width={240}
                height={70}
                className="h-10 w-auto mb-4"
              />
            </div>

            <p className="font-albert-sans text-[var(--text-muted)] mb-6 leading-relaxed">
              Steinbeis Beratungszentrum Bau- und Immobilienökonomie –
              Ihr kompetenter Partner für Wertermittlung, Baukostenplanung
              und umfassende Beratung im Bau- und Immobilienbereich.
            </p>

            {/* Kontaktinformationen */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="font-albert-sans text-[var(--text-muted)] text-sm">
                  <p>Musterstraße 123</p>
                  <p>10115 Berlin, Deutschland</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[var(--color-secondary)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="font-albert-sans text-[var(--text-muted)] text-sm">
                  +49 (0) 30 12345678
                </p>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[var(--color-secondary)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="font-albert-sans text-[var(--text-muted)] text-sm">
                  info@steinbeis-bau.de
                </p>
              </div>
            </div>
          </div>

          {/* Unternehmen Links */}
          <div>
            <h4 className="font-red-hat font-semibold text-[var(--text-primary)] mb-4">
              Unternehmen
            </h4>
            <ul className="space-y-2">
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

          {/* Zertifizierungen & Partner */}
          <div>
            <h4 className="font-red-hat font-semibold text-[var(--text-primary)] mb-4">
              Zertifizierungen
            </h4>

            {/* EUcert Siegel */}
            <div className="mb-6">
              <Image
                src="/images/eucert-siegel.png"
                alt="EUcert Zertifizierungssiegel"
                width={80}
                height={80}
                className="w-16 h-16 mb-2"
              />
              <p className="font-albert-sans text-xs text-[var(--text-muted)]">
                Zertifiziert nach<br />
                DIN EN ISO/IEC 17024
              </p>
            </div>

            {/* Members Area */}
            <div>
              <p className="font-manrope text-sm text-[var(--text-primary)] mb-2">
                Members area:
              </p>
              <div className="bg-white rounded-lg p-2 inline-block">
                <Image
                  src="/images/members-area-screenshot.png"
                  alt="Members Area Interface"
                  width={120}
                  height={52}
                  className="w-24 h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <p className="font-red-hat font-semibold text-[var(--text-primary)] mb-4 text-center">
            Unsere Partner
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-70">
            {/* LuckyCloud Logo Placeholder */}
            <div className="bg-white rounded-lg p-3">
              <div className="w-24 h-6 bg-gray-300 rounded"></div>
            </div>
            {/* Weitere Partner Logos können hier hinzugefügt werden */}
          </div>
        </div>

        {/* Social Media & Legal Links */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <p className="font-albert-sans text-[var(--text-muted)] text-sm mr-2">
                Folgen Sie uns:
              </p>
              <a
                href="#"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--color-secondary)] transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--color-secondary)] transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--color-secondary)] transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>

            {/* Legal Links & Copyright */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex items-center gap-4">
                {legalLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="font-albert-sans text-[var(--text-muted)] text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="text-center md:text-right">
                <p className="font-albert-sans text-[var(--text-muted)] text-sm">
                  © {currentYear} Sebastian Kratz
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}