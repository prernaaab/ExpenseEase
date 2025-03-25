import blind from "../assets/blind.png";
// import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
// import { login } from "../redux/authSlice";
// import authService from "../appwrite/auth/auth";
import { useNavigate, NavLink } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";
import blacklogoimg from "../assets/pnglogofinal-black.png";
import whitelogoimg from "../assets/pnglogofinal-white.png";

function Login() {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  const refPassword = useRef(null);
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    navigate("/");
  };

  const create = async (data) => {
    // setError("");
    // try {
    //   const newUserData = await authService.createAccount(data);
    //   if (newUserData) {
    //     const currentUser = await authService.getCurrentUser();
    //     if (currentUser) dispatch(login(currentUser));
    //     navigate("/dashboard");
    //   }
    // } catch (error) {
    //   setError(error.message);
    // }
    console.log(1);
  };

  const handlePassword = () => {
    setShowPassword(!showPassword);
    if (refPassword.current) {
      refPassword.current.type = showPassword ? "password" : "text";
    }
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
          </div>
          <form
            onSubmit={handleSubmit(create)}
            action="#"
            className="flex flex-col"
          >
            <input
              type="text"
              className="loginInput"
              autoComplete="off"
              placeholder="Full Name"
              {...register("name", { required: true })}
            />
            <div className="inputBorder"></div>
            <input
              type="email"
              autoComplete="off"
              className="loginInput"
              placeholder="Email Address"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <div className="inputBorder"></div>
            <div className="relative">
              <input
                type="password"
                autoComplete="off"
                placeholder="Password"
                className="loginInput w-[90%]"
                {...register("password", { required: true })}
                ref={(e) => {
                  register("password", { required: true }).ref(e);
                  refPassword.current = e;
                }}
              />
              <img
                src={blind}
                alt="hide"
                onClick={handlePassword}
                className="absolute right-0 top-[30%] hover:cursor-pointer"
              />
            </div>
            <div className="inputBorder"></div>
            <button className="bg-[#DEDEDE] my-7 text-black font-bold text-[clamp(0.74rem,5dvw,1.1rem)] rounded-md h-[2.3rem]">
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
