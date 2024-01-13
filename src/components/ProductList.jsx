import React from "react";
import ProductItem from "./ProductItem";
import {  useEffect } from "react";
import  '../assets/styles/productItem.css'
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "../store/productListSlicer";

export default function ProductList() {

  const {productList, isLoading}  = useSelector((store) => store.productList);
  const {currentPage, postsPerPage, pageNumbers} = useSelector((store) => store.pagination);
  // get data
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductList(''));
  }, []);

  //get current posts to display
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = productList.slice(indexOfFirstPost, indexOfLastPost);
  console.log(productList);
  console.log(currentPosts);

  if (isLoading) {
    return (
      <div>isLoading</div>
    )
  }
  return (
    <div className="product-list">
        {currentPosts.map((product) => {
          return (
            <ProductItem id={product.id} productName={product.product_name} price = {product.price} images={product.images}/>
          )
        })}
        
    </div>
  );
}

