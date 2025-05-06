import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (
      storedUser &&
      storedUser.email === formData.email &&
      storedUser.password === formData.password
    ) {
      console.log('Login successful');
      navigate('/dashboard'); // Navigate to Dashboard
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div
        className="w-1/2 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/login.png')" }}
      >
        <div className="absolute bottom-8 left-8 text-white">
          <p className="text-lg font-semibold">
            I get Fresh farm produces delivered to my doorstep in few clicks... All thanks to FarmMart
          </p>
          <p className="mt-2 font-bold">Rachel</p>
          <p className="text-sm">Plateau, Jos</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="w-full max-w-md">
          <button
            onClick={() => navigate('/')} // Navigate to the home page
            className="text-[#4CAF50] hover:text-green-900 mb-4"
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

          <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome Back,</h2>
          <p className="text-gray-600 mb-6">Kindly log in to your account by providing the info below</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your Email"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Enter Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter Password"
                  required
                />
                <button
                  type="button"
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12h.01M9 12h.01M12 12h.01M9 16h6M9 8h6"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Keep Me Logged In */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-green-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">Keep me logged in</span>
              </label>
              <Link to="/forgot-password" className="text-sm text-green-500 hover:underline">
                Forgot Password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
            >
              Log in
            </button>
          </form>

          <p className="text-sm text-center text-gray-600 mt-4">
            Don't have an Account?{' '}
            <Link to="/signup" className="text-green-500 hover:underline">
              Sign UP
            </Link>
          </p>
          <p className="text-sm text-center text-gray-600 mt-2">
            <Link to="/switch-account" className="text-green-500 hover:underline flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12h.01M9 12h.01M12 12h.01M9 16h6M9 8h6"
                />
              </svg>
              Switch Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;