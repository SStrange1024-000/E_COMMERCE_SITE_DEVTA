import React, { useState } from 'react';
import './Navbar.scss';
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { MdOutlineSearch } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { HiBars3BottomRight } from "react-icons/hi2";
import { useNavigate,Navigate } from 'react-router-dom';

function Navbar() {
  const [clicked,setClicked]=useState(false);
  const navigate=useNavigate();

  function handleClickMenu(){
    setClicked(prev => !prev);
  }


  return (
    <div className="Navbar">
      <div className="links">
        <h1 className="logo">Devta</h1>
        <div className={!clicked ?"linkContainer":"active"}>
          <p className="link">Gifts</p>
          <p className="link" onClick={()=>navigate('/productlist')}>New</p>
          <p className="link">Men</p>
          <p className="link">Women</p>
          <p className="link">Stories</p>
        </div>
      </div>
      <div className="navIcons">
        <MdOutlineSearch/>
        <FaRegHeart onClick={()=>navigate('/wishlist')}/>
        <CiUser/>
        <div className="btnDiv" onClick={()=>{handleClickMenu()}}>
          {clicked ? <RxCross1 className='cross'/> : <HiBars3BottomRight className='bar'/>}
        </div>
      </div>
    </div>
  )
}

export default Navbar