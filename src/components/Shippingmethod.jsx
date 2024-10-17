
import React, { useState, useEffect } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Popup from "./theme-option/Popup";
import Tabs from './Tabs';
import Tab from './Tab';

function Shippingmethod({dynmc_class, svg }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const popupwidth = ['200px', '300px', '400px', '500px', "600px", "700px", "800px"];
  const [button_toggle, setButton_toggle] = useState(true);
  const [form_data, setForm_data] = useState({ name: '', price: "", prefermethod: "" });
  const [shippingMethods, setShippingMethods] = useState([]);
  const [editIndex, setEditIndex] = useState(null); 
  const [activeTab, setActiveTab] = useState("Create Shipping Method"); 
  const [selectedOption, setSelectedOption] = useState("");
  const [isChecked, setIsChecked] = useState(null);


  useEffect(() => {
    const saved_shipping_method = JSON.parse(localStorage.getItem('Shipping Method')) || [];
    setShippingMethods(saved_shipping_method);
  }, []);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleChange = (event) => {
    setForm_data({ ...form_data, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedMethods = [...shippingMethods];
      updatedMethods[editIndex] = form_data;
      setShippingMethods(updatedMethods);
      localStorage.setItem("Shipping Method", JSON.stringify(updatedMethods));
      setEditIndex(null);
      setButton_toggle(true);
      setActiveTab("List of Shipping Method"); 
    } else {
      // Add new item
      const updatedEntries = [...shippingMethods, form_data];
      setShippingMethods(updatedEntries);
      localStorage.setItem("Shipping Method", JSON.stringify(updatedEntries));
    }
    setForm_data({ name: '', price: "" });
  };

  const handleEdit = (index) => {
    setForm_data(shippingMethods[index]);
    setEditIndex(index);
    setButton_toggle(false);
    setActiveTab("Update Shipping Method"); 
  };

  const handleDelete = (index) => {
    const updatedMethods = shippingMethods.filter((_, i) => i !== index);
    setShippingMethods(updatedMethods);
    localStorage.setItem("Shipping Method", JSON.stringify(updatedMethods));
  };
console.log(svg)
  return (
    <div className="shipping-method-component">
      <div onClick={togglePopup} className={dynmc_class} >
        {svg ? (
          <svg className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
        </svg>
        ):('')} Shipping Method
      </div>
      <Popup isOpen={isPopupOpen} handleClose={togglePopup} popupwidth={popupwidth[5]}>
        <div className="popup-component-body">
          <h1 className="font-medium mb-2 sm:text-3xl text-gray-900 text-center">Shipping Method</h1>
          <p className="leading-relaxed mb-4">Create Shipping method for Best product Delivery to Your Door Step!.</p>
          <div className={` ${shippingMethods.length !== 0 ? "shipping-method-created" : "no-shipping-method"} shipping-method-tab`}>
            <Tabs activeTab={activeTab} onChange={setActiveTab}>
              <Tab label={button_toggle ? "Create Shipping Method" : "Update Shipping Method"}>
                <div>
                  <h2 className="font-medium text-gray-900 text-lg text-center mt-4">{button_toggle ? "Create New Shipping Method" : "Update Shipping Method"}</h2>
                  <form onSubmit={handleSubmit} className="form-body flex flex-wrap">
                    <div className="relative p-2 w-1/2">
                      <label htmlFor="shippingmethod" className="leading-7">Shipping Method Name:</label>
                      <input onChange={handleChange} value={form_data.name} required type="text" id="shippingmethod" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative p-2 w-1/2">
                      <label htmlFor="shippingprice" className="leading-7">Shipping Price:</label>
                      <input onChange={handleChange} required value={form_data.price} type="number" id="shippingprice" name="price" aria-describedby="user_avatar_help" aria-label="aria-label" aria-labelledby="username-label" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    {/* <div className="relative p-2 w-1/2"> */}
                     {/* <label > Default Select </label> */}
                     {/* {console.log(isChecked)} */}
                     {/* <input onChange={handleCheckboxChange} type="checkbox" name="default" checked={isChecked === "default"}/> */}
                    {/* </div> */}
                    <div className="p-2 pt-4 w-full gap-5 flex">
                      <button type="submit" className="w-full border-0 px-8 py-2 rounded text-lg">{button_toggle ? "Create Shipping Method" : "Update Shipping Method"}</button>
                    </div>
                  </form>
                </div>
              </Tab>
              <Tab label="List of Shipping Method">
                <div className='shipping-method-list'>
                  <label className="font-medium text-gray-900 text-lg text-center mb-1">The List of Created Shipping Method</label>
                  <div>
                    <table>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Shipping Method</th>
                          <th>Default</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                       {console.log(shippingMethods)}
                        {shippingMethods.map((list_option, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{list_option.name} - ${list_option.price}</td>
                            <th>
                            {list_option.prefermethod}
                            </th>
                            <td>
                              <div className="flex gap-2.5 justify-end">
                               <div className="crud-action edit" onClick={() => handleEdit(index)}><BorderColorIcon /></div>
                               <div className="crud-action delete" onClick={() => handleDelete(index)}><DeleteForeverIcon /></div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </Popup>
    </div>
  );
}

export default Shippingmethod;
