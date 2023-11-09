'use client'

import React from 'react'
import Titles from './Titles';

const CenterCard = ({title, content}) => {
  return (
    <>
      <div
        data-scroll
        data-scroll-speed="0.1"
        className="relative w-[60%]  m-auto my-[20rem]"
      >
        <div className="p-16">
          {title}
          <p className="text-[#222] text-[18px] ">
            {content}
            </p>
        </div>

        <div className="w-full h-full absolute top-0 z-[-19] blur-sm bg-purple-200"></div>
      </div>
    </>
  );
}

export default CenterCard