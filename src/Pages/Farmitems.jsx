import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import items from '../Data/items'; // Import the items array
import { FaArrowLeft, FaShoppingCart, FaSearch } from 'react-icons/fa'; // Import icons
import vegImg from '../assets/categories/vegImg.png'; // replace with actual path
import fruitImg from '../assets/categories/fruitImg.png'; // replace with actual path
import spiceImg from '../assets/categories/spiceImg.png'; // replace with actual path
import tuberImg from '../assets/categories/tuberImg.png'; // replace with actual path
import soupImg from '../assets/categories/soupImg.png'; // replace with actual path

const Farmitems = () => {
  const location = useLocation(); // Get the current location
  const navigate = useNavigate(); // Initialize useNavigate
  const queryParams = new URLSearchParams(location.search); // Parse query parameters
  const searchQuery = queryParams.get('query') || ''; // Get the search query

  // State to manage search input
  const [searchInput, setSearchInput] = useState(searchQuery);

  // Filter items based on the search query
  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  // State to manage cart items
  const [cart, setCart] = useState(() => {
    // Retrieve cart from localStorage or initialize as an empty array
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Function to handle adding items to the cart
  const handleAddToCart = (item) => {
    // Check if the item already exists in the cart
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      // Update the quantity of the existing item
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    } else {
      // Add the new item to the cart
      const updatedCart = [...cart, { ...item, quantity: 1 }];
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
    alert(`${item.title} has been added to your cart!`);
  };

  // Navigate to the Cart
  const goToCart = () => {
    navigate('/cart');
  };

  // Navigate to the Landing page
  const goToLandingPage = () => {
    navigate('/');
  };

  return (
    <>
      
        {/* Top Bar */}
        <div className="flex items-center justify-between pt-4 pl-[4%] pr-[4%] mb-6">
          {/* Back Arrow Icon */}
          <button
            onClick={goToLandingPage} // Navigate to Landing Page
            className="text-gray-700 hover:text-green-600"
          >
            <FaArrowLeft size={24} />
          </button>

          {/* Search Bar */}
          <div className="relative flex-1 mx-4">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            {/* Update search input */}
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search for items..."
              className="w-[98%] p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Cart Icon */}
          <button
            onClick={goToCart} // Navigate to Cart page
            className="relative right-4 text-[#4CAF50] font-[700] hover:text-green-600"
          >
            <FaShoppingCart size={24}  />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#FFC107] text-white text-xs rounded-full px-2">
                {cart.length}
              </span>
            )}
          </button>
        </div>

        {/* Search Results */}
        <h1 className="text-2xl font-bold mb-4 text-center">
          Search Results for "{searchInput}"
        </h1>
        <div className="grid grid-cols-1 pl-[4%] pr-[4%] md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div
                key={item.id}
                className="border border-gray-300 p-4 shadow-md bg-white flex flex-col items-center"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-70 object-cover mb-4"
                />
                <h2 className="text-[16px] text-[#4CAF50] font-[700] mb-2">{item.title}</h2>
                <p className="text-gray-600 mb-2">Farmer: {item.farmer}</p>
                <p className="text-gray-600 mb-2">
                  Remaining: {item.remaining}
                </p>
                <p className="text-gray-800 font-bold mb-4">
                  Price: ₦{item.price.toFixed(2)}
                </p>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="bg-[#FFC107] px-4 py-2 rounded-[10px] w-[60%] hover:bg-[#45a049] mx-auto block"
                  style={{ marginTop: "auto" }}
                >
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-full">
              No items found.
            </p>
          )}
        </div>
        <div className="px-4 py-4">
        {/* Discover the Categories Section */}
        <h2 className="text-[28px] pl-[4%] font-bold text-left mb-6 text-gray-800">
          Discover the Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-10">
          <div className="flex flex-col  overflow-hidden shadow border-none">
            <img src={vegImg} alt="Vegetables" className="h-80 w-full object-cover" />
            <div className="bg-green-500 py-4">
              <p className="text-center text-xl font-bold text-gray-900">Vegetables</p>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden shadow border-none">
            <img src={fruitImg} alt="Fruits" className="h-80 w-full object-cover" />
            <div className="bg-green-500 py-4">
              <p className="text-center text-xl font-bold text-gray-900">Fruits</p>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden shadow border-none">
            <img src={spiceImg} alt="Spices" className="h-80 w-full object-cover" />
            <div className="bg-green-500 py-4">
              <p className="text-center text-xl font-bold text-gray-900">Spices</p>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden shadow border-none">
            <img src={tuberImg} alt="Tubers" className="h-80 w-full object-cover" />
            <div className="bg-green-500 py-4">
              <p className="text-center text-xl font-bold text-gray-900">Tubers</p>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden shadow border-none">
            <img src={soupImg} alt="Soups" className="h-80 w-full object-cover" />
            <div className="bg-green-500 py-4">
              <p className="text-center text-xl font-bold text-gray-900">Soups</p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Farmitems;