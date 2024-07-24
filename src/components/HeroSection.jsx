import React from "react";

function HeroSection() {
    return (
        <div className="flex h-[39rem]">
            <div className="flex w-full bg-[#191919] justify-center items-center">
                <div className="w-[70%]">
                    <h1 className="text-white text-5xl font-bold mb-2 leading-tight">Track Your Expenses with Ease</h1>
                    <p className="text-white opacity-50 mt-3 mb-7">
                        Take control of your finances and stay
                        on top of your expenses with our intuitive and
                        user-friendly expense tracker web app.
                    </p>
                    <button className="bg-white text-black w-52 font-semibold py-3 rounded-md">Get Started</button>
                </div>
            </div>
            <div className="bg-[#191919] opacity-80 w-full"></div>
        </div>
    )
}

export default HeroSection;