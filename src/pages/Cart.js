import React, { useState } from "react";
import Cartimage from "../assets/item5.webp";
import Cartimage2 from "../assets/item6.webp";
import { FaArrowRight } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import { FaGooglePay } from "react-icons/fa6";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Sunrise", price: 45000, quantity: 1 },
    { id: 2, name: "Blossom", price: 45000, quantity: 1 },
  ]);

  const incrementQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  //   const total = () => {
  //     return cartItems.reduce((item) => item.price * item.quantity);
  //   }

  return (
    <div>
      <div className="md:mx-20 mx-5">
        <h2 className="text-3xl font-semibold mt-3 mb-4 text-center">CARTS</h2>
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <img
                src={Cartimage}
                alt="Sunrise"
                className="w-32 rounded mr-4"
              />
              <div>
                <h2 className="text-xl font-semibold">Awelewa</h2>
                <p className="text-black">₦{(45000).toLocaleString()}</p>
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => decrementQuantity(1)}
                className="text-lg px-2"
              >
                -
              </button>
              <span className="text-lg px-2">{cartItems[0].quantity}</span>
              <button
                onClick={() => incrementQuantity(1)}
                className="text-lg px-2"
              >
                +
              </button>
            </div>
            <div>
              <p className="font-bold">
                ₦{cartItems[0].price * cartItems[0].quantity}
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <img
                src={Cartimage2}
                alt="Blossom"
                className="w-32 rounded mr-4"
              />
              <div>
                <h2 className="text-xl font-semibold">Sunrise</h2>
                <p className="text-black">₦{(45000).toLocaleString()}</p>
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => decrementQuantity(2)}
                className="text-lg px-2"
              >
                -
              </button>
              <span className="text-lg px-2">{cartItems[1].quantity}</span>
              <button
                onClick={() => incrementQuantity(2)}
                className="text-lg px-2"
              >
                +
              </button>
            </div>
            <div>
              <p className="font-bold">
                ₦{cartItems[1].price * cartItems[1].quantity}
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-2 md:gap-0 justify-between mt-10 ">
          <div className="">
            <h3 className="text-lg font-bold">DELIVERY INFORMARTION</h3>
            <p>See our delivery and return info here</p>
          </div>

          {/* <div></div> */}

          <div className="">
            <div className="flex justify-between">
              <div className="text-lg font-semibold">SUBTOTAL:</div>
              <div className="text-lg font-bold">
                <p className="text-xl font-bold">
                  ₦{calculateSubtotal().toLocaleString()}
                </p>
              </div>
            </div>
            <p className="text-xs">Taxes and shiping calculated at checkout</p>
            <div className="flex items-center border-b border-black py-2">
              <input
                type="text"
                placeholder="Add promo code"
                className="flex-grow outline-none placeholder-black"
              />
              <FaArrowRight className="h-5 w-5 text-black hover:cursor-pointer" />
            </div>

            <a href="/checkout">
              <button className="mt-4 bg-black text-white px-4 py-2  hover:bg-white hover:text-black transition duration-500 ease-in-out hover:border-2 hover:border-black">
                CHECKOUT
              </button>
            </a>
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
  );
};

export default Cart;
