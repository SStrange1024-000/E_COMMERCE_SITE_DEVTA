import React from 'react'
import ProductImg from '../../asset/Classical Dress.png';
import './ProductImage.scss'

export default function ProductImage({src}) {
  return (
    <div className="ProductImage">    
        <div className="pImg center">
            <img src={src ? src :ProductImg} alt="" />
        </div> 
    </div>
  )
}
