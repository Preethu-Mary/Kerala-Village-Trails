import { useRef , useEffect} from "react";
import Hero from '../components/Hero/Hero'
import Listings from '../components/Listings/Listings'
import Properties from "../components/Properties/Properties";

function Home() {
  const listingsRef = useRef(null);
  const scrollToListings = () => {
    listingsRef.current?.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState(null, null, "#activities"); // optional, updates URL hash
  };

  useEffect(() => {
    if (window.location.hash === "#activities" && !sessionStorage.getItem("reloaded")) {
      sessionStorage.setItem("reloaded", "true"); // prevent infinite reloads
      window.location.reload();
    }
  }, []);

  return (
    <>
        <Hero scrollToListings={scrollToListings} />
        <Properties/>
        <Listings ref={listingsRef} />
    </>
    
  )
}

export default Home
