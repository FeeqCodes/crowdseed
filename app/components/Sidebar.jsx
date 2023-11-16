'use client'
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';


const Sidebar = () => {
  


  return (
    <div className="flex  flex-col sticky top-[10vh] h-[80vh] w-[76px] mt-4">
     

      <div className="relative flex-1 flex flex-col justify-between items-center  rounded-[20px] w-full  backdrop-filter backdrop-blur-lg  border">
        <div
          // style={{
          //   backgroundImage:
          //     "radial-gradient(at 40% 100%, rgb(0,80,255) 0, transparent 100%),radial-gradient(at 20% 100%, rgb(185,35,255) 0, transparent 100%)",
          // }}
          className="absolute w-full h-full bg-gradient-to-b from-blue-400 via-blue-600 to-blue-800 blur-sm"
        ></div>

        <div className="flex flex-col justify-center items-center gap-3 bg-black backdrop-filter backdrop-blur-lg bg-opacity-30 h-full w-full z-10">
          <div className="py-10 px-4 flex flex-col items-center justify-between h-full ">
            <Link href="/">
              <Image
                alt=""
                width={100}
                height={100}
                src="/assets/Home-icon.svg"
                className="w-[2rem]"
              ></Image>
            </Link>
            <Link href="/pages/dashboard">
              <Image
                alt=""
                width={100}
                height={100}
                src="/assets/Control Panel.svg"
                className="w-[2rem] "
              ></Image>
            </Link>
            <Link href="/pages/create-campaign">
              <Image
                alt=""
                width={100}
                height={100}
                src="/assets/create-campaign.svg"
                className="w-[2rem] grayscale"
              ></Image>
            </Link>
            <span>
              <Image
                alt=""
                width={100}
                height={100}
                src="/assets/Male User.svg"
                className="w-[2rem] grayscale"
              ></Image>
            </span>
            <span>
              <Image
                alt=""
                width={100}
                height={100}
                src="/assets/Logout Rounded.svg"
                className="w-[2rem] grayscale "
              ></Image>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Sidebar;
