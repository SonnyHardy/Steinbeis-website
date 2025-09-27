import React from 'react';
import { Card } from '../UI';
import { StatCardProps } from '@/types';

export default function StatCard({ number, label, backgroundColor = 'light-blue' }: StatCardProps) {
  return (
    <Card backgroundColor={backgroundColor} className="p-8 h-full flex flex-col">
      <div className="flex flex-col">
        <div className="font-red-hat font-black text-4xl md:text-5xl text-[var(--text-primary)] mb-3 leading-none">
          {number}
        </div>

          <hr className="mb-3 text-white/30" />

        <div className="font-albert-sans font-medium text-black/50 text-sm md:text-base leading-tight">
          {label}
        </div>
      </div>
    </Card>
  );
}