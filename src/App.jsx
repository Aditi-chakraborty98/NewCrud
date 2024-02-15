import React, { useRef } from 'react'
import a from './axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Col, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase/config';
import { useState } from 'react';
const  App = () => {
  var firstName=useRef()
  var lastName=useRef()
  var email=useRef()
  var phoneNumber=useRef()
  var password=useRef()
  const [loading, setLoading] = useState(false);

   var  handleclick= async (x)=>{
    
    x.preventDefault();
   var fl= firstName.current.value
   var ln=lastName.current.value
   var em=email.current.value
   var ph=phoneNumber.current.value
   var pass=password.current.value
   var data={fl,ln,em,ph,pass}
   try {
    setLoading(true);

    // Firebase authentication
    const userCredential = await createUserWithEmailAndPassword(auth, em, pass);
    const user = userCredential.user;
    console.log(user);
    // Your Axios POST request
    const data = { fl, ln, em, ph, pass };
    await a.post("/student", data);

    alert("Submitted");
  } catch (error) {
    console.error("Error creating user:", error.message);
    alert("Error submitting the form. Please try again.");
  } finally {
    setLoading(false);
  }
};
  return (
  //   <div>
  //     <form>
  //   <div class="form-group">
  //     <label for="firstName">First Name: </label>
  //     <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" ref={firstName}/>
  //   </div>
  //   <div class="form-group">
  //     <label for="lastName">Last Name:</label>
  //     <input type="text" id="lastName" name="lastName" placeholder="Enter your last name" ref={lastName}/>
  //   </div>
  //   <div class="form-group">
  //     <label for="email">Email:</label>
  //     <input type="email" id="email" name="email" placeholder="Enter your email" ref={email}/>
  //   </div>
  //   <div class="form-group">
  //     <label for="password">Password:</label>
  //     <input type="email" id="password" name="password" placeholder="Enter your password" ref={password}/>
  //   </div>
  //   <div class="form-group">
  //     <label for="phoneNumber">Phone Number:</label>
  //     <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="Enter your phone number"ref={phoneNumber}/>
  //   </div>
  //   <button type="submit" onClick={handleclick}>Submit</button>
  // </form>
  //   </div>
  <Form style={{ maxWidth: '300px', margin: 'auto', marginTop: '50px' }}>
  <FormGroup className=' ff col-lg-9'>
    <FormLabel htmlFor="firstName">First Name: </FormLabel>
    
    <FormControl
      type="text"
      id="firstName"
      name="firstName"
      placeholder="Enter your first name"
      ref={firstName}
    />
  
  </FormGroup>

  <FormGroup className=' ff col-lg-9'>
    <FormLabel htmlFor="lastName">Last Name:</FormLabel>
    <FormControl className='inp'
      type="text"
      id="lastName"
      name="lastName"
      placeholder="Enter your last name"
      ref={lastName}
    />
  </FormGroup>

  <FormGroup className=' ff col-lg-9'>
    <FormLabel htmlFor="email">Email:</FormLabel>
    <FormControl
      type="email"
      id="email"
      name="email"
      placeholder="Enter your email"
      ref={email}
    />
  </FormGroup>

  <FormGroup className=' ff col-lg-9'>
    <FormLabel htmlFor="password">Password:</FormLabel>
    <FormControl
      type="password" 
      id="password"
      name="password"
      placeholder="Enter your password"
      ref={password}
    />
  </FormGroup>

  <FormGroup className=' ff col-lg-9'>
    <FormLabel htmlFor="phoneNumber">Phone Number:</FormLabel>
    <FormControl
      type="tel"
      id="phoneNumber"
      name="phoneNumber"
      placeholder="Enter your phone number"
      ref={phoneNumber}
    />
  </FormGroup>

 
  <Button onClick={handleclick} disabled={loading}>
        {loading ? 'Submitting...' : 'Submit'}
      </Button>
  
</Form>
    
  )
}

export default App;
