import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, active, linkto }) => {
  return (
    <Link to={linkto}>
      <div
        className={`text-center text-[14px] px-5 py-3 rounded-md font-bold
      ${active ? "bg-yellow-500 text-black" : "bg-richblack-800"}
      hover:scale-95 transition-all duration-200 cursor-pointer
      `}
      >
        {children}
      </div>
    </Link>
  );
};

export default Button;
