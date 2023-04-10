import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { addToCart } from '../../../constant/ProductsAction';

const ProductCard = () => {
    const products = useSelector((state) => state.allProducts.products);
    console.log(products);

    const dispatch = useDispatch();
    const add_to_cart = (item) => {
       // dispatch(addToCart(item));
       console.log("ok");
    }

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
                    </Link>
                    <div className='details'>  
                        <h4>{item.title}</h4>
                        <p>${item.price}</p>
                        <button className='add-cart-btn' onClick={() => add_to_cart(item)}>Add to cart</button>
                    </div>
                </div>
            )
        });
    } 
    return <>
        {renderList}
    </>
}

export default ProductCard
