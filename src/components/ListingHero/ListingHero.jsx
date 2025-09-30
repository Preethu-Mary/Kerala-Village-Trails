import './ListingHero.css';
import Hero from "../../assets/Images/BeyondTourism/hindu.jpg";

function ListingHero({title}) {

    return (
            <section id="listing__hero" className="listing__hero">
                <div className="listing__hero__container">
                    <h2 className="listing__hero__title">{title}</h2>
                    
                    <div className="listing__hero__description">
                        <div className="listing__hero__description-text">
                            <h4>Be More than A Tourist, Be a Guest In Our Timeless Tradition</h4>
                            <p> Village Trials offers you an authentic glimpse into the heart of Kerala's traditional village life. Step away from the tourist trails and immerse yourself in the genuine culture, customs, and natural beauty that have remained unchanged for centuries.</p>
                            <br/>
                            
                            <p>Join us on this incredible journey where every village has a story, every tradition holds wisdom, and every experience creates lasting memories.</p>
                        </div>
                        
                        <div className="listing__hero__image">
                            <img src={Hero} alt="Kerala Village Life"/>
                        </div>
                    </div>

                    <div className="listing__stats-grid">
                        <div className="listing__stats-card">
                            <span className="listing__stats-number">50+</span>
                            <div className="listing__stats-label">Village Experiences</div>
                        </div>
                        <div className="listing__stats-card">
                            <span className="listing__stats-number">25+</span>
                            <div className="listing__stats-label">Local Communities</div>
                        </div>
                        <div className="listing__stats-card">
                            <span className="listing__stats-number">10</span>
                            <div className="listing__stats-label">Years Experience</div>
                        </div>
                    </div>
                </div>
            </section>

    );
}

export default ListingHero