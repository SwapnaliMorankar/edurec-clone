import React from 'react'
import './Home_top_courses.css';
import Button from 'react-bootstrap/Button';
import './Popup_enquiry.css'
import Popup_enquiry from './Popup_enquiry';
import { Link, useNavigate } from 'react-router-dom';
function Home_top_courses() {

   function show_popup() {

      document.querySelector(".my_popup").style.display = "block";
      document.querySelector(".popup_enquiry_form").style.display = "block";

      document.querySelector(".blur2").style.cssText = 'filter: blur(5px); -webkit-filter: blur(5px); -o-filter:blur(5px);-ms-filter:blur(5px);';


   }
   return (
      <>
         <div className="blur2">
            <h2 className='Home_our_top_courses' id='courses'>OUR TOP COURSES</h2>
            <div className="Home_top_courses_flex">
               <div className="boyimg"></div>
               <div class="home_top_courses_container">{/* deflaut class just changed the name because old name was*/}
                  <div class="card">
                     <div class="face face1">
                        <div class="content">

                           <h3>MBA</h3>
                        </div>
                     </div>
                     <div class="face face2">
                        <div class="content">
                           <p class="home_top_courses_ammount"><strong className='fee_structure'>FEE STRUCTURE</strong></p>
                           <p class="home_top_courses_ammount"><strong className='home_top_courses_fees'>DR DY PATIL VIDYPEETH PUNE : </strong>14,0200rs</p>
                           <p class="home_top_courses_ammount"><strong className='home_top_courses_fees'>MANIPAL UNIVERSITY JAIPUR : </strong>16,6000rs</p>
                           <p class="home_top_courses_ammount"><strong className='home_top_courses_fees'>JAIN UNIVERSITY : </strong>15,00000rs</p>
                           <Link to="/university">Read More </Link>
                        </div>
                     </div>
                  </div>
                  <div class="card">
                     <div class="face face1">
                        <div class="content">
                           <h3>BBA</h3>
                        </div>
                     </div>
                     <div class="face face2">
                        <div class="content">
                           <p><strong className='fee_structure'>FEE STRUCTURE</strong></p>
                           <p class="home_top_courses_ammount"><strong className='home_top_courses_fees'>DR DY PATIL VIDYPEETH PUNE : </strong>10,2200rs</p>
                           <p class="home_top_courses_ammount"><strong className='home_top_courses_fees'>MANIPAL UNIVERSITY JAIPUR : </strong>13,50000rs</p>
                           <p class="home_top_courses_ammount"><strong className='home_top_courses_fees'>JAIN UNIVERSITY : </strong>16,5000rs</p>
                           <Link to="/university">Read More </Link>
                        </div>
                     </div>
                  </div>
                  <div class="card">
                     <div class="face face1">
                        <div class="content">

                           <h3>MCA</h3>
                        </div>
                     </div>
                     <div class="face face2">
                        <div class="content">
                           <p><strong className='fee_structure'>FEE STRUCTURE</strong></p>
                           <p class="home_top_courses_ammount"><strong className='home_top_courses_fees'>AMITY UNIVERSITY : </strong>1,64,000 INR</p>
                           <p class="home_top_courses_ammount"><strong className='home_top_courses_fees'>MANIPAL UNIVERSITY JAIPUR : </strong>1,58,000 INR</p>
                           <p class="home_top_courses_ammount"><strong className='home_top_courses_fees'>JAIN UNIVERSITY : </strong>1,30,000 INR</p>
                           <Link to="/university">Read More </Link>
                        </div>
                     </div>
                  </div>
                  <div class="card">
                     <div class="face face1">
                        <div class="content">
                           <h3>BCA</h3>
                        </div>
                     </div>
                     <div class="face face2">
                        <div class="content">
                           <p class="home_top_courses_ammount"><strong className='fee_structure'>FEE STRUCTURE</strong></p>
                           <p class="home_top_courses_ammount"><strong className='home_top_courses_fees'>UTTARANCHAL UNIVERSITY : </strong>72,000 INR</p>
                           <p class="home_top_courses_ammount"><strong className='home_top_courses_fees'>AMITY UNIVERSITY : </strong>1,39,000 INR</p>
                           <p class="home_top_courses_ammount"><strong className='home_top_courses_fees'>LOVELY PROFESSIONAL UNIVERSITY : </strong>1,74,000 INR</p>
                           <Link to="/university">Read More </Link>
                        </div>
                     </div>
                  </div>
                  <div className="home_partner_card">
                     <Button variant="outline-danger" className='home_top_courses_viewmore' onClick={show_popup}>View More</Button>{' '}
                  </div>
               </div></div>
         </div>
         <div className="my_popup"><Popup_enquiry /></div>
      </>
   )
}

export default Home_top_courses