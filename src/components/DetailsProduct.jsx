import React from "react";
import "../assets/styles/detailsProduct.css";
import { useSelector, useDispatch } from "react-redux";
import { getProductList } from "../store/productListSlicer";
import { useEffect } from "react";

export default function DetailsProduct() {
  const { product } = useSelector((store) => store.product);
  const {productList, isLoading}  = useSelector((store) => store.productList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductList(''));
  }, []);
  console.log(productList);
  return (
    <div className="grid wide">
      <div className="item-container">
        <img
          src={`http://103.252.95.181:8000${product.images}`}
          alt="er"
          className="item-container-image col c-6 mb-12"
        />
        <div className="item-container-content col c-6 mb-12">
          <div className="item-container-title">{product.product_name}</div>
          <div className="item-container-price">{product.price}d</div>
          <div className="item-container-button">
            <div className="button-container-buy item-container-button-button">
              buy now
            </div>
            <div className="button-container-add item-container-button-button">
              add to cart
            </div>
          </div>
          <div className="item-container-info-wrap">
            <div className="item-container-info">Thông tin sản phẩm</div>
          </div>
          <div className="item-container-description">
            {product.description}
          </div>
        </div>
      </div>
    </div>
  );
}
