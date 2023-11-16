import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import Group from "../assets/Group.png";
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';
import PhoneNumberVerification from "./PhoneNumberVerification";

export const Signup = (props) =>
{
    const [email, setEmail] = useState ('');
    const [pass, setPass] = useState ('');
    const [name, setName] = useState ('');
    const [name1, setName1] = useState('');
    const [emailError, setEmailError] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
      const payload = {
        email: email,
        password: pass, };
      try {
        
        // Make an API request
        const response = await fetch('192.168.100.57:3000/api/auth/register', {
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
        
        {/* leftsection */}
        <div className="left-section">
        <img src={logo} alt="logo" />
      <img src={Group} alt="Group" />
      </div>


         {/* rightsection */}
      <div className="right-section">
      <div className="user">User</div>
      <div className="signup">Sign Up</div>
      <div className="group-child" />
        <div className="group-item" />
        <div className="rectanglegroup">
          <div className="group-inner" />
         
        <form className="SignUp-form" onSubmit={handleSubmit}>
          {/* div for names */}
          <div className="group-inner">

          <label htmlFor="name">First Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            placeholder="First Name"
            name="name"
          />
          </div>
           <div className="rectangle-div" >
          <label htmlFor="name">Last Name</label>
          <input
            value={name1}
            onChange={(e) => setName1(e.target.value)}
            type="text"
            id="name"
            placeholder="Last Name"
            name="name"
          />
          </div>

{/* div for email */}
<div className="email">
          <label htmlFor="email">Email</label>
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
          {/* div for phone number */}
          <div className="PhoneNumberVerification">
          <PhoneNumberVerification />
          </div>
         {/* div for password */}
         <div className="Password">
          <label htmlFor="password">Password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="Password"
            id="password"
            name="password"
          />
          </div>
          <div className="Register">
          <button type="submit">Register</button>
          </div>
        </form>

        <div> 
          <p>Already Have Account?</p>
        <button className="link-btn" onClick={() => props.onFormSwitch('Login')}>
          Signin
          <Link to="/Home"></Link> 
        </button>
        </div>
       
      </div>
      </div>
      </div>
    );
  };
  