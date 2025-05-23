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
            'url("/images/bg.jpg")',
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
              name: "Al Sada grey",
              price: "18 ﷼",
              image:
                "/images/1.jpg",
            },
             {
              name: "Al Sada Black",
              price: "19 ﷼ ",
              image:
                "/images/2.jpg",
            },
             {
              name: "Al Sada Red",
              price: "16 ﷼",
              image:
                "/images/3.jpg",
            },
            {
              name: "Al sada white",
              price: "18 ﷼",
              image:
                "/images/4.jpg",
            },
            {
              name: "Premium Bundle",
              price: "36.400 ﷼",
              image:
                "/images/5.jpg",
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
               Echo Perfumes is an Omani brand specialized in the manufacture and sale of luxury perfumes, established with a vision that combines originality and modernity, to provide distinguished fragrant experiences that suit the high Arab taste. We work with passion to create unique formulas of the finest essential oils and carefully selected natural materials, to create fragrances that express the personality, and leave an unforgettable trace.
               At Echo Perfumes, we believe that perfume is not just a smell, but an identity and a story that is told. Therefore, we are keen to provide perfumes that express high taste and excellence, whether in our luxury packaging or in the quality of their long-lasting ingredients
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
                src="/images/bg.jpg"
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
