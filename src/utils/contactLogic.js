import emailjs from "@emailjs/browser";

emailjs.init("pRSfjfgDMuHvNQik7");

// Get cart items from sessionStorage
export const getCartItems = () => {
  const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  return cart.map(item => item.title);
};

// Set minimum date to today
export const setMinDate = (inputId) => {
  const input = document.getElementById(inputId);
  if (input) input.min = new Date().toISOString().split("T")[0];
};

// Send booking request via EmailJS
export const sendBookingRequest = (formElement, cartItems, onSuccess, onError) => {
  const submitBtn = formElement.querySelector(".submit-btn");
  const formData = new FormData(formElement);
  let bookingData = {};

  formData.forEach((value, key) => {
    bookingData[key] = value;
  });

  bookingData.cart = cartItems.join(", ");

  submitBtn.classList.add("loading");
  submitBtn.textContent = "Sending Request...";

  emailjs.send("service_asw514k", "template_51yntpj", bookingData)
    .then((response) => {
      submitBtn.classList.remove("loading");
      submitBtn.textContent = "Send Booking Request";
      onSuccess(response);
    })
    .catch((error) => {
      submitBtn.classList.remove("loading");
      submitBtn.textContent = "Send Booking Request";
      onError(error);
    });
};

