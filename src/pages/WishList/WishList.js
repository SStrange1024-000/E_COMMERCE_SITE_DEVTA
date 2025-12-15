import React from 'react';
import { RxCross1 } from "react-icons/rx";
import ProductImage from '../../asset/Classical Dress.png';
import './WishList.scss';
import { CiShare1 } from "react-icons/ci";
import Wish from '../../components/Wish/Wish';

function WishList() {
  return (
    <div className="WishList">
        <div className="title">
            <h1>WISHLIST (1)</h1>
        </div>
        <div className="wishListContainer">
            <Wish/>
            <Wish/>
            <Wish/>
            <Wish/>
        </div>

        <div className="editWishList"></div>
    </div>
  )
}

export default WishList