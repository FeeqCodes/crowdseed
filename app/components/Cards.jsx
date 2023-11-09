'use client'

import Image from 'next/image';
import React, { useState } from 'react'

import { motion } from 'framer-motion';




const Cards = ({title, text, src}) => {

  


  return (
    <>
      <div
        // initial={{ scale: 1, opacity: 0 }}
        // whileInView={{ opacity: 1 }}
        // whileHover={{ scale: 1.05 }}
        // transition={{ duration: 0.3, ease: "easeOut" }}
        data-scroll
        data-scroll-speed="0.3"
        className="relative  w-[25rem]  overflow-hidden   bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100"
      >
        <div className="  w-full h-[auto]  p-8 flex flex-col justify-center items-center  gap-[40px] ">
          <div>
            <Image width={150} height={100} alt="" src={src} />
          </div>

          <div className="w-full flex flex-col justify-center text-white">
            <h3 className="text-[24px] font-bold  text-center mb-5 font-gtWalsheim">
              Empowering Contributors
            </h3>
            <p className="text-14px  font-tt text-center">
              Anyone, from anywhere in the world, can contribute to campaigns
              they believe in using a variety of cryptocurrencies. You have full
              control over your contributions, and your privacy is a top
              priority.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards