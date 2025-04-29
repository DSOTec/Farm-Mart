import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import categories from '../assets/categories.png';
import profile from '../assets/profile.png';
import support from '../assets/support.png';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to toggle dropdown

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
  };

  return (
    <>
      <div className="bg-[white] md:bg-[#00000000]">
        <div className="pl-[5%] pr-[4%] pt-[2%]">
          <div className="relative flex items-center justify-between h-[60px]">
            {/* Logo Section */}
            <div className="absolute left-4">
              <Link className="font-[montagu] font-[700] text-[18px] text-black md:text-white md:text-[28px]" to="/">
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
                  <ul className="absolute left-3 w-[100px] mt-2 hidden group-hover:block bg-[rgba(255,255,255,0.8)] text-white rounded-lg shadow-lg">
                    <li className="p-2 hover:bg-[#4CAF50] rounded-t-lg">
                      <Link to="/login">Log In </Link>
                    </li>
                    <li className="p-2 hover:bg-[#4CAF50] rounded-b-lg">
                      <Link to="/signup">Sign Up  </Link>
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
              <button className="text-white text-2xl p-3 cursor-pointer hover:bg-[#796116] rounded-[20px]">
                <img className="w-[20px]" src={categories} alt="Categories" />
              </button>

              {/* Profile Button with Dropdown */}
              <div className="relative">
                <button
                  className="text-white text-2xl p-3 cursor-pointer hover:bg-[#796116] rounded-[20px]"
                  onClick={toggleDropdown} // Toggle dropdown on click
                >
                  <img className="w-[20px]" src={profile} alt="Profile" />
                </button>
                {isDropdownOpen && (
                  <ul className="absolute right-0 mt-2 bg-[rgba(255,255,255,0.8)] text-black rounded-lg shadow-lg">
                    <li className="p-2 hover:bg-[#4CAF50] rounded-t-lg">
                      <Link to="/login">Login</Link>
                    </li>
                    <li className="p-2 hover:bg-[#4CAF50] rounded-b-lg">
                      <Link to="/signup">Sign Up</Link>
                    </li>
                  </ul>
                )}
              </div>

              <button className="text-white text-2xl p-3 cursor-pointer hover:bg-[#796116] rounded-[20px]">
                <img className="w-[20px]" src={support} alt="Support" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;