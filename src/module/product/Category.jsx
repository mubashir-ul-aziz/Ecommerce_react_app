
import React, { useEffect, useState } from 'react'
import Category_card from 'components/product/Product_home.jsx' 
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader.jsx';


function Category_product() {
  const { name } = useParams()
  const [products, SetProducts] = useState([])
  const [loading, setLoading] = useState(true); 
        useEffect(()=>{
            const fetchProducts = async()=>{
              setLoading(true); 
              try {
                const response = await fetch(`https://fakestoreapi.com/products/category/${name}`)
                const data = await response.json()
                SetProducts(data)
                setLoading(false); // End loading
            } catch(errorrr) {
            console.error("Failed to fetch products:", errorrr);
            
            } finally {
              // setLoading(false); // End loading
            }}
            fetchProducts();
        },[]);
        if (loading) {
          return <Loader />;
        }
  return (
    <div className='product-category-component'>
      <h1 className="sm:text-3xl text-2xl font-medium text-center mt-10 title-font text-gray-900"> Category Related Product </h1>
      <Category_card products={products}/>
    </div>
  )
}

export default Category_product












