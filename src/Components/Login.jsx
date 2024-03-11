// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios'; // Import Axios for making HTTP requests
// import './UserRegister.scss';
// import Button from './Button';

// const LogIn = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const storedEmail = localStorage.getItem('loginEmail');
//     if (storedEmail) {
//       setEmail(storedEmail);
//     }
//   }, []); // This useEffect hook will run only once, when the component mounts

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (!email || !password) {
//         setError('Please enter both email and password');
//         return;
//       }
  
//       // Make a POST request to check if the user exists
//       const response = await axios.post('http://localhost:8000/api/checkEmail', { email });
//       console.log(response.data); // Log the response from the backend
//       if (response.data.redirect === '/login') {
//         // User exists, save email to localStorage
//         localStorage.setItem('loginEmail', email);
//         // Redirect to login page
//         navigate("/confirmation");
//       } else {
//         // User does not exist, handle accordingly
//         console.log("User does not exist. Redirecting to signup page.");
//         setError('User does not exist. Redirecting to signup page.');
//         // Handle redirection to signup page or show error message
//       }
//     } catch (error) {
//       console.error("Error checking email:", error);
//       // Handle error, show error message, etc.
//     }
//   };
  
//   return (
//     <div className="signup-login-container">
//       <h2>Welcome back</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="input-container">
//           <section>
//             <input
//               type="email"
//               id="email"
//               placeholder="john@gmail.com"
//               className="input"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <span>*</span>
//           </section>
//           <label htmlFor="email">Email</label>
//         </div>
//         <div className="input-container">
//           <section className="form-group">
//             <input
//               type="password"
//               id="password"
//               className="input"
//               placeholder="*****"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <span>*</span>
//           </section>
//           <label htmlFor="password">Password</label>
//         </div>
//         <Button
//           label="LogIn"
//           type="submit" // Ensure the Button component submits the form
//         />
//       </form>
//     </div>
//   );
// };

// export default LogIn;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios for making HTTP requests
import './UserRegister.scss';
import Button from './Button';

const LogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const storedEmail = localStorage.getItem('loginEmail');
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []); // This useEffect hook will run only once, when the component mounts

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!email || !password) {
        console.error('Please enter both email and password');
        return;
      }
  
      // Make a POST request to check if the user exists
      const response = await axios.post('http://localhost:8000/api/checkEmail', { email });
      console.log(response.data); // Log the response from the backend
      if (response.data.redirect === '/login') {
        // User exists, save email to localStorage
        localStorage.setItem('loginEmail', email);
        // Redirect to login page
        navigate("/confirmation");
      } else {
        // User does not exist, handle accordingly
        console.log("User does not exist. Redirecting to signup page.");
        // Handle redirection to signup page or show error message
      }
    } catch (error) {
      console.error("Error checking email:", error);
      // Handle error, show error message, etc.
    }
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
        <Button
          label="LogIn"
          type="submit" // Ensure the Button component submits the form
        />
      </form>
    </div>
  );
};

export default LogIn;
