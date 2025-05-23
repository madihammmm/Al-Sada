import React from "react";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          About Al Sada Perfume
        </h1>

        <div className="mb-12">
          <img
            src="https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
            alt="Al Sada Perfume Store"
            className="w-full h-[400px] object-cover rounded-lg shadow-md mb-8"
          />

          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              Welcome to Al Sada Perfume, where luxury meets tradition. For over
              two decades, we have been crafting exceptional fragrances that
              capture the essence of elegance and sophistication.
            </p>

            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="mb-6">
              Founded with a passion for perfumery, Al Sada has grown from a
              small boutique into a renowned name in the fragrance industry. Our
              commitment to quality and innovation has earned us the trust of
              discerning customers worldwide.
            </p>

            <h2 className="text-2xl font-bold mb-4">Our Philosophy</h2>
            <p className="mb-6">
              We believe that a fragrance is more than just a scent – it's an
              expression of personality, a memory in the making, and a statement
              of sophistication. Each Al Sada perfume is crafted with meticulous
              attention to detail, using only the finest ingredients sourced
              from around the world.
            </p>

            <h2 className="text-2xl font-bold mb-4">Quality Commitment</h2>
            <p className="mb-6">
              Every bottle of Al Sada perfume undergoes rigorous quality control
              to ensure that it meets our exacting standards. We work with
              master perfumers who share our passion for excellence and
              innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
