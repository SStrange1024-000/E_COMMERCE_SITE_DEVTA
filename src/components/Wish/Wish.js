import React from 'react';
import './Wish.scss';
import { RxCross1 } from "react-icons/rx";
import { CiShare1 } from "react-icons/ci";
import ProductImage from '../Product/ProductImage';

function Wish() {
  return (
    <div className="Wish">
        <div className="mainWish">            
            <div className="wishContainer">

                <div className="leftPart">
                    <ProductImage/>           
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