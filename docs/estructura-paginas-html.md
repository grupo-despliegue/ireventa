# Estructura de las páginas HTML

Este documento describe la estructura de los archivos HTML que conforman la aplicación **iReventa**, explicando las secciones principales y su propósito en cada una de las páginas.

---

## 📄 Páginas principales

El proyecto cuenta con tres archivos HTML dentro de la carpeta `src/`:

- **`index.html`** → Página principal del catálogo.  
- **`producto.html`** → Página de detalle de un producto individual.  
- **`carrito.html`** → Página del carrito de compra.

Cada una sigue una estructura coherente que comparte los mismos elementos de cabecera (`<header>`), pie de página (`<footer>`) y scripts, adaptando el contenido principal (`<main>`) según la funcionalidad.

---

## 🏠 `index.html` — Página principal

### 📋 Descripción
La página **index.html** muestra el catálogo general de iPhones reacondicionados disponibles.  
Utiliza un diseño de cuadrícula (grid) para listar los productos, cada uno con su imagen, descripción, precio y un botón de acceso al detalle.

### 🧩 Estructura general

- **`<head>`** → Contiene la configuración de idioma, metadatos, título y carga de Tailwind CSS.  
- **`<header>`** → Barra superior con:
  - El logotipo y nombre del sitio.
  - Un contador del carrito.
  - Un botón para alternar entre modo claro y oscuro.  
- **`<main>`** → Sección principal con el catálogo de productos.  
  - Contiene una cuadrícula (`<div id="grid">`) con múltiples tarjetas de producto.
  - Cada tarjeta incluye:
    - Imagen del producto.
    - Nombre y descripción.
    - Precio.
    - Enlace al detalle (`producto.html?id=...`).  
- **`<footer>`** → Pie de página con los derechos reservados.  
- **Scripts** → Enlaza los ficheros:
  - `modo-oscuro.js` (para cambiar el tema).
  - `carrito.js` (gestión del carrito).

### 🧠 Observaciones
- Usa **Tailwind CSS** desde CDN para el diseño responsivo y modo oscuro.  
- Los productos se muestran estáticamente en el HTML.  
- Los scripts permiten interactividad sin necesidad de recargar la página completa.

---

## 📱 `producto.html` — Página de detalle del producto

### 📋 Descripción
Esta página muestra la información detallada de un producto concreto.  
El contenido se genera dinámicamente a través de JavaScript según el parámetro recibido en la URL (`?id=producto`).

### 🧩 Estructura general

- **`<head>`** → Igual que en `index.html`, define metadatos y estilos con Tailwind.  
- **`<header>`** → Idéntico al de la página principal para mantener coherencia visual.  
- **`<main>`** → Contiene un único contenedor:
  - **`<div id="producto">`** → Espacio donde se inyecta la información del producto mediante `producto.js`.  
- **`<footer>`** → Igual que en el resto de páginas.  
- **Scripts**:
  - `modo-oscuro.js` → Permite alternar entre modo claro y oscuro.  
  - `producto.js` → Carga los datos del producto seleccionado.  
  - `carrito.js` → Añade funcionalidades del carrito (agregar producto, actualizar contador, etc.).

### 🧠 Observaciones
- El contenido se genera de forma dinámica: el HTML sirve de plantilla vacía.  
- La lógica para mostrar los datos se gestiona completamente con JavaScript.  
- Mantiene coherencia visual con la página principal.

---

## 🛒 `carrito.html` — Página del carrito

### 📋 Descripción
La página **carrito.html** muestra los productos que el usuario ha añadido al carrito de compra.  
Permite revisar los artículos seleccionados y volver al catálogo principal.

### 🧩 Estructura general

- **`<head>`** → Define metadatos, título y configuración de Tailwind CSS.  
- **`<header>`** → Igual que en las demás páginas, incluye el nombre del sitio, contador del carrito y cambio de tema.  
- **`<main>`** →
  - Título: “Tu carrito”.
  - **`<div id="carritoContainer">`** → Contenedor donde se generan los productos añadidos al carrito mediante JavaScript.  
  - Enlace de retorno al catálogo (`index.html`).  
- **`<footer>`** → Pie de página con derechos reservados.  
- **Scripts**:
  - `modo-oscuro.js` → Control del tema.  
  - `carrito.js` → Lógica de gestión del carrito.

### 🧠 Observaciones
- Todo el contenido del carrito se genera dinámicamente con JavaScript.  
- La interfaz mantiene el mismo estilo y componentes comunes (cabecera y pie) que el resto de páginas.  
- El diseño es totalmente **responsivo** y compatible con modo oscuro.

---

## 🎨 Elementos comunes en todas las páginas

| Elemento | Descripción |
|-----------|--------------|
| **`<header>`** | Incluye el logotipo, contador de carrito y botón de tema oscuro. |
| **`<footer>`** | Muestra los derechos reservados del sitio. |
| **Modo oscuro** | Activado con `modo-oscuro.js` mediante Tailwind CSS. |
| **Responsividad** | Garantizada por Tailwind y clases de diseño flexibles. |

---

## 🧱 Conclusión

La estructura HTML de **iReventa** se basa en una organización clara y modular:  
cada página tiene un propósito definido pero comparte una misma plantilla visual, lo que asegura una **experiencia de usuario coherente y mantenible**.  
El uso de Tailwind CSS y scripts separados facilita el mantenimiento, la reutilización de componentes y futuras ampliaciones del proyecto.