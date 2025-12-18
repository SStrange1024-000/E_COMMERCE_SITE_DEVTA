import React from 'react';
import './Product.scss'
import { FaRegHeart } from "react-icons/fa";
import ProductImage from './ProductImage';
import { FaShoppingBag } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Product() {
    const navigate=useNavigate()
  return (
    <div className="Product" onClick={()=>navigate('/products/:productId')}>
        <div className="PTop">
            <div className="wishList">
                <FaRegHeart/>
            </div>
        </div>
        <div >
            <ProductImage/>
        </div>
        <div className="PBottom">
            <div className="productName">
                <h2>Classical Dress</h2>
                <p>$534</p>
            </div>
            <div className="cart">
                <FaShoppingBag/>
            </div>
        </div>
    </div>
  )
}

export default Product