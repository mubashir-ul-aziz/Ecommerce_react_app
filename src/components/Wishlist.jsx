import React, { useEffect, useState, useRef } from "react";
// import { useWishlist } from "components/context/WishlistContext.jsx";
import { useWishlist } from "hooks/use-wishlist";
import { Link } from "react-router-dom";

function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();

  useEffect(() => {
  }, [wishlist]);

  return (
    <div className=" wishlist-component ">
      <div className=" text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap bg-gray-200 border-t-0 border-l-0 border-2 border-gray-200 ">
            {wishlist.length > 0 ? (
              wishlist.map((product, index) => {
                const { title, price } = product;
                // style={{ width: 'calc(25% - 1.6px)' }}
                return (
                  <div
                    key={index}
                    className=" border-r-0 border-b-0 border-2 border-gray-200 cursor-pointer bg-white lg:w-1/4 md:w-1/2 p-4 w-full "
                  >
                    <Link to={`/product/${product.id}`} className=" block ">
                      <div className="block relative h-48 rounded overflow-hidden">
                        <img
                          alt={title}
                          className=" object-cove object-contain rounded-lg object-center w-full h-full block"
                          src={product.image}
                        />
                      </div>
                      <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase ">
                          {product.category}
                        </h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">
                          {title}
                        </h2>
                      </div>
                    </Link>{" "}
                    <div className=" cursor-auto flex items-center justify-between ">
                      {" "}
                      <p className="mt-1 font-bold text-md ">PKR={price}/-</p>
                      <button onClick={() => removeFromWishlist(product.id)}>
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                        >
                          <path
                            d="M0 0 C8.58 0 17.16 0 26 0 C25.690625 3.609375 25.38125 7.21875 25.0625 10.9375 C24.96718994 12.07695068 24.87187988 13.21640137 24.77368164 14.39038086 C24.65561157 15.72661499 24.65561157 15.72661499 24.53515625 17.08984375 C24.456604 18.00628662 24.37805176 18.92272949 24.29711914 19.86694336 C24 22 24 22 23 23 C21.52347336 23.09880797 20.04232764 23.13079245 18.5625 23.1328125 C17.22058594 23.13474609 17.22058594 23.13474609 15.8515625 23.13671875 C14.91054688 23.13285156 13.96953125 23.12898438 13 23.125 C11.58847656 23.13080078 11.58847656 23.13080078 10.1484375 23.13671875 C9.25382813 23.13542969 8.35921875 23.13414063 7.4375 23.1328125 C6.61121094 23.13168457 5.78492188 23.13055664 4.93359375 23.12939453 C3 23 3 23 2 22 C1.77285996 20.36933234 1.60544914 18.73023997 1.46484375 17.08984375 C1.38613037 16.199021 1.30741699 15.30819824 1.22631836 14.39038086 C1.1310083 13.25093018 1.03569824 12.11147949 0.9375 10.9375 C0.628125 7.328125 0.31875 3.71875 0 0 Z M7 3 C7 5.97 7 8.94 7 12 C7.33 12 7.66 12 8 12 C8 9.03 8 6.06 8 3 C7.67 3 7.34 3 7 3 Z M18 3 C18 5.97 18 8.94 18 12 C18.33 12 18.66 12 19 12 C19 9.03 19 6.06 19 3 C18.67 3 18.34 3 18 3 Z M8 14 C9 18 9 18 9 18 Z M17 14 C18 18 18 18 18 18 Z "
                            fill="#000000"
                            transform="translate(3,9)"
                          />
                          <path
                            d="M0 0 C3.96 0 7.92 0 12 0 C12.33 0.99 12.66 1.98 13 3 C14.423125 2.9071875 14.423125 2.9071875 15.875 2.8125 C16.90625 2.874375 17.9375 2.93625 19 3 C19.99 4.485 19.99 4.485 21 6 C20.67 6.66 20.34 7.32 20 8 C10.76 8 1.52 8 -8 8 C-8.33 7.01 -8.66 6.02 -9 5 C-7 3 -7 3 -3.875 2.875 C-2.92625 2.91625 -1.9775 2.9575 -1 3 C-0.67 2.01 -0.34 1.02 0 0 Z M2 2 C2 2.33 2 2.66 2 3 C4.64 3 7.28 3 10 3 C10 2.67 10 2.34 10 2 C7.36 2 4.72 2 2 2 Z "
                            fill="#000000"
                            transform="translate(10,0)"
                          />
                        </svg>
                      </button>
                      {/* <div
                      className="cursor-pointer"
                      onClick={() =>
                        removeFromWishlist(product.id)
                      }
                    >
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                      >
                        <path
                          d="M0 0 C8.58 0 17.16 0 26 0 C25.690625 3.609375 25.38125 7.21875 25.0625 10.9375 C24.96718994 12.07695068 24.87187988 13.21640137 24.77368164 14.39038086 C24.65561157 15.72661499 24.65561157 15.72661499 24.53515625 17.08984375 C24.456604 18.00628662 24.37805176 18.92272949 24.29711914 19.86694336 C24 22 24 22 23 23 C21.52347336 23.09880797 20.04232764 23.13079245 18.5625 23.1328125 C17.22058594 23.13474609 17.22058594 23.13474609 15.8515625 23.13671875 C14.91054688 23.13285156 13.96953125 23.12898438 13 23.125 C11.58847656 23.13080078 11.58847656 23.13080078 10.1484375 23.13671875 C9.25382813 23.13542969 8.35921875 23.13414063 7.4375 23.1328125 C6.61121094 23.13168457 5.78492188 23.13055664 4.93359375 23.12939453 C3 23 3 23 2 22 C1.77285996 20.36933234 1.60544914 18.73023997 1.46484375 17.08984375 C1.38613037 16.199021 1.30741699 15.30819824 1.22631836 14.39038086 C1.1310083 13.25093018 1.03569824 12.11147949 0.9375 10.9375 C0.628125 7.328125 0.31875 3.71875 0 0 Z M7 3 C7 5.97 7 8.94 7 12 C7.33 12 7.66 12 8 12 C8 9.03 8 6.06 8 3 C7.67 3 7.34 3 7 3 Z M18 3 C18 5.97 18 8.94 18 12 C18.33 12 18.66 12 19 12 C19 9.03 19 6.06 19 3 C18.67 3 18.34 3 18 3 Z M8 14 C9 18 9 18 9 18 Z M17 14 C18 18 18 18 18 18 Z "
                          fill="#000000"
                          transform="translate(3,9)"
                        />
                        <path
                          d="M0 0 C3.96 0 7.92 0 12 0 C12.33 0.99 12.66 1.98 13 3 C14.423125 2.9071875 14.423125 2.9071875 15.875 2.8125 C16.90625 2.874375 17.9375 2.93625 19 3 C19.99 4.485 19.99 4.485 21 6 C20.67 6.66 20.34 7.32 20 8 C10.76 8 1.52 8 -8 8 C-8.33 7.01 -8.66 6.02 -9 5 C-7 3 -7 3 -3.875 2.875 C-2.92625 2.91625 -1.9775 2.9575 -1 3 C-0.67 2.01 -0.34 1.02 0 0 Z M2 2 C2 2.33 2 2.66 2 3 C4.64 3 7.28 3 10 3 C10 2.67 10 2.34 10 2 C7.36 2 4.72 2 2 2 Z "
                          fill="#000000"
                          transform="translate(10,0)"
                        />
                      </svg>
                    </div> */}
                    </div>
                  </div>
                );
              })
            ) : (
              <p className=" text-center w-full ">Your wishlist is empty.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
