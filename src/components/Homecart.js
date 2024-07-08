import React from 'react'
import itemImage1 from '../assets/item1.jpg';
import itemImage2 from '../assets/item2.jpeg';
import itemImage3 from '../assets/item3.webp';
import itemImage4 from '../assets/item4.webp';
import itemImage5 from '../assets/item5.webp';
import itemImage6 from '../assets/item6.webp';

const artworks = [
  { image: itemImage1, title: 'Gold Paint', artist: 'Gogo Mbathine', price: '#45,000 - #135,000'},
  { image: itemImage2, title: 'Twilight Tree', artist: 'Codedlibra', price: '#49,000 - #135,000'}, //as him be chill mentor
  { image: itemImage3, title: 'Modern Abstract', artist: 'Abdul.tsx', price: '#45,000 - #135,000'}, //Him dey para scatter
  { image: itemImage4, title: 'Colorful Emotions', artist: 'Sophia Samuel', price: '#45,000 - #135,000'},
  { image: itemImage5, title: 'Urban Jungle', artist: 'Benjhie', price: '#45,000 - #135,000'},
  { image: itemImage6, title: 'Night Lights', artist: 'Ajayi', price: '#45,000 - #135,000'}, //chill designer
];

const Homecart = () => {
  return (
    <div>
        <section className="py-12 text-center overflow-hidden">
            <h2 className="text-3xl font-bold mb-8">Discover New Arts</h2>
            <div className="flex flex-wrap justify-center mb-5">
                <div className="grid md:grid-cols-3 sm:grid-col">
                    {artworks.map((art, index) => (
                        <div key={index} className="flex flex-col items-center w-64 p-4 m-4 bg-white shadow-md rounded">
                            <img src={art.image} alt={art.title} className="mb-4 rounded" />
                            <h3 className="font-bold mb-2">{art.title}</h3>
                            <p>{art.artist}</p>
                            <p>{art.price}</p>
                        </div>
                    ))}
                </div>
            </div>
                <a href="#" className="mt-1 px-6 py-5 bg-black text-white rounded hover:bg-white hover:text-black hover:border-2 hover:border-black  transition duration-500 ease-in-out">View All</a>
        </section>
    </div>
  )
}

export default Homecart
