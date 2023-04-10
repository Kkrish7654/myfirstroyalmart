import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';

const ProductCard = () => {
    const products = useSelector((state) => state.allProducts.products);
    console.log(products);

    const len = products.length;
    let renderList;
    if (products && Array.isArray(products)) {
        renderList = products.map((item,index) => {
            return(
                <div key={index} className='product-card'>
                <Link to={`/product/${item.id}`}>
                    <div className='image-div'>
                        <img src={item.image} alt={item.title} />
                    </div>
                    <div className='details'>  
                        <h4>{item.title}</h4>
                        <p>${item.price}</p>
                        <button className='add-cart-btn'>Add to cart</button>
                    </div>
                </Link>
                </div>
            )
        });
    } 
    return <>
        {renderList}
    </>
}

export default ProductCard
