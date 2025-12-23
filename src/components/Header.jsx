import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="hero-compact" role="banner" aria-label="Hero">
      <div className="hero-inner">
        <div className="hero-content">
          <h1 className="hero-title">John DOE</h1>
          <p className="hero-sub">Développeur full stack</p>
        </div>
      </div>
    </header>
  );
}
