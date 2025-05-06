import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Banner from './components/Banner.jsx';
import Footer from './components/Footer.jsx';
import Farmitems from './Pages/Farmitems.jsx';
import bg1 from './assets/bg.webp';
import bg2 from './assets/bg2.webp';
import bg3 from './assets/bg3.webp';
import LoginPage from './Pages/LoginPage.jsx'
import SignupPage from './Pages/SignupPage'
import Dashboard from './Pages/Dashboard.jsx';
import Cart from './Pages/Cart';



const App = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // State for the current image index
  const images = [bg1, bg2, bg3]; 
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Cycle through images
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  // Navigate to the Cart page
  const goToCart = () => {
    navigate('/cart');
  };

  return (
    <>
      
      <Routes>
       <Route path="/" element={<div
        className={`bg-cover bg-center h-[90vh]`}
        style={{
          backgroundImage: `linear-gradient(rgba(51,51,51,0.7),rgba(0,0,0,0.5)), url(${images[currentImageIndex]})`,
        }}
      >
        <Navbar />
        <Banner />
      </div>} />
        <Route path="/farmitems" element={<Farmitems />} /> {/* Add route for Farmitems */}
        <Route path="/cart" element={<Cart />} /> {/* Define the Cart route */}
        <Route path="/login" element={<LoginPage />} /> {/* Login route */}
        <Route path="/signup" element={<SignupPage />} /> {/* Signup route */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;