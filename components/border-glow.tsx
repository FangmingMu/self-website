"use client"

import React from 'react';

interface BorderGlowProps {
  children: React.ReactNode;
  className?: string;
  borderRadius?: number;
  backgroundColor?: string;
}

const BorderGlow: React.FC<BorderGlowProps> = ({
  children,
  className = '',
  borderRadius = 16,
  backgroundColor = '#09090b',
}) => {
  return (
    <div
      className={`border-glow-card group ${className}`}
      style={{
        '--border-radius': `${borderRadius}px`,
        '--card-bg': backgroundColor,
      } as React.CSSProperties}
    >
      <span className="edge-light" />
      <div className="border-glow-inner">
        {children}
      </div>
    </div>
  );
};

export default BorderGlow;
