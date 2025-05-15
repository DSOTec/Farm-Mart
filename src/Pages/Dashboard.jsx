import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2'; // Import Bar chart from chart.js
import 'chart.js/auto'; // Required for chart.js
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaBell, FaSearch, FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';

const Dashboard = () => {
  const [user, setUser] = useState(null); // State to store user data
  const [sidebarOpen, setSidebarOpen] = useState(false); // For hamburger
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

  // Sample data for the bar chart
  const barChartData = {
    labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'],
    datasets: [
      {
        label: 'Farm Fresh Pepper',
        data: [50, 70, 60, 90, 80, 100, 120],
        backgroundColor: '#4CAF50',
      },
      {
        label: 'Sorted Egusi',
        data: [30, 40, 50, 60, 70, 80, 90],
        backgroundColor: '#FF9C00',
      },
      {
        label: 'Yams',
        data: [20, 30, 40, 50, 60, 70, 80],
        backgroundColor: '#2196F3',
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="flex min-h-screen bg-gray-100 overflow-x-hidden">
      {/* Hamburger for mobile */}
      <button
        className="fixed top-4 left-4 z-40 p-2 bg-white rounded-full shadow md:hidden"
        aria-label="Open Sidebar"
        onClick={() => setSidebarOpen(true)}
      >
        <FaBars className="text-xl text-green-600" />
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg p-6 transition-transform duration-200
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 md:w-1/5 md:block
        `}
        style={{ maxHeight: '100vh', overflowY: 'auto' }}
      >
        {/* Close button on mobile */}
        <button
          className="md:hidden absolute top-4 right-4 text-2xl text-green-600"
          aria-label="Close Sidebar"
          onClick={() => setSidebarOpen(false)}
        >
          <FaTimes />
        </button>
        <div className="mb-6 text-center mt-8 md:mt-0">
          <FaUserCircle className="text-4xl text-gray-600 mx-auto" />
          <h3 className="text-lg font-bold text-gray-800">{user?.name || 'Abo Farms'}</h3>
          <p className="text-sm text-gray-600">{user?.email || 'abo@farmmart.com'}</p>
        </div>
        <ul className="space-y-4">
          <li className="text-green-600 font-bold">Dashboard</li>
          <li className="text-gray-700 hover:text-green-600 cursor-pointer">Stocks</li>
          <li className="text-gray-700 hover:text-green-600 cursor-pointer">Listings</li>
          <li className="text-gray-700 hover:text-green-600 cursor-pointer">Orders</li>
          <li className="text-gray-700 hover:text-green-600 cursor-pointer">Sales</li>
          <li className="text-gray-700 hover:text-green-600 cursor-pointer">Alerts</li>
        </ul>
        <hr className="my-6" />
        <ul className="space-y-4">
          <li className="text-gray-700 hover:text-green-600 cursor-pointer">Help & Support</li>
          <li className="text-gray-700 hover:text-green-600 cursor-pointer">Report a Problem</li>
          <li
            className="text-red-500 hover:text-red-600 cursor-pointer"
            onClick={() => {
              localStorage.removeItem('user');
              navigate('/login');
            }}
          >
            Logout
          </li>
        </ul>
      </aside>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 p-2 sm:p-4 md:p-6 md:ml-0 ml-0 w-full max-w-full">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
            Welcome Back, {user?.name || 'Abo Farms'}
          </h1>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="relative w-full max-w-xs">
              <FaSearch className="absolute top-2 left-2 text-gray-400" />
              <input
                type="text"
                placeholder="Search Dashboard"
                className="pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
              />
            </div>
            <button className="relative">
              <FaBell className="text-gray-600 hover:text-green-600" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                3
              </span>
            </button>
          </div>
        </header>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold text-gray-800">Total Stock</h3>
            <p className="text-2xl font-bold text-green-600">270 Items</p>
            <p className="text-sm text-gray-600">Farm Fresh Pepper, Sorted Egusi, Yams</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold text-gray-800">Total Revenue</h3>
            <p className="text-2xl font-bold text-green-600">₦516,300.00</p>
            <p className="text-sm text-gray-600">Increase from the previous month</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold text-gray-800">Pending Orders</h3>
            <p className="text-2xl font-bold text-green-600">5 Orders</p>
            <button className="text-sm text-yellow-500 hover:underline">See all</button>
          </div>
        </div>

        {/* Chart Section */}
        <div className="bg-white p-2 sm:p-4 md:p-6 rounded-lg shadow-lg mb-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Product Sales</h3>
          <div className="h-56 sm:h-64">
            <Bar data={barChartData} options={barChartOptions} />
          </div>
        </div>

        {/* Product Listing */}
        <div className="bg-white p-2 sm:p-4 md:p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Product Listing</h3>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse border border-gray-300 text-xs sm:text-sm">
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
                  <td className="border border-gray-300 px-4 py-2">Farm Fresh Pepper</td>
                  <td className="border border-gray-300 px-4 py-2">50</td>
                  <td className="border border-gray-300 px-4 py-2">Basket</td>
                  <td className="border border-gray-300 px-4 py-2">₦17,300</td>
                  <td className="border border-gray-300 px-4 py-2">Vegetables</td>
                  <td className="border border-gray-300 px-4 py-2 text-green-600">In stock</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Sorted Egusi</td>
                  <td className="border border-gray-300 px-4 py-2">20</td>
                  <td className="border border-gray-300 px-4 py-2">Packs</td>
                  <td className="border border-gray-300 px-4 py-2">₦15,000</td>
                  <td className="border border-gray-300 px-4 py-2">Soups</td>
                  <td className="border border-gray-300 px-4 py-2 text-yellow-500">Low stock</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Yams</td>
                  <td className="border border-gray-300 px-4 py-2">50</td>
                  <td className="border border-gray-300 px-4 py-2">Medium</td>
                  <td className="border border-gray-300 px-4 py-2">₦1,500</td>
                  <td className="border border-gray-300 px-4 py-2">Tubers</td>
                  <td className="border border-gray-300 px-4 py-2 text-green-600">In stock</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Action Cards Section - Place LAST before footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 my-8">
          {/* Add New Products */}
          <div className="flex items-center justify-center bg-white rounded-2xl shadow border border-gray-200 h-32 sm:h-40">
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Box Icon */}
              <svg width="40" height="40" className="sm:w-14 sm:h-14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="16" width="24" height="12" rx="3" stroke="#4CAF50" strokeWidth="2"/>
                <rect x="12" y="8" width="12" height="24" rx="3" stroke="#4CAF50" strokeWidth="2"/>
              </svg>
              <span className="text-base sm:text-2xl font-semibold text-green-600">Add New Products</span>
            </div>
          </div>
          {/* Check Messages */}
          <div className="flex items-center justify-center bg-white rounded-2xl shadow border border-gray-200 h-32 sm:h-40">
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Message Icon */}
              <svg width="40" height="40" className="sm:w-14 sm:h-14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="16" width="24" height="12" rx="3" fill="#EAF7EC"/>
                <rect x="12" y="20" width="12" height="8" rx="3" fill="#4CAF50" fillOpacity="0.5"/>
              </svg>
              <span className="text-base sm:text-2xl font-semibold text-green-600">Check Messages</span>
            </div>
          </div>
          {/* View Leaderboard */}
          <div className="flex items-center justify-center bg-green-500 rounded-2xl shadow border border-green-500 h-32 sm:h-40">
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Leaderboard Icon */}
              <svg width="40" height="40" className="sm:w-14 sm:h-14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 28L20 12L28 28" stroke="#222" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 24H24" stroke="#222" strokeWidth="3" strokeLinecap="round"/>
                <path d="M20 32V24" stroke="#222" strokeWidth="3" strokeLinecap="round"/>
                <circle cx="20" cy="12" r="2" stroke="#222" strokeWidth="2"/>
              </svg>
              <span className="text-base sm:text-2xl font-semibold text-black">View Leaderboard</span>
            </div>
          </div>
        </div>
        {/* (Optional) Footer section here */}
      </main>
    </div>
  );
};

export default Dashboard;