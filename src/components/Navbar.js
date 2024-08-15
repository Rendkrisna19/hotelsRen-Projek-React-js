import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  const handleScroll = (e, target) => {
    e.preventDefault();
    const element = document.getElementById(target);
    element.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false); // Close the menu after click
  };

  return (
    <nav className={`fixed w-full z-50 transition duration-300 ease-in-out ${scroll ? 'baground-nav shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex space-x-4">
            <a href="/" className={`${scroll ? 'text-gray-500 ' : 'text-white'} text-2xl `}>
              RenHotels
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#services" className={`${scroll ? 'text-gray-800' : 'text-white'} hover:text-gray-500`} onClick={(e) => handleScroll(e, 'services')}>Services</a>
            <a href="#about" className={`${scroll ? 'text-gray-800' : 'text-white'} hover:text-gray-500`} onClick={(e) => handleScroll(e, 'about')}>About Us</a>
            <a href="#rooms" className={`${scroll ? 'text-gray-800' : 'text-white'} hover:text-gray-500`} onClick={(e) => handleScroll(e, 'rooms')}>Rooms</a>
            <a href="#testimonials" className={`${scroll ? 'text-gray-800' : 'text-white'} hover:text-gray-500`} onClick={(e) => handleScroll(e, 'testimonials')}>Testimonials</a>
            <a href="#contact" className={`${scroll ? 'text-gray-800' : 'text-white'} hover:text-gray-500`} onClick={(e) => handleScroll(e, 'contact')}>Contact Us</a>
            
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-gray-300 focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden baground-nav shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" className="block text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium" onClick={(e) => handleScroll(e, 'services')}>Services</a>
            <a href="#about" className="block text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium" onClick={(e) => handleScroll(e, 'about')}>About Us</a>
            <a href="#rooms" className="block text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium" onClick={(e) => handleScroll(e, 'rooms')}>Rooms</a>
            <a href="#testimonials" className="block text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium" onClick={(e) => handleScroll(e, 'testimonials')}>Testimonials</a>
            <a href="#contact" className="block text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium" onClick={(e) => handleScroll(e, 'contact')}>Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
