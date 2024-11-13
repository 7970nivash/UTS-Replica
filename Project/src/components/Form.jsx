import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    countryCode: '+500', // Default country code
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log('Form submitted:', formData);
    // Handle form submission logic here (e.g., API calls)
  };

  return (
    <>
      {isSubmitted ? (
        // Full-screen thank you message
        <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
          <div className="text-center p-8 bg-green-100 rounded-lg shadow-lg">
            <h2 className="text-4xl font-semibold text-green-700 mb-4">Thank You!</h2>
            <p className="text-lg text-gray-700 mb-4">We have received your message and will get back to you shortly.</p>
            <button
              onClick={() => setIsSubmitted(false)} // Close the thank you message
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Go back
            </button>
          </div>
        </div>
      ) : (
        // The contact form
        <div className="bg-blue-100 p-8 rounded-lg shadow-lg w-full max-w-md mt-4">
          <h2 className="text-3xl font-semibold text-center mb-4">Contact Us</h2>
          <p className="text-center text-gray-600 mb-6">
            We would love to hear from you! Please fill out this form and we'll get in touch with you shortly.
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium">Name *</label>
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                className="mt-1 w-full p-2 border rounded"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email *</label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="mt-1 w-full p-2 border rounded"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Mobile number *</label>
              <div className="flex">
                <select
                  name="countryCode"
                  className="border rounded w-1/3 mr-2"
                  value={formData.countryCode}
                  onChange={handleChange}
                >
                  {/* Options can be dynamically generated or sourced from a list */}
                  <option value="+500">SOU (+500)</option>
                  <option value="+1473">GRE (+1473)</option>
                  <option value="+41">SWI (+41)</option>
                  {/* Add other options as needed */}
                </select>
                <input
                  name="mobile"
                  type="text"
                  placeholder="Enter your number"
                  className="mt-1 w-full p-2 border rounded"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium">Message *</label>
              <textarea
                name="message"
                placeholder="Enter your message"
                className="mt-1 w-full p-2 border rounded"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ContactForm;
