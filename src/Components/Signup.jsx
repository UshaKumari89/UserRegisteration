import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './UserRegister.scss';
import Button from "./Button";

const SignUp = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newsletterChecked, setNewsletterChecked] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const [error, setError] = useState('');

  const handleNewsletterChange = () => {
    setNewsletterChecked(!newsletterChecked);
  };

  const handleTermsChange = () => {
    setTermsChecked(!termsChecked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/createuser', {
        name,
        surname,
        email,
        password
      });
      if (response.data.success) {
        // User created successfully, save email to localStorage
        localStorage.setItem('loginEmail', email);
        // Navigate to login page
        navigate('/login');
      } else {
        setError('Failed to create user');
      }
    } catch (error) {
      console.error('Error creating user:', error);
      setError('Failed to create user');
    }
  };
  

  return (
    <div className="signup-login-container">
      <h2>Become Domatician!</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <section>
            <input
              type="text"
              id="name"
              className="input"
              placeholder="John"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <span>*</span>
          </section>
          <label htmlFor="name">Name</label>
        </div>
        <div className="input-container">
          <section>
            <input
              type="text"
              id="surname"
              placeholder="Deo"
              className="input"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </section>
          <label htmlFor="surname">Surname</label>
        </div>
        <div className="input-container">
          <section>
            <input
              type="email"
              id="email"
              placeholder="john@gmail.com"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span>*</span>
          </section>
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-container">
          <section className="form-group">
            <input
              type="password"
              id="password"
              className="input"
              placeholder="*****"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span>*</span>
          </section>
          <label htmlFor="password">Password</label>
        </div>
        <section>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="newsletter"
              checked={newsletterChecked}
              onChange={handleNewsletterChange}
            />
            <label htmlFor="newsletter">Subscribe to Newsletter & Communication</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="terms"
              checked={termsChecked}
              onChange={handleTermsChange}
            />
            <label htmlFor="terms">I agree to the Terms and Conditions</label>
          </div>
        </section>
        {error && <div className="error">{error}</div>}
        <Button
          label="Sign up & Register"
          type="submit"
        />
      </form>
    </div>
  );
};

export default SignUp;
