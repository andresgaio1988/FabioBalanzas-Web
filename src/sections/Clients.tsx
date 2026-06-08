import ScrollReveal from '../components/ScrollReveal';
import { featuredClients } from '../config/clients';
import './Clients.css';

export default function Clients() {
  return (
    <section id="clientes" className="clients" aria-labelledby="clients-title">
      <div className="container">
        <ScrollReveal>
          <div className="section-header section-header--center">
            <span className="section-label">Confianza</span>
            <h2 id="clients-title" className="section-title">
              Algunos de nuestros clientes
            </h2>
            <p className="section-subtitle">
              Empresas de construcción, hormigón y el sector agropecuario que confían en
              Fabio Balanzas para el control de pesaje en planta.
            </p>
          </div>
        </ScrollReveal>

        <ul className="clients__grid">
          {featuredClients.map((client, index) => (
            <ScrollReveal key={client.name} delay={index * 60}>
              <li className="clients__item">
                <article className="clients__card">
                <div
                  className={`clients__logos${client.logos.length > 1 ? ' clients__logos--multi' : ''}`}
                >
                  {client.logos.map((logo) => (
                    <img
                      key={logo.alt}
                      src={logo.src}
                      alt={logo.alt}
                      className="clients__logo"
                      loading="lazy"
                      decoding="async"
                    />
                  ))}
                </div>
                <p className="clients__name">{client.name}</p>
                </article>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
