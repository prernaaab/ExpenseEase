import React from "react";
import img1 from "../../assets/Illustration-1.png";
import img2 from "../../assets/Illustration-2.png";

export default function ExpenseDetails() {
  return (
    <div className="bg-[#F9FAFC] w-full lg:w-[21dvw] min-h-screen lg:min-h-[94.65dvh] lg:fixed lg:right-3 lg:top-[2.67dvh] flex flex-col justify-between lg:rounded-3xl overflow-y-auto">
      <div className="p-6 lg:py-8">
        <div className="mb-6">
          <h3 className="text-lg md:text-xl lg:text-[clamp(16px,1.4dvw,21px)] font-semibold">
            Where your money go?
          </h3>
        </div>
        <div className="space-y-4">
          {/* Expense progress bars will go here */}
        </div>
      </div>

      <div className="p-6 lg:pb-8">
        <div className="rounded-lg bg-[#EDF0F6] p-4 lg:p-5 relative">
          <div className="flex justify-between mb-4">
            <img
              src={img1}
              alt="img"
              className="h-16 md:h-20 lg:h-[4dvw] -mt-8 object-contain"
            />
            <img
              src={img2}
              alt="img"
              className="h-20 md:h-24 lg:h-[5.5dvw] -mt-12 object-contain"
            />
          </div>
          <div className="flex flex-col gap-y-3">
            <h3 className="font-semibold text-base md:text-lg lg:text-[clamp(14px,1.3dvw,24px)]">
              Save more money
            </h3>
            <p className="text-sm md:text-base lg:text-[clamp(12px,1dvw,20px)]">
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim.
            </p>
            <button className="bg-[#101010] text-white text-xs md:text-sm lg:text-[clamp(12px,1dvw,14px)] rounded-md font-semibold tracking-wider py-3 w-full">
              VIEW TIPS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
