import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CartQuantity from 'components/Cart_quentity.jsx';

function Prd_cart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cartItems, setCartItems] = useState(cart);
  const [selectedOption, setSelectedOption] = useState("");
  const [exact_price, setexact_price] = useState("");
  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  let total_view_price= 0
const total_price = parseFloat(cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2));

const shipping_option = [
  { name: "Select Option", price: 0 },
  { name: "COD Shipping", price: 10.00 },
  { name: "Standard Shipping", price: 15.00 },
  { name: "Fast Shipping", price: 20.00 },
];
const handleChange = (event) => {
  const selectedOptionName = event.target.value;
  setSelectedOption(selectedOptionName);
    const selectedShippingOption = shipping_option.find(option => option.name === selectedOptionName);
    if (selectedShippingOption) {
      localStorage.setItem("Shipping Method", JSON.stringify(selectedShippingOption));
      setexact_price(total_price + selectedShippingOption.price)
    } else {
      alert("No shipping option found!");
    }
};
useEffect(()=>{
  const storedShippingMethod = JSON.parse(localStorage.getItem("Shipping Method"))
  if (storedShippingMethod && storedShippingMethod.name) {
    setSelectedOption(storedShippingMethod.name);
    setexact_price(total_price + storedShippingMethod.price);
  }
},[]);
useEffect(() => {
  const selectedShippingOption = shipping_option.find(option => option.name === selectedOption);
  if (selectedShippingOption) {
    setexact_price(total_price + selectedShippingOption.price);
  } else {
    setexact_price(total_price);
  }
}, [total_price, selectedOption]);

if (!cartItems.length) {
  return <div>Cart is Empty</div>;
}

  return (
    <div className=" cart_component">
      <div className="container mx-auto mt-10">
        <div className="flex my-10">
          <div className="w-3/4 bg-white px-10 py-10 border-solid border-t border border-slate-100 shadow-lg ">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">{cartItems.length} Items</h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
            </div>
            {cartItems.map((cart_single, index) => (
              <div key={index} className="flex over:bg-gray-100 -mx-8 px-6 py-5 ">
                <div className="flex w-2/5">
                  <div className=" relative w-1/6 ">
                    <Link to={`/product/${cart_single.id}`}>
                      <img className=" object-top absolute h-full left-1/2 top-0 transform -translate-x-1/2 object-contain rounded" src={cart_single.image} alt={cart_single.title} />
                      {/* <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            /> */}
                    </Link>
                  </div>
                  <div className="flex flex-col justify-between ml-4 w-5/6 ">
                    <Link to={`/product/${cart_single.id}`} className=" font-bold text-sm truncate-2-lines ">{cart_single.title}</Link>
                    <div className='flex gap-2.5'><Link to={`/category/${cart_single.category}`} className="text-red-500 text-xs">{cart_single.category}</Link>
                    <div className="cursor-pointer font-semibold hover:text-red-500 text-gray-500 text-xs" onClick={() => handleRemoveItem(cart_single.id)}>Remove</div></div>
                  </div>
                </div>
                <div className="flex justify-center w-1/5 items-start ">
                  <CartQuantity 
                    productId={cart_single.id} 
                    initialQuantity={cart_single.quantity} 
                    updateQuantity={updateQuantity} 
                    productPrice={cart_single.price} 
                  />
                </div>
                
                <span className="text-center w-1/5 font-semibold text-sm">PKR={(cart_single.price).toFixed(2)}</span>
                <span className="text-center w-1/5 font-semibold text-sm ">PKR={ (cart_single.price * cart_single.quantity).toFixed(2) }</span>
              </div>
            ))}
            <Link to={'/product/'} className="flex font-semibold mt-6">
              <svg className="fill-current mr-2 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
              Continue Shopping
            </Link>
          </div>

          <div id="summary" className=" border-solid border-t border border-slate-100 w-1/4 px-8 py-10 shadow-lg ">
            <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">Items: <b>{cartItems.length}</b></span>
              <span className="font-semibold text-sm">PKR ${total_price} </span>
            </div>
            <div className=' shipping-method '> 
              <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
              <select className=" border-solid border border-slate-300 rounded block p-2 text-gray-600 w-full text-sm " value={selectedOption} onChange={handleChange}>
               
              {shipping_option.map((shipping_option, index) => {
                return (
                  <option key={index} value={shipping_option.name} >{shipping_option.name}{shipping_option.price>0?` - $${shipping_option.price.toFixed(2)}`:""}</option>
                );
              })}
              </select>
            </div>
            <div className="py-10">
              <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label><span className='float-right' >display promocode</span>
              <input type="text" id="promo" placeholder="Enter your code" className=" border-solid border border-slate-300 rounded p-2 text-sm w-full " />
            </div>
            <button className="px-5 py-2 text-sm text-white uppercase  button inline-flex items-center g-indigo-500 border-0 py-2 px-3 focus:outline-none over:bg-indigo-700 rounded text-base mt-4 md:mt-0">Apply</button>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>PKR {exact_price}</span>
              </div>
              <Link to={'/checkout/'} className=" button inline-flex items-center g-indigo-500 border-0 py-2 px-3 focus:outline-none over:bg-indigo-700 rounded text-base mt-4 md:mt-0">Checkout</Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Prd_cart;
