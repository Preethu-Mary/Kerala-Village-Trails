
// Get cart from sessionStorage
export function getCart() {
  return JSON.parse(sessionStorage.getItem("cart")) || [];
}

// Save cart to sessionStorage
export function saveCart(cart) {
  sessionStorage.setItem("cart", JSON.stringify(cart));
}


// Remove item by index
export function removeFromCart(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  return cart;
}

// Clear entire cart
export function clearCart() {
  sessionStorage.removeItem("cart");
  return [];
}
