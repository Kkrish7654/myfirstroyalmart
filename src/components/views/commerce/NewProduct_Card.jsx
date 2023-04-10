import React from "react";
import commerce from "./productsBackend";
import { useState, useEffect } from "react";

const NewProduct_Card = () => {
  const [products, setProduct] = useState([]); // product is an array of objects

  useEffect(() => {
    commerce.products
      .list()
      .then((response) => {
        setProduct(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(products);

  return (
    <div className="new-product-card">
      {products.map((product) => (
        <div key={product.id}>
          <div className="image-div">
            <img src={product.image.url} alt={product.name} />
          </div>
          <div className="product-details">
            <h4>{product.name}</h4>
            <p>{product.price.formatted_with_symbol}</p>
            <button className="add-cart-btn">Add to cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewProduct_Card;
