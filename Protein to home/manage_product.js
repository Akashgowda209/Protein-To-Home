let products = JSON.parse(localStorage.getItem("products")) || [];

function saveProducts() {
  localStorage.setItem("products", JSON.stringify(products));
}

function renderProducts() {
  let table = document.getElementById("productTable");
  table.innerHTML = "";

  products.forEach((p, index) => {
    table.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${p.name}</td>
        <td>₹${p.price}</td>
        <td>
          <button class="edit-btn" onclick="editProduct(${index})">✏️</button>
          <button class="delete-btn" onclick="deleteProduct(${index})">❌</button>
        </td>
      </tr>
    `;
  });
}

function addProduct() {
  let name = document.getElementById("productName").value;
  let price = document.getElementById("productPrice").value;

  if (!name || !price) {
    alert("Fill all fields");
    return;
  }

  products.push({ name, price });
  saveProducts();
  renderProducts();

  document.getElementById("productName").value = "";
  document.getElementById("productPrice").value = "";
}

function deleteProduct(index) {
  products.splice(index, 1);
  saveProducts();
  renderProducts();
}

function editProduct(index) {
  let newName = prompt("Edit Product Name", products[index].name);
  let newPrice = prompt("Edit Price", products[index].price);

  if (newName && newPrice) {
    products[index] = { name: newName, price: newPrice };
    saveProducts();
    renderProducts();
  }
}

renderProducts();
function editProduct(index) {
  localStorage.setItem("editProductIndex", index);
  window.location.href = "edit-product.html";
}

  function goDashboard() {
    window.location.href = "admin.html";
  }

