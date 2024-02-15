import React from 'react'
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginPage from './Login'
import App from './App';
import GetAll from './GetAll'
import Update from './Update';
import Home from './Home';
import Delete from './Delete';
import UserProfile from './UserProfile';
let Menu = () => {
  return (
   <Router>
    
    
    <div class="parent">
        <h2 class="logo">Logo</h2>
        <div  class="child">
            
           
            <a href=""><Link to={"/app"}>Register</Link></a>
            <a href=""><Link to={"/getAll"}>GetAll</Link></a>
            <a href=""><Link to={"/login"}>Login</Link></a>
            
            
        </div>
    </div>
       
    

   
    <Routes>
    <Route path='/app' element={<App />} />
    <Route path='/getAll' element={<GetAll />} />
    <Route path='/login' element={<LoginPage />}/>
    <Route path="/update/:id" element={<Update />}/>
    <Route path='/home' element={<Home />}/>
    <Route path="/delete/:id" element={<Delete />}/>
    <Route path="/Userprofile" element={<UserProfile />}/>

    </Routes>

    </Router>
  )
}

export default Menu
