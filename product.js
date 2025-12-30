document.addEventListener("DOMContentLoaded", () => {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const container = document.getElementById("productList");

  if (products.length === 0) {
    container.innerHTML = "<p>No products available</p>";
    return;
  }

  container.innerHTML = "";

  products.forEach(p => {
    container.innerHTML += `
      <div class="product-card">
        <h3>${p.name}</h3>

        <div class="price-order">
          <span class="price">₹${p.price}</span>
          <br>
          <button class="order-btn" onclick="orderProduct('${p.name}')">
            Order
          </button>
        </div>
      </div>
    `;
  });
});

/* ORDER FUNCTION */
function orderProduct(productName) {
  localStorage.setItem("selectedProduct", productName);
  window.location.href = "order_product.html";
}


const products = [
  {
    name: "Chicken Breast 500g",
    price: 230
  },
  {
    name: "Chicken Breast 1kg",
    price: 440
  },
  {
    name: "Eggs (30 pcs)",
    price: 210
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("productContainer");

  products.forEach(p => {
    container.innerHTML += `
      <div class="product-card">
        <h3>${p.name}</h3>
        <p class="price">₹${p.price}</p>
        <button onclick="orderProduct('${p.name}', ${p.price})">
          Order
        </button>
      </div>
    `;
  });
});

function orderProduct(name, price) {
  const msg =
`Product Order
Product: ${name}
Price: ₹${price}`;

  window.open(
    "https://wa.me/918310405828?text=" + encodeURIComponent(msg),
    "_blank"
  );
}

