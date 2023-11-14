import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faEarthAmericas,
  faMoon,
  faRightFromBracket,
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import logoPetsla from "../assets/images/logofull.png";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "../assets/styles/header.css";

export default function Header() {
  return (
    <Router>
      <div>
        <div className="header-wrapper">
          <div className="header-higher-wraper">
            <div className="grid wide">
              <div className="header-higher">
                <div className="header-higher-info">
                  <div className="header-higher-info-mail">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>petsla.vn@gmail.com</span>
                  </div>
                  <div className="header-higher-info-divide"></div>
                  <div className="header-higher-info-phone">
                    <FontAwesomeIcon icon={faPhone} />
                    <span>0123 456 789</span>
                  </div>
                </div>
                <div className="header-higher-btn">
                  <div className="header-higher-btn-language">
                    <FontAwesomeIcon icon={faEarthAmericas} />
                  </div>
                  <div className="header-higher-btn-theme">
                    <FontAwesomeIcon icon={faMoon} />
                  </div>
                  <div className="header-higher-btn-auth">
                    <FontAwesomeIcon icon={faRightFromBracket} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="header-mid">
            <div className="grid wide">
              <div className="header-mid-wraper">
                <div className="header-mid-logo">
                  <Link to="/">
                    <img
                      className="header-mid-logo-img"
                      src={logoPetsla}
                      alt="Logo petsla"
                    />
                  </Link>
                </div>
                <div className="header-mid-search">
                  <input
                    type="text"
                    className="header-mid-search-input"
                    placeholder="Everything here is better than your ex"
                  />
                  <div className="header-mid-search-icon">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </div>
                </div>
                <div className="header-mid-cart">
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    className="header-mid-cart-icon"
                  />
                  <div className="header-mid-cart-count">0</div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-nav grid wide">
            <ul className="header-nav-list">
              <li className="header-nav-item">
                <Link to="/" className="header-nav-item-link">
                  Home
                </Link>
              </li>
              <li className="header-nav-item">
                <Link to="/shop" className="header-nav-item-link">
                  Shop
                </Link>
              </li>
              <li className="header-nav-item">
                <Link to="/cart" className="header-nav-item-link">
                  Cart
                </Link>
              </li>
              <li className="header-nav-item">
                <Link to="/contact" className="header-nav-item-link">
                  Contact
                </Link>
              </li>
              <li className="header-nav-item">
                <Link to="/account" className="header-nav-item-link">
                  Account
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/account" element={<Account />}></Route>
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
function Shop() {
  return (
    <div>
      <h2>Shop</h2>
    </div>
  );
}
function Cart() {
  return (
    <div>
      <h2>Cart</h2>
    </div>
  );
}
function Contact() {
  return (
    <div>
      <h2>Contact</h2>
    </div>
  );
}
function Account() {
  return (
    <div>
      <h2>Account</h2>
    </div>
  );
}
