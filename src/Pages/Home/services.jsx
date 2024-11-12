import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className="services_container">


      <div className="services_by_uts">
        <h1 className="services_h1">Services Provided by UTS</h1>
        <p className="services_p">
          We offer cutting-edge marketing management services that are tailored to maximize every facet of your brand's approach. From creating campaigns and doing market research to analyzing performance, we customize our approach to fit your particular company requirements.
        </p>
      </div>

      <div className="cards_section">
        
        <div className="cards_container">
          <div className="card">
            <h3 className="card_title">Market Research</h3>
            <p className="card_text">
              In-depth analysis of market trends to help you stay ahead of the competition.
            </p>
          </div>
          <div className="card">
            <h3 className="card_title">Brand Strategy</h3>
            <p className="card_text">
              Crafting a unique brand identity that resonates with your target audience.
            </p>
          </div>
          <div className="card">
            <h3 className="card_title">Digital Advertising</h3>
            <p className="card_text">
              Utilizing digital channels to increase brand visibility and engagement.
            </p>
          </div>
          <div className="card">
            <h3 className="card_title">Content Creation</h3>
            <p className="card_text">
              Developing high-quality content that reflects your brand's voice and values.
            </p>
          </div>
          <div className="card">
            <h3 className="card_title">Social Media Management</h3>
            <p className="card_text">
              Building and managing your brand’s presence across major social platforms.
            </p>
          </div>
          <div className="card">
            <h3 className="card_title">Performance Analytics</h3>
            <p className="card_text">
              Analyzing campaign performance to maximize results and optimize strategies.
            </p>
          </div>
        </div>      
      </div>

      <div className='middile_section'>
      <div className="about_company_container">
      <h3 className="about_company_h3">About Our Company</h3>
      <h1 className="about_company_h1">Mapping Adventures, Making Moments</h1>
      <p className="about_company_paragraph">
        Our state-of-the-art marketing management tools are designed to optimize every single brand strategy. From creating campaigns and doing market research to analyzing performance, we customize our approach to fit your particular company requirements.
      </p>
      
    
      <div className="commitment_points">
        <p className="commitment_text">✔ Discuss your commitment to excellent customer service.</p>
        <p className="commitment_text">✔ Discuss your commitment to innovation.</p>
        <p className="commitment_text">✔ Discuss your commitment to customer satisfaction.</p>
      </div>

      <div className="action_section">
       <button className="talk_expert_button">Talk To An Expert</button>
      </div>
      </div>

      
    </div>
    


    <div className="ready_section">
  <h3 className="ready_section_h3">Are you ready to Digital Service? At Unstop Techno Solution</h3>
  <h1 className="ready_section_h1">We are not just a Digital Service Provider - We are your Partner In Performance</h1>
  <p className="ready_section_paragraph">
    We offer cutting-edge marketing management services that are tailored to maximize every facet of your brand's approach. From creating campaigns and doing market research to analyzing performance, we customize our approach to fit your particular company requirements.
  </p>
</div>








    </div>
  );
}

export default Services;

