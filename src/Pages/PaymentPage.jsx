import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useLocation and useNavigate
import { FaArrowLeft } from 'react-icons/fa'; // Import back arrow icon

const PaymentPage = () => {
  const location = useLocation(); // Access state passed from Cart
  const navigate = useNavigate(); // For navigation
  const { grandTotal } = location.state || { grandTotal: 0 }; // Default to 0 if no state is passed

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    cardNumber: '',
    expiryDate: '',
    cvc: '',
    billingAddress: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('Card Payment'); // Default payment method

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Payment Details:', formData);
    alert('Payment processed successfully!');
    localStorage.removeItem('cart'); // Clear the cart
  };

  const goBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        {/* Back Arrow */}
        <button
          onClick={goBack}
          className="flex items-center text-gray-700 hover:text-green-600 mb-4"
        >
          <FaArrowLeft className="mr-2" /> Back
        </button>

        <h3 className="text-2xl font-bold text-center mb-6">Payment Page</h3>
        <p className="text-center text-gray-700 mb-4 text-lg font-semibold">
          Total Payments: ₦{grandTotal.toLocaleString()}
        </p>

        {/* Payment Method Selection */}
        <div className="flex justify-center gap-4 mb-6">
          {['Card Payment', 'Bank Deposit', 'USSD'].map((method) => (
            <button
              key={method}
              onClick={() => setPaymentMethod(method)}
              className={`px-4 py-2 rounded-lg font-medium ${
                paymentMethod === method
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {method}
            </button>
          ))}
        </div>

        {/* Payment Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Address */}
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
              placeholder="Enter your email"
              required
            />
          </div>

          {/* First Name and Last Name */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="First Name"
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Last Name"
                required
              />
            </div>
          </div>

          {/* Card Number */}
          <div>
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your card number"
              required
            />
          </div>

          {/* Expiry Date and CVC */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
                Expiry Date
              </label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="MM/YY"
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
                CVC
              </label>
              <input
                type="text"
                id="cvc"
                name="cvc"
                value={formData.cvc}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="CVC"
                required
              />
            </div>
          </div>

          {/* Billing Address */}
          <div>
            <label htmlFor="billingAddress" className="block text-sm font-medium text-gray-700">
              Billing Address
            </label>
            <input
              type="text"
              id="billingAddress"
              name="billingAddress"
              value={formData.billingAddress}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your billing address"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300 font-bold text-lg"
          >
            Pay ₦{grandTotal.toLocaleString()}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;