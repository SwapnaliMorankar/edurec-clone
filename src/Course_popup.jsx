import React from 'react'
import './Popup_enquiry.css'

import Form from 'react-bootstrap/Form';

function Course_popup() {
    
  function remove_course_popup(){
    document.querySelector(".my_popup").style.display="none";
    document.querySelector(".popup_enquiry_form").style.display="none";   
    document.querySelector(".blur").style.cssText = 'filter: blur(0px); -webkit-filter: blur(0px); -o-filter:blur(0px);-ms-filter:blur(0px);';
  }
  return (
    <>
    <div className="my_popup">
    <Form  className='popup_enquiry_form' >
        <h4 className='popup_cross' onClick={remove_course_popup}>X</h4>
		<h1 class="title text-center mb-4">ENQUIRY</h1>
      <Form.Group className="mb-3" controlId="formGroupText">
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupNumber">
        <Form.Control type="number" placeholder="Contact" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupText">
        <Form.Control type="text" placeholder="Course" />
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