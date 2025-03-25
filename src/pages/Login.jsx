import blind from "../assets/blind.png";
import { useRef, useState } from "react";
// import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
// import authService from "../appwrite/auth/auth";
// import { login as authLogin } from "../redux/authSlice";
import { useNavigate, NavLink } from "react-router-dom";
import blacklogoimg from "../assets/pnglogofinal-black.png";
import whitelogoimg from "../assets/pnglogofinal-white.png";

function Login() {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const refPassword = useRef(null);
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    navigate("/");
  };

  const login = async (data) => {
    // try {
    //   const session = await authService.login(data);
    //   if (session) {
    //     const userData = await authService.getCurrentUser();
    //     if (userData) dispatch(authLogin(userData));
    //     navigate("/dashboard");
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
    console.log("Login!!");
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
          <div className="border-[#959595] relative">
            <img
              src={whitelogoimg}
              alt="logo"
              onClick={handleClick}
              className="absolute hidden hover:cursor-pointer max-lg:block z-10 h-[2rem] left-[-32px] top-[-30px]"
            />
            <h2 className="text-[clamp(0.74rem,5dvw,1.5rem)] font-semibold mb-[1rem] text-white tracking-widest">
              Login
            </h2>
            <form
              onSubmit={handleSubmit(login)}
              action="#"
              className="flex flex-col"
            >
              <div className="inputBorder"></div>
              <input
                type="email"
                className="loginInput"
                placeholder="Email Address"
                autoComplete="off"
                {...register("email", {
                  required: true,
                  validate: {
                    matchPatern: (value) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                        value
                      ) || "Email address must be a valid address",
                  },
                })}
              />
              <div className="inputBorder"></div>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Password"
                  className="loginInput w-[90%]"
                  autoComplete="off"
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
                Login
              </button>
            </form>
          </div>
          <div className="text-sm text-gray-400">
            Don't have an account ?{" "}
            <NavLink to="/signup" className="text-blue-600">
              Sign up
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
