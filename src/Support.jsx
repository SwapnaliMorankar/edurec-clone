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

function Support() {

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
    <div className="support1">
        <div className="support1a">
            <h1>LIVE <br /> SUPPORT</h1>
            <p>Get 24 hours live enquiry support from our team.</p> 
            <p id='three'> Resolve your dilemma in minutes and get the best <br /> counselling support from us. </p>
            <form action="">
                <button>CONTACT US</button>
            </form>
        </div>
        <div className="support1b">
            <img src={supportimage} alt="No image" />
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