import React from "react";

function TaskIcon({...rest}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...rest}
    >
      <path
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M11 19.5h10M11 12.5h10M11 5.5h10M3 5.5l1 1 3-3M3 12.5l1 1 3-3M3 19.5l1 1 3-3"
      ></path>
    </svg>
  );
}

export default TaskIcon;
