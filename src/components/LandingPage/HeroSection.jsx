import React from "react";
import heroImgs from "../../images";
import ImgMarquee from "./ImageMarquee";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/signup");
  };

  return (
    <div className="flex h-[100dvh]">
      <div className="flex w-full bg-[#191919] justify-center items-center">
        <div className="w-[70%]">
          <h1 className="text-white text-[3.40rem] font-bold mb-2 leading-tight tracking-[-3px] max-sm:text-3xl max-sm:tracking-[1px]">
            Track Your Expenses with Ease
          </h1>
          <p className="text-white opacity-50 mt-3 mb-7">
            Take control of your finances and stay on top of your expenses with
            our intuitive and user-friendly expense tracker web app.
          </p>
          <button
            className="bg-white text-black w-52 max-sm:w-40 font-bold py-3 rounded-md text-lg"
            onClick={handleClick}
          >
            Get Started
          </button>
        </div>
      </div>
      <div className=" w-full overflow-hidden max-xl:hidden">
        <ImgMarquee images={heroImgs} />
      </div>
    </div>
  );
}

export default HeroSection;
