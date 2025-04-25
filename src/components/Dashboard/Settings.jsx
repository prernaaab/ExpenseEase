import DashboardWrapper from "./DashBoardWrapper";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import usericon from "../../assets/usericon.svg";


// Settings Page Component
const Settings = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logout logic here
    console.log('User logged out');
    // Redirect to login page or perform other actions
  };

  return (
<<<<<<< HEAD
    <div className="dashboardParent w-full lg:w-[calc(100%-21dvw)] px-4 md:px-6 lg:px-8">
        <div className="mb-6 md:mb-10">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 break-all text-wrap">
            ExpenseEase
          </h3>
          <div className="text-[#101010] opacity-50 text-xs md:text-sm">
            01 - 25 March, 2020
=======
    <DashboardWrapper>
      <div className="mb-6 md:mb-10">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">
          ExpenseEase
        </h3>
        <div className="text-[#101010] opacity-50 text-xs md:text-sm">
          01 - 24 March, 2025
        </div>
      </div>

      <div className="w-full max-w-md bg-white rounded-lg p-6 pr-11">
        <div>
          <div className="text-xl md:text-2xl font-bold pl-2 pb-3 mb-4 border-b-[0.5px] border-[#828282]">
            Settings
          </div>
          <div className="border-t border-gray-200 pt-5">
            <div className="flex items-center mb-8">
              <div className="flex items-center justify-center bg-gray-200 rounded-[7px] w-[68.05px] h-[68.05px] p-3 mr-4">
                <img
                  src={usericon}
                  alt="User Icon"
                  className="w-[50px] h-[50px] rounded-[8px]"
                />

              </div>
              <div>
                <h3 className="text-black text-[27px]">DAX</h3>
                <p className="text-sm">daxraj1976@gmail.com</p>
              </div>
            </div>
            <div className="ml-7">
              <button className="w-full bg-[#EDF0F6] py-3 text-black rounded-[11px] mb-5">
                Manage account
              </button>
              <button className="w-full bg-[#EDF0F6] py-3 text-black rounded-[11px] mb-5">
                Change password
              </button>
              <button
                className="w-full bg-black py-3 text-white rounded-[8px] mb-3"
                onClick={handleLogout}
              >
                log out
              </button>
            </div>

>>>>>>> upstream/main
          </div>
        </div>
     
    </div>
  );
};

export default Settings;