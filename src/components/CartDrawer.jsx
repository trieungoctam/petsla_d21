import { Box, Drawer } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartSlicer";
import ListItemInCart from "./ListItemInCart";
import { Link, Route, Routes } from "react-router-dom";
import Cart from "./Cart";

function CartDrawer() {
  const { isCartDrawerOpen, totalTypeProductInCart, totalMoney } = useSelector(
    (store) => store.cart
  );
  const dispatch = useDispatch();
  return (
    <Drawer
      anchor="right"
      open={isCartDrawerOpen}
      onClose={() => {
        dispatch(cartActions.closeCartDrawer());
      }}
    >
      <Box width="400px">
        <div className="menu-cart">
          <div className="menu-cart_header">
            <div className="menu-cart_header-title">
              {`Cart: ${totalTypeProductInCart} Items`}
            </div>
          </div>
          <ListItemInCart />
          <div className="menu-cart_footer">
            <button className="menu-cart-btn btn-primary">{`Checkout(${totalMoney
              .toLocaleString("en-US")
              .replace(/,/g, ".")}đ)`}</button>
            {/* <Link to="/cart"> */}
            <button className="menu-cart-btn btn-view-cart">View Cart</button>
            {/* </Link> */}
          </div>
        </div>
      </Box>
    </Drawer>
  );
}

export default CartDrawer;
