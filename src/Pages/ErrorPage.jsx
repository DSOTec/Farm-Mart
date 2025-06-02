import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f7fafc] px-4">
      <h1 className="text-7xl font-extrabold text-[#4CAF50] font-[600] mb-4">404</h1>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Page Not Found</h2>
      <p className="text-gray-500 mb-6 text-center max-w-md">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <button
        onClick={() => navigate('/')}
        className="px-6 py-3 bg-[#4CAF50] font-[600] text-white rounded-full font-semibold shadow hover:bg-green-700 transition"
      >
        Go Home
      </button>
    </div>
  );
};

export default ErrorPage;