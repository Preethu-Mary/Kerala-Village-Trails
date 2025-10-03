import { useState } from "react";
import { FaHome, FaWalking, FaShoppingCart, FaTimes, FaPhone } from "react-icons/fa";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" onClick={closeMenu}><h1 className="logo-text">Village Trails</h1></Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>☰</div>

      <ul className={`nav-links ${isOpen ? "show" : ""}`}>
        <li className="close-btn" onClick={closeMenu}><FaTimes /></li>

        <li>
          <Link to="/" onClick={closeMenu}>
            <FaHome style={{ marginRight: "5px" }} /> Home
          </Link>
        </li>

        <li>
          <Link to="/cart" onClick={closeMenu}>
            <FaShoppingCart style={{ marginRight: "5px" }} /> Cart
          </Link>
        </li>

        <li>
          <Link to="/contact" onClick={closeMenu}>
            <FaPhone style={{ marginRight: "5px" }} /> Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
