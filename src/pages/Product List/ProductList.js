import React from 'react';
import './ProductList.scss'
import Product from '../../components/Product/Product'
import HBanner from '../../components/Media Banner/HBanner';

function ProductList() {
  return (
    <div className="ProductList">
        <HBanner head='Product Lists' desc='This is the product list'/>
        <div className="PLTop">
            <div className="filter">
                <p>Filter</p>
            </div>
            <div className="productCount">
                234 Produtcs
            </div>
            <div className="sorting">
                Sort By
            </div>
        </div>
        <div className="PList">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
        <div className="PLBottom">
            <p>1//25</p>
            <button className=' hoverLink'>see more</button>
        </div>
    </div>
  )
}

export default ProductList