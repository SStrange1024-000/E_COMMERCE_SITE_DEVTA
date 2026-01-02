import React from "react";
import "./ProductList.scss";
import Product from "../../components/Product/Product";
import HBanner from "../../components/Media Banner/HBanner";
import menImg from "../../asset/Men.png";
import womenImg from "../../asset/Attire.avif";
import giftImg from "../../asset/Couple2.jpg";
import storiesImg from "../../asset/Couple.png";
import newImg from "../../asset/Couple2Bg.png";
import { useParams } from "react-router-dom";

function ProductList({ prodItem }) {
  const { category } = useParams();

  const bannerMap = {
    men: {
      head: "Men Collection",
      desc: "Explore the latest trends for men",
      imgdemo: menImg,
    },
    gift: {
      head: "Gift Collection",
      desc: "Perfect gifts for your loved ones",
      imgdemo: giftImg,
    },
    new: {
      head: "New Arrivals",
      desc: "Check out the newest additions",
      imgdemo: newImg,
    },
    women: {
      head: "Women Collection",
      desc: "Explore the latest trends form women",
      imgdemo: womenImg,
    },
    stories: {
      head: "Stories",
      desc: "All the organized events is here now",
      imgdemo: storiesImg,
    },
  };

  const bannerData = bannerMap[category] || {
    head: "All Products",
    desc: "Browse all available products",
    imgdemo: { storiesImg },
  };

  return (
    <div className="ProductList">
      <HBanner head={bannerData.head} desc={bannerData.desc} />
      <div className="PLTop">
        <div className="filter">
          <p>Filter</p>
        </div>
        <div className="productCount">234 Produtcs</div>
        <div className="sorting">Sort By</div>
      </div>
      <div className="PList">
        {[...Array(20)].map((_, index) => (
          <Product key={index} src1={bannerData.imgdemo} />
        ))}
        {/* <Product/>
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
            <Product/> */}
      </div>
      <div className="PLBottom">
        <p>1//25</p>
        <button className=" hoverLink">see more</button>
      </div>
    </div>
  );
}

export default ProductList;
