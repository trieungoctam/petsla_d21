import React from "react";
import ProductItem from "./ProductItem";
import {  useEffect } from "react";

import  '../assets/styles/productItem.css'
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "../store/productListSlicer";

export default function ProductList() {

  const {productList, isLoading}  = useSelector((store) => store.productList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductList(''));
  }, []);

  if (isLoading) {
    return (
      <div>isLoading</div>
    )
  }
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

