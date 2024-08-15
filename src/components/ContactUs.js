import React from 'react';

const ContactUs = () => {
  return (
    <section id="contact" className="py-20 container-service">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Get in Touch</h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Name</label>
                <input type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Message</label>
                <textarea className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" rows="4"></textarea>
              </div>
              <button type="submit" className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600 transition">Send Message</button>
            </form>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Contact Information</h3>
            <p className="text-gray-600 mb-4">Feel free to reach out to us with any questions or concerns. We are here to help!</p>
            <p className="text-gray-600"><strong>Phone:</strong> +6285765007174</p>
            <p className="text-gray-600"><strong>Email:</strong> renhotles@gmail.com</p>
            <p className="text-gray-600"><strong>Address:</strong> medan Hotel Street, City, Country</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
