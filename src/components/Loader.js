import React from 'react'
import loaderImg from '../assets/loader.png'

const Loader = () => {
  return (
    <div>
        <div className="flex justify-center items-center h-screen">
            <img src={loaderImg} alt="loader" className='transform transiton-all duration-1000 rotate-360 h-20 w-20 animate-spin' />
        </div>
    </div>
  )
}

export default Loader;
