import React from "react";

const Button = ({ variant = "solid", children = "Press me", ...rest }) => {
  //solid,outline,ghost
  let className;
  if (variant === "solid") {
    className = "bg-blue-800 text-white py-2 px-4";
  } else if (variant === "outline") {
    className = "bg-white border border-blue-600 text-blue-600 py-2 px-4";
  } else if (variant === "ghost") {
    className = "bg-white border text-blue-600 py-2 px-4";
  } else {
    className = "bg-blue-800 text-white py-2 px-4";
  }

  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
};

export default Button;
