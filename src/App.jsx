import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home';

import { Routes, Route } from 'react-router-dom';
import ListingDetail from './pages/ListingDetail';
import CartPage from './pages/CartPage';
import ContactPage from './pages/ContactPage';
import PropertyPage from './pages/PropertyPage';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing/:id" element={<ListingDetail />} />
         <Route path="/properties" element={<PropertyPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
