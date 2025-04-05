import React, { useState } from "react";
import PropTypes from "prop-types";

export const Input = React.forwardRef(({ className, label, placeholder, type = "desktop", inputType, ...props }, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={className}>
      <div className="text-primary-text text-base tracking-[0.16px] leading-4 mb-2">
        {label}
      </div>
      <div className="relative">
        <input
          ref={ref}
          className={`w-full rounded-xl ${
            type === "desktop" ? "h-[52px] px-4" : "h-[48px] px-3"
          } py-4 bg-[#f3f9fa] text-secondary-text text-base tracking-[0.16px] leading-4 outline-none`}
          placeholder={placeholder}
          type={inputType === "password" ? (showPassword ? "text" : "password") : "text"}
          {...props}
        />
        {inputType === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
          >
            <img
              src={showPassword ? "/src/assets/hide.svg" : "/src/assets/show.svg"}
              alt={showPassword ? "Hide password" : "Show password"}
              className="w-5 h-5"
            />
          </button>
        )}
      </div>
    </div>
  );
});

Input.displayName = "Input";

Input.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(["desktop", "mobile"]),
  inputType: PropTypes.oneOf(["text", "password", "email"])
};