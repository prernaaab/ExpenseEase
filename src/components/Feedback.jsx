import React, { useState } from "react";

function Feedback() {
  const [feedbacks, setFeedbacks] = useState([
    {
      name: "John Smith",
      feedback:
        "I have been using the expense tracker web app for a few months now and it has completely transformed the way I manage my finances. It is so easy to use and has helped me save a lot of money. Highly recommended!",
    },
    {
      name: "Emily Johnson",
      feedback:
        "The expense tracker web app has been a game-changer for me. It has made budgeting and tracking my expenses so much simpler. I love how it categorizes my expenses and provides insightful reports. It has definitely improved my financial management skills.",
    },
    {
      name: "Michael Davis",
      feedback:
        "I can't imagine my life without the expense tracker web app now. It has made me more aware of my spending habits and has helped me cut down on unnecessary expenses. It's user-friendly interface and intuitive features make it a must-have tool for anyone looking to take control of their finances.",
    },
    {
      name: "Sarah Thompson",
      feedback:
        "I have tried several expense tracker apps in the past, but none of them compare to this one. The expense tracker web app is by far the best I have come across. It is reliable, accurate, and has all the features I need to effectively manage my expenses. I highly recommend it to anyone looking for a reliable expense tracker.",
    },
    {
      name: "David Wilson",
      feedback:
        "I have been using the expense tracker web app for over a year now and it has been a game-changer for me. It has helped me save money, stay on top of my bills, and achieve my financial goals. I love how easy it is to use and the insightful reports it provides. I can't imagine managing my finances without it.",
    },
  ]);
  return (
    <div className="mx-24">
      <h2 className="font-extrabold text-5xl max-w-[28rem] mb-4">
        What our users are saying
      </h2>
      <div className="text-[1.057rem] opacity-50 w-4/6 max-w-[36rem] mb-10">
        Read what our satisfied users have to say about their experience with
        our expense tracker web app.
      </div>
      <div className="flex flex-wrap gap-3 max-lg:justify-center">
        {feedbacks.map((items) => {
          return (
            <div
              className="w-[25rem] bg-[#F8F8F8] rounded-lg p-3 h-full"
              key={items.name}
            >
              <div className="font-bold">{items.name}</div>
              <div className="w-[22.27rem]">{items.feedback}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Feedback;
