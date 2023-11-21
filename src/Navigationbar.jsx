import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import './Navigationbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Inquiry_form from './Inquiry_form';
import { Link, Outlet } from 'react-router-dom';
import Edureclogo from './Other_images/Edureclogo.png'

import instalogo from './Other_images/instagram.jpeg'
import facebooklogo from './Other_images/facebook.png'
import whatsapplogo from './Other_images/whatsapp.png'
import Just_nav from './Just_nav';

function Navigationbar() {
  return (
    <>
    {/* START OF FIRST BLOCK NAV,LOGIN.... */}
    <div class="responsive-div">
    <Just_nav/>
    <div className="Home_form_and_title">
      <div className="home_title_box">Your Path to Success Starts Here: Explore Career Opportunities with Us</div>
      <div className="home_inquiry_box"><Inquiry_form/></div>
    
    </div>
  </div>
  {/* social media sticky=----------------------------------- */}
  <div className="home_footer_socialmedia">
        <div className="icons">
        <a href="https://instagram.com/edurec.in?igshid=cGdpYmlta2V4YXg="> <img src={instalogo} alt="" /></a>
        <a href="https://wa.link/q57v2j"> <img src={whatsapplogo} alt="" /></a>
        
        <a href="https://www.facebook.com/profile.php?id=61552360414876"> <img src={facebooklogo} alt="" /></a>
        </div>
      </div>
     
    
    <Outlet/>
    </>
  )
}

export default Navigationbar