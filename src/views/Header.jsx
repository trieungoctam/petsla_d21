import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
// import CartCount from "../components/CartCount";
import Shop from "../components/Shop";
import DetailsProduct from "../components/DetailsProduct";
import { Login } from "../components/Login";

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
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import "../assets/styles/header.css";
import { useDispatch, useSelector } from "react-redux";
import CartDrawer from "../components/CartDrawer";
import { cartActions } from "../store/cartSlicer";
import { productActions } from "../store/productSlicer";
import { productListActions } from "../store/productListSlicer";

export default function Header() {
  const { productList } = useSelector((store) => store.productList);
  const { cart, totalTypeProductInCart } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const inputRef = useRef();

  const pathAccount = useRef(null);
  const navigate = useNavigate();

  const handleEvent = (e) => {
    e.preventDefault();
    const path = localStorage.getItem("token") !== null ? "/account" : "/login";
    navigate(path);
    console.log(pathAccount.current.href);
  };

  const handleAuth = () => {
    if (localStorage.getItem("token") === null) {
      navigate("/login");
    } else {
      localStorage.removeItem("token");
      navigate("/");
    }
  };

  return (
    <div>
      <div className="header-wrapper">
        <CartDrawer />
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
                <div
                  className="header-higher-btn-auth"
                  onClick={() => handleAuth()}
                >
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
                  ref={inputRef}
                  type="text"
                  className="header-mid-search-input"
                  placeholder="Everything here is better than your ex"
                />
                <div
                  className="header-mid-search-icon"
                  onClick={() => {
                    dispatch(productListActions.sortBySearch(inputRef.current.value));
                  }}
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
              </div>
              <div
                className="header-mid-cart"
                onClick={() => {
                  dispatch(cartActions.openCartDrawer());
                }}
              >
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="header-mid-cart-icon"
                />
                <div className="header-mid-cart-count">
                  {totalTypeProductInCart}
                </div>
                {/* <CartCount/> */}
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
              <Link
                to="/login"
                className="header-nav-item-link"
                ref={pathAccount}
              >
                Account
                <button
                  style={{
                    position: "relative",
                    top: "-50%",
                    width: "100%",
                    height: "100%",
                    opacity: "0",
                    cursor: "pointer",
                  }}
                  onClick={(e) => handleEvent(e)}
                ></button>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/contact" element={<DetailsProduct />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/login" element={<Login />}></Route>
        {productList.map((product) => {
          // console.log(`/product-${product.id}`);

          return (
            <Route
              path={`/product-${product.id}`}
              element={<DetailsProduct />}
            ></Route>
          );
        })}
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home123</h2>
    </div>
  );
}
// function Shop() {
//   return (
//     <div>
//       <h2>shop1</h2>
//     </div>
//   )
// }

// function Cart() {
//   return (
//     <div>
//       <h2>Cart</h2>
//     </div>
//   );
// }
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
