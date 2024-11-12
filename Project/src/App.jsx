import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useEffect } from 'react';

// Importing components
import LearnMore from './Pages/LearnMore';
import GetContact from './Pages/GetContact';
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import BlogDetailPage from './Pages/Blogs/BlogDetailPage'
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
          <li><Link to="/contact" className="contact">Get in Touch</Link></li>
        </ul>
      </nav>

      {/* Setting up Routes */}
      <Routes>
        {/* Homepage route */}
        <Route path="/" element={<Home />} />
        <Route path="/LearnMore" element={<LearnMore />} />
        <Route path="/Contact" element={<GetContact />} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />
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
              <li><Link to="/" className="home">Home</Link></li>
              <li><Link to="/services" className="services">Services</Link></li>
              <li><Link to="/about" className="about">About Us</Link></li>
              <li><Link to="/career" className="career">Career</Link></li>
              <li><Link to="/blogs" className="blogs">Blogs</Link></li>
              <li><Link to="/contact" className="contact">Get in Touch</Link></li>
            </ul>
          </div>
          {/* Contact Us */}
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>
              <a href="https://www.google.com/maps/search/Sare+home,+Sector+-+92,+Gurgaon,+Haryana+-+122050/@28.4114723,76.9095041,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D">
                Sector-32, Gurgaon, Haryana - 122018
              </a>
            </p>
            <p>
              <a href="mailto:info@uts.com">Email: info@uts.com</a>
            </p>
            <p>Phone: +91 1234567890</p>
          </div>
        </div>
      </footer>
    </Router>
  );
};

export default App;
