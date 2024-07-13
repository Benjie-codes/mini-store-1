import React, { useState } from 'react';
import { FaBars, FaTimes, FaShoppingCart, FaSearch } from 'react-icons/fa';
import logo from '../assets/logo.jpg';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Products from '../pages/Products';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };


    const [inputText, setInputText] = useState('');
    
    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const clearSearch = () => {
        setInputText('')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputText.trim() === '') {
            toast.warn("Enter a keyword!!", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
        } else {
            toast.success("Oops!, Nothing to search...", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
          });
        }
    };

    return (
        <div>
            <header className="bg-white overflow-hidden">
                <div className="container mx-auto p-8 md:p-6 flex justify-between items-center">
                    <button
                    className="text-2xl md:hidden"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    >
                    {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                <div className="flex items-center">
                    {!isOpen && (
                    <img src={logo} alt="Art World" className="h-13 md:h-12" />
                    )}
                </div>
                <nav className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'} w-full md:w-auto`}>
                    <ul className="flex flex-col md:flex-row md:space-x-6 md:items-center w-full md:w-auto">
                    <li className="mt-2 md:mt-0">
                        <a href="/" className="block py-2 md:py-0 text-center md:text-left hover:border-b-2 border-black">Home</a>
                    </li>
                    <li className="mt-2 md:mt-0">
                        <a href="/404" className="block py-2 md:py-0 text-center md:text-left hover:border-b-2 border-black">Stories</a>
                    </li>
                    <li className="mt-2 md:mt-0">
                        <a href="/products-page" className="block py-2 md:py-0 text-center md:text-left hover:border-b-2 border-black">Products</a>
                    </li>
                    <li className="mt-2 md:mt-0">
                        <a href="/404" className="block py-2 md:py-0 text-center md:text-left hover:border-b-2 border-black">Shop</a>
                    </li>
                    <li className="mt-2 md:mt-0">
                        <a href="/404" className="block py-2 md:py-0 text-center md:text-left hover:border-b-2 border-black">Sell on Art World</a>
                    </li>
                    </ul>
                </nav>
                {!isOpen && (
                    <div className="flex items-center space-x-8">
                        <button onClick={toggleSearch} className="text-black focus:outline-none">
                            <FaSearch className="w-6 h-6" />
                        </button>
                        <a href='/cart'><FaShoppingCart className="text-2xl cursor-pointer" /></a>
                    </div>
                )}
                </div>
                <div className='w-full items-center'>
                    {isSearchOpen && (
                        <div className="transition-all duration-300 ease-in-out w-full">
                            <form onSubmit={handleSubmit} action="" className='md:px-0 px-5 mb-5 gap-3 flex justify-center'>
                                <div className='w-5/6 px-2 border border-black flex justify-between'>
                                    <input
                                        type="text"
                                        value={inputText} onChange={handleInputChange}
                                        className="p-2 w-full focus:outline-none"
                                        placeholder="Enter Keywords..."
                                    /><FaTimes onClick={clearSearch} className='my-auto cursor-pointer'/>
                                </div>
                                <button type='submit'  className='bg-black text-white py-2 px-4 '>SEARCH</button>
                            </form>
                        </div>
                    )}
                </div>
            </header>
            <ToastContainer />
        </div>
    )
}

export default Navbar




  