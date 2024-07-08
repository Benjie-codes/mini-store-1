import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-6xl font-bold text-black mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-8">Oops! The page is under construction!</p>
      <Link to="/" className="text-lg text-white bg-black px-4 py-2">
        Go Back Home
      </Link>
    </div>
  );
}

export default Error;
