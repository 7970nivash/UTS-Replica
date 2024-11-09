import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Importing components
import LearnMore from './Pages/LearnMore';
import GetContact from './Pages/GetContact';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    
    <Router>
      {/* Navigation Bar with Links */}
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/LearnMore">Learn More</Link>
          </li>
          <li>
            <Link to="/GetContact">Get Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Setting up Routes */}
      <Routes>
        {/* Homepage route */}
        <Route path="/" element={<h1>Welcome to the Home Page</h1>} />
        <Route path="/LearnMore" element={<LearnMore />} />
        <Route path="/GetContact" element={<GetContact />} />
      </Routes>
    </Router>
  );
};

export default App;
