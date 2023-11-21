import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Inquiry_form from './Inquiry_form';
import { Link, Outlet } from 'react-router-dom';
import Edureclogo from './Edureclogo.png'
import 'bootstrap/dist/css/bootstrap.min.css';

function Just_nav() {
  return (
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
  )
}

export default Just_nav