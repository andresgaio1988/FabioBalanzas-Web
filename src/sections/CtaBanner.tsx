import { IconArrowRight } from '../components/Icons';
import ScrollReveal from '../components/ScrollReveal';
import { clientPortalUrl } from '../config/urls';
import './CtaBanner.css';

export default function CtaBanner() {
  return (
    <section className="cta-banner" aria-label="Llamada a la acción">
      <div className="container">
        <ScrollReveal>
          <div className="cta-banner__inner">
            <div className="cta-banner__text">
              <h2>¿Listo para modernizar su planta de pesaje?</h2>
              <p>
                Le mostramos FBApp en su balanza, el portal para sus clientes y las recargas
                con Mercado Pago. Demo sin compromiso en su planta o por videollamada.
              </p>
            </div>
            <div className="cta-banner__actions">
              <a href="#contacto" className="btn btn-primary btn-lg cta-banner__btn">
                Agendar demo gratuita
                <IconArrowRight />
              </a>
              <a
                href={clientPortalUrl}
                className="btn btn-ghost btn-lg cta-banner__btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ya soy cliente — entrar al portal
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
