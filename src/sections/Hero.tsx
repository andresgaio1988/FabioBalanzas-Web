import { IconArrowRight } from '../components/Icons';
import { clientPortalUrl } from '../config/urls';
import './Hero.css';

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__gradient" />
        <div className="hero__pattern" />
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
      </div>

      <div className="container hero__content">
        <div className="hero__text">
          <span className="hero__badge">
            <span className="hero__badge-dot" />
            Estación · Portal clientes · Mercado Pago
          </span>

          <h1 className="hero__title">
            Digitalice su planta de pesaje.
            <span className="hero__title-accent"> Sin errores. Sin papeles.</span>
          </h1>

          <p className="hero__description">
            <strong>Fabio Balanzas</strong> instala y mantiene su balanza; con <strong>FBApp</strong>
            digitaliza la planta y ofrece a sus clientes un <strong>portal web</strong> con recargas
            por <strong>Mercado Pago</strong>, historial de pesajes y saldo en tiempo real.
          </p>

          <div className="hero__actions">
            <a href="#contacto" className="btn btn-primary btn-lg">
              Solicitar demo gratuita
              <IconArrowRight />
            </a>
            <a
              href={clientPortalUrl}
              className="btn btn-secondary btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portal clientes
            </a>
          </div>

          <ul className="hero__trust">
            <li>✓ Pesaje RFID en planta</li>
            <li>✓ Recargas Mercado Pago</li>
            <li>✓ Soporte técnico local</li>
          </ul>
        </div>

        <div className="hero__visual">
          <div className="hero__mockup">
            <div className="hero__mockup-bar">
              <span /><span /><span />
              <p>FBApp — Panel de pesaje</p>
            </div>

            <div className="hero__mockup-body">
              <div className="hero__weight-display">
                <span className="hero__weight-label">Peso en balanza</span>
                <div className="hero__weight-row">
                  <span className="hero__weight-value">12.450,00</span>
                  <span className="hero__weight-unit">kg</span>
                </div>
                <div className="hero__status">
                  <span className="hero__status-pulse" />
                  Estable · Listo para registrar
                </div>
              </div>

              <div className="hero__mockup-grid">
                <div className="hero__mockup-cell">
                  <small>Cliente</small>
                  <strong>Transportes del Sur</strong>
                </div>
                <div className="hero__mockup-cell">
                  <small>Tarjeta RFID</small>
                  <strong>●●●● 4821</strong>
                </div>
                <div className="hero__mockup-cell">
                  <small>Etapa</small>
                  <strong>Pesada final</strong>
                </div>
                <div className="hero__mockup-cell hero__mockup-cell--highlight">
                  <small>Neto calculado</small>
                  <strong>8.230,00 kg</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="hero__float hero__float--receipt">
            <span className="hero__float-icon">📄</span>
            <div>
              <strong>Recibo PDF</strong>
              <p>Enviado al cliente</p>
            </div>
          </div>

          <div className="hero__float hero__float--mp">
            <span className="hero__float-icon">💳</span>
            <div>
              <strong>Recarga online</strong>
              <p>Mercado Pago · Portal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
