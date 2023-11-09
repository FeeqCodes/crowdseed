'use client'

import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

import { motion } from "framer-motion";
import ParticleBg from "./ParticleBg";



const Hero = () => {
  return (
    <>
      <ParticleBg />

      <div className="h-[auto]  m-auto  py-[6vh]  pb-[12vh] w-[95vw] max-w-[1280px]">
        <div className="w-[70%] my-[4rem] m-auto w- ">
          <motion.div
            initial={{ opacity: 0, translateX: -50 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1 }}
            className="mb-[7rem]"
          >
            <h1 className=" text-[5.3vw] leading-[120%] text-center text-[#000000] font-black mb-10 ">
              Empower Change: Decentralized Crowdfunding for a Better World
            </h1>
            <p className="text-[18px] leading-normal text-center text-[white]  font-sans">
              Join the movement that`&apos;`s redefining how positive change is
              made. Our decentralized crowdfunding platform is more than just a
              means to fund ideas; it`&apos;`s a catalyst for a better world
            </p>
          </motion.div>
        </div>
        <Marquee className="gap-[1rem]" pauseOnHover={true} speed={30}>
          <div className=" flex justify-between gap-[1rem]">
            <Image
              alt=""
              src="/logo-light.515019f3.svg"
              width={100}
              height={10}
              className="mx-[30px]"
            ></Image>
            <Image
              alt=""
              src="/logo-light.890d2924.svg"
              width={100}
              height={10}
              className="mx-[30px]"
            ></Image>
            <Image
              alt=""
              src="/logo-light.9c2c1847.svg"
              width={100}
              height={10}
              className="mx-[30px]"
            ></Image>
            <Image
              alt=""
              src="/logo-light.f2d90e16.svg"
              width={100}
              height={10}
              className="mx-[30px]"
            ></Image>
            <Image
              alt=""
              src="/logo-light.890d2924.svg"
              width={100}
              height={10}
              className="mx-[30px]"
            ></Image>
            <Image
              alt=""
              src="/logo-light.9c2c1847.svg"
              width={100}
              height={10}
              className="mx-[30px]"
            ></Image>
            <Image
              alt=""
              src="/logo-light.a5f3f7f2.svg"
              width={100}
              height={10}
              className="mx-[30px]"
            ></Image>
            <Image
              alt=""
              src="/logo-light.f2d90e16.svg"
              width={100}
              height={10}
              className="mx-[30px]"
            ></Image>
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default Hero;
