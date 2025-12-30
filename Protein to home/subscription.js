document.addEventListener("DOMContentLoaded", () => {
  const plans = JSON.parse(localStorage.getItem("subscriptions")) || [];
  const container = document.getElementById("subscriptionList");

  if (!container) return;

  if (plans.length === 0) {
    container.innerHTML = "<p>No subscription plans available</p>";
    return;
  }

  container.innerHTML = "";

  plans.forEach(p => {
    container.innerHTML += `
      <div class="product-card">
        <h3>${p.name}</h3>
        <p>${p.quantity}</p>
        <p>${p.duration}</p>
        <p><strong>₹${p.price}</strong></p>

        <!-- ✅ FIXED BUTTON -->
        <button class="order-btn"
          onclick="orderSubscription('${p.name}')">
          Select Plan
        </button>
      </div>
    `;
  });
});

/* KEEP THIS FUNCTION */
function orderSubscription(planName){
  localStorage.setItem("selectedPlan", planName);
  window.location.href = "order_subscription.html";
}
