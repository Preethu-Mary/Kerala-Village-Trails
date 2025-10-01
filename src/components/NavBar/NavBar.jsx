import { useState } from "react";
import { FaHome, FaWalking, FaShoppingCart, FaTimes, FaPhone } from "react-icons/fa";
import "./NavBar.css";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/"><h1 className="logo-text">Village Trails</h1></a>
      </div>

      {/* Hamburger stays fixed */}
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${isOpen ? "show" : ""}`}>
        {/* Close Button (only visible on mobile) */}
        <li className="close-btn" onClick={closeMenu}>
          <FaTimes /> {/* Close icon */}
        </li>
        <li>
          <a href="/" onClick={closeMenu}>
            <FaHome style={{ marginRight: "5px" }} /> Home
          </a>
        </li>
        <li>
          <a href="#activities" onClick={closeMenu}>
            <FaWalking style={{ marginRight: "5px" }} /> Activities
          </a>
        </li>
        <li>
          <a href="/cart" onClick={closeMenu}>
            <FaShoppingCart style={{ marginRight: "5px" }} /> Cart
          </a>
        </li>
        <li>
          <a href="/contact" onClick={closeMenu}>
            <FaPhone  style={{ marginRight: "5px" }} /> Contact
          </a>
        </li>

      </ul>
    </nav>
  );
}

export default NavBar;
