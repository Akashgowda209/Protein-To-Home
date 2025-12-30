function orderNow(product) {
  const message = `Hi, I want to order: ${product}`;
  const phone = "918310405828";
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`);
}
