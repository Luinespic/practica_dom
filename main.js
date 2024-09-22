const products = [
  {
    name: "Smartphone Galaxy S21",
    price: 799.99,
    image:
      "https://m.media-amazon.com/images/I/618nXc9a7gL._AC_UF894,1000_QL80_.jpg",
    seller: "Samsung",
    freeShipping: true,
    rating: 4.7,
    category: "Smartphones",
  },
  {
    name: "Laptop Dell XPS 13",
    price: 999.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTiF1VM8ZcOlVQbPH8gZjol8W2NeBKhwoY6g&s",
    seller: "Dell",
    freeShipping: true,
    rating: 4.5,
    category: "Laptops",
  },
  {
    name: "Tablet Apple iPad Pro",
    price: 1099.99,
    image: "https://m.media-amazon.com/images/I/91xk0o++tdL.jpg",
    seller: "Apple",
    freeShipping: false,
    rating: 4.8,
    category: "Tablets",
  },
  {
    name: "Sony WH-1000XM4 Headphones",
    price: 349.99,
    image:
      "https://cdn.mos.cms.futurecdn.net/krMdUog4bxjkXzUVDhWLHJ-1200-80.jpg",
    seller: "Sony",
    freeShipping: true,
    rating: 4.9,
    category: "Headphones",
  },
  {
    name: "Garmin Fenix 6 Smartwatch",
    price: 599.99,
    image: "https://m.media-amazon.com/images/I/71ZiysSiJWL.jpg",
    seller: "Garmin",
    freeShipping: false,
    rating: 4.6,
    category: "Smartwatches",
  },
  {
    name: "LG UltraWide Monitor",
    price: 399.99,
    image: "https://m.media-amazon.com/images/I/71ZRrobGbWL.jpg",
    seller: "LG",
    freeShipping: true,
    rating: 4.7,
    category: "Monitors",
  },
  {
    name: "Canon EOS R5 Camera",
    price: 3899.99,
    image:
      "https://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_square_32c26ad194234d42b3cd9e582a21c99b",
    seller: "Canon",
    freeShipping: false,
    rating: 4.9,
    category: "Cameras",
  },
  {
    name: "PlayStation 5 Console",
    price: 499.99,
    image:
      "https://m.media-amazon.com/images/I/41vh60UF-2L._AC_UF894,1000_QL80_.jpg",
    seller: "Sony",
    freeShipping: true,
    rating: 4.8,
    category: "Consoles",
  },
  {
    name: "TP-Link Archer AX50 Router",
    price: 149.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8rSL-mX9kvHGak8y7rr_IpNEoUo59erF5hw&s",
    seller: "TP-Link",
    freeShipping: true,
    rating: 4.6,
    category: "Networking",
  },
  {
    name: "Razer BlackWidow Mechanical Keyboard",
    price: 129.99,
    image:
      "https://m.media-amazon.com/images/I/71sXzUqI9XL._AC_UF894,1000_QL80_.jpg",
    seller: "Razer",
    freeShipping: false,
    rating: 4.5,
    category: "Peripherals",
  },
  {
    name: "Seagate 2TB External Hard Drive",
    price: 89.99,
    image: "https://m.media-amazon.com/images/I/71AYysTr-nL.jpg",
    seller: "Seagate",
    freeShipping: true,
    rating: 4.4,
    category: "Storage",
  },
  {
    name: 'Samsung QLED 55" TV',
    price: 1199.99,
    image:
      "https://m.media-amazon.com/images/I/81W4MbZDa8L._AC_UF894,1000_QL80_.jpg",
    seller: "Samsung",
    freeShipping: false,
    rating: 4.7,
    category: "TVs",
  },
  {
    name: "JBL Charge 4 Bluetooth Speaker",
    price: 179.99,
    image: "https://m.media-amazon.com/images/I/71DW6JMyCWL.jpg",
    seller: "JBL",
    freeShipping: true,
    rating: 4.8,
    category: "Speakers",
  },
  {
    name: "Logitech MX Master 3 Mouse",
    price: 99.99,
    image: "https://m.media-amazon.com/images/I/613a-3jtieL.jpg",
    seller: "Logitech",
    freeShipping: true,
    rating: 4.9,
    category: "Peripherals",
  },
  {
    name: "HP Envy 6055 Printer",
    price: 129.99,
    image:
      "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06618546.png",
    seller: "HP",
    freeShipping: false,
    rating: 4.6,
    category: "Printers",
  },
];

// HEADER

const header = document.createElement("header");
header.innerHTML = `
<nav id="header">
<div id="logo-container">
<img id="logo-img" src="https://cdn.pccomponentes.com/img/logos/logo-pccomponentes.svg" alt="PcComponentes Logo"/>
</div>
<div id="search-container">
  <input type="text" placeholder="Buscar" id="search-input">
  <button type="submit" id="search-button">
    <img id="search-img" src="https://img.icons8.com/ios-filled/50/000000/search.png" alt="Search">
  </button>
</div>
<div id="accountandbasketcontainer">
<div id="account-container">
<img id="account-img" src="https://cdn-icons-png.flaticon.com/512/2354/2354573.png" alt="Mi Cuenta"/>
<p>Mi cuenta</p>
</div>
<div id="basket-container">
<img id="basket-img" src="https://cdn-icons-png.flaticon.com/512/107/107831.png" alt="Carrito"/>
<p>Mi cesta</p>
</div>
</div>
</nav>`;

