import './ListingSubItems.css';
import ListingSubItemCard from '../ListingSubItemCard/ListingSubItemCard';

function ListingSubItems({ items }) {
    return(
        <section id="ListingSubItems" className="ListingSubItems">
            <div className="container">
                <h2 className="ListingSubItems-title">Our Village Experiences</h2>
                
                <div className="ListingSubItems-grid">
                    {items.map((item) => (
                        <ListingSubItemCard
                        key={item.id}
                        title={item.title}
                        image={item.img}
                        description={item.description}
                        price={item.price}
                        modalId={item.modalId}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ListingSubItems