import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  backgroundColor?: string;
}

export default function Card({
  children,
  className = '',
  hover = true,
  backgroundColor = 'white'
}: CardProps) {
  const baseStyles = 'rounded-lg border border-[var(--border-light)] shadow-[var(--shadow-card)] transition-all duration-200';
  const hoverStyles = hover ? 'hover:shadow-lg hover:-translate-y-1' : '';
  const bgStyles = backgroundColor === 'white' ? 'bg-white' : backgroundColor === 'light-blue' ? 'bg-[var(--color-accent-blue)]' : `bg-[${backgroundColor}]`;

  return (
    <div className={`${baseStyles} ${hoverStyles} ${bgStyles} ${className}`}>
      {children}
    </div>
  );
}