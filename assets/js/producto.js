const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const productos = {
  "iphone-15-pro-max": {
    nombre: "iPhone 15 Pro Max",
    descripcion: "Pantalla de 6,7″, chip A17 Pro, cámara triple de 48 MP, Dynamic Island.",
    precio: "950€",
    imagen: "../assets/img/iphone-15-pro-max.jpg",
    detalles: [
      "Capacidad: 128 GB, 256 GB, 512 GB, 1 TB",
      "Material: Titanio de grado aeroespacial",
      "Face ID, 5G, USB-C",
      "Año: 2023"
    ]
  },
  "iphone-15-pro": {
    nombre: "iPhone 15 Pro",
    descripcion: "Pantalla de 6,1″, chip A17 Pro, cámara triple de 48 MP, Dynamic Island.",
    precio: "850€",
    imagen: "../assets/img/iphone-15-pro.jpg",
    detalles: [
      "Capacidad: 128 GB, 256 GB, 512 GB",
      "Color: Negro, Plata, Azul, Natural",
      "Resistencia al agua IP68",
      "Año: 2023"
    ]
  },
  "iphone-15": {
    nombre: "iPhone 15",
    descripcion: "Pantalla de 6,1″, chip A16 Bionic, cámara dual de 48 MP.",
    precio: "650€",
    imagen: "../assets/img/iphone-15.jpg",
    detalles: [
      "Capacidad: 128 GB, 256 GB, 512 GB",
      "Color: Azul, Rosa, Verde, Amarillo, Negro",
      "USB-C, Face ID, 5G",
      "Año: 2023"
    ]
  },
  "iphone-15-plus": {
    nombre: "iPhone 15 Plus",
    descripcion: "Pantalla de 6,7″, chip A16 Bionic, cámara dual de 48 MP.",
    precio: "720€",
    imagen: "../assets/img/iphone-15-plus.jpg",
    detalles: [
      "Capacidad: 128 GB, 256 GB, 512 GB",
      "Pantalla Super Retina XDR",
      "Batería de larga duración",
      "Año: 2023"
    ]
  },
  "iphone-14-pro-max": {
    nombre: "iPhone 14 Pro Max",
    descripcion: "Pantalla de 6,7″, chip A16 Bionic, cámara triple de 48 MP, Dynamic Island.",
    precio: "700€",
    imagen: "../assets/img/iphone-14-pro-max.jpg",
    detalles: [
      "Always-On display",
      "ProMotion, hasta 120 Hz",
      "Face ID, Ceramic Shield",
      "Año: 2022"
    ]
  },
  "iphone-14-pro": {
    nombre: "iPhone 14 Pro",
    descripcion: "Pantalla de 6,1″, chip A16 Bionic, cámara triple de 48 MP, Dynamic Island.",
    precio: "550€",
    imagen: "../assets/img/iphone-14-pro.jpg",
    detalles: [
      "Pantalla OLED Super Retina XDR",
      "Grabación ProRes y Dolby Vision",
      "Detección de accidentes",
      "Año: 2022"
    ]
  },
  "iphone-14": {
    nombre: "iPhone 14",
    descripcion: "Pantalla de 6,1″, chip A15 Bionic, cámara dual de 12 MP.",
    precio: "400€",
    imagen: "../assets/img/iphone-14.jpg",
    detalles: [
      "Modo Cine para vídeos",
      "Detección de choques, emergencia SOS",
      "Excelente autonomía",
      "Año: 2022"
    ]
  },
  "iphone-14-plus": {
    nombre: "iPhone 14 Plus",
    descripcion: "Pantalla de 6,7″, chip A15 Bionic, cámara dual de 12 MP.",
    precio: "450€",
    imagen: "../assets/img/iphone-14-plus.jpg",
    detalles: [
      "Pantalla grande y brillante",
      "Carga rápida compatible",
      "Face ID y resistencia IP68",
      "Año: 2022"
    ]
  },
  "iphone-se-2022": {
    nombre: "iPhone SE 2022",
    descripcion: "Pantalla de 4,7″, chip A15 Bionic, cámara de 12 MP.",
    precio: "200€",
    imagen: "../assets/img/iphone-se-2022.jpg",
    detalles: [
      "Diseño clásico con botón Home",
      "Touch ID",
      "Compatible con 5G",
      "Año: 2022"
    ]
  },
  "iphone-13": {
    nombre: "iPhone 13",
    descripcion: "Pantalla de 6,1″, chip A15 Bionic, cámara dual de 12 MP.",
    precio: "320€",
    imagen: "../assets/img/iphone-13.jpg",
    detalles: [
      "Buen rendimiento para juegos",
      "Modo cine para vídeo",
      "Alta eficiencia energética",
      "Año: 2021"
    ]
  },
  "iphone-13-mini": {
    nombre: "iPhone 13 Mini",
    descripcion: "Pantalla de 5,4″, chip A15 Bionic, cámara dual de 12 MP.",
    precio: "280€",
    imagen: "../assets/img/iphone-13-mini.jpg",
    detalles: [
      "Diseño compacto ideal para una mano",
      "Autonomía mejorada respecto al 12 mini",
      "Face ID y carga MagSafe",
      "Año: 2021"
    ]
  },
  "iphone-13-pro": {
    nombre: "iPhone 13 Pro",
    descripcion: "Pantalla de 6,1″, chip A15 Bionic, cámara triple de 12 MP.",
    precio: "450€",
    imagen: "../assets/img/iphone-13-pro.jpg",
    detalles: [
      "Pantalla ProMotion de 120 Hz",
      "Grabación en ProRes",
      "Gran autonomía y rendimiento",
      "Año: 2021"
    ]
  }
};

const producto = productos[id];
const container = document.getElementById("producto");

function agregarAlCarritoUI(producto) {
  const carrito = JSON.parse(localStorage.getItem("carrito") || "[]");
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  document.querySelectorAll("#contadorCarritoNumero").forEach(elem => elem.textContent = carrito.length);
  alert(`${producto.nombre} se ha añadido al carrito`);
}

if (producto) {
  const listaDetalles = producto.detalles
    ? `<ul class="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-200 mb-6">
         ${producto.detalles.map(detalle => `<li>${detalle}</li>`).join('')}
       </ul>`
    : "";

  container.innerHTML = `
  <div class="flex flex-col items-center text-center">
    <h2 class="text-3xl font-bold mb-4">${producto.nombre}</h2>
    <img src="${producto.imagen}" alt="${producto.nombre}" class="max-w-xs w-full rounded mb-4 shadow" />
  </div>
  <p class="text-gray-700 dark:text-gray-200 text-lg mb-4">${producto.descripcion}</p>
  ${listaDetalles}
  <p class="text-green-600 dark:text-green-400 text-2xl font-bold mb-6">${producto.precio}</p>
  <div class="flex gap-4">
    <a href="index.html" class="inline-block bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded transition">← Volver al catálogo</a>
    <button id="addCarritoBtn" class="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition flex items-center gap-2">
      + Añadir al carrito
    </button>
  </div>
  `;

  document.getElementById("addCarritoBtn").addEventListener("click", () => {
    agregarAlCarritoUI(producto);
  });
} else {
  container.innerHTML = `
    <h2 class="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">Producto no encontrado</h2>
    <p class="text-gray-700 dark:text-gray-200 mb-6">El producto solicitado no está disponible o el ID es incorrecto.</p>
    <a href="index.html" class="inline-block bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded transition">← Volver al catálogo</a>
  `;
}