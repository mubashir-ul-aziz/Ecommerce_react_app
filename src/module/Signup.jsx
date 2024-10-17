import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigation = useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    console.log(formData);
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
        alert("Passwords don't match!");
        return;
    }

       // Retrieve existing users from local storage
      let existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        // Check if a user with the same email already exists
    if(!Array.isArray(existingUsers)){
      console.log("Data type is equal to ARRAY");
      existingUsers=[existingUsers];
    }else{
      console.log("Data type is NOT equal to ARRAY")
    }
    const userExists = existingUsers.some(user => user.email === formData.email );
    if (userExists) {
        alert("User with this email already exists!");
        return;
    }

    // Append the new user to the existing users array
    const updatedUsers = [...existingUsers, formData];
console.log(updatedUsers)
    // Save the updated array back to local storage
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    alert('Signup successful!');
    // Optionally, reset the form data
    setFormData([{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    }]);
    navigation("/login"); 
    console.log(formData);
  };
  return (
      <div className=" signup-component ">
      <div className="text-gray-600 relative ">
        <div className=" mx-auto pb-20 py-16 ">

          <div className="lg:w-2/5 md:w-2/3 mx-auto">
          <div className=" mb-4 text-center ">
            <h1 className=" sm:text-3xl text-gray-900 mb-2 ">Register Your Account</h1>
            <p className="">Please <b>Register</b>  your Account.</p>
          </div>

            <form onSubmit={handleSubmit} className=" form-body flex flex-wrap ">

              <div className="relative p-2 w-1/2 ">
                <label htmlFor="firstname" className="leading-7 ">First Name:</label>
                <input onChange={handleChange} required type="text" id="firstname" name="firstname" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300  focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative p-2 w-1/2 ">
                <label htmlFor="lastname" className="leading-7 ">Last Name:</label>
                <input onChange={handleChange} required type="text" id="lastname" name="lastname" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300  focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>


              <div className="relative p-2 w-1/2 ">
                <label htmlFor="email" className="leading-7 ">Email:</label>
                <input onChange={handleChange} required type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300  focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>

              <div className="relative p-2 w-1/2 ">
                <label htmlFor="password" className="leading-7 ">Password:</label>
                <input onChange={handleChange} required type="password" id="password" name="password" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>

              <div className="relative p-2 w-full ">
                <label htmlFor="confirm_password" className="leading-7 ">Confirm Password:</label>
                <input onChange={handleChange} required type="password" id="confirm_password" name="confirmPassword" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="p-2 pt-4 w-full">
                <button className=" w-full border-0 px-8 py-2 rounded text-lg ">Create Account</button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup