import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Banner from './components/Banner.jsx';
import Footer from './components/Footer.jsx';
import Farmitems from './Pages/Farmitems.jsx'; // Import Farmitems component

const App = () => {
  return (
    <>
      <div className="bg-[linear-gradient(rgba(51,51,51,0.7),rgba(0,0,0,0.5)),url('./assets/bg.png')] bg-cover bg-center h-[90vh] ">
        <Navbar />
        <Banner />
      </div>
      <Routes>
         {/* <Route path="/" element={<Banner />} />
        <Route path="/farmitems" element={<Farmitems />} />Add route for Farmitems */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;