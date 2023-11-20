import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import './Navigationbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Inquiry_form from './Inquiry_form';
import { Link, Outlet } from 'react-router-dom';
import Edureclogo from './Edureclogo.png'

import instalogo from './instagram.jpeg'
import facebooklogo from './facebook.png'
import whatsapplogo from './whatsapp.png'

function Navigationbar() {
  return (
    <>
    {/* START OF FIRST BLOCK NAV,LOGIN.... */}
    <div class="responsive-div">
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary ">
      <Container>
        <Navbar.Brand href="#home"><img src={Edureclogo} id='edurec-logo' alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
         
          <Nav>
          <Nav.Link ><Link to="/" className='home-navbar-name' >HOME</Link> </Nav.Link>
          <Nav.Link ><Link to="/about" className='home-navbar-name' >ABOUT</Link> </Nav.Link>
            <Nav.Link ><Link to="/university" className='home-navbar-name'>UNIVERSITY</Link> </Nav.Link>
            <Nav.Link ><Link to="/support" className='home-navbar-name'>SUPPORT</Link> </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className="Home_form_and_title">
      <div className="home_title_box">Your Path to Success Starts Here: Explore Career Opportunities with Us</div>
      <div className="home_inquiry_box"><Inquiry_form/></div>
    
    </div>
  </div>
  {/* social media sticky=----------------------------------- */}
  <div className="university_footer_socialmedia">
        <div className="university_icons">
        <a href="https://instagram.com/edurec.in?igshid=cGdpYmlta2V4YXg=" target='_blank'> <img src={instalogo} alt="" /></a>
        <a href="https://wa.link/q57v2j  "target='_blank'> <img src={whatsapplogo} alt="" /></a>
        <a href="https://www.facebook.com/profile.php?id=61552360414876" target='_blank'> <img src={facebooklogo} alt="" /></a>
        </div>
      </div>
     
    
    <Outlet/>
    </>
  )
}

export default Navigationbar