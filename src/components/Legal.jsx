import React from 'react';
import './Legal.css';

export default function Legal() {
  return (
    <section className="container section" aria-labelledby="legal-title">
      <h2 id="legal-title">Mentions légales</h2>

      <div className="legal-block">
        <h3>Éditeur du site</h3>
        <p>John Doe<br/>40 rue Laure Diebold<br/>69009 Lyon, France<br/>10 20 30 40 50<br/>john.doe@gmail.com</p>

        <h3>Hébergeur</h3>
        <p>alwaysdata<br/>91 Rue du Faubourg Saint-Honoré, 75008 Paris<br/>www.alwaysdata.com</p>

        <h3>Crédits</h3>
        <p>Site réalisé par John Doe. Images libres de droits.</p>
      </div>
    </section>
  );
}
