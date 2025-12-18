import React from 'react'
import ProductImg from '../../asset/Classical Dress.png';
import './ProductImage.scss'

export default function ProductImage() {
  return (
    <div className="ProductImage">    
        <div className="pImg">
            <img src={ProductImg} alt="" />
        </div> 
    </div>
  )
}
