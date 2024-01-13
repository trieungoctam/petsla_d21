import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { faBagShopping, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/productItem.css";
import DetailsProduct from "../components/DetailsProduct";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../store/productSlicer";
import { getProductList } from "../store/productListSlicer";
import { toast } from "react-toastify";
import { cartActions } from "../store/cartSlicer";
import "react-toastify/dist/ReactToastify.css";

export default function ProductItem({ id, productName, price, images }) {
  const dispatch = useDispatch();
  const { productList } = useSelector((store) => store.productList);

  // const [cart, setCart] = useState([]);
  //State để quản lý số lượng sản phẩm trong giỏ hàng
  // const [cartQuantity, setCartQuantity] = useState(0);
  // const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

  // const handleAddToCart = () => {

  //   saveToLocal();
  // };

  // const saveToLocal = () => {
  //   let check = storedCart.some((product) => product.id === id);
  //   if (!check) {
  //     const updatedCart = [
  //       ...storedCart,
  //       { id, productName, price, images, quantity: 1 },
  //     ];
  //     localStorage.setItem("cart", JSON.stringify(updatedCart));
  //   } else {
  //     let getindex = storedCart.findIndex((product) => product.id === id);
  //     let getproduct = storedCart.find((product) => product.id === id);
  //     let x = getproduct.quantity + 1;
  //     storedCart[getindex] = {
  //       ...getproduct,
  //       quantity: x,
  //     };
  //     localStorage.setItem("cart", JSON.stringify(storedCart));
  //   }
  // };
  return (
    <div className="product-wraper col c-6 m-4 l-3" id={id}>
      <Link className="item-product" to={`/product-${id}`}>
        <div
          onClick={() =>
            dispatch(productActions.selectProduct({ productList, id }))
          }
          className="item-image"
          style={{
            backgroundImage: `url(http://103.252.95.181:8000${images})`,
          }}
        ></div>
      </Link>
      <div className="item-content">
        <div className="item-desc">
          <Link to={`/product-${id}`} className="item-desc-text">
            <div
              onClick={dispatch(
                productActions.selectProduct({ productList, id })
              )}
              className="item-desc-title"
            >
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
          <div
            className="item-cart"
            onClick={() => {
              dispatch(
                cartActions.addToCart({
                  id,
                  productName,
                  price,
                  images,
                  quantity: 1,
                })
              );
              toast.success("Add to cart successfuly!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              
            }}
          >
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
