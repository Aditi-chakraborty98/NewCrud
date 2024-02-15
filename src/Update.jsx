import React, { useEffect } from 'react'
import { useRef } from 'react';
import { Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';
import a from './axios'
import { useNavigate, useParams } from 'react-router-dom';
const Update = () => {
    const navigate=useNavigate()
    const { id }= useParams()
    var firstName = useRef()
    var lastName = useRef()
    var email = useRef()
    var phoneNumber = useRef()
    var password = useRef()
    useEffect(()=>{
        var fetch= async (x)=>{
            let result= await a.get(`/student/${id}`)
            console.log(result.data);
           var fl= document.getElementById('firstName')
           var ln= document.getElementById('lastName')
           var em= document.getElementById('email')
           var pass= document.getElementById('password')
           var ph= document.getElementById('phoneNumber')
           
           fl.value=`${result.data.fl}`;
           ln.value=`${result.data.ln}`;
           em.value=`${result.data.em}`;
           pass.value=`${result.data.pass}`;
           ph.value=`${result.data.ph}`;
        }
        fetch();
    })
    var handleupdate = async (x) => {
        x.preventDefault();
        var fl = firstName.current.value
        var ln = lastName.current.value
        var em = email.current.value
        var ph = phoneNumber.current.value
        var pass = password.current.value
        var data = { fl, ln, em, ph, pass }
        console.log(data);
        await a.put(`/student/${id}`, data)
        alert("Updated")
        navigate('/getAll')
    }
    return (
        <Form style={{ maxWidth: '300px', margin: 'auto', marginTop: '50px' }}>
            <FormGroup>
                <FormLabel htmlFor="firstName">First Name: </FormLabel>
                <FormControl
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter your first name"
                    ref={firstName}
                    
                />
            </FormGroup>

            <FormGroup>
                <FormLabel htmlFor="lastName">Last Name:</FormLabel>
                <FormControl
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter your last name"
                    ref={lastName}
                />
            </FormGroup>

            <FormGroup>
                <FormLabel htmlFor="email">Email:</FormLabel>
                <FormControl
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    ref={email}
                />
            </FormGroup>

            <FormGroup>
                <FormLabel htmlFor="password">Password:</FormLabel>
                <FormControl
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    ref={password}
                />
            </FormGroup>

            <FormGroup>
                <FormLabel htmlFor="phoneNumber">Phone Number:</FormLabel>
                <FormControl
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Enter your phone number"
                    ref={phoneNumber}
                />
            </FormGroup>


            <Button type="submit" onClick={handleupdate} >
                update
            </Button>

        </Form>
    )
}

export default Update
