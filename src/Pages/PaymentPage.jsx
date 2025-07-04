import React, { useState } from 'react';
import SuccessPage from '../Pages/SuccessPage.jsx';
const PaymentPage = ({ isOpen, onClose, grandTotal }) => {
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
  const [isSuccessOpen, setIsSuccessOpen] = useState(false); // State to control success popup
  // const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Payment Details:', formData);
    alert('Payment processed successfully!');
    localStorage.removeItem('cart'); // Clear the cart
    setIsSuccessOpen(true); // Open the success popup
  };

  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 hover:text-red-600"
        >
          ✕
        </button>

        {/* Payment Content */}
        <h3 className="text-2xl font-bold text-center mb-6">Payment Page</h3>
        <p className="text-left p-1 text-gray-700 mb-1 text-lg font-semibold">
          Total Payments
        </p>
        <input
          type="text"
          value={`₦${grandTotal.toLocaleString()}`}
          readOnly
          className="text-left p-[10px] text-gray-700 mb-4 text-lg font-semibold bg-transparent border-1 w-full focus:outline-none"
        />

        {/* Payment Method Selection */}
        <div className="flex justify-center gap-20  mb-6">
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
        {paymentMethod === 'Card Payment' && (
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
        )}

        {paymentMethod === 'Bank Deposit' && (
          <div className="w-full h-[400px] flex items-center justify-center rounded-2xl bg-white border border-gray-200">
            {/* This is the blank page for Bank Deposit */}
            <div className="text-left ">
            <p className='text-[13px]  mt-10'>Use the bank details above to make payment</p>
              <h4 className="mt-4 text-[16px] font-medium text-gray-700">
                Please complete payment in <span className="font-bold text-red-600">05 :59 :47</span>
              </h4>
              <p className="text-[16px] mt-4 font-semibold text-gray-800 mb-2">Account Number</p>
              <p className="text-[16px] font-extrabold text-gray-900 tracking-widest mb-4">984544673646334</p>
              <p className='text-[13px]'>Bank Name</p>
              <h5 className='text-[16px] mt-2 font-[700]'>Kowope MFB</h5>
              <p className='text-[13px] mt-3'>Beneficiary Name</p>
              <h5 className='[16px] mt-3 font-[700]'>Farm Mart</h5>
              <p className='text-[13px] mt-3'>Amount to pay</p>
              <h4 className='text-[16px] font-[700] mt-3'>₦{grandTotal.toLocaleString()}</h4>
              <p className='text-[13px] mt-3 text-[#4CAF50]'>To avoid transaction failure, kindly make sure you pay the  exact amount</p>
              <div className='flex justify-between items-center  text-[13px]'>
                <p className='p-[10px]'>This page will automatically update when payment is received.</p>
                <p className='p-[10px]'>Need Help?</p>
              </div>
            </div>
          </div>
        )}

        {paymentMethod === 'USSD' && (
          <div className="w-full h-[400px]  justify-center rounded-2xl bg-white border border-gray-200">
            {/* You can add USSD instructions here if needed */}
            <div>
              <p className='mx-5 my-5 text-[18px] font-[600]'>Dial the USSD code below to make your payment </p>
              <h3 className='text-center text-[2rem] font-[800]'>* 343 * 12424 #</h3>
              <button className='relative left-[25%] top-30 p-[10px] text-center w-90 border-2 text-[#4CAF50] border-[#4CAF50]'>I have  made my payment</button>
            </div>
          </div>
        )}
      </div>

      {/* Success Popup */}
      {isSuccessOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <SuccessPage onClose={() => setIsSuccessOpen(false)} />
        </div>
      )}
    </div>
  );
};

export default PaymentPage;