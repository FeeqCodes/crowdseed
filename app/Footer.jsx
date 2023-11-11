import Image from 'next/image';
import React from 'react'

const Footer = () => {
  return (
    <div className="mt-20 relative z-10 text-[#000000] w-full h-[15vh]  py-5  px-[20px] bg-white flex items-center justify-between">
      <span className="text-[1.2rem] ">
        <Image width={150} height={100} alt="" src="/Group 16.png" />
      </span>

      <div className="h-auto flex gap-5">
        <span>
          <Image
            alt=""
            src="/instagram (2).png"
            height={100}
            width={20}
          ></Image>
        </span>
        <span>
          <Image alt="" src="/twitter (1).png" height={100} width={20}></Image>
        </span>
      </div>
    </div>
  );
}

export default Footer