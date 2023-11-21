import React from 'react'
import './Home_footer.css';
import Edureclogo from './Other_images/Edureclogo.png'
import { Link } from 'react-router-dom';
import Popup_enquiry from './Popup_enquiry';
import Course_popup from './Course_popup';


function Home_footer() {
  function show_course_popup() {
    document.querySelector(".my_popup").style.display="block";
    document.querySelector(".popup_enquiry_form").style.display="block";
    document.querySelector(".blur").style.cssText = 'filter: blur(5px); -webkit-filter: blur(5px); -o-filter:blur(5px);-ms-filter:blur(5px);';
    

  }
  return (
    <>
    <footer>
    <div className="my_popup"><Popup_enquiry/></div>
    <Course_popup/>
      <div className="home_footer_box1">
        <div className="home_footer_box1_1"><img src={Edureclogo} alt="" /></div>
        <div className="home_footer_box1_2">
          <ul className='home_footer_list_title'>Connect
          <li><a href=""> admissionsupport@edurec.in  </a></li>
          <li><a href="">+91 9156679600 </a></li>
          </ul>
          </div>
        <div className="home_footer_box1_3">
          <ul className='home_footer_list_title'>Use case
          <li><Link to="" className='home_footer_list_elements' onClick={show_course_popup} >Enquiry Now</Link></li>
          <li><Link to="/university" className='home_footer_list_elements' >Universites</Link></li>
            
          </ul>
          </div>
        <div className="home_footer_box1_4">
          <ul className='home_footer_list_title'>COURSES
          <li><Link to="/dypatil" className='home_footer_list_elements'>MBA</Link></li>
          <li><Link to="/manipal" className='home_footer_list_elements'>BBA</Link></li>
          <li><Link to="/amity" className='home_footer_list_elements'>BCA</Link></li>
          </ul>
          </div>
        <div className="home_footer_box1_5">
          <ul className='home_footer_list_title'>VISIT
          <li><Link to="/about" className='home_footer_list_elements'>About Us</Link></li>
          <li><Link to="/university" className='home_footer_list_elements'>Partners</Link></li>
          <li><Link to="/" className='home_footer_list_elements'>Courses</Link></li>
          <li><Link to="/" className='home_footer_list_elements'>Flow</Link></li>
          <li><Link to="/support" className='home_footer_list_elements'>Contact US</Link></li>
          </ul>
          </div>
        <div className="home_footer_box1_6">
          Location
         <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3784.587008016578!2d73.80165817519008!3d18.45705138262426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDI3JzI1LjQiTiA3M8KwNDgnMTUuMiJF!5e0!3m2!1sen!2sin!4v1699174089075!5m2!1sen!2sin" width={200} height={200}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
          
          </div>

      </div>
    
    </footer>
   </>
  )
}

export default Home_footer