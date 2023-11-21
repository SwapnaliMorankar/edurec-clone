import React from 'react'
import './Course8.css';
import swami1 from './University_related_images/swami1.png';
import swami2 from './University_related_images/swami2.jpg';
import mba1 from './Courses_images/MBA_image.jpg';
import bba1 from './Courses_images/BBA_image.jpg';
import bcom1 from './Courses_images/BCOM_image.jpg';
import mcom1 from './Courses_images/MCOM_image.jpg';
import ba from './Courses_images/BA_image.jpg';
import ma from './Courses_images/MA_image.jpg';
import blib from './Courses_images/BLIB_image.jpg';
import mlib from'./Courses_images/MLIB_image.jpg';

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


function Course8() {
  function show_course_popup() {
    document.querySelector(".my_popup").style.display="block";
    document.querySelector(".popup_enquiry_form").style.display="block";
    document.querySelector(".blur").style.cssText = 'filter: blur(5px); -webkit-filter: blur(5px); -o-filter:blur(5px);-ms-filter:blur(5px);';
    

  }
  return (
    <>
    <Just_nav/>

    <Course_popup/>


    <div className="course8a">
      <img src={swami1} alt="" />
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
    <div className="course8b">
      <h1>Swami Vivekanand Subharti University</h1>
    </div>
    </div>

    <div data-aos="fade-right" data-aos-duration="2000">
    <div className="course8c">
      <p>Swami Vivekanand Subharti University is a private university located in Meerut, Uttar Pradesh, India. The university was established in September 2008 and has 14 faculties. Ranked among the top 10% of Universities in India, Swami Vivekanand Subharti University is NAAC "A" Accredited and has received numerous National and International Awards. The University has several constituent colleges which provide higher education in almost all the disciplines like Medical, Dental, Nursing, Physiotherapy, Paramedical, Pharmacy, Naturopathy, Yogic Sciences, Engineering, Management, Law, Journalism, Education, Library, Arts and Science, Hotel Management, Faculty of Science etc. thus engaged in creating academically and technically proficient professionals. The University boasts of highly qualified, dedicated and competent faculty from all walks of life, world class infrastructure, fully equipped Laboratories with latest state-of-the-art equipment and a huge library with recent knowledge resources including e-resources. University has an approval by UGC, DEB, AICTE, AIU, WES.
      </p>
    </div>
    </div>

    <div data-aos="zoom-out" data-aos-duration="2000">
    <div className="course8g">
      <img src={swami2} alt="" />
    </div>
    </div>

    <div data-aos="fade-right" data-aos-duration="2000">
    <div className="course8f">
      <div className="course8fa">
        <div className="coursebox81"><h2>NAAC A+</h2></div>
      </div>8
      <div className="course8fb">
        <div className="coursebox81"><h2>PLACEMENT ASSISTANCE</h2></div>
        <div className="coursebox81"><h2>SUPPORT TEAM / MENTOR</h2></div>
      </div>
    </div> 
    </div>

    <div className="course8d">
      <h1>OUR TOP COURSES</h1>
    </div>
    <div className="my_popup"><Popup_enquiry/></div>
    <div className="course8e">
         <div className="course8ea">
            <div className="coursebox82">
            <img src={mba1} alt="" />
            <h1>MBA</h1>
            <p>Masters of Business <br /> Administration</p>
            <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
            </div>
            <div className="coursebox82">
            <img src={bba1} alt="" />
            <h1>BBA</h1>
            <p>Bachelors of Business Administration</p>
          <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
            </div>
            <div className="coursebox82">
            <img src={bcom1} alt="" />
            <h1>BCOM</h1>
            <p>Bachelor of Commerce</p>
    <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
            </div>
            <div className="coursebox82">
            <img src={mcom1} alt="" />
            <h1>MCOM</h1>
            <p>Master of Commerce</p>
        <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
            </div>
            <div className="coursebox82">
            <img src={ba} alt="" />
            <h1>BA</h1>
            <p>Bachelors of Arts</p>
       <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
            </div>
            <div className="coursebox82">
            <img src={ma} alt="" />
            <h1>MA</h1>
            <p>Masters of Arts</p>
       <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
            </div>
            <div className="coursebox82">
            <img src={blib} alt="" />
            <h1>BLIB</h1>
            <p>Bachelor of Library Science</p>
        <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
            </div>
            <div className="coursebox82">
            <img src={mlib} alt="" />
            <h1>MLIB</h1>
            <p>Master of Library Science</p>
            <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
            </div>
        </div>  
    </div>
    <Home_footer/>
    </>
  )
}

export default Course8



















