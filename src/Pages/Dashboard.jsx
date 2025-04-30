import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2'; // Import Bar chart from chart.js
import 'chart.js/auto'; // Required for chart.js
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Dashboard = () => {
  const [user, setUser] = useState(null); // State to store user data
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Retrieve user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser); // Set user data to state
    } else {
      // If no user is found, redirect to login
      navigate('/login');
    }
  }, [navigate]);

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem('user'); // Clear user data from localStorage
    console.log('User logged out');
    navigate('/login'); // Redirect to the login page
  };

  // Sample data for the bar chart
  const barChartData = {
    labels: ['Product A', 'Product B', 'Product C', 'Product D'],
    datasets: [
      {
        label: 'Sales',
        data: [120, 90, 150, 80],
        backgroundColor: ['#4CAF50', '#FF9C00', '#FF5722', '#2196F3'],
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md p-4 md:p-6 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold font-[montagu] text-gray-800">Farm Mart</h1>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <h2 className="text-lg font-semibold text-gray-800">
            Welcome Back, {user?.name || 'Guest'}!
          </h2>
          <div className="flex items-center space-x-4">
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {/* Notification Icon */}
            <button className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 text-gray-600 hover:text-green-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0m6 0H9"
                />
              </svg>
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">3</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row flex-1">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 bg-white shadow-lg p-6">
          <div className="mb-6 border-1 text-center p-1 rounded-[50px]">
            <h3 className="text-[16px] font-semibold text-gray-800">{user?.name || 'Guest'}</h3>
            <p className="text-sm text-gray-600">{user?.email || 'No email available'}</p>
          </div>
          <ul className="space-y-4">
            <li className="text-gray-700 hover:text-green-600 cursor-pointer">Overview</li>
            <li className="text-gray-700 hover:text-green-600 cursor-pointer">Settings</li>
            <li
              className="text-gray-700 hover:text-green-600 cursor-pointer"
              onClick={handleLogout} // Call handleLogout on click
            >
              Logout
            </li>
          </ul>
        </div>

        {/* Content */}
        <div className="flex-1 p-4 md:p-8">
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold text-gray-800">Total Stocks</h3>
              <p className="text-2xl font-bold text-green-600">1,200</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold text-gray-800">Total Revenue</h3>
              <p className="text-2xl font-bold text-green-600">₦500,000</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold text-gray-800">Pending Orders</h3>
              <p className="text-2xl font-bold text-green-600">25</p>
            </div>
          </div>

          {/* Bar Chart */}
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Product Sales</h3>
            <div className="h-64">
              <Bar data={barChartData} options={barChartOptions} />
            </div>
          </div>

          {/* Product List Table */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Products Listed</h3>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Items</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Qty</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Scale</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Price (₦)</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Tomatoes</td>
                  <td className="border border-gray-300 px-4 py-2">50</td>
                  <td className="border border-gray-300 px-4 py-2">Kg</td>
                  <td className="border border-gray-300 px-4 py-2">₦5,000</td>
                  <td className="border border-gray-300 px-4 py-2">Vegetables</td>
                  <td className="border border-gray-300 px-4 py-2 text-green-600">Available</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Pepper</td>
                  <td className="border border-gray-300 px-4 py-2">30</td>
                  <td className="border border-gray-300 px-4 py-2">Kg</td>
                  <td className="border border-gray-300 px-4 py-2">₦3,000</td>
                  <td className="border border-gray-300 px-4 py-2">Spices</td>
                  <td className="border border-gray-300 px-4 py-2 text-red-600">Out of Stock</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;