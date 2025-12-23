// src/components/Hero.jsx
import React from 'react';
import './Header.css'; // réutilise les styles existants

export default function Hero() {
  return (
    <section className="hero-compact" role="region" aria-label="Hero" style={{minHeight: '360px'}}>
      <div className="hero-overlay" />
      <div className="hero-inner">
        <div className="hero-content">
          <p className="hero-line">Bonjour je suis John DOE</p>
          <p className="hero-line">Développeur full stack</p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#about">En savoir plus</a>
          </div>
        </div>
      </div>
    </section>
  );
}
