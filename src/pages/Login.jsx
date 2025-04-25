import React from "react";
import { SignIn } from "@clerk/clerk-react";
import { NavLink } from "react-router-dom";
import LoginArt from "../assets/LoginArt.png";

function Login() {
  return (
    <div className="h-screen">
      {/* Desktop View */}
      <div className="hidden md:flex h-full">
        <div className="w-1/2 flex items-center justify-center">
          <div className="w-[388px] space-y-8">
            <div>
              <h1 className="text-3xl text-primary-text tracking-tight">
                Welcome Back <span>👋</span>
              </h1>
            </div>

            <div className="w-full">
              <SignIn 
                signUpUrl="/signup"
                appearance={{
                  elements: {
                    rootBox: "w-full",
                    card: "shadow-none p-6 w-full",
                    header: "hidden",
                    footer: "hidden"
                  }
                }}
              />
            </div>

            <div className="text-center">
              <p className="text-[#313957]">
                Don't have an account?{" "}
                <NavLink to="/signup" className="text-link hover:underline">
                  Sign up
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
                  Welcome Back
                </span>
                <span className="text-gray-900 text-2xl font-normal leading-normal tracking-tight">
                  {" "}
                  👋
                </span>
              </div>
            </div>

            <div className="self-stretch">
              <SignIn 
                signUpUrl="/signup"
                appearance={{
                  elements: {
                    rootBox: "w-full",
                    card: "shadow-none p-0 w-full",
                    header: "hidden",
                    footer: "hidden"
                  }
                }}
              />
            </div>

            <div className="self-stretch text-center">
              <span className="text-slate-700 text-base font-normal leading-relaxed tracking-tight">
                Don't have an account?{" "}
              </span>
              <NavLink
                to="/signup"
                className="text-blue-700 text-base font-normal leading-relaxed tracking-tight hover:underline"
              >
                Sign up
              </NavLink>
            </div>
          </div>

          <div className="w-96 text-center text-slate-400 text-sm font-normal leading-none tracking-tight">
            © 2025 ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;