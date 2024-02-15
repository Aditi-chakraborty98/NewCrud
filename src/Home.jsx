import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import a from './axios';
import { faEnvelope,faGear,faUser,faUsersViewfinder } from '@fortawesome/free-solid-svg-icons'
const Home = () => {
    const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const navigate=useNavigate()
  const fl = queryParams.get('fl');
  const ln = queryParams.get('ln');
  const em = queryParams.get('em');
  const pass=queryParams.get('pass');
  const ph= queryParams.get('ph');
  const handleLogin= async(e)=>{
   
    var result = await a.get(`/student`)
    navigate(`/UserProfile?fl=${fl}&ln=${ln}&em=${em}&pass=${pass}&ph=${ph}&id=${result.id}`); 
  }
  return (
    <div>
      <h1>DashBoard</h1>
      
      <h1>Name: {fl} {ln}</h1>
      <h1>Email: {em}</h1>
      <h1>Password: {pass}</h1>
      <h1>Phone Number: {ph}</h1>
      <div id='disp'>
      <div onClick={handleLogin}><FontAwesomeIcon className="icn" icon={faUser}  /></div>
      <Link to="/Userprofile">
      <FontAwesomeIcon className="icn" icon={faUser}  />
      </Link>
      <div id="card"><FontAwesomeIcon  className="icn" icon={faGear} spin /></div>
      
      </div>
      
    </div>
  )
}

export default Home
