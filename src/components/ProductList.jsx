import React from "react";
import ProductItem from "./ProductItem";
import { useState, useEffect } from "react";
import axios from "axios";
import  '../assets/styles/productItem.css'

export default function ProductList() {
  const [productList, setProductList] = useState([]);
  const fetchApi = async () => {
    try {
      const response = await axios("http://103.252.95.181:8000/products/");
      // console.log(response);
      const data = response.data;
      setProductList(data);
      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="product-list">
        {productList.map((product) => {
          return (
            <ProductItem id={product.id} productName={product.product_name} price = {product.price} images={product.images}/>
          )
        })}
    </div>
  );
}
