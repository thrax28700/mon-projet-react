import React from 'react';
import './Services.css';

export default function Services() {
  return (
    <section className="container section">
      <h2>Mon offre de services</h2>
      <p className="lead">Voici les prestations sur lesquelles je peux intervenir</p>

      <div className="services-grid">
        <article className="service-card">
          <h3>UX Design</h3>
          <p>Conception centrée utilisateur pour des interfaces claires et efficaces.</p>
        </article>

        <article className="service-card">
          <h3>Développement web</h3>
          <p>Sites et applications avec HTML, CSS, JavaScript, React, PHP, Laravel.</p>
        </article>

        <article className="service-card">
          <h3>Référencement</h3>
          <p>Optimisation SEO pour améliorer la visibilité et le trafic qualifié.</p>
        </article>
      </div>
    </section>
  );
}
