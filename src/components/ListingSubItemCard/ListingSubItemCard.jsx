import "./ListingSubItemCard.css"
import { openModal } from "../../utils/modalLogic";


function ListingSubItemCard({ title, image, description, price, modalId}){

    return(
        <div className="listing-card">
            <div className="listing-image">
                <img src={image} alt=" Wedding"/>

            </div>
            <div className="listing-content">
                <h3>{title}</h3>
                <div className="listing-description">
                    <span className="listing-short">{description}</span>
        
                </div>
    
                <div className="listing-actions">
                    <button className="read-more-btn" onClick={(e) => {
                        e.stopPropagation();
                        if (modalId) openModal(modalId); // Your modal logic
                     }}>
                        Read More
                    </button>
                    <div className="price-tag">{price}</div>
                </div>
            </div>
        </div>
    );
}

export default ListingSubItemCard