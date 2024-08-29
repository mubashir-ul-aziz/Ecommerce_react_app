import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Logout(btnstyle) {
  const navigation = useNavigate();

  const handleLogout = () => {
    // Remove user-related data from localStorage
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("current_user");
    navigation("/");
  };
  const handleLogin = () => {
    navigation("/login");
  };
  const button_navigation = [
    { name: "Log Out", path: "/", className: "mr-2" }
  ];

  const link_navigation = [
    { name: "Dashboard", path: "/dashboard", className: "mr-2" },
    { name: "Test", path: "/test", className: "mr-2" },
  ];

  const logout_navigation = [
    { name: "Log In", path: "/login", className: "mr-2" },
    { name: "Register", path: "/signup", className: "mr-2" },
  ];

  const check_login = JSON.parse(localStorage.getItem("loggedIn"));
  const location = useLocation();
  const { pathname } = useLocation();
  // console.log(pathname, "pathname");
  return (
    <>

      {check_login ? (
        <>
          {link_navigation.map((navigate, index) => {
          return   pathname !== navigate.path && (
            <Link
              key={index}
              to={navigate.path}
              className={`${navigate.className} button inline-flex items-center text-white border-0 py-2 px-4 focus:outline-none rounded text-base mt-4 md:mt-0`}
            >
              {navigate.name}
            </Link>
            );
          })}

          {button_navigation.map((navigation, index) => (
            <button
              key={index}
              onClick={handleLogout}
              className={` ${navigation.className} button inline-flex items-center text-white border-0 py-2 px-4 focus:outline-none rounded text-base mt-4 md:mt-0`}
            >
              {navigation.name}
            </button>
          ))}
        </>
      ) : (
        <>
          {logout_navigation.map((logout_navigation, index) => (
            <Link
              key={index}
              to={logout_navigation.path}
              className={` ${logout_navigation.className} button inline-flex items-center text-white border-0 py-2 px-4 focus:outline-none rounded text-base mt-4 md:mt-0`}
            >
              {logout_navigation.name}
            </Link>
          ))}
        </>
      )}
    </>
  );
}

export default Logout;
