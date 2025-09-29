'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '../UI';
import { Menu, X } from 'lucide-react';

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
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/images/steinbeis-logo.png"
              alt="Steinbeis Beratungszentrum Logo"
              width={350}
              height={60}
              className="h-16 w-40 sm:h-20 sm:w-48 lg:h-24 lg:w-56 cursor-pointer transition-all duration-200"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 xl:space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`font-manrope font-medium transition-all duration-200 hover:text-[var(--color-secondary)] hover:scale-105 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[var(--color-secondary)] after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full ${
                  isScrolled ? 'text-black' : 'text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Kontakt Button */}
          <div className="hidden lg:block">
            <Button
              variant={isScrolled ? 'primary' : 'secondary'}
              onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
              className="transition-transform duration-200 hover:scale-105"
            >
              Kontakt
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 transition-transform duration-200 hover:scale-110"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 transition-colors ${isScrolled ? 'text-black' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 transition-colors ${isScrolled ? 'text-black' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className={`mt-4 pb-4 border-t transition-colors duration-300 ${
            isScrolled ? 'border-gray-200' : 'border-white/20'
          }`}>
            <div className="flex flex-col space-y-4 pt-4">
              {navigationItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`font-manrope font-medium transition-all duration-200 hover:text-[var(--color-secondary)] hover:translate-x-2 transform ${
                    isScrolled ? 'text-black' : 'text-white'
                  } ${isMobileMenuOpen ? 'animate-slideInLeft' : ''}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className={`pt-2 ${isMobileMenuOpen ? 'animate-slideInLeft' : ''}`} 
                   style={{ animationDelay: `${navigationItems.length * 100}ms` }}>
                <Button
                  variant={isScrolled ? 'primary' : 'secondary'}
                  onClick={() => {
                    document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
                    setIsMobileMenuOpen(false);
                  }}
                  className="self-start transition-transform duration-200 hover:scale-105"
                >
                  Kontakt
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}