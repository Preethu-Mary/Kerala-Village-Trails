import "./Modal.css";
import { closeModal, addToCartLogic, viewFullDetails } from "../../utils/modalLogic";
import { useNavigate } from "react-router-dom";

function Modal() {
    const navigate = useNavigate();

    const handleAddToCart = () => {
        addToCartLogic(navigate);
    };
  return (
    <div id="activityModal" className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <div className="modal-slideshow">
            <div className="slideshow-container" id="modalSlideshowContainer">
              {/* Slides will be inserted dynamically */}
            </div>
          </div>

          <button className="modal-close" onClick={closeModal}>
            &times;
          </button>

          <div className="modal-overlay">
            <h2 id="modalTitle" className="modal-title"></h2>
            <p id="modalSubtitle" className="modal-subtitle"></p>
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-highlights">
            <h4>Experience Highlights</h4>
            <ul id="modalHighlights" className="modal-highlights-list"></ul>
          </div>

          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch Video on YouTube
          </a>

          <div className="modal-actions">
            <button className="modal-book-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="modal-details-btn" onClick={viewFullDetails}>
              USD 30
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
