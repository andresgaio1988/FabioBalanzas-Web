import ScrollReveal from '../components/ScrollReveal';
import './Ecosystem.css';

const pillars = [
  {
    emoji: '🖥️',
    title: 'PesaLink en estación',
    subtitle: 'Windows en planta',
    points: [
      'Pesaje con balanza RS232 y tarjetas RFID',
      'Recibos PDF, reportes y base local cifrada',
      'Operadores, tarifas y ajustes de saldo en efectivo',
    ],
  },
  {
    emoji: '🌐',
    title: 'Portal de clientes',
    subtitle: 'portal.fabiobalanzas.com.ar',
    points: [
      'Recargas con Mercado Pago',
      'Consulta de pesajes y movimientos de saldo',
      'Exportación de reportes para el cliente',
    ],
    highlight: true,
  },
  {
    emoji: '☁️',
    title: 'Nube Fabio Balanzas',
    subtitle: 'Sincronización segura',
    points: [
      'Catálogo de clientes y tarjetas entre estaciones',
      'Pesadas y saldos centralizados por operador',
      'Respaldo y continuidad si hay más de una báscula',
    ],
  },
];

export default function Ecosystem() {
  return (
    <section id="ecosistema" className="ecosystem">
      <div className="container">
        <ScrollReveal>
          <div className="section-header section-header--center">
            <span className="section-label">Ecosistema completo</span>
            <h2 className="section-title">Planta, clientes y nube en un solo servicio</h2>
            <p className="section-subtitle">
              No vendemos solo un programa: Fabio Balanzas integra hardware, software de
              estación, portal web y sincronización para que su negocio escale sin perder control.
            </p>
          </div>
        </ScrollReveal>

        <div className="ecosystem__grid">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={i * 100}>
              <article
                className={`ecosystem__card ${pillar.highlight ? 'ecosystem__card--highlight' : ''}`}
              >
                <span className="ecosystem__emoji" aria-hidden="true">
                  {pillar.emoji}
                </span>
                <h3>{pillar.title}</h3>
                <p className="ecosystem__subtitle">{pillar.subtitle}</p>
                <ul>
                  {pillar.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <p className="ecosystem__note">
            Ideal para plantas de reciclaje, acopio, cerealeras y centros logísticos que
            atienden camioneras con tarjeta prepaga y necesitan trazabilidad de punta a punta.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
