import React, { useState, useEffect } from 'react';

const CartCount = () => {
  const [cartQuantity, setCartQuantity] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartQuantity(storedCart.length);
  }, []);

  return <div className="header-mid-cart-count">{cartQuantity}</div>;
};

export default CartCount;