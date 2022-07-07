import React from 'react'
import './loginForm.css'
import {useNavigate} from "react-router-dom"
function LoginForm() {
  const navigate=useNavigate();
  return (
    <div className="loginForm">
		<div className="header-text">
			Login Form
		</div>
            <input placeholder="Your Email Address" type="text" /> 
            <input placeholder="Your Password" type="password" /> 
            <button onClick={()=>navigate("/dashboard")}>login</button>
            <span>Or Click here to <a href="/register">Register</a></span> 
	</div>
  )
}

export default LoginForm