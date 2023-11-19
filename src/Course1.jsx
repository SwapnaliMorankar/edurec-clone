import React from 'react'
import './Course1.css';
import mba1 from './Courses_images/MBA_image.jpg';
import bba1 from './Courses_images/BBA_image.jpg';
import dypatil1 from './University_related_images/dypatil1.jpg';
import dypatil3 from './University_related_images/dypatil3.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigationbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import instalogo from './Other_images/instagram.jpeg'
import facebooklogo from './Other_images/facebook.png'
import whatsapplogo from './Other_images/whatsapp.png'
import Edureclogo from './Other_images/Edureclogo.png'
import Inquiry_form from './Inquiry_form';
import { Link, Outlet } from 'react-router-dom';
import Home_footer from './Home_footer';
import Popup_enquiry from './Popup_enquiry';
import Course_popup from './Course_popup';


function Course1() {
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
    <div className="course1a">
      <img src={dypatil1} alt="" />
    </div>

    <div className="course1b">
      <h1>Dr. D. Y. Patil Vidyapeeth, Pune</h1>
    </div>

    <div className="course1c">
      <p>Dr. D. Y. Patil Vidyapeeth, Pune (Deemed-to-be University) was established by the University Grants Commission, Government of India under Section 3 of the UGC Act, 1956 vide its notification dated 11th January 2003. Presently,Dr. D. Y. Patil Vidyapeeth, Pune has 13 Constituent Units that has created a brand name “DPU” in the field of Medicine, Dentistry, Nursing, Physiotherapy, Optometry, Biotechnology, Management, Ayurved, Homeopathy, Design, Allied Health Sciences, Liberal Arts, Science & Technology and Online Learning Centre. It has state-of-the-art infrastructure and dedicated faculty members. All the programs offered in these Constituent Units of the Vidyapeeth are duly recognized by the respective Councils such as UGC,DEB,AICTE,AIU,WES. Dr. D. Y. Patil Vidyapeeth, Pune has been accredited (3rd Cycle) by NAAC with a CGPA of 3.64 on a four-point scale at ‘A++’ grade on 8th February 2022, valid up to 7th February 2029 . Dr. D. Y. Patil Vidyapeeth, Pune is an 9001: 2015, ISO 14001:2015 and Green Education Campus certified University.</p>
    </div>

    <div className="course1g">
      <img src={dypatil3} alt="" />
    </div>

    <div className="course1f">
      <div className="course1fa">
        <div className="coursebox11"><h2>NAAC A++</h2></div>
        <div className="coursebox11"><h2>NIRF 46</h2></div>
      </div>
      <div className="course1fb">
        <div className="coursebox11"><h2>PLACEMENT ASSISTANCE</h2></div>
        <div className="coursebox11"><h2>SUPPORT TEAM / MENTOR</h2></div>
      </div>
    </div>

    <div className="course1d">
      <h1>OUR TOP COURSES</h1>
    </div>
    <div className="my_popup"><Popup_enquiry/></div>
    <div className="course1e">
          <div className="coursebox12">
            <img src={mba1} alt="" />
            <h1>MBA</h1>
            <p>Masters of Business <br /> Administration</p>
            <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
          </div>
          <div className="coursebox12">
            <img src={bba1} alt="" />
            <h1>BBA</h1>
            <p>Bachelors of Business Administration</p>
            <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
          </div>
    </div>

    <Home_footer/>

    </>
  )
}

export default Course1

