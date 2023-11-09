'use client'

import React from 'react'
import { easeInOut, motion } from 'framer-motion';



const Titles = ({ subTitle, title}) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-[80%] m-auto text-center "
      >
        <h5 className="text-[#222] font-sans text-[16px] font-bold mb-[0.5rem]">{subTitle}</h5>
        <h3 className="text-black text-[1.8rem]   bg-gradient-to-r  from-blue-400 via-blue-600 to-blue-800 inline-block text-transparent bg-clip-text font-gtWalsheim font-bold leading-[140%]">
          {title}
        </h3>
        {/* <p className="text-[#222222] ">
          Accelerate your business with our expertise.
        </p> */}
      </motion.div>
    </>
  );
}

export default Titles