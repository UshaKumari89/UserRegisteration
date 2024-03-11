import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./UserRegister.scss";
import Button from "./Button";

const LogIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const { state } = location;
    if (state && state.email) {
      setEmail(state.email);
    }
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!email || !password) {
        console.error("Please enter both email and password");
        return;
      }

      console.log('Logging in with email:', email);

      const response = await axios.post("http://localhost:8000/api/login", { email, password });

      console.log('Login response:', response);

      if (response.data.success) {
        navigate("/confirmation");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Failed to login. Please try again.");
    }
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
  };

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
  };

  return (
    <div className="signup-login-container">
      <h2>Welcome back</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <section>
            <input
              type="email"
              id="email"
              placeholder="john@gmail.com"
              className="input"
              value={email}
              onChange={handleEmailChange}
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
              onChange={handlePasswordChange}
              required
            />
            <span>*</span>
          </section>
          <label htmlFor="password">Password</label>
        </div>
        <Button label="LogIn" type="submit" />
      </form>
    </div>
  );
};

export default LogIn;
