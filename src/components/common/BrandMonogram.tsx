import React from 'react';

interface BrandMonogramProps {
  size?: number;
  color?: string;
  className?: string;
}

export const BrandMonogram: React.FC<BrandMonogramProps> = ({
  size = 32,
  color = '#FFFFFF',
  className = '',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="SZ Brand Monogram"
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      {/* Top Z / S bar */}
      <path
        d="M18 20 H82 L70 34 H32 L18 20Z"
        fill={color}
      />
      {/* Upper diagonal slash */}
      <path
        d="M70 34 L32 66 H18 L56 34 H70Z"
        fill={color}
      />
      {/* Lower diagonal slash */}
      <path
        d="M44 66 L82 34 H68 L30 66 H44Z"
        fill={color}
        fillOpacity="0.45"
      />
      {/* Bottom Z / S bar */}
      <path
        d="M18 66 L30 80 H82 L68 66 H18Z"
        fill={color}
      />
    </svg>
  );
};

export default BrandMonogram;
