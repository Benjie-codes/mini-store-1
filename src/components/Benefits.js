import React from 'react';
import { FaAward } from 'react-icons/fa';
import heroImg from '../assets/Hero2.jpg'

const Benefits = () => {
  return (
    <div>
        <section className="py-12 bg-gray-50 text-center overflow-hidden">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Why you'll love Art World</h2>
            <div className="flex flex-wrap justify-center space-y-8 md:space-y-0 md:space-x-8 pb-10">
                <div className="flex flex-col items-center w-64 p-4 bg-white shadow-md rounded">
                    <FaAward className="text-4xl mb-4" />
                    <h3 className="font-bold mb-2">Cultural diversity</h3>
                    <p>African, Black & other underrepresented artists</p>
                </div>
                <div className="flex flex-col items-center w-64 p-4 bg-white shadow-md rounded">
                    <FaAward className="text-4xl mb-4" />
                    <h3 className="font-bold mb-2">Affordable</h3>
                    <p>High-quality artworks Get your money's worth!</p>
                </div>
                <div className="flex flex-col items-center w-64 p-4 bg-white shadow-md rounded">
                    <FaAward className="text-4xl mb-4" />
                    <h3 className="font-bold mb-2">Exciting</h3>
                    <p>Art & tech experiences Art with Augmented Reality</p>
                    </div>
                <div className="flex flex-col items-center w-64 p-4 bg-white shadow-md rounded">
                    <FaAward className="text-4xl mb-4" />
                    <h3 className="font-bold mb-2">5% of profit</h3>
                    <p>Supports child artists Sponsor growing talents</p>
                </div>
            </div>

            <div className="hero bg-cover bg-center h-screen relative" style={{ backgroundImage: `url(${heroImg})` }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50 p-4">
                <h1 className="text-4xl md:text-6xl md:mx-20 md:px-20 font-bold text-white mt-4">Enjoy wall arts by culturally diverse artists.</h1>
                {/* <p className="text-white mt-4 max-w-lg mx-auto">Bring joy and creativity into your space with artworks from new and emerging artists such as Jexways, Ghalavanqche and more!</p> */}
                <a href="/404" className="mt-8 px-6 py-3 bg-white text-black hover:bg-black hover:text-white transition duration-500 ease-in-out">BUY ART WORKS</a>
            </div>
            </div>
        </section>
    </div>
  )
}

export default Benefits
