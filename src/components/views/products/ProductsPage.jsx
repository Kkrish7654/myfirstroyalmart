import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../../constant/ProductsAction";
import ProductCard from "./ProductCard";

const ProductsPage = () => {
  //const [products, getProducts] = useState([]);
  const products = useSelector((state) => state.allProducts.products);
  const [isloading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      //console.log(data);
     // getProducts(data);
      setIsLoading(false);
      dispatch(setProducts(data));
    };
    fetchProducts();
  }, [dispatch]);

  // get passed search value from navbar
  const len = products.length;
  // count products
  
  return (
    <div className="products-section">
      <h1>Products</h1>
      <div className="top-products">
      <p>{len} products available</p>
        <div className="pro">
          {
            isloading ? <h1>Loading...</h1> : <ProductCard />
          }
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
