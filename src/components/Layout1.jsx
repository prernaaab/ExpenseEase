import React, { useEffect } from "react";
import authService from "../appwrite/auth/auth";
import { Outlet, useNavigate } from "react-router-dom";
import { DashboardLinks, ExpenseDetails } from "./index";

export default function layout() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        if (!authService.getCurrentUser()) {
          navigate("/"); // Redirect if not authenticated
          return;
        }
      } catch (error) {
        console.error("An unexpected error occurred:", error);
      } finally {
        console.log();
      }
    };

    checkAuthentication();
  }, [navigate]);

  return (
    <div className="bg-black max-h-[100dvh]">
      <div className="flex lg:py-[2.67dvh] lg:px-3">
        <DashboardLinks />
        <div className="bg-white w-full max-md:flex-col max-md:items-center flex justify-between lg:rounded-3xl max-lg:h-[100dvh] lg:h-[94.65dvh]">
          <Outlet />
          <ExpenseDetails />
        </div>
      </div>
    </div>
  );
}
