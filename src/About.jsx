import React from 'react'
import './About.css'
import frame10 from './Frame 10.png';
import frame11 from './Frame 11.png';
import frame12 from './Frame 12.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Edureclogo from './Edureclogo.png'

import './Navigationbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Inquiry_form from './Inquiry_form';
import { Link, Outlet } from 'react-router-dom';
import Home_footer from './Home_footer';


import instalogo from './instagram.jpeg'
import facebooklogo from './facebook.png'
import whatsapplogo from './whatsapp.png'

function About() {

    function expand(){
      document.querySelector(".about5").style.display="none";
      document.querySelector(".about5a").style.display="none";
      document.querySelector(".about5b").style.display="none";
      document.querySelector(".about6").style.display="flex";
      document.querySelector(".leftbox").style.display="block";
      document.querySelector(".mainbox").style.display="block";
      document.querySelector(".rightbox").style.display="block";
    }
    function compress(){
      document.querySelector(".about5").style.display="flex";
      document.querySelector(".about5a").style.display="block";
      document.querySelector(".about5b").style.display="block";
      document.querySelector(".about6").style.display="none";
      document.querySelector(".leftbox").style.display="none";
      document.querySelector(".mainbox").style.display="none";
      document.querySelector(".rightbox").style.display="none";
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

  
            
      {/* FIRST PHOTO SECTION */}
        <div className="About1">
            <div className="about1a">
              <h2>INDIA's <br /> NO.1 Online Consultancy Platform</h2>
            </div>
        </div>
      {/* FIRST PHOTO SECTION */}


      {/* SECOND INFO SECTION */}
        <div className="about2">
              <h1>WHAT IS EDUREC</h1>
                <p>Welcome to Edurec, a trailblazing platform that redefines the landscape of education by seamlessly merging learning with innovation. At Edurec, our core mission revolves around transforming traditional education paradigms into dynamic, personalized experiences that uplift both students and educators. Our unwavering commitment is to revolutionize the learning process through meticulously tailored solutions that cater to individual needs and foster an environment of growth and empowerment. At Edurec, we're dedicated to remaining at the forefront of educational trends. We continuously evolve our platform to equip learners with the essential skills and knowledge required to excel in a rapidly changing world. Our dynamic approach to education not only addresses current needs but also anticipates future challenges, preparing learners to adapt and succeed in an ever-evolving landscape. </p>
        </div>
      {/* SECOND INFO SECTION */}
      {/* social media sticky=----------------------------------- */}
      <div className="university_footer_socialmedia">
        <div className="university_icons">
        <a href="https://instagram.com/edurec.in?igshid=cGdpYmlta2V4YXg=" target='_blank'> <img src={instalogo} alt="" /></a>
        <a href="https://wa.link/q57v2j  "target='_blank'> <img src={whatsapplogo} alt="" /></a>
        <a href="https://www.facebook.com/profile.php?id=61552360414876" target='_blank'> <img src={facebooklogo} alt="" /></a>
        </div>
      </div>

      {/* THIRD DIAMOND SECTION   */}
        <div className="about3">
          <div className="about3a">
              <h1 className='h11'>We Are The</h1>
              <h1 className='h12'>BEST</h1>
              <h1 className='h13'>Online Education Consultant</h1>
          </div>
          <div className="about3b">
             <div className="aboutbox one"><img src={frame10} alt="" /></div>
             <div className="aboutbox two"><img src={frame11} alt="" /></div>
             <div className="aboutbox three"><img src={frame12} alt="" /></div>
          </div>
        </div>
      {/* THIRD DIAMOND SECTION   */}


      {/* FOURTH MISSION AND VISON SECTION */}

        <div className="about6">
          <div className="leftbox">
            <h1>OUR MISSION</h1>
            <ul>
            <li>Personalized Empowerment: Provide tailored learning experiences that cater to diverse individual needs, fostering engagement and growth.</li>
              <li>Innovative Technology Integration: Integrate cutting-edge technology seamlessly into education, creating an immersive environment that enhances learning retention and engagement.</li>
              <li>Commitment to Adaptability: Equip learners with the skills and adaptability needed to thrive in an ever-evolving world through personalized solutions.</li>
              <li id='new1'>Empowering Success: Strive to empower individuals by offering transformative learning experiences that prepare them for success in dynamic environments.</li>   
              </ul>
          </div>
          <div className="rightbox">
            <h1>OUR VISION</h1>
            <ul>
            <li>Revolutionizing Education: Lead the transformation of education by prioritizing personalized learning and innovative technology integration.</li>
              <li>Pioneering Adaptive Education: Anticipate and address future educational trends, setting the standard for adaptive learning experiences.</li>
              <li>Dynamic Educational Landscape: Envision a dynamic educational landscape where learners thrive through forward-thinking, tailored educational experiences.</li>
              <li id='new2'>Unlocking Potential: Create a future where individuals unlock their full potential through tailored, forward-thinking education that adapts to their needs and goals.</li>
            </ul>
          </div>
        </div>  
      {/* FOURTH MISSION AND VISON SECTION */}


      {/* LAST REGISTER SECTION */}
        <div className="about7">
          <div className="about7b">
          <form action="" id='form1'>
          <h2>JOIN US NOW</h2>
              <input type="text" placeholder='Enter your Name' required/>
              <input type="email" placeholder='Enter your Email' required/>
              <input type="" placeholder='Enter your Contact Number' required/> <br />
              <button>SUBMIT</button>
            </form>
            </div>
          <div className="about7a">
          </div>
        </div>
      {/* LAST REGISTER SECTION */}

<Home_footer/>
    </>
  )
}

export default About


