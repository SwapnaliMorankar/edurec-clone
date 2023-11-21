import React from 'react'
import swal3 from 'sweetalert';
import './Inquiry_form.css'
import Form from 'react-bootstrap/Form';


function Inquiry_form() {

    function homepagemail(event2){
      event2.preventDefault();

      let Name2= document.getElementById("name2").value;
      let Email3= document.getElementById("email2").value;
      let Number2= document.getElementById("number2").value;
      let Course= document.getElementById("course").value;
      let homepage= "Name: "+ Name2 + "<br/>Email: "+ Email3 + "<br/>Number: "+ Number2 + "<br/> Course: "+ Course;

      Email.send({
        SecureToken : "ff0a9687-81b6-4e13-99f0-135cd98d54b3",
        To : 'snmorankar210603@gmail.com',
        From : "snmorankar210603@gmail.com",
        Subject : "Home page Enquiry form",
        Body : homepage
    }).then(
  
      message =>{
        if(message='OK'){
          swal3("Congratulations", "Your Enquiry has been sent successfully. We will contact you soon!", "success");
        }
      }
      
    );

  }

  return (
    <>		
      <div data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="linear">
		<Form className='enquiry_form' onSubmit={homepagemail} method='POST'>
		<h1 class="title text-center mb-4">ENQUIRY</h1>
      <Form.Group className="mb-3" controlId="formGroupText">
        <Form.Control type="text" placeholder="Name" id='name2' required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Control type="email" placeholder="Email" id="email2" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupNumber">
        <Form.Control type="text" placeholder="Contact" id="number2" pattern="[0-9]{10}" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupText">
        <Form.Control type="text" placeholder="Course" id="course" required/>
      </Form.Group>
	  <div class="text-center">
				<button type="submit" class="btn btn-primary" tabIndex="-1">Submit Enquiry</button>
			</div>
    </Form>
    </div>

</>
  )
}

export default Inquiry_form