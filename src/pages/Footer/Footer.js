import React from 'react';
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaPinterestSquare } from "react-icons/fa";
import './Footer.scss'

function Footer() {
  return (
    <div className="Footer">
      <div className="FTop">
        <div className="services">
          <h2>Client Service</h2>
          <p>Exclusive Services</p>
          <p>Care Guides</p>
          <p>Contact Us</p>
          <p>Orders & Shipping</p>
          <p>Returns & Refunds</p>
        </div>
        <div className="services">
          <h2>About Us</h2>
          <p>Company Profile</p>
          <p>Corporate Data</p>
          <p>Technical teams</p>
        </div>
        <div className="services">
          <h2>Legal</h2>
          <p>Legal Policy</p>
          <p>General Sale Policy</p>
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
        <h1>@ This website is inspired by Versace website</h1>
      </div>
    </div>
  )
}

export default Footer