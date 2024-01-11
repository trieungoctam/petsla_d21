import React from 'react'
import ItemIncart from './ItemInCart';


const ListItemInCart = () => {
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

  return (
    <div className='menu-cart__body'>
        {
            storedCart.map((product) => {
                return (
                  <ItemIncart item={product}/>
                )
              })
        }
    </div>
  )
}

export default ListItemInCart