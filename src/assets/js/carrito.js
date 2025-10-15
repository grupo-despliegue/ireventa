const CARRITO_KEY = "carrito";

function obtenerCarrito() {
  return JSON.parse(localStorage.getItem(CARRITO_KEY) || "[]");
}

function guardarCarrito(carrito) {
  localStorage.setItem(CARRITO_KEY, JSON.stringify(carrito));
  actualizarContador();
}

function actualizarContador() {
  const contadorElems = document.querySelectorAll("#contadorCarritoNumero");
  const carrito = obtenerCarrito();
  contadorElems.forEach(elem => elem.textContent = carrito.length);
}

function eliminarDelCarrito(index) {
  const carrito = obtenerCarrito();
  carrito.splice(index, 1);
  guardarCarrito(carrito);
  renderizarCarrito();
}

function renderizarCarrito() {
  const container = document.getElementById("carritoContainer");
  if (!container) return;

  const carrito = obtenerCarrito();
  if (carrito.length === 0) {
    container.innerHTML = `<div class="mb-6"><p class="text-gray-700 dark:text-gray-300">Tu carrito está vacío.</p></div>`;
    return;
  }

  container.innerHTML = carrito.map((producto, index) => `
    <div class="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded shadow mb-4">
      <div class="flex items-center gap-4">
        <img src="${producto.imagen}" alt="${producto.nombre}" class="w-20 h-20 object-cover rounded">
        <div>
          <h3 class="font-semibold text-lg">${producto.nombre}</h3>
          <p class="text-green-600 dark:text-green-400 font-bold">${producto.precio}</p>
        </div>
      </div>
      <button onclick="eliminarDelCarrito(${index})" class="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded">Eliminar</button>
    </div>
  `).join('');
}

document.addEventListener("DOMContentLoaded", () => {
  actualizarContador();
  renderizarCarrito();

  document.querySelectorAll("#contadorCarrito").forEach(btn => {
    btn.addEventListener("click", () => {
      window.location.href = "carrito.html";
    });
  });
});