import blind from "../assets/blind.png";
import React, { useRef, useState } from "react";
import GoogleLogo from "../assets/googlelogo.png";
import { useNavigate, NavLink } from "react-router-dom";
import blacklogoimg from "../assets/pnglogofinal-black.png";
import whitelogoimg from "../assets/pnglogofinal-white.png";

function Login() {
  const navigate = useNavigate();
  const refPassword = useRef(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    navigate("/");
  };

  const handleLogin = () => {
    navigate("/dashboard");
  };

  const handlePassword = (e) => {
    setShowPassword(!showPassword);
    showPassword
      ? (refPassword.current.type = "text")
      : (refPassword.current.type = "password");
  };

  return (
    <div className="h-[100dvh] flex">
      <div className="w-[50%] h-full max-lg:hidden">
        <img
          alt="logo"
          src={blacklogoimg}
          onClick={handleClick}
          className="ml-2 mt-2 hover:cursor-pointer h-[4rem]"
        />
      </div>
      <div className="w-full flex items-center justify-center bg-signup-bg bg-contain rounded-s-[44px] max-lg:rounded-s-none">
        <div className="my-2 w-[32rem] bg-[#6364647a] backdrop-blur-[5px] overflow-auto p-10 rounded-xl max-lg:w-[80%]">
          <div className="border-b-[1px] border-[#959595] mb-4 pb-5 relative">
            <img
              src={whitelogoimg}
              alt="logo"
              onClick={handleClick}
              className="absolute hidden hover:cursor-pointer max-lg:block z-10 h-[2rem] left-[-32px] top-[-30px]"
            />
            <h2 className="text-[clamp(0.74rem,5dvw,1.5rem)] font-semibold mb-[1rem] text-white tracking-widest">
              Create Account
            </h2>
            <button className="outline-none pl-1 pr-3 h-12 text-[clamp(0.4rem,2dvw,0.7rem)] text-white flex items-center">
              <img
                src={GoogleLogo}
                alt="logo"
                className="h-[clamp(1.6rem,2.8dvw,2.7rem)] mr-2"
              />{" "}
              Sign up with Google
            </button>
          </div>
          <form action="#" className="flex flex-col">
            <input type="text" className="loginInput" placeholder="Full Name" />
            <div className="inputBorder"></div>
            <input
              type="email"
              className="loginInput"
              placeholder="Email Address"
            />
            <div className="inputBorder"></div>
            <div className="relative">
              <input
                type="text"
                ref={refPassword}
                placeholder="Password"
                className="loginInput w-[90%]"
              />
              <img
                src={blind}
                alt="hide"
                onClick={handlePassword}
                className="absolute right-0 top-[30%] hover:cursor-pointer"
              />
            </div>
            <div className="inputBorder"></div>
            <button
              onClick={handleLogin}
              className="bg-[#DEDEDE] my-7 text-black font-bold text-[clamp(0.74rem,5dvw,1.1rem)] rounded-md h-[2.3rem]"
            >
              Create Account
            </button>
          </form>
          <div className="text-sm text-gray-400">
            Already have an account ?{" "}
            <NavLink to="/login" className="text-blue-600">
              Log in
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
