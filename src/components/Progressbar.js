import React from 'react';

function ProgressBar({ currentStep }) {
  return (
    <div className="bg-gray-100 p-2 md:p-10  rounded-md mb-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <span className={`w-8 h-8 flex items-center justify-center rounded-full ${currentStep >= 1 ? 'bg-black text-white' : 'bg-gray-400 text-gray-800'}`}>
            1
          </span>
          <div className={`ml-2 ${currentStep >= 1 ? 'text-black' : 'text-gray-500'}`}>Your Cart</div>
        </div>
        <div className="flex-1 mx-4 h-2 bg-black relative rounded">
          <div
            className={`absolute top-0 left-0 h-2 bg-black ${currentStep >= 3 ? 'w-full' : 'w-0'}`}
          />
        </div>
        
        <div className="flex items-center">
          <div className={`w-8 h-8 flex items-center justify-center rounded-full ${currentStep >= 2 ? 'bg-black text-white' : 'bg-gray-400 text-gray-800'}`}>
            2
          </div>
          <span className={`ml-2 ${currentStep >= 2 ? 'text-black' : 'text-gray-500'}`}>Checkout</span>
        </div>
        <div className="flex-1 mx-4 h-2 bg-gray-200 relative rounded">
          <div
            className={`absolute top-0 left-0 h-2 bg-black rounded ${currentStep >= 2 ? 'w-1/2' : 'w-0'}`}
          />
        </div>
        <div className="flex items-center">
          <div className={`w-8 h-8 flex items-center justify-center rounded-full ${currentStep >= 3 ? 'bg-black text-white' : 'bg-gray-400 text-gray-800'}`}>
            3
          </div>
          <span className={`ml-2 ${currentStep >= 3 ? 'text-black' : 'text-gray-500'}`}>Order Complete</span>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
