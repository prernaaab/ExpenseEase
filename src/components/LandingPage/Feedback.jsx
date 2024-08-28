import Marquee from "./MarqueeEffect";
import React, { useEffect, useState } from "react";

function Feedback() {
  const [feedbacks, setFeedbacks] = useState([
    {
      fullname: "John Smith",
      feedback:
        "I have been using the expense tracker web app for a few months now and it has completely transformed the way I manage my finances. It is so easy to use and has helped me save a lot of money. Highly recommended!",
    },
    {
      fullname: "Emily Johnson",
      feedback:
        "The expense tracker web app has been a game-changer for me. It has made budgeting and tracking my expenses so much simpler. I love how it categorizes my expenses and provides insightful reports. It has definitely improved my financial management skills.",
    },
    {
      fullname: "Michael Davis",
      feedback:
        "I can't imagine my life without the expense tracker web app now. It has made me more aware of my spending habits and has helped me cut down on unnecessary expenses. It's user-friendly interface and intuitive features make it a must-have tool for anyone looking to take control of their finances.",
    },
    {
      fullname: "Sarah Thompson",
      feedback:
        "I have tried several expense tracker apps in the past, but none of them compare to this one. The expense tracker web app is by far the best I have come across. It is reliable, accurate, and has all the features I need to effectively manage my expenses. I highly recommend it to anyone looking for a reliable expense tracker.",
    },
    {
      fullname: "David Wilson",
      feedback:
        "I have been using the expense tracker web app for over a year now and it has been a game-changer for me. It has helped me save money, stay on top of my bills, and achieve my financial goals. I love how easy it is to use and the insightful reports it provides. I can't imagine managing my finances without it.",
    },
  ]);

  useEffect(() => {
    const newFeedback = JSON.parse(localStorage.getItem("feedback"));
    if (newFeedback) {
      setFeedbacks((prev) => [
        ...prev,
        { fullname: newFeedback.fullname, feedback: newFeedback.feedback },
      ]);
    }
  }, []);

  return (
    <div className="mx-24 max-xl:mx-[10%]">
      <h2 className="font-extrabold text-5xl max-w-[28rem] mb-4 max-lg:text-5xl">
        What our users are saying
      </h2>
      <div className="text-[1.057rem] opacity-50 w-4/6 max-w-[36rem] mb-10">
        Read what our satisfied users have to say about their experience with
        our expense tracker web app.
      </div>
      <Marquee item={feedbacks} />
    </div>
  );
}

export default Feedback;
