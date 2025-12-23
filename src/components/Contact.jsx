import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const data = new FormData(form);
    const subject = encodeURIComponent(data.get('subject') || 'Contact via site');
    const body = encodeURIComponent(`Nom: ${data.get('name')}\nEmail: ${data.get('email')}\nTéléphone: ${data.get('phone')}\n\n${data.get('message')}`);
    window.location.href = `mailto:john.doe@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section className="container section contact-page" aria-labelledby="contact-title">
      <h2 id="contact-title">Contact</h2>
      <p className="lead">Pour me contacter en vue d’un entretien ou d’une future collaboration, merci de remplir le formulaire de contact.</p>

      <div className="contact-grid">
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <label>Votre nom
            <input type="text" name="name" required />
          </label>

          <label>Votre adresse email
            <input type="email" name="email" required />
          </label>

          <label>Votre numéro de téléphone
            <input type="tel" name="phone" />
          </label>

          <label>Sujet
            <input type="text" name="subject" />
          </label>

          <label>Votre message
            <textarea name="message" rows="6" required />
          </label>

          <button className="btn" type="submit">Envoyer</button>
          {sent && <p className="sent-note">Le client mail s'est ouvert pour envoyer votre message.</p>}
        </form>

        <aside className="contact-info" aria-label="Coordonnées">
          <h3>Mes coordonnées</h3>
          <p>John Doe<br/>40 rue Laure Diebold<br/>69009 Lyon, France</p>
          <p>Tél: 10 20 30 40 50<br/>john.doe@gmail.com</p>
          <div className="map-placeholder" aria-hidden="true">Carte Google Maps (à intégrer)</div>
        </aside>
      </div>
    </section>
  );
}
