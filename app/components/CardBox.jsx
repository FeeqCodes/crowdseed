import React from 'react'

const CardBox = () => {
  return (
    <>
      <div className="w-[45%] px-2 py-10 text-[#222]">
        <div className="flex flex-col w-full rounded-lg shadow bg-white px-5 py-5">
          <div className="text-[#222] mb-3 flex justify-between ">
            <div className="font-bold">Registration and Profile Creation</div>
          </div>
          <p className=" text-[14px] ">
            Visit [Your Decentralized Crowdfunding Platform Name] and click on
            the "Sign Up" or "Register" button. Enter your basic information,
            including your name, email address, and a secure password. Verify
            your email address through the confirmation link sent to your inbox.
          </p>
        </div>
      </div>
    </>
  );
}

export default CardBox