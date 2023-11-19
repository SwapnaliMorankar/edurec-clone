import React from 'react'
import './Home_top_partners.css';
import Button from 'react-bootstrap/Button';
import Popup_enquiry from './Popup_enquiry';
import { Link, useNavigate } from 'react-router-dom';



function Home_top_partners() {
 
  function show_popup() {
    document.querySelector(".my_popup").style.display="block";
   
    document.querySelector(".popup_enquiry_form").style.display="block";
    document.querySelector(".blur").style.cssText = 'filter: blur(5px); -webkit-filter: blur(5px); -o-filter:blur(5px);-ms-filter:blur(5px);';
    

  }
 
  return (
    <>


<body className='blur'>
      <h2 className='Home_our_top_partners' id='partners'>OUR TOP PARTNERS</h2>
      <div className="home_top_partners">
        <div className="home_partner_card">
          <div class="stack1">
            <div class="layer layer_11">

              Dr Dy Patil Vidyapeeth
            </div>
            <div class="layer layer_21">


            </div>
            <div class="layer layer_3">
             <Link to="/dypatil" >Learn More</Link>
               
              
            </div>
          </div></div>
        {/* CARD ONE ENDED ..................................................................*/}
        <div className="home_partner_card">
          <div class="stack2">
            <div class="layer layer_12">
              MANIPAL UNIVERSITY
            </div>
            <div class="layer layer_22">

            </div>
            <div class="layer layer_3">
            <Link to="/manipal">Learn More</Link>
            </div>
          </div></div>
        {/* CARD TOW ENDED...................................................................... */}
        <div className="home_partner_card">
          <div class="stack3">
            <div class="layer layer_13">
              JAIN UNIVERSITY
            </div>
            <div class="layer layer_23">

            </div>
            <div class="layer layer_3">
            <Link to="/jain">Learn More</Link>
            </div>
          </div></div>
        {/* CARD THREE ENDED........................................................................................ */}
        <div className="home_partner_card">
          <div class="stack4">
            <div class="layer layer_14">
              AMITY UNIVERSITY
            </div>
            <div class="layer layer_24">

            </div>
            <div class="layer layer_3">
            <Link to="/amity">Learn More</Link>
            </div>
          </div></div>
        {/* CARD FOUR ENDED.................................................................................................................. */}
        <div className="home_partner_card">
          <div class="stack5">
            <div class="layer layer_15">
              UTTARANCHAL UNIV
            </div>
            <div class="layer layer_25">

            </div>
            <div class="layer layer_3">
            <Link to="/uttaranchal">Learn More</Link>
            </div>
          </div></div>
        {/* CARD FIVE ENDED...................................................................................... */}
        <div className="home_partner_card">
          <div class="stack6">
            <div class="layer layer_16">
              Mangalayatan University
            </div>
            <div class="layer layer_26">

            </div>
            <div class="layer layer_3">
            <Link to="/mangalayatan">Learn More</Link>
            </div>

          </div></div>
          <div className="home_partner_card_button">
          <Button variant="outline-danger" className='home_top_partners_viewmore' onClick={show_popup}>View More</Button>{' '}
        </div>
        
       
   
        </div>
      </body>
      {/* popup-------------------------------------------------- */}
      <div className="my_popup"><Popup_enquiry /></div>
      
      
    </>

  )
}

export default Home_top_partners