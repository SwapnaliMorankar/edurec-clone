import React from 'react'
import swal5 from 'sweetalert';
import './Popup_enquiry.css'

import Form from 'react-bootstrap/Form';

function Course_popup() {
    
  function remove_course_popup(){
    document.querySelector(".my_popup").style.display="none";
    document.querySelector(".popup_enquiry_form").style.display="none";   
    document.querySelector(".blur").style.cssText = 'filter: blur(0px); -webkit-filter: blur(0px); -o-filter:blur(0px);-ms-filter:blur(0px);';
  }

  function popupmail1(event4){
    event4.preventDefault();

    let Name4= document.getElementById("name4").value;
    let Email5= document.getElementById("email4").value;
    let Number4= document.getElementById("number4").value;
    let Course2= document.getElementById("course2").value;
    let popup1= "Name: "+ Name4 + "<br/>Email: "+ Email5 + "<br/>Number: "+ Number4 + "<br/> Course: "+ Course2;

    Email.send({
      SecureToken : "ff0a9687-81b6-4e13-99f0-135cd98d54b3",
      To : 'snmorankar210603@gmail.com',
      From : "snmorankar210603@gmail.com",
      Subject : "Pop up Enquiry form",
      Body : popup1
      }).then(
    
        message =>{
          if(message='OK'){
            swal5("Congratulations", "Your Enquiry has been sent successfully. We will contact you soon!", "success");
          }
        }
      );
    }

  return (
    <>
    <div className="my_popup">
    <Form  className='popup_enquiry_form' onSubmit={popupmail1}>
        <h4 className='popup_cross' onClick={remove_course_popup}>X</h4>
		<h1 class="title text-center mb-4">ENQUIRY</h1>
      <Form.Group className="mb-3" controlId="formGroupText">
        <Form.Control type="text" placeholder="Name" id="name4" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Control type="email" placeholder="Email" id="email4" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupNumber">
        <Form.Control type="text" placeholder="Contact" id="number4" pattern="[0-9]{10}" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupText">
        <Form.Control type="text" placeholder="Course" id="course2" required/>
      </Form.Group>
	  <div class="text-center">
				<button type="submit" class="btn btn-primary" tabIndex="-1">Submit Enquiry</button>
			</div>
    </Form>
    </div>
    </>
  )
}

export default Course_popup