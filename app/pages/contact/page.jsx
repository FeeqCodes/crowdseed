import React from 'react'

const Contact = () => {
  return (
    <div
      style={{
        backgroundImage:
          "radial-gradient(at 80% 100%, rgb(0,80,255) 0, transparent 100%),radial-gradient(at 20% 100%, rgb(185,35,255) 0, transparent 100%)",
      }}
      className="h-[100vh]"
    >
      <div className="py-10 m-auto w-[95vw]  max-w-[1280px]">
        <h2 className="text-[64px] text-[#222] font-extrabold">Contact Us</h2>
      </div>
    </div>
  );
}

export default Contact