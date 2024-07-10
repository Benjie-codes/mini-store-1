import React from "react";
import heroImage from "../assets/Hero.jpg";

const Hero = () => {
  return (
    <div>
     <main className="relative overflow-hidden">
        <div className="hero bg-cover bg-center h-screen" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50 p-4">
            <p className="text-xl font-bold text-white">NEW</p>
            <h1 className="text-6xl md:text-5xl font-bold text-white mt-4">New Artworks this Season</h1>
            <p className="text-white mt-4 max-w-lg mx-auto">Bring joy and creativity into your space with artworks from new and emerging artists such as Jexways, Ghalavanqche and more!</p>
            <a href="/404" className="mt-8 px-6 py-3 bg-black text-white text-xl font-bold hover:bg-white hover:text-black transition duration-500 ease-in-out">Discover New Arts</a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
