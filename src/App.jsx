import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Importing components
import LearnMore from './Pages/LearnMore';
import GetContact from './Pages/GetContact';
import { useEffect } from 'react';
import Home from './Pages/Home/Home';
import Services from './Pages/Home/services';


const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (

    <Router>
      {/* Navigation Bar with Links */}
      <nav className="navbar">
      <div className="navbar-logo">
        <img src="logo.jpg" alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/" className="home">Home</Link></li>
        <li><Link to="/services" className="services">Services</Link></li>
        <li><Link to="/about" className="about">About</Link></li>
        <li><Link to="/career" className="career">Career</Link></li>
        <li><Link to="/blogs" className="blogs">Blogs</Link></li>    
      </ul>
      <Link to="/Contact"><button className="get-in-touch">
        Get in Touch
      </button></Link>
      
    </nav>
      {/* Setting up Routes */}
      <Routes>
        {/* Homepage route */}
        <Route path="/" element={<Home/>} />
        <Route path="/LearnMore" element={<LearnMore />} />
        <Route path="/Contact" element={<GetContact />} />
        <Route path="/services" element={<Services />} />
      </Routes>

      
      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          {/* About Section */}
          <div className="footer-section">
            <h3>UNSTOP TECHNO SOLUTION</h3>
            <p>Providing innovative and result-oriented IT solutions to businesses of all sizes.</p>
          </div>
          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#career">Career</a></li>
              <li><a href="#blogs">Blogs</a></li>
              <li><a href="#contact">Get in Touch</a></li>
            </ul>
          </div>
          {/* Contact Us */}
          <div className="footer-section">
            <h3>Contact Us</h3>
            <a href="https://www.google.com/maps/search/Sare+home,+Sector+-+92,+Gurgaon,+Haryana+-+122050/@28.4114723,76.9095041,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D">  <p>Sector-32, Gurgaon, Haryana - 122018</p></a>
            <a href="/GetContact"> <p>Email: info@uts.com</p></a>
            <p>Phone: +91 1234567890</p>
          </div>
        </div>
      </footer>
    </Router>
  );
};

export default App;
