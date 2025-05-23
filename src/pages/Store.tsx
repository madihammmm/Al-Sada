import React, { useState } from "react";
import { Share2 } from "lucide-react";
import { useCart } from "../context/CartContext";
import ShareModal from "../components/ShareModal";

const Store = () => {
  const { addToCart } = useCart();
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [selectedProductUrl, setSelectedProductUrl] = useState("");

  const products = [
    {
      id: 1,
      name: "Al Sada grey",
      price: "18 ﷼",
      description: "This perfume is the embodiment of timeless elegance. It begins its journey with notes of lemon verbena and caraway",
      image: "/images/1.jpg",
    },
    {
      id: 2,
      name: "Al Sada black ",
      price: "19  ﷼",
      description: "This fragrance begins with a delightful experience of refreshing orange blossom and delicate musk.",
      image: "/images/2.jpg",
    },
    {
      id: 3,
      name: "Al Sada red",
      price:"16  ﷼ ",
      description: " Over time, the scents of classic oud and amber intertwine, revealing an unparalleled depth of rare opulence.",
      image: "/images/3.jpg",
    },
     {
      id: 4,
      name: "Al Sada white",
      price: "16  ﷼  ",
      description: "A fragrance designed for those who appreciate distinction and extravagance, representing every moment of absolute luxury",
      image: "/images/4.jpg",
    },
     {
      id: 5,
      name: "Premium Edition",
      price: "36.400 ﷼",
      description: " luxurious Damask rose meets enchanting jasmine, revealing the charm of flowers in their purest hues, giving you a sense of purity.",
      image: "/images/5.jpg",
    },
  ];

  const handleShare = (productId: number) => {
    const productUrl = `${window.location.origin}/store/product/${productId}`;
    setSelectedProductUrl(productUrl);
    setShareModalOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Our Collection</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-2xl font-bold mb-4">{product.price}</p>
              <div className="flex space-x-2">
                <button
                  onClick={() => addToCart({ ...product, quantity: 1 })}
                  className="flex-1 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-300"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => handleShare(product.id)}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition duration-300"
                >
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ShareModal
        isOpen={shareModalOpen}
        onClose={() => setShareModalOpen(false)}
        productUrl={selectedProductUrl}
      />
    </div>
  );
};

export default Store;
