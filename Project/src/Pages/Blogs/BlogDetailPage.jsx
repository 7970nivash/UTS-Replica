import React,{useEffect} from 'react';
import { useLocation } from 'react-router-dom';

const BlogDetailPage = () => {
  // Accessing state passed from the previous page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  const location = useLocation();
  const { state: blog } = location;

  // Handle if no blog data was passed
  if (!blog) {
    return <div className="p-4 text-center text-gray-700">No blog data found.</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:-translate-y-1 hover:shadow-xl">
        <img
          src={blog.imageUrl}
          alt={blog.title}
          className="w-full h-96 object-cover transition-transform hover:scale-105 duration-300 ease-in-out"
        />
        <div className="p-6">
          <div className="flex items-center space-x-4 mb-4">
            <span className="text-xs text-blue-700 font-medium bg-blue-100 px-3 py-1 rounded-full">
              {blog.tag}
            </span>
            <span className="text-xs text-gray-500">{blog.time}</span>
          </div>
          <h1 className="text-4xl font-extrabold mb-4 text-gray-800 leading-tight hover:text-blue-600 transition-colors">
            {blog.title}
          </h1>
          <p className="text-gray-600 leading-relaxed text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
