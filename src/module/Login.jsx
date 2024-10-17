
import React , {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Headercom from 'components/header/Headercom.jsx'

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const storedUser = JSON.parse(localStorage.getItem('users'));
  const navigation = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    let storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    if (!Array.isArray(storedUsers)) {
      console.log("Stored users data is not an array, converting to array...");
      storedUsers = [storedUsers];
  } else {
      console.log("Stored users data is already an array");
  }
  const matchedUser = storedUsers.find(user => user.email === email && user.password === password);
    if (matchedUser && matchedUser.email === email && matchedUser.password === password) {
        // alert('Login successful!');
        localStorage.setItem("loggedIn", JSON.stringify(true));
        localStorage.setItem('current_user', JSON.stringify(matchedUser));
        navigation('/dashboard');
    } else {
        alert('Invalid email or password');
    }

  };
  return (
    <div className=" login-component ">
      <div className="text-gray-600 relative ">
        <div className=" mx-auto pb-20 py-16 ">

          <div className="lg:w-2/5 md:w-2/3 mx-auto">
          <div className=" mb-4 text-center mb-4">
            <h1 className=" sm:text-3xl text-gray-900 mb-2 ">Login</h1>
            <p className="">Please LogIn to <b>Access</b> your Account.</p>
          </div>
          <div className=" mb-4 text-center mb-4 justify-between flex">
            <p> Login Email: <b>{storedUser?storedUser[0].email:''}</b></p>
            <p> Login Password: <b>{storedUser?storedUser[0].password:''}</b></p>
          </div>
            <form className=" form-body " onSubmit={handleSubmit} >
                <div className="relative p-2">
                  <label htmlFor="email" className="leading-7 ">Email:</label>
                  <input onChange={(e) => setEmail(e.target.value)} required type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300  focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>

                <div className="relative p-2">
                  <label htmlFor="password" className="leading-7 ">Password:</label>
                  <input onChange={(e) => setPassword(e.target.value)} required type="password" id="password" name="password" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>


              {/* <div className="flex items-center p-2 ">
                  <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="link-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Guest Login <span class="text-blue-600 dark:text-blue-500 hover:underline">Do not have Crediential Use Guest LogIn.</span>.</label>
              </div> */}

              <div className="p-2 pt-2 w-full">
                <button className=" w-full border-0 px-8 py-2 rounded text-lg ">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;