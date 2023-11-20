import React from 'react'
import supportimage from './supportimg1.png'
import './Support.css'
import Navigationbar from './Navigationbar'

import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigationbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import instalogo from './instagram.jpeg'
import facebooklogo from './facebook.png'
import whatsapplogo from './whatsapp.png'
import Edureclogo from './Edureclogo.png'
import Inquiry_form from './Inquiry_form';
import { Link, Outlet } from 'react-router-dom';
import Home_footer from './Home_footer';
import Popup_enquiry from './Popup_enquiry';
import Course_popup from './Course_popup';


function Support() {
  function show_course_popup() {
    document.querySelector(".my_popup").style.display="block";
    document.querySelector(".popup_enquiry_form").style.display="block";
    document.querySelector(".blur").style.cssText = 'filter: blur(5px); -webkit-filter: blur(5px); -o-filter:blur(5px);-ms-filter:blur(5px);';
    

  }

  return (
    <>
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

    <Course_popup/>
           

    <div className="my_popup"><Popup_enquiry/></div>
    <div className="support1">
        <div className="support1a">
            <h1>LIVE <br /> SUPPORT</h1>
            <p>Get 24 hours live enquiry support from our team.</p> 
            <p id='three'> Resolve your dilemma in minutes and get the best <br /> counselling support from us. </p>
            
            <button onClick={show_course_popup}>CONTACT US</button>
           
        </div>
        
        <div className="support1b">
            <img src={supportimage} alt="No image" />
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

      
    <div className="support2">
        <div className="support2a">
          <div className="support2b">
          <form action="" className='support_form'>
            <h1>ASK YOUR QUERY</h1>
            <label htmlFor="" id='two'>Name: </label> <br />
            <input type="text" placeholder='Enter your Name'  required/> <br />
            <label htmlFor="">Email: </label> <br />
            <input type="email" placeholder='Enter your Email' required/> <br />
            <label htmlFor="">Contact Number: </label> <br />
            <input type="text" placeholder='Enter your Contact Number' required/> <br />
            <label htmlFor="">Query: </label> <br />
            <input type="textarea" placeholder='Submit your query' id='one' required/> <br />
            <button>SUBMIT</button>
          </form>
          </div>
        </div>
    </div>
 
    <Home_footer/>
    </>
  )
}

export default Support