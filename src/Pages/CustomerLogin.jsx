import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CustomerLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loginMethod, setLoginMethod] = useState('email'); // 'email' or 'phone'
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    let isValid = false;
    if (loginMethod === 'email') {
      isValid =
        storedUser &&
        storedUser.email === formData.email &&
        storedUser.password === formData.password;
    } else {
      isValid =
        storedUser &&
        storedUser.phone === formData.phone &&
        storedUser.password === formData.password;
    }

    if (isValid) {
      console.log('Login successful');
      navigate('/'); // Navigate to Dashboard
    } else {
      alert('Invalid credentials');
    }
  };

  // Carousel Logic
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
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Section: Carousel */}
      <div className="hidden md:block w-1/2 bg-cover bg-center relative">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-500"
          style={{ backgroundImage: `url(${images[currentImageIndex].src})` }}
        ></div>
        <div className="absolute bottom-8 left-8 text-white">
          <p className="text-lg font-semibold">{images[currentImageIndex].caption}</p>
          <p className="mt-2 font-bold">Rachel</p>
          <p className="text-sm">Plateau, Jos</p>
        </div>
      </div>

      {/* Right Section: Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
        <div className="w-full max-w-md">
          <button
            onClick={() => navigate('/')} // Navigate to the home page
            className="text-[red] bg-[#D9D9D9] rounded-[30px] p-3 hover:p-4 hover:text-green-900 mb-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={5}
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

          <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome Back, wonderful customer! </h2>
          <p className="text-gray-600 mb-6">Kindly log in to your account by providing the info below</p>

          <div className="flex mb-6">
            <button
              type="button"
              className={`flex-1 py-2 rounded-l-lg font-semibold border-b-2 ${
                loginMethod === 'email'
                  ? 'text-green-600 border-green-600'
                  : 'text-gray-700 border-transparent'
              }`}
              onClick={() => setLoginMethod('email')}
              style={{ background: 'none' }}
            >
              Email Address
            </button>
            <button
              type="button"
              className={`flex-1 py-2 rounded-r-lg font-semibold border-b-2 ${
                loginMethod === 'phone'
                  ? 'text-green-600 border-green-600'
                  : 'text-gray-700 border-transparent'
              }`}
              onClick={() => setLoginMethod('phone')}
              style={{ background: 'none' }}
            >
              Phone Number
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email or Phone Input */}
            {loginMethod === 'email' ? (
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
            ) : (
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone || ''}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your Phone Number"
                  required
                />
              </div>
            )}

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Enter Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
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
                  className="absolute top-3 right-2 text-gray-500 hover:text-gray-700"
                  onClick={() => setShowPassword((prev) => !prev)}
                  tabIndex={-1}
                >
                  {showPassword ? (
                    // Eye-off icon
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-7-10-7a17.299 17.299 0 013.153-3.905m3.197-2.197A9.956 9.956 0 0112 5c5.523 0 10 7 10 7a17.299 17.299 0 01-4.43 5.385M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18" />
                    </svg>
                  ) : (
                    // Eye icon
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
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
          <div className='flex justify-between items-center'>
          <p className="text-sm text-center text-gray-600 mt-4">
            Don't have an Account?{' '}
            <Link to="/CustomerSignUp" className="text-green-500 hover:underline">
              Sign Up
            </Link>
          </p>
          <p className="text-sm text-center text-gray-600 mt-5">
            <Link to="/login" className="text-green-500 hover:underline flex items-center justify-center">
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
    </div>
  );
};

export default CustomerLogin;