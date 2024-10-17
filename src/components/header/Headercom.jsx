import { Link } from "react-router-dom";
import React, {useState, useEffect} from "react";
import Themeoption from "components/theme-option/Theme-option";
import { MyContext } from 'components/context/Context.jsx';
import Testtext from 'components/Testtext.jsx'
import Logout from 'module/Logout.jsx'
import { useMemo } from 'react';
import { useContext } from 'react';
import { useLocation } from "react-router-dom";
import Shippingmethod from 'components/Shippingmethod.jsx'

const button_navigation=[
  // {name: "Go to Cart ",path: "/cart", className:"mr-2"},
  // {name: "Login ",path: "/login", className:"mr-2"},
  // {name: "Sign Up ",path: "/signup", className:"mr-2"},
  // {name: "User Profile",path: "/userprofile",className:"mr-2"},
  // {component: <Logout/>}
  { component: <Shippingmethod svg={false} dynmc_class=" mr-2 button inline-flex items-center text-white border-0 py-2 px-4 focus:outline-none rounded text-base mt-4 md:mt-0 " />},
  {component: <Logout btnstyle='btnfalse' />} 
]


function Headercom({ onLoginClick  }) {
//   const check_login = JSON.parse(localStorage.getItem("loggedIn"))



//   const login_navigation = check_login ? (
//     [
//       {name: "Go to Cart true ",path: "/cart", className:"mr-2"},
//       {component: <Logout btnstyle='btnfalse' />} 
//     ]
//   ):(
//     [
//       {name: "Go to Cart false ",path: "/cart", className:"mr-2"},
//       {name: "Login form ",path: "/login", className:"mr-2"},
//       {name: "Sign Up ",path: "/signup", className:"mr-2"},
//     ]
//   ) 
const navigation = [
  {name: "Home",path: "/",},
  {name: "Product",path: "/product",},
  {name: "Wish List", path: "/wishlist" },
  {name: "About",path: "/about",},
  {name: "Contact",path: "/contact",}
];

const { checked } = useContext(MyContext);
const themestickyheader = checked ? " nav-bar-sticky " : " ";

const location = useLocation();
  const { pathname } = useLocation();
  return (
    <div className={`navbar_header navbar_component ${themestickyheader} ${checked?" nav-bar-sticky ":"" }`}>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to="/"
            className="flex title-font font-medium items-center ext-gray-900 mb-4 md:mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Ecommerce </span>
          </Link>
          <nav className=" custom-main-nav md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            {navigation.map((navigation, index) => {
               if (navigation.component) {
                console.log("component ");
                // Handle the component type
                return <div key={index}>{navigation.component}</div>;
              } else {
              return (
                <Link to={navigation.path} key={index} className="mr-5 over:text-gray-900" >
                  {navigation.name}
                </Link>
              );}
            })}
          </nav>    
        <div className="left-side-buttons flex">




        {button_navigation.map((navigation, index) => {            
  return navigation.component ? (
    <div className=" header-button-sty " key={index}>{navigation.component}</div>
  ) : (
    <Link 
      to={navigation.path} 
      key={index}
      className={`${navigation.className} button inline-flex items-center text-white border-0 py-2 px-4 focus:outline-none rounded text-base mt-4 md:mt-0`}
    >
      {navigation.name} 
      {index === 0 && (
        <svg 
          fill="none" 
          stroke="currentColor" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          className="w-4 h-4 ml-1" 
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      )}
    </Link>
  );
})}

          </div>
        </div>
      </header>
    </div>
  );
}

export default Headercom;

