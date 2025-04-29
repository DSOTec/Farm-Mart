import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#4CAF50]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
        {/* Back Arrow */}
        <button
          onClick={() => navigate('/')} // Navigate to the home page
          className="absolute top-4 left-4 text-[#4CAF50] hover:text-green-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <Link
          className="font-[montagu] font-[700] text-[18px] text-[#09865655] md:text-[28px] block text-center mb-4"
          to="/"
        >
          Farm Mart
        </Link>
        <h2 className="text-2xl text-[#09865655] font-bold text-center mb-6">Log In</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#698655]">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#698655]">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#4CAF50] text-white py-2 px-4 rounded-lg hover:bg-[#FF9C00] transition duration-300"
          >
            Log In
          </button>
        </form>
        <p className="text-sm text-center text-gray-600 mt-4">
          Don't have an account?{' '}
          <Link to="/signup" className="text-[#4CAF50] hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;