import React, { useEffect, useState } from "react";
import Producthomepage from "components/product/Product_home.jsx";
import Product_category from "components/Product_category.jsx";
import Staticcardpage from "components/Staticcard.jsx";
import Themeoption_page from "components/theme-option/Theme-option.jsx";
import Loader from 'components/Loader.jsx';


function Home() {

  const [products, SetProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products/");
      const data = await response.json();
      SetProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Before they sold out
              <br className="hidden lg:inline-block" />
              readymade gluten
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white g-indigo-500 border-0 py-2 px-4 focus:outline-none over:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
        </div>
      </section>
      {/* <h2 className='text-6xl font-bold text-center mb-20 '>Products</h2> */}
      <Product_category />
      <div className="flex flex-col text-center w-full ">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
          Products
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          Most Popular Products
        </h1>
      </div>
      {products.length > 0 ? (
        <Producthomepage products={products} />
      ) : (
        <div> <Loader/> </div>
      )}
      <Staticcardpage />
      <Themeoption_page
      />
    </div>
  );
}

export default Home;
