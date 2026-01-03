import React from "react";
import banner from "../assets/banner.jpg";

function Services() {
  return (
    <section className="page">
      <div
        className="page-header"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h1>Mon offre de services</h1>
        <p>Voici les prestations sur lesquelles je peux intervenir</p>
      </div>

      <div className="services-grid">
        <div className="service-card">
          <h2>UX Design</h2>
          <p>
            L’UX Design est une discipline qui consiste à concevoir des produits
            (sites web, applications mobiles, logiciels, objets connectés, etc.)
            en plaçant l’utilisateur au centre des préoccupations. L’objectif est
            de rendre l’expérience utilisateur la plus fluide et agréable possible.
          </p>
        </div>
        <div className="service-card">
          <h2>Développement web</h2>
          <p>
            Le développement de sites web consiste à créer des sites internet en
            utilisant des langages de programmation (HTML, CSS, JavaScript, PHP
            etc.) et des frameworks (Bootstrap, React, Angular, etc.).
          </p>
        </div>
        <div className="service-card">
          <h2>Référencement</h2>
          <p>
            Le référencement naturel (SEO) est une technique qui consiste à
            optimiser un site web pour le faire remonter dans les résultats des
            moteurs de recherche (Google, Bing, Yahoo, etc.). L’objectif est
            d’attirer un maximum de visiteurs qualifiés sur le site.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;