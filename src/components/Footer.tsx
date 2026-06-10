import { logoUrl } from '../config/assets';
import { clientPortalUrl } from '../config/urls';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <div className="footer__logo-wrap">
            <img src={logoUrl} alt="Fabio Balanzas" className="footer__logo" />
          </div>
          <p>
            Balanzas industriales, PesaLink en planta, portal de clientes con Mercado Pago
            y sincronización en nube. Un partner para todo el ciclo de pesaje.
          </p>
          <a
            href={clientPortalUrl}
            className="footer__portal-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acceder al portal de clientes →
          </a>
        </div>

        <div className="footer__cols">
          <nav className="footer__col" aria-label="Navegación">
            <strong>Navegación</strong>
            <a href="#inicio">Inicio</a>
            <a href="#servicios">Servicios</a>
            <a href="#producto">PesaLink</a>
            <a href="#portal">Portal clientes</a>
            <a href="#ecosistema">Ecosistema</a>
          </nav>
          <nav className="footer__col" aria-label="Más información">
            <strong>Más</strong>
            <a href="#funcionalidades">Funcionalidades</a>
            <a href="#sectores">Sectores</a>
            <a href="#licencias">Licencias</a>
            <a href="#proceso">Proceso</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <div className="footer__col">
            <strong>Plataforma</strong>
            <span>PesaLink Cloud 2.0</span>
            <span>Portal + Mercado Pago</span>
            <span>Windows · Nube Supabase</span>
          </div>
        </div>
      </div>

      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <span>© {year} Fabio Balanzas. Todos los derechos reservados.</span>
          <a href="#contacto" className="footer__cta-link">Solicitar demo →</a>
        </div>
      </div>
    </footer>
  );
}
