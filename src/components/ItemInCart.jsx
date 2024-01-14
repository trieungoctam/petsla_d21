import React from "react";
import "../assets/styles/ItemInCart.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlicer";

const ItemIncart = ({ item }) => {
  const dispatch = useDispatch();

  let sum = item.price * item.quantity;
  return (
    <div className="menu-cart-item" id={item.id}>
      <div className="product-quantity">
        <button
          className="quantity-btn quantity-btn"
          onClick={() => {
            dispatch(cartActions.increaseProduct(item));
          }}
        >
          <i className="fa-solid fa-plus" aria-hidden="true" style={{height:'12px'}}></i>
        </button>
        <span>{item.quantity}</span>
        <button
          className="quantity-btn"
          onClick={() => {
            dispatch(cartActions.decreaseProduct(item));
          }}
        >
          <i className="fa-solid fa-minus" style={{height:'12px'}}></i>
        </button>
      </div>

      <div className="product-info">
        <div
          className="product-img"
          style={{
            backgroundImage: `url(http://103.252.95.181:8000${item.images})`,
          }}
        ></div>

        <div className="product-description">
          <div className="product-name">{item.productName}</div>
          <div className="product-price">{`${item.price.toLocaleString('en-US').replace(/,/g, '.')}đ x ${item.quantity}`}</div>
          <div className="product-total-price">{`${sum.toLocaleString('en-US').replace(/,/g, '.')}đ`}</div>
        </div>
      </div>
      <div
        className="product-button-close"
        onClick={() => {
          dispatch(cartActions.removeProduct(item));
        }}
      >
        <i className="fa-solid fa-xmark btnclose"></i>
      </div>
    </div>
  );
};

export default ItemIncart;
