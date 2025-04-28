import React from 'react';

const Banner = () => {
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
          <input
            className="w-full md:w-1/2 leading-10 p-[10px] bg-[rgba(255,255,255,0.3)] rounded-[20px] text-black"
            type="search"
            placeholder="Search for farm produces..."
          />
          <button className="  bg-[#FFBD00] w-[20%] md:relative right-[13%] w-[100px]  text-black p-[10px] rounded-[20px] cursor-pointer">
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;