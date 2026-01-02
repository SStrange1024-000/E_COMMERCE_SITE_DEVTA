import React from "react";
import "./HomeFace.scss";
import { useNavigate } from "react-router-dom";

function HomeFace() {
  const navigate = useNavigate();
  return (
    <div className="HomeFace">
      <div className="HFaceContainer center">
        <h1 className="heading">Devta</h1>
        <p className="subHeading">We bring royalty & culture together</p>
        <button
          className="hoverLink giftBtn"
          onClick={() => {
            navigate(`/productlist/gift`);
          }}
        >
          Gift Guide
        </button>
      </div>
    </div>
  );
}

export default HomeFace;
