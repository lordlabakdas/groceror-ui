import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoginForm from './LoginForm';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const history = useNavigate(); // Add this line to use the useHistory hook

  const onFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit(event);

    // If login is successful, redirect to the inventory page
    // You may want to check the login status before redirecting
    history.push('/inventory');
  };
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


  return (<div className="body-background">
    <form onSubmit={onFormSubmit}>
  <LoginForm
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      handleGoogleLogin={handleGoogleLogin}
      message={message}
    />
    </form>
</div>
    
  );
}
  export default Login;