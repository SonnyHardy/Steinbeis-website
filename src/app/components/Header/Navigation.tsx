'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '../UI';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { href: '#dienstleistungen', label: 'Dienstleistungen' },
    { href: '#zertifizierung', label: 'Zertifizierung' },
    { href: '#zahlen', label: 'Zahlen' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-evenly">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/images/steinbeis-logo.png"
              alt="Steinbeis Beratungszentrum Logo"
              width={350}
              height={60}
              className="h-24 w-56 cursor-pointer"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`font-manrope font-medium transition-colors duration-200 hover:text-[var(--color-secondary)] ${
                  isScrolled ? 'text-black' : 'text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Kontakt Button */}
          <div className="hidden md:block">
            <Button
              variant= {isScrolled ? 'primary' : 'secondary'}
              onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Kontakt
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menü öffnen"
          >
            <div className={`w-6 h-0.5 mb-1 transition-colors ${isScrolled ? 'bg-black' : 'bg-white'}`}></div>
            <div className={`w-6 h-0.5 mb-1 transition-colors ${isScrolled ? 'bg-black' : 'bg-white'}`}></div>
            <div className={`w-6 h-0.5 transition-colors ${isScrolled ? 'bg-black' : 'bg-white'}`}></div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/20">
            <div className="flex flex-col space-y-4 pt-4">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`font-manrope font-medium transition-colors duration-200 hover:text-[var(--color-secondary)] ${
                    isScrolled ? 'text-black' : 'text-white'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button
                  variant= {isScrolled ? 'primary' : 'secondary'}
                onClick={() => {
                  document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
                className="self-start"
              >
                Kontakt
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}