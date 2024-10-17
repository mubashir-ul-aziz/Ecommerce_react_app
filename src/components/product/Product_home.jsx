
import { Link } from 'react-router-dom';
import React from 'react'

function Product_home({products = []}) {
  return (
    <div className='card-component'>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap bg-gray-200 border-t-0 border-l-0 border-2 border-gray-200 ">

      {
      products.map((product, index)=>{
        const {title, price} = product;
        // style={{ width: 'calc(25% - 1.6px)' }} 
        return(
          <Link to={`/product/${product.id}`} key={index} className=" border-r-0 border-b-0 border-2 border-gray-200 cursor-pointer bg-white lg:w-1/4 md:w-1/2 p-4 w-full " >
            <div className="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" className=" object-contain rounded-lg object-center w-full h-full block" src={product.image}/>
            </div>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase ">{product.category}</h3>
              <h2 className=" min-h-[60px] text-over-line text-gray-900 title-font text-lg font-medium">{title}</h2>
              <p className="mt-1 font-bold text-md ">PKR={price}/-</p>
            </div>
          </Link>
        )
      })
      }

    </div>
  </div>
</section>
    </div>
  )
}

export default Product_home
