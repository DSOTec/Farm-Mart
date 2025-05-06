import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation

const PaymentPage = () => {
  const location = useLocation(); // Access state passed from Cart
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Payment Details:', formData);
    alert('Payment processed successfully!');
    localStorage.removeItem('cart'); // Clear the cart
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h3 className="text-2xl font-bold text-center mb-6">Payment Page</h3>
        <p className="text-center text-gray-700 mb-4">Grand Total: ₦{grandTotal}</p>
        <form onSubmit={handleSubmit} className="space-y-4">
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
          {/* Other form fields */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Pay ₦{grandTotal}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;