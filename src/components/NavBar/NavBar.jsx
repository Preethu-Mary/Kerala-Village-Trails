import { useState } from "react";
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
        <li className="close-btn" onClick={closeMenu}>X</li>
        <li><a href="#hero" onClick={closeMenu}>Home</a></li>
        <li><a href="#activities" onClick={closeMenu}>Activities</a></li>
        <li><a href="./contactPage/contact.html" onClick={closeMenu}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
