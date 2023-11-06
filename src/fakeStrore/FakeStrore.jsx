import React, { useEffect } from "react";

const FakeStore = () => {
  useEffect(
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((data) => console.log(data))
  );
  return <div>productPage</div>;
};

export default FakeStore;
