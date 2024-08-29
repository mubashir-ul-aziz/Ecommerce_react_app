import React from 'react';
import { useState, useEffect } from 'react';

function CartQuantity({ productId, initialQuantity, updateQuantity, productPrice }) {

  const cart= JSON.parse(localStorage.getItem("cart"))
  const [quantity, setQuantity] = useState(initialQuantity);
  const [totalPrice, setTotalPrice] = useState(productPrice * initialQuantity);
  useEffect(() => {
    setQuantity(initialQuantity);
    setTotalPrice(productPrice * initialQuantity);
  }, [initialQuantity, productPrice]);


  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    setTotalPrice(productPrice * newQuantity);
    updateQuantity(productId, newQuantity);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      setTotalPrice(productPrice * newQuantity);
      updateQuantity(productId, newQuantity);
    }
  };

  return (
    <div className='cart_quantity_div flex justify-center items-center '>
      <span className=" font-medium ml-auto text-2xl quantity_total_prc ">${totalPrice.toFixed(2)}</span>
      <svg
         onClick={handleDecrement} 
        className="fill-current h-8 text-gray-600 w-3 cursor-pointer"
        viewBox="0 0 448 512"
      >
        <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
      </svg>

      <button className=" h-auto border-0 min-w-[40px] pointer-events-none p-2 rounded " >{quantity}</button>

      <svg
         onClick={handleIncrement} 
        className="fill-current h-8 text-gray-600 w-3 cursor-pointer"
        viewBox="0 0 448 512"
      >
        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
      </svg>
      
    </div>
  );
}

export default CartQuantity;
