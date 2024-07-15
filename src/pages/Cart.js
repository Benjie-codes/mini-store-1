import React, { useContext } from "react";
import { FaArrowRight } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import { FaGooglePay } from "react-icons/fa6";
import { CartContext } from "../context/cartContext";


const Cart = () => {
  const { cartItems, addToCart, removeFromCart, clearCart, deleteItem, tPrice, getCartTotal } = useContext(CartContext)

  console.log(cartItems)

  // console.log((cartItems.current_price[0]?.["NGN"] * cartItems.quantity).toFixed(2))

  return (
    <div>
      <div className="md:mx-20 mx-5">
        <h2 className="text-3xl font-semibold mt-3 mb-4 text-center">CARTS</h2>
        <div className="p-4">
          {cartItems.length === 0 ? (
          <p>No items in the cart</p>
          ) : (
            <div>
            <div className="">
              {cartItems.map((product, index) => (
                <div key={index} className="flex p-4 rounded items-center">
                  <div className="w-2/12">
                    {product.photos && product.photos.url ? (
                        <img src={`https://api.timbu.cloud/images/${product.photos.url}`} alt={product.name} className=" rounded" />
                      ) : product.photos && product.photos[0] && product.photos[0].url ? (
                        <img src={`https://api.timbu.cloud/images/${product.photos[0].url}`} alt={product.name} className="md:w-40 rounded" />
                      ) : (
                      <p>No image available</p>
                    )}
                  </div>
                  
                  <div className="w-10/12 grid grid-cols-12">
                    <div className="pl-4 md:pl-0 col-span-12 md:col-span-8 mb-3 md:mb-0">
                      <h2 className="text-xl font-bold">{product.name}</h2>
                    </div>
                    <div className="col-span-12 md:col-span-4">
                      <div grid className="grid grid-cols-12">
                          <div className="col-span-6 ml-4">
                            <button
                              onClick={() => {
                                removeFromCart(product)
                              }}
                              className="bg-gray-300 text-black p-2 rounded mr-2"
                            >
                              -
                            </button>
                            <span>{product.quantity}</span>
                            <button
                              onClick={() => {
                                addToCart(product)
                              }}
                              className="bg-gray-300 text-black p-2 rounded ml-2"
                            >
                              +
                            </button>
                          </div>
                          <div className="col-span-6">
                            <p className="text-2xl font-bold flex justify-end">₦{tPrice(product)}</p>
                            <div className="flex justify-end">
                              <button
                                onClick={() => {
                                  deleteItem(product.id)
                                }}
                                className="bg-red-500 text-white p-2 rounded mt-2"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                </div>
              ))}
              
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => {
                  clearCart()
                }}
                className="bg-red-500 text-white p-2 rounded mt-4 flex justify-end"
              >
                Clear Cart
              </button>
            </div>
            
          </div>
          )}

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
                  ₦ {getCartTotal()}
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
  </div>
  );
};

export default Cart;
