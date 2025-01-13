import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Packages from './components/Packages';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import DailyWash from './pages/DailyWash';
import PremiumWash from './pages/PremiumWash';
import CarSpa from './pages/CarSpa';
import BikeSpa from './pages/BikeSpa';
function HomePage() {
  return (
    <>
      <Hero />
      <Packages />
      <Testimonials />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/daily-wash" element={<DailyWash />} />
          <Route path="/premium-wash" element={<PremiumWash />} />
          <Route path="/car-spa" element={<CarSpa />} />
          <Route path="/bike-spa" element={<BikeSpa />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;