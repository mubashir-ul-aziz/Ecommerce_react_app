import Cart_quentity from "components/Cart_quentity.jsx";
import React, { useEffect, useState, useRef } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Loader from "components/Loader.jsx";
import { useWishlist } from "hooks/use-wishlist";

function Product({ productId }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const buttonRef = useRef(null);

   // Destructure from useWishlist hook first
   const { addToWishlist, removeFromWishlist, isProductInWishlist, toggleWishlist } = useWishlist();

   // Now calculate inWishlist
   const inWishlist = product ? isProductInWishlist(product.id) : false;
 
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (!product) return; 
    const upcart = JSON.parse(localStorage.getItem("cart")) || [];
    const upisProductExist = upcart.find((item) => item.id === product.id);

    if (upisProductExist) {
      setQuantity(upisProductExist.quantity);
    }
  }, [product]);

  const handleCart = (product, redirect) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const isProductExist = cart.find((item) => item.id === product.id);
    
    if (isProductExist) {
       const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: quantity,
          };
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      localStorage.setItem(
        "cart",
        JSON.stringify([...cart, { ...product, quantity: 1 }])
      );
    }
    if (redirect) {
      navigate("/cart");
    }
  };

  const updateQuantity = (productId, newQuantity) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setQuantity(newQuantity);
  };

  const updateWishListClassNames = () => {
    const buttonElement = buttonRef.current;
    buttonElement.classList.toggle("added-to-wish-list");
  };

  const updateWishList = () => {
    const buttonElement = buttonRef.current;
    const isClassExist = buttonElement.classList.contains('added-to-wish-list');
    isClassExist ? removeFromWishlist(product) : addToWishlist(product);
    buttonElement.classList.toggle("added-to-wish-list");
  };

  
  if (product === null) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (Object.keys(product).length === 0) {
    return <div>Product not found.</div>;
  }

  return (
    <>
      <section className="ext-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-12 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className=" product-detail-img lg:w-1/2 w-full object-cover object-center rounded"
              src={product.image}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {product.category}
              </h2>
              <h1 className="ext-gray-900 text-3xl title-font font-medium mb-1">
                {product.title}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center rating ">
                  {[...Array(Math.round(product.rating.rate))].map((_, i) => (
                    <svg
                      key={i}
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                  ))}
                  <span className="text-gray-600 ml-3">
                    {product.rating.count} Reviews
                  </span>
                </span>
              </div>
              <p className="leading-relaxed">{product.description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="border relative rounded ">
                    <select className="rounded appearance-none py-2 ocus:outline-none ocus:ring-2 ocus:ring-indigo-200 ocus:border-indigo-500 ext-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <span className=" font-medium ml-auto text-2xl ">
                  ${product.price},${(product.price * quantity).toFixed(2)}
                </span>
              </div>
              <div className="flex gap-4 ">
                {
                  <Cart_quentity productPrice={product.price} productId={product.id}
                  initialQuantity={quantity} updateQuantity={updateQuantity} />
                }
                <button
                  className="flex border-0 py-2 px-6 rounded"
                  onClick={() => handleCart(product, true)}
                >
                  {" "}
                  Buy Now{" "}
                </button>
                <button
                  className="flex border-0 py-2 px-6 rounded"
                  onClick={() => handleCart(product)}
                >
                  {" "}
                  Add to Cart{" "}
                </button>
                <button
                  ref={buttonRef}
                  onClick={() => toggleWishlist(product)}
                  className={` ${inWishlist ? 'added-to-wishlist' : ''} rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 `}
                >
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Product;
