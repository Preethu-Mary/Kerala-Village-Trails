import { useState, useEffect } from "react";
import './Properties.css';
import house1 from '../../assets/Images/Property_Images/house1.jpg';
import house2 from '../../assets/Images/Property_Images/house2.jpg';
import house3 from '../../assets/Images/Property_Images/house3.jpg';
import house4 from '../../assets/Images/Property_Images/house4.jpg';
import house5 from '../../assets/Images/Property_Images/house5.jpg';
import house6 from '../../assets/Images/Property_Images/house6.jpg';

import ListingItem from '../ListingItem/ListingItem';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { openModal } from "../../utils/modalLogic";
import Modal from "../Modal/Modal";

function Properties() {
  const propertyData = [
    { id: 'house', title: "Kerala house 1", description: "Experience the spiritual heart of Kerala village life.", img: house1 },
    { id: 'wedding', title: "Kerala house 2", description: "Experience the spiritual heart of Kerala village life.", img: house2 },
    { id: 'noolukettu', title: "Kerala house 3", description: "Experience the spiritual heart of Kerala village life.", img: house3 },
    { id: 'baptism', title: "Kerala house 4", description: "Experience the spiritual heart of Kerala village life.", img: house4 },
    { id: 'engagement', title: "Kerala house 5", description: "When families gather to exchange blessings.", img: house5 },
    { id: 'housewarming', title: "Kerala house 6", description: "Celebrate your new home with tradition.", img: house6 }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [showAll, setShowAll] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth <= 768 ? 1 : 3);
      setCurrentIndex(0);
    };
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  // Create infinite loop array by duplicating items
  const getInfiniteItems = () => {
    return [...propertyData, ...propertyData, ...propertyData];
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev + 1);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev - 1);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    // Reset position when reaching cloned sections
    if (currentIndex >= propertyData.length * 2) {
      setCurrentIndex(propertyData.length);
    } else if (currentIndex <= 0) {
      setCurrentIndex(propertyData.length);
    }
  };

  const handleViewMore = () => {
    setShowAll(!showAll);
    setCurrentIndex(propertyData.length); // Reset to middle section
  };

  // Initialize to middle section for seamless loop
  useEffect(() => {
    setCurrentIndex(propertyData.length);
  }, []);

  return (
    <section id="properties" className="properties"><br/><br/>
      <h2 className="activities-title">Our Houses</h2>

      <div className={`property-nav ${showAll ? 'show-all' : ''}`}>
        {!showAll && (
          <button className="arrow-btn left" onClick={handlePrev}>
            <FaArrowLeft />
          </button>
        )}

        <div className="carousel-wrapper">
          <div
            className={`property-grid ${showAll ? 'grid-view' : ''}`}
            style={!showAll ? { 
              transform: `translateX(-${(currentIndex * 100) / itemsPerPage}%)`,
              transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
            } : {}}
            onTransitionEnd={handleTransitionEnd}
          >
            {showAll ? 
              propertyData.map((item) => (
                <div 
                  className="property-card" 
                  key={item.id} 
                  onClick={() => openModal(item.id)}
                >
                  <ListingItem
                    title={item.title}
                    description={item.description}
                    img={item.img}
                  />
                </div>
              ))
              :
              getInfiniteItems().map((item, index) => (
                <div 
                  className="property-card" 
                  key={`${item.id}-${index}`}
                  onClick={() => openModal(item.id)}
                >
                  <ListingItem
                    title={item.title}
                    description={item.description}
                    img={item.img}
                  />
                </div>
              ))
            }
          </div>
        </div>

        {!showAll && (
          <button className="arrow-btn right" onClick={handleNext}>
            <FaArrowRight />
          </button>
        )}
      </div>

      {/* View More/Less Button */}
      <div className="view-more-container">
        <button className="view-more-btn" onClick={handleViewMore}>
          {showAll ? "View Less" : "View More"}
        </button>
      </div>

      <Modal />
      <br/><br/>
    </section>
  );
}

export default Properties;