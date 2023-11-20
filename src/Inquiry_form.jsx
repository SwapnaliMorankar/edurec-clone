import React from 'react'
import './Inquiry_form.css'
import Form from 'react-bootstrap/Form';


function Inquiry_form() {
  return (
    <>		
		<Form className='enquiry_form' action="https://formsubmit.co/shinderajvardhan2051@email.com" method="POST">
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

			
		
			
			
	

</>
  )
}

export default Inquiry_form