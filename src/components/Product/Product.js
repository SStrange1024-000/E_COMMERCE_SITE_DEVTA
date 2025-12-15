import React from 'react';
import './Product.scss'
import { FaRegHeart } from "react-icons/fa";
import ProductImage from '../../asset/Classical Dress.png'

function Product() {
  return (
    <div className="Product">
        <div className="PTop">
            <div className="wishList">
                <FaRegHeart/>
            </div>
        </div>
        <div className="productImage">
            <img src={ProductImage} alt="" />
        </div>
        <div className="PBottom">
            <div className="productName">
                <h2>Classical Dress</h2>
                <p>$534</p>
            </div>
        </div>
    </div>
  )
}

export default Product