import React from 'react';
import './ProductList.scss'
import Product from '../../components/Product/Product'
import HBanner from '../../components/Media Banner/HBanner';
import { useParams } from 'react-router-dom';

function ProductList({prodItem}) {
    const { category } = useParams();

    const bannerMap={
        men: {
            head: 'Men Collection',
            desc: 'Explore the latest trends for men'
        },
        gift: {
            head: 'Gift Collection',
            desc: 'Perfect gifts for your loved ones'
        },
        new: {
            head: 'New Arrivals',
            desc: 'Check out the newest additions'
        },
        women:{
            head: 'Women Collection',
            desc: 'Explore the latest trends form women'
        },
        stories:{
            head: 'Stories',
            desc: 'All the organized events is here now'
        }       
    }

    const bannerData= bannerMap[category] || {
        head: 'All Products',
        desc: 'Browse all available products'
    };

  return (
    <div className="ProductList">
        <HBanner head={bannerData.head} desc={bannerData.desc}/>
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