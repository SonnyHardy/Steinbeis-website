'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '../UI';
import { ImageTextModuleProps } from '@/types';

export default function ImageTextModule({
  title,
  description,
  imageSrc,
  imageAlt,
  buttonText,
  reversed = false,
  backgroundColor = 'white'
}: ImageTextModuleProps) {
  return (
    <section className={`py-20 ${backgroundColor === 'white' ? 'bg-white' : `bg-[${backgroundColor}]`}`}>
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
          reversed ? 'lg:grid-flow-col-dense' : ''
        }`}>
          {/* Bild */}
          <div className={`${reversed ? 'lg:col-start-2' : ''}`}>
            <div className="relative overflow-hidden rounded-lg shadow-[var(--shadow-card)]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={514}
                height={524}
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className={`${reversed ? 'lg:col-start-1' : ''}`}>
            <div className="space-y-6">
              <h2 className="section-title text-[var(--text-primary)] leading-tight">
                {title}
              </h2>

              <div className="space-y-4">
                {description.split('\n').map((paragraph, index) => (
                  <p key={index} className="font-albert-sans text-[var(--text-muted)] leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="pt-4">
                <Button
                  variant="primary"
                  onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {buttonText}
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </div>

              {/* Zusätzliche Highlights */}
              <div className="pt-6 border-t border-[var(--border-light)]">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="text-center sm:text-left">
                    <div className="font-red-hat font-bold text-2xl text-[var(--color-secondary)]">25+</div>
                    <div className="font-albert-sans text-xs text-[var(--text-muted)]">Jahre Erfahrung</div>
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="font-red-hat font-bold text-2xl text-[var(--color-secondary)]">1500+</div>
                    <div className="font-albert-sans text-xs text-[var(--text-muted)]">Abgewickelte Projekte</div>
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="font-red-hat font-bold text-2xl text-[var(--color-secondary)]">100%</div>
                    <div className="font-albert-sans text-xs text-[var(--text-muted)]">Kundenzufriedenheit</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}