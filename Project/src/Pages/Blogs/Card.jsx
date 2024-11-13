import React from 'react';

const Card = ({ title, description, imageUrl, tag, time, comments, className }) => {
  return (
    <div
      className={`bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl ${className}`}
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover md:h-64 lg:h-48"
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-blue-600 font-semibold bg-blue-100 px-2 py-1 rounded-full">{tag}</span>
          <span className="text-xs text-gray-500">{time}</span>
        </div>
        <h2 className="text-lg font-semibold mb-2 truncate">{title}</h2>
        <p className="text-gray-700 mb-4 text-sm line-clamp-3">{description}</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>{comments} comments</span>
          <button className="text-blue-600 hover:underline hover:text-blue-800 focus:outline-none">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
