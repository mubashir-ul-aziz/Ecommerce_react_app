
import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Headercom from "./components/header/Headercom.jsx";
import Homepage from "./module/home/Home.jsx";
import Footersite from "./components/Footer.jsx";
import Productd from "./module/product/Product.jsx";
import Product_lst from "module/product/Product-list.jsx";
import Category_product from "module/product/Category.jsx";
import Prd_cart from "./module/product/cart.jsx";
import Checkout from "./module/product/Checkout.jsx";
import { MyContext } from 'components/context/Context.jsx';
import Wishlist from 'components/Wishlist.jsx';
import Login from 'module/Login.jsx';
import Signup from 'module/Signup.jsx';
import About from 'module/About.jsx';
import Contact from 'module/contact.jsx';
import Blog from 'module/blog.jsx';
import Userprofile from 'module/Userprofile.jsx';
import Popup from 'components/theme-option/Popup.jsx';
import UsePageTitle from 'hooks/UsePageTitle.js';
import AdminPanelcom from 'module/AdminPanel.jsx'
import Login_header from 'components/header/Login-header.jsx'
import Createcoppen from "components/Createcoppen.jsx";
import Shippingmethod from 'components/Shippingmethod.jsx'
import Order from "components/Order.jsx";
import History from 'components/History.jsx'
import Users from 'components/Users.jsx'

function App() {
  const { theme } = useContext(MyContext);
   
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogin = () => {
    setIsLoggedIn(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(true);
  };

  const check_login = JSON.parse(localStorage.getItem("loggedIn"))

  const path_routes = [
    { path: "/", element: <Homepage /> },
    { path: "/product/:id", element: <Productd /> },
    { path: "/product/", element: <Product_lst /> },
    { path: "/category/:name", element: <Category_product /> },
    { path: "/cart", element: <Prd_cart /> },
    { path: "/checkout", element: <Checkout /> },
    { path: "/wishlist", element: <Wishlist /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    { path: "/contact", element: <Contact /> },
    { path: "/about", element: <About /> },
    { path: "/blog", element: <Blog /> },
    { path: "/userprofile", element: <Userprofile /> },
    { path: '/dashboard', element: <AdminPanelcom/>},
    { path: '/createcoppen', element: <Createcoppen/>},
    { path: '/shippingmethod', element: <Shippingmethod/>},
    { path: '/order', element: <Order/>},
    { path: '/history', element: <History/>},
    { path: '/users', element: <Users/>}
  ];

  const login_path_routes = [
    { path: "/", element: <Homepage /> },
    { path: "/product/:id", element: <Productd /> },
    { path: "/product/", element: <Product_lst /> },
    { path: "/category/:name", element: <Category_product /> },
    { path: "/cart", element: <Prd_cart /> },
    { path: "/checkout", element: <Checkout /> },
    { path: "/wishlist", element: <Wishlist /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    { path: "/contact", element: <Contact /> },
    { path: "/about", element: <About /> },
    { path: "/blog", element: <Blog /> },
    { path: "/userprofile", element: <Userprofile /> },
    { path: '/dashboard', element: <AdminPanelcom/>}
  ];


  return (
    <div className={`App ${theme ? "black-theme" : "white-theme"}`}>
      {isLoggedIn ? (
        <>
      <Router>
        <UsePageTitle/>
        {/* {check_login?(<Headercom />):("fa")} */}
        <Headercom /> 
        <Routes>
          {path_routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} exact />
          ))}
        </Routes>
        <Footersite />
      </Router>
        </> ) : ( <>
          <Router>
        <UsePageTitle/>
        <Login_header/>{/* Pass the function to Header */}
        <Routes>
          {login_path_routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} exact />
          ))}
        </Routes>

      </Router>
        </>
      )}
 <button onClick={handleLogin}>Login</button>
 <button onClick={handleLogout}>Logout</button> 
    </div>
  );
}

export default App;
