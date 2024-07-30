import React from "react";
import GoogleLogo from "../assets/googlelogo.png";

function Login() {
  return (
    <div className="bg-[#0D0D0D] h-[100dvh] flex">
      <div className="w-[50%] h-full"></div>
      <div className="bg-[#EDECE6] w-full flex items-center justify-center rounded-s-[2rem]">
        <div className="my-2 w-[30rem]">
          <div>
            <h2 className="text-xl font-semibold mb-[1rem] tracking-widest">
              Create Account
            </h2>
            <button className="outline-none border-none bg-[#efefef] rounded-lg pl-1 pr-3 h-12 text-xs text-[#5A5A5A] flex items-center">
              <img src={GoogleLogo} alt="logo" className="h-[32px]" /> Sign up
              with Google
            </button>
          </div>
          <div className="text-[#A3A3A3] text-center text-lg my-7">
            {" "}
            - OR -{" "}
          </div>
          <form action="#" className="flex flex-col">
            <input type="text" className="loginInput" placeholder="Full Name" />
            <input
              type="email"
              className="loginInput my-6"
              placeholder="Email Address"
            />
            <input
              type="Password"
              className="loginInput"
              placeholder="Password"
            />
            <button className="bg-[#0D0D0D] my-7 text-white font-semibold rounded-md h-[2.3rem]">
              Create Account
            </button>
          </form>
          <div className="text-sm">
            Already have an account ?{" "}
            <a href="/" className="text-blue-600">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
