import ScrollReveal from '../components/ScrollReveal';
import { logoUrl } from '../config/assets';
import { IconCheck } from '../components/Icons';
import './Product.css';

const highlights = [
  'Balanza industrial vía RS232 (protocolo EL05)',
  'Sincronización opcional con nube Fabio Balanzas',
  'Portal de clientes y recargas Mercado Pago',
  'Recibos y reportes PDF con su marca',
  'Licencias Standard y Premium por estación',
];

export default function Product() {
  return (
    <section id="producto" className="product">
      <div className="container product__layout">
        <ScrollReveal className="product__visual">
          <div className="product__logo-frame">
            <div className="product__logo-glow" aria-hidden="true" />
            <img src={logoUrl} alt="Fabio Balanzas — PesaLink" className="product__logo" />
            <div className="product__version">PesaLink 1.0 · PesaLink Cloud 2.0</div>
          </div>
          <div className="product__chip-row">
            <span className="product__chip">Windows 10+</span>
          </div>
        </ScrollReveal>

        <ScrollReveal className="product__content" delay={150}>
          <span className="section-label">El producto</span>
          <h2 className="section-title">
            El software que su balanza necesitaba
          </h2>
          <p className="section-subtitle">
            <strong>PesaLink 1.0</strong> opera en planta de forma autónoma;{' '}
            <strong>PesaLink Cloud 2.0</strong> suma sincronización con la nube Fabio Balanzas,
            portal de clientes y recargas Mercado Pago. Unifica pesaje, tarifas y documentación.
          </p>

          <ul className="product__highlights">
            {highlights.map((item) => (
              <li key={item}>
                <IconCheck />
                {item}
              </li>
            ))}
          </ul>

          <a href="#contacto" className="btn btn-primary">
            Quiero una demo
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
