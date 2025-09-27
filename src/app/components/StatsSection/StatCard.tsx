import React from 'react';
import { Card } from '../UI';
import { StatCardProps } from '@/types';

export default function StatCard({ number, label, backgroundColor = 'light-blue' }: StatCardProps) {
  return (
    <Card backgroundColor={backgroundColor} className="p-8 text-center h-full flex flex-col justify-center">
      <div className="flex flex-col items-center">
        <div className="font-red-hat font-bold text-4xl md:text-5xl text-[var(--text-primary)] mb-3 leading-none">
          {number}
        </div>
        <div className="font-albert-sans font-medium text-[var(--text-secondary)] text-sm md:text-base leading-tight">
          {label}
        </div>
      </div>
    </Card>
  );
}