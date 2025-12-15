import React from 'react';
import './Wish.scss';
import { RxCross1 } from "react-icons/rx";
import ProductImage from '../../asset/Classical Dress.png';
import { CiShare1 } from "react-icons/ci";

function Wish() {
  return (
    <div className="Wish">
        <div className="mainWishList">            
            <div className="wishListContainer">

                <div className="leftPart">
                    <div className="productImage">
                        <img src={ProductImage} alt="" />
                    </div>            
                </div>

                <div className="rightPart">
                    <h1>Product name</h1>
                    <p>Properties</p>
                </div>

            </div>

            <div className="crossPart">
                <CiShare1/>
                <RxCross1/>
            </div>
        </div>
    </div>
  )
}

export default Wish