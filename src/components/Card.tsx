import React from 'react';

interface CardProps {
  title: string;
  description: string;
  content?: string;
  variant?: 'default' | 'sage' | 'lavender' | 'sky' | 'beige';
  className?: string;
  icon?: React.ReactNode;
}

export function Card({ 
  title, 
  description, 
  content,
  variant = 'default',
  className = '',
  icon
}: CardProps) {
  const variantStyles = {
    default: 'bg-white shadow-[0px_0px_1px_1px_rgba(0,0,0,0.1)]',
    sage: 'bg-[#e6e7dd] shadow-[0px_0px_1px_1px_rgba(0,0,0,0.1)]',
    lavender: 'bg-[#eae2e6] shadow-[0px_0px_1px_1px_rgba(0,0,0,0.1)]',
    sky: 'bg-[#e7e8e6] shadow-[0px_0px_1px_1px_rgba(0,0,0,0.1)]',
    beige: 'bg-[#f1ece4] shadow-[0px_0px_1px_1px_rgba(0,0,0,0.1)]',
  };
  
  return (
    <div className={`rounded-[25px] p-8 ${variantStyles[variant]} ${className}`}>
      {icon && (
        <div className="mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-[#000000] mb-2">{title}</h3>
      <p className="text-[#686363] text-sm mb-4">{description}</p>
      {content && (
        <p className="text-[#000000]">{content}</p>
      )}
    </div>
  );
}
