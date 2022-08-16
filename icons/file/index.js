
import React from "react";

function Icon(  {...rest}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M22 10v5c0 5-2 7-7 7H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h5"
      ></path>
      <path
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M22 10h-4c-3 0-4-1-4-4V2l8 8zM7 13h6M7 17h4"
      ></path>
    </svg>
  );
}

export default Icon;
