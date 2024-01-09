import React from 'react'
import body from '../assets/styles/body.css'
import ProductList from '../components/ProductList'
import DetailsProduct from '../components/DetailsProduct'
export default function Body() {
  return (
    <div className='grid wide'>
      <ProductList/>
    </div>
  )
}
