import React from 'react';
import { Link } from 'react-router-dom';
import categories from '../assets/categories.png'
import profile from '../assets/profile.png'
import support from '../assets/support.png'
import LoginPage from '../Pages/LoginPage.jsx';
import SignupPage from '../Pages/SignupPage.jsx';

const Navbar = () => {
  return (
    <>
    <div className=' bg-[white] md:bg-[#00000000]'>
      <div className="pl-[5%] pr-[4%] pt-[2%] ">
        <div className="relative flex items-center justify-between h-[60px]">
          {/* Logo Section */}
          <div className="absolute left-4">
            <Link className="font-[montagu] font-[700] text-[18px] text-black md:text-white md:text-[28px]" to="">
              Farm Mart
            </Link>
          </div>

          {/* Centered List Items */}
          <div className="hidden md:flex justify-center w-full">
            <ul className="flex list-none gap-8 font-[Poppins] bg-[rgba(0, 0, 0, 0.37)] text-center border-[1px] border-white rounded-[100px] shadow-lg px-4 py-2">
              <li className="text-white p-[10px]">
                <Link>Categories</Link>
              </li>
              <li className="text-white p-[10px] relative group">
                <Link className="cursor-pointer">Sign Up/Login</Link>
                {/* Dropdown Menu */}
                <ul className="absolute left-0 mt-2 hidden group-hover:block bg-[rgba(255,255,255,0.8)] text-white rounded-lg shadow-lg">
                  <li className="p-2 hover:bg-[#4CAF50] rounded-t-lg">
                    <Link to="/login">Login</Link> {/* Link to LoginPage */}
                  </li>
                  <li className="p-2 hover:bg-[#4CAF50] rounded-b-lg">
                    <Link to="/signup">Sign Up</Link> {/* Link to SignupPage */}
                  </li>
                </ul>
              </li>
              <li className="text-white p-[10px]">
                <Link>Support</Link>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden absolute right-8">
            <button className="text-white text-2xl p-3 cursor-pointer hover:bg-[#796116] rounded-[20px] ">
              <img className="w-[20px] " src={categories} /> {/* Replace with an icon library or SVG */}
            </button>
            <button className="text-white text-2xl p-3 cursor-pointer hover:bg-[#796116] rounded-[20px] ">
              <img className="w-[20px] " src={profile} /> {/* Replace with an icon library or SVG */}
            </button>
            <button className="text-white text-2xl p-3 cursor-pointer hover:bg-[#796116] rounded-[20px] ">
              <img className="w-[20px] " src={support} /> {/* Replace with an icon library or SVG */}
            </button>


          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Navbar;