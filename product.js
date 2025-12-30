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
