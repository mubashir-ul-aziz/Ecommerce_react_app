
// import { useState, useEffect } from 'react';
// export function useWishlist() {
//   const getSavedWishList = () => {
//     const savedWishlist = localStorage.getItem('wishlist');
//     return savedWishlist ? JSON.parse(savedWishlist) : [];
//   }

//   const addToWishlist = (product) => {
//     const prevWishList = getSavedWishList();
//     const updatedWishList = prevWishList ? [...prevWishList, product] : [product];
//     localStorage.setItem("wishlist", JSON.stringify(updatedWishList));
//   };

//   const removeFromWishlist = (productId) => {
//     const prevWishList = getSavedWishList();
//     const updatedWishList = prevWishList.filter(
//       (item) => item.id !== productId
//     );
//     localStorage.setItem("wishlist", JSON.stringify(updatedWishList));
//   };

//   return {
//     addToWishlist,
//     removeFromWishlist,
//   };
// }



import { useState, useEffect } from 'react';

export function useWishlist() {
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  const isProductInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  const addToWishlist = (product) => {
    if (!isProductInWishlist(product.id)) {
      const updatedWishlist = [...wishlist, product];
      setWishlist(updatedWishlist);
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    }
  };

  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  const toggleWishlist = (product) => {
    if (isProductInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    toggleWishlist,
    isProductInWishlist,
  };
}
