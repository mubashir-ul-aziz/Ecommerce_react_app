import React, { useState, useEffect } from "react";
import Popup from "./theme-option/Popup";

function Shippingmethod() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const popupwidth=['200px','300px','400px','500px',"600px","700px","800"]
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  const [form_data,setForm_data] = useState({
    method:'',
    price:''
  })
  const [methodentries, setMethodentries] = useState([]);
 
  let saved_shipping_method = [];
  saved_shipping_method = localStorage.getItem('Shipping Method');
  if (saved_shipping_method !== null) {
    saved_shipping_method = JSON.parse(saved_shipping_method);
    // saved_shipping_method.unshift({ method: " View Method ", price: "" },);
  } else {
    saved_shipping_method = [];
  }

   
  // const select_list = [
  //   { name: " View the List ", price: 0 },
  //   { name: "COD Shipping", price: 10.00 },
  // ];
  const select_list = saved_shipping_method ;
  
  const handleChange = (event) => {
    setForm_data({...form_data, [event.target.name]: event.target.value,});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // setMethodentries([...methodentries, form_data]);
    // localStorage.setItem("Shipping Method", JSON.stringify(methodentries))
    setMethodentries(() => {
      let updatedEntries = [...saved_shipping_method, form_data];
      // updatedEntries = [...saved_shipping_method, updatedEntries] 
      localStorage.setItem("Shipping Method", JSON.stringify(updatedEntries));  
      return updatedEntries;
    });
    setForm_data({ method: '', price: '' }); 
  }
  const handleClose = ()=>{
    console.log("delete button");
  }
    
  return (
    <div className="shipping-method-component">
      <div onClick={togglePopup} className=" cursor-pointer text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md" >
        <svg className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
        </svg> Shipping Method </div>
      <Popup isOpen={isPopupOpen} handleClose={togglePopup} popupwidth={popupwidth[5]}>
        <div className="popup-component-body">
          <h1 className="font-medium mb-2 sm:text-3xl text-gray-900 text-center "> Shipping Method </h1>
          <p className=" leading-relaxed mb-1 "> Create Shipping method for Best product Delivery to Your Door Step!. </p>
          <h2 className=""></h2>
          <div className=' select-option '> 
            <label className=" font-medium text-gray-900 text-lg text-center mb-1 "> The List of Created Shipping Method </label>
            <select className=" mt-2 border-solid border border-slate-300 rounded block p-2 text-gray-600 w-full text-sm "  >           
              {                
              select_list.map((list_option, index) => {
                return (
                  <option key={index} value={list_option.price} name={list_option.method} > {list_option.method} {list_option.price>0?` - ${list_option.price}`:""} </option>
                );
              })}
            </select>
          </div>
          <h2 className=" font-medium text-gray-900 text-lg text-center mt-4 "> Create New Shipping Method </h2>
          <form onSubmit={handleSubmit} className=" form-body flex flex-wrap ">
            <div className="relative p-2 w-1/2 ">
              <label htmlFor="shippingmethod" className="leading-7 ">Shipping Method Name:</label>
              <input onChange={handleChange} value={form_data.method} required type="text" id="shippingmethod" name="method" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300  focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative p-2 w-1/2 ">
              <label htmlFor="shippingprice" className="leading-7 " >Shipping Price:</label>
              <input onChange={handleChange} required value={form_data.price} type="number" data-type="currency" placeholder="$1,000,000.00" id="shippingprice" name="price" aria-describedby="user_avatar_help" aria-label="aria-label" aria-labelledby="username-label"  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300  focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="p-2 pt-4 w-full gap-5 flex ">
              <button className=" w-2/4 border-0 px-8 py-2 rounded text-lg "> Create Shipping Method </button>
              <button className=" w-2/4 border-0 px-8 py-2 rounded text-lg text-red-600 " onClick={handleClose}> Delete Shipping Method </button>

            </div>
          </form>
          <div className="crud-function-body">

          </div>
        </div>
      </Popup>
  </div>
  )
}

export default Shippingmethod
