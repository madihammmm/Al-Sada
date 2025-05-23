import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="h-[600px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg")',
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl font-bold mb-4">
            Discover Luxury Fragrances
          </h1>
          <p className="text-xl mb-8">
            Experience the finest perfumes from Al Sada
          </p>
          <Link
            to="/store"
            className="bg-white text-black px-8 py-3 rounded-md hover:bg-gray-100 transition duration-300"
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Al Sada Special Offer",
              price: "$199.99",
              image:
                "https://images.pexels.com/photos/965990/pexels-photo-965990.jpeg",
            },
            {
              name: "Royal Collection",
              price: "$299.99",
              image:
                "https://images.pexels.com/photos/965992/pexels-photo-965992.jpeg",
            },
            {
              name: "Premium Edition",
              price: "$249.99",
              image:
                "https://images.pexels.com/photos/965994/pexels-photo-965994.jpeg",
            },
          ].map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.price}</p>
                <Link
                  to="/store"
                  className="block text-center bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">About Al Sada</h2>
              <p className="text-gray-600 mb-6">
                Al Sada Perfume brings you the finest fragrances from around the
                world. Our collection features exclusive scents crafted by
                master perfumers, ensuring a unique and luxurious experience for
                our discerning customers.
              </p>
              <Link
                to="/about"
                className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition duration-300"
              >
                Learn More
              </Link>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
                alt="About Al Sada"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
