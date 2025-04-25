import React from "react";
import { SignUp as ClerkSignUp } from "@clerk/clerk-react";
import { NavLink } from "react-router-dom";
import LoginArt from "../assets/LoginArt.png";

export default function SignUp() {
  return (
    <div className="h-screen">
      {/* Desktop View */}
      <div className="hidden md:flex h-full">
        <div className="w-1/2 flex items-center justify-center">
          <div className="w-[388px] space-y-8">
            <div>
              <h1 className="text-3xl text-primary-text tracking-tight">
                Create Account <span>✨</span>
              </h1>
            </div>
            
            <ClerkSignUp 
              signInUrl="/login"
              appearance={{
                elements: {
                  formButtonPrimary: "bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl w-full",
                  formFieldInput: "rounded-xl border border-gray-200 p-3 w-full",
                  card: "p-6 shadow-none w-full",
                  footer: "text-center"
                },
                variables: {
                  colorPrimary: "#3B82F6",
                  borderRadius: "0.75rem"
                }
              }}
            />

            <div className="text-center">
              <p className="text-[#313957]">
                Already have an account?{" "}
                <NavLink to="/login" className="text-link hover:underline">
                  Log in
                </NavLink>
              </p>
            </div>

            <div className="text-center">
              <p className="text-sm text-[#959cb5]">©️ 2025 ALL RIGHTS RESERVED</p>
            </div>
          </div>
        </div>

        <div className="w-1/2 h-full">
          <img
            className="w-full h-full object-cover"
            alt="Login art"
            src={LoginArt}
          />
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex md:hidden flex-col">
        <div className="py-6 bg-white inline-flex flex-col justify-start items-center gap-7 overflow-hidden">
          <div className="self-stretch px-6 flex flex-col items-center gap-2.5">
            <img
              className="w-full h-44 rounded-xl object-cover"
              alt="Login art"
              src={LoginArt}
            />
          </div>

          <div className="self-stretch px-6 flex flex-col justify-start items-start gap-6">
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div className="self-stretch justify-center">
                <span className="text-gray-900 text-2xl font-semibold leading-normal tracking-tight">
                  Create Account
                </span>
                <span className="text-gray-900 text-2xl font-normal leading-normal tracking-tight">
                  {" "}
                  ✨
                </span>
              </div>
            </div>

            <div className="self-stretch">
              <ClerkSignUp 
                signInUrl="/login"
                appearance={{
                  elements: {
                    formButtonPrimary: "bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl w-full",
                    formFieldInput: "rounded-xl border border-gray-200 p-3 w-full",
                    card: "p-0 shadow-none w-full",
                    footer: "text-center"
                  },
                  variables: {
                    colorPrimary: "#3B82F6",
                    borderRadius: "0.75rem"
                  }
                }}
              />
            </div>

            <div className="self-stretch text-center pt-4">
              <span className="text-slate-700 text-base font-normal leading-relaxed tracking-tight">
                Already have an account?{" "}
              </span>
              <NavLink
                to="/login"
                className="text-blue-700 text-base font-normal leading-relaxed tracking-tight hover:underline"
              >
                Log in
              </NavLink>
            </div>
          </div>

          <div className="text-center text-slate-400 text-sm font-normal leading-none tracking-tight">
            © 2025 ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </div>
  );
}