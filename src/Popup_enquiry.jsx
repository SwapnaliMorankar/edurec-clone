import React from 'react'
import swal4 from 'sweetalert';
import './Popup_enquiry.css'
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';


function Popup_enquiry() {
  const navigate=useNavigate();

  function remove_popup(){ 
    document.querySelector(".my_popup").style.display="none";
    document.querySelector(".popup_enquiry_form").style.display="none";
    navigate("/university");
    document.querySelector(".blur").style.cssText = 'filter: blur(0px); -webkit-filter: blur(0px); -o-filter:blur(0px);-ms-filter:blur(0px);';
    // document.querySelector(".blu2").style.cssText = 'filter: blur(0px); -webkit-filter: blur(0px); -o-filter:blur(0px);-ms-filter:blur(0px);';
  }

    function popupmail(event3){
      event3.preventDefault();

      let Name3= document.getElementById("name3").value;
      let Email4= document.getElementById("email3").value;
      let Number3= document.getElementById("number3").value;
      let Course1= document.getElementById("course1").value;
      let popup= "Name: "+ Name3 + "<br/>Email: "+ Email4 + "<br/>Number: "+ Number3 + "<br/> Course: "+ Course1;

      Email.send({
        SecureToken : "ff0a9687-81b6-4e13-99f0-135cd98d54b3",
        To : 'snmorankar210603@gmail.com',
        From : "snmorankar210603@gmail.com",
        Subject : "Pop up Enquiry form",
        Body : popup
        }).then(
      
          message =>{
            if(message='OK'){
              swal4("Congratulations", "Your Enquiry has been sent successfully. We will contact you soon!", "success");
            }
          }
        );
      }
 
  return (
    <>
    <div className="my_popup">
    <Form  className='popup_enquiry_form'  onSubmit={popupmail}>
        <h4 className='popup_cross' onClick={remove_popup}>X</h4>
		<h1 class="title text-center mb-4">ENQUIRY</h1>
      <Form.Group className="mb-3" controlId="formGroupText">
        <Form.Control type="text" placeholder="Name" id="name3" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Control type="email" placeholder="Email" id="email3" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupNumber">
        <Form.Control type="text" placeholder="Contact" id="number3" pattern="[0-9]{10}" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupText">
        <Form.Control type="text" placeholder="Course" id="course1" required/>
      </Form.Group>
	  <div class="text-center">
				<button type="submit" class="btn btn-primary" tabIndex="-1">Submit Enquiry</button>
			</div>
    </Form>
    </div>
    </>
  )
}

export default Popup_enquiry