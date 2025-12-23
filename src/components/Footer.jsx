import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-grid">
        <div>
          <h4>John Doe</h4>
          <p>40 rue Laure Diebold<br/>69009 Lyon, France<br/>10 20 30 40 50<br/>john.doe@gmail.com</p>
        </div>

        <div>
          <h4>Liens utiles</h4>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contact">Me contacter</a></li>
            <li><a href="/legal">Mentions légales</a></li>
          </ul>
        </div>

        <div>
          <h4>Mes dernières réalisations</h4>
          <ul>
            <li>Fresh Food</li>
            <li>Restaurant Akira</li>
            <li>Espace bien-être</li>
            <li>SEO</li>
            <li>Création d'une API</li>
            <li>Maquette d'un site</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} John Doe</div>
    </footer>
  );
}
