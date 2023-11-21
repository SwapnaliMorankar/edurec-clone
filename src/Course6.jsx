import React from 'react'
import './Course6.css';
import lovely1 from './University_related_images/lovely1.webp';
import lovely2 from './University_related_images/lovely2.jpg';
import mba1 from './Courses_images/MBA_image.jpg';
import bca1 from './Courses_images/BCA_image.jpg';
import mca1 from './Courses_images/MCA_image.jpg';
import bcom1 from './Courses_images/BCOM_image.jpg';
import mcom1 from './Courses_images/MCOM_image.jpg';
import ba from './Courses_images/BA_image.jpg';
import ma from './Courses_images/MA_image.jpg';
import msc from './Courses_images/MSC_image.jpg'
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


function Course6() {
  function show_course_popup() {
    document.querySelector(".my_popup").style.display="block";
    document.querySelector(".popup_enquiry_form").style.display="block";
    document.querySelector(".blur").style.cssText = 'filter: blur(5px); -webkit-filter: blur(5px); -o-filter:blur(5px);-ms-filter:blur(5px);';
    

  }
  return (
    <>
    <Just_nav/>

    <Course_popup/>

    <div className="course6a">
      <img src={lovely1} alt="" />
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
    <div className="course6b">
      <h1>Lovely Professional University</h1>
    </div>
    </div>

    <div data-aos="fade-right" data-aos-duration="2000">
    <div className="course6c">
      <p>Lovely Professional University (LPU) is a private university located in Chaheru, Phagwara, Punjab, India.The university was established in 2005 by Lovely International Trust, through the Lovely Professional University Act, 2005. Open and Distance Learning programmes recognized by the concerned regular bodies are equivalent to the corresponding regular mode programmes for higher education and employability purpose. It aims for Creation and establishment of versatile and competent Open & Distance Learning system to cater to the educational aspirations of the society. And To deliver affordable and accessible quality Education for augmenting the academic value and skills of higher education aspirants. The University offers various advantages on enrollment - PERSONAL CONTACT PROGRAMME, PLACEMENTS, ONLINE PORTAL (LPU E-CONNECT), AVAILABILITY OF ONLINE STUDY MATERIAL, WORKSHOPS AND SEMINARS, STUDENT INDUCTION, AFFORDABLE FEE STRUCTURE etc. University has an approval by UGC, DEB, AICTE, AIU, WES. </p>
    </div>
    </div>

    <div data-aos="zoom-out" data-aos-duration="2000">
    <div className="course6g">
      <img src={lovely2} alt="" />
    </div>
    </div>

    <div data-aos="fade-right" data-aos-duration="2000">
    <div className="course6f">
      <div className="course6fa">
        <div className="coursebox61"><h2>NIRF 38</h2></div>
        <div className="coursebox61"><h2>NAAC A++</h2></div>
      </div>
      <div className="course6fb">
        <div className="coursebox61"><h2>PLACEMENT ASSISTANCE</h2></div>
        <div className="coursebox61"><h2>SUPPORT TEAM / MENTOR</h2></div>
      </div>
    </div> 
    </div>

    <div className="course6d">
      <h1>OUR TOP COURSES</h1>
    </div>
    <div className="my_popup"><Popup_enquiry/></div>
    <div className="course6e">
         <div className="course6ea">
            <div className="coursebox62">
            <img src={mba1} alt="" />
            <h1>MBA</h1>
            <p>Masters of Business <br /> Administration</p>
           <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
            </div>
            <div className="coursebox62">
            <img src={bca1} alt="" />
            <h1>BCA</h1>
            <p>Bachelors of Computer <br /> Application</p>
           <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
            </div>
            <div className="coursebox62">
            <img src={mca1} alt="" />
            <h1>MCA</h1>
            <p>Masters of Computer <br /> Application</p>
        <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
            </div>
            <div className="coursebox62">
            <img src={bcom1} alt="" />
            <h1>BCOM</h1>
            <p>Bachelor of Commerce</p>
            <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
            </div>
            <div className="coursebox62">
            <img src={mcom1} alt="" />
            <h1>MCOM</h1>
            <p>Master of Commerce</p>
           <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
            </div>
            <div className="coursebox62">
            <img src={ba} alt="" />
            <h1>BA</h1>
            <p>Bachelors of Arts</p>
            <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
            </div>
            <div className="coursebox62">
            <img src={ma} alt="" />
            <h1>MA HONS</h1>
            <p>Masters of Arts - Honours</p>
           <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
            </div>
            <div className="coursebox62">
            <img src={msc} alt="" />
            <h1>MSC</h1>
            <p>Master of Science</p>
          <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
            </div>
        </div>  
    </div>

    <Home_footer/>
    </>
  )
}


export default Course6




