import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_URL = 'https://car-management-system-5cxv.onrender.com'; // Ensure this is your backend API URL

const Login = () => {
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');
  const [error, setError] = useState('');
  const [authToken, setAuthToken] = useState('');
  const navigate = useNavigate(); // Hook for programmatically navigating


  
  const onSubmit = async (e) => {
    e.preventDefault();
    // Input validation
    if (!email.includes('@')) {
      setError('Enter a valid email');
      return;
    }
    if (password.length < 5) {
      setError('Password should be at least 5 characters long');
      return;
    }

    try {
      console.log("Email = ",email," Password = ",password)
      const response = await axios.post(`${API_URL}/api/auth/login`, {
        email,
        password,
      });

      setAuthToken(response.data.authtoken);
      setError(''); 

      
      localStorage.setItem('authToken', response.data.authtoken);

      
      navigate('/cardisplay'); 
    } catch (err) {
      setError(err.response ? err.response.data.error : 'Server not reachable');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg p-4">
            <h2 className="text-center mb-4">Login</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            {authToken && !error && <div className="alert alert-success mt-3 text-center">Login successful!</div>}
            <form onSubmit={onSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  onChange={(e)=>setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  onChange={(e)=>setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>

              {/* Signup prompt above the button */}
              <div className="text-center mb-3">
                <p>
                  Don't have an account? <a href="/signup">Sign up here</a>
                </p>
              </div>

              <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
