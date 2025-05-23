import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

          <div className="space-y-6">
            <div className="flex items-start">
              <MapPin className="w-6 h-6 mr-4 text-gray-600" />
              <div>
                <h3 className="font-bold">Whatsapp</h3>
                <p className="text-gray-600">
                  https://wa.me/message/3GJW3OFDRU5SO1
                
                  <br />
              
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="w-6 h-6 mr-4 text-gray-600" />
              <div>
                <h3 className="font-bold">Phone</h3>
                <p className="text-gray-600">  0096896313031</p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="w-6 h-6 mr-4 text-gray-600" />
              <div>
                <h3 className="font-bold">Email</h3>
                <p className="text-gray-600">info@alsada.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
