import ScrollReveal from '../components/ScrollReveal';
import { logoUrl } from '../config/assets';
import './About.css';

export default function About() {
  return (
    <section id="quienes-somos" className="about">
      <div className="container about__layout">
        <ScrollReveal className="about__visual">
          <div className="about__logo-wrap">
            <img src={logoUrl} alt="Fabio Balanzas" className="about__logo" />
          </div>
        </ScrollReveal>

        <ScrollReveal className="about__content" delay={120}>
          <span className="section-label">Quiénes somos</span>
          <h2 className="section-title">Fabio Balanzas</h2>

          <div className="about__placeholder">
            <p>
              Próximamente compartiremos aquí la historia, misión y valores de Fabio Balanzas.
            </p>
            <p className="about__hint">
              Este espacio está reservado para el texto institucional que nos proporcione.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
