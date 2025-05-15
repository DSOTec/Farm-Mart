import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save user data to localStorage
    localStorage.setItem('user', JSON.stringify(formData));
    alert('Signup successful! You can now log in.');
    navigate('/login'); // Redirect to login page
  };

  // Slideshow Logic
  const images = [
    { src: '/login.png', caption: 'Fresh farm produce delivered to your doorstep.' },
    { src: '/login2.png', caption: 'Experience the best farm-to-table service.' },
    { src: '/login3.png', caption: 'Join FarmMart and shop with ease.' },
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Left Section: Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
        <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-lg relative">
          {/* Back Arrow */}
          <button
            onClick={() => navigate('/')} // Navigate to the home page
            className="absolute top-4 left-4 text-green-600 hover:text-green-800 transition duration-300"
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

          {/* Logo */}
          <Link
            className="font-[montagu] font-[700] text-[24px] text-green-600 md:text-[32px] block text-center mb-6"
            to="/"
          >
            FarmMart
          </Link>

          {/* Title */}
          <h2 className="text-3xl text-green-700 font-bold text-center mb-4">Create Your Account</h2>
          <p className="text-center text-gray-600 mb-8">
            Join FarmMart and start selling your farm products today!
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-600 transition duration-300"
            >
              Sign Up
            </button>
          </form>

          {/* Footer */}
          <p className="text-sm text-center text-gray-600 mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-green-500 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>

      {/* Right Section: Slideshow */}
      <div className="hidden md:block w-1/2 bg-cover bg-center relative">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-500"
          style={{ backgroundImage: `url(${images[currentImageIndex].src})` }}
        ></div>
        <div className="absolute bottom-8 left-8 text-white">
          <p className="text-lg font-semibold">{images[currentImageIndex].caption}</p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
