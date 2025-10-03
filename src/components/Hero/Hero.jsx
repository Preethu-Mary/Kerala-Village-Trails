import './Hero.css'

function Hero() {

const scrollToActivities = () => {
  const el = document.getElementById('activities');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, null, "#activities");
  }
};



  return (
    <section id="hero" className="hero">
      <div className="hero__image">
        <div className="hero__text-overlay">
          <h1 className='hero__text'>Discover your home away from home.</h1>
          <br /><br />
          <button onClick={scrollToActivities} className="hero__button">
            View Listings
          </button>
        </div>
      </div>
        <br />

        <div className="hero__description">
          Come, join us in exploring both our roots and routes. Experience a warm, homely stay with our family and friends. Travel through our village, learn its traditions, and immerse yourself in the essence of our heritage. Let this getaway become a story you’ll cherish and carry with you into tomorrow.
        </div>
      
    </section>
  );
}

export default Hero;
