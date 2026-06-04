import ScrollReveal from '../components/ScrollReveal';
import './StatsBar.css';

const stats = [
  { value: '24/7', label: 'Portal clientes', sub: 'Recargas y consultas online' },
  { value: 'MP', label: 'Mercado Pago', sub: 'Recargas automáticas' },
  { value: '2', label: 'Etapas de pesaje', sub: 'Inicial y final con neto' },
  { value: '☁️', label: 'Sync en nube', sub: 'Multi-estación y respaldo' },
];

export default function StatsBar() {
  return (
    <section className="stats-bar" aria-label="Datos destacados">
      <div className="container">
        <ScrollReveal>
          <div className="stats-bar__grid">
            {stats.map((stat, i) => (
              <div key={stat.label} className="stats-bar__item" style={{ transitionDelay: `${i * 80}ms` }}>
                <span className="stats-bar__value">{stat.value}</span>
                <strong>{stat.label}</strong>
                <span>{stat.sub}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
