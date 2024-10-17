
import Feature_card from 'components/Feature.jsx'
import React, { useEffect, useState } from 'react';
import Loader from 'components/Loader.jsx';

function Product_category() {
    const [product_cat, setProduct_cat] = useState(null); 
    const [loading, setLoading] = useState(true); 
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/categories`);
                const data = await response.json();
                setProduct_cat(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };
        fetchProduct();
    }, []);

if(loading){
  return(
    <div><Loader/></div>
  )
}
  return (
    <div className='product-category-component'>
      
      <Feature_card cards={product_cat}/>
      
    </div>
  )
}

export default Product_category
