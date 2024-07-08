import React from 'react'
import itemImage1 from '../assets/item1.webp';
import itemImage2 from '../assets/item2.webp';
import itemImage3 from '../assets/item3.webp';
import itemImage4 from '../assets/item4.webp';
import itemImage5 from '../assets/item5.webp';
import itemImage6 from '../assets/item6.webp';

const artworks = [
  { image: itemImage1, title: 'Awelewa', artist: 'Funmilayo Todimu Tejumola', price: '#45,000 - #135,000'},
  { image: itemImage2, title: 'Green Tree', artist: 'Elizz Hezibah', price: '#49,000 - #135,000'}, //as him be chill mentor
  { image: itemImage3, title: 'Super Power', artist: 'Emmanuel Akibah', price: '#45,000 - #135,000'}, //Him dey para scatter
  { image: itemImage4, title: 'Blossom', artist: 'Emmanuel Akibahl', price: '#45,000 - #135,000'},
  { image: itemImage5, title: 'Black Woman', artist: 'Emmanuel Akibah', price: '#45,000 - #135,000'},
  { image: itemImage6, title: 'Sunrise', artist: 'Emmanuel Akibah', price: '#45,000 - #135,000'}, //chill designer
];

const Homecart = () => {
  return (
    <div>
        <section className="py-12 text-center overflow-hidden mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Discover New Arts</h2>
            <div className="flex flex-wrap justify-center mb-5">
                <div className="grid md:grid-cols-2 grid-col">
                    {artworks.map((art, index) => (
                        <div key={index} className="flex flex-col items-center w-90 p-4 m-4 bg-white shadow-md rounded">
                            <img src={art.image} alt={art.title} className="mb-4 rounded" />
                            <h3 className="text-4xl font-bold mb-2">{art.title}</h3>
                            <p>{art.artist}</p>
                            <p>{art.price}</p>
                        </div>
                    ))}
                </div>
            </div>
                <a href="#" className="mt-1 px-6 py-5 bg-black text-white hover:bg-white hover:text-black hover:border-2 hover:border-black  transition duration-500 ease-in-out">View All</a>
        </section>
    </div>
  )
}

export default Homecart
