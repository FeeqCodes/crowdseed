import DisplayCampaigns from '@/app/components/DisplayCampaigns';
import Sidebar from '@/app/components/Sidebar'
import React from 'react'

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