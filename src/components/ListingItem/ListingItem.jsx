import './ListingItem.css'
import BeyondTourism from '../../assets/Images/Listing_Images/BeyondTourism.webp';

function ListingItem({title, description, img, link}) {

    return (
        <div className="activity-card">
            {link ? (
                <a href={link}>
                <img src={img} alt={title} />
                </a>
            ) : (
                <img src={img} alt={title} />
            )}
            <div className="activity-content">
                <h3 className="activity-title">{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default ListingItem