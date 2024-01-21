import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the authToken from localStorage
    localStorage.removeItem('authToken');
    
    // Redirect to the landing page
    navigate('/');
  };

  return (
    <div className="logout-container">
      <button className="btn btn-danger" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
