

fetch("components/header.html")
  .then(respuesta => respuesta.text())
  .then(html => {
    document.getElementById("header-container").innerHTML = html;
  });

fetch("components/footer.html")
  .then(respuesta => respuesta.text())
  .then(html => {
    document.getElementById("footer-container").innerHTML = html;
  });




const productos = [
  {
    nombre: "Camiseta Básica",
    precio: "$25.000",
    descripcion: "Camiseta de algodón 100%, disponible en varios colores."
  },
  {
    nombre: "Tenis Deportivos",
    precio: "$120.000",
    descripcion: "Tenis cómodos para correr o para el día a día."
  },
  {
    nombre: "Mochila Escolar",
    precio: "$55.000",
    descripcion: "Mochila resistente con varios compartimentos."
  },
  {
    nombre: "Audífonos Bluetooth",
    precio: "$89.000",
    descripcion: "Sonido de calidad y batería de larga duración."
  }
];




class ProductCard extends HTMLElement {

  connectedCallback() {
    const nombre      = this.getAttribute("nombre");
    const precio      = this.getAttribute("precio");
    const descripcion = this.getAttribute("descripcion");

    this.innerHTML = `
      <h3>${nombre}</h3>
      <p>${descripcion}</p>
      <p class="precio">${precio}</p>
    `;
  }
}

customElements.define("product-card", ProductCard);




const catalogo = document.getElementById("catalogo");

for (let i = 0; i < productos.length; i++) {
  const tarjeta = document.createElement("product-card");

  tarjeta.setAttribute("nombre",      productos[i].nombre);
  tarjeta.setAttribute("precio",      productos[i].precio);
  tarjeta.setAttribute("descripcion", productos[i].descripcion);

  catalogo.appendChild(tarjeta);
}
