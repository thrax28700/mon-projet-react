import React from 'react';

export default function ImageResponsive({ src, alt = '', className = '' }) {
  return <img src={src} alt={alt} loading="lazy" className={className} style={{ display: 'block', width: '100%', height: 'auto' }} />;
}
