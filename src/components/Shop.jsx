import React from "react";
import ProductList from "./ProductList";
import ProductListSort from "./ProductListSort";
import ProductListPage from "./ProductListPage";
export const Shop = () => {
  return (
    <div>
      <div className="grid wide">
        <ProductListSort/>
        <ProductList />
        <ProductListPage/>
      </div>
      
    </div>
  );
};
export default Shop;
