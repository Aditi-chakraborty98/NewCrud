import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';
import a from './axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate=useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    
    var result= await a.get(`/student`)
  
    var status=false;
   for(var student of result.data)
   {
    if(student.em===email&&student.pass===password&& status===false)
    {
      console.log(student);
     let{fl,ln,em,pass,ph,id}=student;
     let result={fl,ln,em,pass,ph,id};
     
    navigate(`/home?fl=${result.fl}&ln=${result.ln}&em=${result.em}&pass=${result.pass}&ph=${result.ph}&id=${result.id}`); 
   
      alert('SuccesFully looged In');
      status =true;

    }
   }
   if(status===false)
   {
    alert('Invalid Credentials');
    navigate('/login');
   }
  };

  return (
    <div id="bckgrnd">
      <Form style={{ maxWidth: '300px', margin: 'auto', marginTop: '50px' }}>
      <FormGroup className=" ff mb-3 col-mb-5">
        <FormLabel htmlFor="email">Email:</FormLabel>
        <FormControl
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormGroup>

      <FormGroup className="ff mb-3">
        <FormLabel htmlFor="password">Password:</FormLabel>
        <FormControl
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormGroup>

      <Button variant="primary" type="submit" onClick={handleLogin}>
        Login
      </Button>
    </Form>
    </div>
  );
};

export default LoginPage;
