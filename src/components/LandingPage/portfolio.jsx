import React, { useState } from "react";
import imgCard1 from "../../images/first.jpeg";
import imgCard2 from "../../images/second.jpeg";
import imgCard3 from "../../images/third.jpeg";

function Portfolio() {
  const [portfolio, setPortfolio] = useState([
    {
      photo: imgCard1,
      heading: "Better Financial Management",
      para: `Our app provides you with a comprehensive
            overview of your expenses, allowing you to
            track your spending habits and make informed financial decisions.`,
    },
    {
      photo: imgCard2,
      heading: "Expense Tracking on the Go",
      para: `With our app, you can easily track
            your expenses anytime, anywhere. Whether
            you're at home or on the go, you'll always have access to your financial data.`,
    },
    {
      photo: imgCard3,
      heading: "Save Time and Effort",
      para: `Gone are the days of manually recording
            your expenses. Our app automates the process,
            saving you time and effort. Simply input your 
            expenses, and let our app handle the rest.`,
    },
  ]);
  return (
    <div className="mx-24 max-lg:mx-[15%] my-32">
      <div className="my-9">
        <h2 className="font-extrabold text-4xl sm:max-w-96 leading-snug mb-3 max-sm:text-[clamp(20px,6dvw,10rem)]">
          Why Choose Our Expense Tracker Web App?
        </h2>
        <div className="max-w-[34.5rem]">
          Our expense tracker web app offers a range of benefits that can help
          you better manage your finances and save time and effort. Here are
          some reasons why you should choose our app:
        </div>
      </div>
      <div className="flex gap-3 justify-center flex-wrap">
        {portfolio.map((items) => {
          return (
            <div key={items.heading} className="bg-[#F8F8F8] p-4 rounded-xl">
              <img
                src={items.photo}
                alt="img"
                className="w-[18rem] max-sm:w-full rounded-lg mb-4"
              />
              <div className="font-bold text-xl max-w-[17rem]">
                {items.heading}
              </div>
              <div className="max-w-[16.2rem] text-sm opacity-50">
                {items.para}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
