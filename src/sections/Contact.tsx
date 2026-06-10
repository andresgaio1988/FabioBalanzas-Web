import { useState, type FormEvent } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { IconCheck } from '../components/Icons';
import { submitContactForm } from '../lib/contact-form';
import './Contact.css';

const perks = [
  'Instalación y calibración de balanzas',
  'Reparaciones con servicio técnico local',
  'Demo de PesaLink y portal de clientes',
  'Planes Standard y Premium disponibles',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const website = String(formData.get('website') ?? '').trim();
      if (website) {
        throw new Error('No se pudo enviar la solicitud.');
      }

      await submitContactForm({
        name: String(formData.get('name') ?? ''),
        company: String(formData.get('company') ?? ''),
        email: String(formData.get('email') ?? ''),
        message: String(formData.get('message') ?? ''),
      });
      setSubmitted(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al enviar. Intentá de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="contact">
      <div className="container contact__layout">
        <ScrollReveal className="contact__info">
          <span className="section-label">Contacto</span>
          <h2 className="section-title">Hablemos de su planta</h2>
          <p className="section-subtitle">
            Complete el formulario y un especialista de Fabio Balanzas se comunicará
            con usted para coordinar una demostración de PesaLink adaptada a su operación.
          </p>

          <ul className="contact__perks">
            {perks.map((perk) => (
              <li key={perk}>
                <IconCheck />
                {perk}
              </li>
            ))}
          </ul>

          <div className="contact__meta">
            <div>
              <strong>Empresa</strong>
              <span>Fabio Balanzas</span>
            </div>
            <div>
              <strong>Producto</strong>
              <span>PesaLink + Portal clientes</span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            {submitted ? (
              <div className="contact__success">
                <span className="contact__success-icon">✓</span>
                <h3>¡Gracias por contactarnos!</h3>
                <p>Recibimos su solicitud. Un especialista se comunicará en 24–48 hs hábiles.</p>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    setSubmitted(false);
                    setError(null);
                  }}
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <>
                <h3 className="contact__form-title">Solicitar demo gratuita</h3>
                <div className="contact__row">
                  <div className="contact__field">
                    <label htmlFor="name">Nombre</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      disabled={loading}
                      placeholder="Su nombre"
                    />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="company">Empresa</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      autoComplete="organization"
                      disabled={loading}
                      placeholder="Nombre de la empresa"
                    />
                  </div>
                </div>
                <div className="contact__field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    disabled={loading}
                    placeholder="correo@empresa.com"
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="message">Cuéntenos sobre su operación</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    disabled={loading}
                    placeholder="Ej: tenemos 2 balanzas, 50 clientes diarios, necesitamos recibos por email..."
                  />
                </div>
                <div className="contact__hp" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                </div>
                {error ? <p className="contact__error">{error}</p> : null}
                <button
                  type="submit"
                  className="btn btn-primary contact__submit"
                  disabled={loading}
                >
                  {loading ? 'Enviando…' : 'Enviar solicitud'}
                </button>
                <p className="contact__disclaimer">Sin compromiso · Respuesta en 24–48 hs hábiles</p>
              </>
            )}
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
