# iReventa — Tienda de reventa de móviles

[![Estado](https://img.shields.io/badge/estado-estable-success)](#) 
[![Stack](https://img.shields.io/badge/stack-HTML%20%7C%20Tailwind%20(CDN)%20%7C%20JavaScript-blue)](#)

Marketplace estático para mostrar y vender **móviles reacondicionados**.  
Stack: **HTML**, **TailwindCSS por CDN**, **JavaScript**.  
Estado: **estable**.

---

## 📚 Índice
- [✨ Funcionalidades](#-funcionalidades)
- [📁 Estructura](#-estructura)
- [▶️ Puesta en marcha](#️-puesta-en-marcha)
- [🎨 Tailwind (CDN) y modo oscuro](#-tailwind-cdn-y-modo-oscuro)
- [🛒 Carrito simulado](#-carrito-simulado)
- [🗂️ Datos de ejemplo (opcional)](#️-datos-de-ejemplo-opcional)
- [♿ Accesibilidad y calidad](#-accesibilidad-y-calidad)
- [🔎 SEO básico](#-seo-básico)
- [⚡ Rendimiento](#-rendimiento)
- [🚀 Despliegue](#-despliegue)
- [🧭 Roadmap](#-roadmap)

---

## ✨ Funcionalidades

- **Listado de productos** en cuadrícula con imagen, precio y descripción.  
  _Página:_ `src/index.html`
- **Página de detalle** de producto con render dinámico del contenido.  
  _Página:_ `src/producto.html` + `assets/js/producto.js`
- **Carrito simulado** con contador en cabecera y persistencia en `localStorage`.  
  _Páginas:_ `src/index.html`, `src/carrito.html` + `assets/js/carrito.js`
- **Modo oscuro** con interruptor y persistencia.  
  _Script:_ `assets/js/modo-oscuro.js`
- **Diseño responsive** y semántica accesible (TailwindCSS + HTML semántico).

> **Nota:** No hay búsqueda/filtrado implementado todavía (pendiente de roadmap).

---

## 📁 Estructura

```
iReventa/
├─ src/
│  ├─ index.html          # Catálogo (grid de productos)
│  ├─ producto.html       # Vista de detalle (carga dinámica)
│  └─ carrito.html        # Vista del carrito (lista + totales básicos)
├─ assets/
│  ├─ img/                # Imágenes de productos
│  │  ├─ iphone-13-mini.jpg
│  │  ├─ iphone-13-pro.jpg
│  │  ├─ iphone-13.jpg
│  │  ├─ iphone-14-plus.jpg
│  │  ├─ iphone-14-pro-max.jpg
│  │  ├─ iphone-14-pro.jpg
│  │  ├─ iphone-14.jpg
│  │  ├─ iphone-15-plus.jpg
│  │  ├─ iphone-15-pro-max.jpg
│  │  ├─ iphone-15-pro.jpg
│  │  ├─ iphone-15.jpg
│  │  └─ iphone-se-2022.jpg
│  └─ js/
│     ├─ modo-oscuro.js   # Toggle + persistencia del tema
│     ├─ carrito.js       # Lógica de carrito y contador
│     └─ producto.js      # Render de la página de detalle
├─ docs/
└─ tests/
    └─ .gitkeep
```

---

## ▶️ Puesta en marcha

> Proyecto 100% estático. No requiere build.

**Opción 1 — VS Code (recomendado)**  
1. Abre la carpeta del proyecto.  
2. Instala la extensión **Live Server**.  
3. Clic derecho en `src/index.html` → **Open with Live Server**.

**Opción 2 — CLI**  
```bash
# Node (puerto por defecto 3000)
npx serve src

# Python (puerto 5173 por ejemplo)
python -m http.server 5173 -d src
```
Visita `http://localhost:3000` (serve) o `http://localhost:5173` (python).

---

## 🎨 Tailwind (CDN) y modo oscuro

Se carga Tailwind por **CDN** y se habilita **darkMode por clase**:
```html
<script src="https://cdn.tailwindcss.com"></script>
<script>tailwind.config = { darkMode: 'class' };</script>
```

**Interruptor de tema** (implementado en `assets/js/modo-oscuro.js`):  
- Añade/quita la clase `dark` en `<html>`/`<body>`.  
- Guarda la preferencia en `localStorage`.  
- Icono de estado (🌙/☀️) sincronizado.

Clases útiles: `bg-white dark:bg-gray-900`, `text-gray-900 dark:text-gray-100`.

---

## 🛒 Carrito simulado

- **Añadir al carrito**: botones en tarjetas de producto (`.add-to-cart`).  
- **Persistencia**: `localStorage` con clave `ireventa-cart`.  
- **Contador**: badge en el botón de carrito (en la cabecera).  
- **Página del carrito**: lista los ítems guardados y permite visualizar totales básicos.  
- **Limitaciones** (a propósito): sin cantidades, sin eliminación, sin checkout.

> Ideal para demostrar el flujo de compra en un proyecto estático.

---

## ♿ Accesibilidad y calidad

- HTML semántico (`<header>`, `<main>`, `<nav>`, `<section>`).  
- Imágenes con `alt`, controles con `aria-label` si no hay texto visible.  
- Focus visible y navegable (`focus:ring`, `outline-offset`).  
- Contraste suficiente en modo claro y oscuro.  
- Etiquetas y roles coherentes en el contador de carrito.

---

## 🔎 SEO básico

- Etiquetas `<title>` y `<meta name="description">` presentes.  
- URLs limpias relativas (`index.html`, `producto.html`, `carrito.html`).  
- Atributos `alt` en imágenes.

---

## ⚡ Rendimiento

- Carga por CDN (rápida) de Tailwind. 

---

## 🚀 Despliegue

- **GitHub Pages**: servir desde `docs/` o raíz del repo.  
- **Netlify / Vercel**: seleccionar `src/` como directorio de publicación o mover archivos al raíz.  
- **Cualquier hosting estático**: subir `src/`, `assets/`, `data/` (si aplica).

---

## 🧭 Roadmap

- [ ] Página “Carrito” con cantidades, eliminación y totales detallados.  
- [ ] Búsqueda y filtrado por marca/modelo/almacenamiento.  
- [ ] Paginación y orden por precio/fecha.  
- [ ] Galería de imágenes en detalle con zoom.  
- [ ] Panel admin (CRUD de productos).  
- [ ] Tests de UI y de almacenamiento local.

---