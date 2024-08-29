import React, { createContext, useState, useContext } from 'react';

const WishlistContext = createContext();

export const useWishlist = () => {
    return useContext(WishlistContext);
};

    export const WishlistProvider = ({ children }) => {
        const [wishlist, setWishlist] = useState(() => {
            const savedWishlist = localStorage.getItem('wishlist');
            return savedWishlist ? JSON.parse(savedWishlist) : [];
        });

    const addToWishlist = (product , setWishliststate) => {
        console.log("useWishlist");
        console.log(setWishliststate)
        setWishliststate(true)
        console.log(setWishliststate)
        setWishlist((prevWishlist) => {
            const updatedWishlist = !prevWishlist.find((item) => item.id === product.id)
                ? [...prevWishlist, product]
                : prevWishlist;
            localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
            return updatedWishlist;
        });
    };

    const removeFromWishlist = (productId ) => {
        console.log(productId)
        console.log("set wish list state")
        setWishlist((prevWishlist) => {
            
            const updatedWishlist = prevWishlist.filter(item => item.id !== productId);
            localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
            return updatedWishlist;
        });
    };

    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};
