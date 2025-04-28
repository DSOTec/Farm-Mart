import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Banner = () => {
  const [searchQuery, setSearchQuery] = useState(''); // State for search input
  const navigate = useNavigate(); // Initialize useNavigate

  // Handle search
  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      navigate(`/farmitems?query=${searchQuery}`); // Navigate to Farmitems with query
    }
  };

  return (
    <>
      <div className="text-center m-4 pt-10 px-4">
        <div className="text-center gap-2 font-[Poppins]">
          <h1 className="text-[32px] md:text-[55px] font-[700] text-white">
            Explore <span className="text-[#4CAF50]">Fresh Farm</span> Produces
          </h1>
          <p className="text-white text-center text-[14px] md:text-[16px] leading-6 md:leading-10 px-4 md:px-20 mb-6">
            Buy fresh farm produces directly from local farmers near you
          </p>
        </div>
        <div className="flex flex-col md:flex-row mt-4 justify-center items-center gap-4">
          <div className="flex w-full md:w-1/2 bg-[rgba(255,255,255,0.3)] rounded-[20px] overflow-hidden">
            <input
              className="flex-grow leading-10 p-[10px] text-black bg-transparent outline-none"
              type="search"
              placeholder="Search for farm produces..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              className="bg-[#FFBD00] text-black px-4 md:px-6 rounded-none cursor-pointer"
              onClick={handleSearch} // Trigger search on button click
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;