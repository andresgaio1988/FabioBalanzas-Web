# FabioBalanzas-Web — Sitio corporativo Fabio Balanzas

SPA para **Fabio Balanzas**: balanzas industriales, **PesaLink 1.0**, **PesaLink Cloud 2.0** y portal de clientes.

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
| Portal clientes (recargas) | **Vercel** | Repo **FabioBalanzas-PortalClientes** — **https://portal.pesalink.com.ar** |

### GitHub Pages (opcional)

Push a `main` con `VITE_BASE_PATH=/FabioBalanzas-Web/` → [GitHub Pages](https://andresgaio1988.github.io/FabioBalanzas-Web/)

## Estructura

```
FabioBalanzas-Web/
├── public/
│   └── fabio-balanzas-logo.jpg
├── src/
│   ├── components/         # Header, Footer
│   ├── sections/           # Hero, Producto, Funcionalidades, etc.
│   └── styles/             # Variables CSS y estilos globales
└── index.html
```

## Secciones

1. **Inicio** — Hero con PesaLink y portal
2. **Producto** — PesaLink 1.0 / Cloud 2.0
3. **Funcionalidades** — RS232, clientes, pesaje 2 etapas, recibos, licencias
4. **Proceso** — Flujo operativo en 4 pasos
5. **Contacto** — Formulario de consulta

## Repositorio

[https://github.com/andresgaio1988/FabioBalanzas-Web](https://github.com/andresgaio1988/FabioBalanzas-Web)
