import React from "react";
import freshFood from "../assets/fresh-food.jpg";
import restaurantJaponais from "../assets/restaurant-japonais.jpg";
import espaceBienEtre from "../assets/espace-bien-etre.jpg";
import seoImg from "../assets/seo.jpg";
import screens from "../assets/screens.jpg";
import coder from "../assets/coder.jpg";
import banner from "../assets/banner.jpg";

function Portfolio() {
  const projets = [
    {
      titre: "Fresh Food",
      desc: "Site de vente de produits frais en ligne",
      techno: "Site réalisé avec PHP et MySQL",
      img: freshFood,
    },
    {
      titre: "Restaurant Akira",
      desc: "Site de vente de produits frais en ligne",
      techno: "Site réalisé avec WordPress",
      img: restaurantJaponais,
    },
    {
      titre: "Espace bien-être",
      desc: "Site de vente de produits frais en ligne",
      techno: "Site réalisé avec LARAVEL",
      img: espaceBienEtre,
    },
    {
      titre: "SEO",
      desc: "Amélioration du référencement d’un site e-commerce",
      techno: "Utilisation des outils SEO",
      img: seoImg,
    },
    {
      titre: "Création d'une API",
      desc: "Création d’une API RESTFUL publique",
      techno: "PHP - SYMFONY",
      img: screens,
    },
    {
      titre: "Maquette d’un site web",
      desc: "Création du prototype d’un site",
      techno: "Réalisé avec FIGMA",
      img: coder,
    },
  ];

  return (
    <section className="page">
      <div
        className="page-header"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h1>Portfolio</h1>
        <p>Voici quelques-unes de mes réalisations.</p>
      </div>

      <div className="portfolio-grid">
        {projets.map((p) => (
          <article className="portfolio-card" key={p.titre}>
            <img src={p.img} alt={p.titre} />
            <div className="portfolio-content">
              <h2>{p.titre}</h2>
              <p>{p.desc}</p>
              <button className="btn-outline">Voir le site</button>
              <p className="techno">{p.techno}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;