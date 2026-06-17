# Formulario de contacto (sitio corporativo)

El formulario del sitio envía la solicitud al **portal** (`/api/demo-request`). El correo sale con **ventas@pesalink.com.ar** vía Mailjet (misma cuenta que PesaLink / portal).

## Mailjet

- Remitente verificado: **ventas@pesalink.com.ar**
- API Key + Secret Key en Firebase Functions (variables de entorno)

## Variables (Firebase Functions)

| Variable | Valor |
|----------|-------|
| `SMTP_HOST` | `in-v3.mailjet.com` |
| `SMTP_PORT` | `587` |
| `SMTP_USER` | API Key pública Mailjet |
| `SMTP_PASS` | Secret Key Mailjet |
| `CONTACT_FROM_EMAIL` | `ventas@pesalink.com.ar` |
| `CONTACT_FROM_NAME` | `PesaLink — Ventas` |
| `CONTACT_NOTIFY_EMAIL` | `ventas@pesalink.com.ar` (bandeja que recibe) |

## Prueba

En www.pesalink.com.ar → Contacto → enviar prueba. Debe llegar a `ventas@` con **Responder** al email del visitante.
