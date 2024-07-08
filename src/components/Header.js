import React, { useState } from 'react';
import { FaBars, FaTimes, FaShoppingCart, FaSearch } from 'react-icons/fa';
import logo from '../assets/logo.jpg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md overflow-hidden">
      <div className="container mx-auto p-4 flex justify-between items-center">
          <button
            className="text-2xl md:hidden ml-4"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        <div className="flex items-center">
          {!isOpen && (
            <img src={logo} alt="Art World" className="h-8 md:h-12" />
          )}
        </div>
        <nav className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'} w-full md:w-auto`}>
          <ul className="flex flex-col md:flex-row md:space-x-6 md:items-center w-full md:w-auto">
            <li className="mt-2 md:mt-0">
              <a href="#" className="block py-2 md:py-0 text-center md:text-left hover:border-b-2 border-black">Shop</a>
            </li>
            <li className="mt-2 md:mt-0">
              <a href="#" className="block py-2 md:py-0 text-center md:text-left hover:border-b-2 border-black">Artist</a>
            </li>
            <li className="mt-2 md:mt-0">
              <a href="#" className="block py-2 md:py-0 text-center md:text-left hover:border-b-2 border-black">Collection</a>
            </li>
            <li className="mt-2 md:mt-0">
              <a href="#" className="block py-2 md:py-0 text-center md:text-left hover:border-b-2 border-black">Stories</a>
            </li>
            <li className="mt-2 md:mt-0">
              <a href="#" className="block py-2 md:py-0 text-center md:text-left hover:border-b-2 border-black">Sell on Art World</a>
            </li>
          </ul>
        </nav>
        {!isOpen && (
          <div className="flex items-center space-x-4">
            <FaSearch className="text-xl cursor-pointer" />
            <FaShoppingCart className="text-xl cursor-pointer" />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
