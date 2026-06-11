import ScrollReveal from '../components/ScrollReveal';
import { IconCheck } from '../components/Icons';
import './Licensing.css';

const standardFeatures = [
  'Lectura RS232 con balanza industrial',
  'Pesaje en dos etapas (inicial y final)',
  'Identificación manual de clientes',
  'Gestión de clientes, tarifas y usuarios',
  'Impresión de recibos',
  'Base de datos local cifrada',
  'Historial y consulta de pesajes',
];

const premiumFeatures = [
  'Todo lo incluido en Standard',
  'Lector de tarjetas RFID',
  'Administración de tarjetas y saldos prepago',
  'Guardar recibos en PDF',
  'Envío de recibos por email',
  'Exportar reportes en PDF y por email',
];

export default function Licensing() {
  return (
    <section id="licencias" className="licensing">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">Licenciamiento</span>
            <h2 className="section-title">Elija la edición PesaLink para su planta</h2>
            <p className="section-subtitle">
              Disponible en <strong>PesaLink 1.0</strong> (estación local) y{' '}
              <strong>PesaLink Cloud 2.0</strong> (con nube y portal). Ambas licencias se activan
              por equipo con validación RSA. Escale a Premium cuando necesite RFID, PDF y email.
            </p>
          </div>
        </ScrollReveal>

        <div className="licensing__grid">
          <ScrollReveal delay={80}>
            <article className="licensing__card">
              <div className="licensing__card-header">
                <span className="licensing__tier">Standard</span>
                <p className="licensing__tagline">Operación esencial de pesaje</p>
              </div>
              <ul className="licensing__list">
                {standardFeatures.map((item) => (
                  <li key={item}>
                    <IconCheck />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contacto" className="btn btn-secondary licensing__cta">
                Consultar Standard
              </a>
            </article>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <article className="licensing__card licensing__card--premium">
              <span className="licensing__badge">Recomendada</span>
              <div className="licensing__card-header">
                <span className="licensing__tier">Premium</span>
                <p className="licensing__tagline">RFID, PDF y email incluidos</p>
              </div>
              <ul className="licensing__list">
                {premiumFeatures.map((item) => (
                  <li key={item}>
                    <IconCheck />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contacto" className="btn btn-primary licensing__cta">
                Consultar Premium
              </a>
            </article>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
