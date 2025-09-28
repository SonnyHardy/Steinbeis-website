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
  reversed = false,
  backgroundColor = 'white'
}: ImageTextModuleProps) {
  return (
    <section className={`p-20 ${backgroundColor === 'white' ? 'bg-white' : `bg-[${backgroundColor}]`}`}>
      <div className="flex justify-between">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
          reversed ? 'lg:grid-flow-col-dense' : ''
        }`}>
          {/* Bild */}
          <div className={`${reversed ? 'lg:col-start-2' : ''}`}>
            <div className="w-2/3 relative overflow-hidden rounded-lg shadow-[var(--shadow-card)]">
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
                  variant="tertiary"
                  onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Mehr erfahren
                </Button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}