import React from "react";
import { Input } from "../components/ui/Input";
import { MainButton } from "../components/ui/MainButton";
import { useForm } from "react-hook-form";
import { useNavigate, NavLink } from "react-router-dom";
import LoginArt from "../assets/LoginArt.png";

function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const login = async (data) => {
    console.log("Login!!", data);
  };

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

            <form onSubmit={handleSubmit(login)} className="space-y-6">
              <Input
                label="Email"
                placeholder="Example@email.com"
                type="desktop"
                inputType="email"
                {...register("email", {
                  required: true,
                  validate: {
                    matchPatern: (value) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                      "Email address must be a valid address",
                  },
                })}
              />
              <Input
                label="Password"
                placeholder="At least 8 characters"
                type="desktop"
                inputType="password"
                {...register("password", { required: true })}
              />
              <div className="flex justify-end">
                <span className="text-link text-sm cursor-pointer hover:underline">
                  Forgot Password?
                </span>
              </div>
              <MainButton text="Log in" type="desktop" />
            </form>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-px bg-gray-200 flex-1" />
                <span className="text-primary-text">Or</span>
                <div className="h-px bg-gray-200 flex-1" />
              </div>

              <div className="space-y-4">
                <button className="w-full flex items-center justify-center gap-4 py-3 bg-[#f3f9fa] rounded-xl hover:bg-[#e5f0f2] transition-colors">
                  <span className="text-secondary-text">Sign in with Google</span>
                </button>
                <button className="w-full flex items-center justify-center gap-4 py-3 bg-[#f3f9fa] rounded-xl hover:bg-[#e5f0f2] transition-colors">
                  <span className="text-secondary-text">Sign in with Apple</span>
                </button>
              </div>
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

          <div className="self-stretch h-[548px] px-6 flex flex-col justify-start items-start gap-6">
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

            <form onSubmit={handleSubmit(login)} className="self-stretch flex flex-col justify-center items-end gap-4">
              <Input
                label="Email"
                placeholder="Example@email.com"
                type="mobile"
                inputType="email"
                className="self-stretch"
                {...register("email", {
                  required: true,
                  validate: {
                    matchPatern: (value) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                      "Email address must be a valid address",
                  },
                })}
              />
              <Input
                label="Password"
                placeholder="At least 8 characters"
                type="mobile"
                inputType="password"
                className="self-stretch"
                {...register("password", { required: true })}
              />
              <div className="self-end">
                <span className="text-link text-sm cursor-pointer hover:underline">
                  Forgot Password?
                </span>
              </div>
              <MainButton text="Log in" type="mobile" className="self-stretch" />
            </form>

            <div className="self-stretch pt-2 flex flex-col justify-start items-start gap-4">
              <div className="self-stretch py-2.5 inline-flex justify-center items-center gap-4">
                <div className="flex-1 h-px bg-slate-300"></div>
                <div className="text-center text-slate-700 text-sm font-normal leading-none tracking-tight whitespace-nowrap">
                  Or sign in with
                </div>
                <div className="flex-1 h-px bg-slate-300"></div>
              </div>

              <div className="self-stretch grid grid-cols-2 gap-4">
                <button className="w-full px-2 py-2 bg-slate-100 rounded-xl flex justify-center items-center gap-2">
                  <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_177_11)">
                      <path d="M24.266 12.2764C24.266 11.4607 24.1999 10.6406 24.0588 9.83807H12.74V14.4591H19.2217C18.9528 15.9494 18.0885 17.2678 16.823 18.1056V21.1039H20.69C22.9608 19.0139 24.266 15.9274 24.266 12.2764Z" fill="#4285F4"/>
                      <path d="M12.74 24.0008C15.9764 24.0008 18.7058 22.9382 20.6944 21.1039L16.8274 18.1055C15.7516 18.8375 14.3626 19.252 12.7444 19.252C9.61376 19.252 6.95934 17.1399 6.00693 14.3003H2.01648V17.3912C4.05359 21.4434 8.20277 24.0008 12.74 24.0008Z" fill="#34A853"/>
                      <path d="M6.00253 14.3003C5.49986 12.8099 5.49986 11.1961 6.00253 9.70575V6.61481H2.01649C0.31449 10.0056 0.31449 14.0004 2.01649 17.3912L6.00253 14.3003Z" fill="#FBBC04"/>
                      <path d="M12.74 4.74966C14.4508 4.72321 16.1043 5.36697 17.3433 6.54867L20.7694 3.12262C18.6 1.08551 15.7207 -0.034466 12.74 0.000808666C8.20277 0.000808666 4.05359 2.55822 2.01648 6.61481L6.00252 9.70575C6.95052 6.86173 9.60935 4.74966 12.74 4.74966Z" fill="#EA4335"/>
                    </g>
                  </svg>
                  <span className="text-slate-700 text-base font-normal leading-none tracking-tight">
                    Google
                  </span>
                </button>

                <button className="w-full px-2 py-2 bg-slate-100 rounded-xl flex justify-center items-center gap-2">
                  <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_177_45)">
                      <path d="M12.3552 5.72804C13.6988 5.72804 14.8776 5.20388 15.8914 4.15553C16.9052 3.10719 17.4121 1.88815 17.4121 0.498414C17.4121 0.345782 17.4 0.128883 17.3759 -0.152283C17.1989 -0.128183 17.0661 -0.1081 16.9776 -0.092033C15.7385 0.0846995 14.6483 0.691213 13.7069 1.72748C12.7655 2.76378 12.2948 3.87237 12.2948 5.05327C12.2948 5.18981 12.3149 5.41477 12.3552 5.72804ZM17.1707 24.1523C18.1282 24.1523 19.1862 23.4976 20.3448 22.1882C21.5035 20.8787 22.3885 19.3404 23 17.5731C20.723 16.4002 19.5845 14.7172 19.5845 12.5242C19.5845 10.6926 20.5057 9.12612 22.3483 7.82473C21.069 6.2261 19.3793 5.42679 17.2793 5.42679C16.3942 5.42679 15.5856 5.55934 14.8535 5.82444L14.3948 5.99314L13.7793 6.23414C13.377 6.38677 13.0109 6.46311 12.681 6.46311C12.4236 6.46311 12.0856 6.37472 11.6672 6.19799L11.1965 6.00519L10.75 5.82444C10.0983 5.55131 9.39827 5.41474 8.65001 5.41474C6.64656 5.41474 5.03737 6.08954 3.82242 7.43913C2.60746 8.7887 2 10.5681 2 12.7772C2 15.8861 2.97355 18.758 4.92069 21.3929C6.27242 23.2325 7.50748 24.1523 8.62586 24.1523C9.10059 24.1523 9.57127 24.0599 10.0379 23.8751L10.6293 23.6341L11.1 23.4654C11.7598 23.2325 12.3672 23.116 12.9224 23.116C13.5098 23.116 14.1856 23.2646 14.95 23.5618L15.3241 23.7064C16.1046 24.0037 16.7201 24.1523 17.1707 24.1523Z" fill="black"/>
                    </g>
                  </svg>
                  <span className="text-slate-700 text-base font-normal leading-none tracking-tight">
                    Apple
                  </span>
                </button>
              </div>
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
