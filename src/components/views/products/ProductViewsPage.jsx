import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { removeSelectedProducts, selectedProducts } from "../../../constant/ProductsAction";
const ProductViewsPage = () => {
  const product = useSelector((state) => state.product);
  const [isloading, setIsLoading] = useState(true);
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log("reducer ", product);

  const fetchProductDetail = async () => {
    const response = await fetch(
      `https://fakestoreapi.com/products/${productId}`
    );
    const product = await response.json();
    setIsLoading(false);
    console.log(product);
    dispatch(selectedProducts(product));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    return () => {
      dispatch(removeSelectedProducts());
    };
  }, [productId]);

  return (
    <div className="product-details">
      {
        isloading ? <h1>Loading...</h1> :
        product && product.title ? (
        <div className="product-card">
          <div className="product-image">
            <img src={product.image} alt="Product image" />
          </div>
          <div className="product-info">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p className="price">${product.price}</p>
            <button className="btn add-btn">Add to Cart</button>
            <button className="btn buy-btn">Buy now</button>
          </div>
        </div>
      ) : (
        <div>
          <h1>Product not found</h1>
        </div>
      )}
    </div>
  );
};

export default ProductViewsPage;
