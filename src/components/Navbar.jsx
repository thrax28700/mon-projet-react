import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    function handleOutsideClick(e) {
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  function handleLinkClick() {
    setOpen(false);
  }

  return (
    <nav className="site-nav" role="navigation" aria-label="Main navigation" ref={navRef}>
      <div className="nav-inner">
        <div className="nav-brand">
          <a className="brand-link" href="/">John DOE</a>
        </div>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <div className={`nav-links ${open ? 'open' : ''}`} role="menubar" aria-hidden={!open}>
          <a role="menuitem" href="/" onClick={handleLinkClick}>HOME</a>
          <a role="menuitem" href="/services" onClick={handleLinkClick}>SERVICES</a>
          <a role="menuitem" href="/portfolio" onClick={handleLinkClick}>PORTFOLIO</a>
          <a role="menuitem" href="/contact" onClick={handleLinkClick}>CONTACT</a>
          <a role="menuitem" href="/legal" onClick={handleLinkClick}>MENTIONS LEGALES</a>
        </div>
      </div>

      <div className={`mobile-menu ${open ? 'open' : ''}`} aria-hidden={!open}>
        <a href="/" onClick={handleLinkClick}>HOME</a>
        <a href="/services" onClick={handleLinkClick}>SERVICES</a>
        <a href="/portfolio" onClick={handleLinkClick}>PORTFOLIO</a>
        <a href="/contact" onClick={handleLinkClick}>CONTACT</a>
        <a href="/legal" onClick={handleLinkClick}>MENTIONS LEGALES</a>
      </div>
    </nav>
  );
}
