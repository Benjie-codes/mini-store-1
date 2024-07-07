import React from 'react';
import logo from '../assets/logo.jpg'; // Ensure you have the logo.png in the src/assets folder
import cartIcon from '../assets/cart-shopping-solid.svg'; // Ensure you have the cart-icon.png in the src/assets folder
import searchIcon from '../assets/search-solid.svg'; // Ensure you have the search-icon.png in the src/assets folder

const Header = () => {
  return (
    <header className="flex flex-wrap items-center justify-between p-4 shadow-md">
      <div className="logo">
        <img src={logo} alt="Art World" className="h-10" />
      </div>
      <nav className="flex-1 hidden md:flex justify-center space-x-8">
        <ul className="flex justify-center space-x-4">
          <li><a href="#" className="text-gray-800 font-bold">Shop</a></li>
          <li><a href="#" className="text-gray-800 font-bold">Artist</a></li>
          <li><a href="#" className="text-gray-800 font-bold">Collection</a></li>
          <li><a href="#" className="text-gray-800 font-bold">Stories</a></li>
          <li><a href="#" className="text-gray-800 font-bold">Sell on Art World</a></li>
        </ul>
      </nav>
      <div className="flex space-x-4 mt-4 md:mt-0">
        <a href="#"><img src={cartIcon} alt="Cart" className="h-6" /></a>
        <a href="#"><img src={searchIcon} alt="Search" className="h-6" /></a>
      </div>
    </header>
  );
};

export default Header;
