import React from 'react';
import { IoStar } from "react-icons/io5";
import profileImage from '../assets/profile.jpg';

function Carousel() {
  return (
    <div className="flex flex-col justify-center items-center bg-white mb-10">
      <div className="flex justify-center items-center space-x-2 mb-4">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <img
            key={index}
            src={profileImage}
            alt="Profile"
            className={`rounded-full ${index === 2 ? 'w-28 h-24' : 'w-16 h-16'} ${index === 2 ? 'transform scale-110' : ''}`}
          />
        ))}
      </div>
      <div className="flex justify-center items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <IoStar key={i} className="text-black w-8 h-8" />
        ))}
      </div>
      <p className="text-center text-2xs text-black max-w-xl mb-2 px-20">
        The artworks represent everything that we are, it brings out our brand identity.
      </p>
      <p className="text-center text-gray-500">• Mark Spenser</p>
    </div>
  );
}

export default Carousel;
