import FAQ from "./components/FAQ";
import React, { useState } from "react";
import Feedback from "./components/Feedback";
import Portfolio from "./components/portfolio";
import HeroSection from "./components/HeroSection";
import Contects_Form from "./components/contacts&form";

function App() {
  const [features, setFeatures] = useState([
    {
      heading: "Expense Categorisation",
      para: "Effortlessly categorize your expenses for better organization.",
    },
    {
      heading: "Budget Tracking",
      para: "Stay on top of your finances by tracking your budget in real-time.",
    },
    {
      heading: "Reporting",
      para: "Generate detailed reports to gain insights into your spending habits.",
    },
  ]);

  const [work, setWork] = useState([
    {
      heading: "Step 1: Add Expenses",
      para: "Start by adding your expenses to the app. Enter the amount, category, and date of each expense.",
    },
    {
      heading: "Step 2: Set Budgets",
      para: "Set budgets for different expense categories to help you stay on track. The app will notify you when you're close to reaching your budget limit.",
    },
    {
      heading: "Step 3: Generate Reports",
      para: "Generate reports to get a clear overview of your expenses. Analyze your spending patterns and make informed financial decisions.",
    },
  ]);

  return (
    <div>
      <HeroSection />
      <div className="mx-24 my-16">
        <h2 className="text-5xl font-extrabold mb-2">Key Features</h2>
        <div className="opacity-60 mb-7">
          Discover the powerful features of our expense tracker web app.
        </div>
        <div className="flex gap-2 flex-wrap">
          {features.map((items) => {
            return (
              <div
                className="bg-[#F8F8F8] px-5 py-3 flex-grow rounded-md"
                key={items.heading}
              >
                <h3 className="text-2xl font-extrabold mb-1">
                  {items.heading}
                </h3>
                <div className="text-[15px] opacity-50 w-80">{items.para}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mx-24 my-16">
        <h2 className="text-5xl font-extrabold mb-2">How it works</h2>
        <div className="opacity-60 mb-7">
          Learn how to use the expense tracker web app with this step-by-step
          guide.
        </div>
        <div className="flex overflow-hidden">
          {work.map((items) => {
            return (
              <div key={items.para} className="w-full even:mx-2">
                <div className="flex items-center flex-grow relative mb-3">
                  <div className="bg-black text-white py-4 px-6 rounded-full text-xl font-bold">
                    {work.indexOf(items) + 1}
                  </div>
                  <div className="bg-black w-[24.8rem] h-[1px] absolute left-14"></div>
                </div>
                <div className="w-[27.5rem] flex flex-col">
                  <div className="bg-[#F8F8F8] px-5 py-3 rounded-2xl">
                    <h3 className="text-[1.6rem] font-extrabold">
                      {items.heading}
                    </h3>
                    <div className="text-[16px] opacity-50 w-[19.87rem]">
                      {items.para}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Portfolio />
      <Feedback />
      <FAQ />
      <Contects_Form />
    </div>
  );
}

export default App;
