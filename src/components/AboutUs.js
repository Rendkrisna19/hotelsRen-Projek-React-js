import React from 'react';
import { FaHotel, FaConciergeBell, FaSwimmingPool } from 'react-icons/fa';
import { MdLocalHotel, MdOutlineHotelClass } from "react-icons/md";
import { TbHotelService } from "react-icons/tb";

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <FaHotel className="text-yellow-500 text-6xl mb-4" />
            <h3 className="text-xl font-medium text-gray-700 mb-2">Luxury Hotel</h3>
            <p className="text-gray-600">Experience the ultimate in luxury and comfort with our world-class facilities.</p>
          </div>
          <div className="flex flex-col items-center">
            <FaConciergeBell className="text-yellow-500 text-6xl mb-4" />
            <h3 className="text-xl font-medium text-gray-700 mb-2">24/7 Service</h3>
            <p className="text-gray-600">Our staff is here to assist you around the clock with exceptional service.</p>
          </div>
          <div className="flex flex-col items-center">
            <FaSwimmingPool className="text-yellow-500 text-6xl mb-4" />
            <h3 className="text-xl font-medium text-gray-700 mb-2">Exclusive Pool</h3>
            <p className="text-gray-600">Enjoy a relaxing time at our exclusive pool with stunning views.</p>
          </div>
          <div className="flex flex-col items-center">
          <MdLocalHotel  className="text-yellow-500 text-6xl mb-4" />
            <h3 className="text-xl font-medium text-gray-700 mb-2">Exclusive Badroom</h3>
            <p className="text-gray-600">Enjoy a relaxing time at our exclusive pool with stunning views.</p>
          </div>
          <div className="flex flex-col items-center">
          <MdOutlineHotelClass className="text-yellow-500 text-6xl mb-4" />
            <h3 className="text-xl font-medium text-gray-700 mb-2">Five stars</h3>
            <p className="text-gray-600">Enjoy a relaxing time at our exclusive pool with stunning views.</p>
          </div>
          <div className="flex flex-col items-center">
          <TbHotelService className="text-yellow-500 text-6xl mb-4" />
            <h3 className="text-xl font-medium text-gray-700 mb-2">Services Certifications</h3>
            <p className="text-gray-600">Enjoy a relaxing time at our exclusive pool with stunning views.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
