import React from 'react';
import { useNavigate } from 'react-router-dom';
import successIcon from '../assets/successful.png'; // Replace with the actual path to your success icon

const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
        {/* Close Button */}
        <button
          onClick={() => navigate('/')} // Navigate to the home page
          className="absolute top-4 right-4 text-red-500 hover:text-red-700"
        >
          ✕
        </button>

        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
            <img src={successIcon} alt="Success" className="w-16 h-16" />
          </div>
        </div>

        {/* Success Message */}
        <h2 className="text-center text-lg font-bold text-gray-800 mb-4">
          The payment has been done successfully.
        </h2>
        <p className="text-center text-gray-600 mb-4">
          You will be updated on the progress of your order.
        </p>
        <p className="text-center text-gray-600 mb-6">
          You can easily track the progress of your order{' '}
          <span
            onClick={() => navigate('/track-order')} // Navigate to the order tracking page
            className="text-green-500 font-semibold cursor-pointer hover:underline"
          >
            here
          </span>
          .
        </p>

        {/* Okay Button */}
        <div className="flex justify-center">
          <button
            onClick={() => navigate('/')} // Navigate to the home page
            className="bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-600 transition duration-300 font-bold"
          >
            Okay
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;