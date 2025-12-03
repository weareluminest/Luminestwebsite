import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'beige';
}

export function Badge({ children, variant = 'primary' }: BadgeProps) {
  const variantStyles = {
    primary: 'bg-[#a083ac] text-white',
    secondary: 'bg-[#7ea584] text-white',
    accent: 'bg-[#88a9af] text-[#f0f4f5]',
    beige: 'bg-[#caad91] text-white',
  };
  
  return (
    <span className={`inline-block px-6 py-3 rounded-[25px] ${variantStyles[variant]}`}>
      {children}
    </span>
  );
}
