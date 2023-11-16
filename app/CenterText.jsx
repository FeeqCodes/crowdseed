"use client";

import React from "react";
import { motion } from "framer-motion";

const CenterText = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: -50 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="h-auto w-[95vw] max-w-[1280px] p-[6rem] m-auto  py-[6vh] px-[20px] pb-[12vh] backdrop-blur-sm"
    >
      <div className="w-[60%] m-auto">
        <h2 className="text-[20px] text-center ">
          &apos; At CrowdSeed, we believe in the profound journey of life, where
          each heartbeat represents an opportunity to make a difference. Our
          platform is not just about contributions; it&apos; s about the
          emotions, the stories, and the shared humanity that bind us together.
          Here, we come together to support dreams, heal wounds, and uplift
          spirits. We celebrate the strength of the human spirit, the power of
          collective empathy, and the beauty of turning dreams into reality.
          Join us on this incredible journey, where your contributions are not
          just transactions, but threads of hope, compassion, and love that
          weave the tapestry of a better world. &apos;
        </h2>
      </div>
    </motion.div>
  );
};

export default CenterText;
