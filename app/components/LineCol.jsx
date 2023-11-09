import React from 'react'

const LineCol = ({bg, number}) => {
  return (
    <>
      <div className="w-[10%]  flex justify-center">
        <div className="relative flex h-full w-2 bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100 items-center justify-center">
          <div className={`absolute flex flex-col items-center justify-center h-12 w-12 rounded-full border-2  leading-none text-center  backdrop-blur-md backdrop-filter bg-opacity-50 ${bg}`} >
            <span className=" text-white text-[24px] font-bold">{number}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default LineCol