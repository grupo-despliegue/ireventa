# Estructura de carpetas del repositorio

Este documento describe la estructura del repositorio del proyecto **iReventa** y la función de cada una de sus carpetas y archivos principales.

---

## 📁 Estructura general
```
iReventa/
│
├── docs/ # Documentación del proyecto (archivos .md)
│
├── src/ # Archivos HTML principales de la aplicación
│ ├── index.html # Página principal (inicio)
│ ├── producto.html # Página de detalle de producto
│ └── carrito.html # Página del carrito de compra
│ └── assets/ # Recursos estáticos del proyecto
│     ├── img/ # Imágenes de los productos
│     └── js/ # Archivos JavaScript con la lógica de la aplicación
│
├── tests/ # Carpeta reservada para pruebas (actualmente vacía)
│
└── README.md # Descripción general del proyecto
```
---

## 📦 Descripción de carpetas

### `assets/`
Contiene todos los recursos estáticos del proyecto, como imágenes y scripts JavaScript.

- **`img/`** → Imágenes relacionadas con los productos o elementos visuales de la web.  
- **`js/`** → Archivos JavaScript que contienen la lógica del frontend (por ejemplo, gestión del carrito, eventos de botones, etc.).

### `docs/`
Carpeta destinada a la **documentación del proyecto**.  
Aquí se incluyen archivos `.md` que explican la estructura e instrucciones de colaboración.

### `src/`
Incluye los archivos HTML principales del sitio:

- **`index.html`** → Página principal de iReventa, con la vista general del catálogo.  
- **`producto.html`** → Página dedicada a mostrar los detalles de un producto específico.  
- **`carrito.html`** → Página del carrito, donde el usuario puede ver los productos añadidos.

### `tests/`
Espacio reservado para incluir pruebas del proyecto (por ejemplo, validaciones de funcionalidad).  
Actualmente se encuentra vacía.

---

## 🧩 Estructura lógica del proyecto

El proyecto sigue una organización simple y clara:
- **`src/`** contiene el contenido HTML y CSS (Tailwind).
- **`assets/`** guarda los recursos necesarios para dar funcionalidad.
- **`docs/`** sirve para mantener una documentación actualizada.
- **`tests/`** está preparada para incorporar pruebas en el futuro.

Esta estructura facilita el mantenimiento del proyecto y la colaboración entre distintos miembros del equipo.

---

## 📝 Notas

- Todos los nuevos recursos (imágenes o scripts) deben guardarse dentro de las carpetas correspondientes en `assets/`.
- Cualquier archivo de documentación nuevo debe añadirse dentro de `docs/` y enlazarse desde el `README.md` principal.
- Si se crean nuevas páginas HTML, deben ubicarse en `src/` para mantener la coherencia del proyecto.
