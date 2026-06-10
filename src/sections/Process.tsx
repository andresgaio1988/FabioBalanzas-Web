import ScrollReveal from '../components/ScrollReveal';
import './Process.css';

const steps = [
  {
    number: '01',
    title: 'Identificar cliente',
    description: 'Tarjeta RFID o búsqueda manual. El operador sabe quién pesa en segundos.',
    icon: '🪪',
  },
  {
    number: '02',
    title: 'Capturar peso',
    description: 'PesaLink lee la balanza en tiempo real y detecta cuándo el peso está estable.',
    icon: '⚖️',
  },
  {
    number: '03',
    title: 'Completar movimiento',
    description: 'Segunda pesada, cálculo de neto automático y número de movimiento único.',
    icon: '🔄',
  },
  {
    number: '04',
    title: 'Entregar recibo',
    description: 'PDF con su marca: imprimir, enviar por email o archivar. El cliente lo ve también en el portal.',
    icon: '📧',
  },
  {
    number: '05',
    title: 'Cliente autogestiona',
    description: 'Recarga con Mercado Pago, revisa pesajes y saldo desde el portal sin molestar a la planta.',
    icon: '💳',
  },
];

export default function Process() {
  return (
    <section id="proceso" className="process">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">Proceso</span>
            <h2 className="section-title">5 pasos. Planta y cliente alineados.</h2>
            <p className="section-subtitle">
              Diseñado para operadores de planta: pantallas claras, flujo guiado
              y mínima curva de aprendizaje.
            </p>
          </div>
        </ScrollReveal>

        <ol className="process__timeline">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 100}>
              <li className="process__step">
                <div className="process__marker">
                  <span className="process__icon" aria-hidden="true">{step.icon}</span>
                  <span className="process__number">{step.number}</span>
                </div>
                <div className="process__content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            </ScrollReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
