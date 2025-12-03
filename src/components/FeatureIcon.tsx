import React from 'react';

interface FeatureIconProps {
  variant: 'emotional' | 'development' | 'activities' | 'progress';
}

export function FeatureIcon({ variant }: FeatureIconProps) {
  const variantStyles = {
    emotional: 'bg-[#ccbcd2]',
    development: 'bg-[#a0c3a6]',
    activities: 'bg-[#e1d1c1]',
    progress: 'bg-[#c2d3d6]',
  };
  
  return (
    <div className={`rounded-[20px] w-[100px] h-[100px] flex items-center justify-center ${variantStyles[variant]}`}>
      <div className="w-12 h-12 flex items-center justify-center">
        {variant === 'emotional' && (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="white" strokeWidth="2"/>
            <circle cx="12" cy="14" r="2" fill="white"/>
            <circle cx="20" cy="14" r="2" fill="white"/>
            <path d="M12 20C12 20 14 22 16 22C18 22 20 20 20 20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )}
        {variant === 'development' && (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M16 4L18 12L26 14L18 16L16 24L14 16L6 14L14 12L16 4Z" fill="white"/>
            <circle cx="24" cy="8" r="2" fill="white"/>
            <circle cx="8" cy="24" r="2" fill="white"/>
          </svg>
        )}
        {variant === 'activities' && (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect x="6" y="6" width="20" height="20" rx="2" stroke="white" strokeWidth="2"/>
            <path d="M12 16L16 20L24 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
        {variant === 'progress' && (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M6 24L12 18L16 22L26 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20 12H26V18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </div>
    </div>
  );
}
