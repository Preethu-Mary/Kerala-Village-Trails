import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListingDetail from './pages/ListingDetail';
import CartPage from './pages/CartPage';

function App() {

  return (

    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing/:id" element={<ListingDetail />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer/>
    </Router>
    
  )
}

export default App
