import React from 'react';

function CartItem({ title, price, quantity, total, imageUrl }) {
  return (
    <div className="flex justify-between items-center border-b py-4 md:mx-0 sm:mx-20">
      <div className="flex items-center gap-2">
        <img src={imageUrl} alt={title} className="w-32 object-cover rounded-lg" />
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p>₦{price}</p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="border px-2">-</button>
        <span className=''>{quantity}</span>
        <button className="border px-2">+</button>
      </div>

      <div>
        ₦{total}
      </div>
    </div>
  );
}

export default CartItem;
