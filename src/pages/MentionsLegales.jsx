import React, { useState } from "react";
import banner from "../assets/banner.jpg";

function MentionsLegales() {
  const [open, setOpen] = useState({
    editeur: true,
    hebergeur: true,
    credits: true,
  });

  const toggle = (key) =>
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <section className="page">
      <div
        className="page-header"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h1>Mentions légales</h1>
      </div>

      <div className="mentions-container">
        <div className="accordion">
          <div className="accordion-item">
            <button
              onClick={() => toggle("editeur")}
              className="accordion-title"
            >
              Éditeur du site
            </button>
            {open.editeur && (
              <div className="accordion-content">
                <p>John Doe</p>
                <p>40 rue Laure Diebold</p>
                <p>69009 Lyon, France</p>
                <p>10 20 30 40 50</p>
                <p>john.doe@gmail.com</p>
              </div>
            )}
          </div>

          <div className="accordion-item">
            <button
              onClick={() => toggle("hebergeur")}
              className="accordion-title"
            >
              Hébergeur
            </button>
            {open.hebergeur && (
              <div className="accordion-content">
                <p>alwaysdata</p>
                <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
                <p>www.alwaysdata.com</p>
              </div>
            )}
          </div>

          <div className="accordion-item">
            <button
              onClick={() => toggle("credits")}
              className="accordion-title"
            >
              Crédits
            </button>
            {open.credits && (
              <div className="accordion-content">
                <p>
                  Ce site a été réalisé par John Doe, étudiant au Centre Européen
                  de formation.
                </p>
                <p>
                  Les images utilisées sur ce site sont libres de droits et ont
                  été obtenues sur le site Pixabay.
                </p>
                <p>
                  La favicon de ce site a été fournie par Freepik - Flaticon.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MentionsLegales;