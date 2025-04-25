import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div className='pl-[5%] pr-[4%] pt-[2%] bg-[#4CAF50]'>
      <div className="relative flex items-center  h-[60px]">
        {/* Logo Section */}
        <div className="absolute left-4">
          <Link className="font-[montagu] font-[700] text-[28px] text-white" to="">
            Farm Mart
          </Link>
        </div>

        {/* Centered List Items */}
        <div className="flex justify-center w-full">
          <ul className="flex list-none gap-8 font-[Poppins] text-center border-[1px] rounded-[100px] shadow-[0px_4px_10px_rgba(118, 203, 121, 0.6)]">
            <li className="text-white p-[10px]">
              <Link>Categories</Link>
            </li>
            <li className="text-white p-[10px]">
              <Link>Sign Up/Login</Link>
            </li>
            <li className="text-white p-[10px]">
              <Link>Support</Link>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </>
  );
};

export default Navbar;