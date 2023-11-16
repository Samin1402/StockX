import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; 
import  "./LoginAdmin.css";
import Group from "../assets/Group.png";
import logo from "../assets/logo.png";
import pass from "../assets/pass.png";
import email from "../assets/email.png";

export const AdminLogin = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [emailError, setEmailError] = useState("");
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);


  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      email: email,
      password: pass, };
    try {
      
      // Make an API request
      const response = await fetch('https://api.stock.mindzbase.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });
  
      if (response.ok) {
        const data = await response.json();
        // Handle the data as needed
        console.log(data);
      
        // Redirect to Home
        navigate('/Home');
      } else {
        // Handle error responses
        const errorData = await response.json();
        setEmailError(errorData.message); 
      }
      
    } catch (error) {
      console.log('Error:', error);
      setEmailError('An error occurred while logging in');
    }
  };


  return (
    <div className="auth-form-container">

      <div className="left-section">
        <div className="logo">
      <img  src={logo} alt="logo" />
      </div>
      <div className="image_logo">
      <img className="image_logo" src={Group} alt="Group" />
      </div>
      </div>


      <div className="right-section">
        <div className="right_side">
          <div className="user">
          Admin
          </div>

          <form className="Login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
            <div className="Emailbutton" >
              <img src={email} alt=""/>
          <label htmlFor="email" ></label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            id="email"
            name="email"
          />
          {emailError && <p className="error-message">{emailError}</p>}
          </div>
          <div className="Passbutton">
          <img src={pass} alt=""/>
          <label htmlFor="password"></label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="Password"
            id="password"
            name="password"
          />
          </div>
          <button className="login-button" type="submit">Log In</button>
        </form>
        <div className="keep-logged-in">
        <label>
          <input
            type="checkbox"
            checked={keepLoggedIn}
            onChange={() => setKeepLoggedIn(!keepLoggedIn)}
          />
          Keep me logged in
        </label>
      </div>
      <p className="forgotpassword">
        <span>Forgot your password? </span>
      </p>

        </div>
      </div>
    
    </div>
  );
};
