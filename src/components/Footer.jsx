import React from 'react'
import apple from '../assets/apple-brands.svg'
import google from '../assets/google-play-brands.svg'
import facebook from '../assets/facebook-f-brands.svg'
import instagram from '../assets/instagram-brands.svg'
import x from '../assets/icons8-x.svg'
import tiktok from '../assets/tiktok-brands.svg'


const Footer = () => {
  return (
   <>

    <div className='pl-[5%] pr-[4%] pt-[2%] bg-[#1a1a1a] text-white'>
        <div className='flex justify-between items-center'>
            <div className='flex flex-col gap-4'>
                <h1 className='text-[24px] font-bold font-[montagu]'>FarmMart</h1>
                <p>About FarmMart</p>
                <p>Contact Us</p>
                <p>Refer & Earn</p>
            </div>
            <div className='flex flex-col gap-4'>
                <h1>Customer Service</h1>
                <p>Return and Return Policy</p>
                <p>Terms and Condition</p>
                <p>Privacy Policy</p>
                <p>Report Fraud</p>
            </div>
            <div className='flex flex-col gap-4'>
                <h1>Support</h1>
                <p>Help</p>
                <p>Site Map</p>
                <p>FAQs</p>
                <p>Be Our Partner</p>
            </div>
            <div>
                <h1>Download Our App</h1>
                <div>
                    <div className='flex gap-4'>
                    <div className='flex gap-2 items-center w-35 h-10 bg-white rounded-md p-2'>
                        <img className='w-5 h-5' src={apple} alt="apple" />
                        <p className='text-black text-[12px] leading-none'>Download on the <br/> <span className='text-[16px] font-bold'>App Store</span></p>
                    </div>   
                    <div className='flex gap-2 items-center w-35 h-10 bg-white rounded-md p-2'>
                            <img className='w-5 h-5' src={google} alt="google" />
                            <p className='text-black text-[12px] leading-none'>Get it on <br/> <span className='text-[16px] font-bold'>Google Play</span></p>
                    </div>
                    </div>
                </div>
                <div>
                    <h1>Find us on Social Media</h1>
                    <div className='flex gap-4'>
                    <img className='w-10 h-10' src={instagram} alt="instagram" />
                    <img className='w-10 h-10' src={x} alt="x" />
                    <img className='w-10 h-10' src={facebook} alt="facebook" />
                    <img className='w-10 h-10' src={tiktok} alt="tiktok" />
                    </div>
                </div>
            </div>
        </div>
        <hr />
        <div>
            <p>Copyright © 2025 FarmMart. All rights reserved.</p>
        </div>
    </div>
   
   </>
  )
}

export default Footer