import React from 'react'
import "../assets/styles/ItemInCart.css"

const ItemIncart = ({item}) => {
  let sum = item.price*item.quantity
  return (
    <div className='menu-cart-item' id={item.id}>
        <div className="product-quantity">
            <button className='quantity-btn quantity-btn'>
                <i className='fa-solid fa-plus'></i>
            </button>
            <span>{item.quantity}</span>
            <button className='quantity-btn quantity-btn'>
                <i className='fa-solid fa-minus'></i>
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
                <div className="product-price">{`${item.price}đ x ${item.quantity}`}</div>
                <div className="product-total-price">{`${sum}đ`}</div>
            </div>
        </div>
        <div className="product-button-close">
            <i className='fa-solid fa-xmark btnclose'></i>
        </div>
    </div>
  )
}

export default ItemIncart