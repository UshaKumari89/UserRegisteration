import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios for making HTTP requests
import './UserRegister.scss';
import Button from './Button';

const UserRegister = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setEmailValid(emailValue.trim() !== '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (emailValid) {
        const response = await axios.post('http://localhost:8000/api/checkEmail', { email });
        if (response.data.redirect === '/login') {
          navigate('/login');
        } else if (response.data.redirect === '/signup') {
          // Save email to localStorage
          localStorage.setItem('loginEmail', email);
          navigate('/signup');
        } else {
          setError('Unexpected response from server');
        }
      } else {
        setError('Email is required');
      }
    } catch (error) {
      console.error('Error checking login status:', error);
      setError('Failed to check login status');
    }
  };
  

  return (
    <div className="signup-login-container">
      <h2>Sign Up or Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <section>
            <input
              type="email"
              placeholder="john@example.com"
              value={email}
              onChange={handleEmailChange}
              className={`input ${!emailValid ? 'invalid' : ''}`}
              required
            />
            <span>*</span>
          </section>
          <label htmlFor="email">Email</label>
        </div>
        {error && <div className="error">{error}</div>}
        <Button label="Continue" type="submit" />
      </form>
    </div>
  );
};

export default UserRegister;
