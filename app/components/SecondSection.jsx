"use client";

import React from "react";
import Titles from "./Titles";
import Cards from "./Cards";
import Image from "next/image";
import { motion } from "framer-motion";
import CardBox from "./CardBox";
import LineCol from "./LineCol";
import EmptyDiv from "./EmptyDiv";

const SecondSection = () => {
  return (
    <div className="w-[95vw] max-w-[1280px] m-auto">
      <Titles
        subTitle="How it works"
        title="Decentralization is at the heart of our platform. We leverage blockchain technology to create a transparent, secure, and inclusive ecosystem. Here's how it works"
      />

      <div className="mt-[2rem]  m-auto  flex">
        <div className="m-auto flex gap-5">
          {/* TimeLine */}

          <div className="w-2/3 mx-auto">
            {/* First Row */}
            <div
              data-scroll
              data-scroll-speed="0.3"
              className="flex flex-row w-full gap-10"
            >
              {/* <!-- left col --> */}
              <CardBox />
              {/* <!--line column--> */}
              <LineCol
                number="1"
                bg={`bg-gradient-to-t from-blue-400 via-blue-600 to-blue-800`}
              />
              {/* <!--right column--> */}
              <EmptyDiv />
            </div>

            {/*Second Row  */}
            <div
              data-scroll
              data-scroll-speed="0.3"
              className="flex flex-row w-full gap-10"
            >
              {/* <!-- left col --> */}
              <EmptyDiv />
              {/* <!--line column--> */}
              <LineCol
                number="2"
                bg={`bg-gradient-to-t from-fuchsia-400 via-fuchsia-600 to-fuchsia-800`}
              />
              {/* <!--right column--> */}
              <CardBox />
            </div>

            {/* Third Row */}
            <div
              data-scroll
              data-scroll-speed="0.3"
              className="flex flex-row w-full gap-10"
            >
              {/* <!-- left col --> */}
              <CardBox />
              {/* <!--line column--> */}
              <LineCol
                number="3"
                bg={`bg-gradient-to-t from-blue-400 via-blue-600 to-blue-800`}
              />
              {/* <!--right column--> */}
              <EmptyDiv />
            </div>

            {/* Fourth */}
            <div
              data-scroll
              data-scroll-speed="0.3"
              className="flex flex-row w-full gap-10"
            >
              {/* <!-- left col --> */}
              <EmptyDiv />

              {/* <!--line column--> */}
              <LineCol
                number="4"
                bg={`bg-gradient-to-t from-fuchsia-400 via-fuchsia-600 to-fuchsia-800`}
              />

              {/* <!--right column--> */}
              <CardBox />
            </div>

            {/* End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
