import ScrollReveal from '../components/ScrollReveal';
import './Industries.css';

const industries = [
  {
    emoji: '🚛',
    title: 'Transporte y logística',
    description: 'Control de carga y descarga con pesaje inicial/final y recibo automático al conductor.',
  },
  {
    emoji: '🌾',
    title: 'Agroindustria',
    description: 'Recepción de granos y productos agrícolas con tarifas por kilogramo y saldo de clientes.',
  },
  {
    emoji: '♻️',
    title: 'Reciclaje',
    description: 'Identificación de proveedores con tarjeta RFID y registro de cada entrega de material.',
  },
  {
    emoji: '🏭',
    title: 'Industria general',
    description: 'Pesaje de materia prima, control de stock y trazabilidad de movimientos en planta.',
  },
];

export default function Industries() {
  return (
    <section id="sectores" className="industries">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label section-label--light">Sectores</span>
            <h2 className="section-title section-title--light">Ideal para su operación</h2>
            <p className="section-subtitle section-subtitle--light">
              PesaLink se adapta a cualquier planta que necesite
              registrar pesajes con clientes identificados y documentación al instante.
            </p>
          </div>
        </ScrollReveal>

        <div className="industries__grid">
          {industries.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 100}>
              <article className="industries__card">
                <span className="industries__emoji" aria-hidden="true">{item.emoji}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
