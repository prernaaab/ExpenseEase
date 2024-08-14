import React from "react";
import { NavLink } from "react-router-dom";

function DashboardLinks() {
  return (
    <div className="text-white mt-14 ml-16 mr-11">
      <div className="bg-white h-12 w-12 rounded-md mb-3"></div>
      <h3 className="text-2xl font-bold mb-1">Harshil</h3>
      <div className="text-[14px] mb-24 text-white opacity-50">
        chaurasiyaharshil7705@gmail.com
      </div>
      <div className="flex flex-col gap-6 mt-10 text-xl font-bold text-white">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `${isActive ? "opacity-100" : "opacity-50"}`
          }
          end
        >
          Add expanse
        </NavLink>
        <NavLink
          to="/dashboard/Expenses"
          className={({ isActive }) =>
            `${isActive ? "opacity-100" : "opacity-50"}`
          }
        >
          Expenses
        </NavLink>
        <NavLink
          to="/dashboard/Summary"
          className={({ isActive }) =>
            `${isActive ? "opacity-100" : "opacity-50"}`
          }
        >
          Summary
        </NavLink>
        <NavLink
          to="/dashboard/Accounts"
          className={({ isActive }) =>
            `${isActive ? "opacity-100" : "opacity-50"}`
          }
        >
          Accounts
        </NavLink>
        <NavLink
          to="/dashboard/Settings"
          className={({ isActive }) =>
            `${isActive ? "opacity-100" : "opacity-50"}`
          }
        >
          Settings
        </NavLink>
      </div>
    </div>
  );
}

export default DashboardLinks;
