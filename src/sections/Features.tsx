import ScrollReveal from '../components/ScrollReveal';
import { featureIcons } from '../components/Icons';
import './Features.css';

const features = [
  {
    title: 'Lectura en tiempo real',
    description:
      'Conexión RS232 con su balanza. Captura automática del peso estable y simulador para pruebas sin hardware.',
    tag: 'Estación',
  },
  {
    title: 'Clientes y tarjetas RFID',
    description:
      'Base de clientes, tarifas, saldos prepago e identificación en el momento del pesaje.',
    tag: 'CRM',
  },
  {
    title: 'Pesaje en dos etapas',
    description:
      'Flujo inicial y final con número de movimiento, cálculo de neto y trazabilidad por camionera.',
    tag: 'Flujo',
  },
  {
    title: 'Recibos y reportes PDF',
    description:
      'Recibos con su marca, impresión, envío por email y reportes exportables desde planta o portal.',
    tag: 'Docs',
  },
  {
    title: 'Portal web de clientes',
    description:
      'Cada cliente accede a pesajes, saldo y recargas online. Menos llamadas y más transparencia.',
    tag: 'Portal',
  },
  {
    title: 'Mercado Pago integrado',
    description:
      'Recargas de tarjeta con pago seguro, confirmación automática y registro en el libro de movimientos.',
    tag: 'Pagos',
  },
  {
    title: 'Seguridad y roles',
    description:
      'Base cifrada en estación, usuarios Admin/Operador, sesión con timeout en portal y licencias por equipo.',
    tag: 'Seguro',
  },
  {
    title: 'Sincronización en nube',
    description:
      'Catálogo y pesadas sincronizados entre estaciones y respaldo central para multiplanta.',
    tag: 'Nube',
  },
];

export default function Features() {
  return (
    <section id="funcionalidades" className="features">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">Funcionalidades</span>
            <h2 className="section-title">Todo lo que su planta necesita hoy</h2>
            <p className="section-subtitle">
              PesaLink en báscula, portal para camioneras y nube Fabio Balanzas: un solo proveedor
              para pesar, cobrar y informar sin planillas ni sistemas sueltos.
            </p>
          </div>
        </ScrollReveal>

        <div className="features__grid">
          {features.map((feature, i) => {
            const Icon = featureIcons[i];
            return (
              <ScrollReveal key={feature.title} delay={i * 60}>
                <article className="features__card">
                  <div className="features__card-top">
                    <span className="features__icon">
                      <Icon />
                    </span>
                    <span className="features__tag">{feature.tag}</span>
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
