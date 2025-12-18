import React from 'react';
import ProductImage from '../../components/Product/ProductImage';
import './SingleProductDetail.scss'

function SingleProductDetail() {
  return (
    <div className="SingleProductDetail">
      <div className="container SProductContainer">
        <div className="left-part">
          <ProductImage/>
        </div>
        <div className="right-part">
          <div className="info">
            <h2>Product name</h2>
            <p>Color  : Red❤️</p>
          </div>
          <div className="productDetails">
            <h2>Product Detail</h2>
            <div>
              <p>Product Designing </p>
              <p>Product Textures</p>
              <p>Product size : S/M/L/XL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProductDetail