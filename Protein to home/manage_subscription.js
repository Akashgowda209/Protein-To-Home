let subscriptions = JSON.parse(localStorage.getItem("subscriptions")) || [];

function saveSubscriptions() {
  localStorage.setItem("subscriptions", JSON.stringify(subscriptions));
}

function renderSubscriptions() {
  const table = document.getElementById("subscriptionTable");
  table.innerHTML = "";

  subscriptions.forEach((s, index) => {
    table.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${s.name}</td>
        <td>${s.duration}</td>
        <td>${s.quantity}</td>
        <td>₹${s.price}</td>
        <td>
          <button class="edit-btn" onclick="editSubscription(${index})">✏️</button>
          <button class="delete-btn" onclick="deleteSubscription(${index})">❌</button>
        </td>
      </tr>
    `;
  });
}

function addSubscription() {
  const name = planName.value;
  const duration = planDuration.value;
  const quantity = planQuantity.value;
  const price = planPrice.value;

  if (!name || !duration || !quantity || !price) {
    alert("Fill all fields");
    return;
  }

  subscriptions.push({ name, duration, quantity, price });
  saveSubscriptions();
  renderSubscriptions();

  planName.value = "";
  planDuration.value = "";
  planQuantity.value = "";
  planPrice.value = "";
}

function deleteSubscription(index) {
  subscriptions.splice(index, 1);
  saveSubscriptions();
  renderSubscriptions();
}

function editSubscription(index) {
  const s = subscriptions[index];

  const name = prompt("Edit Plan Name", s.name);
  const duration = prompt("Edit Duration", s.duration);
  const quantity = prompt("Edit Quantity", s.quantity);
  const price = prompt("Edit Price", s.price);

  if (name && duration && quantity && price) {
    subscriptions[index] = { name, duration, quantity, price };
    saveSubscriptions();
    renderSubscriptions();
  }
}

renderSubscriptions();

function editSubscription(index) {
  localStorage.setItem("editSubscriptionIndex", index);
  window.location.href = "edit-subscription.html";
}

  function goDashboard() {
    window.location.href = "admin.html";
  }
