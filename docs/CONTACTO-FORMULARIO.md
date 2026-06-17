# Formulario «Solicitar demo» (Mailjet)

El sitio corporativo envía el formulario al portal:

`POST https://portal.pesalink.com.ar/api/demo-request`

El correo sale con **ventas@fabiobalanzas.com.ar** vía Mailjet (misma cuenta que PesaLink / portal).

## 1. Mailjet

- Remitente verificado: **ventas@fabiobalanzas.com.ar**
- API Key + Secret Key en Mailjet → Account → SMTP and SEND API settings

## 2. Variables en Vercel (portal)

Proyecto **FabioBalanzas-PortalClientes** → Settings → Environment Variables:

| Variable | Valor |
|----------|--------|
| `MAILJET_API_KEY` | API Key pública Mailjet |
| `MAILJET_SECRET_KEY` | Secret Key Mailjet |
| `CONTACT_FROM_EMAIL` | `ventas@fabiobalanzas.com.ar` |
| `CONTACT_FROM_NAME` | `Fabio Balanzas — Ventas` |
| `CONTACT_NOTIFY_EMAIL` | `ventas@fabiobalanzas.com.ar` (bandeja que recibe) |

Redeploy del portal tras guardar.

## 3. Sitio corporativo (Firebase)

En `.env.production`:

```env
VITE_CONTACT_SUBMIT_URL=https://portal.pesalink.com.ar/api/demo-request
```

```bash
npm run build
firebase deploy --only hosting --project fabio-balanzas
```

## 4. Probar

En www.fabiobalanzas.com.ar → Contacto → enviar prueba. Debe llegar a `ventas@` con **Responder** al email del visitante.
