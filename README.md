# FbAppWeb — Sitio corporativo Fabio Balanzas

SPA (Single Page Application) para **Fabio Balanzas**, empresa desarrolladora del sistema **FBApp** de gestión de pesajes industriales.

## Paleta de colores

Basada en el logo oficial:

| Color | Hex | Uso |
|-------|-----|-----|
| Verde Fabio | `#6BA539` | Acentos, botones, iconos |
| Verde oscuro | `#588A2E` | Hover, títulos destacados |
| Gris Fabio | `#555555` | Fondos de sección, texto secundario |
| Gris oscuro | `#3D3D3D` | Footer |
| Blanco | `#FFFFFF` | Fondos principales |

## Requisitos

- Node.js 18+
- npm

## Desarrollo

```bash
npm install
npm run dev
```

Abrir [http://localhost:5173](http://localhost:5173).

## Producción

```bash
npm run build
npm run preview
```

Los archivos estáticos quedan en `dist/`.

## Publicación

| Sitio | Hosting | Guía |
|-------|---------|------|
| Corporativo (esta SPA) | **Firebase** | [DEPLOY-FIREBASE.md](./DEPLOY-FIREBASE.md) — **https://www.fabiobalanzas.com.ar** |
| Portal clientes (recargas) | **Vercel** | Repo **FabioBalanzas-PortalClientes** — **https://portal.fabiobalanzas.com.ar** |

### GitHub Pages (opcional, legado)

Sigue disponible en push a `main` con `VITE_BASE_PATH=/FbAppWeb/` → [GitHub Pages](https://andresgaio1988.github.io/FbAppWeb/)

## Estructura

```
FbAppWeb/
├── public/
│   └── LogoFBAPP.jpeg      # Logo oficial
├── src/
│   ├── components/         # Header, Footer
│   ├── sections/           # Hero, Producto, Funcionalidades, etc.
│   └── styles/             # Variables CSS y estilos globales
└── index.html
```

## Secciones

1. **Inicio** — Hero con presentación de FBApp
2. **Producto** — Descripción del sistema desktop
3. **Funcionalidades** — RS232, clientes, pesaje 2 etapas, recibos, licencias
4. **Proceso** — Flujo operativo en 4 pasos
5. **Contacto** — Formulario de consulta

## Repositorio

[https://github.com/andresgaio1988/FabioBalanzas-Web](https://github.com/andresgaio1988/FabioBalanzas-Web)
