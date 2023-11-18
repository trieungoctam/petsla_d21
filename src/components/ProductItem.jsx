import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { faBagShopping, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import productItem from "../assets/style/productItem.css";

export default function ProductItem({ id, productName, price, images }) {
  return (
    <Router>
      <div className="product-wraper col c-6 m-4 1-3" id={id}>
        <Link className="item-product" to={`/product-${id}`}>
          <div
            className="item-image"
            style={{
              backgroundImage: `url(http://103.252.95.181:8000${images})`,
            }}
          ></div>
        </Link>
        <div className="item-content">
          <div className="item-desc">
            <Link to={`/produtc-${id}`} className="item-desc-text">
              <div className="item-desc-title">{productName}</div>
            </Link>
            <div className="item-desc-price">{price}</div>
          </div>
          <div className="item-buy-cart-wraper">
            <div className="item-buy">
              <FontAwesomeIcon icon={faBagShopping} className="item-buy-icon"/>
              <span>Buy now</span>
            </div>
            <div className="item-cart">
              <FontAwesomeIcon icon={faCartPlus} className="item-cart-icon"/>
              <span>Add to Cart</span>
            </div>
          </div>
        </div>

        <Routes>
          <Route path={`product-${id}`} element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home123</h2>
    </div>
  );
}
