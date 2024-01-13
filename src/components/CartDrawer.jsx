import { Box, Drawer } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartSlicer";
import ListItemInCart from "./ListItemInCart";

function CartDrawer() {
  const { isCartDrawerOpen, totalTypeProductInCart } = useSelector((store) => store.cart);
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
        </div>
      </Box>
    </Drawer>
  );
}

export default CartDrawer;
