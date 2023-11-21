import React from 'react'
import './Course7.css';
import mangal1 from './mangal1.webp';
import mangal2 from './mangal2.jpeg';
import mba1 from './mba.jpeg';
import bba1 from './bba.jpeg';
import bca1 from './bca.jpg';
import mca1 from './mca.jpeg';
import bcom1 from './bcom.jpg';
import mcom1 from './mcom.jpg';
import ba from './ba.jpeg';
import ma from './ma.jpg';
import bsc from './bsc.jpg'
import dca from './dca.jpg';
import pgdca from './pgdca.jpg'
import msc from './msc.jpg'
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


function Course7() {
  function show_course_popup() {
    document.querySelector(".my_popup").style.display="block";
    document.querySelector(".popup_enquiry_form").style.display="block";
    document.querySelector(".blur").style.cssText = 'filter: blur(5px); -webkit-filter: blur(5px); -o-filter:blur(5px);-ms-filter:blur(5px);';
    

  }
  return (
    <>
    
    
    <Course_popup/>
    <div className="course7a">
      <img src={mangal1} alt="" />
    </div>
 {/* social media****************************************************************************************************************************** */}
 <div className="university_footer_socialmedia">
        <div className="university_icons">
        <a href="https://instagram.com/edurec.in?igshid=cGdpYmlta2V4YXg=" target='_blank'> <img src={instalogo} alt="" /></a>
        <a href="https://wa.link/q57v2j  "target='_blank'> <img src={whatsapplogo} alt="" /></a>
        <a href="https://www.facebook.com/profile.php?id=61552360414876" target='_blank'> <img src={facebooklogo} alt="" /></a>
        </div>
      </div>
    <div className="course7b">
      <h1>Mangalayatan University</h1>
    </div>

    <div className="course7c">
      <p>Manglayatan University is a private university established in 2006, recognised by University Grants Commission (UGC). Its campus is located in the city of Aligarh in the Indian state of Uttar Pradesh. The main moto of this university is 'Learn today to lead tomorrow'. It has been accredited by the National Assessment and Accreditation Council (NAAC) with 'A+' Grade. The Mangalayatan University has emerged as a well-known brand in northern India and is expanding fast all over the country with plans to be an international destination.Mangalayatan University is a dynamic and innovative institution of higher education based in Aligarh, Uttar Pradesh, India. The university offers a wide range of undergraduate and postgraduate programs across various disciplines, including Engineering, Management, Humanities, Sciences, Law, and Education. At Mangalayatan University, the focus is on providing a world-class education that prepares students to become leaders in their fields. The faculty is drawn from the best of the best in the industry and academics. The university has state-of-art facilities, including modern classrooms, labs, and libraries, to support students in their learning journey. University has an approval by UGC, AICTE, AIU. </p>
    </div>

    <div className="course7g">
      <img src={mangal2} alt="" />
    </div>

    <div className="course7f">
      <div className="course7fa">
        <div className="coursebox71"><h2>NAAC A+</h2></div>
      </div>
      <div className="course7fb">
        <div className="coursebox71"><h2>PLACEMENT ASSISTANCE</h2></div>
        <div className="coursebox71"><h2>SUPPORT TEAM / MENTOR</h2></div>
      </div>
    </div> 

    <div className="course7d">
      <h1>OUR TOP COURSES</h1>
    </div>
    <div className="my_popup"><Popup_enquiry/></div>
    <div className="course7e">
         <div className="course7ea">
            <div className="coursebox72">
            <img src={mba1} alt="" />
            <h1>MBA</h1>
            <p>Masters of Business <br /> Administration</p>
            <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
            </div>
            <div className="coursebox72">
            <img src={bba1} alt="" />
            <h1>BBA</h1>
            <p>Bachelors of Business Administration</p>
          <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
            </div>
            <div className="coursebox72">
            <img src={bca1} alt="" />
            <h1>BCA</h1>
            <p>Bachelors of Computer <br /> Application</p>
           <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
            </div>
            <div className="coursebox72">
            <img src={mca1} alt="" />
            <h1>MCA</h1>
            <p>Masters of Computer <br /> Application</p>
            <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
            </div>
            <div className="coursebox72">
            <img src={bcom1} alt="" />
            <h1>BCOM</h1>
            <p>Bachelor of Commerce</p>
            <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
            </div>
            <div className="coursebox72">
            <img src={mcom1} alt="" />
            <h1>MCOM</h1>
            <p>Master of Commerce</p>
            <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
            </div>
            <div className="coursebox72">
            <img src={ba} alt="" />
            <h1>BA</h1>
            <p>Bachelors of Arts</p>
           <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
            </div>
            <div className="coursebox72">
            <img src={ma} alt="" />
            <h1>MA</h1>
            <p>Masters of Arts</p>
       <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
            </div>
            <div className="coursebox72">
            <img src={bsc} alt="" />
            <h1>BSC</h1>
            <p>Bachelors of Science</p>
            <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
            </div>

            <div className="coursebox72">
            <img src={msc} alt="" />
            <h1>MSC</h1>
            <p>Masters of Science</p>
            <h3>KNOW MORE</h3>
            </div>
            <div className="coursebox72">
            <img src={dca} alt="" />
            <h1>DCA</h1>
            <p>Diploma in Computer <br /> Applications</p>
            <h3>KNOW MORE</h3>
            </div>
            <div className="coursebox72">
            <img src={pgdca} alt="" />
            <h1>PGDCA</h1>
            <p>Post Graduate Diploma in Computer Applications</p>
            <h3>KNOW MORE</h3>
            </div>
        </div>   
    </div>
    <Home_footer/>
    </>
  )
}

export default Course7






