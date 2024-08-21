import React from "react";
import Marquee from "react-fast-marquee";

export default function MarqueeEffect({ item }) {
  const halfIndex = Math.ceil(item.length / 2); // Calculate the halfway point
  const firstHalf = item.slice(0, halfIndex); // Get the first half
  const secondHalf = item.slice(halfIndex); // Get the second half

  return (
    <>
      <Marquee autoFill pauseOnHover>
        {firstHalf.map((items) => {
          return (
            <div
              className="flex-none p-4 m-3 bg-[#F8F8F8] rounded-lg h-full"
              key={items.name}
            >
              <div className="font-bold mb-2">{items.name}</div>
              <div className="max-w-[22.27rem]">{items.feedback}</div>
            </div>
          );
        })}
      </Marquee>
      <Marquee autoFill pauseOnHover direction="right">
        {secondHalf.map((items) => {
          return (
            <div
              className="flex-none p-4 m-3 bg-[#F8F8F8] rounded-lg h-full"
              key={items.name}
            >
              <div className="font-bold mb-2">{items.name}</div>
              <div className="max-w-[22.27rem]">{items.feedback}</div>
            </div>
          );
        })}
      </Marquee>
    </>
  );
}
