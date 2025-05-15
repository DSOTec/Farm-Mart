import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; // Import the back arrow icon
import PaymentPage from './PaymentPage';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const navigate = useNavigate();

  // Retrieve cart items from localStorage when the component mounts
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Function to handle quantity change
  const handleQuantityChange = (id, newQuantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update localStorage
  };

  // Function to remove an item from the cart
  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update localStorage
  };

  // Calculate total price
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const deliveryFee = 3000; // Fixed delivery fee
  const vat = 1000; // Fixed VAT

  // Calculate grand total
  const grandTotal = cartTotal - discount + deliveryFee + vat;

  // Handle promo code
  const applyPromoCode = () => {
    if (promoCode === 'FarmMart234cd') {
      setDiscount(1000); // Apply a discount of ₦1000
      alert('Promo code applied successfully!');
    } else {
      setDiscount(0);
      alert('Invalid promo code!');
    }
  };

  // Handle Proceed to Checkout
  const handleCheckout = () => {
    setIsPaymentOpen(true);
  };

  // Handle Back Navigation
  const goBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Arrow */}
      <button
        onClick={goBack} // Navigate to the previous page
        className="flex items-center text-gray-700 hover:text-green-600 mb-4"
      >
        <FaArrowLeft className="mr-2" /> Continue Shopping
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section: Cart Items */}
        <div className="lg:col-span-2 bg-white p-4 lg:p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-6">My Cart</h1>
          {cartItems.length > 0 ? (
            <>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 mb-6">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Product Details</th>
                      <th className="border border-gray-300 px-4 py-2 text-center">Quantity</th>
                      <th className="border border-gray-300 px-4 py-2 text-center hidden md:table-cell">Price (₦)</th>
                      <th className="border border-gray-300 px-4 py-2 text-center hidden md:table-cell">Total</th>
                      <th className="border border-gray-300 px-4 py-2 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id}>
                        <div className='flex justify-center items-center p-2'>
                        <td> <img className='w-[100px] float-left rounded-[5px] ' src={item.image} /></td>
                        <td className=" px-4 py-2 text-[#4CAF50] font-[500]"> {item.title}</td>
                        </div>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                          <input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) =>
                              handleQuantityChange(item.id, parseInt(e.target.value, 10))
                            }
                            className="w-16 border border-gray-300 rounded-lg px-2 py-1 text-center"
                          />
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center hidden md:table-cell">
                          ₦{item.price}
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center hidden md:table-cell">
                          ₦{item.price * item.quantity}
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                          <button
                            onClick={() => handleRemoveItem(item.id)}
                            className="text-red-500 hover:underline"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <h2 className="text-right text-lg font-bold">Cart Total: ₦{cartTotal}</h2>
            </>
          ) : (
            <p className="text-center text-gray-600">Your cart is empty.</p>
          )}
        </div>

        {/* Right Section: Order Summary */}
        <div className="bg-[#4CAF50B2] p-4 lg:p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="mb-4">
            <p className="flex justify-between">
              <span>Cart Total:</span> <span>₦{cartTotal}</span>
            </p>
            <p className="flex justify-between">
              <span>Discount:</span> <span>- ₦{discount}</span>
            </p>
            <p className="flex justify-between">
              <span>Delivery Fee:</span> <span>₦{deliveryFee}</span>
            </p>
            <p className="flex justify-between">
              <span>VAT:</span> <span>₦{vat}</span>
            </p>
            <hr className="my-4" />
            <p className="flex justify-between font-bold text-lg">
              <span>Grand Total:</span> <span>₦{grandTotal}</span>
            </p>
          </div>
          <div className="mb-4">
            <label htmlFor="promoCode" className="block text-sm font-medium text-gray-700 mb-2">
              Promo Code
            </label>
            <div className="flex">
              <input
                type="text"
                id="promoCode"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="flex-1 p-2 border border-gray-300 bg-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter promo code"
              />
              <button
                onClick={applyPromoCode}
                className="bg-[#FFC107]  px-4 rounded-r-lg hover:bg-green-600"
              >
                Apply
              </button>
            </div>
          </div>
          <button
            onClick={handleCheckout}
            className="w-full bg-[#FFC107]  py-2 px-4 rounded-lg hover:bg-green-600"
          >
            Check Out
          </button>
        </div>
      </div>

      {/* Payment Modal */}
      <PaymentPage
        isOpen={isPaymentOpen}
        onClose={() => setIsPaymentOpen(false)}
        grandTotal={grandTotal}
      />
    </div>
  );
};

export default Cart;