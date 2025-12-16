import React from 'react'
import ProductImg from '../../asset/Classical Dress.png';

export default function ProductImage() {
  return (
    <div className="ProductImage">    
        <div className="productImage">
            <img src={ProductImg} alt="" />
        </div> 
    </div>
  )
}
