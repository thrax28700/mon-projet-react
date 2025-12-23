import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="site-header" role="banner" aria-label="Header">
      <div className="header-inner">
        <a className="logo" href="/">John DOE</a>

        <nav className="nav desktop header-desktop-nav" aria-label="Navigation principale">
          <a href="#home">Accueil</a>
          <a href="#about">À propos</a>
          <a href="#projects">Projets</a>
          <a href="#contact">Contact</a>
        </nav>

        <button id="header-burger" aria-label="Ouvrir le menu" aria-expanded="false" type="button">
          <svg width="36" height="28" viewBox="0 0 36 28" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
            <rect x="4" y="3" width="28" height="3.6" rx="2" fill="#ffffff" />
            <rect x="4" y="12" width="28" height="3.6" rx="2" fill="#ffffff" />
            <rect x="4" y="21" width="28" height="3.6" rx="2" fill="#ffffff" />
          </svg>
        </button>
      </div>
    </header>
  );
}
