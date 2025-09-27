import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  disabled?: boolean;
}

export default function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'medium',
  className = '',
  disabled = false
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-manrope font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer';

  const variantStyles = {
    primary: 'bg-black text-white hover:bg-gray-800 focus:ring-gray-500 shadow-[var(--shadow-button)]',
    secondary: 'bg-white text-black border border-gray-300 hover:bg-gray-50 focus:ring-gray-300'
  };

  const sizeStyles = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  };

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`}
    >
      {children}
    </button>
  );
}