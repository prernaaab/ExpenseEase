import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import vector from "../../images/vector.svg";
import accounts from "../../images/accounts.svg";
import settings from "../../images/setting.svg";
import expenses from "../../images/expense.svg";
import summary from "../../images/summary.svg";
import { s } from "framer-motion/client";
// import { changeNameAndEmail } from "../../redux/NameAndEmailSlice";

function DashboardLinks() {
  const location = useLocation();


  const isActiveLink = (path) => {
    return location.pathname.replace(/\/$/, "") === path.replace(/\/$/, "");
  };

  return (
    <div className="text-white mt-14 mx-[3dvw] w-[20dvw] max-lg:hidden">
      <div className="bg-white h-12 w-12 rounded-md mb-3"></div>
      <h3 className="text-2xl font-bold mb-1">name</h3>
      <div className="text-[14px] mb-24 text-white opacity-50 text-wrap break-all">
        email
      </div>
      <div className="flex flex-col gap-6 mt-10 text-xl font-bold text-white">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center ${
              isActive ? "opacity-100" : "opacity-50"
            }`
          }
          end
        >
          <img
            src={vector}
            alt="Add Expense Icon"
            className="w-6 h-6 mr-3"
          />
          Add expense
        </NavLink>
        <NavLink
          to="/dashboard/expenses"
          className={({ isActive }) =>
            `flex items-center ${
              isActive ? "opacity-100" : "opacity-50"
            }`
          }
        >
          <img
            src={expenses}
            alt="Expenses Icon"
            className="w-6 h-6 mr-3"
          />
          Expenses
        </NavLink>
        <NavLink
          to="/dashboard/Summary"
          className={({ isActive }) =>
            `flex items-center ${
              isActive ? "opacity-100" : "opacity-50"
            }`
          }
        >
          <img
            src={summary}
            alt="Summary Icon"
            className="w-6 h-6 mr-3"
          />
          Summary
        </NavLink>
        <NavLink
          to="/dashboard/Accounts"
          className={({ isActive }) =>
            `flex items-center ${
              isActive ? "opacity-100" : "opacity-50"
            }`
          }
        >
          <img
            src={accounts}
            alt="Accounts Icon"
            className="w-6 h-6 mr-3"
          />
          Accounts
        </NavLink>
        <NavLink
          to="/dashboard/Settings"
          className={({ isActive }) =>
           `flex items-center ${
              isActive ? "opacity-100" : "opacity-50"
            }`
          }
        >
          <img
            src={settings}
            alt="Settings Icon"
            className="w-6 h-6 mr-3"
          />
          Settings
        </NavLink>
      </div>
    </div>
  );
}

export default DashboardLinks;
