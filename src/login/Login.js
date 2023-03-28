import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './App.css'; // Import the CSS file
import logo from '../images/logo.png';

const LoginForm = () => {
    // const [htmlContent, setHtmlContent] = useState('');
  const [message, setMessage] = useState('');
  const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  
  useEffect(() => {
    const initGoogleClient = async () => {
      await window.gapi.load('auth2', () => {
        window.gapi.auth2.init({
          client_id: GOOGLE_CLIENT_ID, // Use the GOOGLE_CLIENT_ID constant here
        });
      });
    };  
    initGoogleClient();
  }, []);

  const handleGoogleLogin = async () => {
    try {
      const auth2 = window.gapi.auth2.getAuthInstance();
      const googleUser = await auth2.signIn();

      // Get the ID token from the Google user object and send it to your backend for verification
      const idToken = googleUser.getAuthResponse().id_token;

      // Send the ID token to your backend (replace with your actual FastAPI endpoint for handling Google login)
      const response = await axios.post('http://127.0.0.1:8000/login/google', { idToken });

      setMessage(response.data.status);
    } catch (error) {
      setMessage('Error: Google login failed');
    }
  };

  // useEffect(() => {
  //   const loadLoginForm = async () => {
  //     const response = await fetch('/static/LoginForm.html');
  //     const html = await response.text();
  //     setHtmlContent(html);
  //   };
  //   loadLoginForm();
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
      const response = await axios.post('http://127.0.0.1:8000/login', {
        username,
        password,
      });
      setMessage(response.data.status);
    } catch (error) {
      setMessage('Error: Invalid username or password');
    }
  };

  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };


    return (
        <div className="App">
        <img src={logo} alt="Logo" /> {/* Add the logo image */}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
            />
            <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <br />
            <button type="submit">Login</button>
          </form>
          <div className="social-login-container">
            <div id="google-signin-button" onClick={handleGoogleLogin}></div>
          </div>
          <p>{message}</p>
        </div>
      );
    };

  // useEffect(() => {
  //   const form = document.querySelector('form');
  //   if (form) {
  //     form.addEventListener('submit', handleSubmit);
  //     return () => {
  //       form.removeEventListener('submit', handleSubmit);
  //     };
  //   }
  // }, [htmlContent]);
  export default LoginForm;