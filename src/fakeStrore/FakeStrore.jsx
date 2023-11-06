import React, { useState, useEffect } from "react";

const FakeStore = () => {
  const [product, setProduct] = useState(productData);
  const [productData, setProductData] = useState(null);
  useEffect(
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);
        console.log(data);
      })
  );
  return (
    <div>
      <h1>{product.name}</h1>
    </div>
  );
};

export default FakeStore;
