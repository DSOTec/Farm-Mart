import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import categories from '../assets/categories.png';
import profile from '../assets/profile.png';
import support from '../assets/support.png';
import pepper from '../assets/Pepper.png';
import onions from '../assets/Onions.png';
import spinach from '../assets/Spinach.png';
import leaf from '../assets/Leafpng.png';
import spring from '../assets/Spring.png';
import bitter from '../assets/Leaff.png';
import tomatoes from '../assets/Tomatoes.png';
import water from '../assets/Waterleaf.png';
import carrot from '../assets/Carrot.png';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to toggle profile dropdown
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false); // State to toggle categories dropdown
  // Removed unused userRole state
  const [activeSubmenu, setActiveSubmenu] = useState(null); // State to toggle specific submenu
  // const navigate = useNavigate();

  useEffect(() => {
    // Retrieve user data from localStorage
    // const storedUser = JSON.parse(localStorage.getItem('user'));
    // if (storedUser) {
    //   setUserRole(storedUser.role); // Set the user's role (Customer or Farmer)
    // }
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle profile dropdown visibility
  };

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen); // Toggle categories dropdown visibility
  };

  const toggleSubmenu = (submenu) => {
    setActiveSubmenu(activeSubmenu === submenu ? null : submenu); // Toggle specific submenu
  };


  return (
    <>
      <div className="bg-[white] md:bg-[#00000000]">
        <div className="pl-[5%] pr-[4%] pt-[2%]">
          <div className="relative flex items-center justify-between h-[60px]">
            {/* Logo Section */}
            <div className="absolute left-4">
              <Link
                className="font-[montagu] font-[700] text-[18px] text-black md:text-white md:text-[28px]"
                to="/"
              >
                FarmMart
              </Link>
            </div>

            {/* Centered List Items */}
            <div className="hidden md:flex justify-center w-full">
              <ul className="flex list-none gap-8 font-[Poppins] bg-[rgba(0, 0, 0, 0.37)] text-center border-[1px] border-white rounded-[100px] shadow-lg px-4 py-2">
                <li className="text-white p-[10px] relative group">
                  <button className="cursor-pointer">Categories</button>
                  {/* Main Dropdown */}
                  <div className="absolute left-0 mt-2 hidden  group-hover:block bg-white text-black rounded-lg shadow-lg w-[220px] z-10">
                    <ul className="space-y-2 p-4">
                      {/* Vegetables */}
                      <li className="flex items-center justify-between hover:text-green-600 cursor-pointer group relative">
                        <span className="font-bold text-[#A68A00]">Vegetables</span>
                        <span>&gt;</span>
                        {/* Submenu */}
                        <div className="absolute left-full top-0 hidden group-hover:block bg-white text-black rounded-lg shadow-lg w-[400px] p-4 z-10">
                          <div className="grid grid-cols-3 gap-4">
                            <div className="text-center">
                              <img src={pepper} alt="Pepper" className="w-16 h-16 mx-auto rounded-full" />
                              <p className="text-sm mt-2">Pepper</p>
                            </div>
                            <div className="text-center">
                              <img src={onions} alt="Onions" className="w-16 h-16 mx-auto rounded-full" />
                              <p className="text-sm mt-2">Onions</p>
                            </div>
                            <div className="text-center">
                              <img src={spinach} alt="Spinach Leaf" className="w-16 h-16 mx-auto rounded-full" />
                              <p className="text-sm mt-2">Spinach Leaf</p>
                            </div>
                            <div className="text-center">
                              <img src={leaf} alt="Pumpkin Leaf" className="w-16 h-16 mx-auto rounded-full" />
                              <p className="text-sm mt-2">Pumpkin Leaf</p>
                            </div>
                            <div className="text-center">
                              <img src={spring} alt="Spring Onions" className="w-16 h-16 mx-auto rounded-full" />
                              <p className="text-sm mt-2">Spring Onions</p>
                            </div>
                            <div className="text-center">
                              <img src={bitter} alt="Bitter Leaf" className="w-16 h-16 mx-auto rounded-full" />
                              <p className="text-sm mt-2">Bitter Leaf</p>
                            </div>
                            <div className="text-center">
                              <img src={tomatoes} alt="Tomatoes" className="w-16 h-16 mx-auto rounded-full" />
                              <p className="text-sm mt-2">Tomatoes</p>
                            </div>
                            <div className="text-center">
                              <img src={water} alt="Water Leaf" className="w-16 h-16 mx-auto rounded-full" />
                              <p className="text-sm mt-2">Water Leaf</p>
                            </div>
                            <div className="text-center">
                              <img src={carrot} alt="Carrot & Cabbage" className="w-16 h-16 mx-auto rounded-full" />
                              <p className="text-sm mt-2">Carrot & Cabbage</p>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* Fruits */}
                      <li className="flex items-center justify-between hover:text-green-600 cursor-pointer">
                        <span>Fruits</span>
                        <span>&gt;</span>
                      </li>
                      {/* Spices */}
                      <li className="flex items-center justify-between hover:text-green-600 cursor-pointer">
                        <span>Spices</span>
                        <span>&gt;</span>
                      </li>
                      {/* Tubers */}
                      <li className="flex items-center justify-between hover:text-green-600 cursor-pointer">
                        <span>Tubers</span>
                        <span>&gt;</span>
                      </li>
                      {/* Soups */}
                      <li className="flex items-center justify-between hover:text-green-600 cursor-pointer">
                        <span>Soups</span>
                        <span>&gt;</span>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="text-white p-[10px] relative group">
                  <button className="cursor-pointer">Sign Up/Login</button>
                  {/* Dropdown Menu */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 hidden group-hover:block bg-white text-black rounded-lg shadow-lg w-[240px]">
                    {/* Arrow */}
                    <div className="absolute top-[-8px] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
                    <div className="flex justify-between p-4">
                      {/* Left Section: Login and Sign Up */}
                      <ul className="space-y-4">
                        <li className="hover:text-green-600 cursor-pointer">
                         Login
                        </li>
                        <li className="hover:text-green-600 ">
                          Sign Up
                        </li>
                      </ul>
                      {/* Right Section: Customer and Farmer */}
                      <ul className="space-y-4 text-right">
                        <li>
                          <Link to="/customer" className="font-bold text-gray-700 p-[10px]  hover:text-green-600 hover:rounded-[10px] hover:bg-[#FFC107] cursor-pointer">
                            Customer
                          </Link>
                        </li>
                        <li>
                          <Link to="/login" className="font-bold text-gray-700  p-[10px]  hover:text-green-600 hover:rounded-[10px] hover:bg-[#FFC107] cursor-pointer">
                            Farmer
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="text-white p-[10px]">
                  <Link>Support</Link>
                </li>
              </ul>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden absolute right-8">
              {/* Categories Button */}
              <div className="relative">
                <button
                  className="text-white text-2xl p-3 cursor-pointer hover:bg-[#796116] rounded-[20px]"
                  onClick={toggleCategories} // Toggle categories dropdown
                >
                  <img className="w-[20px]" src={categories} alt="Categories" />
                </button>
                {isCategoriesOpen && (
                  <ul className="absolute left-0 mt-2 bg-white text-black rounded-lg shadow-lg w-64 p-4 z-10">
                    <li
                      className="font-bold text-[#A68A00] mb-2 hover:text-green-600 cursor-pointer"
                      onClick={() => toggleSubmenu('Vegetables')}
                    >
                      Vegetables
                    </li>
                    {activeSubmenu === 'Vegetables' && (
                      <div className="bg-white text-black rounded-lg shadow-lg w-full p-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center">
                            <img src={pepper} alt="Pepper" className="w-16 h-16 mx-auto rounded-full" />
                            <p className="text-sm mt-2">Pepper</p>
                          </div>
                          <div className="text-center">
                            <img src={onions} alt="Onions" className="w-16 h-16 mx-auto rounded-full" />
                            <p className="text-sm mt-2">Onions</p>
                          </div>
                          <div className="text-center">
                            <img src={spinach} alt="Spinach Leaf" className="w-16 h-16 mx-auto rounded-full" />
                            <p className="text-sm mt-2">Spinach Leaf</p>
                          </div>
                          <div className="text-center">
                            <img src={leaf} alt="Pumpkin Leaf" className="w-16 h-16 mx-auto rounded-full" />
                            <p className="text-sm mt-2">Pumpkin Leaf</p>
                          </div>
                          <div className="text-center">
                            <img src={spring} alt="Spring Onions" className="w-16 h-16 mx-auto rounded-full" />
                            <p className="text-sm mt-2">Spring Onions</p>
                          </div>
                          <div className="text-center">
                            <img src={bitter} alt="Bitter Leaf" className="w-16 h-16 mx-auto rounded-full" />
                            <p className="text-sm mt-2">Bitter Leaf</p>
                          </div>
                          <div className="text-center">
                            <img src={tomatoes} alt="Tomatoes" className="w-16 h-16 mx-auto rounded-full" />
                            <p className="text-sm mt-2">Tomatoes</p>
                          </div>
                          <div className="text-center">
                            <img src={water} alt="Water Leaf" className="w-16 h-16 mx-auto rounded-full" />
                            <p className="text-sm mt-2">Water Leaf</p>
                          </div>
                          <div className="text-center">
                            <img src={carrot} alt="Carrot & Cabbage" className="w-16 h-16 mx-auto rounded-full" />
                            <p className="text-sm mt-2">Carrot & Cabbage</p>
                          </div>
                        </div>
                      </div>
                    )}
                    <li
                      className="font-bold text-[#A68A00] mb-2 hover:text-green-600 cursor-pointer"
                      onClick={() => toggleSubmenu('Fruits')}
                    >
                      Fruits
                    </li>
                    {activeSubmenu === 'Fruits' && (
                      <div className="bg-white text-black rounded-lg shadow-lg w-full p-4">
                        <p>Fruits submenu content here...</p>
                      </div>
                    )}
                    <li
                      className="font-bold text-[#A68A00] mb-2 hover:text-green-600 cursor-pointer"
                      onClick={() => toggleSubmenu('Spices')}
                    >
                      Spices
                    </li>
                    {activeSubmenu === 'Spices' && (
                      <div className="bg-white text-black rounded-lg shadow-lg w-full p-4">
                        <p>Spices submenu content here...</p>
                      </div>
                    )}
                    <li
                      className="font-bold text-[#A68A00] mb-2 hover:text-green-600 cursor-pointer"
                      onClick={() => toggleSubmenu('Tubers')}
                    >
                      Tubers
                    </li>
                    {activeSubmenu === 'Tubers' && (
                      <div className="bg-white text-black rounded-lg shadow-lg w-full p-4">
                        <p>Tubers submenu content here...</p>
                      </div>
                    )}
                    <li
                      className="font-bold text-[#A68A00] mb-2 hover:text-green-600 cursor-pointer"
                      onClick={() => toggleSubmenu('Soups')}
                    >
                      Soups
                    </li>
                    {activeSubmenu === 'Soups' && (
                      <div className="bg-white text-black rounded-lg shadow-lg w-full p-4">
                        <p>Soups submenu content here...</p>
                      </div>
                    )}
                  </ul>
                )}
              </div>

              {/* Profile Button with Dropdown */}
              <div className="relative">
                <button
                  className="text-white text-2xl p-3 cursor-pointer hover:bg-[#796116] rounded-[20px]"
                  onClick={toggleDropdown} // Toggle profile dropdown
                >
                  <img className="w-[20px]" src={profile} alt="Profile" />
                </button>
                {isDropdownOpen && (
                  <ul className="absolute right-0 mt-2 bg-white text-black rounded-lg shadow-lg w-45 h-25">
                    <li className="flex items-center p-2 hover:bg-[#F4E3B2] rounded-t-lg cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5 mr-2 text-[#4CAF50]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 9V5.25a2.25 2.25 0 00-2.25-2.25h-3a2.25 2.25 0 00-2.25 2.25V9m-3 0h12m-6 0v6m0 0h3m-3 0H9"
                        />
                      </svg>
                      <Link to="" className="text-sm font-medium text-black">
                        Sign Up
    
                      </Link>
                    </li>
                    <li className="flex items-center p-2 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5 mr-2 text-[#4CAF50]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 9V5.25a2.25 2.25 0 00-2.25-2.25h-3a2.25 2.25 0 00-2.25 2.25V9m-3 0h12m-6 0v6m0 0h3m-3 0H9"
                        />
                      </svg>
                      <Link to="" className="text-sm font-medium text-black">
                        Log In
                      </Link>
                    </li>
                    <ul className='relative bottom-16  right-2 space-y-1 text-right '>
                      <li><Link className='text-sm font-medium text-black p-[7px]  mb-[4px] hover:bg-[#F4E3B2] rounded-[10px] cursor-pointer' to='/customer'> Customer </Link> </li>
                      <hr />
                      <li> <Link className='text-sm font-medium text-black p-[7px] hover:bg-[#F4E3B2] rounded-[10px] cursor-pointer' to='/login'> Farmer </Link></li>
                    </ul>
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