import React from "react";
import coder from "../assets/coder.jpg";

function Contact() {
  return (
    <section className="page">
      <div
        className="page-header"
        style={{ backgroundImage: `url(${coder})` }}
      >
        <h1>Contact</h1>
        <p>
          Pour me contacter en vue d’un entretien ou d’une future collaboration,
          merci de remplir le formulaire de contact.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-form">
          <h2>Formulaire de contact</h2>
          <form>
            <label>
              Votre nom
              <input type="text" />
            </label>
            <label>
              Votre adresse email
              <input type="email" />
            </label>
            <label>
              Votre numéro de téléphone
              <input type="tel" />
            </label>
            <label>
              Sujet
              <input type="text" />
            </label>
            <label>
              Votre message
              <textarea rows="5" />
            </label>
            <button type="submit" className="btn-primary">
              Envoyer
            </button>
          </form>
        </div>

        <div className="contact-info">
          <h2>Mes coordonnées</h2>
          <p>John Doe</p>
          <p>40 rue Laure Diebold</p>
          <p>69009 Lyon, France</p>
          <p>10 20 30 40 50</p>
          <p>john.doe@gmail.com</p>

          <div className="map-placeholder">
            <p>Carte : 40 Rue Laure Diebold, 69009 Lyon</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;