import React, { useState } from "react";
import Popup from "./theme-option/Popup";

function Createcoppen() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const select_list = [
    { name: "Select Option", price: 0 },
    { name: "COD Shipping", price: 10.00 },
    { name: "Standard Shipping", price: 15.00 },
    { name: "Fast Shipping", price: 20.00 },
  ];
  return (
    <div className="create-coppen-component">
      <div onClick={togglePopup} className=" cursor-pointer text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md" >
        <svg className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
        </svg> Create Coppen </div>
      <Popup isOpen={isPopupOpen} handleClose={togglePopup}>
        <div className="">
          <h1 className="font-medium mb-2 sm:text-3xl text-gray-900 text-center "> Create Coppens </h1>
          <p className=" leading-relaxed "> Create coppen for Customers </p>
          <h2 className=" font-medium text-gray-900 text-lg text-center mt-1 "> The List of Created Coppen </h2>
          <div className=' select-option '> 
              <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
              <select className=" border-solid border border-slate-300 rounded block p-2 text-gray-600 w-full text-sm " >
               
              {select_list.map((list_option, index) => {
                return (
                  <option key={index} value={list_option.name} >{list_option.name}</option>
                );
              })}
              </select>
            </div>
        </div>
      </Popup>
    </div>
  );
}

export default Createcoppen;
