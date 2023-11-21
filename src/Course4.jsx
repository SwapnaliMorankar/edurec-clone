import React from 'react'
import './Course4.css';
import amity1 from './amity1.jpeg';
import amity2 from './amity2.png';
import mba1 from './mba.jpeg';
import bba1 from './bba.jpeg';
import bca1 from './bca.jpg';
import mca1 from './mca.jpeg';
import bcom1 from './bcom.jpg';
import mcom1 from './mcom.jpg';
import ba from './ba.jpeg';
import ma from './ma.jpg';
import bajmc from './bajmc.jpg';
import majmc from './majmc.png';
import aiml from './aiml.jpg';
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


function Course4() {
  function show_course_popup() {
    document.querySelector(".my_popup").style.display="block";
    document.querySelector(".popup_enquiry_form").style.display="block";
    document.querySelector(".blur").style.cssText = 'filter: blur(5px); -webkit-filter: blur(5px); -o-filter:blur(5px);-ms-filter:blur(5px);';
    

  }
  return (
    <>
  
    <Course_popup/>
    <div className="course4a">
      <img src={amity1} alt="" />
    </div>
    {/* social media****************************************************************************************************************************** */}
    <div className="university_footer_socialmedia">
        <div className="university_icons">
        <a href="https://instagram.com/edurec.in?igshid=cGdpYmlta2V4YXg=" target='_blank'> <img src={instalogo} alt="" /></a>
        <a href="https://wa.link/q57v2j  "target='_blank'> <img src={whatsapplogo} alt="" /></a>
        <a href="https://www.facebook.com/profile.php?id=61552360414876" target='_blank'> <img src={facebooklogo} alt="" /></a>
        </div>
      </div>
    <div className="course4b">
      <h1>Amity University</h1>
    </div>

    <div className="course4c">
      <p>Amity University, Noida (also known as Amity University Uttar Pradesh) is a private research university located in Noida, India. It was established in 2005 by an Act of the State Legislature of Uttar Pradesh. The university is recognized by University Grants Commission and accredited by the NAAC with grade 'A+'.It has campuses in India and overseas branch campuses in London, Dubai, Singapore and New York. The Amity University has been established by an act of State Legislature and recognized by University Grants Commission (UGC) through the Act of State Legislature.Amity has some of the most talented and dedicated thought leaders in the country who come from the best institutions around the world. Ranked India's # 1 Not-For-Profit Pvt. University. Diverse Learning Mediums, Dedicated Academic Advisor, AI-Professor AMI, Career Services, Doorstep Delivery Of Books, Metaverse Campus, Offline Experiences, Placement Opportunities. University has an approval by UGC, DEB, AICTE, AIU, WES. </p>
    </div>

    <div className="course4g">
      <img src={amity2} alt="" />
    </div>

    <div className="course4f">
      <div className="course4fa">
        <div className="coursebox41"><h2>NAAC A+</h2></div>
        <div className="coursebox41"><h2>NIRF 37</h2></div>
      </div>
      <div className="course4fb">
        <div className="coursebox41"><h2>PLACEMENT ASSISTANCE</h2></div>
        <div className="coursebox41"><h2>SUPPORT TEAM / MENTOR</h2></div>
      </div>
    </div> 

    <div className="course4d">
      <h1>OUR TOP COURSES</h1>
    </div>
    <div className="my_popup"><Popup_enquiry/></div>
    <div className="course4e">
         <div className="course4ea">
            <div className="coursebox42">
            <img src={mba1} alt="" />
            <h1>MBA</h1>
            <p>Masters of Business <br /> Administration</p>
            <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
            </div>
            <div className="coursebox42">
            <img src={bba1} alt="" />
            <h1>BBA</h1>
            <p>Bachelors of Business Administration</p>
            <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
            </div>
            <div className="coursebox42">
            <img src={bca1} alt="" />
            <h1>BCA</h1>
            <p>Bachelors of Computer <br /> Application</p>
            <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
            </div>

            <div className="coursebox42">
            <img src={mca1} alt="" />
            <h1>MCA</h1>
            <p>Masters of Computer <br /> Application</p>
            <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
            </div>
            <div className="coursebox42">
            <img src={bcom1} alt="" />
            <h1>BCOM</h1>
            <p>Bachelor of Commerce</p>
            <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
            </div>
            <div className="coursebox42">
            <img src={mcom1} alt="" />
            <h1>MCOM</h1>
            <p>Master of Commerce</p>
            <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
            </div>

            <div className="coursebox42">
            <img src={ba} alt="" />
            <h1>BA</h1>
            <p>Bachelors of Arts</p>
            <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
            </div>
            <div className="coursebox42">
            <img src={ma} alt="" />
            <h1>MA</h1>
            <p>Masters of Arts</p>
            <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
            </div>
            <div className="coursebox42">
            <img src={bajmc} alt="" />
            <h1>BAJMC</h1>
            <p>Bachelors of Arts in Journalism and Mass Communication</p>
            <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
            </div>

            <div className="coursebox42">
            <img src={majmc} alt="" />
            <h1>MAJMC</h1>
            <p>Masters of Arts in Journalism and Mass Communication</p>
            <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
            </div>
            <div className="coursebox42">
            <img src={aiml} alt="" />
            <h1>AI and ML</h1>
            <p>Certification in AI and ML</p>
            <div className="my_popup"> <h3 onClick={show_course_popup}>KNOW MORE</h3></div>
            </div>
        </div>   
    </div>

    <Home_footer/>
    </>
  )
}

export default Course4
