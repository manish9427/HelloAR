import React, { useEffect, useState } from "react";
import "./fakeStore.scss";

const style = {
  padding: "30px",
  boxshadow: "0px 0px 10px black",
  margin: "10px auto",
  width: "300px",
  alignItems: "center",
};

const FakeStore = () => {
  const api = "https://fakestoreapi.com/products/1";
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);
  return data ? (
    <div className="mainDiv">
      <h1>Fake Store </h1>
      <p>{data.title}</p>
      <img src={data.image} />
      <p>{"₹" + data.price}</p>
    </div>
  ) : (
    <h1>loading.....</h1>
  );
};

export default FakeStore;
