import React from 'react'

const Banner = () => {
  return (
    <>
      <div className='text-center m-4 pt-10 pl-15'>
        <div className='text-center gap-2 font-[Poppins]'>
          <h1 className='text-[55px] font-[700] text-white'>Explore <span className='text-[#4CAF50]'>Fresh Farm</span> Produces</h1>
          <p className='text-white text-center text-[16px] leading-10 pl-[20px] mb-18'>Buy fresh farm produces directly from local farmers near you</p>
        </div>
        <input className='w-1/2 leading-10  p-[10px] bg-[rgba(255,255,255,0.3)] rounded-[20px]' type='search' /> 
        <button className='relative right-30 bg-[#FFBD00] w-[100px] text-black p-[10px] rounded-[20px] cursor-pointer'>Search</button>
      </div>
    </>
  )
}

export default Banner