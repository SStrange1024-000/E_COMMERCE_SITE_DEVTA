import React, { useState } from "react";
import "./Navbar.scss";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { MdOutlineSearch } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { HiBars3BottomRight } from "react-icons/hi2";
import {
  useNavigate,
  Navigate,
  Link,
  Links,
  useParams,
  useLocation,
} from "react-router-dom";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [wishlistActive, setWishlistActive] = useState(false);
  const location=useLocation();

  const navigate = useNavigate();

  function handleClickMenu() {
    setClicked(!clicked);
  }

  return (
    <div className="Navbar">
      <div className="links">
        <Link to="/" className="RouteLink">
          <h1 className="logo">Devta</h1>
        </Link>
        <div className={!clicked ? "linkContainer" : "active"}>
          <p
            className="link"
            onClick={() => {
              navigate(`/productlist/gift`);
              setClicked(false);
            }}
          >
            Gifts
          </p>
          <p
            className="link"
            onClick={() => {
              navigate(`/productlist/new`);
              setClicked(false);
            }}
          >
            New
          </p>
          <p
            className="link"
            onClick={() => {
              navigate(`/productlist/men`);
              setClicked(false);
            }}
          >
            Men
          </p>
          <p
            className="link"
            onClick={() => {
              navigate(`/productlist/women`);
              setClicked(false);
            }}
          >
            Women
          </p>
          <p
            className="link"
            onClick={() => {
              navigate(`/productlist/stories`);
              setClicked(false);
            }}
          >
            Stories
          </p>
        </div>
      </div>
      <div className="navIcons">
        <MdOutlineSearch className="wishIcon" />
        
  <span
    className="wishIcon"
    onClick={() => {
      setWishlistActive(!wishlistActive);
      navigate("/wishlist");
    }}
  >
  {location.pathname === "/wishlist" ? (
    <FaHeart color="red" />
  ) : (
    <FaRegHeart />
  )}
  </span>
        <CiUser className="wishIcon" onClick={() => navigate("/login")} />
        <Link to="cart" className="RouteLink">
          {" "}
          <FaShoppingBag />{" "}
        </Link>
        <div
          className="btnDiv"
          onClick={() => {
            handleClickMenu();
          }}
        >
          {clicked ? (
            <RxCross1 className="cross" />
          ) : (
            <HiBars3BottomRight className="bar" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
