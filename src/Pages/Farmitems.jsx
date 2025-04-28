import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import items from '../Data/items'; // Import the items array

const Farmitems = () => {
  const location = useLocation(); // Get the current location
  const queryParams = new URLSearchParams(location.search); // Parse query parameters
  const searchQuery = queryParams.get('query') || ''; // Get the search query

  // Filter items based on the search query
  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Search Results for "{searchQuery}"
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div
                key={item.id}
                className="border border-gray-300 rounded-lg p-4 shadow-md bg-white"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h2 className="text-lg font-bold mb-2">{item.title}</h2>
                <p className="text-gray-600 mb-2">Farmer: {item.farmer}</p>
                <p className="text-gray-600 mb-2">
                  Remaining: {item.remaining}
                </p>
                <p className="text-gray-800 font-bold mb-4">
                  Price: ₦{item.price.toFixed(2)}
                </p>
                <button className="bg-[#4CAF50] text-white px-4 py-2 rounded-lg hover:bg-[#45a049]">
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
      </div>
    </>
  );
};

export default Farmitems;