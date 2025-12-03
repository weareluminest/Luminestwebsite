import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  size?: 'small' | 'default' | 'large';
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'default', 
  onClick,
  icon,
  className = ''
}: ButtonProps) {
  const baseStyles = 'rounded-[20px] transition-all duration-200 inline-flex items-center justify-center gap-2';
  
  const variantStyles = {
    primary: 'bg-[#a083ac] text-white hover:bg-[#8f6c9d] shadow-sm',
    secondary: 'bg-[#6f8872] text-white hover:bg-[#5d7360] shadow-sm',
    accent: 'bg-[#88a9af] text-white hover:bg-[#76979d] shadow-sm',
    outline: 'bg-white border-2 border-[#e1d1c1] text-[#79694e] hover:bg-[#f7f2ee]',
    ghost: 'bg-transparent text-[#533d5c] hover:bg-[#f2ebe3]',
  };
  
  const sizeStyles = {
    small: 'px-6 py-3 text-sm',
    default: 'px-8 py-4',
    large: 'px-12 py-5 text-lg',
  };
  
  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
}
