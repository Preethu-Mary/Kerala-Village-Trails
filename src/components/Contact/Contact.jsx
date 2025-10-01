import "./Contact.css";
import { useEffect, useState } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import { getCartItems, sendBookingRequest } from "../../utils/contactLogic"; 

function Contact() {
  const [successVisible, setSuccessVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    flatpickr("#travelDate", {
      mode: "range",
      minDate: "today",
      dateFormat: "Y-m-d",
    });
  }, []);

   // Scroll to success message whenever it becomes visible
  useEffect(() => {
    if (successVisible) {
      const successMsg = document.getElementById("successMessage");
      if (successMsg) {
        const yOffset = -120; // adjust for fixed navbar height
        const y = successMsg.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [successVisible]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formElement = e.target;
    const cartItems = getCartItems();

    // Call your EmailJS wrapper
    sendBookingRequest(
      formElement,
      cartItems,
      () => {
        setSuccessVisible(true);
        setErrorMessage("");
        formElement.reset();

      },
      (error) => {
        setSuccessVisible(false);
        setErrorMessage("⚠️ Failed to send booking request. Please try again.");
        console.error("EmailJS error:", error);
      }
    );
  };

  return (
    <div className="contact-container">
        <span>Complete below form and send a booking request. We will contact you soon!</span>
        <div className="booking-form fade-in">
        <h2 className="form-title">Book Your Experience</h2>

        <form id="bookingForm" onSubmit={handleSubmit}>
            <div className="form-row">
            <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input type="text" id="firstName" name="firstName" required />
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input type="text" id="lastName" name="lastName" required />
            </div>
            </div>

            <div className="form-row">
            <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input type="tel" id="phone" name="phone" required />
            </div>
            </div>

            <div className="form-row">
            <div className="form-group">
                <label htmlFor="travelers">Number of Travelers</label>
                <select id="travelers" name="travelers" required>
                <option value="">Select number</option>
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
                <option value="5">5 People</option>
                <option value="6+">6+ People</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="travelDate">Travel Dates *</label>
                <input type="text" id="travelDate" name="travelDate" required />
            </div>
            </div>

            <div className="form-group full-width">
            <label htmlFor="message">Special Requests or Additional Information</label>
            <textarea
                id="message"
                name="message"
                placeholder="Tell us about any special requirements, dietary restrictions, accessibility needs, or specific interests you have..."
            ></textarea>
            </div>

            <button type="submit" className="submit-btn">
            Send Booking Request
            </button>
            {successVisible && (
                <div id="successMessage" className="success-message visible">
                    <h3>🎉 Booking Request Sent Successfully!</h3>
                    <p>
                        Thank you for choosing Village Trails! We've received your booking request
                        and will send you a detailed itinerary and payment instructions via email
                        within 2-4 hours.
                    </p>
                </div>
            )}

            {errorMessage && (
            <div className="error-message">
                <p>{errorMessage}</p>
            </div>
            )}
        </form>
        </div>
    </div>
  );
}

export default Contact;

