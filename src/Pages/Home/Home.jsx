
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="homepage">
      
      {/* Slider */}
      <div className="slider">
        <div className="slider-content">
          <h1>Welcome to Marketing Group</h1>
          <p>Experience the best services with us</p>
          <Link to='/LearnMore'> <button className="learn-more-btn">Learn More</button></Link>
        </div>
      </div>





      {/* What Makes Digital Marketing Effective Section */}
      <section className="marketing-effective">
<div className="content-section">
      {/* Section 1 */}
      <div className="content-row">
        <div className="image-card">
          <img src="your-image-url1.jpg" alt="Marketing Illustration" />
        </div>
        <div className="text-content">
          <h2>What Makes Digital Marketing Effective?</h2>
          <p>
            Discover key strategies that make digital marketing successful, from targeting the right audience to
            leveraging data analytics, personalized content, and SEO to boost online visibility and drive results.
          </p>
         <Link to='/LearnMore'> <button className="learn-more-btn">Learn More</button></Link>
        </div>
      </div>

      {/* Section 2 */}
      <div className="content-row reverse">
        <div className="text-content">
          <h2>Content Matters</h2>
          <p>
            The art of creating engaging content involves telling tales that captivate readers, enlighten them, and
            motivate them to take action—converting site visitors into devoted supporters and followers.
          </p>
          <Link to='/LearnMore'> <button className="learn-more-btn">Learn More</button></Link>
        </div>
        <div className="image-card">
          <img src="your-image-url2.jpg" alt="Content Creation Illustration" />
        </div>
      </div>
    </div>
    <div className="content-section">
      </div>
    </section>



    

      {/* Services Section */}
      <section className="services" id="services">
        <h2>Our Services</h2>
        <div className="services-cards">
          <div className="card">
            <h3>SEO Optimization</h3>
            <p>Improve your search engine rankings with expert SEO optimization solutions.Boost your brand's reach with effective digital marketing strategies</p>
          </div>
          <div className="card">
            <h3>Web Designing</h3>
            <p>Create a user-friendly web design that elevates your online presence.</p>
          </div>
          <div className="card">
            <h3>Digital Marketing</h3>
            <p>Boost your brand's reach with effective digital marketing strategies.</p>
          </div>
        </div>
      </section>




      {/* About Us Section */}
      <section className="about-us" id="about">
        <h2>About Us</h2>
        <p>
          At Unstop Techno Solutions, we are committed to providing innovative and result-oriented IT solutions to businesses of all sizes. Our expertise spans a wide spectrum, including digital marketing, SEO optimization, and web design.At Unstop Techno Solutions, we are committed to providing innovative and result-oriented IT solutions to businesses of all sizes. Our expertise spans web development, digital marketing, SEO optimization, and beyond. With a team of experienced professionals, we deliver customized services that meet our clients' unique needs and drive their success. We believe in the power of technology to transform businesses, and we aim to be the trusted partner that helps you achieve your goals. From startups to established enterprises, our solutions are designed to enhance growth, visibility, and efficiency. Let’s build your digital future together
        </p>
        <Link to='/LearnMore'> <button className="learn-more-btn">Learn More</button></Link>
      </section>
    </div>
  );
}

export default Home;

        


