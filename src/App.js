import React from 'react';
import './css/styles.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Rooms from './components/Rooms';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Services />
      <AboutUs />
      <Rooms />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
