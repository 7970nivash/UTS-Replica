import React from 'react'
import Form from '../components/Form'
import { useEffect } from 'react';
export const GetContact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (

    <>
    <div className="flex justify-center py-8">
      <Form />
    </div>
  
    <div className="map-container mb-8 px-4">
      <div className="rounded-lg shadow-xl overflow-hidden border border-gray-200 bg-white">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.0276784689313!2d76.91108484001649!3d28.412899092301277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4381b179f826f027%3A0x7e687952f4f368dd!2sUnstop%20Techno%20Solution!5e0!3m2!1sen!2sin!4v1731138707141!5m2!1sen!2sin"
          width="100%"
          height="300"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-64 md:h-80"
        ></iframe>
      </div>
    </div>
  
    <div className="location-details mt-6 px-6 py-4 bg-white rounded-lg shadow-md text-center border-t-4 border-blue-500">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Location: Unstop Techno Solution</h3>
      <p className="text-gray-600 text-lg">
        SARE HOMES CLUB, Sector 92, Gurugram, Haryana 122505
      </p>
    </div>
    </>
  )
}

export default GetContact;