document.body.appendChild(header);

const searchButton = document.querySelector("#search-button");
const searchInput = document.querySelector("#search-input");

// MAIN

const main = document.createElement("main");
main.innerHTML = `
<div id="banner-section">
<img id="main-banner" src="https://img.pccomponentes.com/pcblog/1726092000000/banner-cabecera-desktop-pcc-lpd-sept-24-1560x250px-v2.jpg" alt="Banner principal"/>
</div>
<div id="main-below-banner">
<section id="filter-section">
<button id="filterBtn" class="btn transparent">Borrar filtros</button>
<nav id="price-filter">
</nav>
<nav id="brand-filter">
</nav>
<nav id="freeshipping-filter">
</nav>
<nav id="rating-filter">
</nav>
</section>
<section id="product-section">
</section>
</div>
`;

document.body.appendChild(main);

// FILTER

const filterBtn = document.querySelector("#filterBtn");

// PRICE

const priceFilter = document.querySelector("#price-filter");
priceFilter.innerHTML = `
<span class="filterText">Precio</span>
<input type="range" min="0" max="2000" step="1" value="2000"/>
<input type="range" min="0" max="2000" step="1" value="0"/>
`;

// BRANDS

const brandFilter = document.querySelector("#brand-filter");
brandFilter.innerHTML = `
<span class="filterText">Marcas</span>
`;
const brandUl = document.createElement("ul");
brandFilter.appendChild(brandUl);

function printBrands() {
  const brandList = [];
  for (const product of products) {
    if (!brandList.includes(product.seller)) {
      const brandLi = document.createElement("li");
      brandLi.id = product.seller + "-filter";
      brandLi.className = "brandLi";
      brandLi.innerHTML = `
      <form>
      <input type="checkbox" class="brandCheckbox" id="${product.seller}Brand" name="${product.seller}"/>
      <label for="${product.seller}">${product.seller}</label>
      </form>
      `;
      brandUl.appendChild(brandLi);
      brandList.push(product.seller);
    }
  }
}

printBrands();

const brandCheckboxes = document.querySelectorAll(".brandCheckbox");

for (const brandCheckbox of brandCheckboxes) {
  brandCheckbox.addEventListener("click", () =>
    searchProduct(brandCheckbox.name)
  );
}
// FREESHIPPING

const freeShippingilter = document.querySelector("#freeshipping-filter");
freeShippingilter.innerHTML = `
<span class="filterText">Envío gratis</span>
<form id ="freeShippingForm">
<input type="radio" id="true" value="Yes"/>
<label for="true">Sí</label>
<input type="radio" id="false" value="No"/>
<label for="false">No</label>
</form>
`;

// RATING

const ratingFilter = document.querySelector("#rating-filter");
ratingFilter.innerHTML = `
<span class="ratingText">Valoración</span>
<form id ="ratingForm">
<input type="radio" id="rating4" value="4 stars and more"/>
<label for="true">✩✩✩✩ y más</label>
<input type="radio" id="ratingAll" value="All"/>
<label for="false">Todas las valoraciones</label>
</form>
`;

// PRODUCTS

const productSection = document.querySelector("#product-section");

function printProducts(productList) {
  productSection.innerHTML = "";
  for (const product of productList) {
    const article = document.createElement("article");
    article.className = "product";
    article.innerHTML = `
  <img class="productImg" src="${product.image}" alt="${product.name}"/>
  <h3 class="productName">${product.name}</h3>
  <p class="productPrice">${product.price}€</p>
  <p class="productRating">${product.rating}/5 <img id="star-rating" src="https://pngimg.com/uploads/star/star_PNG1592.png" alt="Estrella"/></p>
  `;

    if (product.freeShipping) {
      article.innerHTML += `<p class="productShipping">Envío gratis</p>`;
    }

    productSection.appendChild(article);
  }
}

function searchProduct(wordSearched) {
  const productsSearched = [];

  for (const product of products) {
    if (
      Object.values(product)
        .toString()
        .toLowerCase()
        .includes(wordSearched.toLowerCase())
    ) {
      productsSearched.push(product);
    }
  }
  printProducts(productsSearched);
  searchInput.value = "";
}

function searchProductEnter(wordSearched) {
  if (event.key == "Enter") {
    searchProduct(wordSearched);
  }
}

searchButton.addEventListener("click", () => searchProduct(searchInput.value));
searchInput.addEventListener("keydown", () =>
  searchProductEnter(searchInput.value)
);
filterBtn.addEventListener("click", () => printProducts(products));

printProducts(products);

// HTML Y CSS

// - El código HTML está correctamente estructurado. Hay dos elementos section o article principales que representan los filtros de búsqueda (a la izquierda en escritorio, arriba del contenido en móvil), y los elementos a vender en la tienda (a la derecha en escritorio, abajo de los filtros en móvil).

// - La web cuenta con media queries para escritorio y móvil. Así como una correcta estructura y posicionamiento de elementos por medio de flex o grid.
