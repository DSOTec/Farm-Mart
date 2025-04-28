import React from 'react'
import apple from '../assets/apple-brands.svg'
import google from '../assets/google-play-brands.svg'
import facebook from '../assets/facebook-f-brands.svg'
import instagram from '../assets/instagram-brands.svg'
import x from '../assets/icons8-x.svg'
import tiktok from '../assets/tiktok-brands.svg'

const Footer = () => {
  return (
    <footer className="bg-[#212121] pl-[5%] pr-[4%] pt-[2%] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold font-[montagu]">FarmMart</h1>
            <ul className="space-y-2 font-[Poppins]">
              <li><a href="#" className="hover:text-gray-300 transition-colors">About FarmMart</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Refer & Earn</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h1 className="text-lg font-semibold">Customer Service</h1>
            <ul className="space-y-2 font-[Poppins]">
              <li><a href="#" className="hover:text-gray-300 transition-colors">Return and Return Policy</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Terms and Condition</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Report Fraud</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h1 className="text-lg font-semibold">Support</h1>
            <ul className="space-y-2 font-[Poppins]">
              <li><a href="#" className="hover:text-gray-300 transition-colors">Help</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Site Map</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Be Our Partner</a></li>
            </ul>
          </div>

          {/* App Download and Social Media */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-lg font-semibold">Download Our App</h1>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#" className="flex items-center gap-2 w-full sm:w-auto h-12 bg-white rounded-md px-4 hover:bg-gray-100 transition-colors">
                  <img className="w-5 h-5" src={apple} alt="apple" />
                  <p className="text-black text-[10px] leading-none">
                    Get it on<br />
                    <span className="text-[14px] font-bold">App Store</span>
                  </p>
                </a>
                <a href="#" className="flex items-center gap-2 w-full sm:w-auto h-12 bg-white rounded-md px-4 hover:bg-gray-100 transition-colors">
                  <img className="w-5 h-5" src={google} alt="google" />
                  <p className="text-black text-[10px] leading-none">
                    Get it on <br />
                    <span className="text-[14px] font-bold">Google Play</span>
                  </p>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-lg font-semibold">Find us on Social Media</h1>
              <div className="flex gap-4">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <img className="w-10 h-10" src={instagram} alt="instagram" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <img className="w-10 h-10" src={x} alt="x" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <img className="w-10 h-10" src={facebook} alt="facebook" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <img className="w-10 h-10" src={tiktok} alt="tiktok" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white-700 mt-30 pt-8 text-right">
          <p className="text-sm  text-white-400">
            Copyright © 2025 FarmMart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer