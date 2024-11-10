import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom
import { useEffect } from 'react';

const LearnMorePage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
      <h1 className="text-4xl font-semibold text-center text-blue-600 mb-8">Discover How We Transform Your Digital Presence</h1>

      <div className="space-y-12">
        {/* Section 1: Digital Marketing */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-blue-500 mb-4">What Makes Digital Marketing Effective?</h2>
          <p className="text-lg text-gray-700">
            Digital marketing is the backbone of successful businesses in the modern world. By targeting the right audience, leveraging data analytics, and delivering personalized content, we ensure that your brand stands out. Our strategy focuses on:
            <ul className="list-disc ml-8 mt-4 text-gray-700">
              <li>Data-driven decision making</li>
              <li>Optimized SEO to enhance visibility</li>
              <li>Targeted social media campaigns</li>
              <li>Email marketing with high conversion rates</li>
            </ul>
          </p>
        </section>

        {/* Section 2: Content Creation */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-blue-500 mb-4">The Power of Content Creation</h2>
          <p className="text-lg text-gray-700">
            Creating valuable, engaging content is key to building brand loyalty and turning visitors into long-term customers. We believe in crafting content that:
            <ul className="list-disc ml-8 mt-4 text-gray-700">
              <li>Educates your audience about your brand and offerings</li>
              <li>Establishes your authority in your industry</li>
              <li>Encourages interaction through comments, shares, and likes</li>
              <li>Converts website visitors into leads and loyal customers</li>
            </ul>
            Our content strategies include blog posts, videos, infographics, and social media content designed to keep your audience engaged and coming back for more.
          </p>
        </section>

        {/* Section 3: SEO Optimization */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-blue-500 mb-4">SEO Optimization: Unlocking Search Engine Potential</h2>
          <p className="text-lg text-gray-700">
            Search Engine Optimization (SEO) is essential for increasing organic traffic to your website. We implement the latest SEO strategies that:
            <ul className="list-disc ml-8 mt-4 text-gray-700">
              <li>Optimize on-page SEO elements (keywords, meta tags, etc.)</li>
              <li>Focus on building high-quality backlinks</li>
              <li>Improve site speed and mobile optimization</li>
              <li>Ensure technical SEO practices are followed</li>
            </ul>
            With our SEO expertise, your website will rank higher on search engines like Google, making it easier for potential customers to find you.
          </p>
        </section>

        {/* Section 4: Web Designing */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-blue-500 mb-4">Creative Web Design for a Seamless User Experience</h2>
          <p className="text-lg text-gray-700">
            A website is often the first impression of your brand. We create visually appealing, functional, and responsive websites that offer:
            <ul className="list-disc ml-8 mt-4 text-gray-700">
              <li>Mobile-friendly, responsive layouts</li>
              <li>Clear and easy navigation for visitors</li>
              <li>Optimized performance for fast load times</li>
              <li>Engaging visuals that match your brand identity</li>
            </ul>
            Our goal is to ensure that your visitors have an intuitive and enjoyable experience on your website, turning them into potential customers.
          </p>
        </section>

        {/* Section 5: Testimonials */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-blue-500 mb-4">What Our Clients Are Saying</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <img src='..assets/DefaultUser' alt="Client 1" className="w-12 h-12 rounded-full" />
              <div>
                <p className="text-lg text-gray-700">"Unstop Techno Solutions helped us grow our online presence. Their digital marketing strategies are top-notch, and the SEO work they did for us boosted our traffic significantly."</p>
                <p className="font-semibold text-gray-800">John Doe, CEO of Techno Corp</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <img src='..assets/DefaultUser' alt="Client 2" className="w-12 h-12 rounded-full" />
              <div>
                <p className="text-lg text-gray-700">"The web design services provided by Unstop Techno Solutions were exactly what we needed. Our site is now more user-friendly and visually appealing. Highly recommend their services!"</p>
                <p className="font-semibold text-gray-800">Sarah Lee, Founder of Smart Solutions</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      

      {/* Call to Action Section */}
<section className="bg-blue-100 p-6 rounded-lg shadow-md mt-12 text-center">
  <h2 className="text-2xl font-semibold text-blue-600 mb-4">Let’s Take Your Business to the Next Level</h2>
  <p className="text-lg text-gray-700 mb-6">
    Whether you need digital marketing strategies, web design, or SEO optimization, our team at Unstop Techno Solutions is ready to help you grow. Let’s work together to achieve your goals and enhance your digital presence.
  </p>
  
  {/* Use Link for navigation */}
  <Link
    to="/Contact" // Link to the Contact page route
    className="bg-blue-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-700"
  >
    Get Started
  </Link>
</section>
    </div>
  );
};

export default LearnMorePage;



