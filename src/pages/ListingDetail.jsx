import ListingHero from "../components/ListingHero/ListingHero"
import ListingSubItems from "../components/ListingSubItems/ListingSubItems";
import { useParams } from "react-router-dom";
import { listingDetails } from "../data/ListingSubItemsData";


function ListingDetail() {
    const { id } = useParams(); // comes from /listing/:id
    const details = listingDetails[id];

    if (!details) {
        return <div>Listing not found</div>;
    }

    return (
        <>
        <ListingHero title={details.title}/>
        <ListingSubItems items={details.subItems}/>
        </>
        
    )
}

export default ListingDetail