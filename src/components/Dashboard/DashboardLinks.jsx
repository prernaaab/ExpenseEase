import React, { useEffect } from "react";
// import authService from "../../appwrite/auth/auth";
// import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
// import { changeNameAndEmail } from "../../redux/NameAndEmailSlice";

function DashboardLinks() {
  const location = useLocation();
  // const dispatch = useDispatch();
  // const { name, email } = useSelector((state) => state.NameEmail);

  // useEffect(() => {
  //   authService
  //     .getCurrentUser()
  //     .then((data) =>
  //       dispatch(changeNameAndEmail({ name: data.name, email: data.email }))
  //     );
  // }, []);

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
          className={`${
            isActiveLink("/dashboard") ? "opacity-100" : "opacity-50"
          }
          `}
          end
        >
          Add expanse
        </NavLink>
        <NavLink
          to="/dashboard/expenses"
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
