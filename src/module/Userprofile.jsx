
import React, { useState, useEffect } from 'react';

function Userprofile() {

  const [userData, setUserData] = useState({});
  const [isEditing, setIsEditing] = useState(true);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('current_user'));
    setUserData(storedUser);
  }, []);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleGeneratePassword = () => {
    const newPassword = Math.random().toString(36).slice(-8);
    setUserData({ ...userData, password: newPassword });
    alert(`New password generated: ${newPassword}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('users', JSON.stringify(userData));
    localStorage.setItem("current_user", JSON.stringify(userData))
    alert('Profile updated successfully!');
    setIsEditing(true);
  };

  return (
    <div className=" userprofile-component ">
      <div className="text-gray-600 relative ">
        <div className=" mx-auto pb-20 py-16 ">          
          <div className="lg:w-2/5 md:w-2/3 mx-auto">
            <div className=" mb-4 text-center ">
              <h1 className=" sm:text-3xl text-gray-900 mb-2 ">User Profile</h1>
              <p className="">Please <b>Create</b>  your Account.</p>
            </div>
            {/* {isEditing ? ( */}
            <div>
                <form className=" form-body flex flex-wrap " onSubmit={handleSubmit} >
           
                <div className="relative p-2 w-1/2 ">
                  <label htmlFor="firstname" className="leading-7 ">First Name:</label>
<input disabled={isEditing} type="text" name="firstName" value={userData.firstName || '' } onChange={handleChange} required  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300  focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative p-2 w-1/2 ">
                  <label htmlFor="lastname" className="leading-7 ">Last Name:</label>
<input disabled={isEditing} type="text" name="lastName" value={userData.lastName || '' } onChange={handleChange} required  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300  focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>             
                <div className="relative p-2 w-1/2 ">
                  <label htmlFor="email" className="leading-7 ">Email:</label>
<input disabled={isEditing} type="email" name="email" value={userData.email || '' } onChange={handleChange} required  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300  focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  
                </div>
                <div className="relative p-2 w-1/2 ">
                  <label htmlFor="password" className="leading-7 ">Mobile Number:</label>
<input disabled={isEditing} type="text" name="phoneNumber" value={userData.phoneNumber || '' } onChange={handleChange} required className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative p-2 w-1/2 ">
                  <label htmlFor="password" className="leading-7 ">Password:</label>
                  {/* <button type="button" onClick={handleGeneratePassword}>Generate New Password</button> */}
<input disabled={isEditing} type="password" name="password" value={userData.password || '' } onChange={handleChange} required  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  
                  
                </div>
                
 
                {/* <div className=" address-field flex flex-wrap "> */}
                  <div className=" relative p-2 w-1/2 ">
                    <label htmlFor="street" className="leading-7 ">Street Address:</label>
<input disabled={isEditing} type="text" name="address" value={userData.address || '' } onChange={handleChange} required  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                  {/* <div className=" relative p-2 w-1/2 ">
                    <label htmlFor="city" className="leading-7 ">City Name:</label>
                    <input disabled type="text" id="city" name="city" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>                  
                  <div className=" relative p-2 w-1/2 ">
                    <label htmlFor="zipcode" className="leading-7 ">zip code:</label>
                    <input disabled type="text" id="zipcode" name="zipcode" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                  <div className=" relative p-2 w-1/2">
                    <label htmlFor="Country" className="leading-7 "> Country: </label>
                    <input disabled type="text" id="Country" name="Country" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                  <div className="relative p-2 w-full ">
                  <label htmlFor="mobile-number" className="leading-7 ">Mobile Number:</label>
                  <input disabled type="tel" id="mobile-number" name="mobile-number" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div> */}
              {/* </div> */}
              <div className={`${!isEditing ? "" : " display-none "} p-2 pt-4 w-full '`} >
              
              {/* {!isEditing ? (
                <button className=" w-full border-0 px-8 py-2 rounded text-lg " type="submit" >Profile updated successfully!</button>
    
    ) : (
      // "edit button"
      <button onClick={() => setIsEditing(true)} className=" w-full border-0 mt-4 px-8 py-2 rounded text-lg mb-2">Edit Profile</button>

    )} */}
         
                <button className=' w-full border-0 px-8 py-2 rounded text-lg' type="submit" > Update </button>
              </div>
            </form>
                <button onClick={() => setIsEditing(false)} className={` ${!isEditing ? " display-none " : ""}  w-full border-0 mt-4 px-8 py-2 rounded text-lg mb-2 `}>Edit Profile</button>
                </div>
            {/* ):( */}
            <div>
              {/* <form className=" form-body flex flex-wrap " >
           
           <div className="relative p-2 w-1/2 ">
             <label htmlFor="firstname" className="leading-7 ">First Name:</label>
<input disabled type="text" name="firstName" value={userData.firstName || '' } onChange={handleChange} required  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300  focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
           </div>
           <div className="relative p-2 w-1/2 ">
             <label htmlFor="lastname" className="leading-7 ">Last Name:</label>
<input disabled type="text" name="lastName" value={userData.lastName || '' } onChange={handleChange} required  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300  focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
           </div>             
           <div className="relative p-2 w-1/2 ">
             <label htmlFor="email" className="leading-7 ">Email:</label>
<input disabled type="email" name="email" value={userData.email || '' } onChange={handleChange} required  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300  focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
             
           </div>
           <div className="relative p-2 w-1/2 ">
             <label htmlFor="password" className="leading-7 ">Mobile Number:</label>
<input disabled type="text" name="phoneNumber" value={userData.phoneNumber || '' } onChange={handleChange} required className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
           </div>
           <div className="relative p-2 w-1/2 ">
             <label htmlFor="password" className="leading-7 ">Password:</label>
<input disabled type="password" name="password" value={userData.password || '' } onChange={handleChange} required  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
             
             
           </div>
             <div className=" relative p-2 w-1/2 ">
               <label htmlFor="street" className="leading-7 ">Street Address:</label>
<input disabled type="text" name="address" value={userData.address || '' } onChange={handleChange} required  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
             </div>
       </form> */}

            </div>
            {/* )} */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Userprofile
