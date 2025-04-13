import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import vector from "../../images/vector.svg";
import settings from "../../images/setting.svg";
import expenses from "../../images/expense.svg";
import summary from "../../images/summary.svg";
import budget from "../../images/budget.svg";


function DashboardLinks() {
  const location = useLocation();

  const navLinks = [
    { path: "/dashboard", icon: vector, label: "Add expense" },
    { path: "/dashboard/expenses", icon: expenses, label: "Expenses" },
    { path: "/dashboard/Summary", icon: summary, label: "Summary" },
    { path: "/dashboard/Accounts", icon: budget, label: "Set Budget" },
    { path: "/dashboard/Settings", icon: settings, label: "Settings" },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="text-white mt-14 mx-[3dvw] w-[20dvw] max-lg:hidden">
        <div className="bg-white h-12 w-12 rounded-md mb-3"></div>
        <h3 className="text-2xl font-bold mb-1">name</h3>
        <div className="text-[14px] mb-24 text-white opacity-50 text-wrap break-all">
          email
        </div>
        <div className="flex flex-col gap-6 mt-10 text-xl font-bold text-white">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center ${isActive ? "opacity-100" : "opacity-50"}`
              }
              end={link.path === "/dashboard"}
            >
              <img
                src={link.icon}
                alt={`${link.label} Icon`}
                className="w-6 h-6 mr-3"
              />
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-black py-4 px-6 flex justify-between items-center z-50">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `flex flex-col items-center ${isActive ? "opacity-100" : "opacity-50"}`
            }
            end={link.path === "/dashboard"}
          >
            <img
              src={link.icon}
              alt={`${link.label} Icon`}
              className="w-6 h-6 mb-1"
            />
            <span className="text-white text-xs">{link.label}</span>
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default DashboardLinks;
