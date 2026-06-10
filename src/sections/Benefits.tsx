import ScrollReveal from '../components/ScrollReveal';
import './Benefits.css';

const before = [
  'Planillas a mano con errores de transcripción',
  'Clientes sin identificar en el momento del pesaje',
  'Recibos impresos que se pierden o demoran',
  'Sin historial centralizado de movimientos',
];

const after = [
  'Peso capturado automáticamente desde la balanza',
  'Identificación instantánea con tarjeta RFID',
  'Recibo PDF y reportes con su marca Fabio Balanzas',
  'Clientes recargan con Mercado Pago sin ir a caja',
  'Portal con pesajes, saldo y PDF para cada camionera',
];

export default function Benefits() {
  return (
    <section id="beneficios" className="benefits">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">Por qué PesaLink</span>
            <h2 className="section-title">Deje atrás el pesaje manual</h2>
            <p className="section-subtitle">
              Cada minuto que su operador tarda anotando pesos es un minuto menos de productividad.
              PesaLink elimina la fricción y pone el foco en lo que importa: pesar bien y facturar rápido.
            </p>
          </div>
        </ScrollReveal>

        <div className="benefits__compare">
          <ScrollReveal className="benefits__col benefits__col--before" delay={100}>
            <div className="benefits__col-header">
              <span className="benefits__tag benefits__tag--gray">Sin PesaLink</span>
              <h3>Procesos manuales</h3>
            </div>
            <ul>
              {before.map((item) => (
                <li key={item}>
                  <span className="benefits__icon benefits__icon--bad">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal className="benefits__col benefits__col--after" delay={200}>
            <div className="benefits__col-header">
              <span className="benefits__tag benefits__tag--green">Con PesaLink</span>
              <h3>Operación digital</h3>
            </div>
            <ul>
              {after.map((item) => (
                <li key={item}>
                  <span className="benefits__icon benefits__icon--good">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
