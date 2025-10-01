import { useState, useEffect } from "react";
import { getCart, removeFromCart, clearCart } from "../../utils/cartLogic";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();


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

  const handleBooking = () => {
    navigate("/contact"); // replace "/booking" with your booking page route
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
              <div className="cart-actions">
                <button onClick={handleClear} className="btn btn-secondary mt-3">
                Clear Cart
                </button>
                <button onClick={handleBooking} className="btn btn-primary btn btn-secondary">
                Send Booking Request
                </button>
            </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
