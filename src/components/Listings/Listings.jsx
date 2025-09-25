import './Listings.css'
import culturalArts from '../../assets/Images/Listing_Images/CulturalArts.jpg';
import BeyondTourism from '../../assets/Images/Listing_Images/BeyondTourism.webp';
import WildLife from '../../assets/Images/Listing_Images/WildLife.jpg';
import Handicrafts from '../../assets/Images/Listing_Images/Handicrafts.jpg';
import AuthenticKeralaFlavours from '../../assets/Images/Listing_Images/AuthenticKeralaFlavours.jpg';
import HandsInTheSoil from '../../assets/Images/Listing_Images/HandsInTheSoil.jpeg';
import ListingItem from '../ListingItem/ListingItem';

function Listings() {
    const listingData = [
        {
            title: "Cultural Arts & Festivals",
            description: "Experience the rich heritage of traditional arts that have been passed down through generations.",
            img: culturalArts,
            link: "cultural.html"
        },
        {
            title: "Beyond Tourism",
            description: "Experience village life with our family and friends.",
            img: BeyondTourism,
            link: "./BeyondTourism/BeyondTourism.html"
        },
        {
            title: "Wildlife Safaris",
            description: "Spot elephants, deers, and exotic birds in natural habitats",
            img: WildLife
        },
        {
            title: "Handicrafts",
            description: "Join us to learn a craft and take home a skill.",
            img: Handicrafts
        },
        {
            title: "Authentic Kerala Flavours",
            description: "A taste of our village where every bite tells a story of tradition",
            img: AuthenticKeralaFlavours
        },
        {
            title: "Hands in the Soil",
            description: "Feel the magic of cultivating crops in a traditional village setting.",
            img: HandsInTheSoil,
            link: "./HandsInTheSoil.html"
        }
    ];

    return (
        <section id="activities" className="activities">
            <h2 className="activities-title">Traditions We Share</h2>
            <div className="activities-grid">

                {listingData.map((item,index)=>(
                     <ListingItem
                        key={index}
                        title={item.title}
                        description={item.description}
                        img={item.img}
                        link={item.link}
                    />
                ))}
            </div>
        </section>
    );
}

export default Listings