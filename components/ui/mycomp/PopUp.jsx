"use client";
import React from 'react';
import { useState } from "react";
import { Star, ShoppingCart, CreditCard, Minus, Plus } from 'lucide-react';

const Popup = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1)); 
  
  return (  
    <div className="">
      <h2 className="font-bold text-lg mb-1">
        More Details for Vehicle which is selected:
      </h2>
      <p className="text-sm">Mountains. By Land Cruiser</p>
      <div className="flex items-center gap-1 mt-1">
        <span className="font-bold text-primary">4.9</span>
        <Star size={20} className="text-yellow-500 fill-yellow-500" />
        <Star size={20} className="text-yellow-500 fill-yellow-500" />
        <Star size={20} className="text-yellow-500 fill-yellow-500" />
        <Star size={20} className="text-yellow-500 fill-transparent stroke-current left-0 top-0" />  
      </div>
     <div className='flex gap-2'>
       <p className='font-bold mt-2'>
        Price:
        <span className='text-green-500 font-normal ml-2'>
          2140$
        </span>
       </p>
       <p className='font-bold mt-2'>
        Discount:
        <span className='text-red-500 font-normal ml-2'>
          10% 
        </span>
       </p>
      </div>
      {/* counter start here */}
      <div className="flex items-center gap-2 mt-3">
          <button
            onClick={decrement}
            className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400 transition">
             <Minus size={16} />
          </button>
          <span className="px-2.5">{quantity}</span>
          <button
            onClick={increment}
            className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400 transition">
             <Plus size={16} />
          </button>
        <button className="flex items-center gap-1.5 bg-primary text-white px-3 py-1 rounded-md hover:bg-primary/80 transition">
          <ShoppingCart size={16} />
          Add to Cart
        </button>
        <button className="flex items-center gap-1.5 bg-gray-200 text-black px-3 py-1 rounded-md hover:bg-gray-300 transition">
          <CreditCard size={16} />
          Buy Now
        </button>
        </div>
      {/* counter end here */}
    </div>
   );
}
 
export default Popup;