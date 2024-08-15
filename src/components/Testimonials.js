import React from 'react';
import { FaStar } from 'react-icons/fa';
import customer1 from '../assets/testimoni3.jpg';
import customer2 from '../assets/testimoni2.png';
import customer3 from '../assets/testimoni1.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Fizi Gerot',
      rating: 5,
      review: 'Amazing experience! The staff was very friendly and the rooms were extremely comfortable.',
      image: customer1,
    },
    {
      name: 'Mei Mei gerot',
      rating: 4,
      review: 'The location is perfect, and the service was excellent. Highly recommend!',
      image: customer2,
    },
    {
      name: 'Fizi ninggi',
      rating: 5,
      review: 'A truly luxurious stay. Everything was top-notch from start to finish.',
      image: customer3,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">{testimonial.name}</h3>
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-600">{testimonial.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
