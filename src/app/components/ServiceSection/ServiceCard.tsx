import React from 'react';
import { Card } from '../UI';
import { ServiceCardProps } from '@/types';

export default function ServiceCard({ title, description, className = '' }: ServiceCardProps) {
  return (
    <Card className={`p-6 h-full ${className}`}>
      <div className="flex flex-col h-full">
        <h3 className="font-red-hat font-semibold text-xl text-[var(--text-primary)] mb-4 leading-tight">
          {title}
        </h3>
        <p className="font-albert-sans text-[var(--text-muted)] text-sm leading-relaxed flex-grow">
          {description}
        </p>
      </div>
    </Card>
  );
}