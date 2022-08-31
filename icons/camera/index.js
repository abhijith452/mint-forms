import React from "react";

function CameraIcon({...rest}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      {...rest}
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M14.31 8L20.05 17.94"></path>
      <path d="M9.69 8L21.17 8"></path>
      <path d="M7.38 12L13.12 2.06"></path>
      <path d="M9.69 16L3.95 6.06"></path>
      <path d="M14.31 16L2.83 16"></path>
      <path d="M16.62 12L10.88 21.94"></path>
    </svg>
  );
}

export default CameraIcon;
