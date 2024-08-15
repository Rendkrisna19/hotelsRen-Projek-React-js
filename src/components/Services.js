import React from 'react';

const Services = () => {
  return (
    <section id="services" className="py-20 container-service">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Hotels Services</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium text-gray-700 mb-4">Spa & Wellness</h3>
            <p className="text-gray-600">Relax and rejuvenate with our world-class spa services.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium text-gray-700 mb-4">Fine Dining</h3>
            <p className="text-gray-600">Enjoy exquisite dishes prepared by our top chefs.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium text-gray-700 mb-4">Conference Rooms</h3>
            <p className="text-gray-600">State-of-the-art facilities for your business meetings.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
