import React from 'react';
import undefineLogo from '../../assets/undefine_logo_clean.png';

export const Logo = ({ className = '', size = 'md', onClick }) => {
  const heightClasses = {
    sm: 'h-6',
    md: 'h-7 sm:h-8',
    lg: 'h-9',
  };

  const currentHeight = heightClasses[size] || heightClasses.md;

  return (
    <div
      onClick={onClick}
      className={`flex items-center select-none cursor-pointer ${className}`}
    >
      <img
        src={undefineLogo}
        alt="Undefine Logo"
        className={`${currentHeight} w-auto object-contain`}
        loading="eager"
      />
    </div>
  );
};
