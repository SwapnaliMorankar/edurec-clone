import React from 'react'
import './Course2.css';
import manipal1 from './University_related_images/manipal1.jpg';
import manipal2 from './University_related_images/manipal2.jpg';
import mba1 from './Courses_images/MBA_image.jpg';
import bba1 from './Courses_images/BBA_image.jpg';
import bca1 from './Courses_images/BCA_image.jpg';
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


function Course2() {
  function show_course_popup() {
    document.querySelector(".my_popup").style.display="block";
    document.querySelector(".popup_enquiry_form").style.display="block";
    document.querySelector(".blur").style.cssText = 'filter: blur(5px); -webkit-filter: blur(5px); -o-filter:blur(5px);-ms-filter:blur(5px);';
    

  }
  return (
    <>
   <Just_nav/>

    <Course_popup/>

    <div className="course2a">
      <img src={manipal1} alt="" />
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
    <div className="course2b">
      <h1>Manipal University, Jaipur</h1>
    </div>
    </div>

    <div data-aos="fade-right" data-aos-duration="2000">
    <div className="course2c">
      <p>Manipal University Jaipur (MUJ) was launched in 2011 on an invitation from the Government of Rajasthan, as a self-financed State University. A NAAC A+ accredited university, Manipal University Jaipur has stood as a pioneer, paving the way for industry-focused education. MUJ has redefined academic excellence in the region, with the Manipal way of learning; one that inspires students of all disciplines to learn and innovate through hands on practical experience.The multi-disciplinary university offers career-oriented courses at all levels, i.e., UG, PG and doctoral and across diverse streams, including Engineering, Architecture, Planning, Fashion Design, Interior Design, Fine Arts, Hospitality, Humanities, Journalism and Mass Communication, Basic Sciences, Law, Commerce, Computer Applications, Management, etc.  Some PG programmes are also available in the research mode. University has an approval by UGC, DEB, AICTE, AIU, WES. </p>
    </div>
    </div>

    <div data-aos="zoom-out" data-aos-duration="2000">
    <div className="course2g">
      <img src={manipal2} alt="" />
    </div>
    </div>


    <div data-aos="fade-right" data-aos-duration="2000">
    <div className="course2f">
      <div className="course2fa">
        <div className="coursebox21"><h2>NAAC A+</h2></div>
      </div>
      <div className="course2fb">
        <div className="coursebox21"><h2>PLACEMENT ASSISTANCE</h2></div>
        <div className="coursebox21"><h2>SUPPORT TEAM / MENTOR</h2></div>
      </div>
    </div> 
    </div>

    <div className="course2d">
      <h1>OUR TOP COURSES</h1>
    </div>

    <div className="my_popup"><Popup_enquiry/></div>


    <div className="course2e">

        <div className="course2ea">
            <div className="coursebox22">
            <img src={mba1} alt="" />
            <h1>MBA</h1>
            <p>Masters of Business <br /> Administration</p>
            <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
            </div>
            <div className="coursebox22">
            <img src={bba1} alt="" />
            <h1>BBA</h1>
            <p>Bachelors of Business Administration</p>
             <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
            </div>
            <div className="coursebox22">
            <img src={bca1} alt="" />
            <h1>BCA</h1>
            <p>Bachelors of Computer <br /> Application</p>
             <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
            </div>
        
            <div className="coursebox22">
            <img src={mca1} alt="" />
            <h1>MCA</h1>
            <p>Masters of Computer <br /> Application</p>
            <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
            </div>
            <div className="coursebox22">
            <img src={bcom1} alt="" />
            <h1>BCOM</h1>
            <p>Bachelor of Commerce</p>
             <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
            </div>
            <div className="coursebox22">
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

export default Course2

















