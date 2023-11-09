import React from "react";
import Titles from "./Titles";
import Image from "next/image";
import Cards from "./Cards";
import CenterCard from "./CenterCard";





const FirstSection = () => {
  return (
    <div className=" w-[95vw] max-w-[1280px] m-auto">
      <div className=" flex gap-2 items-center justify-between">
        <div className="w-[50%]  ">
          <h2 className="leading-[140%] text-[4vw]   bg-gradient-to-r  from-blue-400 via-blue-600 to-blue-800 inline-block text-transparent bg-clip-text font-sans font-bold">
            Welcome to CrowdSeed
          </h2>
          <p className="text-[#222] text-[18px] ">
            At CrowdSeed, we believe in the collective power of individuals,
            organizations, and communities to drive positive change. We&apos;ve
            harnessed the revolutionary potential of blockchain technology to
            create a crowdfunding platform that empowers you to be the catalyst
            for a better world. Here, we&apos;l explore the key elements that
            make our platform unique and how you can become a part of this
            transformative movement.
          </p>
        </div>

        <div>
          <Image
            alt=""
            src="/3d-render-black-hand-with-money-isolated-icons-set.jpg"
            width={600}
            height={100}
          />
        </div>
      </div>

      <CenterCard
        title={
          <Titles
            subTitle="Our Vision"
            title="Decentralized Crowdfunding for a Better World"
          />
        }
        content="Our vision is simple: to foster positive change and support
            innovative ideas that can shape a brighter future for all.
            Traditional crowdfunding platforms often come with limitations, such
            as fees, access restrictions, and centralized control. We've
            set out to eliminate these barriers and provide a space where you
            can make a meaningful impact on the causes you care about"
      />

      <div className="mt-[20rem] ">
        <Titles
          subTitle="FEATURES"
          title="Our platform hosts a diverse range of projects, initiatives, and causes. Whether you're passionate about environmental conservation, social justice, community development, arts and culture, or any other area, you'll find campaigns that resonate with your values and interests."
        />

        <div className="mt-[12rem] flex flex-wrap gap-[60px] gap-y-[100px] justify-center">
          <div className="w-[20rem] text-center flex flex-col justify-center">
            <Image
              width={100}
              height={100}
              src="/image-from-rawpixel-id-12160343-png.png"
              alt=""
              className="m-auto mb-8"
            />
            <h4 className="font-sans font-semibold uppercase mb-2">
              {" "}
              Transparency
            </h4>
            <p className="">
              We understand that trust is crucial in the realm of crowdfunding.
              Each contribution and campaign update is meticulously recorded on
              the blockchain
            </p>
          </div>

          <div className="w-[20rem] text-center ">
            <Image
              width={100}
              height={100}
              src="/image-from-rawpixel-id-12160343-png.png"
              alt=""
              className="m-auto mb-8"
            />
            <h4 className="font-sans font-semibold uppercase mb-2">
              {" "}
              Transparency
            </h4>
            <p className="">
              We understand that trust is crucial in the realm of crowdfunding.
              Each contribution and campaign update is meticulously recorded on
              the blockchain
            </p>
          </div>

          <div className="w-[20rem] text-center ">
            <Image
              width={100}
              height={100}
              src="/image-from-rawpixel-id-12160343-png.png"
              alt=""
              className="m-auto mb-8"
            />
            <h4 className="font-sans font-semibold uppercase mb-2">
              {" "}
              Transparency
            </h4>
            <p className="">
              We understand that trust is crucial in the realm of crowdfunding.
              Each contribution and campaign update is meticulously recorded on
              the blockchain
            </p>
          </div>

          <div className="w-[20rem] text-center ">
            <Image
              width={100}
              height={100}
              src="/image-from-rawpixel-id-12160343-png.png"
              alt=""
              className="m-auto mb-8"
            />
            <h4 className="font-sans font-semibold uppercase mb-2">
              {" "}
              Transparency
            </h4>
            <p className="">
              We understand that trust is crucial in the realm of crowdfunding.
              Each contribution and campaign update is meticulously recorded on
              the blockchain
            </p>
          </div>

          <div className="w-[20rem] text-center ">
            <Image
              width={100}
              height={100}
              src="/image-from-rawpixel-id-12160343-png.png"
              alt=""
              className="m-auto mb-8"
            />
            <h4 className="font-sans font-semibold uppercase mb-2">
              {" "}
              Transparency
            </h4>
            <p className="">
              We understand that trust is crucial in the realm of crowdfunding.
              Each contribution and campaign update is meticulously recorded on
              the blockchain
            </p>
          </div>

          <div className="w-[20rem] text-center ">
            <Image
              width={100}
              height={100}
              src="/image-from-rawpixel-id-12160343-png.png"
              alt=""
              className="m-auto mb-8"
            />
            <h4 className="font-sans font-semibold uppercase mb-2">
              {" "}
              Transparency
            </h4>
            <p className="">
              We understand that trust is crucial in the realm of crowdfunding.
              Each contribution and campaign update is meticulously recorded on
              the blockchain
            </p>
          </div>

          {/* End */}
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
