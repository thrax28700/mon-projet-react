import React from 'react';
import aboutImg from '../assets/images/john-doe-about.jpg';
import './AboutSkillsBlock.css';

const skills = [
  { name: 'HTML', pct: 90, color: '#cc0303ff' },
  { name: 'CSS3', pct: 80, color: '#4acfffff' },
  { name: 'JAVASCRIPT', pct: 70, color: '#facc15' },
  { name: 'PHP', pct: 60, color: '#065f46' },
  { name: 'REACT', pct: 50, color: '#1e3a8a' },
];

export default function AboutSkillsBlock() {
  const latin = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus consectetur tempore perferendis nostrum, ex delectus reiciendis impedit aut iure enim placeat? Natus, neque at?';

  return (
    <section className="about-skills-block container" aria-labelledby="about-skills-title">
      <div className="about-skills-card">
        <div className="about-column">
          <h2 id="about-skills-title">A propos</h2>
          <div className="about-image-wrap">
            <img src={aboutImg} alt="Portrait" loading="lazy" />
          </div>
          <div className="about-latin">
            <p>{latin}</p>
            <p>{latin}</p>
            <p>{latin}</p>
          </div>
        </div>

        <div className="skills-column" aria-labelledby="skills-title">
          <h2 id="skills-title">Mes compétences</h2>

          <div className="skills-list">
            {skills.map((s) => (
              <div key={s.name} className="skill-row">
                <div className="skill-meta">
                  <strong className="skill-name">{s.name} {s.pct}%</strong>
                </div>
                <div className="skill-bar" role="progressbar" aria-valuenow={s.pct} aria-valuemin="0" aria-valuemax="100">
                  <div className="skill-fill" style={{ width: `${s.pct}%`, background: s.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
