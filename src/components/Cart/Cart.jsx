import { useState, useEffect } from "react";
import { getCart, removeFromCart, clearCart } from "../../utils/cartLogic";
import { FaTrash } from "react-icons/fa";
import "./Cart.css";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const handleRemove = (index) => {
    const updatedCart = removeFromCart(index);
    setCart(updatedCart);
  };

  const handleClear = () => {
    const updatedCart = clearCart();
    setCart(updatedCart);
  };

  return (
    <div className="cart">
      <h1 className="cart-title">Your Cart</h1>
      <div className="cart-container">
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item, i) => (
            <div key={i} className="cart-item">
              {i + 1}. {item.title} 
              <button className="cart-remove-btn" onClick={() => handleRemove(i)}>
                <FaTrash />
                <span className="btn-text">Remove</span>
              </button>
            </div>
          ))
        )}
        {cart.length > 0 && (
          <button onClick={handleClear} className="btn btn-secondary mt-3">
            Clear Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Cart;
