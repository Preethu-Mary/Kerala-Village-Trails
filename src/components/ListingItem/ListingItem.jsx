import './ListingItem.css'

function ListingItem({title, description, img}) {

    return (
        <div className="activity-card">
            <img src={img} alt={title} />
            <div className="activity-content">
                <h3 className="activity-title">{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default ListingItem