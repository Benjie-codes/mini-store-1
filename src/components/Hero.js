import React from "react";
import heroImage from "../assets/Hero.jpg";
import {
  FaPalette,
  FaDollarSign,
  FaStar,
  FaHandsHelping,
} from "react-icons/fa";

const Hero = () => {
  return (
    <div>
      <main className="relative">
        <div
          className="hero bg-cover bg-center h-screen"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50 p-4">
            <p className="text-xl font-bold text-white">NEW</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">
              New Artworks this Season
            </h1>
            <p className="text-white mt-4 max-w-lg mx-auto">
              Bring joy and creativity into your space with artworks from new
              and emerging artists such as Jexways, Ghalavanqche and more!
            </p>
            <a
              href="#"
              className="mt-8 px-6 py-3 bg-black text-white font-bold rounded hover:bg-gray-700"
            >
              Discover New Arts
            </a>
          </div>
        </div>

        <section className="py-12 bg-white text-center">
          <h2 className="text-3xl font-bold mb-8">Why you'll love Art World</h2>
          <div className="flex flex-wrap justify-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="flex flex-col items-center w-64 p-4 bg-white shadow-md rounded">
              <FaPalette className="text-4xl mb-4" />
              <h3 className="font-bold mb-2">Cultural diversity</h3>
              <p>African, Black & other underrepresented artists</p>
            </div>
            <div className="flex flex-col items-center w-64 p-4 bg-white shadow-md rounded">
              <FaDollarSign className="text-4xl mb-4" />
              <h3 className="font-bold mb-2">Affordable</h3>
              <p>High-quality artworks Get your money's worth!</p>
            </div>
            <div className="flex flex-col items-center w-64 p-4 bg-white shadow-md rounded">
              <FaStar className="text-4xl mb-4" />
              <h3 className="font-bold mb-2">Exciting</h3>
              <p>Art & tech experiences Art with Augmented Reality</p>
            </div>
            <div className="flex flex-col items-center w-64 p-4 bg-white shadow-md rounded">
              <FaHandsHelping className="text-4xl mb-4" />
              <h3 className="font-bold mb-2">5% of profit</h3>
              <p>Supports child artists Sponsor growing talents</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Hero;
