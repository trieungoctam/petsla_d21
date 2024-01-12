import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { faBagShopping, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/productItem.css";
import DetailsProduct from "../components/DetailsProduct";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../store/productSlicer";
import { getProductList } from "../store/productListSlicer";


export default function ProductItem({ id, productName, price, images }) {
  const dispatch = useDispatch();
  const {productList} = useSelector((store) => store.productList);
  // useEffect(() => {
  //   dispatch(getProductList(''));
  // }, []);
  // const productList2 = productList;
  // console.log(productList); // check data
  return (
    <div className="product-wraper col c-6 m-4 l-3" id={id}>
      <Link className="item-product" to={`/product-${id}`}>
        <div
          onClick={() => dispatch(productActions.selectProduct({productList, id}))}
          className="item-image"
          style={{
            backgroundImage: `url(http://103.252.95.181:8000${images})`,
          }}
        ></div>
      </Link>
      <div className="item-content">
        <div className="item-desc">
          <Link to={`/product-${id}`} className="item-desc-text">
            <div  onClick={dispatch(productActions.selectProduct({productList, id}))} className="item-desc-title">
              {productName}
            </div>
          </Link>
          <div className="item-desc-price">{price}</div>
        </div>
        <div className="item-buy-cart-wraper">
          <div className="item-buy">
            <FontAwesomeIcon icon={faBagShopping} className="item-buy-icon" />
            <span>Buy now</span>
          </div>
          <div className="item-cart">
            <FontAwesomeIcon icon={faCartPlus} className="item-cart-icon" />
            <span>Add to Cart</span>
          </div>
        </div>
      </div>
      <Routes>
        <Route path={`/product-${id}`} element={<DetailsProduct />}></Route>
      </Routes>
    </div>
  );
}
