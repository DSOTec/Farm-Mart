import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="pl-[5%] pr-[4%] pt-[2%] ">
        <div className="relative flex items-center justify-between h-[60px]">
          {/* Logo Section */}
          <div className="absolute left-4">
            <Link className="font-[montagu] font-[700] text-[28px] text-white" to="">
              Farm Mart
            </Link>
          </div>

          {/* Centered List Items */}
          <div className="hidden md:flex justify-center w-full">
            <ul className="flex list-none gap-8 font-[Poppins] bg-[rgba(0, 0, 0, 0.37)] text-center border-[1px] border-white rounded-[100px] shadow-lg px-4 py-2">
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

          {/* Mobile Menu Button */}
          <div className="flex md:hidden absolute right-4">
            <button className="text-white text-2xl">
              <i className="fas fa-bars"></i> {/* Replace with an icon library or SVG */}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;