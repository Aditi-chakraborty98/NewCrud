import React from 'react'
import { useLocation } from 'react-router-dom';

async function UserProfile (a) {
    const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  
  const fl = queryParams.get('fl');
  const ln = queryParams.get('ln');
  const em = queryParams.get('em');
  const pass=queryParams.get('pass');
  const ph= queryParams.get('ph');
  return (
    <div>


<h1>Name: {fl} {ln}</h1>
      <h1>Email: {em}</h1>
      <h1>Password: {pass}</h1>
      <h1>Phone Number: {ph}</h1>
    </div>
    
  )
}

export default UserProfile;