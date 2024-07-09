import React, { useState } from 'react';
import { RiVisaLine } from "react-icons/ri";
import { FaGooglePay } from "react-icons/fa6";
import { FaCheck } from 'react-icons/fa';
import ProgressBar from '../components/Progressbar';

function Checkout() {
    const [currentStep] = useState(2);

  return (
    <div>
        <div className='px-10 mt-5'>
            <ProgressBar currentStep={currentStep}/>
            
            <div className="mb-6">
                <p className='flex gap-2 border-dashed border-2 p-4 rounded mb-4'>
                    <FaCheck className='text-4xl my-auto'/>
                    <p className='ml-2 my-auto'>Complete your order and earn 45 points for a discount on a future purchase</p>
                </p>
                <p>Returning Customer? <a href="/404" className="text-black font-bold">Click here to login</a></p>
                <p>Have a coupon? <a href="/404" className="text-black font-bold">Click here to enter your code</a></p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div>
                <form className="space-y-4">
                    <div>
                    <label className="block">Name*</label>
                    <input type="text" className="w-full p-2 border" />
                    </div>
                    <div>
                    <label className="block">Select Country/Region*</label>
                    <select className="w-full p-2 border">
                        <option>Select Country/Region</option>
                    </select>
                    </div>
                    <div>
                    <label className="block">Street Address*</label>
                    <input type="text" className="w-full p-2 border" />
                    </div>
                    <div>
                    <label className="block">Postal Code*</label>
                    <input type="text" className="w-full p-2 border" />
                    </div>
                    <div>
                    <label className="block">Email Address*</label>
                    <input type="email" className="w-full p-2 border" />
                    </div>
                    <div>
                    <label className="block">Phone Number*</label>
                    <input type="text" className="w-full p-2 border" />
                    </div>
                    <div>
                    <input type="checkbox" className="mr-2" />
                    <label>Create an account?</label>
                    </div>
                    <div>
                    <input type="checkbox" className="mr-2" />
                    <label>Ship to a different address?</label>
                    </div>
                </form>
                </div>

                <div>
                <div className="bg-gray-100 p-4 rounded">
                    <h3 className="text-lg font-semibold mb-4">YOUR ORDER</h3>
                    <div className="border-b pb-4 mb-4">
                    <p>Blossom</p>
                    <p>Emmanuel Abikah</p>
                    <p>₦45,000 - ₦135,000</p>
                    </div>
                    <div className="border-b pb-4 mb-4">
                    <p>SUBTOTAL</p>
                    <p>₦130,000</p>
                    </div>
                    <div className="border-b pb-4 mb-4">
                    <p>Shipping</p>
                    <p>Enter your address to view shipping option</p>
                    </div>
                    <div className="border-b pb-4 mb-4">
                    <p>Tax</p>
                    <p>₦0.00</p>
                    </div>
                    <div className="border-b pb-4 mb-4">
                    <p>Total</p>
                    <p>₦130,000</p>
                    </div>
                    <div className="flex items-center mb-4">
                    <RiVisaLine alt="Visa" className="text-6xl mr-2" />
                    <FaGooglePay alt="Google Pay" className="text-6xl" />
                    </div>
                    <div className="space-y-4">
                    <div>
                        <label className="block">Card Number</label>
                        <input type="text" className="w-full p-2 border" />
                    </div>
                    <div>
                        <label className="block">Expiry Date</label>
                        <input type="text" className="w-full p-2 border" />
                    </div>
                    <div>
                        <label className="block">CVC</label>
                        <input type="text" className="w-full p-2 border" />
                    </div>
                    </div>
                    <a href="/404"><button className="mt-4 w-full bg-black text-white py-2 hover:bg-white hover:text-black transition duration-500 ease-in-out hover:border-2 hover:border-black ">PLACE ORDER</button></a>
                </div>
                </div>
            </div>
        </div>

    </div>
  );
}

export default Checkout;
