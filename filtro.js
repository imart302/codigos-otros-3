// Tenemos un li de productos

/**
 * Luis Gallardo: 25 Pts, Ceci Cañedo: 25 Pts
El programa aplica las mejores prácticas y estándares en su código 5/5
El programa se ejecuta correctamente 5/5
El programa cuenta con una secuencia lógica 5/5
Se refactorizó código 5/5
El programa se ejecuta correctamente 5/5
 * 
 */

const productos = [
  {
    nombre: 'Zapato negro',
    tipo: 'zapato',
    color: 'negro',
    img: './taco-negro.jpg',
  },
  {
    nombre: 'Zapato azul',
    tipo: 'zapato',
    color: 'azul',
    img: './taco-azul.jpg',
  },
  {
    nombre: 'Bota negra',
    tipo: 'bota',
    color: 'negro',
    img: './bota-negra.jpg',
  },
  { nombre: 'Bota azul', tipo: 'bota', color: 'azul', img: './bota-azul.jpg' },
  {
    nombre: 'Zapato rojo',
    tipo: 'zapato',
    color: 'rojo',
    img: './zapato-rojo.jpg',
  },
];

const productsList = document.querySelector('#lista-de-productos');
const inputFilter = document.querySelector('#id-input-text');

function displayProductos(productos) {
  for (let i = 0; i < productos.length; i++) {
    var productContainer = document.createElement('div');
    productContainer.classList.add('producto');

    var titleProduct = document.createElement('p');
    titleProduct.classList.add('titulo');
    titleProduct.textContent = productos[i].nombre;

    var imagen = document.createElement('img');
    imagen.setAttribute('src', productos[i].img);

    productContainer.appendChild(titleProduct);
    productContainer.appendChild(imagen);

    productsList.appendChild(productContainer);
  }
}

displayProductos(productos);
const botonDeFiltro = document.querySelector('#id-filter-button');

botonDeFiltro.addEventListener('click', function () {
  while (productsList.firstChild) {
    productsList.removeChild(productsList.firstChild);
  }

  const texto = inputFilter.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto);

  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement('div');
    d.classList.add('producto');

    var ti = document.createElement('p');
    ti.classList.add('titulo');
    ti.textContent = productosFiltrados[i].nombre;

    var imagen = document.createElement('img');
    imagen.setAttribute('src', productosFiltrados[i].img);

    d.appendChild(ti);
    d.appendChild(imagen);

    productsList.appendChild(d);
  }
});

const filtrado = (productos = [], texto) => {
  return productos.filter(
    (item) => item.tipo.includes(texto) || item.color.includes(texto)
  );
};
