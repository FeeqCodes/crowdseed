// 'use client'

import Image from 'next/image';
import React from 'react'
import { ThemeSwitcher } from './components/ThemeSwitcher';





const Navbar = () => {
  return (
    <nav className=" sticky top-0 z-10  text-[#000000] w-full  py-4  px-[20px] bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200 font-medium">
      <div className=" flex gap-[20px] justify-between items-center">
        <span className="text-[1.2rem] ">
          <Image width={150} height={100} alt='' src="/Group 16.png" />
        </span>

        <ul className="flex gap-10 ">
          <span className="flex gap-1 justify-center items-center">
            <li>Services</li>
            <Image width={20} height={1} alt="" src="/down-arrow.svg"></Image>
          </span>

          <span className="flex gap-1 justify-center items-center">
            <li>Projects</li>
            <Image width={20} height={1} alt="" src="/down-arrow.svg"></Image>
          </span>

          <span className="flex gap-1 justify-center items-center">
            <li>About Us</li>
            <Image width={20} height={1} alt="" src="/down-arrow.svg"></Image>
          </span>

          <span className="flex gap-1 justify-center items-center">
            <li>Contact</li>
            <Image width={20} height={1} alt="" src="/down-arrow.svg"></Image>
          </span>
        </ul>

        {/* <span className=" right-[0%] top-[0px]">
          <input
            className=" rounded-[10px] outline-none border-[#9b9b9b] shadow-md shadow-[#9b9b9b] text-[14px] py-3 px-8"
            placeholder="Search Document"
          ></input>
        </span> */}

        <div className="flex gap-[20px]">
          <button className="py-[12px] px-4  text-white rounded-[5px] bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium  text-sm  text-center mr-2 mb-2">
            Connect wallet
          </button>
          {/* <ThemeSwitcher /> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar