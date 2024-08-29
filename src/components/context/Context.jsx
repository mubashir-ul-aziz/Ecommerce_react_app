

import React, { createContext, useState } from 'react';
export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);
  const [checked, setChecked] = useState(true);

  const handleChangeTheme = () => {
    setTheme(!theme);
  };

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <MyContext.Provider value={{ theme, checked, handleChangeTheme, handleChange }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
