import React from 'react'
import ItemIncart from './ItemInCart';
import { useSelector } from 'react-redux';


const ListItemInCart = () => {
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  const {cart} = useSelector((store) => store.cart);
  return (
    <div className='menu-cart__body'>
        {
            cart.map((product) => {
                return (
                  <ItemIncart item={product}/>
                )
              })
        }
    </div>
  )
}

export default ListItemInCart