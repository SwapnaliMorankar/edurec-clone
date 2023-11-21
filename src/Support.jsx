import React from 'react'
import swal2 from 'sweetalert';
import supportimage from './Other_images/Support_topimage.jpg'
import './Support.css'
import Navigationbar from './Navigationbar'
import Popup_enquiry from './Popup_enquiry';
import Course_popup from './Course_popup';
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
import Just_nav from './Just_nav';

function Support() {


  function show_course_popup() {
    document.querySelector(".my_popup").style.display="block";
    document.querySelector(".popup_enquiry_form").style.display="block";
    document.querySelector(".blur").style.cssText = 'filter: blur(5px); -webkit-filter: blur(5px); -o-filter:blur(5px);-ms-filter:blur(5px);';
   
  }

    function supportmail(event1){
      event1.preventDefault();
      console.log("hii");

      let Name1= document.getElementById("name1").value;
      let Email2= document.getElementById("email1").value;
      let Number1= document.getElementById("number1").value;
      let Query1= document.querySelector(".query1").value;
      let answer = "Name: " + Name1 + "<br/> Email: " + Email2 + "<br/> Contact Number: " + Number1 + "<br/> Query: " + Query1;
      Email.send({
        SecureToken : "ff0a9687-81b6-4e13-99f0-135cd98d54b3",
        To : 'snmorankar210603@gmail.com',
        From : "snmorankar210603@gmail.com",
        Subject : "Support page Enquiry form",
        Body : answer
    }).then(
      message =>{
        if(message='OK'){
          swal2("Congratulations", "Your Enquiry has been sent successfully. We will contact you soon!", "success");
        }
      }
    );
    }

  return (
    <>
    <Just_nav/>

    <Course_popup/>
           <div className="my_popup"><Popup_enquiry/></div>
           


    <div className="support1">
        <div className="support1a">
            <h1>LIVE <br /> SUPPORT</h1>
            <p>Get 24 hours live enquiry support from our team.</p> 
            <p id='three'> Resolve your dilemma in minutes and get the best <br /> counselling support from us. </p>
                
                <button onClick={show_course_popup}>CONTACT US</button>
          
        </div>
        
        <div className="support1b">
            <img src={supportimage} alt="No image" />
        </div>
    </div>
        {/* social media sticky=----------------------------------- */}
        <div className="home_footer_socialmedia">
        <div className="icons">
        <a href="https://instagram.com/edurec.in?igshid=cGdpYmlta2V4YXg="> <img src={instalogo} alt="" /></a>
        <a href="https://wa.link/q57v2j"> <img src={whatsapplogo} alt="" /></a>
        
        <a href="https://www.facebook.com/profile.php?id=61552360414876"> <img src={facebooklogo} alt="" /></a>
        </div>
      </div>


    <div className="support2">
        <div className="support2a">
          <div className="support2b">
          <form action="" className='support_form' onSubmit={supportmail} method='POST'>
            <h1>ASK YOUR QUERY</h1>
            <label htmlFor="" id='two'>Name: </label> <br />
            <input type="text" placeholder='Enter your Name' id="name1" required/> <br />
            <label htmlFor="">Email: </label> <br />
            <input type="email" placeholder='Enter your Email' id="email1" required/> <br />
            <label htmlFor="">Contact Number: </label> <br />
            <input type="text" placeholder='Enter your Contact Number' id="number1" pattern="[0-9]{10}" required/> <br />
            <label htmlFor="">Query: </label> <br />
            <input type="textarea" placeholder='Submit your query' id="one" className="query1" required/> <br />
            <button>SUBMIT</button>
          </form>
        </div>
        </div>
    </div>
 
    <Home_footer/>
    </>
  )
}


export default Support