import ScrollReveal from '../components/ScrollReveal';
import { IconArrowRight, IconCheck } from '../components/Icons';
import { clientPortalUrl } from '../config/urls';
import './Portal.css';

const portalFeatures = [
  {
    title: 'Recarga con Mercado Pago',
    description:
      'Sus clientes cargan saldo en la tarjeta desde el celular o la PC, con pago seguro y confirmación automática.',
  },
  {
    title: 'Historial de pesajes',
    description:
      'Consulta de pesadas iniciales y finales, peso neto, tarifas y filtros por fecha o tarjeta. Exportación a PDF con su marca.',
  },
  {
    title: 'Movimientos de saldo',
    description:
      'Libro de recargas, débitos por pesaje y saldo actual por tarjeta, sin llamar a la planta.',
  },
  {
    title: 'Cuenta segura',
    description:
      'Acceso con email y contraseña, recuperación online y cierre de sesión por inactividad (10 minutos).',
  },
];

const mockMovements = [
  { date: '04/06 12:01', label: 'Pesaje final', amount: '- $ 10.000', balance: '$ 142.500' },
  { date: '03/06 18:22', label: 'Recarga MP', amount: '+ $ 50.000', balance: '$ 152.500' },
  { date: '03/06 09:15', label: 'Pesaje final', amount: '- $ 8.200', balance: '$ 102.500' },
];

export default function Portal() {
  return (
    <section id="portal" className="portal">
      <div className="container portal__layout">
        <ScrollReveal className="portal__content">
          <span className="section-label">Portal de clientes</span>
          <h2 className="section-title">
            Sus clientes conectados, <span className="portal__accent">24/7</span>
          </h2>
          <p className="section-subtitle portal__lead">
            Complemente FBApp en planta con un portal web exclusivo para cada camionera:
            recargas online, transparencia en pesajes y menos consultas telefónicas.
          </p>

          <ul className="portal__list">
            {portalFeatures.map((item) => (
              <li key={item.title}>
                <span className="portal__check" aria-hidden="true">
                  <IconCheck />
                </span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="portal__actions">
            <a
              href={clientPortalUrl}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ir al portal
              <IconArrowRight />
            </a>
            <a href="#contacto" className="btn btn-ghost">
              Quiero activarlo en mi planta
            </a>
          </div>

          <p className="portal__url">
            Disponible en{' '}
            <a href={clientPortalUrl} target="_blank" rel="noopener noreferrer">
              portal.fabiobalanzas.com.ar
            </a>
          </p>
        </ScrollReveal>

        <ScrollReveal className="portal__visual" delay={120}>
          <div className="portal__browser">
            <div className="portal__browser-bar">
              <span />
              <span />
              <span />
              <div className="portal__browser-url">portal.fabiobalanzas.com.ar</div>
            </div>
            <div className="portal__browser-body">
              <header className="portal__mock-header">
                <div>
                  <small>Portal clientes</small>
                  <strong>HORMACO S.A.</strong>
                </div>
                <span className="portal__mock-pill">Saldo $ 142.500</span>
              </header>

              <div className="portal__mock-cards">
                <article className="portal__mock-card portal__mock-card--mp">
                  <span className="portal__mock-mp-badge">Mercado Pago</span>
                  <h3>Recargar tarjeta</h3>
                  <p>Elegí monto · Pago en un clic</p>
                  <button type="button" className="portal__mock-btn">
                    Recargar ahora
                  </button>
                </article>
                <article className="portal__mock-card">
                  <h3>Últimos pesajes</h3>
                  <p>14 movimientos · PDF disponible</p>
                  <div className="portal__mock-row">
                    <span>Neto acumulado</span>
                    <strong>51,45 kg</strong>
                  </div>
                </article>
              </div>

              <table className="portal__mock-table">
                <thead>
                  <tr>
                    <th>Fecha</th>
                    <th>Concepto</th>
                    <th>Monto</th>
                    <th>Saldo</th>
                  </tr>
                </thead>
                <tbody>
                  {mockMovements.map((row) => (
                    <tr key={row.date + row.label}>
                      <td>{row.date}</td>
                      <td>{row.label}</td>
                      <td className={row.amount.startsWith('+') ? 'portal__pos' : 'portal__neg'}>
                        {row.amount}
                      </td>
                      <td>{row.balance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="portal__float portal__float--sync">
            <span>☁️</span>
            <div>
              <strong>Sincronización</strong>
              <p>Estación ↔ Nube</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
