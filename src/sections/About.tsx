import ScrollReveal from '../components/ScrollReveal';
import { logoUrl } from '../config/assets';
import './About.css';

export default function About() {
  return (
    <section id="quienes-somos" className="about">
      <div className="container about__layout">
        <ScrollReveal className="about__visual">
          <div className="about__logo-wrap">
            <img src={logoUrl} alt="Fabio Balanzas" className="about__logo" />
          </div>
        </ScrollReveal>

        <ScrollReveal className="about__content" delay={120}>
          <span className="section-label">Quiénes somos</span>
          <h2 className="section-title">Fabio Balanzas</h2>

          <div className="about__body">
            <p>
              Desde 1964 brindamos servicios especializados de calibración, reparación y
              mantenimiento de balanzas comerciales e industriales, acompañando a empresas de
              distintos sectores con soluciones confiables para el control preciso del pesaje.
            </p>
            <p>
              Nuestra historia comenzó hace más de seis décadas con un compromiso claro: ofrecer
              un servicio técnico de excelencia basado en la experiencia, la responsabilidad y la
              atención personalizada. A lo largo de los años hemos evolucionado junto a la
              tecnología, incorporando nuevos procedimientos y equipamiento sin perder los valores
              que nos caracterizan desde nuestros inicios.
            </p>
            <p>
              Contamos con una amplia trayectoria en balanzas para camiones, plataformas de
              pesaje, balanzas comerciales e industriales, realizando tareas de calibración,
              verificación, reparación y mantenimiento preventivo para garantizar el correcto
              funcionamiento de cada equipo.
            </p>
            <p>
              Sabemos que la precisión en el pesaje es fundamental para la operación de nuestros
              clientes. Por eso trabajamos con seriedad, rapidez y profesionalismo, brindando
              soluciones que permiten minimizar tiempos de inactividad y asegurar resultados
              confiables.
            </p>
            <p>
              Hoy, después de más de 60 años de actividad ininterrumpida, seguimos siendo una
              empresa familiar comprometida con la calidad del servicio, la mejora continua y la
              confianza que nuestros clientes depositan en nosotros día a día.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
