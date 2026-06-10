import ScrollReveal from '../components/ScrollReveal';
import './Services.css';

const services = [
  {
    icon: '⚖️',
    title: 'PesaLink en estación',
    description:
      'Software en planta: pesaje con balanza, tarjetas RFID, recibos PDF, reportes y sincronización con la nube.',
    link: '#producto',
    linkLabel: 'Ver PesaLink',
  },
  {
    icon: '🌐',
    title: 'Portal de clientes',
    description:
      'Web para camioneras: recargas con Mercado Pago, consulta de pesajes, movimientos de saldo y descarga de reportes.',
    link: '#portal',
    linkLabel: 'Conocer el portal',
  },
  {
    icon: '🔧',
    title: 'Reparaciones',
    description:
      'Diagnóstico y reparación de balanzas industriales. Restauramos el correcto funcionamiento de su equipo.',
  },
  {
    icon: '🏗️',
    title: 'Instalaciones',
    description:
      'Montaje e instalación de balanzas en su planta, con conexión al indicador y puesta en marcha.',
  },
  {
    icon: '📐',
    title: 'Calibraciones',
    description:
      'Calibración y ajuste de balanzas para garantizar mediciones precisas y confiables.',
  },
];

export default function Services() {
  return (
    <section id="servicios" className="services">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">Servicios</span>
            <h2 className="section-title">Más que software: su balanza, de punta a punta</h2>
            <p className="section-subtitle">
              Fabio Balanzas acompaña todo el ciclo de vida de su equipo: instalación,
              calibración, reparación y gestión de pesajes con PesaLink.
            </p>
          </div>
        </ScrollReveal>

        <div className="services__grid">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 80}>
              <article className="services__card">
                <span className="services__icon" aria-hidden="true">{service.icon}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                {service.link && (
                  <a href={service.link} className="services__link">
                    {service.linkLabel} →
                  </a>
                )}
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
