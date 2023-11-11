import Image from 'next/image';
import React from 'react'

const CampaignCards = () => {
  return (
    <div className="sm:w-[350px] w-full rounded-[15px]   bg-opacity-45 border border-gray-200 cursor-pointer shadow-sm shadow-black bg-gradient-to-br from-[#5a94e0] via-[#1853a0] to-[#0d2e59] text-[#c8cbcf]">
      <Image
        objectFit="cover"
        unoptimized={true}
        // layout="responsive"
        quality={100}
        width={100}
        height={100}
        src="/annie-spratt-2rMn97DPTdU-unsplash.jpg"
        alt="image"
        className="w-full h-[150px] object-top object-cover rounded-[15px]"
      />
      <div className="flex flex-col p-4">
        <div className="flex items-center mb-[18px]">
          <Image
            width={100}
            height={10}
            src="/iconDigital.d459e710.svg"
            alt="tagtype"
            className="w-[17px] h-[17px] "
          />
          <p className="ml-[12px] mt-[2px] font-medium text-[12px] ">
            Education
          </p>
        </div>
        <div className="block">
          <h3 className="font-semibold text-[16px] text-white text-left leading-[26px] truncate">
            Funding Post
          </h3>
          <p className="mt-[5px] font-normal text-left leading-[18px] truncate">
            Pay your offering here
          </p>
        </div>
        <div className="flex justify-between flex-wrap mt-[15px] gap-2">
          <div className="flex flex-col">
            <h4 className="font-semibold text-[14px]  leading-[22px] text-[#ffffff]">
              0.16
            </h4>
            <p className="mt-[3px] font-normal text-[12px] leading-[18px]  sm:max-w-[120px]">
              Raised of 0.5
            </p>
          </div>
          <div className="flex flex-col">
            <h4 className="font-semibold text-[14px]  leading-[22px]">32</h4>
            <p className="mt-[3px] font-normal text-[12px] leading-[18px]  sm:max-w-[120px]">
              Days Left
            </p>
          </div>
        </div>
        <div className="flex items-center mt-[20px] gap-[12px]">
          <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#13131a]">
            <Image
              width={100}
              height={100}
              src="/Crowdseed Logo.svg"
              alt="user"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <p className="flex-1 font-normal text-[12px]  truncate">
            by <span className="text-white">owner Address</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CampaignCards