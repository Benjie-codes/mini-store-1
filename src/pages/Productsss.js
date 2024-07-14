import React, { useEffect, useState } from 'react';
import { CartContext } from '../context/cartContext';
import { ToastContainer, toast } from 'react-toastify';
import { FaAngleRight, FaAngleLeft} from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = React.useContext(CartContext);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.timbu.cloud/products?organization_id=406671a1a9794d0cacd2c4301838acac&Appid=4YTRPOKYZR0ZMM3&Apikey=ec8e01823c644d31ad08ebfc14d15c5c20240713022144062243');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        if (Array.isArray(data.items)) {
          setProducts(data.items);
        } else {
          throw new Error('API response is not an array');
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleClickNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleClickPrev = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);


  const notify = () => {
    toast.success("Product added to cart", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleMultipleActions = () => {
    addToCart(products[0]);
    notify();
  };

  return (
    <div>
      <section className="py-12 text-center overflow-hidden mb-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Products
        </h2>
        <div className="flex flex-wrap justify-center mb-10">
          <div className="grid md:grid-cols-3 grid-cols-2 gap-10 p-6">
            {Array.isArray(products) ? currentProducts.map(product => (
              <div key={product.id} className=" rounded">
                {product.photos && product.photos.url ? (
                  <img src={`https://api.timbu.cloud/images/${product.photos.url}`} alt={product.name} className="w-2 mb-4 rounded" />
                ) : product.photos && product.photos[0] && product.photos[0].url ? (
                  <img src={`https://api.timbu.cloud/images/${product.photos[0].url}`} alt={product.name} className="mb-4 rounded" />
                ) : (
                  <p>No image available</p>
                )}
                <div className='flex justify-between'>
                  <h2 className="text-sm md:text-xl font-bold text-left w-1/2">{product.name}</h2>
                  <div className='text-right'>
                    <p className="text-lg font-bold">#{product?.current_price[0]?.["NGN"]?.[0]}</p>
                    <button onClick={handleMultipleActions} className="mt-4 bg-black text-white px-4 py-2  hover:bg-white hover:text-black transition duration-500 ease-in-out hover:border-2 hover:border-black ">Add To Cart</button>
                  </div>
                </div>
                {/* <p className='text-sm text-left'>{product.description}</p> */}
                {/* <p>Quantity: {product.available_quantity}</p> */}
              </div>
            )) : <p>No products available</p>}
          </div>
          <div className="flex justify-between mt-4 items-center gap-5">
            <div className='bg-black text-white flex items-center gap p-3 hover:cursor-pointer'>
              <FaAngleLeft className='color-white text-xl'/>
              <button 
                onClick={handleClickPrev} 
                className=""
                disabled={currentPage === 1}
              >
                Previous
              </button>
            </div>
            <div className='bg-black text-white flex items-center gap p-3 hover:cursor-pointer'>
              <button 
                onClick={handleClickNext} 
                className=""
                disabled={indexOfLastProduct >= products.length}
              >
                Next
              </button>
              <FaAngleRight className='color-white'/>
            </div>
            
          </div>
        </div>
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
  )
}

export default Products;