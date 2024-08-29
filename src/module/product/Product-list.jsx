

import Product_category from 'components/Product_category.jsx'
import React, { useEffect, useState } from 'react';
import Producthomepage from 'components/product/Product_home.jsx'
import Loader from 'components/Loader.jsx';


function Product_list() {

  const [products, SetProducts] = useState([])
  const [prdloader, SetPrdloader]=useState('ture')
  useEffect(()=>{
      const fetchProducts = async()=>{
          const response = await fetch("https://fakestoreapi.com/products/")
          const data = await response.json()
          SetProducts(data)
          SetPrdloader(false)
      }
      fetchProducts()
  },[]);
  if(prdloader){
    return(
      <div><Loader/></div>
    )
  }
  return (
    <div className='product-list-component'>
      
      <Product_category/>
      <h1 className="sm:text-3xl text-center text-2xl font-medium title-font text-gray-900">Our Products</h1>
            <Producthomepage products={products} />
    </div>
  )
}

export default Product_list
