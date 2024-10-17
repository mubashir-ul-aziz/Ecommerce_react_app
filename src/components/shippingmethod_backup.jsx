
import React, { useState, useEffect } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import Popup from "./theme-option/Popup";
import Tabs from './Tabs';
import Tab from './Tab';

function Shippingmethod() {
 const [isPopupOpen, setIsPopupOpen] = useState(false);
 const popupwidth=['200px','300px','400px','500px',"600px","700px","800"]
 const [button_toggle, setButton_toggle] = useState(true) 
 const togglePopup = () => {
  setIsPopupOpen(!isPopupOpen);
 };
 const [form_data,setForm_data] = useState({ name:'', price:"" })
 // console.log(form_data);
 const [methodentries, setMethodentries] = useState([]);
 
 let saved_shipping_method = [];
 saved_shipping_method = localStorage.getItem('Shipping Method');
 if (saved_shipping_method !== null) {
  saved_shipping_method = JSON.parse(saved_shipping_method);
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
  // console.log(form_data);
 };
 const handleSubmit = (e) => {
  e.preventDefault();
  setMethodentries(() => {
  let updatedEntries = [...saved_shipping_method, form_data];
  localStorage.setItem("Shipping Method", JSON.stringify(updatedEntries));  
  return updatedEntries;
  });
  setForm_data({ name: '', price: "" }); 
 }
  // const handleClose = ()=>{
  //   console.log("delete button");
  // }

 const handleupdate = (index)=>{
  console.log("handle update");
  setButton_toggle(true)
  console.log(`Clicked element's key is ${index}`)
  console.log(select_list)
 }
 const handleedit = (index)=>{
  console.log("handle edit");
  setButton_toggle(false)
  console.log(`Clicked element's key is ${index}`)
  console.log(select_list)
 }
 const handledelete =(index,  )=>{
  console.log("handle delete")
  console.log(`Clicked element's key is ${index}`)
  console.log(select_list)
  const deleted_item = select_list.filter((item, index)=>item !== index)
  console.log(deleted_item)
    
 }
 console.log(select_list)
 return (
  <div className="shipping-method-component">
   <div onClick={togglePopup} className=" cursor-pointer text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md" >
    <svg className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" >
     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
    </svg> Shipping Method
   </div>
   <Popup isOpen={isPopupOpen} handleClose={togglePopup} popupwidth={popupwidth[5]}>
    <div className="popup-component-body">
     <h1 className="font-medium mb-2 sm:text-3xl text-gray-900 text-center "> Shipping Method </h1>
     <p className=" leading-relaxed mb-1 "> Create Shipping method for Best product Delivery to Your Door Step!. </p>
     <div className={` ${select_list.length !==0?( " shipping-method-created " ):( " no-shipping-method " )} shipping-method-tab `}>
      <Tabs>            
       <Tab label="Create Shipping Method" >
        <div>
         <h2 className=" font-medium text-gray-900 text-lg text-center mt-4 "> Create New Shipping Method </h2>
         <form onSubmit={handleSubmit} className=" form-body flex flex-wrap ">
          <div className="relative p-2 w-1/2 ">
           <label htmlFor="shippingmethod" className="leading-7 ">Shipping Method Name:</label>
           <input onChange={handleChange} value={form_data.name} required type="text" id="shippingmethod" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300  focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative p-2 w-1/2 ">
           <label htmlFor="shippingprice" className="leading-7 " >Shipping Price:</label>
           <input onChange={handleChange} required value={form_data.price} type="number" data-type="currency" placeholder="$1,000,000.00" id="shippingprice" name="price" aria-describedby="user_avatar_help" aria-label="aria-label" aria-labelledby="username-label"  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300  focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="p-2 pt-4 w-full gap-5 flex ">
           <button className=" w-full border-0 px-8 py-2 rounded text-lg "> Create Shipping Method </button>
          </div>
         </form>
        </div>
       </Tab>
       <Tab label="List of Shipping Method">
        <div className=' shipping-method-list '> 
         <label className=" font-medium text-gray-900 text-lg text-center mb-1 "> The List of Created Shipping Method </label> 
         <div className="  "  >   
          <table>
           <thead>
            <tr>
             <th>Serial #</th>
             <th>Shipping Method</th>
             <th>Actions</th>
            </tr>
           </thead>
           <tbody>
            { select_list.map((list_option, index) => {
             return (
              <tr key={index} >
               <td>{index + 1}</td>
               <td>{list_option.name} - {list_option.price}</td>
               <td>
                <div className="flex gap-2.5 justify-end " >
                 {button_toggle?(
                  <div className="crud-action edit" onClick={()=>handleedit(index)}> <BorderColorIcon/> </div>
                 ):(
                  <div className="crud-action update" onClick={()=>handleupdate(index)}> <DataSaverOnIcon/> </div>
                 )}
                 <div className="crud-action delete" onClick={() => handledelete(index)}> <DeleteForeverIcon/> </div>
                </div> 
               </td>
              </tr>
             );
            })}
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
 )
}

export default Shippingmethod
