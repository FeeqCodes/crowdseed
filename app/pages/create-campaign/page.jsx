'use client'

import CustomButton from "@/app/components/CustomButton";
import FormField from "@/app/components/FormField";
import Sidebar from "@/app/components/Sidebar";
import React from "react";





 const CreateCampaign = () => {
  return (
    <>
      <div className="my-5 w-[95vw] max-w-[1280px] m-auto flex justify-between gap-10">
        <Sidebar />
        <div
          style={{
            backgroundImage:
              "radial-gradient(at 80% 100%, rgb(0,80,255) 0, transparent 100%),radial-gradient(at 20% 100%, rgb(185,35,255) 0, transparent 100%)",
          }}
          className="text-white flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4"
        >
          {/* {isLoading && <Loader />} */}
          <div className="justify-center flex items-center p-[16px] sm:min-w-[380px] bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 rounded-[10px] ">
            <h1 className="font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">
              Start a Campaign
            </h1>
          </div>
          <form
            // onSubmit={handleSubmit}
            className="w-full mt-[65px] flex flex-col gap-[30px]"
          >
            <div className="flex flex-wrap gap-[40px]">
              <FormField
                labelName="Campaign Title *"
                placeholder="Write a title"
                inputType="text"
                // value={createCampaignForm.title}
                handleChange={(e) => handleFormFieldChange("title", e)}
              />
              <FormField
                labelName="Goal *"
                placeholder="ETH 0.5"
                inputType="number"
                // value={createCampaignForm.target}
                handleChange={(e) => handleFormFieldChange("target", e)}
              />
            </div>
            <FormField
              labelName="Story *"
              placeholder="Write a compelling Story"
              inputType="text"
              // value={createCampaignForm.description}
              isTextArea={true}
              handleChange={(e) => handleFormFieldChange("description", e)}
            />
            <div className="flex w-full justify-start items-center p-4 bg-[#8c6dfd] h-[120px] rounded-[10px]">
              <img
                src="/assets/money.svg"
                alt="money"
                className="w-[40px] h-[40px] object-contain"
              />
              <h4 className="font-bold text-[25px] text-white ml-[20px]">
                You will get 100% of the raised amount
              </h4>
            </div>
            <div className="flex flex-wrap gap-[40px]">
              <FormField
                labelName="End Date *"
                placeholder="End Date"
                inputType="date"
                // value={createCampaignForm.deadline}
                handleChange={(e) => handleFormFieldChange("deadline", e)}
              />
              <FormField
                labelName="Campaign Image *"
                placeholder="Place image URL of your campaign"
                inputType="url"
                // value={createCampaignForm.image}
                handleChange={(e) => handleFormFieldChange("image", e)}
              />
              <div className="flex justify-center items-center mt-[30px]">
                <CustomButton
                  btnType="submit"
                  title="Create Campaign"
                  styles="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};


export default CreateCampaign