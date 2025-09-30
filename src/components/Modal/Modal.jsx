import "./Modal.css";

function Modal() {

    return (
        <div id="activityModal" class="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-slideshow">
                        <div class="slideshow-container" id="modalSlideshowContainer">
                            {/*  //Slides will be inserted dynamically */}
                        </div>
                    
                    </div>

                    <button class="modal-close" onclick="closeModal()">&times;</button>
                    <div class="modal-overlay">
                        <h2 id="modalTitle" class="modal-title"></h2>
                        <p id="modalSubtitle" class="modal-subtitle"></p>
                    </div>
                </div>
                <div class="modal-body">
                
                    
                    <div class="modal-highlights">
                        <h4>Experience Highlights</h4>
                        <ul id="modalHighlights" class="modal-highlights-list"></ul>
                    </div>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
                        Watch Video on YouTube
                        </a>

                    
                    <div class="modal-actions">
                        <button class="modal-book-btn" onclick="addToCart()">Book Now</button>
            
                        <button class="modal-details-btn" onclick="viewFullDetails()">USD 30</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal