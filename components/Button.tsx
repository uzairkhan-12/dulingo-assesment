'use client';

import React from 'react';

export interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

const Button = ({
  onClick,
  disabled = false,
  children,
  variant = 'primary',
  className = '',
}: ButtonProps) => {
  const baseClasses = 'px-6 py-2 font-semibold rounded-lg transition-colors';
  const variantClasses = {
    primary: 'bg-[#d382fb] text-white hover:bg-[#c973fb] border border-[#d382fb]',
    secondary: 'bg-white text-black border border-black hover:bg-gray-100',
    outline: 'border border-gray-400 text-gray-700 hover:bg-gray-100',
  };
  const disabledClasses = 'bg-gray-200 text-gray-500 border-gray-300 cursor-not-allowed';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${disabled ? disabledClasses : variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;