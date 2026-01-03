import React from "react";
import heroBg from "../assets/hero-bg.jpg";
import johnDoeAbout from "../assets/john-doe-about.jpg";

function Home() {
  return (
    <>
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="hero-overlay">
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur web full stack</h2>
          <button className="btn-primary">En savoir plus</button>
        </div>
      </section>

      <section className="about-skills">
        <div className="about">
          <h2>A propos</h2>
          <div className="about-content">
            <img src={johnDoeAbout} alt="John Doe au bureau" />
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis cursus,
                mi quis viverra ornare, eros dolor interdum nulla, ut commodo
                diam libero vitae erat. Aenean faucibus nibh et justo cursus id
                rutrum lorem imperdiet. Nunc ut sem vitae risus tristique
                posuere.
              </p>
            </div>
          </div>
        </div>

        <div className="skills">
          <h2>Mes compétences</h2>
          <div className="skill">
            <span>HTML5</span>
            <span>90%</span>
            <div className="progress">
              <div className="progress-bar html"></div>
            </div>
          </div>
          <div className="skill">
            <span>CSS3</span>
            <span>80%</span>
            <div className="progress">
              <div className="progress-bar css"></div>
            </div>
          </div>
          <div className="skill">
            <span>JAVASCRIPT</span>
            <span>70%</span>
            <div className="progress">
              <div className="progress-bar js"></div>
            </div>
          </div>
          <div className="skill">
            <span>PHP</span>
            <span>60%</span>
            <div className="progress">
              <div className="progress-bar php"></div>
            </div>
          </div>
          <div className="skill">
            <span>REACT</span>
            <span>50%</span>
            <div className="progress">
              <div className="progress-bar react"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;