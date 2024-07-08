import React from 'react';
import {FaTwitter} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-white py-12 overflow-hidden">
      <div className="container mx-auto text-center">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 justify-center mx-10 space-y-8 md:space-y-0 md:space-x-8 mb-8">
          <div className="w-full md:w-auto text-left">
            <h3 className="font-bold mb-7">EXPLORE</h3>
            <ul className="space-y-2">
              <li><a href="/404" className="hover:underline">Sell art on Art World</a></li>
              <li><a href="/404" className="hover:underline">Our Story</a></li>
              <li><a href="/404" className="hover:underline">Our Initiatives</a></li>
              <li><a href="/404" className="hover:underline">Product Features</a></li>
              <li><a href="/404" className="hover:underline">Collectors Showcase</a></li>
            </ul>
          </div>
          <div className="w-full md:w-auto text-left">
            <h3 className="font-bold mb-7">SUPPORT</h3>
            <ul className="space-y-2">
              <li><a href="/404" className="hover:underline">Get Inspired</a></li>
              <li><a href="/404" className="hover:underline">FAQs</a></li>
              <li><a href="/404" className="hover:underline">Get in Touch</a></li>
              <li><a href="/404" className="hover:underline">Terms for Creators</a></li>
              <li><a href="/404" className="hover:underline">Return Policy</a></li>
              <li><a href="/404" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/404" className="hover:underline">Terms of Service</a></li>
              <li><a href="/404" className="hover:underline">Refund Policy</a></li>
            </ul>
          </div>
          <div className="w-full md:w-auto text-left">
            <h3 className="font-bold mb-7">For promos & giveaways</h3>
            {/* <p className="mb-4">Subscribe to get updates on new artworks and special offers.</p> */}
            <form className="flex justify-self-end border-2 border-white rounded-lg">
                <input type="email" placeholder="Enter your email here:" className="py-2 pl-3 pr-10 text-left rounded-lg border-black bg-black text-white" />
                {/* <button type="submit" className="p-2 bg-black text-white rounded-r">Subscribe</button> */}
            </form>
            <div className="space-y-2 my-4">
              <p>Get exclusive vouchers & deals, tips, and 
              inspiring gist to put heart in your space!</p>
            </div>
            <div className="space-y-2 my-4">
              <p>CONNECT WITH US ON ALL OUR SOCIAL MEDIA</p>
              <div className="social-icons flex justify-center space-x-7">
                < a href='/404'><FaTwitter className="text-4xl" /></a>
                < a href='/404'><FaInstagram className="text-4xl" /></a>
                < a href='/404'><FaFacebook className="text-4xl" /></a>
              </div>
            </div>
            
          </div>
        </div>
        <p className='text-left ml-8'>&copy; 2024 Art World. All rights reserved.</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer
