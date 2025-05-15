import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import successIcon from '../assets/successful.png'; // Replace with the actual path to your success icon

const SuccessPage = ({ onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve the amount from the state passed via navigation
  const amountPaid = location.state?.amount || 0; // Default to 0 if no amount is passed

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
        {/* Close Button */}
        <button
          onClick={onClose} // Close the popup
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

        {/* Amount Paid */}
        <h1 className="text-center text-2xl font-bold text-gray-800 mb-4">
          ₦{amountPaid.toLocaleString()}
        </h1>

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
            onClick={onClose} // Close the popup
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