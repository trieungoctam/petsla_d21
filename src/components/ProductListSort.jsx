import React from "react";
import productListSort from "../assets/styles/productListSort.css";
import { useDispatch } from "react-redux";
import { productListActions } from "../store/productListSlicer";
const ProductListSort = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    switch (event.target.value) {
      case "Relevance":
        dispatch(productListActions.sortProductsByRelevance());
        break;
      case "Name: A to Z":
        dispatch(productListActions.sortProductsFromAtoZ());
        break;
      case "Name: Z to A":
        dispatch(productListActions.sortProductsFromZtoA());
        break;
      case "Price: Low to High":
        dispatch(productListActions.sortProductsByPriceFromLow());
        break;
      case "Price: High to Low":
        dispatch(productListActions.sortProductsByPriceFromHigh());
        break;
      default:
        break;
    }
  };
  return (
    <div className="product-list-sort">
      <label className="label-sort-product" htmlFor="sort-product">
        Sort by:
      </label>
      <select
        name="sort-product"
        id="select-sort-product"
        className="select-sort-product"
        onChange={handleChange}
      >
        <option className="option-sort-product" value="Relevance">
          Relevance
        </option>
        <option className="option-sort-product" value="Name: A to Z">
          Name: A to Z
        </option>
        <option className="option-sort-product" value="Name: Z to A">
          Name: Z to A
        </option>
        <option className="option-sort-product" value="Price: Low to High">
          Price: Low to High
        </option>
        <option className="option-sort-product" value="Price: High to Low">
          Price: High to Low
        </option>
      </select>
    </div>
  );
};

export default ProductListSort;
