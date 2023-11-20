import React from 'react'
import './Popup_enquiry.css'
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';


function Popup_enquiry() {
  const navigate=useNavigate();
  function remove_popup(){
   
    document.querySelector(".my_popup").style.display="none";
    document.querySelector(".popup_enquiry_form").style.display="none";
    
    document.querySelector(".blur").style.cssText = 'filter: blur(0px); -webkit-filter: blur(0px); -o-filter:blur(0px);-ms-filter:blur(0px);';
    navigate("/university");
    // document.querySelector(".blu2").style.cssText = 'filter: blur(0px); -webkit-filter: blur(0px); -o-filter:blur(0px);-ms-filter:blur(0px);';

  }
 
  return (
    <>
    <div className="my_popup">
    <Form  className='popup_enquiry_form' >
        <h4 className='popup_cross' onClick={remove_popup}>X</h4>
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

export default Popup_enquiry