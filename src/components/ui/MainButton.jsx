import React from "react";
import PropTypes from "prop-types";

export const MainButton = ({ className, text, type = "desktop", ...props }) => {
  return (
    <button
      className={`w-full rounded-xl bg-[#1d4ae8] ${
        type === "desktop" ? "h-[52px]" : "h-[48px]"
      } text-white font-medium text-base tracking-[0.16px] leading-4 ${className}`}
      {...props}
    >
      {text}
    </button>
  );
};

MainButton.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["desktop", "mobile"])
};