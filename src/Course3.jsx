import React from 'react'
import './Course3.css';
import jain1 from './University_related_images/jain1.jpg';
import jain2 from './University_related_images/jain2.png';
import mba1 from './Courses_images/MBA_image.jpg';
import bba1 from './Courses_images/BBA_image.jpg';
import mca1 from './Courses_images/MCA_image.jpg';
import bcom1 from './Courses_images/BCOM_image.jpg';
import mcom1 from './Courses_images/MCOM_image.jpg';
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
import Just_nav from './Just_nav';


function Course3() {
  function show_course_popup() {
    document.querySelector(".my_popup").style.display="block";
    document.querySelector(".popup_enquiry_form").style.display="block";
    document.querySelector(".blur").style.cssText = 'filter: blur(5px); -webkit-filter: blur(5px); -o-filter:blur(5px);-ms-filter:blur(5px);';
    

  }
  return (
    <>
    <Just_nav/>

    <Course_popup/>

    <div className="course3a">
      <img src={jain1} alt="" />
    </div>

    {/* social media sticky=----------------------------------- */}
    <div className="home_footer_socialmedia">
        <div className="icons">
        <a href="https://instagram.com/edurec.in?igshid=cGdpYmlta2V4YXg="> <img src={instalogo} alt="" /></a>
        <a href="https://wa.link/q57v2j"> <img src={whatsapplogo} alt="" /></a>
        
        <a href="https://www.facebook.com/profile.php?id=61552360414876"> <img src={facebooklogo} alt="" /></a>
        </div>
      </div>

    <div data-aos="zoom-out" data-aos-duration="2000">
    <div className="course3b">
      <h1>Jain University</h1>
    </div>
    </div>

    <div data-aos="fade-right" data-aos-duration="2000">
    <div className="course3c">
      <p>Ranked among the top universities in India and considered a cerebral destination for students across the world and Bangalore in particular, for its illustrious history of developing talent, JAIN (Deemed-to-be University) is a hub for learning in every sense of the word. The University which is based in Bangalore – the Silicon Valley of India, offers a conducive environment for learning, be it academically or extracurricular activities. Known for its emphasis on education, entrepreneurship, research and sports, JAIN (Deemed-to-be University) has some of the best minds in the educational and research fields, and centers that inspire entrepreneurship and groundbreaking work to simplify and manage life better. JAIN (Deemed-to-be University) is built on the belief that for a nation to grow, quality education is a must. What is also vital is that we put education to good use. There are 7 values that the Institution is founded on - Credibility, Commitment, Consistency, Creativity, Conviction, Innovation, Reliability. University has an approval by UGC, DEB, AICTE, AIU, WES. </p>
    </div>
    </div>

    <div data-aos="zoom-out" data-aos-duration="2000">
    <div className="course3g">
      <img src={jain2} alt="" />
    </div>
    </div>

    <div data-aos="fade-right" data-aos-duration="2000">
    <div className="course3f">
      <div className="course3fa">
        <div className="coursebox31"><h2>NIRF 68</h2></div>
        <div className="coursebox31"><h2>NAAC A++</h2></div>
      </div>
      <div className="course3fb">
        <div className="coursebox31"><h2>PLACEMENT ASSISTANCE</h2></div>
        <div className="coursebox31"><h2>SUPPORT TEAM / MENTOR</h2></div>
      </div>
    </div> 
    </div>

    <div className="course3d">
      <h1>OUR TOP COURSES</h1>
    </div>
    <div className="my_popup"><Popup_enquiry/></div>
    <div className="course3e">
        <div className="course3ea">

            <div className="coursebox32">
            <img src={mba1} alt="" />
            <h1>MBA</h1>
            <p>Masters of Business <br /> Administration</p>
            <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
            </div>
            <div className="coursebox32">
            <img src={bba1} alt="" />
            <h1>BBA</h1>
            <p>Bachelors of Business Administration</p>
            <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
            </div>
            <div className="coursebox32">
            <img src={mca1} alt="" />
            <h1>MCA</h1>
            <p>Masters of Computer <br /> Application</p>
            <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
            </div>
            <div className="coursebox32">
            <img src={bcom1} alt="" />
            <h1>BCOM</h1>
            <p>Bachelor of Commerce</p>
           <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
            </div>
            <div className="coursebox32">
            <img src={mcom1} alt="" />
            <h1>MCOM</h1>
            <p>Master of Commerce</p>
            <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
            </div>
        </div>  
    </div>
    <Home_footer/>
    </>
  )
}

export default Course3














