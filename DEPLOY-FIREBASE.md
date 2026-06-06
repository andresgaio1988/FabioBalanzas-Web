# Desplegar FbAppWeb en Firebase Hosting

Sitio corporativo (Vite). El **portal de clientes** va aparte en **Vercel** (ver `apps/portal/DEPLOY.md` en el repo FBApp-web-version).

## 1. Una vez

```bash
npm install -g firebase-tools
firebase login
```

Copiá `.firebaserc.example` → `.firebaserc` y reemplazá `TU_PROJECT_ID_DE_FIREBASE` por el ID del proyecto en Firebase Console.

```bash
firebase init hosting
```

Si ya existe `firebase.json`, elegí el mismo proyecto y **no** sobrescribas el archivo.

## 2. Variables de producción

```bash
copy .env.production.example .env.production
```

Editá `.env.production`:

```env
VITE_BASE_PATH=/
VITE_CLIENT_PORTAL_URL=https://portal.fabiobalanzas.com.ar
VITE_CONTACT_SUBMIT_URL=https://portal.fabiobalanzas.com.ar/api/demo-request
```

(`VITE_CLIENT_PORTAL_URL` = portal en Vercel. Mailjet y variables del portal: [docs/CONTACTO-FORMULARIO.md](./docs/CONTACTO-FORMULARIO.md).)

## 3. Build y deploy

```bash
npm ci
npm run build
firebase deploy --only hosting
```

URL de Firebase: `https://TU_PROJECT_ID.web.app` (o dominio custom).

## 4. Dominio propio

Firebase Console → Hosting → **Add custom domain** → **www.fabiobalanzas.com.ar** (y redirección desde apex si aplica).

## GitHub Pages (alternativa)

Si seguís usando Pages, build con:

```env
VITE_BASE_PATH=/FbAppWeb/
```

Sin esa variable en Firebase usá siempre `VITE_BASE_PATH=/`.
