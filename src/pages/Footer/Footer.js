import React, { useState } from 'react';
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaPinterestSquare } from "react-icons/fa";
import './Footer.scss'

function Footer() {
  const [fclicked,setFClicked]=useState(false);
  const [fAclicked,setFAClicked]=useState(false);
  const [fLclicked,setFLClicked]=useState(false);

  function handleFooterClicks(){
    setFClicked(prev=>!prev)
  }
  function handleFooterClicksA(){
    setFAClicked(prev=>!prev)
  }
  function handleFooterClicksL(){
    setFLClicked(prev=>!prev)
  }

  return (
    <div className="Footer">
      <div className="FTop">
        <div className="services">
          <h2 onClick={handleFooterClicks}>Client Service</h2>
          <p className={fclicked ? 'pdis':'ppp'}>Exclusive Services</p>
          <p className={fclicked ? 'pdis':'ppp'} >Care Guides</p>
          <p className={fclicked ? 'pdis':'ppp'} >Contact Us</p>
          <p className={fclicked ? 'pdis':'ppp'} >Orders & Shipping</p>
          <p className={fclicked ? 'pdis':'ppp'} >Returns & Refunds</p>
        </div>
        <div className="services">
          <h2 onClick={handleFooterClicksA}>About Us</h2>
          <p className={fAclicked ? 'pdis':'ppp'} >Company Profile</p>
          <p className={fAclicked ? 'pdis':'ppp'} >Corporate Data</p>
          <p className={fAclicked ? 'pdis':'ppp'} >Technical teams</p>
        </div>
        <div className="services">
          <h2 onClick={handleFooterClicksL}>Legal</h2>
          <p className={fLclicked ? 'pdis':'ppp'}>Legal Policy</p>
          <p className={fLclicked ? 'pdis':'ppp'}>General Sale Policy</p>
        </div>
        <div className="SocialLinks">
          <h1>International | EN</h1>
          <div className="socialMedia">
            <FaLinkedin/>
            <FaPinterestSquare/>
            <FaSquareInstagram/>
            <FaSquareXTwitter/>
            <FaTelegramPlane/>
          </div>
        </div>
      </div>
      <div className="FBottom">
        <h1>@ This website is inspired by Versace original website. Just to test designing skills</h1>
      </div>
    </div>
  )
}

export default Footer