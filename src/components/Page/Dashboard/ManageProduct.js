import React, { useEffect, useState } from "react";
import ManageCard from "./ManageCard";
const ManageProduct = () => {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    fetch("https://obscure-savannah-69297.herokuapp.com/parts")
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);
  return (
    <div className="bg-gray-100 py-8 md:px-12">
      <h1 className="text-center text-3xl py-16 underline underline-offset-4">
        Manage Your All Products
      </h1>
      <div className=" grid grid-cols-1 sm:mx-3 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {parts.map((part) => (
          <ManageCard part={part}></ManageCard>
        ))}
      </div>
    </div>
  );
};

export default ManageProduct;
