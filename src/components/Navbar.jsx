import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <header className="header">
      <div className="logo">JOHN DOE</div>
      <button
        className={`burger ${open ? "burger-open" : ""}`}
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`nav ${open ? "nav-open" : ""}`}>
        <Link
          to="/"
          className={location.pathname === "/" ? "active" : ""}
          onClick={closeMenu}
        >
          HOME
        </Link>
        <Link
          to="/services"
          className={location.pathname === "/services" ? "active" : ""}
          onClick={closeMenu}
        >
          SERVICES
        </Link>
        <Link
          to="/portfolio"
          className={location.pathname === "/portfolio" ? "active" : ""}
          onClick={closeMenu}
        >
          PORTFOLIO
        </Link>
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "active" : ""}
          onClick={closeMenu}
        >
          CONTACT
        </Link>
        <Link
          to="/mentions-legales"
          className={
            location.pathname === "/mentions-legales" ? "active" : ""
          }
          onClick={closeMenu}
        >
          MENTIONS LÉGALES
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;