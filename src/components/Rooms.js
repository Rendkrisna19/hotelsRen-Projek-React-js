import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Import gambar-gambar
import room1 from '../assets/Deluxe-River-View-Twin-Room-1600x900-new.jpg';
import room2 from '../assets/HBJ-Superior-Room-01.jpg';
import room3 from '../assets/jenis-jenis-kamar-hotel.jpg';

const Rooms = () => {
  return (
    <section id="rooms" className="py-20 container-service">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Rooms</h2>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={5000}
        >
          <div>
            <img src={room1} alt="Deluxe Room" />
            <div className="legend">
              <h3 className="text-xl font-bold">Double Room</h3>
              <p className="text-sm">Experience comfort with our Deluxe Room, featuring a king-size bed, en-suite bathroom, and city views.</p>
            </div>
          </div>
          <div>
            <img src={room2} alt="Suite Room" />
            <div className="legend">
              <h3 className="text-xl font-bold">Suite Room</h3>
              <p className="text-sm">Our Suite Room offers a luxurious stay with a spacious living area and panoramic views.</p>
            </div>
          </div>
          <div>
            <img src={room3} alt="Family Room" />
            <div className="legend">
              <h3 className="text-xl font-bold">Family Room</h3>
              <p className="text-sm">Perfect for families, this room comes with two queen-size beds, a lounge area, and kid-friendly amenities.</p>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default Rooms;
