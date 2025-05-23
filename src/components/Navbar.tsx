import React from "react";
import { Link } from "react-router-dom";
import { Menu, ShoppingBag, User } from "lucide-react";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { cart, setIsCartOpen } = useCart();

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
           <Link to="/" className="flex items-center space-x-2">
  <img
    src="/images/logo.jpg" // Replace with your logo path
    alt="Al Sada Logo"
    className="h-16 w-32 sm:h-15"
  />
  
</Link>

          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link to="/store" className="hover:text-gray-300">
              Store
            </Link>
            <Link to="/about" className="hover:text-gray-300">
              About
            </Link>
            <Link to="/contact" className="hover:text-gray-300">
              Contact
            </Link>
            <Link to="/login" className="hover:text-gray-300">
              <User className="w-5 h-5" />
            </Link>
            <button
              onClick={() => setIsCartOpen(true)}
              className="hover:text-gray-300 relative"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsCartOpen(true)}
              className="hover:text-gray-300 relative"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-gray-300 hover:bg-gray-700 focus:outline-none"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="block px-3 py-2 hover:bg-gray-700 rounded-md"
              >
                Home
              </Link>
              <Link
                to="/store"
                className="block px-3 py-2 hover:bg-gray-700 rounded-md"
              >
                Store
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 hover:bg-gray-700 rounded-md"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 hover:bg-gray-700 rounded-md"
              >
                Contact
              </Link>
              <Link
                to="/login"
                className="block px-3 py-2 hover:bg-gray-700 rounded-md"
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
