import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const API_URL = 'https://car-management-system-5cxv.onrender.com'; // Ensure this is your backend API URL

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [authToken, setAuthToken] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const { name, email, password } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Input validation
    if (name.length < 3) {
      setError('Name should be at least 3 characters long');
      return;
    }
    if (!email.includes('@')) {
      setError('Enter a valid email');
      return;
    }
    if (password.length < 5) {
      setError('Password should be at least 5 characters long');
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/api/auth/createuser`, {
        name,
        email,
        password,
      });

      // If signup is successful, get the auth token
      setAuthToken(response.data.authtoken);
      setError(''); // Clear any previous errors

      // Optionally, you can store the auth token in local storage or in a global state
      localStorage.setItem('authToken', response.data.authtoken);

      // Wait for 2 seconds, then redirect to login page
      setTimeout(() => {
        navigate('/login'); // Redirect to login page
      }, 2000);

    } catch (err) {
      setError(err.response ? err.response.data.error : 'Server not reachable');
    }
  };

  return (
    <div className="container my-auto mt-5 pt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg p-4">
            <h2 className="text-center mb-4">SignUp</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            {authToken && !error && (
              <div className="alert alert-success mt-3 text-center">
                Signup successful! Redirecting to login...
              </div>
            )}
            <form onSubmit={onSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={name}
                  onChange={onChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={email}
                  onChange={onChange}
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
                  value={password}
                  onChange={onChange}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="text-center mb-5">
                <p>
                  If you have an account, <a href="/login">login here</a>
                </p>
              </div>
              <button type="submit" className="btn btn-primary w-100">Signup</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
