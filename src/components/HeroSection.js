import React from 'react';
const HeroSection = () => {
  return (
    <div className="bg-cover bg-center h-screen gambar-utama">
      <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center">
        <h1 className="text-white text-center text-5xl md:text-7xl  mb-4">Welcome to HotelRen</h1>
        <p className="text-white text-xl md:text-2xl mb-8 text-center">Your luxury escape in the heart of the city</p>
        <a id='#services' href="#rooms" className="container-service text-black py-3 px-6 rounded-lg text-lg">Explore Rooms</a>
      </div>
    </div>
  );
}

export default HeroSection;
