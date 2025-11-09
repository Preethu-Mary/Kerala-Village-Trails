import './Listings.css'
import culturalArts from '../../assets/Images/Listing_Images/CulturalArts.jpg';
import BeyondTourism from '../../assets/Images/Listing_Images/BeyondTourism.webp';
import WildLife from '../../assets/Images/Listing_Images/WildLife.jpg';
import Handicrafts from '../../assets/Images/Listing_Images/Hcrafts.jpg';
import AuthenticKeralaFlavours from '../../assets/Images/Listing_Images/AuthenticKeralaFlavours.jpg';
import HandsInTheSoil from '../../assets/Images/Listing_Images/HandsInTheSoil.jpeg';
import ListingItem from '../ListingItem/ListingItem';
import { Link } from 'react-router-dom';
import { forwardRef } from "react";

const Listings = forwardRef((props, ref) => {
    const listingData = [
        {   
            id:1,
            title: "Cultural Arts & Festivals",
            description: "Experience the rich heritage of traditional arts that have been passed down through generations.",
            img: culturalArts,
        },
        {
            id:2,
            title: "Beyond Tourism",
            description: "Experience village life with our family and friends.",
            img: BeyondTourism,
        },
        {
            id:3,
            title: "Wildlife Safaris",
            description: "Spot elephants, deers, and exotic birds in natural habitats",
            img: WildLife
        },
        {
            id:4,
            title: "Handicrafts",
            description: "Join us to learn a craft and take home a skill.",
            img: Handicrafts
        },
        {
            id:5,
            title: "Authentic Kerala Flavours",
            description: "A taste of our village where every bite tells a story of tradition",
            img: AuthenticKeralaFlavours
        },
        {
            id:6,
            title: "Hands in the Soil",
            description: "Feel the magic of cultivating crops in a traditional village setting.",
            img: HandsInTheSoil,
        }
    ];

    return (
        <section ref={ref} id="activities" className="activities">
            <h2 className="activities-title">Traditions We Share</h2>
            <div className="activities-grid">

                {listingData.map((item,index)=>(
                    <Link key={item.id} to={`/listing/${item.id}`} className='activity-link'>
                        <ListingItem
                            key={index}
                            title={item.title}
                            description={item.description}
                            img={item.img}
                            link={item.link}
                        />
                    </Link>
                ))}
            </div>
        </section>
    );
});

export default Listings