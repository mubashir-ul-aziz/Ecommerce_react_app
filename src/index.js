import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MyContextProvider } from 'components/context/Context.jsx';
import { WishlistProvider } from 'components/context/WishlistContext.jsx';

 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <WishlistProvider>
  <MyContextProvider>
  <App />
  </MyContextProvider>
  </WishlistProvider>
);





