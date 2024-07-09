import React from 'react';
import CartItem from '../components/Cartitems';
import Cartimage from '../assets/item5.webp';
import Cartimage2 from '../assets/item6.webp';
import { FaArrowRight } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import { FaGooglePay } from "react-icons/fa6";

const Cart = () => {
  return (
    <div>
        <div className='md:mx-20 mx-5'>
            <h2 className="text-3xl font-semibold mt-3 mb-4 text-center">CARTS</h2>
            <div className="space-y-4">
                <CartItem title="Sunrise" price="45,000" quantity="1" total="45,000" imageUrl={Cartimage} />
                <CartItem title="Blossom" price="85,000" quantity="1" total="85,000" imageUrl={Cartimage2} />
            </div>

            <div className="flex gap-2 md:gap-0 justify-between mt-10 ">
                <div className=''>
                    <h3 className="text-lg font-bold">DELIVERY INFORMARTION</h3>
                    <p>See our delivery and return info here</p>
                </div>

                {/* <div></div> */}

                <div className="justify-between ">
                    <div className="flex justify-between">
                        <div className='text-lg font-bold'>
                            SUBTOTAL:
                        </div>
                        <div className='text-lg font-bold'>
                            ₦150,000
                        </div>
                    </div>
                    <p>Taxes and shiping calculated at checkout</p>
                    <div className="flex items-center border-b border-black py-2">
                        <input type="text" placeholder="Add promo code" className="flex-grow outline-none placeholder-black"/>
                        <FaArrowRight className="h-5 w-5 text-black hover:cursor-pointer" />
                    </div>
                    
                    <a href="/checkout"><button className="mt-4 bg-black text-white px-4 py-2  hover:bg-white hover:text-black transition duration-500 ease-in-out hover:border-2 hover:border-black">CHECKOUT</button></a>
                </div>
 
            </div>

            <div>
                <h3 className="text-lg font-bold mt-6">PAYMENT INFO</h3>
                <p>We accept the following method of payment</p>
                <div className="flex space-x-2 mt-2">
                    <RiVisaLine className="text-5xl" />
                    <FaGooglePay className="text-5xl" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart
