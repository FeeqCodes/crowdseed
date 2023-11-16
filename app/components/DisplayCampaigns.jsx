import React from 'react'
import CampaignCards from './CampaignCards';

const DisplayCampaigns = ({title,}) => {

  
  return (
    <>
      <div>
        <h1 className="font-semibold text-black text-[18px] text-left">
          {title}
        </h1>
        <div className="flex justify-between flex-wrap mt-[20px] gap-[20px]">
          {/* <p className="text-[#818183] font-semibold text-[14px] leading-[30px]">
              No Campaigns Found
            </p> */}

          <CampaignCards />
          <CampaignCards />
          <CampaignCards />
          <CampaignCards />
        </div>
      </div>
    </>
  );
}

export default DisplayCampaigns










