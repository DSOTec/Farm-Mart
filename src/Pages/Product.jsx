import React, { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import arrow from '/Arrow.svg';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const productImages = [
  '/pepper 1.png',
  '/pepper 2.png',
  '/pepper 3.png',
  '/pepper 4.png',
  
];

const moreFromFarmer = [
  {
    img: '/egusi.png',
    title: 'Sorted Egusi',
    price: '₦2,930',
    unit: '/paint',
    farmer: 'Abo Farms',
    left: 'Only 250 paints left',
  },
  {
    img: '/ugwu.png',
    title: 'Farm Fresh Ugwu',
    price: '₦500',
    unit: '/pack',
    farmer: 'Abo Farms',
    left: 'Only 50 packs left',
  },
  {
    img: '/onions.png',
    title: 'Fresh Onions',
    price: '₦15,000',
    unit: '/paint',
    farmer: 'Abo Farms',
    left: 'Only 250 bags left',
  },
];

const recentlyViewed = [
  {
    img: '/potatoes.png',
    title: 'Sweet Potatoes',
    price: '₦3,430',
    unit: '/Basket',
    oldPrice: '₦6,000',
    left: 'Only 25 Baskets left',
    offer: '1% off per 10 baskets ordered!!!',
    farmer: 'OK Farms',
    rating: 5,
  },
  {
    img: '/oranges.png',
    title: 'Sweet Oranges',
    price: '₦8,950',
    unit: '/Basket',
    oldPrice: '₦10,000',
    left: 'Only 23 Baskets left',
    offer: '2% off per 20 baskets ordered!!!',
    farmer: 'OK Farms',
    rating: 5,
  },
  {
    img: '/plantain.png',
    title: 'Unripped Matured Plantain',
    price: '₦5,430',
    unit: '/Bunch',
    oldPrice: '₦6,000',
    left: 'Only 50 bunches left',
    offer: '2% off per 20 bunches ordered!!!',
    farmer: 'OK Farms',
    rating: 5,
  },
];

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const query = useQuery();
  const searchQuery = query.get("search") || "";

  // Add to Cart handler for main product
  const handleAddToCart = () => {
    alert(`Added ${quantity} item(s) to cart!`);
    // You can add your cart logic here
  };

  // Add to Cart handler for other products
  const handleAddToCartSimple = (item) => {
    alert(`Added "${item.title}" to cart!`);
    // You can add your cart logic here
  };

  return (
    <div className="bg-[#F7F7F7] min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-[#4CB34C] px-4 sm:px-[4%] py-4 flex items-center h-[70px] sm:h-[100px]">
        {/* Back Arrow */}
        <button
          className="ml-2 sm:ml-8"
          onClick={() => navigate('/')}
        >
          <img src={arrow} alt="Back" />
        </button>
        {/* Search Bar */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-[90%] sm:w-[70%] max-w-4xl">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full p-2 sm:p-[10px] rounded-[40px] bg-[#F7F7F7] pl-12 pr-20 text-base sm:text-xl italic text-gray-400 outline-none border-none placeholder:italic placeholder:text-gray-400"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              {/* (Optional: search icon here if you want) */}
            </span>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#FFC107] w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow"
              onClick={() => navigate(`/farmitems?search=${encodeURIComponent(search)}`)}
            >
              <svg width="20" height="20" fill="none" stroke="#fff" strokeWidth={2.5} viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </button>
          </div>
        </div>
        {/* Basket Icon */}
        <div
          className="mr-4 sm:mr-10 cursor-pointer"
          onClick={() => navigate('/cart')}
          title="Go to Cart"
        >
          <svg width="32" height="48" fill="none" stroke="#fff" strokeWidth={4} viewBox="0 0 48 48">
            <circle cx="18" cy="42" r="2" />
            <circle cx="40" cy="42" r="2" />
            <path d="M6 10h8l5.36 26.78A3 3 0 0022.3 38h17.4a3 3 0 002.94-2.22L46 18H12" />
            <path d="M38 18V10a6 6 0 10-12 0v8" />
          </svg>
        </div>
      </div>

      {/* Product Section */}
      <div className="bg-white rounded-lg shadow px-2 py-4 sm:px-[4%] sm:py-[4%] mx-2 sm:mx-8 mt-4 sm:mt-8 flex flex-col lg:flex-row gap-6 sm:gap-8">
        {/* Left: Images */}
        <div className="flex flex-row lg:flex-col items-start gap-2 sm:gap-4">
          <div className="flex flex-row lg:flex-col gap-2">
            {productImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt=""
                className={`w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-lg border-2 cursor-pointer ${selectedImage === idx ? 'border-green-600' : 'border-gray-200'}`}
                onClick={() => setSelectedImage(idx)}
              />
            ))}
          </div>
          <button className="mt-0 lg:mt-4 bg-gray-100 rounded-full p-2 text-gray-500 hover:bg-gray-200">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
        {/* Center: Main Image */}
        <div className="flex-1 flex flex-col items-center">
          <img
            src={productImages[selectedImage]}
            alt="Main"
            className="w-48 h-48 sm:w-80 sm:h-80 object-cover rounded-lg border"
          />
        </div>
        {/* Right: Details */}
        <div className="flex-1 flex flex-col gap-2 mt-4 lg:mt-0">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-700">Abo Farms</span>
            <span className="bg-[#F4F7E7] text-[#A68A00] text-xs px-2 py-1 rounded border border-[#A68A00]">Follow Farm</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-600 text-sm">★★★★★</span>
            <span className="text-gray-500 text-xs">200 Reviews</span>
          </div>
          <h2 className="text-lg sm:text-2xl font-bold text-green-700 mt-2">Farm Fresh Organic Pepper</h2>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-green-700 text-base sm:text-xl font-bold">★★★★★</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xl sm:text-2xl font-bold text-gray-800">₦17,300</span>
            <span className="text-gray-500 text-sm">/ Basket</span>
            <span className="text-gray-400 line-through ml-2">₦19,000</span>
          </div>
          <div className="text-red-600 text-xs sm:text-sm font-semibold mt-1">Only 100 baskets left</div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mt-4">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Select Measuring Scale</label>
              <select className="border rounded px-2 py-1 text-sm">
                <option>Paint Bucket</option>
                <option>Bag</option>
                <option>Basket</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Qty</label>
              <div className="flex items-center border rounded px-2 py-1">
                <button
                  className="px-2 text-lg"
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                >-</button>
                <span className="px-2">{quantity}</span>
                <button
                  className="px-2 text-lg"
                  onClick={() => setQuantity(q => q + 1)}
                >+</button>
              </div>
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Amount</label>
              <div className="border rounded px-2 py-1 text-gray-800 font-semibold">₦{(17300 * quantity).toLocaleString()}</div>
            </div>
          </div>
          <button
            className="mt-6 bg-yellow-400 hover:bg-yellow-500 w-full sm:w-[50%] text-green-900 font-bold py-2 rounded-lg flex items-center justify-center gap-2 shadow"
            onClick={handleAddToCart}
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
            </svg>
            Add to Cart
          </button>
          <div className="flex items-center gap-2 mt-4">
            <span className="text-xs text-gray-400">Report incorrect product information</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs text-gray-500">Category :</span>
            <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Vegetables</span>
          </div>
        </div>
      </div>

      {/* More from the same Farmer */}
      <div className="mx-2 sm:mx-8 mt-8 sm:mt-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800">More from the same Farmer</h3>
          <span className="text-green-700 font-bold cursor-pointer">Visit Farm</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {moreFromFarmer.map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-4 flex flex-col">
              <img src={item.img} alt={item.title} className="w-full h-32 sm:h-40 object-cover rounded-lg mb-2" />
              <span className="text-green-700 font-bold">{item.title}</span>
              <div className="text-sm text-gray-700 mt-1">Price : <span className="font-bold">{item.price}</span> <span className="text-gray-500">{item.unit}</span></div>
              <div className="text-xs text-gray-500 mt-1">Farmer : <span className="font-bold">{item.farmer}</span></div>
              <div className="text-xs text-red-600 mt-1">{item.left}</div>
              <button
                className="mt-3 bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold py-2 rounded-lg flex items-center justify-center gap-2 shadow"
                onClick={() => handleAddToCartSimple(item)}
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
                </svg>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Recently Viewed */}
      <div className="mx-2 sm:mx-8 mt-8 sm:mt-10 mb-10">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Recently Viewed</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {recentlyViewed.map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-4 flex flex-col relative">
              <img src={item.img} alt={item.title} className="w-full h-32 sm:h-40 object-cover rounded-lg mb-2" />
              <span className="text-green-700 font-bold">{item.title}</span>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-lg font-bold">{item.price}</span>
                <span className="text-gray-500">{item.unit}</span>
                <span className="text-gray-400 line-through ml-2">{item.oldPrice}</span>
              </div>
              <div className="text-xs text-red-600 mt-1">{item.left}</div>
              <div className="text-xs text-yellow-700 mt-1">{item.offer}</div>
              <div className="text-xs text-gray-500 mt-1">Farmer : <span className="font-bold">{item.farmer}</span></div>
              <div className="flex items-center gap-1 text-yellow-500 text-xs mt-1">
                {'★'.repeat(item.rating)}
              </div>
              <button
                className="absolute top-4 right-4 bg-white border border-gray-200 rounded-full p-2 shadow hover:bg-yellow-100"
                onClick={() => navigate('/cart')}
                title="Go to Cart"
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
                </svg>
              </button>
              <button
                className="mt-3 bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold py-2 rounded-lg flex items-center justify-center gap-2 shadow md:hidden"
                onClick={() => handleAddToCartSimple(item)}
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;