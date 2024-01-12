import React from 'react'
import "../assets/styles/cart.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import ListItemInCart from './ListItemInCart';
export const Cart = () => {
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
const sum = storedCart.length
    
  return (
    <div>
        <div className="cart-wrap grid wide">
            <div className="cart-title">
                <span className='title-cart'>Cart</span>
                <span>/</span>
                <span className='title-cart'>
                    <Link className="header-nav-item-link" to={"/customerInfor"}>Customer Infor</Link>
                    
                </span>
            </div>
            <div className="row">
                <div className="col l-8">
                    <div className="menu-cart">
                        <div className="menu-cart_header">
                            <div className="menu-cart_header-title">
                                {`Cart: ${sum} Items`}
                            </div>
                        </div>
                        <ListItemInCart/>
                        
                    </div>
                </div>
                <div className="add-order col l-4">
                    <div className="add-order-wrap">
                        <div className="order-total"></div>
                        <div className="input-voucher-wrap"></div>
                        <button type='button' className='menu-cart-btn btn-primary check-out'>Apply voucher</button>
                        <button type='button' className='menu-cart-btn btn-view-cart check-out'>Checkout</button>
                    </div>
                </div>

            </div>
        </div>

    </div>
  )
}
export default Cart