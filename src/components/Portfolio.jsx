import React from 'react';
import ImageResponsive from './ImageResponsive';
import fresh from '../assets/images/fresh-food.jpg';
import restaurant from '../assets/images/restaurant-japonnais.jpg';
import espace from '../assets/images/espace-bien-etre.jpg';
import seo from '../assets/images/seo.jpg';
import coder from '../assets/images/coder.jpg';
import screens from '../assets/images/screens.jpg';
import './Portfolio.css';

const projects = [
  { id: 'fresh-food', title: 'Fresh Food', tech: 'PHP / MySQL', img: fresh },
  { id: 'restaurant', title: 'Restaurant Akira', tech: 'WordPress', img: restaurant },
  { id: 'espace', title: 'Espace bien-être', tech: 'Laravel', img: espace },
  { id: 'seo', title: 'SEO', tech: 'SEO Tools', img: seo },
  { id: 'coder', title: "Création d'une API", tech: 'PHP / Symfony', img: coder },
  { id: 'screens', title: 'Maquette d’un site', tech: 'Figma', img: screens },
];

export default function Portfolio() {
  return (
    <section className="container section portfolio-section" aria-labelledby="portfolio-title">
      <h2 id="portfolio-title">Portfolio</h2>
      <p className="lead">Voici quelques-unes de mes réalisations</p>
      <div className="portfolio-grid">
        {projects.map((p) => (
          <article key={p.id} className="project-card">
            <div className="project-media">
              <ImageResponsive src={p.img} alt={p.title} />
            </div>
            <div className="project-body">
              <h3>{p.title}</h3>
              <p className="tech">{p.tech}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
