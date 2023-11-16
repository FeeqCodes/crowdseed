import React from 'react'
import DisplayCampaigns from '../../components/DisplayCampaigns';
import Sidebar from '../../components/Sidebar';

const Dashboard = () => {
  return (
    <>
      <div  className="my-5 flex gap-10 relative h-[auto]  w-[95vw] max-w-[1280px] m-auto">
        <Sidebar />

        <div className='w-[100%]'>
          <DisplayCampaigns
            title="All Campaigns"

          />
        </div>
      </div>
    </>
  );
}





export default Dashboard;
