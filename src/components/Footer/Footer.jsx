import './Footer.css';
import { FaInstagram, FaFacebook } from "react-icons/fa";

function Footer() {

    return(
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-section contact-info">
                <h3>Contact Us</h3>
                <div>
                    We’d love to hear from you! Whether you're curious about our village experiences, need help planning your visit, or just want to connect, our team is here for you. Reach out through any of the channels below — we usually respond within 24 hours on weekdays.
                </div><br/>
                <p><strong>Phone:&nbsp;</strong> <a href="tel:+15194764300">+1 (519) 476-4300</a></p>
                <p><strong>Email:&nbsp;</strong> <a href="mailto:experiencevillagetrails@gmail.com">experiencevillagetrails@gmail.com</a></p>
                <p><strong>Address:&nbsp;</strong> 123 Village Road, Kerala, India</p>
                <p><strong>Hours:&nbsp;</strong> Mon–Sat, 9:00 AM – 6:00 PM</p>
                </div>

                <div className="footer-section social-media">
                <h3>Follow Us</h3>
                 <a href="https://instagram.com" target="_blank" rel="noreferrer">
                    <FaInstagram size={24} style={{ marginRight: "8px" }} />
                    Instagram
                </a>
                <br />
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                    <FaFacebook size={24} style={{ marginRight: "8px" }} />
                    Facebook
                </a>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© 2025 Kerala Village Trails. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer