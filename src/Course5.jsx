import React from 'react'
import './Course5.css';
import uttaranchal1 from './uttaranchal1.jpg';
import uttaranchal2 from './uttaranchal2.jpg';
import mba1 from './mba.jpeg';
import bba1 from './bba.jpeg';
import mca1 from './mca.jpeg';
import bca1 from './bca.jpg';
import ba from './ba.jpeg';
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


function Course5() {
  function show_course_popup() {
    document.querySelector(".my_popup").style.display="block";
    document.querySelector(".popup_enquiry_form").style.display="block";
    document.querySelector(".blur").style.cssText = 'filter: blur(5px); -webkit-filter: blur(5px); -o-filter:blur(5px);-ms-filter:blur(5px);';
    

  }
  return (
    <>
    
    <Course_popup/>
    <div className="course5a">
      <img src={uttaranchal1} alt="" />
    </div>
 {/* social media****************************************************************************************************************************** */}
 <div className="university_footer_socialmedia">
        <div className="university_icons">
        <a href="https://instagram.com/edurec.in?igshid=cGdpYmlta2V4YXg=" target='_blank'> <img src={instalogo} alt="" /></a>
        <a href="https://wa.link/q57v2j  "target='_blank'> <img src={whatsapplogo} alt="" /></a>
        <a href="https://www.facebook.com/profile.php?id=61552360414876" target='_blank'> <img src={facebooklogo} alt="" /></a>
        </div>
      </div>
    <div className="course5b">
      <h1>Uttaranchal University</h1>
    </div>

    <div className="course5c">
      <p>Uttaranchal University has been recognized by the UGC under sections 2(f) and 12 (B) of the UGC Act, 1956, and by other statutory bodies of the State and the Nation. The University has been accredited with the prestigious “A+ Grade” by the National Assessment and Accreditation Council (NAAC). Uttaranchal University has become the first university in the State of Uttarakhand to receive NAAC A+ Grade in the first cycle of Accreditation, thus creating a history. This firmly positions the University among the top 5% HEIs of the nation. The university is undeterred in its mission to provide the best experience to all its students whether regional, national or international, through quality teaching, investing in research and innovation, and inculcating the essence of the above Sanskrit Shloka in its students. Led by experienced members of faculty, the Online programs are carefully designed and crafted mixing a wide variety of activities and relevant resources, and hence engage you into a proactive and effective learning journey. University has an approval by UGC, DEB, AICTE, AIU, WES. </p>
    </div>

    <div className="course5g">
      <img src={uttaranchal2} alt="" />
    </div>

    <div className="course5f">
      <div className="course5fa">
        <div className="coursebox51"><h2>NAAC A+</h2></div>
      </div>
      <div className="course5fb">
        <div className="coursebox51"><h2>PLACEMENT ASSISTANCE</h2></div>
        <div className="coursebox51"><h2>SUPPORT TEAM / MENTOR</h2></div>
      </div>
    </div> 

    <div className="course5d">
      <h1>OUR TOP COURSES</h1>
    </div>
    <div className="my_popup"><Popup_enquiry/></div>
    <div className="course5e">
        <div className="course5ea">

            <div className="coursebox52">
            <img src={mba1} alt="" />
            <h1>MBA</h1>
            <p>Masters of Business <br /> Administration</p>
            <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
            </div>
            <div className="coursebox52">
            <img src={bba1} alt="" />
            <h1>BBA</h1>
            <p>Bachelors of Business Administration</p>
           <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
            </div>
            <div className="coursebox52">
            <img src={bca1} alt="" />
            <h1>BCA</h1>
            <p>Bachelors of Computer <br /> Application</p>
            <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
            </div>
            <div className="coursebox52">
            <img src={mca1} alt="" />
            <h1>MCA</h1>
            <p>Masters of Computer <br /> Application</p>
            <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
            </div>
            <div className="coursebox52">
            <img src={ba} alt="" />
            <h1>BA</h1>
            <p>Bachelor of Arts</p>
            <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
            </div>
        </div>  
    </div>


    <Home_footer/>
    </>
  )
}

export default Course5












