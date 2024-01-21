import React from 'react';
import { BrowserRouter as Router, Route, Routes,useLocation } from 'react-router-dom'; // Import routing components
import Signup from './components/SignUp.js'; // Import your Signup component
import Login from './components/Login.js';   // Import your Login component (you can create this component as well)
import LandingPage from './components/LandingPage.js';     // Import your Home component or any other components
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar.js';
import CarDisplay from './components/CarDisplay.js';
import Upload from './components/Upload.js';
import Edit from './components/Edit.js';


const App = () => {
  const location = useLocation();

  // Define paths where you want to hide the NavBar
  const hideNavBarPaths = ['/','/login','/signup'];

  // Check if the current path is in the list of paths to hide the NavBar
  const shouldHideNavBar = hideNavBarPaths.includes(location.pathname);

  return (
    <div className="App">
      {!shouldHideNavBar && <NavBar />}
      <div className="container">
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cardisplay" element={<CarDisplay />} />
          <Route path="/edit-car/:id" element={<Edit />} />

        </Routes>
      </div>
    </div>
  );
};

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}


