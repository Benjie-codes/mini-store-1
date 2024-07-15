import React, { useContext, useState, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartContext } from '../context/cartContext';

const notify = () =>
  toast.success("Product added to cart!", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

const Homecart = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

const createAddToCartAction = (addToCart, ...additionalActions) => (product) => {
    addToCart(product);
    additionalActions.forEach(action => action(product));
};

const AddToCartAndNotify = createAddToCartAction(addToCart, notify);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.timbu.cloud/products?organization_id=406671a1a9794d0cacd2c4301838acac&Appid=4YTRPOKYZR0ZMM3&Apikey=ec8e01823c644d31ad08ebfc14d15c5c20240713022144062243');
        const data = await response.json();
        setProducts(data.items.slice(0, 10));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <section className="py-12 text-center overflow-hidden mb-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Discover New Arts
        </h2>
        <div className="flex flex-wrap justify-center mb-10">
          <div className="grid md:grid-cols-2 grid-col">
            {products.map(product => (
              <div
                key={product.id}
                className="flex flex-col items-center w-90 p-4 m-4 bg-white shadow-md rounded"
              >
                <div className='w-full flex justify-center'>
                  <img src={`https://api.timbu.cloud/images/${product.photos[0]?.url}`} alt={product.name} className="mb-4 object-contain w-5/6  rounded" />
                </div>
                <div className='mx-2 '>
                  <div className="grid grid-cols-12 items-start md:items-center gap-2">
                    <div className="text-left col-span-9">
                      <h3 className="text-xl md:text-2xl font-bold mb-2">{product.name}</h3>
                      <p className='text-sm md:text-base'>{product.description}</p>
                      <p className='text-xl font-bold font-sans'>₦{product?.current_price[0]?.["NGN"]?.[0]}</p>
                    </div>
                    <div className="flex justify-end col-span-3">
                      <button
                        onClick={() => AddToCartAndNotify(product)}
                        className="mt-4 bg-black text-white px-6 py-4 text-sm md:text-base  hover:bg-white hover:text-black transition duration-500 ease-in-out hover:border-2 hover:border-black "
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>
        <a
          href="/products"
          className="px-10 py-5 bg-black text-white hover:bg-white hover:text-black hover:border-2 hover:border-black  transition duration-500 ease-in-out"
        >
          View All
        </a>
      </section>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Homecart;
